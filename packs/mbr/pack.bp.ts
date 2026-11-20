/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/mbr
// 原始 pack：mbr · MBR partition table v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const ChsAddress = struct("ChsAddress", [
  u8("head", { endian: "little", label: "head" }),
  u8("sector", { endian: "little", label: "sector in bits 0-5, cylinder high bits in 6-7" }),
  u8("cylinder", { endian: "little", label: "cylinder low 8 bits" }),
]);

const MbrPartition = struct("MbrPartition", [
  u8("status", { endian: "little", label: "0x80 = bootable, 0x00 = inactive" }),
  record("firstChs", ChsAddress, { label: "CHS address of the first sector" }),
  u8("type", { values: { "0": "Empty", "1": "Fat12", "4": "Fat16Small", "5": "Extended", "6": "Fat16", "7": "NtfsExfat", "11": "Fat32Chs", "12": "Fat32Lba", "14": "Fat16Lba", "130": "LinuxSwap", "131": "Linux", "142": "LinuxLvm", "238": "GptProtective", "239": "EfiSystem" }, label: "partition type" }),
  record("lastChs", ChsAddress, { label: "CHS address of the last sector" }),
  u32("firstLba", { endian: "little", label: "LBA of the first sector" }),
  u32("sectors", { endian: "little", label: "number of sectors in the partition" }),
]);

const Mbr = struct("Mbr", [
  bytes("bootstrap", { size: 446, label: "bootstrap code area" }),
  array("partitions", MbrPartition, 4, { label: "the four primary partition entries" }),
  u16("signature", { endian: "little", label: "0xAA55 boot signature" }),
]);

export default definePack({
  name: "MBR",
  endian: "little",
  pointerSize: 4,
  types: [ChsAddress, MbrPartition, Mbr],
  nodes: {
    "entry": structNode(Mbr, { label: "Mbr（入口）" }),
    "ChsAddress": structNode(ChsAddress, { label: "ChsAddress" }),
    "MbrPartition": structNode(MbrPartition, { label: "MbrPartition" }),
  },
});

