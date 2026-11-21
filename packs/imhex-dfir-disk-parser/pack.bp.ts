/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/DFIR/DISK_PARSER.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const CHS_Decoder = struct("CHS_Decoder", [
  bits("head", 8, { at: 0, bit: 0, unit: 4, label: "head" }),
  bits("sector", 6, { at: 0, bit: 8, unit: 4, label: "sector" }),
  bits("cylinder", 10, { at: 0, bit: 14, unit: 4, label: "cylinder" }),
]);

const DiskTimeStamp = struct("DiskTimeStamp", [
  u8("seconds", {  }),
  u8("minutes", {  }),
  u8("hours", {  }),
]);

const GPT_BDP_Attributes = struct("GPT_BDP_Attributes", [
  bits("platform_required", 1, { at: 0, bit: 0, unit: 8, label: "platform_required" }),
  bits("io_ignore", 1, { at: 0, bit: 1, unit: 8, label: "io_ignore" }),
  bits("legacy_flag", 1, { at: 0, bit: 2, unit: 8, label: "legacy_flag" }),
  bits("reserved_UEFI", 45, { at: 0, bit: 3, unit: 8, label: "reserved_UEFI" }),
  bits("reserved_MS", 12, { at: 0, bit: 48, unit: 8, label: "reserved_MS" }),
  bits("read_only", 1, { at: 0, bit: 60, unit: 8, label: "read_only" }),
  bits("shadow_copy", 1, { at: 0, bit: 61, unit: 8, label: "shadow_copy" }),
  bits("hidden", 1, { at: 0, bit: 62, unit: 8, label: "hidden" }),
  bits("no_drive_letter", 1, { at: 0, bit: 63, unit: 8, label: "no_drive_letter" }),
]);

const MBRPartitionUnion = union("MBRPartitionUnion", [
  u8("Part_Type", { values: { "0": "UNUSED_ENTRY", "1": "FAT12_HDD", "17": "FAT12_HIDDEN", "4": "FAT16_SMALL", "20": "FAT16_SMALL_HIDDEN", "6": "FAT16_BIG", "22": "FAT16_BIG_HIDDEN", "11": "FAT32_SMALL", "27": "FAT32_SMALL_HIDDEN", "12": "FAT32_BIG", "28": "FAT32_BIG_HIDDEN", "5": "EXT_PART_SMALL", "21": "EXT_PART_SMALL_HIDDEN", "15": "EXT_PART_BIG", "31": "EXT_PART_BIG_HIDDEN", "7": "NTFS_EXFAT", "23": "NTFS_EXFAT_HIDDEN", "39": "WINDOWS_RECOVERY", "134": "NTFS_VOL_SET_1", "135": "NTFS_VOL_SET_2", "168": "macOSX", "132": "OS2_HIDDEN_CDRIVE", "131": "LINUX_EXT", "133": "LINUX_EXT2", "142": "LINUX_LVM", "240": "LINUX_PA_RISC", "253": "LINUX_RAID", "165": "FREE_BSD", "166": "OPEN_BSD", "77": "QNX_1", "78": "QNX_2", "79": "QNX_3", "238": "GPT_DISK_STD", "239": "GPT_DISK_SYS", "255": "UNKNOWN" } }),
  u8("PartTypeLabel", { values: { "0": "UNUSED_OR_HIDDEN_ENTRY", "7": "PRIMARY", "11": "PRIMARY_F32_SMALL", "12": "PRIMARY_0C_BIG", "5": "EXTENDED_CONT_SMALL", "15": "EXTENDED_CONT_BIG", "238": "LEGACY_MBR" } }),
]);

const PartitionTableEntry = struct("PartitionTableEntry", [
  u8("ActiveFlag", { values: { "0": "Not_Active", "128": "Active" } }),
  record("Starting_CHS", CHS_Decoder),
  record("Type", MBRPartitionUnion),
  record("Ending_CHS", CHS_Decoder),
  u32("Start_LBA", {  }),
  u32("Total_Sectors", {  }),
]);

const MasterBootRecord = struct("MasterBootRecord", [
  bytes("bootstrapCodeArea1", { size: 218 }),
  pad(2),
  u8("originalPhysicalDrive", {  }),
  record("diskTimeStamp", DiskTimeStamp),
  bytes("bootstrapCodeArea2", { size: 216 }),
  u32("diskSignature", {  }),
  u16("diskProtection", { values: { "0": "NotProtected", "23130": "CopyProtected" } }),
  array("PT", PartitionTableEntry, 4),
]);

export default definePack({
  name: "DFIR_DISK_PARSER_v2.0",
  endian: "little",
  pointerSize: 8,
  types: [CHS_Decoder, DiskTimeStamp, GPT_BDP_Attributes, MBRPartitionUnion, PartitionTableEntry, MasterBootRecord],
  nodes: {
    "entry": structNode(CHS_Decoder, { label: "CHS_Decoder（入口）" }),
    "DiskTimeStamp": structNode(DiskTimeStamp, { label: "DiskTimeStamp" }),
    "GPT_BDP_Attributes": structNode(GPT_BDP_Attributes, { label: "GPT_BDP_Attributes" }),
    "MBRPartitionUnion": structNode(MBRPartitionUnion, { label: "MBRPartitionUnion" }),
    "PartitionTableEntry": structNode(PartitionTableEntry, { label: "PartitionTableEntry" }),
    "MasterBootRecord": structNode(MasterBootRecord, { label: "MasterBootRecord" }),
  },
});


/*
未移植项：
- PartitionUnion.PartTypeGUID: 类型 type_GUID 不可移植
- GPT_PartitionEntry.Type: 类型 PartitionUnion 不可移植
- MasterBootRecord.MBR_SIG: 类型 MBRSignature 不可移植
*/
