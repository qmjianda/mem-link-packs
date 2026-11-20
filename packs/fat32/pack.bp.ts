/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/fat
// 原始 pack：fat · FAT boot sector v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const Fat32 = struct("Fat32", [
  bytes("jump", { size: 3, label: "a short jump over the BPB to the boot code" }),
  str("oemName", { size: 8, label: "formatting system" }),
  u16("bytesPerSector", { endian: "little", label: "512 on essentially everything" }),
  u8("sectorsPerCluster", { endian: "little", label: "cluster size, a power of two" }),
  u16("reservedSectors", { endian: "little", label: "sectors before the first allocation table, usually 32" }),
  u8("numberOfFats", { endian: "little", label: "copies of the allocation table, normally 2" }),
  u16("rootEntries", { endian: "little", label: "always 0 on FAT32: the root is a cluster chain" }),
  u16("totalSectors16", { endian: "little", label: "always 0 on FAT32" }),
  u8("mediaDescriptor", { values: { "240": "Floppy144M", "248": "FixedDisk" }, label: "media type, echoed in the first FAT entry" }),
  u16("sectorsPerFat16", { endian: "little", label: "always 0 on FAT32; see sectorsPerFat32" }),
  u16("sectorsPerTrack", { endian: "little", label: "disk geometry, for the BIOS" }),
  u16("numberOfHeads", { endian: "little", label: "disk geometry, for the BIOS" }),
  u32("hiddenSectors", { endian: "little", label: "sectors before this partition on the disk" }),
  u32("totalSectors32", { endian: "little", label: "sectors on the volume" }),
  u32("sectorsPerFat32", { endian: "little", label: "sectors in one allocation table" }),
  u16("extFlags", { endian: "little", label: "bits 0-3 the active FAT, bit 7 set means only it is live" }),
  u16("fsVersion", { endian: "little", label: "0" }),
  u32("rootCluster", { endian: "little", label: "first cluster of the root directory, normally 2" }),
  u16("fsInfoSector", { endian: "little", label: "sector holding the FS information structure, normally 1" }),
  u16("backupBootSector", { endian: "little", label: "sector holding the backup boot sector, normally 6" }),
  bytes("reserved", { size: 12, label: "zero" }),
  u8("driveNumber", { endian: "little", label: "BIOS drive: 0x80 for a hard disk" }),
  u8("reserved2", { endian: "little", label: "reused by Windows NT as a dirty flag" }),
  u8("bootSignature", { endian: "little", label: "0x29 when the three fields below are present" }),
  u32("volumeSerial", { endian: "little", label: "serial number, generated at format time" }),
  str("volumeLabel", { size: 11, label: "volume label, space padded" }),
  str("fileSystemType", { size: 8, label: "FAT32 followed by three spaces; advisory only" }),
  bytes("bootCode", { size: 420, label: "the boot code the jump above lands in" }),
  u16("endMarker", { endian: "little", label: "0xAA55, the sector signature" }),
]);

export default definePack({
  name: "FAT32",
  endian: "little",
  pointerSize: 4,
  types: [Fat32],
  nodes: {
    "entry": structNode(Fat32, { label: "Fat32（入口）" }),
  },
});

