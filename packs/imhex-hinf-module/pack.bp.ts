/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/hinf_module.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const ModuleHeader = struct("ModuleHeader", [
  str("magic", { size: 4 }),
  i32("version", {  }),
  i64("moduleId", {  }),
  u32("fileCount", {  }),
  i32("manifest0Count", {  }),
  i32("manifest1Count", {  }),
  i32("manifest2Count", {  }),
  i32("resourceIndex", {  }),
  u32("stringSize", {  }),
  u32("resourceCount", {  }),
  u32("blockCount", {  }),
  u64("buildVersion", {  }),
  i64("hd1Delta", {  }),
  u64("dataSize", {  }),
]);

const ModuleFile = struct("ModuleFile", [
  u32("resourceCount", {  }),
  i32("parentIndex", {  }),
  i16("pad", {  }),
  u16("blockCount", {  }),
  i32("blockIndex", {  }),
  i32("resourceIndex", {  }),
  str("class", { size: 4 }),
  u64("dataOffsetBytes", {  }),
  u32("totalCompressedSize", {  }),
  u32("totalUncompressedSize", {  }),
  u32("globalTagId", {  }),
  u32("uncompressedHeaderSize", {  }),
  u32("uncompressedTagDataSize", {  }),
  u32("uncompressedResourceDataSize", {  }),
  u32("uncompressedActualResourceDataSize", {  }),
  u32("resourceBlockCount", {  }),
  u32("nameOffset", {  }),
  i32("parentResource", {  }),
  u64("assetChecksum", {  }),
  u64("assetId", {  }),
]);

const ModuleBlock = struct("ModuleBlock", [
  u32("compressedOffset", {  }),
  u32("compressedSize", {  }),
  u32("decompressedOffset", {  }),
  u32("decompressedSize", {  }),
  bool("compressed", {  }),
]);

const Module = struct("Module", [
  record("module_header", ModuleHeader),
]);

export default definePack({
  name: "Halo Infinite Module",
  endian: "little",
  pointerSize: 8,
  types: [ModuleHeader, ModuleFile, ModuleBlock, Module],
  nodes: {
    "entry": structNode(Module, { label: "Module（入口）" }),
    "ModuleHeader": structNode(ModuleHeader, { label: "ModuleHeader" }),
    "ModuleFile": structNode(ModuleFile, { label: "ModuleFile" }),
    "ModuleBlock": structNode(ModuleBlock, { label: "ModuleBlock" }),
  },
});


/*
未移植项：
- ModuleBlock.pad: 类型 s24 不可移植
*/
