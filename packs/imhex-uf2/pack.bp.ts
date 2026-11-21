/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/uf2.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const UF2_Flags = struct("UF2_Flags", [
  bits("NotMainFlash", 1, { at: 0, bit: 0, unit: 4, label: "NotMainFlash" }),
  bits("FileContainer", 1, { at: 0, bit: 12, unit: 4, label: "FileContainer" }),
  bits("FamilyIDPresent", 1, { at: 0, bit: 13, unit: 4, label: "FamilyIDPresent" }),
  bits("MD5ChecksumPresent", 1, { at: 0, bit: 14, unit: 4, label: "MD5ChecksumPresent" }),
  bits("ExtensionTagsPresent", 1, { at: 0, bit: 15, unit: 4, label: "ExtensionTagsPresent" }),
]);

const UF2_Hash = struct("UF2_Hash", [
  u32("startAddress", {  }),
  u32("size", {  }),
  bytes("md5Checksum", { size: 16 }),
]);

const UF2_TagType = struct("UF2_TagType", [
  bytes("bytes", { size: 3 }),
]);

const UF2_ExtensionTag = struct("UF2_ExtensionTag", [
  u8("size", {  }),
  record("type", UF2_TagType),
]);

const UF2_Block = struct("UF2_Block", [
  str("magicStart0", { size: 4 }),
  u32("magicStart1", {  }),
  record("flags", UF2_Flags),
  u32("targetAddr", {  }),
  u32("payloadSize", {  }),
  u32("blockNo", {  }),
  u32("numBlocks", {  }),
]);

export default definePack({
  name: "USB Flashing Format (.uf2)",
  endian: "little",
  pointerSize: 8,
  types: [UF2_Flags, UF2_Hash, UF2_TagType, UF2_ExtensionTag, UF2_Block],
  nodes: {
    "entry": structNode(UF2_Block, { label: "UF2_Block（入口）" }),
    "UF2_Flags": structNode(UF2_Flags, { label: "UF2_Flags" }),
    "UF2_Hash": structNode(UF2_Hash, { label: "UF2_Hash" }),
    "UF2_TagType": structNode(UF2_TagType, { label: "UF2_TagType" }),
    "UF2_ExtensionTag": structNode(UF2_ExtensionTag, { label: "UF2_ExtensionTag" }),
  },
});

