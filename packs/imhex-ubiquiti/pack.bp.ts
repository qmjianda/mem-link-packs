/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ubiquiti.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ubnt_UBNT = struct("ubnt_UBNT", [
  str("version", { size: 256 }),
  u32("crc32", {  }),
]);

const ubnt_PART = struct("ubnt_PART", [
  str("name", { size: 16 }),
  pad(12),
  u32("memaddr", {  }),
  u32("index", {  }),
  u32("baseaddr", {  }),
  u32("entryaddr", {  }),
  u32("data_size", {  }),
  u32("part_size", {  }),
]);

const ubnt_EXEC = struct("ubnt_EXEC", [
  str("name", { size: 16 }),
  bytes("reserved", { size: 28 }),
  u32("size", {  }),
  u32("size2", {  }),
  u32("crc32", {  }),
]);

const ubnt_END = struct("ubnt_END", [
  u32("crc32", {  }),
]);

const ubnt_ENDS = struct("ubnt_ENDS", [
  bytes("data", { size: 256 }),
]);

const Block = struct("Block", [
  str("type", { size: 4 }),
]);

export default definePack({
  name: "Ubiquiti Firmware (update) image",
  endian: "big",
  pointerSize: 8,
  types: [ubnt_UBNT, ubnt_PART, ubnt_EXEC, ubnt_END, ubnt_ENDS, Block],
  nodes: {
    "entry": structNode(Block, { label: "Block（入口）" }),
    "ubnt_UBNT": structNode(ubnt_UBNT, { label: "ubnt_UBNT" }),
    "ubnt_PART": structNode(ubnt_PART, { label: "ubnt_PART" }),
    "ubnt_EXEC": structNode(ubnt_EXEC, { label: "ubnt_EXEC" }),
    "ubnt_END": structNode(ubnt_END, { label: "ubnt_END" }),
    "ubnt_ENDS": structNode(ubnt_ENDS, { label: "ubnt_ENDS" }),
  },
});

