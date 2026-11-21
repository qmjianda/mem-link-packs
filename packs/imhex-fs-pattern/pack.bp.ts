/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fs/pattern.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const DiskTimeStamp = struct("DiskTimeStamp", [
  u8("seconds", {  }),
  u8("minutes", {  }),
  u8("hours", {  }),
]);

const CHS = struct("CHS", [
  bits("h", 8, { at: 0, bit: 0, unit: 4, label: "h" }),
  bits("s", 6, { at: 0, bit: 8, unit: 4, label: "s" }),
  bits("c", 10, { at: 0, bit: 14, unit: 4, label: "c" }),
]);

const GPTAttributes = struct("GPTAttributes", [
  bits("platform_required", 1, { at: 0, bit: 0, unit: 8, label: "platform_required" }),
  bits("read_only", 1, { at: 0, bit: 60, unit: 8, label: "read_only" }),
  bits("shadow_copy", 1, { at: 0, bit: 61, unit: 8, label: "shadow_copy" }),
  bits("hidden", 1, { at: 0, bit: 62, unit: 8, label: "hidden" }),
  bits("no_drive_letter", 1, { at: 0, bit: 63, unit: 8, label: "no_drive_letter" }),
]);

const GPTEntry = struct("GPTEntry", [
  bytes("partitionType", { size: 16 }),
]);

const PartitionEntry = struct("PartitionEntry", [
  u8("status", { values: { "0": "None", "128": "Active" } }),
  record("chsFirstSectorAddress", CHS),
  u8("type", { values: { "0": "Empty", "1": "FAT12", "2": "XENIXRoot", "3": "XENIXUsr", "4": "FAT16_16_32MB", "5": "ExtendedCHS", "6": "FAT16_32MBPlus", "7": "NTFS", "8": "AIX", "9": "AIXBootable", "10": "OS2BootManager", "11": "FAT32_CHS", "12": "FAT32_LBA", "14": "FAT16_LBA", "15": "ExtendedLBA", "16": "OPUS", "17": "HiddenFAT12", "18": "CompaqDiagnostics", "20": "HiddenFAT16_16_32MB", "22": "HiddenFAT16_32MBPlus", "23": "HiddenNTFS", "24": "ASTSmartSleep", "27": "HiddenFAT32_CHS", "28": "HiddenFAT32_LBA", "30": "HiddenFAT16_LBA", "36": "NEC_DOS", "39": "WindowsRecovery", "57": "Plan9", "60": "PowerQuest", "64": "Venix286", "65": "PPC_PReP_Boot", "66": "SFS", "77": "QNX4_x", "78": "QNX4_x_2ndPart", "79": "QNX4_x_3rdPart", "80": "OnTrackDM", "81": "OnTrackDM6Aux1", "82": "CP_M", "83": "OnTrackDM6Aux3", "84": "OnTrackDM6", "85": "EZDrive", "86": "GoldenBow", "92": "PriamEDisk", "97": "SpeedStor", "99": "GNU_HURD", "100": "NovellNetware286", "101": "NovellNetware386", "112": "DiskSecureMultiBoot", "117": "PC_IX", "120": "XOSL", "128": "OldMinix", "129": "LinuxMinix", "130": "LinuxSwap", "131": "Linux", "132": "OS2HiddenCDrive", "133": "LinuxExtended", "134": "NTFSVolumeSet", "135": "NTFSVolumeSet2", "142": "LinuxLVM", "147": "Amoeba", "148": "AmoebaBBT", "159": "BSD_OS", "160": "IBMThinkpadHibernation", "165": "FreeBSD", "166": "OpenBSD", "167": "NeXTSTEP", "168": "MacOSX", "169": "NetBSD", "183": "BSDIFS", "184": "BSDISwap", "187": "BootWizardHidden", "193": "DRDOSFAT12", "196": "DRDOSFAT16", "198": "DRDOSFAT16B", "199": "Syrinx", "218": "NonFSData", "219": "CP_M_CTOS", "222": "DellUtility", "223": "BootIt", "225": "DOSAccess", "227": "DOSRO", "228": "SpeedStor2", "235": "BeOS", "238": "GPTProtective", "239": "EFI_System", "240": "LinuxPA_RISC", "241": "SpeedStor3", "242": "DOSSecondary", "253": "LinuxRAID", "254": "LANstep", "255": "Unknown" } }),
  record("chsLastSectorAddress", CHS),
  u32("lbaFirstSectorAddress", {  }),
  u32("numSectors", {  }),
]);

const MasterBootRecord = struct("MasterBootRecord", [
  bytes("bootstrapCodeArea1", { size: 218 }),
  pad(2),
  u8("originalPhysicalDrive", {  }),
  record("diskTimeStamp", DiskTimeStamp),
  bytes("bootstrapCodeArea2", { size: 216 }),
  u32("diskSignature", {  }),
  u16("diskProtection", { values: { "0": "None", "23130": "CopyProtected" } }),
  array("partitionEntries", PartitionEntry, 4),
  u16("bootSignature", {  }),
]);

export default definePack({
  name: "Drive File System",
  endian: "little",
  pointerSize: 8,
  types: [DiskTimeStamp, CHS, GPTAttributes, GPTEntry, PartitionEntry, MasterBootRecord],
  nodes: {
    "entry": structNode(MasterBootRecord, { label: "MasterBootRecord（入口）" }),
    "DiskTimeStamp": structNode(DiskTimeStamp, { label: "DiskTimeStamp" }),
    "CHS": structNode(CHS, { label: "CHS" }),
    "GPTAttributes": structNode(GPTAttributes, { label: "GPTAttributes" }),
    "GPTEntry": structNode(GPTEntry, { label: "GPTEntry" }),
    "PartitionEntry": structNode(PartitionEntry, { label: "PartitionEntry" }),
  },
});


/*
未移植项：
- GPTEntry.partitionType: 枚举底层 u128 按 16 字节原始值读取，数值映射不可用
- GPTEntry.partitionTypeGuid: 类型 type_GUID 不可移植
*/
