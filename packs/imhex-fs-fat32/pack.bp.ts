/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fs/fat32.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const FSInfo = struct("FSInfo", [
  u32("leadSignature", {  }),
  pad(480),
  u32("structSignature", {  }),
  u32("freeClusterCount", {  }),
  u32("nextFreeCluster", {  }),
  pad(12),
  u32("trailSignature", {  }),
]);

const SequenceNumber = struct("SequenceNumber", [
  bits("lastLogical", 1, { at: 0, bit: 1, unit: 1, label: "lastLogical" }),
  bits("number", 5, { at: 0, bit: 3, unit: 1, label: "number" }),
]);

const EntryStatusOrSequenceNumber = union("EntryStatusOrSequenceNumber", [
  u8("entryStatus", { values: { "0": "Regular", "46": "DotEntry", "229": "DeletedEntry" } }),
  record("sequenceNumber", SequenceNumber),
]);

const Attributes = struct("Attributes", [
  bits("readOnly", 1, { at: 0, bit: 0, unit: 1, label: "readOnly" }),
  bits("hidden", 1, { at: 0, bit: 1, unit: 1, label: "hidden" }),
  bits("systemFile", 1, { at: 0, bit: 2, unit: 1, label: "systemFile" }),
  bits("volumeLabel", 1, { at: 0, bit: 3, unit: 1, label: "volumeLabel" }),
  bits("subdirectory", 1, { at: 0, bit: 4, unit: 1, label: "subdirectory" }),
  bits("archive", 1, { at: 0, bit: 5, unit: 1, label: "archive" }),
]);

const DirEntry = struct("DirEntry", [
  str("fileName", { size: 8 }),
  str("extension", { size: 3 }),
  record("attributes", Attributes),
  bytes("reserved", { size: 10 }),
  u16("time", {  }),
  u16("date", {  }),
  u16("startingCluster", {  }),
  u32("fileSize", {  }),
]);

const VFATDirEntry = struct("VFATDirEntry", [
  record("entryStatusOrSequenceNumber", EntryStatusOrSequenceNumber),
]);

const FAT32 = struct("FAT32", [
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

export default definePack({
  name: "Fat32",
  endian: "little",
  pointerSize: 8,
  types: [FSInfo, SequenceNumber, EntryStatusOrSequenceNumber, Attributes, DirEntry, VFATDirEntry, FAT32],
  nodes: {
    "entry": structNode(FAT32, { label: "FAT32（入口）" }),
    "FSInfo": structNode(FSInfo, { label: "FSInfo" }),
    "SequenceNumber": structNode(SequenceNumber, { label: "SequenceNumber" }),
    "EntryStatusOrSequenceNumber": structNode(EntryStatusOrSequenceNumber, { label: "EntryStatusOrSequenceNumber" }),
    "Attributes": structNode(Attributes, { label: "Attributes" }),
    "DirEntry": structNode(DirEntry, { label: "DirEntry" }),
    "VFATDirEntry": structNode(VFATDirEntry, { label: "VFATDirEntry" }),
  },
});


/*
未移植项：
- VFATDirEntry.name1: 类型 char16 不可移植
*/
