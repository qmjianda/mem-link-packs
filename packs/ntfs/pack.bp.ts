/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/ntfs
// 原始 pack：ntfs · NTFS boot sector v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const Ntfs = struct("Ntfs", [
  bytes("jump", { size: 3, label: "EB 52 90: a jump to the boot code" }),
  str("oemId", { size: 8, label: "NTFS followed by four spaces" }),
  u16("bytesPerSector", { endian: "little", label: "512 on essentially everything" }),
  u8("sectorsPerCluster", { endian: "little", label: "cluster size, a power of two" }),
  u16("reservedSectors", { endian: "little", label: "0 on NTFS" }),
  bytes("unusedFats", { size: 3, label: "zero: where FAT keeps its table count" }),
  u16("unusedRootEntries", { endian: "little", label: "zero" }),
  u16("unusedTotalSectors", { endian: "little", label: "zero" }),
  u8("mediaDescriptor", { endian: "little", label: "0xF8 for a fixed disk" }),
  u16("unusedSectorsPerFat", { endian: "little", label: "zero" }),
  u16("sectorsPerTrack", { endian: "little", label: "disk geometry, for the BIOS" }),
  u16("numberOfHeads", { endian: "little", label: "disk geometry, for the BIOS" }),
  u32("hiddenSectors", { endian: "little", label: "sectors before this partition on the disk" }),
  u32("unusedTotalSectors32", { endian: "little", label: "zero" }),
  u32("unusedDriveNumber", { endian: "little", label: "usually 0x00800080" }),
  u64("totalSectors", { endian: "little", label: "sectors in the volume, one short of the partition" }),
  u64("mftCluster", { endian: "little", label: "first cluster of the master file table" }),
  u64("mftMirrorCluster", { endian: "little", label: "first cluster of the MFT mirror" }),
  i8("clustersPerFileRecord", { endian: "little", label: "positive: clusters per record; negative: 2^-n bytes" }),
  bytes("unused2", { size: 3, label: "zero" }),
  i8("clustersPerIndexBuffer", { endian: "little", label: "same encoding, for index allocation buffers" }),
  bytes("unused3", { size: 3, label: "zero" }),
  u64("volumeSerialNumber", { endian: "little", label: "64-bit volume serial, set at format time" }),
  u32("checksum", { endian: "little", label: "unused in practice, zero" }),
  bytes("bootCode", { size: 426, label: "the boot code the jump above lands in" }),
  u16("endMarker", { endian: "little", label: "0xAA55, the sector signature" }),
]);

export default definePack({
  name: "NTFS",
  endian: "little",
  pointerSize: 4,
  types: [Ntfs],
  nodes: {
    "entry": structNode(Ntfs, { label: "Ntfs（入口）" }),
  },
});

