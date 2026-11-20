/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/hfsplus
// 原始 pack：hfsplus · HFS+ volume header v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const HfsExtent = struct("HfsExtent", [
  u32("startBlock", { endian: "big", label: "first allocation block of the run" }),
  u32("blockCount", { endian: "big", label: "length of the run in allocation blocks" }),
]);

const HfsForkData = struct("HfsForkData", [
  u64("logicalSize", { endian: "big", label: "size of the fork in bytes" }),
  u32("clumpSize", { endian: "big", label: "bytes to grow this fork by when it needs more space" }),
  u32("totalBlocks", { endian: "big", label: "allocation blocks the fork occupies" }),
  array("extents", HfsExtent, 8, { label: "the first eight extents; the rest live in the extents overflow file" }),
]);

const HfsVolumeAttributes = struct("HfsVolumeAttributes", [
  bits("hardwareLock", 1, { at: 0, bit: 7, unit: 4, label: "hardwareLock" }),
  bits("unmounted", 1, { at: 0, bit: 8, unit: 4, label: "unmounted" }),
  bits("sparedBlocks", 1, { at: 0, bit: 9, unit: 4, label: "sparedBlocks" }),
  bits("noCacheRequired", 1, { at: 0, bit: 10, unit: 4, label: "noCacheRequired" }),
  bits("bootVolumeInconsistent", 1, { at: 0, bit: 11, unit: 4, label: "bootVolumeInconsistent" }),
  bits("catalogNodeIdsReused", 1, { at: 0, bit: 12, unit: 4, label: "catalogNodeIdsReused" }),
  bits("journaled", 1, { at: 0, bit: 13, unit: 4, label: "journaled" }),
  bits("softwareLock", 1, { at: 0, bit: 15, unit: 4, label: "softwareLock" }),
]);

const HfsPlus = struct("HfsPlus", [
  bytes("bootBlocks", { size: 1024, label: "two boot blocks, not part of the filesystem metadata" }),
  str("signature", { size: 2, label: "H+ for HFS+, HX for HFSX" }),
  u16("version", { endian: "big", label: "4 for HFS+, 5 for HFSX" }),
  record("attributes", HfsVolumeAttributes, { label: "volume flags" }),
  str("lastMountedVersion", { size: 4, label: "implementation that last mounted the volume: 10.0 for macOS, HFSJ when journaled, fsck for a repair" }),
  u32("journalInfoBlock", { endian: "big", label: "allocation block holding the journal info, when journaled" }),
  u32("createDate", { endian: "big", label: "volume creation time, seconds since 1904-01-01, UTC" }),
  u32("modifyDate", { endian: "big", label: "last modification, local time" }),
  u32("backupDate", { endian: "big", label: "last backup, local time" }),
  u32("checkedDate", { endian: "big", label: "last consistency check, local time" }),
  u32("fileCount", { endian: "big", label: "files on the volume, not counting the special files" }),
  u32("folderCount", { endian: "big", label: "folders, not counting the root" }),
  u32("blockSize", { endian: "big", label: "allocation block size in bytes; 4096 is usual" }),
  u32("totalBlocks", { endian: "big", label: "allocation blocks on the volume" }),
  u32("freeBlocks", { endian: "big", label: "unused allocation blocks" }),
  u32("nextAllocation", { endian: "big", label: "where to start looking for free space" }),
  u32("rsrcClumpSize", { endian: "big", label: "default clump size for resource forks" }),
  u32("dataClumpSize", { endian: "big", label: "default clump size for data forks" }),
  u32("nextCatalogId", { endian: "big", label: "next catalog node id to hand out" }),
  u32("writeCount", { endian: "big", label: "bumped every time the volume is mounted for writing" }),
  u64("encodingsBitmap", { endian: "big", label: "which text encodings the volume names use" }),
  array("finderInfo", "u32", 8, { label: "Finder information: blessed system folder and boot directory ids" }),
  record("allocationFile", HfsForkData, { label: "the allocation bitmap: one bit per allocation block" }),
  record("extentsFile", HfsForkData, { label: "the extents overflow file: extents beyond the eight inline ones" }),
  record("catalogFile", HfsForkData, { label: "the catalog: a B-tree of every file and folder record" }),
  record("attributesFile", HfsForkData, { label: "extended attributes, including compressed file data" }),
  record("startupFile", HfsForkData, { label: "boot loader data for systems that need it; usually empty" }),
]);

export default definePack({
  name: "HFS+",
  endian: "big",
  pointerSize: 4,
  types: [HfsExtent, HfsForkData, HfsVolumeAttributes, HfsPlus],
  nodes: {
    "entry": structNode(HfsPlus, { label: "HfsPlus（入口）" }),
    "HfsExtent": structNode(HfsExtent, { label: "HfsExtent" }),
    "HfsForkData": structNode(HfsForkData, { label: "HfsForkData" }),
    "flags_HfsVolumeAttributes": structNode(HfsVolumeAttributes, { label: "位域 HfsVolumeAttributes" }),
  },
});

