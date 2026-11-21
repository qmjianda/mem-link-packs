/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/DFIR/exFAT.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Entry_Flags = struct("Entry_Flags", [
  bits("TypeCode", 5, { at: 0, bit: 0, unit: 1, label: "TypeCode" }),
  bits("Importance", 1, { at: 0, bit: 5, unit: 1, label: "Importance" }),
  bits("Category", 1, { at: 0, bit: 6, unit: 1, label: "Category" }),
  bits("InUse", 1, { at: 0, bit: 7, unit: 1, label: "InUse" }),
]);

const Bitmap_Flags = struct("Bitmap_Flags", [
  bits("Bitmap_1", 1, { at: 0, bit: 0, unit: 1, label: "Bitmap_1" }),
  bits("Bitmap_2", 1, { at: 0, bit: 1, unit: 1, label: "Bitmap_2" }),
]);

const General_Primary_Flags = struct("General_Primary_Flags", [
  bits("Allocation_Possible", 1, { at: 0, bit: 0, unit: 1, label: "Allocation_Possible" }),
  bits("No_FAT_Chain", 1, { at: 0, bit: 1, unit: 1, label: "No_FAT_Chain" }),
  bits("Reserved", 6, { at: 0, bit: 2, unit: 1, label: "Reserved" }),
]);

const General_Secondary_Flags = struct("General_Secondary_Flags", [
  bits("Allocation_Possible", 1, { at: 0, bit: 0, unit: 1, label: "Allocation_Possible" }),
  bits("No_FAT_Chain", 1, { at: 0, bit: 1, unit: 1, label: "No_FAT_Chain" }),
  bits("Reserved", 6, { at: 0, bit: 2, unit: 1, label: "Reserved" }),
]);

const File_Attr_Flags = struct("File_Attr_Flags", [
  bits("Read_Only", 1, { at: 0, bit: 0, unit: 2, label: "Read_Only" }),
  bits("Hidden", 1, { at: 0, bit: 1, unit: 2, label: "Hidden" }),
  bits("System", 1, { at: 0, bit: 2, unit: 2, label: "System" }),
  bits("Directory", 1, { at: 0, bit: 3, unit: 2, label: "Directory" }),
  bits("Archive", 1, { at: 0, bit: 4, unit: 2, label: "Archive" }),
  bits("Reserved", 11, { at: 0, bit: 5, unit: 2, label: "Reserved" }),
]);

const VolumeGUID_Entry = struct("VolumeGUID_Entry", [
  record("EntryFlags", Entry_Flags),
  bytes("SecondaryCount", { size: 3 }),
]);

const TexFATPadding_Entry = struct("TexFATPadding_Entry", [
  record("Flags", Entry_Flags),
  bytes("Reserved_1", { size: 31 }),
]);

const AccessControl_Entry = struct("AccessControl_Entry", [
  record("Flags", Entry_Flags),
  bytes("Reserved", { size: 31 }),
]);

const VolumeLabel_Entry = struct("VolumeLabel_Entry", [
  record("Flags", Entry_Flags),
  u8("LabelLength", {  }),
]);

const AllocationBitmap_Entry = struct("AllocationBitmap_Entry", [
  record("Flags", Entry_Flags),
  record("BitmapFlags", Bitmap_Flags),
  bytes("Reserved_1", { size: 18 }),
  u32("FirstCluster", {  }),
  u64("DataLength", {  }),
]);

const UpCaseTable_Entry = struct("UpCaseTable_Entry", [
  record("Flags", Entry_Flags),
  bytes("Reserved_1", { size: 3 }),
]);

const FileInfo_Entry = struct("FileInfo_Entry", [
  record("EntryFlags", Entry_Flags),
  u8("SecondaryCount", {  }),
]);

const FileName_Entry = struct("FileName_Entry", [
  record("EntryFlags", Entry_Flags),
  record("SecondaryFlags", General_Secondary_Flags),
]);

const Stream_Entry = struct("Stream_Entry", [
  record("EntryFlags", Entry_Flags),
]);

const RootDir = struct("RootDir", [
  u8("Type", { values: { "0": "UNUSED_ENTRY", "160": "ACTIVE_VOLUME_GUID_ENTRY", "32": "INACTIVE_VOLUME_GUID_ENTRY", "161": "ACTIVE_TEXFAT_ENTRY", "33": "INACTIVE_TEXFAT_ENTRY", "162": "ACTIVE_ACCESS_CONTROL_ENTRY", "34": "INACTIVE_ACCESS_CONTROL_ENTRY", "131": "ACTIVE_VOLUME_LABEL_ENTRY", "3": "INACTIVE_VOLUME_LABEL_ENTRY", "129": "ACTIVE_ALLOCATION_BITMAP_ENTRY", "1": "INACTIVE_ALLOCATION_BITMAP_ENTRY", "130": "ACTIVE_UPCASE_TABLE_ENTRY", "2": "INACTIVE_UPCASE_TABLE_ENTRY", "133": "ACTIVE_FILE_INFO_ENTRY", "5": "INACTIVE_FILE_INFO_ENTRY", "192": "ACTIVE_STREAM_ENTRY", "64": "INACTIVE_STREAM_ENTRY", "193": "ACTIVE_FILENAME_ENTRY", "65": "INACTIVE_FILENAME_ENTRY" } }),
  pad(31),
]);

const FAT_Union = union("FAT_Union", [
  u32("DECIMAL", {  }),
  u32("FAT_FLAG", { values: { "0": "UNALLOCATED", "4294967295": "END_OF_FILE", "4294967287": "BAD_CLUSTER" } }),
]);

const FAT_Entry = struct("FAT_Entry", [
  record("FAT", FAT_Union),
]);

const FAT_Header = struct("FAT_Header", [
  u8("mediaDescriptor", { values: { "240": "SINGLE_SIDE_FLOPPY", "249": "DOUBLE_SIDE_FLOPPY", "248": "HARD_DISK_DRIVE" } }),
]);

const VolumeFlags = struct("VolumeFlags", [
  bits("Active", 1, { at: 0, bit: 0, unit: 2, label: "Active" }),
  bits("VolumeDirty", 1, { at: 0, bit: 1, unit: 2, label: "VolumeDirty" }),
  bits("Media_Failure", 1, { at: 0, bit: 2, unit: 2, label: "Media_Failure" }),
  bits("Clear_to_Zero", 1, { at: 0, bit: 3, unit: 2, label: "Clear_to_Zero" }),
  bits("Rserved", 12, { at: 0, bit: 4, unit: 2, label: "Rserved" }),
]);

const exFAT_BootSector = struct("exFAT_BootSector", [
  bytes("jmp_boot", { size: 3 }),
  str("fs_name", { size: 8 }),
  bytes("must_be_zero", { size: 53 }),
  u64("partition_offset", {  }),
  u64("volume_length", {  }),
  u32("fat_offset", {  }),
  u32("fat_length", {  }),
  u32("cluster_heap_offset", {  }),
  u32("cluster_count", {  }),
  u32("root_dir_cluster", {  }),
  u32("volume_serial", {  }),
  u16("fs_revision", {  }),
  record("volume_flags", VolumeFlags),
  u8("bytes_per_sector_shift", {  }),
  u8("sectors_per_cluster_shift", {  }),
  u8("number_of_fats", {  }),
  u8("drive_select", {  }),
  u8("percent_in_use", {  }),
  bytes("reserved", { size: 7 }),
  bytes("bootstrap", { size: 390 }),
  u16("VBR_SIG", { values: { "43605": "VBR_SIG" } }),
]);

export default definePack({
  name: "exFAT Filesystem (exFAT_v2.0)",
  endian: "little",
  pointerSize: 8,
  types: [Entry_Flags, Bitmap_Flags, General_Primary_Flags, General_Secondary_Flags, File_Attr_Flags, VolumeGUID_Entry, TexFATPadding_Entry, AccessControl_Entry, VolumeLabel_Entry, AllocationBitmap_Entry, UpCaseTable_Entry, FileInfo_Entry, FileName_Entry, Stream_Entry, RootDir, FAT_Union, FAT_Entry, FAT_Header, VolumeFlags, exFAT_BootSector],
  nodes: {
    "entry": structNode(exFAT_BootSector, { label: "exFAT_BootSector（入口）" }),
    "Entry_Flags": structNode(Entry_Flags, { label: "Entry_Flags" }),
    "Bitmap_Flags": structNode(Bitmap_Flags, { label: "Bitmap_Flags" }),
    "General_Primary_Flags": structNode(General_Primary_Flags, { label: "General_Primary_Flags" }),
    "General_Secondary_Flags": structNode(General_Secondary_Flags, { label: "General_Secondary_Flags" }),
    "File_Attr_Flags": structNode(File_Attr_Flags, { label: "File_Attr_Flags" }),
    "VolumeGUID_Entry": structNode(VolumeGUID_Entry, { label: "VolumeGUID_Entry" }),
    "TexFATPadding_Entry": structNode(TexFATPadding_Entry, { label: "TexFATPadding_Entry" }),
    "AccessControl_Entry": structNode(AccessControl_Entry, { label: "AccessControl_Entry" }),
    "VolumeLabel_Entry": structNode(VolumeLabel_Entry, { label: "VolumeLabel_Entry" }),
    "AllocationBitmap_Entry": structNode(AllocationBitmap_Entry, { label: "AllocationBitmap_Entry" }),
    "UpCaseTable_Entry": structNode(UpCaseTable_Entry, { label: "UpCaseTable_Entry" }),
    "FileInfo_Entry": structNode(FileInfo_Entry, { label: "FileInfo_Entry" }),
    "FileName_Entry": structNode(FileName_Entry, { label: "FileName_Entry" }),
    "Stream_Entry": structNode(Stream_Entry, { label: "Stream_Entry" }),
    "RootDir": structNode(RootDir, { label: "RootDir" }),
    "FAT_Union": structNode(FAT_Union, { label: "FAT_Union" }),
    "FAT_Entry": structNode(FAT_Entry, { label: "FAT_Entry" }),
    "FAT_Header": structNode(FAT_Header, { label: "FAT_Header" }),
    "VolumeFlags": structNode(VolumeFlags, { label: "VolumeFlags" }),
  },
});


/*
未移植项：
- FileName_Entry.FileName: 类型 char16 不可移植
*/
