/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pe.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 7 项（见文件末尾）
const DOSHeader = struct("DOSHeader", [
  str("signature", { size: 2 }),
  u16("extraPageSize", {  }),
  u16("numberOfPages", {  }),
  u16("relocations", {  }),
  u16("headerSizeInParagraphs", {  }),
  u16("minimumAllocatedParagraphs", {  }),
  u16("maximumAllocatedParagraphs", {  }),
  u16("initialSSValue", {  }),
  u16("initialRelativeSPValue", {  }),
  u16("checksum", {  }),
  u16("initialRelativeIPValue", {  }),
  u16("initialCSValue", {  }),
  u16("relocationsTablePointer", {  }),
  u16("overlayNumber", {  }),
  pad(8),
  u16("oemIdentifier", {  }),
  u16("oemInformation", {  }),
  pad(20),
  u32("coffHeaderPointer", {  }),
]);

const PEHeader = struct("PEHeader", [
  record("dosHeader", DOSHeader),
]);

const Characteristics = struct("Characteristics", [
  bits("baseRelocationsStripped", 1, { at: 0, bit: 0, unit: 2, label: "baseRelocationsStripped" }),
  bits("executableImage", 1, { at: 0, bit: 1, unit: 2, label: "executableImage" }),
  bits("lineNumbersStripped", 1, { at: 0, bit: 2, unit: 2, label: "lineNumbersStripped" }),
  bits("symbolsStripped", 1, { at: 0, bit: 3, unit: 2, label: "symbolsStripped" }),
  bits("aggressivelyTrimWorkingSet", 1, { at: 0, bit: 4, unit: 2, label: "aggressivelyTrimWorkingSet" }),
  bits("largeAddressAware", 1, { at: 0, bit: 5, unit: 2, label: "largeAddressAware" }),
  bits("bytesReversedLo", 1, { at: 0, bit: 7, unit: 2, label: "bytesReversedLo" }),
  bits("machine32Bit", 1, { at: 0, bit: 8, unit: 2, label: "machine32Bit" }),
  bits("debugInfoStripped", 1, { at: 0, bit: 9, unit: 2, label: "debugInfoStripped" }),
  bits("removableRunFromSwap", 1, { at: 0, bit: 10, unit: 2, label: "removableRunFromSwap" }),
  bits("netRunFromSwap", 1, { at: 0, bit: 11, unit: 2, label: "netRunFromSwap" }),
  bits("systemFile", 1, { at: 0, bit: 12, unit: 2, label: "systemFile" }),
  bits("dll", 1, { at: 0, bit: 13, unit: 2, label: "dll" }),
  bits("uniprocessorMachineOnly", 1, { at: 0, bit: 14, unit: 2, label: "uniprocessorMachineOnly" }),
  bits("bytesReversedHi", 1, { at: 0, bit: 15, unit: 2, label: "bytesReversedHi" }),
]);

const DLLCharacteristics = struct("DLLCharacteristics", [
  bits("callWhenLoaded", 1, { at: 0, bit: 0, unit: 2, label: "callWhenLoaded" }),
  bits("callWhenThreadTerminates", 1, { at: 0, bit: 1, unit: 2, label: "callWhenThreadTerminates" }),
  bits("callWhenThreadStarts", 1, { at: 0, bit: 2, unit: 2, label: "callWhenThreadStarts" }),
  bits("callWhenExiting", 1, { at: 0, bit: 3, unit: 2, label: "callWhenExiting" }),
  bits("highEntropyVA", 1, { at: 0, bit: 5, unit: 2, label: "highEntropyVA" }),
  bits("dynamicBase", 1, { at: 0, bit: 6, unit: 2, label: "dynamicBase" }),
  bits("forceIntegrity", 1, { at: 0, bit: 7, unit: 2, label: "forceIntegrity" }),
  bits("nxCompatible", 1, { at: 0, bit: 8, unit: 2, label: "nxCompatible" }),
  bits("noIsolation", 1, { at: 0, bit: 9, unit: 2, label: "noIsolation" }),
  bits("noSEH", 1, { at: 0, bit: 10, unit: 2, label: "noSEH" }),
  bits("doNotBind", 1, { at: 0, bit: 11, unit: 2, label: "doNotBind" }),
  bits("appContainer", 1, { at: 0, bit: 12, unit: 2, label: "appContainer" }),
  bits("isWDMDriver", 1, { at: 0, bit: 13, unit: 2, label: "isWDMDriver" }),
  bits("supportsControlFlowGuard", 1, { at: 0, bit: 14, unit: 2, label: "supportsControlFlowGuard" }),
  bits("terminalServerAware", 1, { at: 0, bit: 15, unit: 2, label: "terminalServerAware" }),
]);

const LoaderFlags = struct("LoaderFlags", [
  bits("prestartBreakpoint", 1, { at: 0, bit: 0, unit: 4, label: "prestartBreakpoint" }),
  bits("postloadingDebugger", 1, { at: 0, bit: 1, unit: 4, label: "postloadingDebugger" }),
]);

const DataDirectory = struct("DataDirectory", [
  u32("rva", {  }),
  u32("size", {  }),
]);

const OptionalHeader = struct("OptionalHeader", [
  u16("magic", { values: { "263": "ROM", "267": "PE32", "523": "PE32Plus" } }),
  u8("majorLinkerVersion", {  }),
  u8("minorLinkerVersion", {  }),
  u32("sizeOfCode", {  }),
  u32("sizeOfInitializedData", {  }),
  u32("sizeOfUninitializedData", {  }),
  u32("addressOfEntryPoint", {  }),
  u32("baseOfCode", {  }),
]);

const COFFHeader = struct("COFFHeader", [
  str("signature", { size: 4 }),
  u16("architecture", { values: { "0": "Unknown", "387": "ALPHAAXPOld", "388": "ALPHAAXP", "644": "ALPHAAXP64Bit", "467": "AM33", "34404": "AMD64", "448": "ARM", "43620": "ARM64", "452": "ARMNT", "49390": "CLRPureMSIL", "3772": "EBC", "332": "I386", "333": "I860", "512": "IA64", "25138": "LOONGARCH32", "25188": "LOONGARCH64", "36929": "M32R", "614": "MIPS16", "870": "MIPSFPU", "1126": "MIPSFPU16", "616": "MOTOROLA68000", "496": "POWERPC", "497": "POWERPCFP", "498": "POWERPC64", "354": "R3000", "358": "R4000", "360": "R10000", "20530": "RISCV32", "20580": "RISCV64", "20776": "RISCV128", "418": "SH3", "419": "SH3DSP", "422": "SH4", "424": "SH5", "450": "THUMB", "361": "WCEMIPSV2" } }),
  u16("numberOfSections", {  }),
]);

const SectionFlags = struct("SectionFlags", [
  bits("doNotPad", 1, { at: 0, bit: 3, unit: 4, label: "doNotPad" }),
  bits("containsCode", 1, { at: 0, bit: 5, unit: 4, label: "containsCode" }),
  bits("containsInitializedData", 1, { at: 0, bit: 6, unit: 4, label: "containsInitializedData" }),
  bits("containsUninitializedData", 1, { at: 0, bit: 7, unit: 4, label: "containsUninitializedData" }),
  bits("linkOther", 1, { at: 0, bit: 8, unit: 4, label: "linkOther" }),
  bits("linkHasInformation", 1, { at: 0, bit: 9, unit: 4, label: "linkHasInformation" }),
  bits("linkRemove", 1, { at: 0, bit: 11, unit: 4, label: "linkRemove" }),
  bits("linkHasCOMDAT", 1, { at: 0, bit: 12, unit: 4, label: "linkHasCOMDAT" }),
  bits("resetSpeculativeExceptions", 1, { at: 0, bit: 14, unit: 4, label: "resetSpeculativeExceptions" }),
  bits("globalPointerRelocations", 1, { at: 0, bit: 15, unit: 4, label: "globalPointerRelocations" }),
  bits("purgeable", 1, { at: 0, bit: 16, unit: 4, label: "purgeable" }),
  bits("is16Bit", 1, { at: 0, bit: 17, unit: 4, label: "is16Bit" }),
  bits("locked", 1, { at: 0, bit: 18, unit: 4, label: "locked" }),
  bits("preloaded", 1, { at: 0, bit: 19, unit: 4, label: "preloaded" }),
  bits("dataAlignment", 4, { at: 0, bit: 20, unit: 4, label: "dataAlignment" }),
  bits("linkExtendedRelocations", 1, { at: 0, bit: 24, unit: 4, label: "linkExtendedRelocations" }),
  bits("discardable", 1, { at: 0, bit: 25, unit: 4, label: "discardable" }),
  bits("notCached", 1, { at: 0, bit: 26, unit: 4, label: "notCached" }),
  bits("notPageable", 1, { at: 0, bit: 27, unit: 4, label: "notPageable" }),
  bits("shared", 1, { at: 0, bit: 28, unit: 4, label: "shared" }),
  bits("executed", 1, { at: 0, bit: 29, unit: 4, label: "executed" }),
  bits("read", 1, { at: 0, bit: 30, unit: 4, label: "read" }),
  bits("writtenOn", 1, { at: 0, bit: 31, unit: 4, label: "writtenOn" }),
]);

const SectionHeader = struct("SectionHeader", [
  str("name", { size: 8 }),
  u32("virtualSize", {  }),
  u32("rva", {  }),
  u32("sizeOfRawData", {  }),
  u32("ptrRawData", {  }),
  u32("ptrRelocations", {  }),
  u32("ptrLineNumbers", {  }),
  u16("numberOfRelocations", {  }),
  u16("numberOfLineNumbers", {  }),
  record("characteristics", SectionFlags),
]);

const FunctionBitfield = struct("FunctionBitfield", [
  bits("prologLength", 8, { at: 0, bit: 0, unit: 4, label: "prologLength" }),
  bits("functionLength", 22, { at: 0, bit: 8, unit: 4, label: "functionLength" }),
  bits("instructions32Bit", 1, { at: 0, bit: 30, unit: 4, label: "instructions32Bit" }),
  bits("exceptionHandler", 1, { at: 0, bit: 31, unit: 4, label: "exceptionHandler" }),
]);

const ExportDirectoryTable = struct("ExportDirectoryTable", [
  u32("flags", {  }),
]);

const ExportNamePointer = struct("ExportNamePointer", [
  u32("exportNameRVA", {  }),
]);

const ExportsTable = struct("ExportsTable", [
  record("directoryTable", ExportDirectoryTable),
]);

const OrdinalFlagByte = struct("OrdinalFlagByte", [
  bits("flag", 1, { at: 0, bit: 7, unit: 1, label: "flag" }),
]);

const ImportsName = struct("ImportsName", [
  u16("hint", {  }),
]);

const ImportsDirectory = struct("ImportsDirectory", [
  u32("lookupTableRVA", {  }),
  u32("timeDateStamp", {  }),
  u32("forwarderChain", {  }),
  u32("dllNameRVA", {  }),
  u32("addressTableRVA", {  }),
]);

const DelayedImportsDirectory = struct("DelayedImportsDirectory", [
  u32("attributes", {  }),
  u32("name", {  }),
  u32("moduleHandle", {  }),
  u32("delayImportAddressTable", {  }),
  u32("delayImportNameTable", {  }),
  u32("boundDelayImportTable", {  }),
  u32("unloadDelayImportTable", {  }),
  u32("timeStamp", {  }),
]);

const BitmapHeader = struct("BitmapHeader", [
  u32("size", {  }),
  u32("width", {  }),
  u32("height", {  }),
  u16("planes", {  }),
  u16("bitCount", {  }),
  u32("compression", {  }),
  u32("imageSize", {  }),
  u32("xPelsPerMeter", {  }),
  u32("yPelsPerMeter", {  }),
  u32("clrUsed", {  }),
  u32("clrImportant", {  }),
]);

const Colors = struct("Colors", [
  u8("blue", {  }),
  u8("green", {  }),
  u8("red", {  }),
  u8("reserved", {  }),
]);

const Bitmap = struct("Bitmap", [
  record("bmh", BitmapHeader),
]);

const Cursor = struct("Cursor", [
  u16("reserved", {  }),
  u16("type", {  }),
]);

const GroupCursor = struct("GroupCursor", [
  u16("assorteddata", {  }),
  u16("colors", {  }),
  u16("otherassorteddata", {  }),
  u16("pixels", {  }),
  array("assorteddataarray", "u16", 5),
  u16("ordinalName", {  }),
]);

const GroupIconHeader = struct("GroupIconHeader", [
  u16("reserved", {  }),
  u16("type", {  }),
  u16("count", {  }),
]);

const GroupIconEntry = struct("GroupIconEntry", [
  u8("width", {  }),
  u8("height", {  }),
  u8("colorCount", {  }),
  u8("reserved", {  }),
  u16("planes", {  }),
  u16("bitCount", {  }),
  u32("bytesInResource", {  }),
  u16("id", {  }),
]);

const GroupIcon = struct("GroupIcon", [
  record("header", GroupIconHeader),
]);

const VersionEntryHeader = struct("VersionEntryHeader", [
  u16("length", {  }),
  u16("valueLength", {  }),
  u16("type", {  }),
]);

const StringInfo = struct("StringInfo", [
  record("stringInfoHeader", VersionEntryHeader),
]);

const VersionEntry = struct("VersionEntry", [
  record("header", VersionEntryHeader),
]);

const Version = struct("Version", [
  record("header", VersionEntryHeader),
  u32("signature", {  }),
  array("structVersion", "u16", 2),
  array("fileVersion", "u16", 4),
  array("productVersion", "u16", 4),
  array("fileFlagsMask", "u32", 2),
  u32("fileFlags", {  }),
  u32("fileOS", {  }),
  u32("fileType", {  }),
  u32("fileSubType", {  }),
  u32("fileTimestamp", {  }),
]);

const DataEntry = struct("DataEntry", [
  u32("dataRVA", {  }),
  u32("size", {  }),
  u32("codepage", {  }),
  u32("reserved", {  }),
]);

const OffsetField = struct("OffsetField", [
  bits("offset", 31, { at: 0, bit: 0, unit: 4, label: "offset" }),
  bits("pointingToDirectory", 1, { at: 0, bit: 31, unit: 4, label: "pointingToDirectory" }),
]);

const NameDirectoryEntry = struct("NameDirectoryEntry", [
  record("offsetToName", OffsetField),
]);

const ResourceDirectoryTable = struct("ResourceDirectoryTable", [
  u32("characteristics", {  }),
  u32("timeDateStamp", {  }),
  u16("majorVersion", {  }),
  u16("minorVersion", {  }),
  u16("nameEntriesAmount", {  }),
  u16("idEntriesAmount", {  }),
]);

const ResourceDirectory = struct("ResourceDirectory", [
  record("directoryTable", ResourceDirectoryTable),
]);

const ResourceTable = struct("ResourceTable", [
  record("rootDirectory", ResourceDirectory),
]);

const BaseRelocationWord = struct("BaseRelocationWord", [
  bits("offset", 12, { at: 0, bit: 0, unit: 2, label: "offset" }),
  bits("type", 4, { at: 0, bit: 12, unit: 2, label: "type" }),
]);

const BaseRelocationBlock = struct("BaseRelocationBlock", [
  u32("pageRVA", {  }),
  u32("blockSize", {  }),
]);

const RSDS = struct("RSDS", [
  str("signature", { size: 4 }),
]);

const DebugDirectory = struct("DebugDirectory", [
  u32("characteristics", {  }),
]);

const DebugData = struct("DebugData", [
  record("directory", DebugDirectory),
]);

const SymbolNameOffset = struct("SymbolNameOffset", [
  pad(4),
  u32("offset", {  }),
]);

const SymbolType = struct("SymbolType", [
  u8("msb", { values: { "0": "Null", "16": "Pointer", "32": "Function", "48": "Array" } }),
  u8("lsb", { values: { "0": "Null", "1": "Void", "2": "Char", "3": "Short", "4": "Integer", "5": "Long", "6": "Float", "7": "Double", "8": "Struct", "9": "Union", "10": "Enum", "11": "MemberOfEnum", "12": "Byte", "13": "Word", "14": "UInt", "15": "DWord" } }),
]);

const StringTable = struct("StringTable", [
  u32("size", {  }),
]);

const Product = struct("Product", [
  u16("buildNumber", {  }),
  u16("productID", {  }),
  u32("objectCount", {  }),
]);

const RichHeader = struct("RichHeader", [
  str("maskedSignature", { size: 4 }),
  array("nullPadding", "u32", 3),
]);

export default definePack({
  name: "Microsoft PE Portable Executable (exe/dll)",
  endian: "little",
  pointerSize: 8,
  types: [DOSHeader, PEHeader, Characteristics, DLLCharacteristics, LoaderFlags, DataDirectory, OptionalHeader, COFFHeader, SectionFlags, SectionHeader, FunctionBitfield, ExportDirectoryTable, ExportNamePointer, ExportsTable, OrdinalFlagByte, ImportsName, ImportsDirectory, DelayedImportsDirectory, BitmapHeader, Colors, Bitmap, Cursor, GroupCursor, GroupIconHeader, GroupIconEntry, GroupIcon, VersionEntryHeader, StringInfo, VersionEntry, Version, DataEntry, OffsetField, NameDirectoryEntry, ResourceDirectoryTable, ResourceDirectory, ResourceTable, BaseRelocationWord, BaseRelocationBlock, RSDS, DebugDirectory, DebugData, SymbolNameOffset, SymbolType, StringTable, Product, RichHeader],
  nodes: {
    "entry": structNode(PEHeader, { label: "PEHeader（入口）" }),
    "DOSHeader": structNode(DOSHeader, { label: "DOSHeader" }),
    "Characteristics": structNode(Characteristics, { label: "Characteristics" }),
    "DLLCharacteristics": structNode(DLLCharacteristics, { label: "DLLCharacteristics" }),
    "LoaderFlags": structNode(LoaderFlags, { label: "LoaderFlags" }),
    "DataDirectory": structNode(DataDirectory, { label: "DataDirectory" }),
    "OptionalHeader": structNode(OptionalHeader, { label: "OptionalHeader" }),
    "COFFHeader": structNode(COFFHeader, { label: "COFFHeader" }),
    "SectionFlags": structNode(SectionFlags, { label: "SectionFlags" }),
    "SectionHeader": structNode(SectionHeader, { label: "SectionHeader" }),
    "FunctionBitfield": structNode(FunctionBitfield, { label: "FunctionBitfield" }),
    "ExportDirectoryTable": structNode(ExportDirectoryTable, { label: "ExportDirectoryTable" }),
    "ExportNamePointer": structNode(ExportNamePointer, { label: "ExportNamePointer" }),
    "ExportsTable": structNode(ExportsTable, { label: "ExportsTable" }),
    "OrdinalFlagByte": structNode(OrdinalFlagByte, { label: "OrdinalFlagByte" }),
    "ImportsName": structNode(ImportsName, { label: "ImportsName" }),
    "ImportsDirectory": structNode(ImportsDirectory, { label: "ImportsDirectory" }),
    "DelayedImportsDirectory": structNode(DelayedImportsDirectory, { label: "DelayedImportsDirectory" }),
    "BitmapHeader": structNode(BitmapHeader, { label: "BitmapHeader" }),
    "Colors": structNode(Colors, { label: "Colors" }),
    "Bitmap": structNode(Bitmap, { label: "Bitmap" }),
    "Cursor": structNode(Cursor, { label: "Cursor" }),
    "GroupCursor": structNode(GroupCursor, { label: "GroupCursor" }),
    "GroupIconHeader": structNode(GroupIconHeader, { label: "GroupIconHeader" }),
    "GroupIconEntry": structNode(GroupIconEntry, { label: "GroupIconEntry" }),
    "GroupIcon": structNode(GroupIcon, { label: "GroupIcon" }),
    "VersionEntryHeader": structNode(VersionEntryHeader, { label: "VersionEntryHeader" }),
    "StringInfo": structNode(StringInfo, { label: "StringInfo" }),
    "VersionEntry": structNode(VersionEntry, { label: "VersionEntry" }),
    "Version": structNode(Version, { label: "Version" }),
    "DataEntry": structNode(DataEntry, { label: "DataEntry" }),
    "OffsetField": structNode(OffsetField, { label: "OffsetField" }),
    "NameDirectoryEntry": structNode(NameDirectoryEntry, { label: "NameDirectoryEntry" }),
    "ResourceDirectoryTable": structNode(ResourceDirectoryTable, { label: "ResourceDirectoryTable" }),
    "ResourceDirectory": structNode(ResourceDirectory, { label: "ResourceDirectory" }),
    "ResourceTable": structNode(ResourceTable, { label: "ResourceTable" }),
    "BaseRelocationWord": structNode(BaseRelocationWord, { label: "BaseRelocationWord" }),
    "BaseRelocationBlock": structNode(BaseRelocationBlock, { label: "BaseRelocationBlock" }),
    "RSDS": structNode(RSDS, { label: "RSDS" }),
    "DebugDirectory": structNode(DebugDirectory, { label: "DebugDirectory" }),
    "DebugData": structNode(DebugData, { label: "DebugData" }),
    "SymbolNameOffset": structNode(SymbolNameOffset, { label: "SymbolNameOffset" }),
    "SymbolType": structNode(SymbolType, { label: "SymbolType" }),
    "StringTable": structNode(StringTable, { label: "StringTable" }),
    "Product": structNode(Product, { label: "Product" }),
    "RichHeader": structNode(RichHeader, { label: "RichHeader" }),
  },
});


/*
未移植项：
- COFFHeader.timeDateStamp: 类型 type_time32_t 不可移植
- ExportDirectoryTable.timeDateStamp: 类型 type_time32_t 不可移植
- ImportsLookup: 基类 ImportsAddress 不可移植
- DialogItem.template: 类型 DialogItemTemplate 不可移植
- Dialog.dialogTemplate: 类型 DialogTemplate 不可移植
- RSDS.guid: 类型 type_GUID 不可移植
- DebugDirectory.timeDateStamp: 类型 type_time32_t 不可移植
*/
