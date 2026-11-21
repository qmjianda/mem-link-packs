#!/usr/bin/env node
/**
 * 生成 / 校验 mem-link pack 商店索引。
 *
 * 用法（在仓库根目录）：
 *   node scripts/build-index.mjs              # 生成 index.json
 *   node scripts/build-index.mjs --check      # CI：索引过期则退出 1
 *   node scripts/build-index.mjs --root store # 从上层仓库指定内容目录
 *
 * 只使用 Node 内置模块，便于在独立商店仓库的 GitHub Actions 中运行。
 */

import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const STORE_FORMAT = 'memlink-pack-store/1';
const STORE_NAME = 'mem-link Pack Store';
const STORE_HOMEPAGE = 'https://github.com/qmjianda/mem-link-packs';
const STORE_DESCRIPTION =
  '常见二进制格式的 mem-link pack 集合：NES、SQLite、PNG、BMP、ZIP、GIF、ELF、PE、JPEG、WAV。';

function parseArgs(argv) {
  const out = { check: false, quiet: false, root: '.' };
  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--check') out.check = true;
    else if (arg === '--quiet') out.quiet = true;
    else if (arg === '--root') {
      const next = argv[i + 1];
      if (!next) throw new Error('--root 需要一个目录参数');
      out.root = next;
      i += 1;
    } else if (arg.startsWith('-')) {
      throw new Error(`未知参数：${arg}`);
    } else {
      out.root = arg;
    }
  }
  return out;
}

function fail(message) {
  console.error(`✗ ${message}`);
  process.exit(1);
}

function readJson(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'));
  } catch (e) {
    throw new Error(`${file} 不是合法 JSON：${e instanceof Error ? e.message : String(e)}`);
  }
}

function requiredString(meta, key, file) {
  const value = meta[key];
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${file} 缺少字符串字段 ${key}`);
  }
  return value.trim();
}

function optionalStringArray(meta, key, file) {
  if (meta[key] === undefined) return [];
  if (!Array.isArray(meta[key]) || meta[key].some((v) => typeof v !== 'string' || !v.trim())) {
    throw new Error(`${file} 的 ${key} 必须是非空字符串数组`);
  }
  return meta[key].map((v) => v.trim());
}

function build(root) {
  const packsDir = join(root, 'packs');
  if (!existsSync(packsDir) || !statSync(packsDir).isDirectory()) {
    throw new Error(`找不到 packs 目录：${packsDir}`);
  }

  const dirs = readdirSync(packsDir)
    .filter((name) => !name.startsWith('.'))
    .filter((name) => statSync(join(packsDir, name)).isDirectory())
    .sort();

  const ids = new Set();
  const packs = [];
  for (const dir of dirs) {
    const packDir = join(packsDir, dir);
    const metaFile = join(packDir, 'meta.json');
    const sourceFile = join(packDir, 'pack.bp.ts');
    if (!existsSync(metaFile)) throw new Error(`${dir}: 缺少 meta.json`);
    if (!existsSync(sourceFile)) throw new Error(`${dir}: 缺少 pack.bp.ts`);

    const meta = readJson(metaFile);
    if (!meta || typeof meta !== 'object' || Array.isArray(meta)) {
      throw new Error(`${metaFile} 必须是对象`);
    }
    const id = requiredString(meta, 'id', metaFile);
    if (id !== dir) throw new Error(`${metaFile}: id=${id} 与目录名 ${dir} 不一致`);
    if (!/^[a-z0-9][a-z0-9-]*$/.test(id)) {
      throw new Error(`${metaFile}: id 只能包含小写字母、数字和连字符`);
    }
    if (ids.has(id)) throw new Error(`重复的 pack id：${id}`);
    ids.add(id);

    const version = requiredString(meta, 'version', metaFile);
    if (!/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(version)) {
      throw new Error(`${metaFile}: version 必须是 semver，例如 1.0.0`);
    }
    const name = requiredString(meta, 'name', metaFile);
    const category = requiredString(meta, 'category', metaFile);
    const summary = requiredString(meta, 'summary', metaFile);
    const description = meta.description === undefined ? summary : requiredString(meta, 'description', metaFile);
    const author = meta.author === undefined ? 'qmjianda' : requiredString(meta, 'author', metaFile);
    const license = meta.license === undefined ? 'MIT' : requiredString(meta, 'license', metaFile);
    const order = meta.order === undefined ? 1000 : meta.order;
    if (!Number.isFinite(order)) throw new Error(`${metaFile}: order 必须是数字`);

    const source = readFileSync(sourceFile, 'utf8');
    const sha256 = createHash('sha256').update(source).digest('hex');

    const coverage = meta.coverage === 'partial' ? 'partial' : 'complete';
    const sourceInfo = meta.source && typeof meta.source === 'object' && !Array.isArray(meta.source)
      ? meta.source
      : undefined;

    packs.push({
      id,
      name,
      version,
      category,
      order,
      summary,
      description,
      tags: optionalStringArray(meta, 'tags', metaFile),
      author,
      license,
      ...(meta.homepage ? { homepage: String(meta.homepage) } : {}),
      ...(meta.featured === true ? { featured: true } : {}),
      ...(coverage === 'partial' ? { coverage } : {}),
      ...(Number.isFinite(meta.helpers) && meta.helpers > 0 ? { helpers: meta.helpers } : {}),
      ...(sourceInfo ? { source: sourceInfo } : {}),
      path: `packs/${id}/pack.bp.ts`,
      sha256,
      size: Buffer.byteLength(source),
    });
  }

  packs.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
  return {
    format: STORE_FORMAT,
    name: STORE_NAME,
    description: STORE_DESCRIPTION,
    homepage: STORE_HOMEPAGE,
    packs,
  };
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv);
  } catch (e) {
    fail(e instanceof Error ? e.message : String(e));
  }
  const root = resolve(args.root);
  let index;
  try {
    index = build(root);
  } catch (e) {
    fail(e instanceof Error ? e.message : String(e));
  }

  const text = `${JSON.stringify(index, null, 2)}\n`;
  const outFile = join(root, 'index.json');

  if (args.check) {
    if (!existsSync(outFile)) fail('index.json 不存在，请运行 node scripts/build-index.mjs');
    const current = readFileSync(outFile, 'utf8');
    if (current !== text) {
      fail('index.json 已过期，请运行 node scripts/build-index.mjs 并提交结果');
    }
    if (!args.quiet) console.log(`✓ index.json 与 ${index.packs.length} 个 pack 一致`);
    return;
  }

  writeFileSync(outFile, text);
  if (!args.quiet) {
    console.log(`✓ 已生成 index.json：${index.packs.length} 个 pack`);
    for (const pack of index.packs) {
      console.log(`  ${pack.id.padEnd(10)} ${pack.version.padEnd(8)} ${pack.name}`);
    }
  }
}

main();
