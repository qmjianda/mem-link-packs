#!/usr/bin/env node
/**
 * 为每个 pack 生成 reference.blueprint.json。
 *
 * 参考蓝图不是“格式样本”，而是一张已经接好线的使用说明图：
 *   File 节点（自动生成的零填充示例） → pack 的结构/数组/链表节点
 *   + 一个标注节点，写明入口、节点数量、许可与来源。
 *
 * 示例 buffer 默认几百字节到 4 KB；超过 4 KB 的类型会在标注里提示
 * “示例只覆盖前 4 KB，真实文件更完整”。这样仓库不会被上百 MB 的
 * 伪造样本撑爆，同时打开蓝图就能看到字段和接线。
 *
 * 用法：
 *   node store/scripts/build-references.mjs [--root store] [--check]
 */

import { build } from 'esbuild';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const cacheDir = join(root, '.cache', 'build-references');
const bundlePath = join(cacheDir, 'loader.mjs');

function parseArgs(argv) {
  const out = { store: join(root, 'store'), check: false };
  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--root') out.store = resolve(argv[++i]);
    else if (a === '--check') out.check = true;
    else if (a === '--help' || a === '-h') {
      console.log('用法: node store/scripts/build-references.mjs [--root store] [--check]');
      process.exit(0);
    } else throw new Error(`未知参数 ${a}`);
  }
  return out;
}

async function loadLoader() {
  mkdirSync(cacheDir, { recursive: true });
  await build({
    stdin: {
      contents: [
        "export { loadBlueprintPack } from './src/bp/load.ts';",
        "export { DEFAULT_STORE_URL } from './src/bp/store.ts';",
      ].join('\n'),
      resolveDir: root,
      sourcefile: 'reference-entry.ts',
      loader: 'ts',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outfile: bundlePath,
    logLevel: 'silent',
  });
  return import(`${pathToFileURL(bundlePath).href}?v=${Date.now()}`);
}

function base64(bytes) {
  return Buffer.from(bytes).toString('base64');
}

function nodeSize(def) {
  if (def.kind === 'array') return def.type.size * (def.count ?? 2);
  if (def.kind === 'list') return def.type.size;
  if (def.kind === 'struct') return def.type.size;
  return 0;
}

function referenceFor(meta, source, pack, defaultStoreUrl) {
  const nodes = [];
  const edges = [];
  let seq = 1;
  const nextId = () => `n${seq++}`;

  const structural = Object.entries(pack.nodes)
    .filter(([, def]) => def.kind !== 'calc');
  const calcs = Object.entries(pack.nodes)
    .filter(([, def]) => def.kind === 'calc');
  const shown = structural.length ? structural : calcs;

  const maxNeeded = shown.reduce((max, [, def]) => Math.max(max, nodeSize(def)), 0);
  const sampleSize = Math.max(512, Math.min(4096, Math.ceil(Math.max(1, maxNeeded) / 256) * 256));
  const sample = new Uint8Array(sampleSize);
  const sampleName = `sample-${meta.id}.bin`;

  const noteText = [
    `${meta.name} · 参考蓝图`,
    meta.summary ? `${meta.summary}` : '',
    '',
    `这是从 Pack 商店打开的临时示例，不会覆盖你的工作图。`,
    '',
    `1. 选中 File 节点，可以重新载入真实的 ${meta.name} 文件；当前是 ${sampleSize} B 的零填充示例。`,
    `2. 解析节点的数据源和地址已经接好；选中节点后，右侧检查器会显示字段和「帮助」。`,
    structural.length
      ? `3. 本 pack 的 ${structural.length} 个解析节点都已经摆在画布上。`
      : `3. 本 pack 只有计算节点；按帮助里的说明接输入。`,
    calcs.length ? `4. 另有 ${calcs.length} 个计算辅助节点，可在左侧节点库按 ? 查看说明。` : '',
    maxNeeded > sampleSize ? `注意：类型最长需要 ${maxNeeded} B，示例只覆盖前 ${sampleSize} B；载入真实文件后更完整。` : '',
    '',
    `许可：${meta.license ?? '未标注'}${meta.source?.url ? ` · 来源：${meta.source.url}` : ''}`,
  ].filter(Boolean).join('\n');

  const noteH = Math.max(180, Math.min(620, 60 + noteText.split('\n').length * 17));
  nodes.push({
    id: nextId(), packId: '', nodeId: 'note', x: 0, y: 0,
    params: { text: noteText, tone: 'info', __w: '560', __h: String(noteH) },
  });
  nodes.push({
    id: nextId(), packId: '', nodeId: 'file', x: 0, y: noteH + 50,
    params: { name: sampleName },
    source: { name: sampleName, base: '0x0', data: base64(sample) },
  });
  const fileId = nodes[nodes.length - 1].id;

  const cols = Math.min(3, Math.max(1, shown.length));
  shown.forEach(([key, def], i) => {
    const id = nextId();
    const params = {};
    if (def.kind === 'struct' || def.kind === 'list') params.address = '0x0';
    if (def.kind === 'array') {
      params.address = '0x0';
      if (def.count == null) params.count = '2';
    }
    const x = 640 + (i % cols) * 380;
    const y = Math.floor(i / cols) * 320;
    nodes.push({ id, packId: 'p1', nodeId: key, x, y, params });
    if (def.kind !== 'calc') {
      edges.push({
        id: `e${edges.length + 1}`,
        from: { node: fileId, port: 'buffer' },
        to: { node: id, port: 'buffer' },
      });
    }
  });

  return {
    format: 'memlink-blueprint/3',
    packs: [{
      id: 'p1',
      name: pack.name,
      source,
      enabled: true,
      store: {
        url: defaultStoreUrl,
        packId: meta.id,
        version: meta.version,
        path: `packs/${meta.id}/pack.bp.ts`,
        reference: { path: `packs/${meta.id}/reference.blueprint.json` },
      },
    }],
    nodes,
    edges,
  };
}

async function main() {
  const args = parseArgs(process.argv);
  const packsDir = join(args.store, 'packs');
  if (!existsSync(packsDir)) throw new Error(`找不到 ${packsDir}`);
  const { loadBlueprintPack, DEFAULT_STORE_URL } = await loadLoader();

  let written = 0;
  let unchanged = 0;
  const stale = [];
  for (const dir of readdirSync(packsDir).sort()) {
    const packDir = join(packsDir, dir);
    if (!statSync(packDir).isDirectory()) continue;
    const metaPath = join(packDir, 'meta.json');
    const srcPath = join(packDir, 'pack.bp.ts');
    if (!existsSync(metaPath) || !existsSync(srcPath)) continue;
    const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
    const source = readFileSync(srcPath, 'utf8');
    const loaded = loadBlueprintPack(source);
    if (!loaded.pack) throw new Error(`${dir}: pack 编译失败：${loaded.error}`);
    const doc = referenceFor(meta, source, loaded.pack, DEFAULT_STORE_URL);
    const json = JSON.stringify(doc);
    const outPath = join(packDir, 'reference.blueprint.json');
    const old = existsSync(outPath) ? readFileSync(outPath, 'utf8') : null;
    if (old === json) {
      unchanged += 1;
      continue;
    }
    if (args.check) {
      stale.push(dir);
      continue;
    }
    writeFileSync(outPath, json);
    written += 1;
  }

  if (args.check) {
    if (stale.length) {
      console.error(`✗ ${stale.length} 个 pack 的参考蓝图缺失或过期：${stale.slice(0, 10).join(', ')}${stale.length > 10 ? ' …' : ''}`);
      console.error('  运行 node store/scripts/build-references.mjs 重新生成。');
      process.exit(1);
    }
    console.log(`✓ ${unchanged} 个参考蓝图均是最新`);
    return;
  }
  console.log(`✓ 参考蓝图：写入 ${written} 个，未变 ${unchanged} 个`);
}

try { await main(); } catch (e) {
  console.error(`✗ ${e instanceof Error ? e.message : String(e)}`);
  process.exit(1);
}
