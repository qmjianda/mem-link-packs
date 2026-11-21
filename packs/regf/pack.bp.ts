/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/regf
// 原始 pack：regf · Windows registry hive v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 8 个动态辅助节点；未移植 1 项（见文件末尾）
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

const Elem_char = struct("charValue", [
  char('value', { endian: "little" }),
]);

export default definePack({
  name: "REGF",
  endian: "little",
  pointerSize: 4,
  types: [RegfKeyFlags, RegfNamedKey, RegfHbin, Regf, Elem_char],
  nodes: {
    "entry": structNode(Regf, { label: "Regf（入口）" }),
    "RegfNamedKey": structNode(RegfNamedKey, { label: "RegfNamedKey" }),
    "RegfHbin": structNode(RegfHbin, { label: "RegfHbin" }),
    "flags_RegfKeyFlags": structNode(RegfKeyFlags, { label: "位域 RegfKeyFlags" }),
    "array_RegfNamedKey_keyName": arrayNode(Elem_char, {
      label: "RegfNamedKey.keyName（动态数组）",
      description: "count 来自 RegfNamedKey.keyNameLength；address 指向数组首元素",
    }),
    "calc_RegfHbin_cellsLen": calcNode({
      label: "RegfHbin.cellsLen（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "size": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["size"] ?? 0) - 32) }),
    }),
    "calc_Regf_rootCellPos": calcNode({
      label: "Regf.rootCellPos（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "rootCellOffset": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["rootCellOffset"] ?? 0) + 4096) }),
    }),
    "calc_Regf_rootKeyPos": calcNode({
      label: "Regf.rootKeyPos（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "rootCellOffset": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["rootCellOffset"] ?? 0) + 4100) }),
    }),
    "ptr_Regf_rootCellSize": calcNode({
      label: "Regf.rootCellSize（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "rootCellPos": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["rootCellPos"] ?? 0) }),
    }),
    "ptr_Regf_rootKey": calcNode({
      label: "Regf.rootKey（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "rootKeyPos": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["rootKeyPos"] ?? 0) }),
    }),
    "ptrtarget_Regf_rootKey": structNode(RegfNamedKey, { label: "指针目标 · Regf.rootKey" }),
    "list_Regf_bins": listNode(RegfHbin, {
      label: "Regf.bins（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => {  return e.addr + RegfHbin.size; },
      max: 4096,
    }),
  },
});


/*
未移植项：
- RegfHbin.cells: 变长字节块未移植
*/
