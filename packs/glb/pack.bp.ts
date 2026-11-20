/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/glb
// 原始 pack：glb · glTF binary v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 2 项（见文件末尾）
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
  },
});


/*
未移植项：
- GlbChunk.data: match 联合类型未移植，后续布局在此停止
- Glb.chunks: repeat 字段未移植，后续布局在此停止
*/
