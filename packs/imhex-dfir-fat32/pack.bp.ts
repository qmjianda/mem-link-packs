/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/DFIR/FAT32.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 4 项（见文件末尾）
const FAT_Union = union("FAT_Union", [
  u32("DECIMAL", {  }),
  u32("FAT_FLAG", { values: { "0": "UNALLOCATED", "268435455": "END_OF_FILE", "4294967287": "BAD_CLUSTER" } }),
]);

const FAT_Entry = struct("FAT_Entry", [
  record("FAT", FAT_Union),
]);

const FAT_Header = struct("FAT_Header", [
  u8("mediaDescriptor", { values: { "240": "SINGLE_SIDE_FLOPPY", "249": "DOUBLE_SIDE_FLOPPY", "248": "HARD_DISK_DRIVE" } }),
]);

const LFN_Sequence = struct("LFN_Sequence", [
  bits("IS_LAST_ENTRY", 1, { at: 0, bit: 1, unit: 1, label: "IS_LAST_ENTRY" }),
  bits("LFN_SEQ_NUM", 5, { at: 0, bit: 3, unit: 1, label: "LFN_SEQ_NUM" }),
]);

const LFNEntry_FirstByte = union("LFNEntry_FirstByte", [
  u8("status", { values: { "0": "EMPTY_ENTRY", "46": "DOT_ENTRY", "229": "DELETED_ENTRY", "1": "ACTIVE_1ST_ENTRY", "2": "ACTIVE_2ND_ENTRY", "3": "ACTIVE_3RD_ENTRY", "4": "ACTIVE_4TH_ENTRY", "5": "ACTIVE_5TH_ENTRY", "6": "ACTIVE_6TH_ENTRY", "7": "ACTIVE_7TH_ENTRY", "8": "ACTIVE_8TH_ENTRY", "9": "ACTIVE_9TH_ENTRY", "10": "ACTIVE_10TH_ENTRY", "11": "ACTIVE_11TH_ENTRY", "12": "ACTIVE_12TH_ENTRY", "13": "ACTIVE_13TH_ENTRY", "14": "ACTIVE_14TH_ENTRY", "15": "ACTIVE_15TH_ENTRY", "16": "ACTIVE_16TH_ENTRY", "17": "ACTIVE_17TH_ENTRY", "18": "ACTIVE_18TH_ENTRY", "19": "ACTIVE_19TH_ENTRY", "20": "ACTIVE_20TH_ENTRY", "65": "ACTIVE_1ST_ENTRY_LAST", "66": "ACTIVE_2ND_ENTRY_LAST", "67": "ACTIVE_3RD_ENTRY_LAST", "68": "ACTIVE_4TH_ENTRY_LAST", "69": "ACTIVE_5TH_ENTRY_LAST", "70": "ACTIVE_6TH_ENTRY_LAST", "71": "ACTIVE_7TH_ENTRY_LAST", "72": "ACTIVE_8TH_ENTRY_LAST", "73": "ACTIVE_9TH_ENTRY_LAST", "74": "ACTIVE_10TH_ENTRY_LAST", "75": "ACTIVE_11TH_ENTRY_LAST", "76": "ACTIVE_12TH_ENTRY_LAST", "77": "ACTIVE_13TH_ENTRY_LAST", "78": "ACTIVE_14TH_ENTRY_LAST", "79": "ACTIVE_15TH_ENTRY_LAST", "80": "ACTIVE_16TH_ENTRY_LAST", "81": "ACTIVE_17TH_ENTRY_LAST", "82": "ACTIVE_18TH_ENTRY_LAST", "83": "ACTIVE_19TH_ENTRY_LAST", "84": "ACTIVE_20TH_ENTRY_LAST" } }),
  record("seq_num", LFN_Sequence),
]);

const Attributes = struct("Attributes", [
  bits("readOnly", 1, { at: 0, bit: 0, unit: 1, label: "readOnly" }),
  bits("hidden", 1, { at: 0, bit: 1, unit: 1, label: "hidden" }),
  bits("systemFile", 1, { at: 0, bit: 2, unit: 1, label: "systemFile" }),
  bits("volumeLabel", 1, { at: 0, bit: 3, unit: 1, label: "volumeLabel" }),
  bits("subDirectory", 1, { at: 0, bit: 4, unit: 1, label: "subDirectory" }),
  bits("archive", 1, { at: 0, bit: 5, unit: 1, label: "archive" }),
]);

const SFN_Entry_Alias = struct("SFN_Entry_Alias", [
  str("fileName", { size: 8 }),
  str("extension", { size: 3 }),
  record("attributes", Attributes),
  u8("reserved", {  }),
  u8("milliseconds", {  }),
]);

const LFN_Entry = struct("LFN_Entry", [
  record("SeqByte", LFNEntry_FirstByte),
]);

const SFN_Entry = struct("SFN_Entry", [
  str("fileName", { size: 8 }),
  str("extension", { size: 3 }),
  record("attributes", Attributes),
  u8("reserved", {  }),
  u8("milliseconds", {  }),
]);

const RootDirHeader = struct("RootDirHeader", [
  str("VolumeName", { size: 11 }),
  u8("VolumeLabelFlag", {  }),
  pad(10),
]);

const FSInfo = struct("FSInfo", [
  u32("leadSignature", {  }),
  pad(480),
  u32("structSignature", {  }),
  u32("freeClusterCount", {  }),
  u32("nextFreeCluster", {  }),
  pad(14),
  u16("VBR_SIG", { values: { "43605": "VBR_SIG" } }),
]);

const BPB_Common = struct("BPB_Common", [
  bytes("jmp_boot", { size: 3 }),
  str("oem_name", { size: 8 }),
  u16("bytes_per_sector", {  }),
  u8("sectors_per_cluster", {  }),
  u16("reserved_sectors", {  }),
  u8("num_fats", {  }),
  u16("root_entry_count", {  }),
  u16("total_sectors16", {  }),
  u8("media_type", {  }),
  u16("fat_size16", {  }),
  u16("sectors_per_track", {  }),
  u16("num_heads", {  }),
  u32("hidden_sectors", {  }),
  u32("total_sectors32", {  }),
  u32("FAT_Sector_Count", {  }),
  u16("ext_flags", {  }),
  u16("fs_version", {  }),
  u32("root_cluster", {  }),
  u16("fs_info_sector", {  }),
  u16("backup_boot_sector", {  }),
  bytes("reserved", { size: 12 }),
  u8("drive_number", {  }),
  u8("reserved1", {  }),
  u8("boot_signature", {  }),
  u32("volume_id", {  }),
  str("volume_label", { size: 11 }),
  str("fs_type", { size: 8 }),
  bytes("bootstrap", { size: 420 }),
  u16("VBR_SIG", { values: { "43605": "VBR_SIG" } }),
]);

export default definePack({
  name: "FAT32 File System (FAT32_v2.0)",
  endian: "little",
  pointerSize: 8,
  types: [FAT_Union, FAT_Entry, FAT_Header, LFN_Sequence, LFNEntry_FirstByte, Attributes, SFN_Entry_Alias, LFN_Entry, SFN_Entry, RootDirHeader, FSInfo, BPB_Common],
  nodes: {
    "entry": structNode(BPB_Common, { label: "BPB_Common（入口）" }),
    "FAT_Union": structNode(FAT_Union, { label: "FAT_Union" }),
    "FAT_Entry": structNode(FAT_Entry, { label: "FAT_Entry" }),
    "FAT_Header": structNode(FAT_Header, { label: "FAT_Header" }),
    "LFN_Sequence": structNode(LFN_Sequence, { label: "LFN_Sequence" }),
    "LFNEntry_FirstByte": structNode(LFNEntry_FirstByte, { label: "LFNEntry_FirstByte" }),
    "Attributes": structNode(Attributes, { label: "Attributes" }),
    "SFN_Entry_Alias": structNode(SFN_Entry_Alias, { label: "SFN_Entry_Alias" }),
    "LFN_Entry": structNode(LFN_Entry, { label: "LFN_Entry" }),
    "SFN_Entry": structNode(SFN_Entry, { label: "SFN_Entry" }),
    "RootDirHeader": structNode(RootDirHeader, { label: "RootDirHeader" }),
    "FSInfo": structNode(FSInfo, { label: "FSInfo" }),
  },
});


/*
未移植项：
- SFN_Entry_Alias.Created_Time: 类型 std_time_DOSTime 不可移植
- LFN_Entry.NAME_1: 类型 char16 不可移植
- SFN_Entry.Created_Time: 类型 std_time_DOSTime 不可移植
- RootDirHeader.Created_Time: 类型 std_time_DOSTime 不可移植
*/
