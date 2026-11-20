/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/macho
// 原始 pack：macho · Mach-O executable v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const MachHeader64 = struct("MachHeader64", [
  u32("magic", { endian: "little", label: "0xFEEDFACF for a 64-bit Mach-O" }),
  u32("cpuType", { values: { "7": "X86", "16777223": "X86_64", "12": "Arm", "16777228": "Arm64", "18": "PowerPC" }, label: "target CPU type" }),
  u32("cpuSubtype", { endian: "little", label: "target CPU subtype" }),
  u32("fileType", { values: { "1": "Object", "2": "Execute", "6": "Dylib", "7": "Dylinker", "8": "Bundle" }, label: "type of Mach-O file" }),
  u32("numCmds", { endian: "little", label: "number of load commands" }),
  u32("sizeOfCmds", { endian: "little", label: "total size of all load commands" }),
  u32("flags", { endian: "little", label: "flags" }),
  u32("reserved", { endian: "little", label: "reserved" }),
]);

export default definePack({
  name: "Mach-O 64",
  endian: "little",
  pointerSize: 4,
  types: [MachHeader64],
  nodes: {
    "entry": structNode(MachHeader64, { label: "MachHeader64（入口）" }),
  },
});

