/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pef.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const PEFContainerHeader = struct("PEFContainerHeader", [
  str("tag1", { size: 4 }),
  str("tag2", { size: 4 }),
  str("architecture", { size: 4 }),
  u32("formatVersion", {  }),
  u32("dateTimeStamp", {  }),
  u32("oldDefVersion", {  }),
  u32("oldImpVersion", {  }),
  u32("currentVersion", {  }),
  u16("sectionCount", {  }),
  u16("instSectionCount", {  }),
  u32("reservedA", {  }),
]);

const PEFSectionHeader = struct("PEFSectionHeader", [
  i32("nameOffset", {  }),
  u32("defaultAddress", {  }),
  u32("totalSize", {  }),
  u32("unpackedSize", {  }),
  u32("packedSize", {  }),
  u32("containerOffset", {  }),
  u8("sectionKind", { values: { "0": "kPEFCodeSection", "1": "kPEFUnpackedDataSection", "2": "kPEFPackedDataSection", "3": "kPEFConstantSection", "4": "kPEFLoaderSection", "5": "kPEFDebugSection", "6": "kPEFExecDataSection", "7": "kPEFExceptionSection", "8": "kPEFTracebackSection" } }),
  u8("shareKind", { values: { "1": "Process_Share", "4": "Global_Share", "5": "Protected_Share" } }),
  u8("alignment", {  }),
  u8("reservedA", {  }),
]);

const PEFLoaderInfoHeader = struct("PEFLoaderInfoHeader", [
  i32("mainSection", {  }),
  u32("mainOffset", {  }),
  i32("initSection", {  }),
  u32("initOffset", {  }),
  i32("termSection", {  }),
  u32("termOffset", {  }),
  u32("importedLibraryCount", {  }),
  u32("totalImportedSymbolCount", {  }),
  u32("relocSectionCount", {  }),
  u32("relocInstrOffset", {  }),
  u32("loaderStringsOffset", {  }),
  u32("exportHashOffset", {  }),
  u32("exportHashTablePower", {  }),
  u32("exportedSymbolCount", {  }),
]);

const PEFImportedLibrary = struct("PEFImportedLibrary", [
  u32("nameOffset", {  }),
  u32("oldImpVersion", {  }),
  u32("currentVersion", {  }),
  u32("importedSymbolCount", {  }),
  u32("firstImportedSymbol", {  }),
  u8("options", { values: { "0": "kDefault", "64": "kPEFWeakImportLibMask", "128": "kPEFInitLibBeforeMask" } }),
  u8("reservedA", {  }),
  u16("reservedB", {  }),
]);

const PEFImportSymbol = struct("PEFImportSymbol", [
  u8("class", { values: { "0": "kPEFCodeSymbol", "1": "kPEFDataSymbol", "2": "kPEFTVectSymbol", "3": "kPEFTOCSymbol", "4": "kPEFGlueSymbol" } }),
]);

const PEFLoaderRelocationHeader = struct("PEFLoaderRelocationHeader", [
  u16("sectionIndex", {  }),
  u16("reservedA", {  }),
  u32("relocCount", {  }),
  u32("firstRelocOffset", {  }),
]);

const RelocBySectDWithSkip = struct("RelocBySectDWithSkip", [
  bits("op", 2, { at: 0, bit: 0, unit: 2, label: "op" }),
  bits("skipCount", 8, { at: 0, bit: 2, unit: 2, label: "skipCount" }),
  bits("relCount", 6, { at: 0, bit: 10, unit: 2, label: "relCount" }),
]);

const RelocRunGroup = struct("RelocRunGroup", [
  bits("op", 3, { at: 0, bit: 0, unit: 2, label: "op" }),
  bits("subOp", 4, { at: 0, bit: 3, unit: 2, label: "subOp" }),
  bits("runLength", 9, { at: 0, bit: 7, unit: 2, label: "runLength" }),
]);

const RelocSmIndexGroup = struct("RelocSmIndexGroup", [
  bits("op", 3, { at: 0, bit: 0, unit: 2, label: "op" }),
  bits("subOp", 4, { at: 0, bit: 3, unit: 2, label: "subOp" }),
  bits("index", 9, { at: 0, bit: 7, unit: 2, label: "index" }),
]);

const RelocIncrPosition = struct("RelocIncrPosition", [
  bits("op", 4, { at: 0, bit: 0, unit: 2, label: "op" }),
  bits("offset", 12, { at: 0, bit: 4, unit: 2, label: "offset" }),
]);

const RelocSmRepeat = struct("RelocSmRepeat", [
  bits("op", 4, { at: 0, bit: 0, unit: 2, label: "op" }),
  bits("chnks", 4, { at: 0, bit: 4, unit: 2, label: "chnks" }),
  bits("repeatCount", 8, { at: 0, bit: 8, unit: 2, label: "repeatCount" }),
]);

const RelocSetPosition = struct("RelocSetPosition", [
  bits("op", 6, { at: 0, bit: 0, unit: 4, label: "op" }),
  bits("offset", 26, { at: 0, bit: 6, unit: 4, label: "offset" }),
]);

const RelocLgByImport = struct("RelocLgByImport", [
  bits("op", 6, { at: 0, bit: 0, unit: 4, label: "op" }),
  bits("index", 26, { at: 0, bit: 6, unit: 4, label: "index" }),
]);

const RelocLgRepeat = struct("RelocLgRepeat", [
  bits("op", 6, { at: 0, bit: 0, unit: 4, label: "op" }),
  bits("chnks", 4, { at: 0, bit: 6, unit: 4, label: "chnks" }),
  bits("repeatCount", 22, { at: 0, bit: 10, unit: 4, label: "repeatCount" }),
]);

const RelocLgSetOrBySection = struct("RelocLgSetOrBySection", [
  bits("op", 6, { at: 0, bit: 0, unit: 4, label: "op" }),
  bits("subOp", 4, { at: 0, bit: 6, unit: 4, label: "subOp" }),
  bits("index", 22, { at: 0, bit: 10, unit: 4, label: "index" }),
]);

const RelocInstruction = struct("RelocInstruction", [
  u8("firstByte", {  }),
]);

const PEFExportedSymbolHashSlot = struct("PEFExportedSymbolHashSlot", [
  bits("count", 14, { at: 0, bit: 0, unit: 4, label: "count" }),
  bits("start", 18, { at: 0, bit: 14, unit: 4, label: "start" }),
]);

const PEFExportedSymbolKey = struct("PEFExportedSymbolKey", [
  u16("nameLength", {  }),
  u16("hashValue", {  }),
]);

const PEFExportSymbol = struct("PEFExportSymbol", [
  u8("class", { values: { "-2": "kPEFAbsoluteExport", "-3": "kPEFReexportedImport" } }),
]);

const PEFExportedSymbol = struct("PEFExportedSymbol", [
  record("classAndName", PEFExportSymbol),
  u32("symbolValue", {  }),
  i16("sectionIndex", {  }),
]);

export default definePack({
  name: "Preffered Executable Format executable (for Mac OS 7.1.2 - Mac OS 10.4 / BeOS)",
  endian: "big",
  pointerSize: 8,
  types: [PEFContainerHeader, PEFSectionHeader, PEFLoaderInfoHeader, PEFImportedLibrary, PEFImportSymbol, PEFLoaderRelocationHeader, RelocBySectDWithSkip, RelocRunGroup, RelocSmIndexGroup, RelocIncrPosition, RelocSmRepeat, RelocSetPosition, RelocLgByImport, RelocLgRepeat, RelocLgSetOrBySection, RelocInstruction, PEFExportedSymbolHashSlot, PEFExportedSymbolKey, PEFExportSymbol, PEFExportedSymbol],
  nodes: {
    "entry": structNode(PEFContainerHeader, { label: "PEFContainerHeader（入口）" }),
    "PEFSectionHeader": structNode(PEFSectionHeader, { label: "PEFSectionHeader" }),
    "PEFLoaderInfoHeader": structNode(PEFLoaderInfoHeader, { label: "PEFLoaderInfoHeader" }),
    "PEFImportedLibrary": structNode(PEFImportedLibrary, { label: "PEFImportedLibrary" }),
    "PEFImportSymbol": structNode(PEFImportSymbol, { label: "PEFImportSymbol" }),
    "PEFLoaderRelocationHeader": structNode(PEFLoaderRelocationHeader, { label: "PEFLoaderRelocationHeader" }),
    "RelocBySectDWithSkip": structNode(RelocBySectDWithSkip, { label: "RelocBySectDWithSkip" }),
    "RelocRunGroup": structNode(RelocRunGroup, { label: "RelocRunGroup" }),
    "RelocSmIndexGroup": structNode(RelocSmIndexGroup, { label: "RelocSmIndexGroup" }),
    "RelocIncrPosition": structNode(RelocIncrPosition, { label: "RelocIncrPosition" }),
    "RelocSmRepeat": structNode(RelocSmRepeat, { label: "RelocSmRepeat" }),
    "RelocSetPosition": structNode(RelocSetPosition, { label: "RelocSetPosition" }),
    "RelocLgByImport": structNode(RelocLgByImport, { label: "RelocLgByImport" }),
    "RelocLgRepeat": structNode(RelocLgRepeat, { label: "RelocLgRepeat" }),
    "RelocLgSetOrBySection": structNode(RelocLgSetOrBySection, { label: "RelocLgSetOrBySection" }),
    "RelocInstruction": structNode(RelocInstruction, { label: "RelocInstruction" }),
    "PEFExportedSymbolHashSlot": structNode(PEFExportedSymbolHashSlot, { label: "PEFExportedSymbolHashSlot" }),
    "PEFExportedSymbolKey": structNode(PEFExportedSymbolKey, { label: "PEFExportedSymbolKey" }),
    "PEFExportSymbol": structNode(PEFExportSymbol, { label: "PEFExportSymbol" }),
    "PEFExportedSymbol": structNode(PEFExportedSymbol, { label: "PEFExportedSymbol" }),
  },
});


/*
未移植项：
- PEFImportSymbol.nameOffset: 类型 u24 不可移植
- PEFExportSymbol.nameOffset: 类型 u24 不可移植
*/
