/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/macho.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Capabilities = struct("Capabilities", [
  bits("lib64", 1, { at: 0, bit: 7, unit: 1, label: "lib64" }),
]);

const Flags = struct("Flags", [
  bits("noUndefs", 1, { at: 0, bit: 0, unit: 4, label: "noUndefs" }),
  bits("incrLink", 1, { at: 0, bit: 1, unit: 4, label: "incrLink" }),
  bits("dyldLink", 1, { at: 0, bit: 2, unit: 4, label: "dyldLink" }),
  bits("binDatLoad", 1, { at: 0, bit: 3, unit: 4, label: "binDatLoad" }),
  bits("prebound", 1, { at: 0, bit: 4, unit: 4, label: "prebound" }),
  bits("splitSegs", 1, { at: 0, bit: 5, unit: 4, label: "splitSegs" }),
  bits("lazyInit", 1, { at: 0, bit: 6, unit: 4, label: "lazyInit" }),
  bits("twoLevel", 1, { at: 0, bit: 7, unit: 4, label: "twoLevel" }),
  bits("forceFlat", 1, { at: 0, bit: 8, unit: 4, label: "forceFlat" }),
  bits("noMultiDefs", 1, { at: 0, bit: 9, unit: 4, label: "noMultiDefs" }),
  bits("noFixPrebinding", 1, { at: 0, bit: 10, unit: 4, label: "noFixPrebinding" }),
  bits("prebindable", 1, { at: 0, bit: 11, unit: 4, label: "prebindable" }),
  bits("allModsBound", 1, { at: 0, bit: 12, unit: 4, label: "allModsBound" }),
  bits("subSectionsViaSymbols", 1, { at: 0, bit: 13, unit: 4, label: "subSectionsViaSymbols" }),
  bits("canonical", 1, { at: 0, bit: 14, unit: 4, label: "canonical" }),
  bits("weakDefines", 1, { at: 0, bit: 15, unit: 4, label: "weakDefines" }),
  bits("bindsToWeak", 1, { at: 0, bit: 16, unit: 4, label: "bindsToWeak" }),
  bits("allowStackExecution", 1, { at: 0, bit: 17, unit: 4, label: "allowStackExecution" }),
  bits("rootSafe", 1, { at: 0, bit: 18, unit: 4, label: "rootSafe" }),
  bits("setuidSafe", 1, { at: 0, bit: 19, unit: 4, label: "setuidSafe" }),
  bits("noReexportedDylibs", 1, { at: 0, bit: 20, unit: 4, label: "noReexportedDylibs" }),
  bits("pie", 1, { at: 0, bit: 21, unit: 4, label: "pie" }),
  bits("deadStrippableDylib", 1, { at: 0, bit: 22, unit: 4, label: "deadStrippableDylib" }),
  bits("hasTlvDescriptors", 1, { at: 0, bit: 23, unit: 4, label: "hasTlvDescriptors" }),
  bits("noHeapExecution", 1, { at: 0, bit: 24, unit: 4, label: "noHeapExecution" }),
  bits("appExtensionSafe", 1, { at: 0, bit: 25, unit: 4, label: "appExtensionSafe" }),
  bits("nlistOutOfSyncWithDyldinof", 1, { at: 0, bit: 26, unit: 4, label: "nlistOutOfSyncWithDyldinof" }),
  bits("simSupport", 1, { at: 0, bit: 27, unit: 4, label: "simSupport" }),
]);

const Header = struct("Header", [
  u32("magic", { values: { "4277009102": "_32BitMagic", "4277009103": "_64BitMagic" } }),
  u32("cpuType", { values: { "-1": "ANY", "1": "VAX", "2": "ROMP", "4": "BS32032", "5": "BS32332", "6": "MC680x0", "7": "I386", "8": "X86_64", "8": "MIPS", "9": "NS32532", "10": "MC98000", "11": "HPPA", "12": "ARM", "13": "ARM64", "14": "ARM64_32", "13": "MC88000", "14": "SPARC", "15": "I860", "16": "I860_LITTLE", "17": "RS6000", "18": "POWERPC", "19": "POWERPC64", "255": "VEO" } }),
]);

const Section = struct("Section", [
  str("sectionName", { size: 16 }),
  str("segmentName", { size: 16 }),
  u32("address", {  }),
]);

const CommandSegment = struct("CommandSegment", [
  str("segmentName", { size: 16 }),
  u32("vmAddress", {  }),
]);

const Section64 = struct("Section64", [
  str("sectionName", { size: 16 }),
  str("segmentName", { size: 16 }),
  u64("address", {  }),
]);

const CommandSegment64 = struct("CommandSegment64", [
  str("segmentName", { size: 16 }),
  u64("vmAddress", {  }),
]);

const lc_str = struct("lc_str", [
  u32("offset", {  }),
]);

const Dylib = struct("Dylib", [
  record("name", lc_str),
  u32("timestamp", {  }),
  u32("current_version", {  }),
  u32("compatibility_version", {  }),
]);

const LoadDyLib = struct("LoadDyLib", [
  record("dylib", Dylib),
]);

const LoadCommand = struct("LoadCommand", [
  u32("command", { values: { "2147483648": "ReqDyLd", "1": "Segment", "2": "SymTab", "3": "SymSeg", "4": "Thread", "5": "UnixThread", "6": "LoadFVMLib", "7": "IdFVMLib", "8": "Ident", "9": "FVMFile", "10": "PrePage", "11": "DySymTab", "12": "LoadDyLib", "13": "IdDyLib", "14": "LoadDyLinker", "15": "IdDyLinker", "16": "PreboundDyLib", "17": "Routines", "18": "SubFramework", "19": "SubUmbrella", "20": "SubClient", "21": "SubLibrary", "22": "TwoLevelHints", "23": "PrebindCksum", "24": "LoadWeakDyLib", "25": "Segment64", "26": "Routines64", "27": "UUID", "-2147483620": "RPath", "29": "CodeSignature", "30": "SegmentSplitInfo", "31": "ReExportDyLib", "32": "LazyLoadDyLib", "33": "EncryptionInfo", "34": "DyLdInfo", "35": "DyLdInfoOnly", "36": "LoadUpwardDyLib", "36": "VersionMinMacOSX", "37": "VersionMinIPhoneOS", "38": "FunctionStarts", "39": "DyLdEnvironment", "40": "Main", "41": "DataInCode", "42": "SourceVersion", "43": "DyLibCodeSignDRS", "44": "EncryptionInfo64", "45": "LinkerOption", "46": "LinkerOptimizationHint", "47": "VersionMinTvOS", "48": "VersionMinWatchOS", "49": "Note", "50": "BuildVersion", "51": "DyldExportsTrie", "52": "DyldChainedFixups", "53": "FilesetEntry", "54": "AtomInfo", "55": "FunctionVariants", "56": "FunctionVariantFixups", "57": "TargetTriple" } }),
]);

const MachO = struct("MachO", [
  record("header", Header),
]);

export default definePack({
  name: "Mach-O executable",
  endian: "little",
  pointerSize: 8,
  types: [Capabilities, Flags, Header, Section, CommandSegment, Section64, CommandSegment64, lc_str, Dylib, LoadDyLib, LoadCommand, MachO],
  nodes: {
    "entry": structNode(MachO, { label: "MachO（入口）" }),
    "Capabilities": structNode(Capabilities, { label: "Capabilities" }),
    "Flags": structNode(Flags, { label: "Flags" }),
    "Header": structNode(Header, { label: "Header" }),
    "Section": structNode(Section, { label: "Section" }),
    "CommandSegment": structNode(CommandSegment, { label: "CommandSegment" }),
    "Section64": structNode(Section64, { label: "Section64" }),
    "CommandSegment64": structNode(CommandSegment64, { label: "CommandSegment64" }),
    "lc_str": structNode(lc_str, { label: "lc_str" }),
    "Dylib": structNode(Dylib, { label: "Dylib" }),
    "LoadDyLib": structNode(LoadDyLib, { label: "LoadDyLib" }),
    "LoadCommand": structNode(LoadCommand, { label: "LoadCommand" }),
  },
});


/*
未移植项：
- CommandUUID.uuid: 类型 u128 不可移植
*/
