/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/lznt1.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Value = struct("Value", [
  u8("value", {  }),
]);

const Flag = struct("Flag", [
  bits("A", 1, { at: 0, bit: 0, unit: 1, label: "A" }),
  bits("B", 1, { at: 0, bit: 1, unit: 1, label: "B" }),
  bits("C", 1, { at: 0, bit: 2, unit: 1, label: "C" }),
  bits("D", 1, { at: 0, bit: 3, unit: 1, label: "D" }),
  bits("E", 1, { at: 0, bit: 4, unit: 1, label: "E" }),
  bits("F", 1, { at: 0, bit: 5, unit: 1, label: "F" }),
  bits("G", 1, { at: 0, bit: 6, unit: 1, label: "G" }),
  bits("H", 1, { at: 0, bit: 7, unit: 1, label: "H" }),
]);

const ChunkHeader = struct("ChunkHeader", [
  bits("chunkDataSize", 12, { at: 0, bit: 0, unit: 2, label: "chunkDataSize" }),
  bits("signatureValue", 3, { at: 0, bit: 12, unit: 2, label: "signatureValue" }),
  bits("isCompressed", 1, { at: 0, bit: 15, unit: 2, label: "isCompressed" }),
]);

const Chunk = struct("Chunk", [
  record("header", ChunkHeader),
]);

export default definePack({
  name: "LZNT1",
  endian: "little",
  pointerSize: 8,
  types: [Value, Flag, ChunkHeader, Chunk],
  nodes: {
    "entry": structNode(Value, { label: "Value（入口）" }),
    "Flag": structNode(Flag, { label: "Flag" }),
    "ChunkHeader": structNode(ChunkHeader, { label: "ChunkHeader" }),
    "Chunk": structNode(Chunk, { label: "Chunk" }),
  },
});

