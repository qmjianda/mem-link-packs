/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/coff.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Characteristics = struct("Characteristics", [
  bits("relocsStripped", 1, { at: 0, bit: 0, unit: 2, label: "relocsStripped" }),
  bits("executableImage", 1, { at: 0, bit: 1, unit: 2, label: "executableImage" }),
  bits("lineNumsStripped", 1, { at: 0, bit: 2, unit: 2, label: "lineNumsStripped" }),
  bits("localSymsStripped", 1, { at: 0, bit: 3, unit: 2, label: "localSymsStripped" }),
  bits("aggressiveWsTrim", 1, { at: 0, bit: 4, unit: 2, label: "aggressiveWsTrim" }),
  bits("largeAddressAware", 1, { at: 0, bit: 5, unit: 2, label: "largeAddressAware" }),
  bits("bytesReversedLo", 1, { at: 0, bit: 7, unit: 2, label: "bytesReversedLo" }),
  bits("_32BitMachine", 1, { at: 0, bit: 8, unit: 2, label: "_32BitMachine" }),
  bits("debugStripped", 1, { at: 0, bit: 9, unit: 2, label: "debugStripped" }),
  bits("removableRunFromSwap", 1, { at: 0, bit: 10, unit: 2, label: "removableRunFromSwap" }),
  bits("netRunFromSwap", 1, { at: 0, bit: 11, unit: 2, label: "netRunFromSwap" }),
  bits("system", 1, { at: 0, bit: 12, unit: 2, label: "system" }),
  bits("dll", 1, { at: 0, bit: 13, unit: 2, label: "dll" }),
  bits("upSystemOnly", 1, { at: 0, bit: 14, unit: 2, label: "upSystemOnly" }),
  bits("bytesReversedHi", 1, { at: 0, bit: 15, unit: 2, label: "bytesReversedHi" }),
]);

const AuxSymbol = struct("AuxSymbol", [
  bytes("data", { size: 18 }),
]);

const SymbolTable = struct("SymbolTable", [
  str("name", { size: 8 }),
  u32("value", {  }),
  u16("sectionNumber", {  }),
  u16("type", { values: { "0": "Null", "1": "Void", "2": "Char", "3": "Short", "4": "Int", "5": "Long", "6": "Float", "7": "Double", "8": "Struct", "9": "Union", "10": "Enum", "11": "MOE", "12": "Byte", "13": "Word", "14": "UInt", "15": "DWord" } }),
  u8("storageClass", { values: { "255": "EndOfFunction", "0": "Null", "1": "Automatic", "2": "External", "3": "Static", "4": "Register", "5": "ExternalDef", "6": "Label", "7": "UndefinedLabel", "8": "MemberOfStruct", "9": "Argument", "10": "StructTag", "11": "MemberOfUnion", "12": "UnionTag", "13": "TypeDefinition", "14": "UndefinedStatic", "15": "EnumTag", "16": "MemberOfEnum", "17": "RegisterParam", "18": "BitField", "100": "Block", "101": "Function", "102": "EndOfStruct", "103": "File", "104": "Section", "105": "WeakExternal", "107": "CLRToken" } }),
  u8("numberOfAuxSymbols", {  }),
]);

const StringTable = struct("StringTable", [
  u32("size", {  }),
]);

const SectionFlags = struct("SectionFlags", [
  bits("typeNoPad", 1, { at: 0, bit: 3, unit: 4, label: "typeNoPad" }),
  bits("cntCode", 1, { at: 0, bit: 5, unit: 4, label: "cntCode" }),
  bits("initializedData", 1, { at: 0, bit: 6, unit: 4, label: "initializedData" }),
  bits("uninitializedData", 1, { at: 0, bit: 7, unit: 4, label: "uninitializedData" }),
  bits("lnkOther", 1, { at: 0, bit: 8, unit: 4, label: "lnkOther" }),
  bits("lnkInfo", 1, { at: 0, bit: 9, unit: 4, label: "lnkInfo" }),
  bits("lnkRemove", 1, { at: 0, bit: 11, unit: 4, label: "lnkRemove" }),
  bits("lnkCOMDAT", 1, { at: 0, bit: 12, unit: 4, label: "lnkCOMDAT" }),
  bits("gprel", 1, { at: 0, bit: 15, unit: 4, label: "gprel" }),
  bits("memPurgeable", 1, { at: 0, bit: 17, unit: 4, label: "memPurgeable" }),
  bits("memLocked", 1, { at: 0, bit: 18, unit: 4, label: "memLocked" }),
  bits("memPreload", 1, { at: 0, bit: 19, unit: 4, label: "memPreload" }),
  bits("alignment", 4, { at: 0, bit: 20, unit: 4, label: "alignment" }),
  bits("lnkNrelocOvfl", 1, { at: 0, bit: 24, unit: 4, label: "lnkNrelocOvfl" }),
  bits("memDiscardable", 1, { at: 0, bit: 25, unit: 4, label: "memDiscardable" }),
  bits("memNotCached", 1, { at: 0, bit: 26, unit: 4, label: "memNotCached" }),
  bits("memNotPaged", 1, { at: 0, bit: 27, unit: 4, label: "memNotPaged" }),
  bits("memShared", 1, { at: 0, bit: 28, unit: 4, label: "memShared" }),
  bits("memExecute", 1, { at: 0, bit: 29, unit: 4, label: "memExecute" }),
  bits("memRead", 1, { at: 0, bit: 30, unit: 4, label: "memRead" }),
  bits("memWrite", 1, { at: 0, bit: 31, unit: 4, label: "memWrite" }),
]);

const Relocations = struct("Relocations", [
  u32("virtualAddress", {  }),
  u32("symbolTableIndex", {  }),
  u16("type", { values: { "0": "Null", "1": "Void", "2": "Char", "3": "Short", "4": "Int", "5": "Long", "6": "Float", "7": "Double", "8": "Struct", "9": "Union", "10": "Enum", "11": "MOE", "12": "Byte", "13": "Word", "14": "UInt", "15": "DWord" } }),
]);

const Section = struct("Section", [
  str("name", { size: 8 }),
]);

const Header = struct("Header", [
  u16("machine", { values: { "0": "Unknown", "467": "AM33", "34404": "AMD64", "448": "ARM", "43620": "ARM64", "452": "ARMNT", "3772": "EBC", "332": "I386", "512": "IA64", "25138": "LOONGARCH32", "25188": "LOONGARCH64", "36929": "M32R", "550": "MIPS16", "870": "MIPSFPU", "1126": "MIPSFPU16", "496": "POWERPC", "496": "POWERPCFP", "358": "R4000", "20530": "RISCV32", "20580": "RISCV64", "20776": "RISCV128", "418": "SH3", "419": "SH3DSP", "422": "SH4", "424": "SH5", "450": "THUMB", "361": "WCEMIPSV2" } }),
  u16("numberOfSections", {  }),
]);

const COFF = struct("COFF", [
  record("header", Header),
]);

export default definePack({
  name: "Common Object File Format (COFF) executable",
  endian: "little",
  pointerSize: 8,
  types: [Characteristics, AuxSymbol, SymbolTable, StringTable, SectionFlags, Relocations, Section, Header, COFF],
  nodes: {
    "entry": structNode(COFF, { label: "COFF（入口）" }),
    "Characteristics": structNode(Characteristics, { label: "Characteristics" }),
    "AuxSymbol": structNode(AuxSymbol, { label: "AuxSymbol" }),
    "SymbolTable": structNode(SymbolTable, { label: "SymbolTable" }),
    "StringTable": structNode(StringTable, { label: "StringTable" }),
    "SectionFlags": structNode(SectionFlags, { label: "SectionFlags" }),
    "Relocations": structNode(Relocations, { label: "Relocations" }),
    "Section": structNode(Section, { label: "Section" }),
    "Header": structNode(Header, { label: "Header" }),
  },
});


/*
未移植项：
- Header.timeDateStamp: 类型 type_time32_t 不可移植
*/
