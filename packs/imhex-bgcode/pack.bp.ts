/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bgcode.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const BlockHeader = struct("BlockHeader", [
  u16("type", { values: { "0": "FileMetadata", "1": "GCode", "2": "SlicerMetadata", "3": "PrinterMetadata", "4": "PrintMetadata", "5": "Thumbnail" } }),
  u16("compressionType", { values: { "0": "NoCompression", "1": "Deflate", "2": "HeatshrinkWindowSize11", "3": "HeatshrinkWindowSize12" } }),
  u32("uncompressedSize", {  }),
]);

const Metadata = struct("Metadata", [
  u16("encoding", { values: { "0": "INI" } }),
]);

const Thumbnail = struct("Thumbnail", [
  u16("format", { values: { "0": "PNG", "1": "JPG", "2": "QOI" } }),
  u16("width", {  }),
  u16("height", {  }),
]);

const GCode = struct("GCode", [
  u16("encoding", { values: { "0": "NoEncoding", "1": "MeatPack", "2": "MeatPackWithComments" } }),
]);

const Block = struct("Block", [
  record("header", BlockHeader),
]);

export default definePack({
  name: "Prusa Binary G-Code",
  endian: "little",
  pointerSize: 8,
  types: [BlockHeader, Metadata, Thumbnail, GCode, Block],
  nodes: {
    "entry": structNode(BlockHeader, { label: "BlockHeader（入口）" }),
    "Metadata": structNode(Metadata, { label: "Metadata" }),
    "Thumbnail": structNode(Thumbnail, { label: "Thumbnail" }),
    "GCode": structNode(GCode, { label: "GCode" }),
    "Block": structNode(Block, { label: "Block" }),
  },
});

