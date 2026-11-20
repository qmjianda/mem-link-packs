/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/hinf_tag.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const TagHeader = struct("TagHeader", [
  str("magic", { size: 4 }),
  i32("version", {  }),
  u64("hash", {  }),
  u64("checksum", {  }),
  u32("dependencyCount", {  }),
  u32("dataBlockCount", {  }),
  u32("tagStructCount", {  }),
  u32("dataReferenceCount", {  }),
  u32("tagReferenceCount", {  }),
  u32("stringTableSize", {  }),
  u32("zoneSetDataSize", {  }),
  u32("unknown0", {  }),
  u32("headerSize", {  }),
]);

const TagDependency = struct("TagDependency", [
  str("tagGroup", { size: 4 }),
  u32("nameOffset", {  }),
  u64("assetId", {  }),
  u32("globalId", {  }),
  u32("parentTag", {  }),
]);

const TagDataBlock = struct("TagDataBlock", [
  u32("entrySize", {  }),
  u16("pad", {  }),
  u16("section", { values: { "0": "header", "1": "tagData", "2": "resourceData" } }),
  u64("offset", {  }),
]);

const TagDataReference = struct("TagDataReference", [
  i32("parentStructIndex", {  }),
  i32("unknown0", {  }),
  i32("targetIndex", {  }),
  i32("fieldBlockIndex", {  }),
  u32("fieldOffset", {  }),
]);

const TagReference = struct("TagReference", [
  i32("fieldBlockIndex", {  }),
  u32("fieldOffset", {  }),
  u32("nameOffset", {  }),
  i32("dependencyIndex", {  }),
]);

const TagZonesetHeader = struct("TagZonesetHeader", [
  i32("version", {  }),
  u32("zonesetCount", {  }),
  u32("footerCount", {  }),
  i32("parentCount", {  }),
]);

const TagZonesetInstanceHeader = struct("TagZonesetInstanceHeader", [
  i32("stringId", {  }),
  u32("tagCount", {  }),
  u32("parentCount", {  }),
  u32("footerCount", {  }),
]);

const TagZonesetTag = struct("TagZonesetTag", [
  u32("globalId", {  }),
  i32("stringId", {  }),
]);

const TagZonesetInstance = struct("TagZonesetInstance", [
  record("header", TagZonesetInstanceHeader),
]);

const TagZoneset = struct("TagZoneset", [
  record("zoneset_header", TagZonesetHeader),
]);

const Tag = struct("Tag", [
  record("header", TagHeader),
]);

export default definePack({
  name: "Halo Infinite Tag",
  endian: "little",
  pointerSize: 8,
  types: [TagHeader, TagDependency, TagDataBlock, TagDataReference, TagReference, TagZonesetHeader, TagZonesetInstanceHeader, TagZonesetTag, TagZonesetInstance, TagZoneset, Tag],
  nodes: {
    "entry": structNode(Tag, { label: "Tag（入口）" }),
    "TagHeader": structNode(TagHeader, { label: "TagHeader" }),
    "TagDependency": structNode(TagDependency, { label: "TagDependency" }),
    "TagDataBlock": structNode(TagDataBlock, { label: "TagDataBlock" }),
    "TagDataReference": structNode(TagDataReference, { label: "TagDataReference" }),
    "TagReference": structNode(TagReference, { label: "TagReference" }),
    "TagZonesetHeader": structNode(TagZonesetHeader, { label: "TagZonesetHeader" }),
    "TagZonesetInstanceHeader": structNode(TagZonesetInstanceHeader, { label: "TagZonesetInstanceHeader" }),
    "TagZonesetTag": structNode(TagZonesetTag, { label: "TagZonesetTag" }),
    "TagZonesetInstance": structNode(TagZonesetInstance, { label: "TagZonesetInstance" }),
    "TagZoneset": structNode(TagZoneset, { label: "TagZoneset" }),
  },
});


/*
未移植项：
- TagStruct.guid: 类型 type_GUID 不可移植
*/
