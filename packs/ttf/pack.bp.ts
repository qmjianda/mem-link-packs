/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/truetype
// 原始 pack：truetype · TrueType / OpenType font v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 1 个动态辅助节点
const TableRecord = struct("TableRecord", [
  str("tag", { size: 4, label: "table tag (e.g. glyf, cmap, head, name)" }),
  u32("checksum", { endian: "big", label: "checksum for this table" }),
  u32("offset", { endian: "big", label: "offset of the table from the start of the file" }),
  u32("length", { endian: "big", label: "length of this table in bytes" }),
]);

const SfntFont = struct("SfntFont", [
  u32("sfntVersion", { endian: "big", label: "0x00010000 for TrueType outlines, OTTO for CFF" }),
  u16("numTables", { endian: "big", label: "number of tables" }),
  u16("searchRange", { endian: "big", label: "(largest power of two <= numTables) times 16" }),
  u16("entrySelector", { endian: "big", label: "log2 of the largest power of two <= numTables" }),
  u16("rangeShift", { endian: "big", label: "numTables times 16, minus searchRange" }),
]);

export default definePack({
  name: "TTF",
  endian: "big",
  pointerSize: 4,
  types: [TableRecord, SfntFont],
  nodes: {
    "entry": structNode(SfntFont, { label: "SfntFont（入口）" }),
    "TableRecord": structNode(TableRecord, { label: "TableRecord" }),
    "array_SfntFont_tables": arrayNode(TableRecord, {
      label: "SfntFont.tables（动态数组）",
      description: "count 来自 SfntFont.numTables；address 指向数组首元素",
    }),
  },
});

