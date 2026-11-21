/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bzip3.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const FrameHeader = struct("FrameHeader", [
  str("magic", { size: 5 }),
  u32("blockSize", {  }),
]);

const SmallBlock = struct("SmallBlock", [
  u32("crc32", {  }),
  u32("literal", {  }),
]);

const Block = struct("Block", [
  u32("crc32", {  }),
  u32("bwtIndex", {  }),
  u8("model", {  }),
]);

const Chunk = struct("Chunk", [
  u32("compressedSize", {  }),
  u32("origSize", {  }),
]);

const BZip3File = struct("BZip3File", [
  record("header", FrameHeader),
]);

export default definePack({
  name: "Parses BZip3 compression (file format) by Kamila Szewczyk",
  endian: "little",
  pointerSize: 8,
  types: [FrameHeader, SmallBlock, Block, Chunk, BZip3File],
  nodes: {
    "entry": structNode(BZip3File, { label: "BZip3File（入口）" }),
    "FrameHeader": structNode(FrameHeader, { label: "FrameHeader" }),
    "SmallBlock": structNode(SmallBlock, { label: "SmallBlock" }),
    "Block": structNode(Block, { label: "Block" }),
    "Chunk": structNode(Chunk, { label: "Chunk" }),
  },
});

