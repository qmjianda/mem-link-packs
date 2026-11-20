/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/vmdk
// 原始 pack：vmdk · VMDK sparse disk v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 10 项（见文件末尾）
const VmdkFirstTable = struct("VmdkFirstTable", [
  u32("sector", { endian: "little", label: "sector of the first grain table" }),
]);

const VmdkFlags = struct("VmdkFlags", [
  bits("validNewlineTest", 1, { at: 0, bit: 0, unit: 4, label: "validNewlineTest" }),
  bits("redundantGrainTable", 1, { at: 0, bit: 1, unit: 4, label: "redundantGrainTable" }),
  bits("zeroedGrainGte", 1, { at: 0, bit: 2, unit: 4, label: "zeroedGrainGte" }),
  bits("compressedGrains", 1, { at: 0, bit: 16, unit: 4, label: "compressedGrains" }),
  bits("markers", 1, { at: 0, bit: 17, unit: 4, label: "markers" }),
]);

const Vmdk = struct("Vmdk", [
  str("magic", { size: 4, label: "KDMV" }),
  u32("version", { endian: "little", label: "1, or 2/3 for disks with newer features" }),
  record("flags", VmdkFlags),
  u64("capacity", { endian: "little", label: "virtual disk size in sectors" }),
  u64("grainSize", { endian: "little", label: "sectors per grain, 128 (64 KiB) by default" }),
  u64("descriptorOffset", { endian: "little", label: "sector of the embedded descriptor, 0 if none" }),
  u64("descriptorSize", { endian: "little", label: "sectors reserved for the descriptor" }),
  u32("numGtesPerGt", { endian: "little", label: "entries per grain table, 512" }),
  u64("rgdOffset", { endian: "little", label: "sector of the redundant grain directory" }),
  u64("gdOffset", { endian: "little", label: "sector of the grain directory" }),
  u64("overhead", { endian: "little", label: "sectors before the first grain: header, descriptor and tables" }),
  u8("uncleanShutdown", { endian: "little", label: "1 if the disk was not closed cleanly" }),
  char("singleEndLineChar", { endian: "little", label: "newline, to catch text-mode corruption" }),
  char("nonEndLineChar", { endian: "little", label: "space" }),
  char("doubleEndLineChar1", { endian: "little", label: "carriage return" }),
  char("doubleEndLineChar2", { endian: "little", label: "newline" }),
  u16("compressAlgorithm", { values: { "0": "None", "1": "Deflate" } }),
  bytes("pad", { size: 433 }),
]);

export default definePack({
  name: "VMDK",
  endian: "little",
  pointerSize: 4,
  types: [VmdkFirstTable, VmdkFlags, Vmdk],
  nodes: {
    "entry": structNode(Vmdk, { label: "Vmdk（入口）" }),
    "VmdkFirstTable": structNode(VmdkFirstTable, { label: "VmdkFirstTable" }),
    "flags_VmdkFlags": structNode(VmdkFlags, { label: "位域 VmdkFlags" }),
  },
});


/*
未移植项：
- VmdkFirstTable.start: computed 字段未移植
- VmdkFirstTable.table: 指针字段（at …）未移植
- Vmdk.descriptorStart: computed 字段未移植
- Vmdk.descriptorBytes: computed 字段未移植
- Vmdk.descriptor: 指针字段（at …）未移植
- Vmdk.grainsPerTable: computed 字段未移植
- Vmdk.gdEntries: computed 字段未移植
- Vmdk.gdStart: computed 字段未移植
- Vmdk.grainDirectory: 指针字段（at …）未移植
- Vmdk.firstGrainTable: 指针字段（at …）未移植
*/
