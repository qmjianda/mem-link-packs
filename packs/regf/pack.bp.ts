/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/regf
// 原始 pack：regf · Windows registry hive v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 8 项（见文件末尾）
const RegfKeyFlags = struct("RegfKeyFlags", [
  bits("volatile", 1, { at: 0, bit: 0, unit: 2, label: "volatile" }),
  bits("hiveExit", 1, { at: 0, bit: 1, unit: 2, label: "hiveExit" }),
  bits("hiveEntry", 1, { at: 0, bit: 2, unit: 2, label: "hiveEntry" }),
  bits("noDelete", 1, { at: 0, bit: 3, unit: 2, label: "noDelete" }),
  bits("symlink", 1, { at: 0, bit: 4, unit: 2, label: "symlink" }),
  bits("compName", 1, { at: 0, bit: 5, unit: 2, label: "compName" }),
  bits("predefined", 1, { at: 0, bit: 6, unit: 2, label: "predefined" }),
]);

const RegfNamedKey = struct("RegfNamedKey", [
  str("signature", { size: 2, label: "nk" }),
  record("flags", RegfKeyFlags, { label: "key type and name encoding" }),
  u64("lastWritten", { endian: "little", label: "last write time (FILETIME)" }),
  u32("accessBits", { endian: "little", label: "access flags" }),
  u32("parent", { endian: "little", label: "offset of the parent key cell" }),
  u32("subkeyCount", { endian: "little", label: "stable subkeys" }),
  u32("volatileSubkeys", { endian: "little", label: "volatile subkeys, absent from the file" }),
  u32("subkeyList", { endian: "little", label: "offset of the subkey list cell" }),
  u32("volatileSubkeyList", { endian: "little", label: "offset of the volatile subkey list" }),
  u32("valueCount", { endian: "little", label: "values on this key" }),
  u32("valueList", { endian: "little", label: "offset of the value list cell" }),
  u32("security", { endian: "little", label: "offset of the security descriptor cell" }),
  u32("classNameOffset", { endian: "little", label: "offset of the class name, or 0xFFFFFFFF" }),
  u32("maxSubkeyNameLen", { endian: "little", label: "longest subkey name, in bytes" }),
  u32("maxSubkeyClassLen", { endian: "little", label: "longest subkey class name" }),
  u32("maxValueNameLen", { endian: "little", label: "longest value name, in bytes" }),
  u32("maxValueDataLen", { endian: "little", label: "largest value data" }),
  u32("workVar", { endian: "little", label: "scratch space used at run time" }),
  u16("keyNameLength", { endian: "little", label: "length of the name that follows, in bytes" }),
  u16("classNameLength", { endian: "little", label: "length of the class name" }),
]);

const RegfHbin = struct("RegfHbin", [
  str("signature", { size: 4, label: "hbin" }),
  u32("offset", { endian: "little", label: "offset of this bin from the start of the bins data" }),
  u32("size", { endian: "little", label: "size of this bin, always a multiple of 4096" }),
  bytes("reserved", { size: 8, label: "zero" }),
  u64("timestamp", { endian: "little", label: "last write time (FILETIME); meaningful in the first bin only" }),
  u32("spare", { endian: "little", label: "offset of the next bin, in some versions" }),
]);

const Regf = struct("Regf", [
  str("signature", { size: 4, label: "regf" }),
  u32("primarySequence", { endian: "little", label: "incremented before a write" }),
  u32("secondarySequence", { endian: "little", label: "incremented after it; equal to the primary when clean" }),
  u64("lastWritten", { endian: "little", label: "last write time (FILETIME)" }),
  u32("majorVersion", { endian: "little", label: "1" }),
  u32("minorVersion", { endian: "little", label: "3 or 5 on modern Windows" }),
  u32("fileType", { values: { "0": "Primary", "1": "TransactionLog", "2": "TransactionLog2", "6": "TransactionLog3" }, label: "primary hive or transaction log" }),
  u32("fileFormat", { endian: "little", label: "1, direct memory load" }),
  u32("rootCellOffset", { endian: "little", label: "offset of the root key cell, from the start of the bins" }),
  u32("hiveBinsDataSize", { endian: "little", label: "total size of the hive bins" }),
  u32("clusteringFactor", { endian: "little", label: "1, in units of 512 bytes" }),
  str("fileName", { size: 64, label: "last 31 characters of the hive path, UTF-16" }),
  bytes("reserved", { size: 396, label: "RmId, LogId and flags on newer versions, else zero" }),
  u32("checksum", { endian: "little", label: "XOR of the first 508 bytes, taken 4 bytes at a time" }),
  bytes("reserved2", { size: 3576, label: "zero" }),
  u32("bootType", { endian: "little", label: "set during boot, zero in a hive at rest" }),
  u32("bootRecover", { endian: "little", label: "set during boot, zero in a hive at rest" }),
]);

export default definePack({
  name: "REGF",
  endian: "little",
  pointerSize: 4,
  types: [RegfKeyFlags, RegfNamedKey, RegfHbin, Regf],
  nodes: {
    "entry": structNode(Regf, { label: "Regf（入口）" }),
    "RegfNamedKey": structNode(RegfNamedKey, { label: "RegfNamedKey" }),
    "RegfHbin": structNode(RegfHbin, { label: "RegfHbin" }),
    "flags_RegfKeyFlags": structNode(RegfKeyFlags, { label: "位域 RegfKeyFlags" }),
  },
});


/*
未移植项：
- RegfNamedKey.keyName: 动态数组长度（field）未移植
- RegfHbin.cellsLen: computed 字段未移植
- RegfHbin.cells: 变长字节块未移植
- Regf.rootCellPos: computed 字段未移植
- Regf.rootKeyPos: computed 字段未移植
- Regf.rootCellSize: 指针字段（at …）未移植
- Regf.rootKey: 指针字段（at …）未移植
- Regf.bins: repeat 字段未移植，后续布局在此停止
*/
