/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/glb
// 原始 pack：glb · glTF binary v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 1 个动态辅助节点
const GlbChunk = struct("GlbChunk", [
  u32("length", { endian: "little", label: "chunk data length in bytes" }),
  str("chunkType", { size: 4, label: "JSON structure chunk, or the BIN binary buffer chunk" }),
]);

const Glb = struct("Glb", [
  str("magic", { size: 4, label: "magic 'glTF'" }),
  u32("version", { endian: "little", label: "GLB container version (2)" }),
  u32("length", { endian: "little", label: "total length of the file in bytes" }),
]);

export default definePack({
  name: "GLB",
  endian: "little",
  pointerSize: 4,
  types: [GlbChunk, Glb],
  nodes: {
    "entry": structNode(Glb, { label: "Glb（入口）" }),
    "GlbChunk": structNode(GlbChunk, { label: "GlbChunk" }),
    "list_Glb_chunks": listNode(GlbChunk, {
      label: "Glb.chunks（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => {  return e.addr + GlbChunk.size; },
      max: 4096,
    }),
  },
});

