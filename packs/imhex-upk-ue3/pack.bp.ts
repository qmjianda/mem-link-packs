/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/upk-ue3.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const FGenerationInfo = struct("FGenerationInfo", [
  u32("exportcount", {  }),
  u32("namecount", {  }),
  u32("netobjectcount", {  }),
]);

const CompressedChunkInfo = struct("CompressedChunkInfo", [
  u32("uncompressedoffset", {  }),
  u32("uncompressedsize", {  }),
  u32("compressedoffset", {  }),
  u32("compressedsize", {  }),
]);

const FNameEntry = struct("FNameEntry", [
  i32("namelength", {  }),
]);

const FObjectImport = struct("FObjectImport", [
  u64("packageid", {  }),
  u64("typeid", {  }),
  u32("ownerref", {  }),
  u64("nameid", {  }),
]);

const FObjectExport = struct("FObjectExport", [
  u32("typeref", {  }),
  u32("parentclassref", {  }),
  u32("ownerref", {  }),
  u64("nameid", {  }),
  u32("archetyperef", {  }),
  u32("objectflagsh", {  }),
  u32("objectflagsl", {  }),
  u32("serialsize", {  }),
  u32("serialoffset", {  }),
  u32("exportflags", {  }),
  u32("netobjectcount", {  }),
]);

const FileHeader = struct("FileHeader", [
  u32("signature", {  }),
  u16("version", {  }),
  u16("licensee", {  }),
  u32("headersize", {  }),
  u32("foldername", {  }),
]);

export default definePack({
  name: "Unreal Engine 3 UPK",
  endian: "little",
  pointerSize: 8,
  types: [FGenerationInfo, CompressedChunkInfo, FNameEntry, FObjectImport, FObjectExport, FileHeader],
  nodes: {
    "entry": structNode(FileHeader, { label: "FileHeader（入口）" }),
    "FGenerationInfo": structNode(FGenerationInfo, { label: "FGenerationInfo" }),
    "CompressedChunkInfo": structNode(CompressedChunkInfo, { label: "CompressedChunkInfo" }),
    "FNameEntry": structNode(FNameEntry, { label: "FNameEntry" }),
    "FObjectImport": structNode(FObjectImport, { label: "FObjectImport" }),
    "FObjectExport": structNode(FObjectExport, { label: "FObjectExport" }),
  },
});


/*
未移植项：
- FObjectExport.guid: 类型 u128 不可移植
*/
