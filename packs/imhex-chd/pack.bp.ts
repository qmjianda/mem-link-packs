/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/chd.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const CHDv5UncompressedMap = struct("CHDv5UncompressedMap", [
  u32("offset", {  }),
]);

const CHDv5CompressedMapEntry = struct("CHDv5CompressedMapEntry", [
  u8("compression", {  }),
]);

const CHDv5CompressedMap = struct("CHDv5CompressedMap", [
  u32("length", {  }),
]);

const CHDv5MetadataEntry = struct("CHDv5MetadataEntry", [
  u32("metatag", { values: { "0": "CHDMETATAG_WILDCARD", "1": "HARD_DISK_METADATA_TAG", "2": "HARD_DISK_IDENT_METADATA_TAG", "3": "HARD_DISK_KEY_METADATA_TAG", "4": "PCMCIA_CIS_METADATA_TAG", "5": "CDROM_OLD_METADATA_TAG", "6": "CDROM_TRACK_METADATA_TAG", "7": "CDROM_TRACK_METADATA2_TAG", "8": "GDROM_OLD_METADATA_TAG", "9": "GDROM_TRACK_METADATA_TAG", "10": "DVD_METADATA_TAG", "11": "AV_METADATA_TAG", "12": "AV_LD_METADATA_TAG" } }),
  u8("flags", {  }),
]);

const CHDv5 = struct("CHDv5", [
  array("compressors", "u32", 4),
  u64("logicalbytes", {  }),
  u64("mapoffset", {  }),
  u64("metaoffset", {  }),
  u32("hunkbytes", {  }),
  u32("unitbytes", {  }),
  bytes("rawsha1", { size: 20 }),
  bytes("sha1", { size: 20 }),
  bytes("parentsha1", { size: 20 }),
]);

const CHD = struct("CHD", [
  str("tag", { size: 8 }),
  u32("length", {  }),
  u32("version", {  }),
]);

export default definePack({
  name: "MAME Compressed Hunks of Data",
  endian: "big",
  pointerSize: 8,
  types: [CHDv5UncompressedMap, CHDv5CompressedMapEntry, CHDv5CompressedMap, CHDv5MetadataEntry, CHDv5, CHD],
  nodes: {
    "entry": structNode(CHD, { label: "CHD（入口）" }),
    "CHDv5UncompressedMap": structNode(CHDv5UncompressedMap, { label: "CHDv5UncompressedMap" }),
    "CHDv5CompressedMapEntry": structNode(CHDv5CompressedMapEntry, { label: "CHDv5CompressedMapEntry" }),
    "CHDv5CompressedMap": structNode(CHDv5CompressedMap, { label: "CHDv5CompressedMap" }),
    "CHDv5MetadataEntry": structNode(CHDv5MetadataEntry, { label: "CHDv5MetadataEntry" }),
    "CHDv5": structNode(CHDv5, { label: "CHDv5" }),
  },
});


/*
未移植项：
- CHDv5CompressedMapEntry.complength: 类型 u24 不可移植
- CHDv5CompressedMap.datastart: 类型 u48 不可移植
- CHDv5MetadataEntry.length: 类型 u24 不可移植
*/
