/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/vhdx.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 11 项（见文件末尾）
const FileTypeIdentifier = struct("FileTypeIdentifier", [
  str("signature", { size: 8 }),
]);

const DataSector = struct("DataSector", [
  u32("sequenceHigh", {  }),
  bytes("data", { size: 4084 }),
  u32("sequenceLow", {  }),
]);

const ZeroDescriptor = struct("ZeroDescriptor", [
  pad(4),
  u64("zeroLength", {  }),
]);

const DataDescriptor = struct("DataDescriptor", [
  u32("trailingBytes", {  }),
  u64("leadingBytes", {  }),
]);

const LogDescriptor = struct("LogDescriptor", [
  str("signature", { size: 4 }),
]);

const LogEntry = struct("LogEntry", [
  str("signature", { size: 4 }),
  u32("checksum", {  }),
]);

const BAT = struct("BAT", [
  bits("State", 3, { at: 0, bit: 0, unit: 8, label: "State" }),
  bits("FileOffsetMB", 44, { at: 0, bit: 20, unit: 8, label: "FileOffsetMB" }),
]);

const MetadataEntryFlags = struct("MetadataEntryFlags", [
  bits("IsUser", 1, { at: 0, bit: 0, unit: 4, label: "IsUser" }),
  bits("IsVirtualDisk", 1, { at: 0, bit: 1, unit: 4, label: "IsVirtualDisk" }),
  bits("IsRequired", 1, { at: 0, bit: 2, unit: 4, label: "IsRequired" }),
]);

const FileParameterFlags = struct("FileParameterFlags", [
  bits("LeaveBlockAllocated", 1, { at: 0, bit: 0, unit: 4, label: "LeaveBlockAllocated" }),
  bits("HasParent", 1, { at: 0, bit: 1, unit: 4, label: "HasParent" }),
]);

const ParentLocatorEntry = struct("ParentLocatorEntry", [
  u32("keyOffset", {  }),
  u32("valueOffset", {  }),
  u16("keyLength", {  }),
  u16("valueLength", {  }),
]);

const MetadataRegion = struct("MetadataRegion", [
  str("signature", { size: 8 }),
  pad(2),
  u16("entryCount", {  }),
  pad(20),
]);

const RegionTable = struct("RegionTable", [
  str("signature", { size: 4 }),
  u32("checksum", {  }),
  u32("entryCount", {  }),
  pad(4),
]);

const Header = struct("Header", [
  str("signature", { size: 4 }),
  u32("checksum", {  }),
  u64("sequenceNumber", {  }),
]);

const VHDX = struct("VHDX", [
  record("fileTypeIdentifier", FileTypeIdentifier),
]);

export default definePack({
  name: "Microsoft Hyper-V Virtual Hard Disk",
  endian: "little",
  pointerSize: 8,
  types: [FileTypeIdentifier, DataSector, ZeroDescriptor, DataDescriptor, LogDescriptor, LogEntry, BAT, MetadataEntryFlags, FileParameterFlags, ParentLocatorEntry, MetadataRegion, RegionTable, Header, VHDX],
  nodes: {
    "entry": structNode(VHDX, { label: "VHDX（入口）" }),
    "FileTypeIdentifier": structNode(FileTypeIdentifier, { label: "FileTypeIdentifier" }),
    "DataSector": structNode(DataSector, { label: "DataSector" }),
    "ZeroDescriptor": structNode(ZeroDescriptor, { label: "ZeroDescriptor" }),
    "DataDescriptor": structNode(DataDescriptor, { label: "DataDescriptor" }),
    "LogDescriptor": structNode(LogDescriptor, { label: "LogDescriptor" }),
    "LogEntry": structNode(LogEntry, { label: "LogEntry" }),
    "BAT": structNode(BAT, { label: "BAT" }),
    "MetadataEntryFlags": structNode(MetadataEntryFlags, { label: "MetadataEntryFlags" }),
    "FileParameterFlags": structNode(FileParameterFlags, { label: "FileParameterFlags" }),
    "ParentLocatorEntry": structNode(ParentLocatorEntry, { label: "ParentLocatorEntry" }),
    "MetadataRegion": structNode(MetadataRegion, { label: "MetadataRegion" }),
    "RegionTable": structNode(RegionTable, { label: "RegionTable" }),
    "Header": structNode(Header, { label: "Header" }),
  },
});


/*
未移植项：
- FileTypeIdentifier.creator: 类型 char16 不可移植
- LogEntry.entryLength: 类型 type_Size32 不可移植
- MetadataFileParameters.blockSize: 类型 type_Size32 不可移植
- MetadataVirtualDiskSize.virtualDiskSize: 类型 type_Size64 不可移植
- MetadataVirtualDiskID.virtualDiskID: 类型 type_GUID 不可移植
- MetadataLogicalSectorSize.logicalSectorSize: 类型 type_Size32 不可移植
- MetadataPhysicalSectorSize.physicalSectorSize: 类型 type_Size32 不可移植
- MetadataParentLocator.locatorType: 类型 type_GUID 不可移植
- MetadataTableEntry.itemID: 类型 type_GUID 不可移植
- RegionTableEntry.guid: 类型 type_GUID 不可移植
- Header.fileWriteGuid: 类型 type_GUID 不可移植
*/
