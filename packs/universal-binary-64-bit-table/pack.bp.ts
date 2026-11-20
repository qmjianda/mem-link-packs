/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/macho-fat
// 原始 pack：macho-fat · Mach-O universal binary v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 2 项（见文件末尾）
const FatArch64 = struct("FatArch64", [
  i32("cputype", { values: { "1": "Vax", "6": "Mc680x0", "7": "X86", "16777223": "X86_64", "10": "Mc98000", "11": "Hppa", "12": "Arm", "16777228": "Arm64", "33554444": "Arm64_32", "13": "Mc88000", "14": "Sparc", "15": "I860", "18": "PowerPC", "16777234": "PowerPC64" }, label: "CPU family of this slice" }),
  u32("cpusubtype", { endian: "big", label: "CPU subtype (bit 31 = lib64; arm64e = 2, x86_64h = 8)" }),
  u64("offset", { endian: "big", label: "file offset of the slice's Mach-O image" }),
  u64("size", { endian: "big", label: "slice size in bytes" }),
  u32("align", { endian: "big", label: "slice alignment as a power of two (14 = 16 KB)" }),
  u32("reserved", { endian: "big" }),
]);

const FatHeader64 = struct("FatHeader64", [
  u32("magic", { endian: "big", label: "0xCAFEBABF" }),
  u32("nfatArch", { endian: "big", label: "number of architecture slices" }),
]);

export default definePack({
  name: "Universal binary (64-bit table)",
  endian: "big",
  pointerSize: 4,
  types: [FatArch64, FatHeader64],
  nodes: {
    "entry": structNode(FatHeader64, { label: "FatHeader64（入口）" }),
    "FatArch64": structNode(FatArch64, { label: "FatArch64" }),
  },
});


/*
未移植项：
- FatArch64.sliceMagic: 指针字段（at …）未移植
- FatHeader64.archs: 动态数组长度（field）未移植
*/
