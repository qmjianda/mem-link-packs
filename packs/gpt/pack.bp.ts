/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/gpt
// 原始 pack：gpt · GPT partition table v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const GptHeader = struct("GptHeader", [
  bytes("reservedMbr", { size: 512, label: "protective MBR at LBA 0" }),
  str("signature", { size: 8, label: "EFI PART" }),
  u32("revision", { endian: "little", label: "GPT revision (0x00010000)" }),
  u32("headerSize", { endian: "little", label: "header size in bytes (92)" }),
  u32("headerCrc32", { endian: "little", label: "CRC32 of this header" }),
  u32("reserved", { endian: "little", label: "reserved, must be 0" }),
  u64("currentLba", { endian: "little", label: "LBA of this header copy" }),
  u64("backupLba", { endian: "little", label: "LBA of the backup header" }),
  u64("firstUsable", { endian: "little", label: "first usable LBA for partitions" }),
  u64("lastUsable", { endian: "little", label: "last usable LBA for partitions" }),
  bytes("diskGuid", { size: 16, label: "disk GUID" }),
  u64("partEntryLba", { endian: "little", label: "starting LBA of the partition entry array" }),
  u32("numEntries", { endian: "little", label: "number of partition entries" }),
  u32("entrySize", { endian: "little", label: "size of each partition entry (128)" }),
  u32("entriesCrc32", { endian: "little", label: "CRC32 of the partition entry array" }),
]);

export default definePack({
  name: "GPT",
  endian: "little",
  pointerSize: 4,
  types: [GptHeader],
  nodes: {
    "entry": structNode(GptHeader, { label: "GptHeader（入口）" }),
  },
});

