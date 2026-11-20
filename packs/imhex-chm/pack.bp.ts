/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/chm.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const ListingChunk = struct("ListingChunk", [
  str("magic", { size: 4 }),
]);

const HeaderSection = struct("HeaderSection", [
  str("magic", { size: 4 }),
]);

const HeaderSectionTableEntry = struct("HeaderSectionTableEntry", [
  u64("offset", {  }),
]);

const NameListFile = struct("NameListFile", [
  u16("fileLengthWords", {  }),
  u16("entriesInFile", {  }),
]);

const SectionData = struct("SectionData", [
  u32("fileLengthWords", {  }),
]);

const Content = struct("Content", [
  record("nameListFile", NameListFile),
  record("sectionData", SectionData),
]);

export default definePack({
  name: "Windows HtmlHelp Data (ITSF / CHM)",
  endian: "little",
  pointerSize: 8,
  types: [ListingChunk, HeaderSection, HeaderSectionTableEntry, NameListFile, SectionData, Content],
  nodes: {
    "entry": structNode(ListingChunk, { label: "ListingChunk（入口）" }),
    "HeaderSection": structNode(HeaderSection, { label: "HeaderSection" }),
    "HeaderSectionTableEntry": structNode(HeaderSectionTableEntry, { label: "HeaderSectionTableEntry" }),
    "NameListFile": structNode(NameListFile, { label: "NameListFile" }),
    "SectionData": structNode(SectionData, { label: "SectionData" }),
    "Content": structNode(Content, { label: "Content" }),
  },
});


/*
未移植项：
- DirectoryListingEntry.nameLength: 类型 type_LEB128 不可移植
- DirectoryIndexEntry.nameLength: 类型 type_LEB128 不可移植
- CHM: 位域没有可移植的固定成员
*/
