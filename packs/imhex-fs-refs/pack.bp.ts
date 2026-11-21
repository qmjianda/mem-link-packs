/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fs/refs.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const ReFS_Version = struct("ReFS_Version", [
  u8("Major", {  }),
  u8("Minor", {  }),
]);

const CheckPoint_REFS_Version = struct("CheckPoint_REFS_Version", [
  u16("Major", {  }),
  u16("Minor", {  }),
]);

const SELF_DESCRIPTOR = struct("SELF_DESCRIPTOR", [
  u64("LCN1", {  }),
  u64("LCN2", {  }),
  u64("LCN3", {  }),
  u64("LCN4", {  }),
]);

const META_HEADERS = struct("META_HEADERS", [
  u32("Signature", { values: { "1112560979": "SuperBlock", "1347110979": "CheckPoint", "725766989": "MSBPlus" } }),
  u32("unk", {  }),
  u32("zero", {  }),
  u32("volsig", {  }),
]);

const OFFSET_ENTRIES = struct("OFFSET_ENTRIES", [
  u16("offset", {  }),
  u16("unk", {  }),
]);

const ATTRIBUTE = struct("ATTRIBUTE", [
  u64("LCN1", {  }),
  u64("LCN2", {  }),
  u64("LCN3", {  }),
  u64("LCN4", {  }),
  u32("Unk1", {  }),
  u32("Unk2", {  }),
  u64("checksum", {  }),
  bytes("ZeroPadding", { size: 56 }),
]);

const INDEX_HEADER = struct("INDEX_HEADER", [
  u32("size", {  }),
  u32("dataendoff", {  }),
  u32("freebuff", {  }),
  u8("height", {  }),
  u8("ntype", { values: { "1": "InnerNode", "2": "RootNode", "3": "StreamNode" } }),
  u16("unused1", {  }),
  u32("keyindxoff", {  }),
  u32("keycount", {  }),
  u64("unused2", {  }),
  u32("end", {  }),
  u32("align", {  }),
]);

const INDEX_ENTRY_STRUCTURE = struct("INDEX_ENTRY_STRUCTURE", [
  u32("indxentlen", {  }),
  u16("keyoff", {  }),
  u16("keylen", {  }),
  u16("flag", { values: { "2": "RightMost", "4": "DeletedEntry", "64": "StreamIndexEntry" } }),
  u16("valoff", {  }),
  u16("vallen", {  }),
]);

const ROOT_NODE = struct("ROOT_NODE", [
  record("pagehdr", META_HEADERS),
  u32("rootsize", {  }),
  u16("fixed", {  }),
  u16("unk1", {  }),
  u16("unk2", {  }),
  u16("unk3", {  }),
  u16("schema", {  }),
  u16("unk4", {  }),
  u16("schemadup", {  }),
  u16("unk5", {  }),
  u16("unk6", {  }),
  u16("unk7", {  }),
  u64("noofextends", {  }),
  u64("noofrows", {  }),
]);

const GLOBALROOTNODE = struct("GLOBALROOTNODE", [
  u32("GlobalElemEntryOff", {  }),
]);

const CHECKPOINT = struct("CHECKPOINT", [
  record("CheckPointMetaHeader", META_HEADERS),
]);

const SUPERBLOCK = struct("SUPERBLOCK", [
  record("SuperBlockMetaHeader", META_HEADERS),
]);

const VOLUME_BOOT_RECORD = struct("VOLUME_BOOT_RECORD", [
  bytes("jmpInstruction", { size: 3 }),
  u64("FileSystem", { values: { "1397122386": "ReFS" } }),
  bytes("UnKnown", { size: 5 }),
  str("Identifier", { size: 4 }),
  u16("Length", {  }),
  u16("Checksum", {  }),
  u64("TotalNoOfSectors", {  }),
  u32("BytesPerSec", {  }),
  u32("SectorPerCluster", {  }),
  record("ReFSVersion", ReFS_Version),
  bytes("UnknownBuff", { size: 14 }),
  u64("SerialNo", {  }),
  u64("BytesPerContainer", {  }),
]);

export default definePack({
  name: "ReFS-File-System",
  endian: "little",
  pointerSize: 8,
  types: [ReFS_Version, CheckPoint_REFS_Version, SELF_DESCRIPTOR, META_HEADERS, OFFSET_ENTRIES, ATTRIBUTE, INDEX_HEADER, INDEX_ENTRY_STRUCTURE, ROOT_NODE, GLOBALROOTNODE, CHECKPOINT, SUPERBLOCK, VOLUME_BOOT_RECORD],
  nodes: {
    "entry": structNode(ReFS_Version, { label: "ReFS_Version（入口）" }),
    "CheckPoint_REFS_Version": structNode(CheckPoint_REFS_Version, { label: "CheckPoint_REFS_Version" }),
    "SELF_DESCRIPTOR": structNode(SELF_DESCRIPTOR, { label: "SELF_DESCRIPTOR" }),
    "META_HEADERS": structNode(META_HEADERS, { label: "META_HEADERS" }),
    "OFFSET_ENTRIES": structNode(OFFSET_ENTRIES, { label: "OFFSET_ENTRIES" }),
    "ATTRIBUTE": structNode(ATTRIBUTE, { label: "ATTRIBUTE" }),
    "INDEX_HEADER": structNode(INDEX_HEADER, { label: "INDEX_HEADER" }),
    "INDEX_ENTRY_STRUCTURE": structNode(INDEX_ENTRY_STRUCTURE, { label: "INDEX_ENTRY_STRUCTURE" }),
    "ROOT_NODE": structNode(ROOT_NODE, { label: "ROOT_NODE" }),
    "GLOBALROOTNODE": structNode(GLOBALROOTNODE, { label: "GLOBALROOTNODE" }),
    "CHECKPOINT": structNode(CHECKPOINT, { label: "CHECKPOINT" }),
    "SUPERBLOCK": structNode(SUPERBLOCK, { label: "SUPERBLOCK" }),
    "VOLUME_BOOT_RECORD": structNode(VOLUME_BOOT_RECORD, { label: "VOLUME_BOOT_RECORD" }),
  },
});


/*
未移植项：
- META_HEADERS.blockNo: 类型 u128 不可移植
- SUPERBLOCK.GUID: 类型 type_GUID 不可移植
*/
