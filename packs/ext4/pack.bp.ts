/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/ext4
// 原始 pack：ext4 · ext2/3/4 superblock v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const Ext4FeatureCompat = struct("Ext4FeatureCompat", [
  bits("dirPrealloc", 1, { at: 0, bit: 0, unit: 4, label: "dirPrealloc" }),
  bits("imagicInodes", 1, { at: 0, bit: 1, unit: 4, label: "imagicInodes" }),
  bits("hasJournal", 1, { at: 0, bit: 2, unit: 4, label: "hasJournal" }),
  bits("extAttr", 1, { at: 0, bit: 3, unit: 4, label: "extAttr" }),
  bits("resizeInode", 1, { at: 0, bit: 4, unit: 4, label: "resizeInode" }),
  bits("dirIndex", 1, { at: 0, bit: 5, unit: 4, label: "dirIndex" }),
  bits("sparseSuper2", 1, { at: 0, bit: 9, unit: 4, label: "sparseSuper2" }),
]);

const Ext4FeatureIncompat = struct("Ext4FeatureIncompat", [
  bits("compression", 1, { at: 0, bit: 0, unit: 4, label: "compression" }),
  bits("filetype", 1, { at: 0, bit: 1, unit: 4, label: "filetype" }),
  bits("recover", 1, { at: 0, bit: 2, unit: 4, label: "recover" }),
  bits("journalDev", 1, { at: 0, bit: 3, unit: 4, label: "journalDev" }),
  bits("metaBg", 1, { at: 0, bit: 4, unit: 4, label: "metaBg" }),
  bits("extents", 1, { at: 0, bit: 6, unit: 4, label: "extents" }),
  bits("is64bit", 1, { at: 0, bit: 7, unit: 4, label: "is64bit" }),
  bits("mmp", 1, { at: 0, bit: 8, unit: 4, label: "mmp" }),
  bits("flexBg", 1, { at: 0, bit: 9, unit: 4, label: "flexBg" }),
  bits("eaInode", 1, { at: 0, bit: 10, unit: 4, label: "eaInode" }),
  bits("dirdata", 1, { at: 0, bit: 12, unit: 4, label: "dirdata" }),
  bits("csumSeed", 1, { at: 0, bit: 13, unit: 4, label: "csumSeed" }),
  bits("largedir", 1, { at: 0, bit: 14, unit: 4, label: "largedir" }),
  bits("inlineData", 1, { at: 0, bit: 15, unit: 4, label: "inlineData" }),
  bits("encrypt", 1, { at: 0, bit: 16, unit: 4, label: "encrypt" }),
]);

const Ext4FeatureRoCompat = struct("Ext4FeatureRoCompat", [
  bits("sparseSuper", 1, { at: 0, bit: 0, unit: 4, label: "sparseSuper" }),
  bits("largeFile", 1, { at: 0, bit: 1, unit: 4, label: "largeFile" }),
  bits("btreeDir", 1, { at: 0, bit: 2, unit: 4, label: "btreeDir" }),
  bits("hugeFile", 1, { at: 0, bit: 3, unit: 4, label: "hugeFile" }),
  bits("gdtCsum", 1, { at: 0, bit: 4, unit: 4, label: "gdtCsum" }),
  bits("dirNlink", 1, { at: 0, bit: 5, unit: 4, label: "dirNlink" }),
  bits("extraIsize", 1, { at: 0, bit: 6, unit: 4, label: "extraIsize" }),
  bits("quota", 1, { at: 0, bit: 8, unit: 4, label: "quota" }),
  bits("bigalloc", 1, { at: 0, bit: 9, unit: 4, label: "bigalloc" }),
  bits("metadataCsum", 1, { at: 0, bit: 10, unit: 4, label: "metadataCsum" }),
  bits("readonly", 1, { at: 0, bit: 13, unit: 4, label: "readonly" }),
  bits("project", 1, { at: 0, bit: 14, unit: 4, label: "project" }),
  bits("verity", 1, { at: 0, bit: 15, unit: 4, label: "verity" }),
]);

const Ext4Superblock = struct("Ext4Superblock", [
  u32("inodesCount", { endian: "little", label: "total inodes" }),
  u32("blocksCountLo", { endian: "little", label: "total blocks, low 32 bits" }),
  u32("reservedBlocksLo", { endian: "little", label: "blocks reserved for the superuser" }),
  u32("freeBlocksLo", { endian: "little", label: "free blocks, low 32 bits" }),
  u32("freeInodesCount", { endian: "little", label: "free inodes" }),
  u32("firstDataBlock", { endian: "little", label: "first data block (1 on 1 KiB blocks, else 0)" }),
  u32("logBlockSize", { endian: "little", label: "block size is 1024 shifted left by this" }),
  u32("logClusterSize", { endian: "little", label: "cluster size is 1024 shifted left by this" }),
  u32("blocksPerGroup", { endian: "little", label: "blocks per block group" }),
  u32("clustersPerGroup", { endian: "little", label: "clusters per block group" }),
  u32("inodesPerGroup", { endian: "little", label: "inodes per block group" }),
  u32("mountTime", { endian: "little", label: "last mount time (unix)" }),
  u32("writeTime", { endian: "little", label: "last write time (unix)" }),
  u16("mountCount", { endian: "little", label: "mounts since the last check" }),
  u16("maxMountCount", { endian: "little", label: "mounts allowed before a check is forced" }),
  u16("magic", { endian: "little", label: "0xEF53" }),
  u16("state", { values: { "1": "Clean", "2": "HasErrors", "4": "OrphansRecovering" }, label: "was the filesystem cleanly unmounted" }),
  u16("errors", { values: { "1": "Continue", "2": "RemountReadOnly", "3": "Panic" }, label: "what to do when an error is found" }),
  u16("minorRevLevel", { endian: "little", label: "minor revision" }),
  u32("lastCheck", { endian: "little", label: "time of the last check (unix)" }),
  u32("checkInterval", { endian: "little", label: "max seconds between checks" }),
  u32("creatorOs", { values: { "0": "Linux", "1": "Hurd", "2": "Masix", "3": "FreeBsd", "4": "Lites" }, label: "OS that created the filesystem" }),
  u32("revLevel", { endian: "little", label: "0 = original, 1 = dynamic inode sizes" }),
  u16("defaultResUid", { endian: "little", label: "default uid for reserved blocks" }),
  u16("defaultResGid", { endian: "little", label: "default gid for reserved blocks" }),
  u32("firstInode", { endian: "little", label: "first non-reserved inode" }),
  u16("inodeSize", { endian: "little", label: "size of an inode in bytes" }),
  u16("blockGroupNr", { endian: "little", label: "block group hosting this superblock copy" }),
  record("featureCompat", Ext4FeatureCompat, { label: "optional features" }),
  record("featureIncompat", Ext4FeatureIncompat, { label: "features required to mount" }),
  record("featureRoCompat", Ext4FeatureRoCompat, { label: "features required to mount writable" }),
  bytes("uuid", { size: 16, label: "filesystem UUID" }),
  str("volumeName", { size: 16, label: "volume label" }),
  str("lastMounted", { size: 64, label: "directory it was last mounted on" }),
]);

const Ext4 = struct("Ext4", [
  bytes("bootBlock", { size: 1024, label: "boot block: not part of the filesystem metadata" }),
  record("superblock", Ext4Superblock, { label: "the superblock, 1024 bytes into the volume" }),
]);

export default definePack({
  name: "EXT4",
  endian: "little",
  pointerSize: 4,
  types: [Ext4FeatureCompat, Ext4FeatureIncompat, Ext4FeatureRoCompat, Ext4Superblock, Ext4],
  nodes: {
    "entry": structNode(Ext4, { label: "Ext4（入口）" }),
    "Ext4Superblock": structNode(Ext4Superblock, { label: "Ext4Superblock" }),
    "flags_Ext4FeatureCompat": structNode(Ext4FeatureCompat, { label: "位域 Ext4FeatureCompat" }),
    "flags_Ext4FeatureIncompat": structNode(Ext4FeatureIncompat, { label: "位域 Ext4FeatureIncompat" }),
    "flags_Ext4FeatureRoCompat": structNode(Ext4FeatureRoCompat, { label: "位域 Ext4FeatureRoCompat" }),
  },
});

