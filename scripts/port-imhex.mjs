#!/usr/bin/env node
/**
 * 把 ImHex Pattern Language（.hexpat）的固定布局部分移植成 mem-link pack。
 *
 * 用法：
 *   node store/scripts/port-imhex.mjs --src <ImHex-Patterns/patterns> [--root store] [--write]
 *
 * 这是**尽力而为**的静态移植：
 *   - 固定标量、固定数组、嵌套 struct/union、bitfield、enum、padding、using 别名；
 *   - `#pragma endian`、`be`/`le` 前缀；
 *   - 遇到 if/match/try/while/动态数组/指针表达式等无法在静态布局中表达的内容，
 *     停止该 struct 的后续字段，保留已经确定的前缀，并在 meta.coverage 标注 partial。
 *
 * 上游 ImHex-Patterns 为 GPL-2.0-only；生成文件保留来源与许可标注。
 * 不要手工编辑生成文件。
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, basename } from 'node:path';

const IMHEX_URL = 'https://github.com/WerWolv/ImHex-Patterns/blob/master';
/** GPL-2.0 §2(a)：修改后的文件要注明修改事实与日期。 */
const GENERATED_AT = new Date().toISOString().slice(0, 10);
const PRIMS = {
  u8: { kind: 'u8', size: 1 },
  s8: { kind: 'i8', size: 1 },
  i8: { kind: 'i8', size: 1 },
  u16: { kind: 'u16', size: 2 },
  s16: { kind: 'i16', size: 2 },
  i16: { kind: 'i16', size: 2 },
  u32: { kind: 'u32', size: 4 },
  s32: { kind: 'i32', size: 4 },
  i32: { kind: 'i32', size: 4 },
  u64: { kind: 'u64', size: 8 },
  s64: { kind: 'i64', size: 8 },
  i64: { kind: 'i64', size: 8 },
  float: { kind: 'f32', size: 4 },
  f32: { kind: 'f32', size: 4 },
  double: { kind: 'f64', size: 8 },
  f64: { kind: 'f64', size: 8 },
  bool: { kind: 'bool', size: 1 },
  char: { kind: 'char', size: 1 },
  // Windows / C 常见别名
  byte: { kind: 'u8', size: 1 },
  BYTE: { kind: 'u8', size: 1 },
  CHAR: { kind: 'char', size: 1 },
  uint8_t: { kind: 'u8', size: 1 },
  int8_t: { kind: 'i8', size: 1 },
  WORD: { kind: 'u16', size: 2 },
  USHORT: { kind: 'u16', size: 2 },
  SHORT: { kind: 'i16', size: 2 },
  uint16_t: { kind: 'u16', size: 2 },
  int16_t: { kind: 'i16', size: 2 },
  DWORD: { kind: 'u32', size: 4 },
  UINT: { kind: 'u32', size: 4 },
  UINT32: { kind: 'u32', size: 4 },
  ULONG: { kind: 'u32', size: 4 },
  ULONG32: { kind: 'u32', size: 4 },
  uint32_t: { kind: 'u32', size: 4 },
  INT: { kind: 'i32', size: 4 },
  INT32: { kind: 'i32', size: 4 },
  LONG: { kind: 'i32', size: 4 },
  LONG32: { kind: 'i32', size: 4 },
  int32_t: { kind: 'i32', size: 4 },
  QWORD: { kind: 'u64', size: 8 },
  ULONGLONG: { kind: 'u64', size: 8 },
  ULONG64: { kind: 'u64', size: 8 },
  uint64_t: { kind: 'u64', size: 8 },
  LONGLONG: { kind: 'i64', size: 8 },
  LONG64: { kind: 'i64', size: 8 },
  int64_t: { kind: 'i64', size: 8 },
};

/* ------------------------------------------------------------- tokenizer */

function lex(src) {
  const tokens = [];
  let i = 0;
  let line = 1;
  const push = (t, v) => tokens.push({ t, v, line });
  while (i < src.length) {
    const c = src[i];
    if (c === '\n') { line += 1; i += 1; continue; }
    if (c === ' ' || c === '\t' || c === '\r') { i += 1; continue; }
    if (c === '/' && src[i + 1] === '/') { while (i < src.length && src[i] !== '\n') i += 1; continue; }
    if (c === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) { if (src[i] === '\n') line += 1; i += 1; }
      i += 2;
      continue;
    }
    if (c === '"' || c === "'") {
      const quote = c;
      i += 1;
      let out = '';
      while (i < src.length && src[i] !== quote) {
        if (src[i] === '\\') {
          const n = src[i + 1];
          out += n === 'n' ? '\n' : n === 't' ? '\t' : n === 'r' ? '\r' : n === '0' ? '\0' : n;
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
      while (j < src.length && /[0-9A-Fa-fxXoObB'_]/.test(src[j])) j += 1;
      let text = src.slice(i, j).replace(/'/g, '');
      let value;
      if (/^0[xX]/.test(text)) value = parseInt(text.slice(2), 16);
      else if (/^0[bB]/.test(text)) value = parseInt(text.slice(2), 2);
      else if (/^0[oO]/.test(text)) value = parseInt(text.slice(2), 8);
      else value = parseFloat(text);
      push('number', value);
      i = j;
      continue;
    }
    if (c === ':' && src[i + 1] === ':') { push('::'); i += 2; continue; }
    if (c === '.' && src[i + 1] === '.' && src[i + 2] === '.') { push('...'); i += 3; continue; }
    if ('{}[]();,:.*&|^~!=<>?+-/%'.includes(c)) { push(c); i += 1; continue; }
    if (c === '@') { push('@'); i += 1; continue; }
    if (c === '$') { push('$'); i += 1; continue; }
    if (c === '#') { push('#'); i += 1; continue; }
    throw new Error(`line ${line}: 无法识别的字符 ${JSON.stringify(c)}`);
  }
  push('eof');
  return tokens;
}

/* -------------------------------------------------------------- preprocess */

function preprocess(src) {
  const lines = src.split(/\r?\n/);
  const macros = new Map();
  let endian = null;
  let description = '';
  const out = [];
  for (const line of lines) {
    const m = /^\s*#pragma\s+endian\s+(little|big)\b/.exec(line);
    if (m) { endian = m[1]; continue; }
    const d = /^\s*#pragma\s+description\s+(.*)$/.exec(line);
    if (d) { description = d[1].replace(/^"|"$/g, '').trim(); continue; }
    if (/^\s*#\s*(include|pragma|if|ifdef|ifndef|else|elif|endif|undef|error|warning)\b/.test(line)) continue;
    const def = /^\s*#define\s+([A-Za-z_]\w*)\s+(.+)$/.exec(line);
    if (def) { macros.set(def[1], def[2].trim()); continue; }
    const un = /^\s*#undef\s+([A-Za-z_]\w*)/.exec(line);
    if (un) { macros.delete(un[1]); continue; }
    if (/^\s*import\s+.+$/m.test(line)) continue;
    out.push(line);
  }
  let text = out.join('\n');

  // Remove attributes [[ ... ]] (balanced brackets).
  text = stripBalanced(text, '[[', ']]');
  // Remove function definitions fn name(...) { ... }
  text = stripFunctions(text);
  return { text, macros, endian, description };
}

function stripBalanced(text, open, close) {
  let out = '';
  let i = 0;
  while (i < text.length) {
    if (text.startsWith(open, i)) {
      let depth = 1;
      i += open.length;
      while (i < text.length && depth > 0) {
        if (text.startsWith(open, i)) { depth += 1; i += open.length; continue; }
        if (text.startsWith(close, i)) { depth -= 1; i += close.length; continue; }
        i += 1;
      }
      continue;
    }
    out += text[i];
    i += 1;
  }
  return out;
}

function stripFunctions(text) {
  let out = '';
  let i = 0;
  while (i < text.length) {
    const m = /\bfn\s+[A-Za-z_]\w*\s*\(/.exec(text.slice(i));
    if (!m || m.index > 0) {
      // copy until the match or end
      const end = m ? i + m.index : text.length;
      out += text.slice(i, end);
      i = end;
      if (!m) break;
    }
    // skip signature to '{' then the balanced block
    let j = text.indexOf('{', i);
    if (j < 0) break;
    let depth = 1;
    j += 1;
    while (j < text.length && depth > 0) {
      if (text[j] === '{') depth += 1;
      else if (text[j] === '}') depth -= 1;
      j += 1;
    }
    i = j;
  }
  return out;
}

/* ----------------------------------------------------------------- parser */

class Parser {
  constructor(tokens, macros) {
    this.tokens = tokens;
    this.pos = 0;
    this.macros = macros;
    this.structs = new Map();
    this.unions = new Map();
    this.bitfields = new Map();
    this.enums = new Map();
    this.aliases = new Map();
    this.instances = [];
    this.order = [];
  }

  peek(k = 0) { return this.tokens[this.pos + k]; }
  next() { return this.tokens[this.pos++]; }
  at(t) { return this.peek().t === t; }
  atWord(w) { const p = this.peek(); return p.t === 'ident' && p.v === w; }
  eat(t) { return this.at(t) ? this.next() : null; }
  eatWord(w) { return this.atWord(w) ? this.next() : null; }
  expect(t, what) {
    const p = this.next();
    if (p.t !== t) throw new Error(`line ${p.line}: 期望 ${what}，实际是 ${p.t === 'ident' ? p.v : p.t}`);
    return p;
  }
  ident() { return String(this.expect('ident', '标识符').v); }
  number() { return Number(this.expect('number', '数字').v); }

  parse() {
    while (!this.at('eof')) {
      this.parseTop();
    }
    return this;
  }

  parseTop(scope = '') {
    if (this.atWord('namespace')) {
      this.next();
      const name = this.ident();
      this.expect('{', '`{`');
      const inner = scope ? `${scope}_${name}` : name;
      while (!this.at('}') && !this.at('eof')) this.parseTop(inner);
      this.eat('}');
      return;
    }
    if (this.atWord('struct')) return this.parseStruct(scope, false);
    if (this.atWord('union')) return this.parseStruct(scope, true);
    if (this.atWord('bitfield')) return this.parseBitfield(scope);
    if (this.atWord('enum')) return this.parseEnum(scope);
    if (this.atWord('using')) return this.parseUsing(scope);
    if (this.atWord('fn')) return this.skipFunction();
    if (this.at('[[') || this.at(']]')) { this.next(); return; }
    if (this.at(';') || this.at('}')) { this.next(); return; }

    // Top-level instantiation: Type name ... @ offset; or Type name;
    const start = this.pos;
    const typeName = this.parseTypeName();
    if (typeName) {
      const save = this.pos;
      if (this.at('ident')) {
        const name = this.ident();
        // optional array suffix
        if (this.at('[')) this.skipBrackets();
        if (this.at('@') || this.at(';')) {
          if (!this.instances.some((x) => x.type === typeName)) this.instances.push({ type: typeName, name, line: this.peek().line });
          this.skipToSemicolon();
          return;
        }
      }
      this.pos = save;
    }
    this.pos = start;
    this.skipToSemicolon();
  }

  parseStruct(scope, isUnion) {
    this.next();
    const rawName = this.ident();
    if (this.at('<')) { this.skipAngles(); this.skipBlock(); return; } // 模板先跳过
    const name = scope ? `${scope}_${rawName}` : rawName;
    if (this.eat(';')) return null; // 前向声明
    let base = null;
    if (this.eat(':')) {
      base = this.parseTypeName();
      if (this.at('<')) this.skipAngles();
    }
    this.expect('{', '`{`');
    const fields = [];
    let stopped = false;
    while (!this.at('}') && !this.at('eof')) {
      if (stopped) { this.skipStatementOrBlock(); continue; }
      if (this.atWord('if')) { this.skipConditional(); stopped = true; continue; }
      if (this.atWord('match')) { this.skipConditional(); stopped = true; continue; }
      if (this.atWord('try')) { this.skipBlock(); stopped = true; continue; }
      if (this.atWord('break')) { this.skipToSemicolon(); stopped = true; continue; }
      if (this.atWord('fn')) { this.skipFunction(); continue; }
      if (this.atWord('struct')) { this.parseStruct(name, false); continue; }
      if (this.atWord('union')) { this.parseStruct(name, true); continue; }
      if (this.atWord('bitfield')) { this.parseBitfield(name); continue; }
      if (this.atWord('enum')) { this.parseEnum(name); continue; }
      if (this.atWord('using')) { this.parseUsing(name); continue; }
      if (this.atWord('padding')) {
        this.next();
        if (this.eat('[')) {
          const len = this.parseArrayLength();
          if (len == null) { stopped = true; continue; }
          fields.push({ kind: 'pad', n: len });
        }
        this.eat(';');
        continue;
      }
      const field = this.parseField();
      if (!field) { stopped = true; continue; }
      fields.push(...field);
    }
    this.eat('}');
    const def = { name, rawName, fields, union: isUnion, scope, base };
    if (isUnion) this.unions.set(name, def);
    else this.structs.set(name, def);
    this.order.push({ kind: isUnion ? 'union' : 'struct', name });
    return def;
  }

  parseBitfield(scope) {
    this.next();
    const rawName = this.ident();
    if (this.at('<')) { this.skipAngles(); this.skipBlock(); return; }
    const name = scope ? `${scope}_${rawName}` : rawName;
    this.expect('{', '`{`');
    const members = [];
    let total = 0;
    let broken = false;
    while (!this.at('}') && !this.at('eof')) {
      if (broken) { this.skipStatementOrBlock(); continue; }
      if (this.atWord('padding')) {
        this.next();
        if (this.at(':')) {
          this.next();
          const w = this.evalConstUntil(1);
          if (w == null) { this.skipToSemicolon(); broken = true; continue; }
          total += w;
        }
        this.eat(';');
        continue;
      }
      // optional type token
      let memberName;
      if (this.at('ident') && this.peek(1).t === ':') memberName = this.ident();
      else {
        // `u8 x : 3` form
        const typeName = this.parseTypeName();
        if (!typeName || !this.at('ident')) { this.skipToSemicolon(); broken = true; continue; }
        memberName = this.ident();
      }
      if (!this.at(':')) {
        // ImHex 允许在 bitfield 里混入普通字段；这里无法用 bit 布局表达，跳过后续成员。
        this.skipToSemicolon();
        broken = true;
        continue;
      }
      this.expect(':', '`:`');
      const width = this.evalConstUntil(1);
      this.eat(';');
      if (width == null || width <= 0 || total + width > 64) { this.skipToSemicolon(); broken = true; continue; }
      members.push({ name: memberName, lo: total, width });
      total += width;
    }
    this.eat('}');
    const unit = total <= 8 ? 1 : total <= 16 ? 2 : total <= 32 ? 4 : 8;
    this.bitfields.set(name, { name, rawName, members, unit, total });
    this.order.push({ kind: 'bitfield', name });
  }

  parseEnum(scope) {
    this.next();
    const rawName = this.ident();
    const name = scope ? `${scope}_${rawName}` : rawName;
    let repr = 'u32';
    if (this.eat(':')) repr = this.parseTypeName() || 'u32';
    this.expect('{', '`{`');
    const variants = [];
    let auto = 0;
    while (!this.at('}') && !this.at('eof')) {
      const vname = this.ident();
      let value = auto;
      if (this.eat('=')) {
        const v = this.evalConstUntil(new Set([',', '}', '...']));
        if (v != null) value = v;
        if (this.at('...')) { this.next(); this.evalConstUntil(new Set([',', '}'])); }
      }
      variants.push({ name: vname, value });
      auto = value + 1;
      this.eat(',');
    }
    this.eat('}');
    this.enums.set(name, { name, rawName, repr, variants });
  }

  parseUsing(scope) {
    this.next();
    if (this.at('ident') && (this.peek(1).t === ';' || this.peek(1).t === '=')) {
      const aliasRaw = this.ident();
      if (this.eat('=')) {
        const target = this.parseTypeName();
        this.eat(';');
        if (target) {
          const alias = scope ? `${scope}_${aliasRaw}` : aliasRaw;
          this.aliases.set(alias, target);
        }
        return;
      }
      this.skipToSemicolon();
      return;
    }
    this.skipToSemicolon();
  }

  parseField() {
    // `Type name @ expr` pointer / `Type name = expr` computed -> no bytes
    const type = this.parseType();
    if (!type) return null;
    const declarators = [];
    let pointer = false;
    let computed = false;
    while (!this.at(';') && !this.at('eof')) {
      if (this.at('*')) { this.next(); pointer = true; continue; }
      if (this.at('ident')) {
        const name = this.ident();
        let count = null;
        let dynamic = false;
        if (this.eat('[')) {
          count = this.parseArrayLength();
          if (count == null) dynamic = true;
        }
        if (this.eat('@')) { pointer = true; this.skipToSemicolon(); break; }
        if (this.eat('=')) { computed = true; this.skipToSemicolon(); break; }
        if (dynamic) { this.skipToSemicolon(); return null; }
        declarators.push({ name, count });
        if (this.eat(',')) continue;
        break;
      }
      // 无法识别：跳到分号
      this.skipToSemicolon();
      return null;
    }
    this.eat(';');
    if (pointer || computed || !declarators.length) return [];
    return declarators.map((d) => ({ kind: 'field', type, name: d.name, count: d.count }));
  }

  parseType() {
    let endian = null;
    if (this.atWord('be') || this.atWord('le')) endian = this.next().v === 'be' ? 'big' : 'little';
    const name = this.parseTypeName();
    if (!name) return null;
    if (this.at('*')) { this.next(); return null; }
    return { name, endian };
  }

  parseTypeName() {
    if (!this.at('ident')) return null;
    let name = this.ident();
    while (this.at('::')) { this.next(); name += `_${this.ident()}`; }
    return name;
  }

  parseArrayLength() {
    // 已消费 '['；读到匹配的 ']'
    let depth = 1;
    const start = this.pos;
    const startLine = this.peek()?.line ?? 0;
    while (!this.at('eof') && depth > 0) {
      if (this.at('[')) depth += 1;
      else if (this.at(']')) depth -= 1;
      if (depth === 0) break;
      this.next();
    }
    const end = this.pos;
    if (this.at('eof')) {
      const ctx = this.tokens.slice(start, start + 8).map((t) => t.v ?? t.t).join(' ');
      throw new Error(`line ${startLine}: 数组长度没有闭合的 ]（从 ${ctx} 开始）`);
    }
    this.expect(']', '`]`');
    const tokens = this.tokens.slice(start, end);
    return this.evalConstTokens(tokens);
  }

  evalConstUntil(count) {
    // 读取 1 个表达式（到 , ; } 或指定数量），用于 bitfield / enum
    const start = this.pos;
    let depth = 0;
    while (!this.at('eof')) {
      const p = this.peek();
      if (depth === 0 && [',', ';', '}', '...'].includes(p.t)) break;
      if (['(', '[', '{'].includes(p.t)) depth += 1;
      else if ([')', ']', '}'].includes(p.t)) {
        if (depth === 0) break;
        depth -= 1;
      }
      this.next();
      if (this.pos - start >= count && depth === 0) break;
    }
    return this.evalConstTokens(this.tokens.slice(start, this.pos));
  }

  evalConstTokens(tokens) {
    if (!tokens.length) return null;
    let i = 0;
    const peek = () => tokens[i];
    const next = () => tokens[i++];
    const parseExpr = () => {
      let value = parseTerm();
      while (peek() && (peek().t === '|' || peek().t === '^')) {
        const op = next().t;
        const rhs = parseTerm();
        value = op === '|' ? value | rhs : value ^ rhs;
      }
      return value;
    };
    const parseTerm = () => {
      let value = parseFactor();
      while (peek() && (peek().t === '+' || peek().t === '-')) {
        const op = next().t;
        const rhs = parseFactor();
        value = op === '+' ? value + rhs : value - rhs;
      }
      return value;
    };
    const parseFactor = () => {
      let value = parseUnary();
      while (peek() && (peek().t === '*' || peek().t === '/' || peek().t === '%' || peek().t === '<<' || peek().t === '>>')) {
        const op = next().t;
        const rhs = parseUnary();
        if (op === '*') value *= rhs;
        else if (op === '/') value = Math.floor(value / rhs);
        else if (op === '%') value %= rhs;
        else if (op === '<<') value <<= rhs;
        else if (op === '>>') value >>= rhs;
      }
      return value;
    };
    const parseUnary = () => {
      if (peek() && (peek().t === '-' || peek().t === '+')) {
        const op = next().t;
        const v = parseUnary();
        return op === '-' ? -v : v;
      }
      if (peek() && peek().t === '(') {
        next();
        const v = parseExpr();
        if (peek() && peek().t === ')') next();
        return v;
      }
      const p = next();
      if (!p) throw new Error('数组长度为空');
      if (p.t === 'number') return Number(p.v);
      if (p.t === 'ident') {
        const macro = this.macros.get(p.v);
        if (macro != null) {
          const parsed = this.evalConstTokens(lex(String(macro)));
          if (parsed != null) return parsed;
        }
        throw new Error(`非常量 ${p.v}`);
      }
      throw new Error(`无法求值 ${p.t}`);
    };
    try {
      const v = parseExpr();
      if (i !== tokens.length) return null;
      return Number.isFinite(v) ? v : null;
    } catch {
      return null;
    }
  }

  skipFunction() {
    this.eatWord('fn');
    while (!this.at('{') && !this.at('eof')) this.next();
    this.skipBlock();
  }

  skipBlock() {
    if (!this.at('{')) { this.skipToSemicolon(); return; }
    this.next();
    let depth = 1;
    while (!this.at('eof') && depth > 0) {
      const p = this.next();
      if (p.t === '{') depth += 1;
      else if (p.t === '}') depth -= 1;
    }
  }

  skipBrackets() {
    this.expect('[', '`[`');
    let depth = 1;
    while (!this.at('eof') && depth > 0) {
      const p = this.next();
      if (p.t === '[') depth += 1;
      else if (p.t === ']') depth -= 1;
    }
  }

  skipAngles() {
    this.expect('<', '`<`');
    let depth = 1;
    while (!this.at('eof') && depth > 0) {
      const p = this.next();
      if (p.t === '<') depth += 1;
      else if (p.t === '>') depth -= 1;
    }
  }

  skipConditional() {
    // 跳过 `if (...)` / `match (...)` 后面紧跟的块，以及 else 分支
    if (this.atWord('if') || this.atWord('match')) this.next();
    if (this.at('(')) {
      // skip balanced parens
      this.next();
      let depth = 1;
      while (!this.at('eof') && depth > 0) {
        const p = this.next();
        if (p.t === '(') depth += 1;
        else if (p.t === ')') depth -= 1;
      }
    }
    this.skipBlock();
    while (this.atWord('else')) {
      this.next();
      if (this.atWord('if')) { this.next(); if (this.at('(')) { this.next(); let d = 1; while (!this.at('eof') && d > 0) { const p = this.next(); if (p.t === '(') d += 1; else if (p.t === ')') d -= 1; } } }
      this.skipBlock();
    }
  }

  skipStatementOrBlock() {
    if (this.at('{')) { this.skipBlock(); return; }
    this.skipToSemicolon();
  }

  skipToSemicolon() {
    let depth = 0;
    while (!this.at('eof')) {
      const p = this.next();
      if (p.t === '{' || p.t === '(' || p.t === '[') depth += 1;
      else if (p.t === '}' || p.t === ')' || p.t === ']') {
        if (depth === 0) { this.pos -= 1; return; }
        depth -= 1;
      } else if (p.t === ';' && depth === 0) return;
    }
  }
}

/* -------------------------------------------------------------- conversion */

const JS_RESERVED = new Set([
  'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default',
  'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally', 'for', 'function',
  'if', 'implements', 'import', 'in', 'instanceof', 'interface', 'let', 'new', 'null', 'package',
  'private', 'protected', 'public', 'return', 'static', 'super', 'switch', 'this', 'throw', 'true',
  'try', 'typeof', 'var', 'void', 'while', 'with', 'yield', 'arguments', 'eval',
]);

function sanitize(name) {
  let out = String(name).replace(/[^A-Za-z0-9_]/g, '_');
  if (!/^[A-Za-z_]/.test(out)) out = `T_${out}`;
  if (JS_RESERVED.has(out)) out = `T_${out}`;
  return out;
}

function jsString(text) {
  return JSON.stringify(String(text).replace(/\bexport\b/gi, '导出'));
}

function labelOpt(desc) {
  return desc ? `, label: ${jsString(desc.slice(0, 120))}` : '';
}

class Converter {
  constructor(parser, pack) {
    this.p = parser;
    this.pack = pack;
    this.typeName = new Map();
    this.converted = new Map();
    this.converting = new Set();
    this.notes = [];
    this.complete = true;
    this.helperNodes = [];
    this.helperIds = new Set();
    this.needVarint = false;
  }

  ref(name) {
    if (!this.typeName.has(name)) this.typeName.set(name, sanitize(name));
    return this.typeName.get(name);
  }

  note(msg) {
    this.notes.push(msg);
    this.complete = false;
  }

  helperNote(msg) {
    this.notes.push(msg);
  }

  addHelper(id, code) {
    let key = sanitize(id);
    for (let i = 2; this.helperIds.has(key); i += 1) key = `${sanitize(id)}_${i}`;
    this.helperIds.add(key);
    this.helperNodes.push({ id: key, code });
  }

  addVarintHelper() {
    if (this.needVarint) return;
    this.needVarint = true;
    this.addHelper(
      'read_varint',
      `calcNode({\n      label: '读 Varint / LEB128',\n      description: '按地址解码 1–9 字节无符号 LEB128；有符号字段请用 sLEB128 变体',\n      inputs: { address: 'number' },\n      outputs: { value: 'number', bytes: 'number' },\n      run: ({ address }, ctx) => {\n        let value = 0;\n        for (let i = 0; i < 9; i += 1) {\n          const b = ctx.mem.u8(Number(address) + i);\n          if (i === 8) return { value: value * 256 + b, bytes: 9 };\n          value = value * 128 + (b & 0x7f);\n          if ((b & 0x80) === 0) return { value, bytes: i + 1 };\n        }\n        return { value, bytes: 9 };\n      },\n    })`,
    );
    this.helperNote('varint/LEB128: 已生成 read_varint 辅助节点');
  }

  resolve(name) {
    const seen = new Set();
    while (this.p.aliases.has(name) && !seen.has(name)) {
      seen.add(name);
      name = this.p.aliases.get(name);
    }
    return name;
  }

  enumOf(name) {
    const resolved = this.resolve(name);
    return this.p.enums.get(resolved) ?? null;
  }

  bitfieldOf(name) {
    const resolved = this.resolve(name);
    return this.p.bitfields.get(resolved) ?? null;
  }

  structOf(name) {
    const resolved = this.resolve(name);
    return this.p.structs.get(resolved) ?? this.p.unions.get(resolved) ?? null;
  }

  convertStruct(name) {
    const resolved = this.resolve(name);
    if (this.converted.has(resolved)) return this.converted.get(resolved);
    if (this.converting.has(resolved)) { this.note(`循环引用 ${resolved}`); return null; }
    const def = this.structOf(resolved);
    if (!def) return null;
    this.converting.add(resolved);
    const fields = [];
    let stopped = false;
    if (def.base) {
      const base = this.convertStruct(def.base);
      if (base) fields.push(...base.fields);
      else this.note(`${def.name}: 基类 ${def.base} 不可移植`);
    }
    for (const f of def.fields) {
      if (stopped) break;
      if (f.kind === 'pad') { fields.push(`  pad(${f.n}),`); continue; }
      const code = this.convertField(def.name, f);
      if (!code) { stopped = true; break; }
      fields.push(`  ${code},`);
    }
    this.converting.delete(resolved);
    if (!fields.length) { this.converted.set(resolved, null); return null; }
    const entry = {
      ref: this.ref(resolved),
      def,
      fields,
      union: !!def.union,
      code: `${def.union ? 'union' : 'struct'}(${jsString(resolved)}, [\n${fields.join('\n')}\n])`,
    };
    this.converted.set(resolved, entry);
    return entry;
  }

  convertBitfield(name) {
    const resolved = this.resolve(name);
    if (this.converted.has(`bf:${resolved}`)) return this.converted.get(`bf:${resolved}`);
    const def = this.bitfieldOf(resolved);
    if (!def) return null;
    if (!def.members.length) {
      if (def.total > 0 && def.total <= 64) {
        const size = Math.ceil(def.total / 8);
        const kind = size === 1 ? 'u8' : size === 2 ? 'u16' : size === 4 ? 'u32' : size === 8 ? 'u64' : null;
        const field = kind
          ? `${kind}('value', { endian: ${jsString(this.pack.endian)} })`
          : `bytes('value', { size: ${size} })`;
        const entry = { ref: this.ref(resolved), def, code: `struct(${jsString(resolved)}, [\n  ${field},\n])` };
        this.converted.set(`bf:${resolved}`, entry);
        return entry;
      }
      this.note(`${resolved}: 位域没有可移植的固定成员`);
      this.converted.set(`bf:${resolved}`, null);
      return null;
    }
    const code = def.members.map((m) =>
      `  bits(${jsString(m.name)}, ${m.width}, { at: 0, bit: ${m.lo}, unit: ${def.unit}${m.name ? `, label: ${jsString(m.name)}` : ''} }),`,
    ).join('\n');
    const entry = { ref: this.ref(resolved), def, code: `struct(${jsString(resolved)}, [\n${code}\n])` };
    this.converted.set(`bf:${resolved}`, entry);
    return entry;
  }

  convertField(parent, field) {
    const { type, name, count } = field;
    const resolved = this.resolve(type.name);
    const desc = null;
    const endian = type.endian ? `, endian: ${jsString(type.endian)}` : '';

    const prim = PRIMS[resolved];
    if (prim) {
      if (count != null) {
        if (count < 1) return null;
        if (prim.kind === 'char') return `str(${jsString(name)}, { size: ${count}${labelOpt(desc)} })`;
        if (prim.kind === 'u8' || prim.kind === 'i8' || prim.kind === 'bool') return `bytes(${jsString(name)}, { size: ${count}${labelOpt(desc)} })`;
        const lo = resolved.endsWith('be') || resolved.endsWith('le');
        if (type.endian) {
          this.note(`${parent}.${name}: 带显式字节序的标量数组未移植`);
          return null;
        }
        return `array(${jsString(name)}, ${jsString(prim.kind)}, ${count}${desc ? `, { label: ${jsString(desc)} }` : ''})`;
      }
      return `${prim.kind}(${jsString(name)}, { ${type.endian ? `endian: ${jsString(type.endian)}` : ''}${labelOpt(desc).replace(/^, /, '')} })`;
    }

    const enumDef = this.enumOf(resolved);
    if (enumDef) {
      const reprName = this.resolve(enumDef.repr);
      const reprPrim = PRIMS[reprName] ?? PRIMS[enumDef.repr];
      if (!reprPrim) {
        const sized = ({ u24: 3, u128: 16 })[reprName] ?? ({ u24: 3, u128: 16 })[enumDef.repr];
        if (sized) {
          this.helperNote(`${parent}.${name}: 枚举底层 ${enumDef.repr} 按 ${sized} 字节原始值读取，数值映射不可用`);
          return `bytes(${jsString(name)}, { size: ${sized}${desc ? `, label: ${jsString(desc)}` : ''} })`;
        }
        this.note(`${parent}.${name}: 枚举底层类型 ${enumDef.repr} 不支持`);
        return null;
      }
      const values = enumDef.variants.map((v) => `${jsString(String(v.value))}: ${jsString(v.name)}`).join(', ');
      if (count != null) return `array(${jsString(name)}, ${jsString(reprPrim.kind)}, ${count}${desc ? `, { label: ${jsString(desc)} }` : ''})`;
      return `${reprPrim.kind}(${jsString(name)}, { values: { ${values} }${labelOpt(desc)} })`;
    }

    const bf = this.bitfieldOf(resolved);
    if (bf) {
      const conv = this.convertBitfield(resolved);
      if (!conv) return null;
      if (count != null) return `array(${jsString(name)}, ${conv.ref}, ${count}${desc ? `, { label: ${jsString(desc)} }` : ''})`;
      return `record(${jsString(name)}, ${conv.ref}${desc ? `, { label: ${jsString(desc)} }` : ''})`;
    }

    const struct = this.convertStruct(resolved);
    if (struct) {
      if (count != null) return `array(${jsString(name)}, ${struct.ref}, ${count}${desc ? `, { label: ${jsString(desc)} }` : ''})`;
      return `record(${jsString(name)}, ${struct.ref}${desc ? `, { label: ${jsString(desc)} }` : ''})`;
    }

    if (/varint|LEB128|vint/i.test(resolved)) {
      this.addVarintHelper();
      this.note(`${parent}.${name}: 变长 ${resolved} 已生成 read_varint 辅助节点，静态布局在此停止`);
      return null;
    }
    this.note(`${parent}.${name}: 类型 ${resolved} 不可移植`);
    return null;
  }

  collect() {
    const defs = [];
    const done = new Set();
    const visit = (name) => {
      const resolved = this.resolve(name);
      if (done.has(resolved)) return;
      const def = this.structOf(resolved);
      if (!def) {
        const bf = this.bitfieldOf(resolved);
        if (bf) {
          const conv = this.convertBitfield(resolved);
          done.add(resolved);
          if (conv) defs.push(conv);
        }
        return;
      }
      done.add(resolved);
      // 先访问基类与字段引用
      if (def.base) visit(def.base);
      for (const f of def.fields) {
        if (f.kind !== 'field') continue;
        const t = this.resolve(f.type.name);
        if (this.structOf(t) || this.bitfieldOf(t)) visit(t);
      }
      const conv = this.convertStruct(resolved);
      if (conv) defs.push(conv);
    };
    for (const name of this.p.order) {
      if (name.kind === 'struct' || name.kind === 'union' || name.kind === 'bitfield') visit(name.name);
    }
    // 去重
    const seen = new Set();
    return defs.filter((d) => {
      if (seen.has(d.ref)) return false;
      seen.add(d.ref);
      return true;
    });
  }

  build() {
    const defs = this.collect();
    if (!defs.length) return null;
    const known = new Set(defs.map((d) => d.ref));
    let entry = null;
    for (const inst of this.p.instances) {
      const resolved = this.resolve(inst.type);
      const conv = this.convertStruct(resolved) ?? this.convertBitfield(resolved);
      if (conv && known.has(conv.ref)) { entry = conv; break; }
    }
    if (!entry) entry = defs[0];

    const nodes = [{ id: 'entry', ref: entry.ref, label: `${entry.def.name}（入口）` }];
    const ids = new Set(['entry']);
    for (const d of defs) {
      if (d.ref === entry.ref) continue;
      let id = sanitize(d.def.name);
      for (let i = 2; ids.has(id); i += 1) id = `${sanitize(d.def.name)}_${i}`;
      ids.add(id);
      nodes.push({ id, ref: d.ref, label: d.def.name });
    }

    const types = defs.map((d) => d.ref).join(', ');
    const nodeLines = nodes.map((n) => `    ${jsString(n.id)}: structNode(${n.ref}, { label: ${jsString(n.label)}, description: ${jsString(`解析 ${n.label}。数据源接 File 或沿上游继承；address 填结构起始偏移；字段就是输出端口。`)} }),`);
    for (const h of this.helperNodes) {
      const id = this.helperIds.has(h.id) ? h.id : sanitize(h.id);
      nodeLines.push(`    ${jsString(id)}: ${h.code},`);
    }
    const nodeCode = nodeLines.join('\n');
    const coverage = this.complete && !this.notes.length && !this.helperNodes.length ? 'complete' : 'partial';
    const header = [
      '/// <reference path="../../../types/memlink-bp.d.ts" />',
      '',
      '// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。',
      `// 修改：${GENERATED_AT} 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。`,
      `// 上游：${IMHEX_URL}/${this.pack.relPath}`,
      `// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。`,
      `// 覆盖：${coverage}${this.helperNodes.length ? `；含 ${this.helperNodes.length} 个动态辅助节点` : ''}${this.notes.length ? `；未移植 ${this.notes.length} 项（见文件末尾）` : ''}`,
      '',
    ].join('\n');
    const footer = this.notes.length
      ? `\n\n/*\n未移植项：\n${this.notes.map((s) => `- ${s.replace(/\bexport\b/gi, '导出')}`).join('\n')}\n*/\n`
      : '\n';
    return {
      code: `${header}${defs.map((d) => `const ${d.ref} = ${d.code};`).join('\n\n')}\n\nexport default definePack({\n  name: ${jsString(this.pack.name)},\n  endian: ${jsString(this.pack.endian)},\n  pointerSize: 8,\n  types: [${types}],\n  nodes: {\n${nodeCode}\n  },\n});\n${footer}`,
      coverage,
      notes: this.notes.slice(),
      helpers: this.helperNodes.length,
      types: defs.length,
      nodes: nodes.length + this.helperNodes.length,
    };
  }
}

/* ------------------------------------------------------------------- main */

function parseArgs(argv) {
  const rootDefault = existsSync(join(process.cwd(), 'store', 'index.json')) ? 'store' : '.';
  const out = { root: rootDefault, src: null, write: false, limit: 0 };
  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--write') out.write = true;
    else if (a === '--root') out.root = argv[++i];
    else if (a === '--src') out.src = argv[++i];
    else if (a === '--limit') out.limit = Number(argv[++i]);
    else throw new Error(`未知参数 ${a}`);
  }
  return out;
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir).sort()) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith('.hexpat')) out.push(full);
  }
  return out;
}

function slugOf(file) {
  return basename(file, '.hexpat').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const CATEGORY_HINTS = [
  ['image', /\b(png|jpe?g|gif|bmp|tga|pcx|ktx|dds|ico|icns|tiff?|webp|psd|openexr|jxl|qoi|rgb|rgba|image|texture)\b/i],
  ['media', /\b(wav|wave|flac|ogg|mp3|midi|aiff|audio|video|mp4|matroska|avi|flv|adts|vgm|mod|s3m|xm|it)\b/i],
  ['archive', /\b(zip|7z|rar|tar|cpio|gzip|bzip|xz|zstd|lz4|archive|compress|cab|chm|ar)\b/i],
  ['executable', /\b(elf|pe|coff|macho|mach-o|dex|java|wasm|spirv|nexe|xex|xci|nro|nso|pef|binary)\b/i],
  ['database', /\b(sqlite|database|db)\b/i],
  ['game', /\b(nes|gameboy|gb|gba|n64|nds|wad|rom|save|snes|spc|nsf)\b/i],
  ['model', /\b(stl|gltf|glb|3ds|fbx|obj|model|mesh|usdc|vox)\b/i],
  ['network', /\b(pcap|network|usb|ip|packet)\b/i],
  ['system', /\b(evtx|lnk|prefetch|regf|minidump|dmp|thumbcache|uefi|firmware|dtb|android|boot)\b/i],
  ['font', /\b(ttf|otf|woff|font|truetype)\b/i],
  ['data', /\b(protobuf|msgpack|bson|bencode|bplist|pickle|nbt|gguf|parquet|json|serial)\b/i],
];

function categoryOf(name, description, relPath) {
  const hay = `${name} ${description} ${relPath}`;
  for (const [cat, re] of CATEGORY_HINTS) if (re.test(hay)) return cat;
  return 'other';
}

function convertFile(file, srcRoot, root) {
  const relPath = file.slice(srcRoot.length + 1).replace(/\\/g, '/');
  const source = readFileSync(file, 'utf8');
  const pre = preprocess(source);
  let parser;
  try {
    parser = new Parser(lex(pre.text), pre.macros).parse();
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
  if (!parser.structs.size && !parser.unions.size) return { ok: false, error: '没有 struct/union' };
  const base = filenameTitle(file);
  const pack = {
    name: pre.description || base,
    endian: pre.endian ?? 'little',
    relPath,
  };
  const conv = new Converter(parser, pack);
  let out;
  try {
    out = conv.build();
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
  if (!out) return { ok: false, error: '没有可移植的固定字段' };
  const id = `imhex-${relPath.toLowerCase().replace(/\.hexpat$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
  return {
    ok: true,
    id,
    ...out,
    meta: {
      id,
      name: `ImHex · ${base}`,
      version: '1.0.0',
      category: categoryOf(base, pre.description, relPath),
      coverage: out.coverage,
      ...(out.helpers ? { helpers: out.helpers } : {}),
      summary: (pre.description || `${base}（移植自 ImHex Pattern Language）`).slice(0, 160),
      description: (pre.description || `${base} 的 ImHex 固定布局移植。`).slice(0, 400),
      tags: ['imhex', slugOf(file)],
      author: 'ImHex-Patterns contributors',
      license: 'GPL-2.0-only',
      homepage: `${IMHEX_URL}/${relPath}`,
      source: {
        provider: 'imhex',
        path: relPath,
        url: `${IMHEX_URL}/${relPath}`,
        license: 'GPL-2.0-only',
      },
    },
  };
}

function filenameTitle(file) {
  return basename(file, '.hexpat')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function main() {
  const args = parseArgs(process.argv);
  const root = resolve(args.root);
  const src = resolve(args.src ?? '.');
  if (!existsSync(src)) throw new Error(`找不到 ImHex patterns 目录：${src}`);
  const files = walk(src);
  const results = [];
  for (const file of files) {
    const r = convertFile(file, src, root);
    results.push({ file: file.slice(src.length + 1), r });
  }
  const ok = results.filter((x) => x.r.ok);
  for (const { file, r } of results) {
    if (!r.ok) {
      if (/没有 (struct|可移植)/.test(r.error)) continue;
      console.log(`✗ ${file}: ${r.error}`);
      continue;
    }
    console.log(`${r.coverage === 'complete' ? '✓' : '◐'} ${file.padEnd(48)} ${String(r.types).padStart(2)} 类型 ${String(r.nodes).padStart(2)} 节点${r.notes.length ? ` 跳过 ${r.notes.length}` : ''}`);
  }
  console.log(`\n${ok.length}/${results.length} 个 pattern 可生成`);
  if (!args.write) return;

  const packsDir = join(root, 'packs');
  let order = 1200;
  for (const { r } of ok) {
    const dir = join(packsDir, r.id);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'pack.bp.ts'), r.code);
    r.meta.order = order;
    writeFileSync(join(dir, 'meta.json'), `${JSON.stringify(r.meta, null, 2)}\n`);
    order += 1;
  }
  console.log(`✓ 已写入 ${ok.length} 个 ImHex pack 到 ${packsDir}`);
}

main();
