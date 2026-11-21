/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fs.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
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

const fat32_FSInfo = struct("fat32_FSInfo", [
  u32("leadSignature", {  }),
  pad(480),
  u32("structSignature", {  }),
  u32("freeClusterCount", {  }),
  u32("nextFreeCluster", {  }),
  pad(12),
  u32("trailSignature", {  }),
]);

const fat32_SequenceNumber = struct("fat32_SequenceNumber", [
  bits("lastLogical", 1, { at: 0, bit: 1, unit: 1, label: "lastLogical" }),
  bits("number", 5, { at: 0, bit: 3, unit: 1, label: "number" }),
]);

const fat32_Attributes = struct("fat32_Attributes", [
  bits("readOnly", 1, { at: 0, bit: 0, unit: 1, label: "readOnly" }),
  bits("hidden", 1, { at: 0, bit: 1, unit: 1, label: "hidden" }),
  bits("systemFile", 1, { at: 0, bit: 2, unit: 1, label: "systemFile" }),
  bits("volumeLabel", 1, { at: 0, bit: 3, unit: 1, label: "volumeLabel" }),
  bits("subdirectory", 1, { at: 0, bit: 4, unit: 1, label: "subdirectory" }),
  bits("archive", 1, { at: 0, bit: 5, unit: 1, label: "archive" }),
]);

const fat32_DirEntry = struct("fat32_DirEntry", [
  str("fileName", { size: 8 }),
  str("extension", { size: 3 }),
]);

const fat32_Partition = struct("fat32_Partition", [
  bytes("jmpCode", { size: 3 }),
  str("oemName", { size: 8 }),
  u16("bytesPerSector", {  }),
  u8("sectorsPerCluster", {  }),
  u16("reservedAreaSize", {  }),
  u8("numFats", {  }),
  u16("rootEntryCount", {  }),
  u16("numSectors", {  }),
  u8("mediaType", {  }),
  u16("fatSize", {  }),
  u16("sectorsPerTrack", {  }),
  u16("numHeads", {  }),
  u32("numHiddenSectors", {  }),
  u32("numFsSectors", {  }),
  u32("numFatSectors", {  }),
  u16("extFlags", {  }),
  u16("fsVersion", {  }),
  u32("rootCluster", {  }),
  u16("fsInfoSector", {  }),
  u16("backupBootSector", {  }),
  pad(12),
  u8("driveNumber", {  }),
  pad(1),
  u8("bootSignature", {  }),
  u32("volumeID", {  }),
  str("volumeLabel", { size: 11 }),
  str("fsType", { size: 8 }),
  bytes("bootstrapCode", { size: 420 }),
  u16("signature", {  }),
]);

const PartitionEntry = struct("PartitionEntry", [
  u8("status", { values: { "0": "None", "128": "Active" } }),
  record("chsFirstSectorAddress", CHS),
  u8("type", { values: { "0": "EmptyPartitionEntry", "11": "FAT32_CHS", "12": "FAT32_LBA" } }),
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
  types: [DiskTimeStamp, CHS, fat32_FSInfo, fat32_SequenceNumber, fat32_Attributes, fat32_DirEntry, fat32_Partition, PartitionEntry, MasterBootRecord],
  nodes: {
    "entry": structNode(MasterBootRecord, { label: "MasterBootRecord（入口）" }),
    "DiskTimeStamp": structNode(DiskTimeStamp, { label: "DiskTimeStamp" }),
    "CHS": structNode(CHS, { label: "CHS" }),
    "fat32_FSInfo": structNode(fat32_FSInfo, { label: "fat32_FSInfo" }),
    "fat32_SequenceNumber": structNode(fat32_SequenceNumber, { label: "fat32_SequenceNumber" }),
    "fat32_Attributes": structNode(fat32_Attributes, { label: "fat32_Attributes" }),
    "fat32_DirEntry": structNode(fat32_DirEntry, { label: "fat32_DirEntry" }),
    "fat32_Partition": structNode(fat32_Partition, { label: "fat32_Partition" }),
    "PartitionEntry": structNode(PartitionEntry, { label: "PartitionEntry" }),
  },
});


/*
未移植项：
- fat32_EntryStatusOrSequenceNumber.entryStatus: 类型 EntryStatus 不可移植
- fat32_DirEntry.attributes: 类型 Attributes 不可移植
- fat32_VFATDirEntry.entryStatusOrSequenceNumber: 类型 EntryStatusOrSequenceNumber 不可移植
*/
