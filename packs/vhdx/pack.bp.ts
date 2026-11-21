/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/vhdx
// 原始 pack：vhdx · VHDX disk image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 22 个动态辅助节点；未移植 7 项（见文件末尾）
const VhdxFileParameterFlags = struct("VhdxFileParameterFlags", [
  bits("leaveBlocksAllocated", 1, { at: 0, bit: 0, unit: 4, label: "leaveBlocksAllocated" }),
  bits("hasParent", 1, { at: 0, bit: 1, unit: 4, label: "hasParent" }),
]);

const VhdxFileParameters = struct("VhdxFileParameters", [
  u32("blockSize", { endian: "little", label: "payload block size in bytes, 1 to 256 MiB (32 MiB by default)" }),
  record("flags", VhdxFileParameterFlags),
]);

const VhdxMetadataFlags = struct("VhdxMetadataFlags", [
  bits("isUser", 1, { at: 0, bit: 0, unit: 4, label: "isUser" }),
  bits("isVirtualDisk", 1, { at: 0, bit: 1, unit: 4, label: "isVirtualDisk" }),
  bits("isRequired", 1, { at: 0, bit: 2, unit: 4, label: "isRequired" }),
]);

const VhdxMetadataEntry = struct("VhdxMetadataEntry", [
  u32("itemId", { values: { "3399575351": "FileParameters", "799359524": "VirtualDiskSize", "3200914091": "Page83Data", "2168569629": "LogicalSectorSize", "3450030279": "PhysicalSectorSize", "2832424747": "ParentLocator" }, label: "first word of the item's GUID" }),
  bytes("itemIdRest", { size: 12, label: "rest of the GUID" }),
  u32("offset", { endian: "little", label: "offset of the value from the start of the metadata region" }),
  u32("length", { endian: "little", label: "bytes of the value" }),
  record("flags", VhdxMetadataFlags),
  u32("reserved", { endian: "little" }),
]);

const VhdxMetadataTable = struct("VhdxMetadataTable", [
  str("signature", { size: 8, label: "metadata" }),
  u16("reserved", { endian: "little" }),
  u16("entryCount", { endian: "little", label: "items in the table" }),
  bytes("reserved2", { size: 20 }),
  record("entry0", VhdxMetadataEntry),
  record("entry1", VhdxMetadataEntry),
  record("entry2", VhdxMetadataEntry),
  record("entry3", VhdxMetadataEntry),
  record("entry4", VhdxMetadataEntry),
]);

const VhdxBatEntry = struct("VhdxBatEntry", [
  bits("state", 3, { at: 0, bit: 0, unit: 8, label: "state" }),
  bits("fileOffsetMb", 44, { at: 0, bit: 20, unit: 8, label: "fileOffsetMb" }),
]);

const VhdxBat = struct("VhdxBat", [
  array("entries", VhdxBatEntry, 32),
]);

const VhdxRegionEntry = struct("VhdxRegionEntry", [
  u32("guid", { values: { "767719270": "Bat", "2340200966": "Metadata" }, label: "first word of the region's GUID" }),
  bytes("guidRest", { size: 12, label: "rest of the GUID" }),
  u64("fileOffset", { endian: "little", label: "offset of the region, 1 MiB aligned" }),
  u32("length", { endian: "little", label: "bytes in the region, a multiple of 1 MiB" }),
  u32("required", { endian: "little", label: "bit 0: a reader that does not know this region must fail" }),
]);

const VhdxRegionTable = struct("VhdxRegionTable", [
  str("signature", { size: 4, label: "regi" }),
  u32("checksum", { endian: "little", label: "CRC-32C of the 64 KiB table" }),
  u32("entryCount", { endian: "little", label: "regions listed, at most 2047" }),
  u32("reserved", { endian: "little" }),
]);

const VhdxHeader = struct("VhdxHeader", [
  str("signature", { size: 4, label: "head" }),
  u32("checksum", { endian: "little", label: "CRC-32C of the 4 KiB header" }),
  u64("sequenceNumber", { endian: "little", label: "the copy with the higher number is current" }),
  bytes("fileWriteGuid", { size: 16, label: "changes the first time the file is opened for writing" }),
  bytes("dataWriteGuid", { size: 16, label: "changes when the disk's contents change" }),
  bytes("logGuid", { size: 16, label: "all zero unless the log holds entries to replay" }),
  u16("logVersion", { endian: "little", label: "0" }),
  u16("version", { endian: "little", label: "1" }),
  u32("logLength", { endian: "little", label: "bytes in the log, a multiple of 1 MiB" }),
  u64("logOffset", { endian: "little", label: "offset of the log, 1 MiB aligned" }),
]);

const Vhdx = struct("Vhdx", [
  str("signature", { size: 8, label: "vhdxfile" }),
  bytes("creator", { size: 512, label: "the creating application's name, UTF-16LE" }),
]);

export default definePack({
  name: "VHDX",
  endian: "little",
  pointerSize: 4,
  types: [VhdxFileParameterFlags, VhdxFileParameters, VhdxMetadataFlags, VhdxMetadataEntry, VhdxMetadataTable, VhdxBatEntry, VhdxBat, VhdxRegionEntry, VhdxRegionTable, VhdxHeader, Vhdx],
  nodes: {
    "entry": structNode(Vhdx, { label: "Vhdx（入口）" }),
    "VhdxFileParameters": structNode(VhdxFileParameters, { label: "VhdxFileParameters" }),
    "VhdxMetadataEntry": structNode(VhdxMetadataEntry, { label: "VhdxMetadataEntry" }),
    "VhdxMetadataTable": structNode(VhdxMetadataTable, { label: "VhdxMetadataTable" }),
    "VhdxBat": structNode(VhdxBat, { label: "VhdxBat" }),
    "VhdxRegionEntry": structNode(VhdxRegionEntry, { label: "VhdxRegionEntry" }),
    "VhdxRegionTable": structNode(VhdxRegionTable, { label: "VhdxRegionTable" }),
    "VhdxHeader": structNode(VhdxHeader, { label: "VhdxHeader" }),
    "flags_VhdxFileParameterFlags": structNode(VhdxFileParameterFlags, { label: "位域 VhdxFileParameterFlags" }),
    "flags_VhdxMetadataFlags": structNode(VhdxMetadataFlags, { label: "位域 VhdxMetadataFlags" }),
    "flags_VhdxBatEntry": structNode(VhdxBatEntry, { label: "位域 VhdxBatEntry" }),
    "ptr_VhdxMetadataTable_value0": calcNode({
      label: "VhdxMetadataTable.value0（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "value0At": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["value0At"] ?? 0) }),
    }),
    "match_VhdxMetadataTable_value0_3399575351": structNode(VhdxFileParameters, { label: "VhdxMetadataTable.value0 · match 3399575351" }),
    "ptr_VhdxMetadataTable_value1": calcNode({
      label: "VhdxMetadataTable.value1（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "value1At": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["value1At"] ?? 0) }),
    }),
    "match_VhdxMetadataTable_value1_3399575351": structNode(VhdxFileParameters, { label: "VhdxMetadataTable.value1 · match 3399575351" }),
    "ptr_VhdxMetadataTable_value2": calcNode({
      label: "VhdxMetadataTable.value2（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "value2At": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["value2At"] ?? 0) }),
    }),
    "match_VhdxMetadataTable_value2_3399575351": structNode(VhdxFileParameters, { label: "VhdxMetadataTable.value2 · match 3399575351" }),
    "ptr_VhdxMetadataTable_value3": calcNode({
      label: "VhdxMetadataTable.value3（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "value3At": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["value3At"] ?? 0) }),
    }),
    "match_VhdxMetadataTable_value3_3399575351": structNode(VhdxFileParameters, { label: "VhdxMetadataTable.value3 · match 3399575351" }),
    "ptr_VhdxMetadataTable_value4": calcNode({
      label: "VhdxMetadataTable.value4（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "value4At": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["value4At"] ?? 0) }),
    }),
    "match_VhdxMetadataTable_value4_3399575351": structNode(VhdxFileParameters, { label: "VhdxMetadataTable.value4 · match 3399575351" }),
    "ptr_VhdxRegionEntry_region": calcNode({
      label: "VhdxRegionEntry.region（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "fileOffset": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["fileOffset"] ?? 0) }),
    }),
    "match_VhdxRegionEntry_region_2340200966": structNode(VhdxMetadataTable, { label: "VhdxRegionEntry.region · match 2340200966" }),
    "match_VhdxRegionEntry_region_767719270": structNode(VhdxBat, { label: "VhdxRegionEntry.region · match 767719270" }),
    "array_VhdxRegionTable_entries": arrayNode(VhdxRegionEntry, {
      label: "VhdxRegionTable.entries（动态数组）",
      description: "count 来自 VhdxRegionTable.entryCount；address 指向数组首元素",
    }),
    "ptr_Vhdx_header1": calcNode({
      label: "Vhdx.header1（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: 65536 }),
    }),
    "ptrtarget_Vhdx_header1": structNode(VhdxHeader, { label: "指针目标 · Vhdx.header1" }),
    "ptr_Vhdx_header2": calcNode({
      label: "Vhdx.header2（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: 131072 }),
    }),
    "ptrtarget_Vhdx_header2": structNode(VhdxHeader, { label: "指针目标 · Vhdx.header2" }),
    "ptr_Vhdx_regionTable": calcNode({
      label: "Vhdx.regionTable（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: 196608 }),
    }),
    "ptrtarget_Vhdx_regionTable": structNode(VhdxRegionTable, { label: "指针目标 · Vhdx.regionTable" }),
    "ptr_Vhdx_regionTable2": calcNode({
      label: "Vhdx.regionTable2（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: 262144 }),
    }),
    "ptrtarget_Vhdx_regionTable2": structNode(VhdxRegionTable, { label: "指针目标 · Vhdx.regionTable2" }),
  },
});


/*
未移植项：
- VhdxMetadataTable.entry5: 条件字段未移植，后续布局在此停止
- VhdxMetadataTable.value0At: computed 表达式依赖非标量字段，未生成 calc 辅助节点
- VhdxMetadataTable.value1At: computed 表达式依赖非标量字段，未生成 calc 辅助节点
- VhdxMetadataTable.value2At: computed 表达式依赖非标量字段，未生成 calc 辅助节点
- VhdxMetadataTable.value3At: computed 表达式依赖非标量字段，未生成 calc 辅助节点
- VhdxMetadataTable.value4At: computed 表达式依赖非标量字段，未生成 calc 辅助节点
- 未找到 struct VhdxBatEntry
*/
