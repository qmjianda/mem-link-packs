/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fs/exfat.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const VolumeLabelEntry = struct("VolumeLabelEntry", [
  u8("entryType", {  }),
  u8("characterCount", {  }),
  str("volumeLabel", { size: 22 }),
]);

const FileAttribute = struct("FileAttribute", [
  bits("readOnly", 1, { at: 0, bit: 0, unit: 2, label: "readOnly" }),
  bits("hidden", 1, { at: 0, bit: 1, unit: 2, label: "hidden" }),
  bits("system", 1, { at: 0, bit: 2, unit: 2, label: "system" }),
  bits("reserved", 1, { at: 0, bit: 3, unit: 2, label: "reserved" }),
  bits("directory", 1, { at: 0, bit: 4, unit: 2, label: "directory" }),
  bits("archive", 1, { at: 0, bit: 5, unit: 2, label: "archive" }),
  bits("reserved1", 10, { at: 0, bit: 6, unit: 2, label: "reserved1" }),
]);

const FileEntry = struct("FileEntry", [
  u8("entryType", {  }),
  u8("secondayEntryCount", {  }),
  u16("checksum", {  }),
  record("attributes", FileAttribute),
]);

const GeneralSecondaryFlags = struct("GeneralSecondaryFlags", [
  bits("allocationPossible", 1, { at: 0, bit: 0, unit: 1, label: "allocationPossible" }),
  bits("noFatChain", 1, { at: 0, bit: 1, unit: 1, label: "noFatChain" }),
  bits("customDefined", 6, { at: 0, bit: 2, unit: 1, label: "customDefined" }),
]);

const FileNameEntry = struct("FileNameEntry", [
  u8("entryType", {  }),
  u8("flags", {  }),
]);

const UpcaseTableEntry = struct("UpcaseTableEntry", [
  u8("entryType", {  }),
]);

const AllocationBitmapEntry = struct("AllocationBitmapEntry", [
  u8("entryType", {  }),
  u8("bitmapFlags", {  }),
]);

const StreamExtensionEntry = struct("StreamExtensionEntry", [
  u8("entryType", {  }),
  record("secondaryFlags", GeneralSecondaryFlags),
]);

export default definePack({
  name: "Extensible File Allocation Table (exFAT)",
  endian: "little",
  pointerSize: 8,
  types: [VolumeLabelEntry, FileAttribute, FileEntry, GeneralSecondaryFlags, FileNameEntry, UpcaseTableEntry, AllocationBitmapEntry, StreamExtensionEntry],
  nodes: {
    "entry": structNode(VolumeLabelEntry, { label: "VolumeLabelEntry（入口）" }),
    "FileAttribute": structNode(FileAttribute, { label: "FileAttribute" }),
    "FileEntry": structNode(FileEntry, { label: "FileEntry" }),
    "GeneralSecondaryFlags": structNode(GeneralSecondaryFlags, { label: "GeneralSecondaryFlags" }),
    "FileNameEntry": structNode(FileNameEntry, { label: "FileNameEntry" }),
    "UpcaseTableEntry": structNode(UpcaseTableEntry, { label: "UpcaseTableEntry" }),
    "AllocationBitmapEntry": structNode(AllocationBitmapEntry, { label: "AllocationBitmapEntry" }),
    "StreamExtensionEntry": structNode(StreamExtensionEntry, { label: "StreamExtensionEntry" }),
  },
});


/*
未移植项：
- OemParameter.parameters: 类型 Parameter 不可移植
- BootRegion.bootSector: 类型 BootSector 不可移植
- FileNameEntry.name: 类型 char16 不可移植
*/
