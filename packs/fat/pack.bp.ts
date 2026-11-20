/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/fat
// 原始 pack：fat · FAT boot sector v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const Fat16 = struct("Fat16", [
  bytes("jump", { size: 3, label: "a short jump over the BPB to the boot code" }),
  str("oemName", { size: 8, label: "formatting system; MSDOS5.0 or mkfs.fat on Linux" }),
  u16("bytesPerSector", { endian: "little", label: "512 on essentially everything" }),
  u8("sectorsPerCluster", { endian: "little", label: "cluster size, a power of two" }),
  u16("reservedSectors", { endian: "little", label: "sectors before the first allocation table, this one included" }),
  u8("numberOfFats", { endian: "little", label: "copies of the allocation table, normally 2" }),
  u16("rootEntries", { endian: "little", label: "entries in the fixed-size root directory" }),
  u16("totalSectors16", { endian: "little", label: "sectors on the volume, 0 when it needs 32 bits" }),
  u8("mediaDescriptor", { values: { "240": "Floppy144M", "248": "FixedDisk", "249": "Floppy720K", "250": "Floppy320K", "251": "Floppy640K", "252": "Floppy180K", "253": "Floppy360K", "254": "Floppy160K", "255": "Floppy320KAlt" }, label: "media type, echoed in the first FAT entry" }),
  u16("sectorsPerFat", { endian: "little", label: "sectors in one allocation table" }),
  u16("sectorsPerTrack", { endian: "little", label: "disk geometry, for the BIOS" }),
  u16("numberOfHeads", { endian: "little", label: "disk geometry, for the BIOS" }),
  u32("hiddenSectors", { endian: "little", label: "sectors before this partition on the disk" }),
  u32("totalSectors32", { endian: "little", label: "sectors on the volume, when it does not fit in 16 bits" }),
  u8("driveNumber", { endian: "little", label: "BIOS drive: 0x00 floppy, 0x80 hard disk" }),
  u8("reserved", { endian: "little", label: "reused by Windows NT as a dirty flag" }),
  u8("bootSignature", { endian: "little", label: "0x29 when the three fields below are present" }),
  u32("volumeSerial", { endian: "little", label: "serial number, generated at format time" }),
  str("volumeLabel", { size: 11, label: "volume label, space padded; also stored in the root directory" }),
  str("fileSystemType", { size: 8, label: "FAT12 or FAT16, space padded; advisory only" }),
  bytes("bootCode", { size: 448, label: "the boot code the jump above lands in" }),
  u16("endMarker", { endian: "little", label: "0xAA55, the sector signature" }),
]);

export default definePack({
  name: "FAT16",
  endian: "little",
  pointerSize: 4,
  types: [Fat16],
  nodes: {
    "entry": structNode(Fat16, { label: "Fat16（入口）" }),
  },
});

