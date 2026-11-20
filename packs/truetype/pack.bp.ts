/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/truetype
// 原始 pack：truetype · TrueType / OpenType font v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
const TableRecord = struct("TableRecord", [
  str("tag", { size: 4, label: "table tag (e.g. glyf, cmap, head, name)" }),
  u32("checksum", { endian: "little", label: "checksum for this table" }),
  u32("offset", { endian: "little", label: "offset of the table from the start of the file" }),
  u32("length", { endian: "little", label: "length of this table in bytes" }),
]);

const SfntFont = struct("SfntFont", [
  u32("sfntVersion", { endian: "little", label: "0x00010000 for TrueType outlines, OTTO for CFF" }),
  u16("numTables", { endian: "little", label: "number of tables" }),
  u16("searchRange", { endian: "little", label: "(largest power of two <= numTables) times 16" }),
  u16("entrySelector", { endian: "little", label: "log2 of the largest power of two <= numTables" }),
  u16("rangeShift", { endian: "little", label: "numTables times 16, minus searchRange" }),
]);

export default definePack({
  name: "TTF",
  endian: "big",
  pointerSize: 4,
  types: [TableRecord, SfntFont],
  nodes: {
    "entry": structNode(SfntFont, { label: "SfntFont（入口）" }),
    "TableRecord": structNode(TableRecord, { label: "TableRecord" }),
  },
});


/*
未移植项：
- SfntFont.tables: 动态数组长度（field）未移植
*/
