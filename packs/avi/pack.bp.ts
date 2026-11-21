/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/avi
// 原始 pack：avi · AVI video v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 1 个动态辅助节点；未移植 1 项（见文件末尾）
const RiffChunk = struct("RiffChunk", [
  str("id", { size: 4, label: "chunk FourCC (LIST, movi, idx1, ...)" }),
  u32("size", { endian: "little", label: "payload size in bytes" }),
]);

const Avi = struct("Avi", [
  str("magic", { size: 4, label: "RIFF" }),
  u32("fileSize", { endian: "little", label: "total file size minus 8 bytes" }),
  str("formType", { size: 4, label: "'AVI ' form type" }),
]);

export default definePack({
  name: "AVI",
  endian: "little",
  pointerSize: 4,
  types: [RiffChunk, Avi],
  nodes: {
    "entry": structNode(Avi, { label: "Avi（入口）" }),
    "RiffChunk": structNode(RiffChunk, { label: "RiffChunk" }),
    "list_Avi_chunks": listNode(RiffChunk, {
      label: "Avi.chunks（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => {  return e.addr + RiffChunk.size; },
      max: 4096,
    }),
  },
});


/*
未移植项：
- RiffChunk.data: 变长字节块未移植
*/
