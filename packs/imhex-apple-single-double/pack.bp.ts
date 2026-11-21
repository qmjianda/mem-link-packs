/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/apple_single_double.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Entry = struct("Entry", [
  u32("entryID", { values: { "1": "DataFork", "2": "ResourceFork", "3": "RealName", "4": "Comment", "5": "IconBW", "6": "IconColor", "8": "FileDatesInfo", "9": "FinderInfo", "10": "MacFileInfo", "11": "ProDOSFileInfo", "12": "MSDOSFileInfo", "13": "ShortName", "14": "AFPFileInfo", "15": "DirectoryID" } }),
  u32("offset", {  }),
  u32("length", {  }),
]);

const AppleSingleDouble = struct("AppleSingleDouble", [
  u32("fileType", { values: { "333312": "AppleSingle", "333319": "AppleDouble" } }),
  u32("version", { values: { "65536": "V1", "131072": "V2" } }),
  str("homeFileSystem", { size: 16 }),
  u16("numEntries", {  }),
]);

export default definePack({
  name: "AppleSingle/AppleDouble file format",
  endian: "big",
  pointerSize: 8,
  types: [Entry, AppleSingleDouble],
  nodes: {
    "entry": structNode(AppleSingleDouble, { label: "AppleSingleDouble（入口）" }),
    "Entry": structNode(Entry, { label: "Entry" }),
  },
});

