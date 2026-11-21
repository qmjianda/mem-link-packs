#!/usr/bin/env node
/**
 * 把 Nybble format registry 的 schema 移植成 mem-link pack。
 *
 * 用法：
 *   node store/scripts/port-nybble.mjs [--root store] [--write] [--report]
 *
 * - 默认只做转换与报告，不写文件；`--write` 才写入 store/packs/<id>/。
 * - 已手工维护的 id 默认跳过（见 KEEP_MANUAL），避免覆盖更完整的 pack。
 * - `--report` 打印每个包的覆盖情况（完整 / 部分 / 跳过原因）。
 *
 * Nybble schema 支持条件字段、指针、repeat、match、computed、decode 等。
 * mem-link 的静态布局只能表达固定前缀，因此：
 *   - computed / 指针字段不占字节 → 跳过，继续；
 *   - 条件、repeat、match、变长数组、cstring → 从该字段起停止，
 *     保留前面已经确定的布局，并在注释与 meta.coverage 中标注 partial。
 *
 * 生成物只依赖固定布局，可被现有 pack 加载器校验；不要手工编辑生成文件。
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const CUSTOM_IDS = new Set([
  // 手工维护且比自动移植更完整的 pack
  'nes', 'sqlite', 'png', 'bmp', 'zip', 'gif', 'elf', 'pe', 'jpeg', 'wav',
]);

const NYBBLE_URL = 'https://github.com/itsmajdbuilds/binary-explorer-registry';

const PRIMS = {
  u8: { kind: 'u8', size: 1 },
  u16: { kind: 'u16', size: 2 },
  u32: { kind: 'u32', size: 4 },
  u64: { kind: 'u64', size: 8 },
  i8: { kind: 'i8', size: 1 },
  i16: { kind: 'i16', size: 2 },
  i32: { kind: 'i32', size: 4 },
  i64: { kind: 'i64', size: 8 },
  f32: { kind: 'f32', size: 4 },
  f64: { kind: 'f64', size: 8 },
  bool: { kind: 'bool', size: 1 },
  char: { kind: 'char', size: 1 },
};

function primOf(word) {
  if (PRIMS[word]) return { ...PRIMS[word], endian: null };
  const m = /^(u16|u32|u64|i16|i32|i64|f32|f64)(le|be)$/.exec(word);
  if (!m) return null;
  return { ...PRIMS[m[1]], endian: m[2] === 'be' ? 'big' : 'little' };
}

/* ------------------------------------------------------------------ lexer */

function lex(src) {
  const tokens = [];
  let i = 0;
  let line = 1;
  const push = (t, v) => tokens.push({ t, v, line });
  while (i < src.length) {
    const c = src[i];
    if (c === '\n') { line += 1; i += 1; continue; }
    if (c === ' ' || c === '\t' || c === '\r') { i += 1; continue; }
    if (c === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') i += 1;
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) {
        if (src[i] === '\n') line += 1;
        i += 1;
      }
      i += 2;
      continue;
    }
    if (c === '"') {
      i += 1;
      let out = '';
      while (i < src.length && src[i] !== '"') {
        if (src[i] === '\\') {
          const n = src[i + 1];
          out += n === 'n' ? '\n' : n === 't' ? '\t' : n === 'r' ? '\r' : n;
          i += 2;
          continue;
        }
        if (src[i] === '\n') line += 1;
        out += src[i];
        i += 1;
      }
      i += 1;
      push('string', out);
      continue;
    }
    if (/[A-Za-z_]/.test(c)) {
      let j = i + 1;
      while (j < src.length && /[A-Za-z0-9_]/.test(src[j])) j += 1;
      push('ident', src.slice(i, j));
      i = j;
      continue;
    }
    if (/[0-9]/.test(c)) {
      let j = i + 1;
      while (j < src.length && /[0-9A-Fa-fxX]/.test(src[j])) j += 1;
      const text = src.slice(i, j);
      push('int', text.startsWith('0x') || text.startsWith('0X') ? parseInt(text, 16) : parseInt(text, 10));
      i = j;
      continue;
    }
    if (c === '.' && src[i + 1] === '.') { push('..'); i += 2; continue; }
    if (c === '=' && src[i + 1] === '>') { push('=>'); i += 2; continue; }
    if (c === '=' && src[i + 1] === '=') { push('=='); i += 2; continue; }
    if (c === '!' && src[i + 1] === '=') { push('!='); i += 2; continue; }
    if (c === '<' && src[i + 1] === '=') { push('<='); i += 2; continue; }
    if (c === '>' && src[i + 1] === '=') { push('>='); i += 2; continue; }
    if ('{}[]():;,.*+-/%@?<>!='.includes(c)) { push(c); i += 1; continue; }
    throw new Error(`line ${line}: 无法识别的字符 ${JSON.stringify(c)}`);
  }
  push('eof');
  return tokens;
}

/* ----------------------------------------------------------------- parser */

class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.pos = 0;
  }

  peek(k = 0) { return this.tokens[this.pos + k]; }
  next() { return this.tokens[this.pos++]; }
  at(t) { return this.peek().t === t; }
  atWord(w) { const p = this.peek(); return p.t === 'ident' && p.v === w; }

  eat(t) {
    if (!this.at(t)) return null;
    return this.next();
  }

  eatWord(w) {
    if (!this.atWord(w)) return null;
    return this.next();
  }

  expect(t, what) {
    const p = this.next();
    if (p.t !== t) throw new Error(`line ${p.line}: 期望 ${what}，实际是 ${p.t === 'ident' ? p.v : p.t}`);
    return p;
  }

  ident() { return String(this.expect('ident', '标识符').v); }
  int() { return Number(this.expect('int', '整数').v); }

  parse() {
    const out = { structs: [], enums: [], bitfields: [] };
    while (!this.at('eof')) {
      if (this.atWord('struct')) out.structs.push(this.parseStruct());
      else if (this.atWord('enum')) out.enums.push(this.parseEnum());
      else if (this.atWord('bitfield')) out.bitfields.push(this.parseBitfield());
      else {
        const p = this.next();
        throw new Error(`line ${p.line}: 顶层只支持 struct / enum / bitfield，实际是 ${p.v ?? p.t}`);
      }
    }
    return out;
  }

  parseStruct() {
    this.eatWord('struct');
    const name = this.ident();
    this.expect('{', '`{`');
    const fields = [];
    while (!this.at('}')) {
      if (this.at('eof')) throw new Error(`struct ${name} 没有结束的 }`);
      fields.push(this.parseField());
    }
    this.eat('}');
    return { name, fields };
  }

  parseEnum() {
    this.eatWord('enum');
    const name = this.ident();
    this.expect(':', '`:`');
    const repr = this.ident();
    this.expect('{', '`{`');
    const variants = [];
    while (!this.at('}')) {
      const vname = this.ident();
      this.expect('=', '`=`');
      const negative = !!this.eat('-');
      const value = this.int() * (negative ? -1 : 1);
      variants.push({ name: vname, value });
      this.eat(',');
    }
    this.eat('}');
    return { name, repr, variants };
  }

  parseBitfield() {
    this.eatWord('bitfield');
    const name = this.ident();
    this.expect(':', '`:`');
    const repr = this.ident();
    this.expect('{', '`{`');
    const members = [];
    while (!this.at('}')) {
      const mname = this.ident();
      const lo = this.int();
      const hi = this.eat('..') ? this.int() : lo;
      members.push({ name: mname, lo, hi });
      this.eat(',');
    }
    this.eat('}');
    return { name, repr, members };
  }

  parseField() {
    const name = this.ident();
    const line = this.peek(-1)?.line ?? 0;

    if (this.eat('=')) {
      const expr = this.parseExpr();
      return { kind: 'computed', name, expr, desc: this.eatDesc(), line };
    }

    let pointer = null;
    if (this.atWord('at') || this.at('@')) {
      this.next();
      const relative = !!this.eat('+');
      pointer = { offset: this.parseLen(), relative };
    }

    const ty = this.parseType();

    let decode = null;
    if (this.eatWord('decode')) {
      const transform = this.ident();
      let args = [];
      if (this.eat('(')) {
        while (!this.at(')')) {
          args.push(this.int());
          if (!this.eat(',')) break;
        }
        this.expect(')', '`)`');
      }
      let asType = null;
      if (this.eatWord('as')) asType = this.parseType();
      decode = { transform, args, asType };
    }

    let check = null;
    if (this.eatWord('check')) {
      const algo = this.ident();
      if (!this.eatWord('over')) throw new Error(`line ${line}: check 缺少 over`);
      this.expect('(', '`(`');
      const first = this.ident();
      const last = this.eat('..') ? this.ident() : null;
      this.expect(')', '`)`');
      check = { algo, first, last };
    }

    let condition = null;
    if (this.eatWord('if')) condition = this.parseCondition();

    return { kind: 'field', name, ty, pointer, decode, check, condition, desc: this.eatDesc(), line };
  }

  eatDesc() {
    const p = this.peek();
    if (p.t !== 'string') return null;
    this.next();
    return p.v;
  }

  parseLen() {
    if (this.eat('*')) return { kind: 'rest' };
    const p = this.peek();
    if (p.t === 'int') { this.next(); return { kind: 'fixed', value: p.v }; }
    if (p.t === 'ident') { this.next(); return { kind: 'field', name: p.v }; }
    throw new Error(`line ${p.line}: 期望长度或字段名，实际是 ${p.t}`);
  }

  parseType() {
    if (this.eatWord('repeat')) {
      const elem = this.parseType();
      let guard = null;
      if (this.eatWord('until')) {
        const p = this.peek();
        if (p.t === 'int') {
          const pattern = [];
          while (this.at('int')) pattern.push(this.next().v);
          guard = { kind: 'pattern', pattern, stopOnMatch: true };
        } else {
          guard = { kind: 'condition', condition: this.parseCondition() };
        }
      } else if (this.eatWord('while')) {
        const pattern = [];
        while (this.at('int')) pattern.push(this.next().v);
        guard = { kind: 'pattern', pattern, stopOnMatch: false };
      }
      return { kind: 'repeat', elem, guard };
    }

    if (this.eatWord('match')) {
      const path = [this.ident()];
      while (this.eat('.')) path.push(this.ident());
      this.expect('{', '`{`');
      const arms = [];
      let fallback = null;
      while (!this.at('}') && !this.at('eof')) {
        const p = this.peek();
        if (p.t === 'int' || p.t === 'string') {
          const key = this.next().v;
          this.expect('=>', '`=>`');
          arms.push({ key, ty: this.parseType() });
        } else if (p.t === 'ident' && p.v === 'default') {
          this.next();
          this.expect('=>', '`=>`');
          fallback = this.parseType();
        } else {
          throw new Error(`line ${p.line}: match 分支期望数字、字符串或 default`);
        }
      }
      this.expect('}', '`}`');
      return { kind: 'match', path, arms, default: fallback };
    }

    const first = this.ident();
    if (first === 'bytes') {
      this.expect('[', '`[`');
      const len = this.parseLen();
      this.expect(']', '`]`');
      return { kind: 'bytes', len };
    }
    if (first === 'string') {
      this.expect('[', '`[`');
      const len = this.parseLen();
      this.expect(']', '`]`');
      return { kind: 'str', len };
    }
    if (first === 'cstring') return { kind: 'cstring' };
    if (first === 'varint' || first === 'svarint') {
      const elem = { kind: 'varint', signed: first === 'svarint' };
      if (this.eat('[')) {
        const len = this.parseLen();
        this.expect(']', '`]`');
        return { kind: 'array', elem, len };
      }
      return elem;
    }

    if (first === 'char') {
      if (this.eat('[')) {
        const len = this.parseLen();
        this.expect(']', '`]`');
        return { kind: 'array', elem: { kind: 'prim', prim: PRIMS.char, endian: null }, len };
      }
      return { kind: 'prim', prim: PRIMS.char, endian: null };
    }

    const prim = primOf(first);
    if (prim) {
      if (this.eat('[')) {
        const len = this.parseLen();
        this.expect(']', '`]`');
        return { kind: 'array', elem: { kind: 'prim', prim, endian: prim.endian }, len };
      }
      return { kind: 'prim', prim, endian: prim.endian };
    }

    if (this.eat('[')) {
      const len = this.parseLen();
      this.expect(']', '`]`');
      return { kind: 'array', elem: { kind: 'named', name: first }, len };
    }
    return { kind: 'named', name: first };
  }

  parseCondition() {
    const path = [this.ident()];
    while (this.eat('.')) path.push(this.ident());
    let op = null;
    let value = null;
    const p = this.peek();
    if (['==', '!=', '<', '<=', '>', '>='].includes(p.t)) {
      op = this.next().t;
      const v = this.next();
      value = v.t === 'string' ? v.v : Number(v.v);
    }
    return { path, op, value };
  }

  // 表达式 AST：computed 字段用 calcNode 暴露
  parseExpr() {
    let lhs = this.parseTerm();
    while (this.at('+') || this.at('-')) {
      const op = this.next().t;
      const rhs = this.parseTerm();
      lhs = { kind: 'bin', op, lhs, rhs };
    }
    return lhs;
  }

  parseTerm() {
    let lhs = this.parseFactor();
    while (this.at('*') || this.at('/') || this.at('%')) {
      const op = this.next().t;
      const rhs = this.parseFactor();
      lhs = { kind: 'bin', op, lhs, rhs };
    }
    return lhs;
  }

  parseFactor() {
    if (this.eat('(')) {
      const expr = this.parseExpr();
      this.expect(')', '`)`');
      return expr;
    }
    const p = this.next();
    if (p.t === 'int') return { kind: 'int', value: p.v };
    if (p.t === 'ident') {
      const path = [p.v];
      while (this.eat('.')) path.push(this.ident());
      return { kind: 'path', path };
    }
    throw new Error(`line ${p.line}: 表达式里期望数字、字段名或 (，实际是 ${p.t}`);
  }
}

/* -------------------------------------------------------------- conversion */

function sanitizeIdent(name) {
  let out = name.replace(/[^A-Za-z0-9_]/g, '_');
  if (!/^[A-Za-z_]/.test(out)) out = `T_${out}`;
  if (['const', 'let', 'var', 'function', 'return', 'new', 'class', 'default'].includes(out)) out = `T_${out}`;
  return out;
}

function uniqueName(base, used) {
  let name = base;
  for (let i = 2; used.has(name); i += 1) name = `${base}_${i}`;
  used.add(name);
  return name;
}

function jsString(text) {
  // 加载器会拒绝源码里除 export default 之外的 `export` 单词（包括注释和
  // 字符串）。上游描述里偶尔出现 “export table”，这里统一改写成中文。
  const safe = String(text).replace(/\bexport\b/gi, '导出');
  return JSON.stringify(safe);
}

function metaValue(value) {
  if (typeof value === 'string') return jsString(value);
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return jsString(String(value));
}

function reprSize(repr) {
  const p = PRIMS[repr];
  if (!p) throw new Error(`未知的整数类型 ${repr}`);
  return p.size;
}

function labelOpt(desc) {
  return desc ? `, label: ${jsString(desc.slice(0, 120))}` : '';
}

class Converter {
  constructor(pack) {
    this.pack = pack;
    this.usedTypeNames = new Set();
    this.typeName = new Map();
    this.converted = new Map();
    this.converting = new Set();
    this.skipped = [];
    this.helperNotes = [];
    this.complete = true;
    this.defs = [];
    /** 动态部分生成的辅助节点（calc / list / array / 变体 struct） */
    this.helperNodes = [];
    this.helperIds = new Set();
    this.extraTypeDefs = [];
    this.needPath = false;
    this.needVarint = false;
  }

  typeRef(name) {
    if (!this.typeName.has(name)) this.typeName.set(name, sanitizeIdent(name));
    return this.typeName.get(name);
  }

  note(msg) {
    this.skipped.push(msg);
    this.complete = false;
  }

  helperNote(msg) {
    this.helperNotes.push(msg);
  }

  addHelper(id, code) {
    let key = sanitizeIdent(id);
    for (let i = 2; this.helperIds.has(key); i += 1) key = `${sanitizeIdent(id)}_${i}`;
    this.helperIds.add(key);
    this.helperNodes.push({ id: key, code });
  }

  addExtraType(ref, code) {
    if (this.extraTypeDefs.some((t) => t.ref === ref)) return;
    this.extraTypeDefs.push({ ref, code: `const ${ref} = ${code};` });
  }

  enumRef(name, enumDef) {
    const ref = this.typeRef(name);
    const values = enumDef.variants.map((v) => `${jsString(String(v.value))}: ${jsString(v.name)}`).join(', ');
    this.addExtraType(
      ref,
      `struct(${jsString(name)}, [\n  ${PRIMS[enumDef.repr]?.kind ?? enumDef.repr}('value', { values: { ${values} } }),\n])`,
    );
    return ref;
  }

  fieldOf(def, name) {
    return def.fields.find((f) => (f.kind === 'field' || f.kind === 'computed') && f.name === name);
  }

  numericField(def, name) {
    const f = this.fieldOf(def, name);
    if (!f) return null;
    if (f.kind === 'computed') return f;
    if (this.isNumericType(f.ty)) return f;
    return null;
  }

  isNumericType(ty) {
    if (ty.kind === 'prim' || ty.kind === 'varint') return true;
    if (ty.kind === 'named') return this.pack._enums.has(ty.name);
    return false;
  }

  /** 把表达式编译成 calcNode 的 JS；inputs 已按字段名注入。 */
  emitExpr(expr, inputFor) {
    if (expr.kind === 'int') return String(expr.value);
    if (expr.kind === 'path') {
      const root = expr.path[0];
      const key = inputFor(root);
      if (!key) return null;
      if (expr.path.length === 1) return `Number(inputs[${jsString(key)}] ?? 0)`;
      this.needPath = true;
      return `Number(__nybblePath(inputs[${jsString(key)}], ${JSON.stringify(expr.path.slice(1))}) ?? 0)`;
    }
    if (expr.kind === 'bin') {
      const lhs = this.emitExpr(expr.lhs, inputFor);
      const rhs = this.emitExpr(expr.rhs, inputFor);
      if (lhs == null || rhs == null) return null;
      return `(${lhs} ${expr.op} ${rhs})`;
    }
    return null;
  }

  addComputedHelper(structName, def, field) {
    if (!field.expr) return;
    const inputs = {};
    const names = new Map();
    const inputFor = (root) => {
      if (names.has(root)) return names.get(root);
      const f = this.numericField(def, root);
      if (!f) return null;
      let key = sanitizeIdent(root);
      for (let i = 2; Object.values(inputs).includes(key); i += 1) key = `${sanitizeIdent(root)}_${i}`;
      names.set(root, key);
      inputs[key] = 'number';
      return key;
    };
    const expr = this.emitExpr(field.expr, inputFor);
    if (expr == null) {
      this.note(`${structName}.${field.name}: computed 表达式依赖非标量字段，未生成 calc 辅助节点`);
      return;
    }
    this.addHelper(
      `calc_${structName}_${field.name}`,
      `calcNode({\n      label: ${jsString(`${structName}.${field.name}（计算）`)},\n      description: ${jsString('Nybble computed 字段；输入来自同一结构体的字段端口')},\n      inputs: { ${Object.entries(inputs).map(([k, v]) => `${jsString(k)}: ${jsString(v)}`).join(', ')} },\n      outputs: { value: 'number' },\n      run: (inputs) => ({ value: ${expr} }),\n    })`,
    );
    this.helperNote(`${structName}.${field.name}: computed 已生成 calc 辅助节点`);
  }

  addPointerHelper(structName, def, field) {
    if (!field.pointer) return;
    const inputs = { base: 'number' };
    let offsetExpr = null;
    const off = field.pointer.offset;
    if (off.kind === 'fixed') offsetExpr = String(off.value);
    else if (off.kind === 'field') {
      const f = this.numericField(def, off.name);
      if (!f) {
        this.note(`${structName}.${field.name}: 指针偏移字段 ${off.name} 非标量，未生成地址 calc 节点`);
      } else {
        const key = sanitizeIdent(off.name);
        inputs[key] = 'number';
        offsetExpr = `Number(inputs[${jsString(key)}] ?? 0)`;
      }
    }
    if (offsetExpr != null) {
      const address = field.pointer.relative
        ? `Number(inputs.base ?? 0) + ${offsetExpr}`
        : offsetExpr;
      this.addHelper(
        `ptr_${structName}_${field.name}`,
        `calcNode({\n      label: ${jsString(`${structName}.${field.name}（指针地址）`)},\n      description: ${jsString('把结构体基址与指针字段/常量相加，接到目标结构节点的 address')},\n      inputs: { ${Object.entries(inputs).map(([k, v]) => `${jsString(k)}: ${jsString(v)}`).join(', ')} },\n      outputs: { address: 'number' },\n      run: (inputs) => ({ address: ${address} }),\n    })`,
      );
      this.helperNote(`${structName}.${field.name}: 指针已生成地址 calc 辅助节点`);
    }
    if (field.ty.kind === 'named') {
      let targetRef = this.pack._structs.has(field.ty.name) ? (this.convertStruct(field.ty.name)?.ref ?? null) : null;
      if (!targetRef && this.pack._bitfields.has(field.ty.name)) targetRef = this.convertBitfield(field.ty.name).ref;
      const enumDef = this.pack._enums.get(field.ty.name);
      if (!targetRef && enumDef) targetRef = this.enumRef(field.ty.name, enumDef);
      if (targetRef) {
        this.addHelper(
          `ptrtarget_${structName}_${field.name}`,
          `structNode(${targetRef}, { label: ${jsString(`指针目标 · ${structName}.${field.name}`)} })`,
        );
      }
    }
  }

  conditionExpr(condition, valueExpr) {
    if (!condition) return null;
    const { path, op, value } = condition;
    let target;
    if (path.length === 1) target = `${valueExpr}[${jsString(path[0])}]`;
    else {
      this.needPath = true;
      target = `__nybblePath(${valueExpr}[${jsString(path[0])}], ${JSON.stringify(path.slice(1))})`;
    }
    if (!op) return `Boolean(${target})`;
    return `(${target} ${op} ${typeof value === 'string' ? jsString(value) : value})`;
  }

  elementRef(ty, owner) {
    if (ty.kind === 'named') {
      const s = this.pack._structs.has(ty.name) ? this.convertStruct(ty.name) : null;
      if (s) return s.ref;
      if (this.pack._bitfields.has(ty.name)) return this.convertBitfield(ty.name).ref;
      const enumDef = this.pack._enums.get(ty.name);
      if (enumDef) return this.enumRef(ty.name, enumDef);
      this.note(`${owner}: 元素类型 ${ty.name} 不可移植`);
      return null;
    }
    if (ty.kind === 'prim') {
      const kind = ty.prim.kind;
      const ref = `Elem_${sanitizeIdent(kind)}`;
      const fn = kind;
      const endian = ty.endian ?? ty.prim.endian ?? this.pack.endian;
      this.addExtraType(ref, `struct(${jsString(`${kind}Value`)}, [\n  ${fn}('value', { endian: ${jsString(endian)} }),\n])`);
      return ref;
    }
    this.note(`${owner}: 元素类型 ${ty.kind} 不可移植`);
    return null;
  }

  addRepeatHelper(structName, field) {
    const ty = field.ty;
    if (ty.kind !== 'repeat') return;
    const ref = this.elementRef(ty.elem, `${structName}.${field.name}`);
    if (!ref) return;
    const stop = ty.guard?.kind === 'condition' ? this.conditionExpr(ty.guard.condition, 'e.value') : null;
    const body = stop ? `if (${stop}) return null;` : '';
    this.addHelper(
      `list_${structName}_${field.name}`,
      `listNode(${ref}, {\n      label: ${jsString(`${structName}.${field.name}（重复元素）`)},\n      description: ${jsString('Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进')},\n      next: (e) => { ${body} return e.addr + ${ref}.size; },\n      max: 4096,\n    })`,
    );
    this.helperNote(`${structName}.${field.name}: repeat 已生成 list 辅助节点`);
  }

  addArrayHelper(structName, field) {
    const ty = field.ty;
    if (ty.kind !== 'array' || ty.len.kind !== 'field') return;
    const ref = this.elementRef(ty.elem, `${structName}.${field.name}`);
    if (!ref) return;
    this.addHelper(
      `array_${structName}_${field.name}`,
      `arrayNode(${ref}, {\n      label: ${jsString(`${structName}.${field.name}（动态数组）`)},\n      description: ${jsString(`count 来自 ${structName}.${ty.len.name}；address 指向数组首元素`)},\n    })`,
    );
    this.helperNote(`${structName}.${field.name}: 动态数组已生成 array 辅助节点（count 接到 ${ty.len.name}）`);
  }

  addMatchHelper(structName, field) {
    const ty = field.ty;
    if (ty.kind !== 'match') return;
    const variants = [...ty.arms, ...(ty.default ? [{ key: 'default', ty: ty.default }] : [])];
    let added = 0;
    for (const arm of variants) {
      if (arm.ty.kind !== 'named') continue;
      let targetRef = this.pack._structs.has(arm.ty.name) ? (this.convertStruct(arm.ty.name)?.ref ?? null) : null;
      if (!targetRef && this.pack._bitfields.has(arm.ty.name)) targetRef = this.convertBitfield(arm.ty.name).ref;
      const enumDef = this.pack._enums.get(arm.ty.name);
      if (!targetRef && enumDef) targetRef = this.enumRef(arm.ty.name, enumDef);
      if (!targetRef) continue;
      this.addHelper(
        `match_${structName}_${field.name}_${String(arm.key)}`,
        `structNode(${targetRef}, { label: ${jsString(`${structName}.${field.name} · match ${String(arm.key)}`)} })`,
      );
      added += 1;
    }
    if (added) this.helperNote(`${structName}.${field.name}: match 已生成 ${added} 个变体节点`);
  }

  addVarintHelper() {
    if (this.needVarint) return;
    this.needVarint = true;
    this.addHelper(
      'read_varint',
      `calcNode({\n      label: '读 Varint',\n      description: '按地址解码 1–9 字节 varint（LEB128）',\n      inputs: { address: 'number' },\n      outputs: { value: 'number', bytes: 'number' },\n      run: ({ address }, ctx) => {\n        let value = 0;\n        for (let i = 0; i < 9; i += 1) {\n          const b = ctx.mem.u8(Number(address) + i);\n          if (i === 8) return { value: value * 256 + b, bytes: 9 };\n          value = value * 128 + (b & 0x7f);\n          if ((b & 0x80) === 0) return { value, bytes: i + 1 };\n        }\n        return { value, bytes: 9 };\n      },\n    })`,
    );
  }

  addHelpersForStruct(structName, def) {
    for (const field of def.fields) {
      if (field.kind === 'computed') this.addComputedHelper(structName, def, field);
      else if (field.kind === 'field') {
        if (field.pointer) this.addPointerHelper(structName, def, field);
        const ty = field.ty;
        if (ty.kind === 'repeat') this.addRepeatHelper(structName, field);
        else if (ty.kind === 'array' && ty.len.kind === 'field') this.addArrayHelper(structName, field);
        else if (ty.kind === 'match') this.addMatchHelper(structName, field);
        else if (ty.kind === 'varint' || (ty.kind === 'array' && ty.elem.kind === 'varint')) this.addVarintHelper();
        else if (ty.kind === 'named' && /varint|LEB128|vint/i.test(ty.name)) this.addVarintHelper();
      }
    }
  }

  /** 返回 `{ ref, def, __fields }`；ref 是生成的类型变量名。 */
  convertStruct(name) {
    if (this.converted.has(name)) return this.converted.get(name);
    if (this.converting.has(name)) {
      this.note(`循环引用 ${name}`);
      return null;
    }
    const def = this.pack._structs.get(name);
    if (!def) {
      this.note(`未找到 struct ${name}`);
      return null;
    }
    this.converting.add(name);
    const fields = [];
    let stopped = false;
    for (const field of def.fields) {
      if (stopped) break;
      if (field.kind === 'computed') continue;
      if (field.pointer) continue;
      if (field.condition) {
        this.note(`${name}.${field.name}: 条件字段未移植，后续布局在此停止`);
        stopped = true;
        this.complete = false;
        break;
      }
      const code = this.convertField(name, field);
      if (!code) {
        stopped = true;
        this.complete = false;
        break;
      }
      fields.push(`  ${code},`);
    }
    this.converting.delete(name);

    if (!fields.length) {
      this.note(`${name}: 没有可移植的固定前缀字段`);
      this.converted.set(name, null);
      return null;
    }

    const entry = { ref: this.typeRef(name), def, __fields: fields };
    this.converted.set(name, entry);
    this.addHelpersForStruct(name, def);
    return entry;
  }

  convertField(parent, field) {
    const { ty, name } = field;
    const label = labelOpt(field.desc);
    const endianOpt = (endian) => (endian ? `, endian: ${jsString(endian)}` : '');

    if (field.decode || field.check) {
      // decode / check 不改变字段宽度；仍然可以读取原始值，只是不做变换/校验。
      this.note(`${parent}.${name}: ${field.decode ? 'decode' : 'check'} 子句未移植（字段仍按原始字节读取）`);
      this.complete = false;
    }

    switch (ty.kind) {
      case 'prim': {
        const prim = ty.prim;
        const fn = prim.kind;
        const endian = ty.endian ?? prim.endian ?? this.pack.endian;
        const opts = [`endian: ${jsString(endian)}`];
        if (field.desc) opts.push(`label: ${jsString(field.desc.slice(0, 120))}`);
        return `${fn}(${jsString(name)}, { ${opts.join(', ')} })`;
      }
      case 'str': {
        if (ty.len.kind !== 'fixed') { this.note(`${parent}.${name}: 变长字符串未移植`); return null; }
        return `str(${jsString(name)}, { size: ${ty.len.value}${label} })`;
      }
      case 'bytes': {
        if (ty.len.kind !== 'fixed') { this.note(`${parent}.${name}: 变长字节块未移植`); return null; }
        return `bytes(${jsString(name)}, { size: ${ty.len.value}${label} })`;
      }
      case 'array': {
        if (ty.len.kind !== 'fixed') { if (ty.len.kind !== 'field') this.note(`${parent}.${name}: 动态数组长度（${ty.len.kind}）未移植`); return null; }
        const count = ty.len.value;
        const elem = ty.elem;
        if (elem.kind === 'prim' && elem.prim.kind === 'char') {
          return `str(${jsString(name)}, { size: ${count}${label} })`;
        }
        if (elem.kind === 'prim') {
          if (elem.endian && elem.endian !== (this.pack.endian === 'be' ? 'big' : 'little')) {
            this.note(`${parent}.${name}: 带显式字节序的标量数组未移植`);
            return null;
          }
          const opts = field.desc ? `, { label: ${jsString(field.desc.slice(0, 120))} }` : '';
          return `array(${jsString(name)}, ${jsString(elem.prim.kind)}, ${count}${opts})`;
        }
        if (elem.kind === 'named') {
          const enumDef = this.pack._enums.get(elem.name);
          const opts = field.desc ? `, { label: ${jsString(field.desc.slice(0, 120))} }` : '';
          if (enumDef) {
            return `array(${jsString(name)}, ${jsString(enumDef.repr)}, ${count}${opts})`;
          }
          const struct = this.convertStruct(elem.name);
          if (struct) return `array(${jsString(name)}, ${struct.ref}, ${count}${opts})`;
          if (this.pack._bitfields.has(elem.name)) {
            const bf = this.convertBitfield(elem.name);
            return `array(${jsString(name)}, ${bf.ref}, ${count}${opts})`;
          }
          this.note(`${parent}.${name}: 数组元素类型 ${elem.name} 不可移植`);
          return null;
        }
        this.note(`${parent}.${name}: 嵌套数组未移植`);
        return null;
      }
      case 'named': {
        const enumDef = this.pack._enums.get(ty.name);
        if (enumDef) {
          const values = enumDef.variants.map((v) => `${jsString(String(v.value))}: ${jsString(v.name)}`).join(', ');
          return `${enumDef.repr}(${jsString(name)}, { values: { ${values} }${label} })`;
        }
        const bf = this.pack._bitfields.get(ty.name);
        if (bf) {
          const def = this.convertBitfield(ty.name);
          const opts = field.desc ? `, { label: ${jsString(field.desc.slice(0, 120))} }` : '';
          return `record(${jsString(name)}, ${def.ref}${opts})`;
        }
        const struct = this.convertStruct(ty.name);
        if (struct) {
          const opts = field.desc ? `, { label: ${jsString(field.desc.slice(0, 120))} }` : '';
          return `record(${jsString(name)}, ${struct.ref}${opts})`;
        }
        this.note(`${parent}.${name}: 类型 ${ty.name} 不可移植`);
        return null;
      }
      case 'repeat':
        return null;
      case 'match':
        return null;
      case 'cstring':
        this.note(`${parent}.${name}: cstring 变长字段未移植，后续布局在此停止`);
        return null;
      case 'varint':
        return null;
      default:
        this.note(`${parent}.${name}: 未知类型 ${ty.kind}`);
        return null;
    }
  }

  convertBitfield(name) {
    if (this.converted.has(`bitfield:${name}`)) return this.converted.get(`bitfield:${name}`);
    const def = this.pack._bitfields.get(name);
    const unit = reprSize(def.repr);
    const ref = this.typeRef(name);
    const fields = def.members
      .slice()
      .sort((a, b) => a.lo - b.lo)
      .map((m) => `  bits(${jsString(m.name)}, ${m.hi - m.lo + 1}, { at: 0, bit: ${m.lo}, unit: ${unit}${m.name ? `, label: ${jsString(m.name)}` : ''} }),`)
      .join('\n');
    const entry = { ref, def, code: `const ${ref} = struct(${jsString(name)}, [\n${fields}\n]);` };
    this.converted.set(`bitfield:${name}`, entry);
    return entry;
  }

  /** 生成所有已转换类型的代码（拓扑排序）。 */
  collectDefinitions() {
    const out = [];
    const done = new Set();
    const visitStruct = (name) => {
      if (done.has(`struct:${name}`)) return;
      const def = this.pack._structs.get(name);
      if (!def) return;
      const conv = this.convertStruct(name);
      if (!conv) return;
      done.add(`struct:${name}`);
      // 先递归引用到的类型
      for (const field of def.fields) {
        if (field.kind !== 'field') continue;
        const t = field.ty;
        const visitType = (ty) => {
          if (ty.kind === 'named') {
            if (this.pack._structs.has(ty.name)) visitStruct(ty.name);
            else if (this.pack._bitfields.has(ty.name)) visitBitfield(ty.name);
          } else if (ty.kind === 'array' && ty.elem.kind === 'named') {
            if (this.pack._structs.has(ty.elem.name)) visitStruct(ty.elem.name);
            else if (this.pack._bitfields.has(ty.elem.name)) visitBitfield(ty.elem.name);
          }
        };
        visitType(t);
      }
      // 重新读取转换结果，确保字段引用变量已定义
      const again = this.convertStruct(name);
      if (again) out.push(again);
    };
    const visitBitfield = (name) => {
      if (done.has(`bitfield:${name}`)) return;
      const conv = this.convertBitfield(name);
      done.add(`bitfield:${name}`);
      out.push(conv);
    };

    for (const name of this.pack._structs.keys()) visitStruct(name);
    for (const name of this.pack._bitfields.keys()) visitBitfield(name);
    // 去重
    const seen = new Set();
    return out.filter((x) => {
      if (seen.has(x.ref)) return false;
      seen.add(x.ref);
      return true;
    });
  }

  build() {
    const defs = this.collectDefinitions();
    if (!defs.length) return null;

    let entryName = this.pack.formats[0]?.entry ?? '';
    let entryStruct = this.pack._structs.get(entryName) ? this.convertStruct(entryName) : null;
    if (!entryStruct) {
      const declared = entryName;
      for (const name of this.pack._structs.keys()) {
        const conv = this.convertStruct(name);
        if (conv) { entryStruct = conv; entryName = name; break; }
      }
      if (declared) this.note(`入口 struct ${declared} 没有可移植字段，改用 ${entryName}`);
    }
    if (!entryStruct) return null;

    const nodes = [{ id: 'entry', ref: entryStruct.ref, label: `${entryName}（入口）` }];
    const nodeIds = new Set(['entry']);
    for (const name of this.pack._structs.keys()) {
      const conv = this.convertStruct(name);
      if (conv && conv.ref !== entryStruct.ref) {
        const id = uniqueName(sanitizeIdent(name), nodeIds);
        nodes.push({ id, ref: conv.ref, label: name });
      }
    }
    for (const name of this.pack._bitfields.keys()) {
      const conv = this.convertBitfield(name);
      const id = uniqueName(sanitizeIdent(`flags_${name}`), nodeIds);
      nodes.push({ id, ref: conv.ref, label: `位域 ${name}` });
    }

    const allDefs = [...defs, ...this.extraTypeDefs];
    const helperCode = this.needPath
      ? `function __nybblePath(value, keys) {\n  let cur = value;\n  for (const k of keys) {\n    if (cur == null) return undefined;\n    cur = cur[k];\n  }\n  return cur;\n}\n\n`
      : '';
    const typeCodes = `${helperCode}${allDefs.map((d) => d.code ?? this.structCode(d)).join('\n\n')}`;
    const nodeCodes = nodes.map((n) => `    ${jsString(n.id)}: structNode(${n.ref}, { label: ${jsString(n.label)} }),`);
    for (const h of this.helperNodes) {
      const id = uniqueName(h.id, nodeIds);
      nodeCodes.push(`    ${jsString(id)}: ${h.code},`);
    }
    const uniqueNodes = nodeCodes;

    const source = this.pack;
    const coverage = this.complete && !this.skipped.length && !this.helperNodes.length ? 'complete' : 'partial';
    const header = [
      '/// <reference path="../../../types/memlink-bp.d.ts" />',
      '',
      '// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。',
      `// 上游：${NYBBLE_URL}/tree/main/formats/${source.id}`,
      `// 原始 pack：${source.id} · ${source.name} v${source.version} · 作者 ${source.author}`,
      '// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。',
      `// 覆盖：${coverage}${this.helperNodes.length ? `；含 ${this.helperNodes.length} 个动态辅助节点` : ''}${this.skipped.length ? `；未移植 ${this.skipped.length} 项（见文件末尾）` : ''}`,
      '',
    ].join('\n');
    const footer = this.skipped.length
      ? `\n\n/*\n未移植项：\n${this.skipped.map((s) => `- ${s.replace(/\bexport\b/gi, '导出')}`).join('\n')}\n*/\n`
      : '\n';
    const code = `${header}${typeCodes}\n\nexport default definePack({\n  name: ${jsString(source.formats[0]?.name ?? source.name)},\n  endian: ${jsString(source.endian)},\n  pointerSize: 4,\n  types: [${allDefs.map((d) => d.ref).join(', ')}],\n  nodes: {\n${uniqueNodes.join('\n')}\n  },\n});\n${footer}`;

    return {
      code,
      entry: entryName,
      coverage,
      skipped: this.skipped.slice(),
      helpers: this.helperNodes.length,
      types: allDefs.length,
      nodes: uniqueNodes.length,
    };
  }

  structCode(conv) {
    const fields = conv.__fields;
    return `const ${conv.ref} = struct(${jsString(conv.def.name)}, [\n${fields.join('\n')}\n]);`;
  }
}

function convertPack(raw, format) {
  const endian = format.endian === 'be' ? 'big' : 'little';
  let ast;
  try {
    ast = new Parser(lex(format.schema ?? '')).parse();
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
  if (!ast.structs.length) return { ok: false, error: 'schema 没有 struct' };

  const pack = {
    ...raw,
    formats: [format],
    endian,
    _structs: new Map(ast.structs.map((s) => [s.name, s])),
    _enums: new Map(ast.enums.map((e) => [e.name, e])),
    _bitfields: new Map(ast.bitfields.map((b) => [b.name, b])),
  };
  const conv = new Converter(pack);
  try {
    const out = conv.build();
    if (!out) return { ok: false, error: '没有可移植的结构' };
    return { ok: true, ...out };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

function slugOf(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/* ------------------------------------------------------------------- main */

function parseArgs(argv) {
  const rootDefault = existsSync(join(process.cwd(), 'store', 'vendor', 'nybble-registry.json')) ? 'store' : '.';
  const out = { root: rootDefault, write: false, report: false, ids: [] };
  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--write') out.write = true;
    else if (a === '--report') out.report = true;
    else if (a === '--root') out.root = argv[++i];
    else if (!a.startsWith('-')) out.ids.push(a);
    else throw new Error(`未知参数 ${a}`);
  }
  return out;
}

function main() {
  const args = parseArgs(process.argv);
  const root = resolve(args.root);
  const vendorFile = join(root, 'vendor', 'nybble-registry.json');
  const registry = JSON.parse(readFileSync(vendorFile, 'utf8'));
  const results = [];
  const usedIds = new Set();
  for (const raw of registry.packs) {
    if (CUSTOM_IDS.has(raw.id) && !args.ids.includes(raw.id)) continue;
    if (args.ids.length && !args.ids.includes(raw.id)) continue;
    const formats = Array.isArray(raw.formats) && raw.formats.length ? raw.formats : [{}];
    for (const format of formats) {
      let id = formats.length === 1 ? raw.id : (slugOf(format.name) || raw.id);
      if (usedIds.has(id)) id = `${raw.id}-${slugOf(format.name) || 'format'}`;
      usedIds.add(id);
      const r = convertPack(raw, format);
      results.push({ raw, format, id, multi: formats.length > 1, r });
    }
  }

  let ok = 0;
  for (const { raw, format, id, r } of results) {
    if (r.ok) ok += 1;
    if (!r.ok) {
      console.log(`✗ ${id.padEnd(18)} ${r.error}`);
      continue;
    }
    console.log(`${r.coverage === 'complete' ? '✓' : '◐'} ${id.padEnd(18)} ${String(r.types).padStart(2)} 类型 ${String(r.nodes).padStart(2)} 节点  ${r.skipped.length ? `跳过 ${r.skipped.length}` : ''}${format.name ? ` · ${format.name}` : ''}`);
    if (args.report) for (const s of r.skipped.slice(0, 8)) console.log(`    · ${s}`);
  }
  console.log(`\n${ok}/${results.length} 个 pack 可生成`);

  if (!args.write) return;
  const packsDir = join(root, 'packs');
  const written = new Set();
  let order = 200;
  for (const { raw, format, id, multi, r } of results) {
    if (!r.ok) continue;
    const dir = join(packsDir, id);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'pack.bp.ts'), r.code);
    const summary = (format.description || raw.description || raw.name || raw.id).replace(/\s+/g, ' ').slice(0, 160);
    const meta = {
      id,
      name: multi ? (format.name || `${raw.name} · ${format.endian || ''}`) : (raw.name || raw.id),
      version: raw.version || '1.0.0',
      category: raw.category === 'audio' ? 'media' : raw.category === 'video' ? 'media' : raw.category === 'font' ? 'media' : raw.category === 'ml' ? 'data' : raw.category === 'model' ? 'model' : raw.category === 'filesystem' ? 'system' : raw.category === 'firmware' ? 'system' : raw.category === 'network' ? 'network' : raw.category === 'system' ? 'system' : raw.category === 'game' ? 'game' : raw.category === 'database' ? 'database' : raw.category === 'executable' ? 'executable' : raw.category === 'archive' ? 'archive' : raw.category === 'image' ? 'image' : 'other',
      order: order,
      summary,
      description: (raw.description || summary).slice(0, 400),
      tags: Array.isArray(raw.tags) ? raw.tags : [],
      author: raw.maintainer || raw.author || 'Nybble contributors',
      license: 'Free use / redistribution (Nybble registry)',
      homepage: raw.homepage || '',
      coverage: r.coverage,
      ...(r.helpers ? { helpers: r.helpers } : {}),
      source: {
        provider: 'nybble',
        id: raw.id,
        ...(format.name ? { format: format.name } : {}),
        version: raw.version || '1.0.0',
        url: `${NYBBLE_URL}/tree/main/formats/${raw.id}`,
        license: 'Nybble format registry',
      },
    };
    writeFileSync(join(dir, 'meta.json'), `${JSON.stringify(meta, null, 2)}\n`);
    written.add(id);
    order += 1;
  }
  // 只清理「来源为 nybble 且本次未生成」的旧目录，不碰手工 pack。
  // 带 id 过滤运行时不做清理，避免误删其它格式。
  if (!args.ids.length) {
    for (const name of readdirSync(packsDir)) {
      if (written.has(name)) continue;
      const metaFile = join(packsDir, name, 'meta.json');
      if (!existsSync(metaFile)) continue;
      try {
        const meta = JSON.parse(readFileSync(metaFile, 'utf8'));
        if (meta.source?.provider === 'nybble') rmSync(join(packsDir, name), { recursive: true, force: true });
      } catch {
        /* 忽略坏 meta */
      }
    }
  }
  console.log(`✓ 已写入 ${packsDir}`);
}

main();
