/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/macho-fat
// 原始 pack：macho-fat · Mach-O universal binary v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 2 个动态辅助节点
const FatArch = struct("FatArch", [
  i32("cputype", { values: { "1": "Vax", "6": "Mc680x0", "7": "X86", "16777223": "X86_64", "10": "Mc98000", "11": "Hppa", "12": "Arm", "16777228": "Arm64", "33554444": "Arm64_32", "13": "Mc88000", "14": "Sparc", "15": "I860", "18": "PowerPC", "16777234": "PowerPC64" }, label: "CPU family of this slice" }),
  u32("cpusubtype", { endian: "big", label: "CPU subtype (bit 31 = lib64; arm64e = 2, x86_64h = 8)" }),
  u32("offset", { endian: "big", label: "file offset of the slice's Mach-O image" }),
  u32("size", { endian: "big", label: "slice size in bytes" }),
  u32("align", { endian: "big", label: "slice alignment as a power of two (14 = 16 KB)" }),
]);

const FatHeader = struct("FatHeader", [
  u32("magic", { endian: "big", label: "0xCAFEBABE" }),
  u32("nfatArch", { endian: "big", label: "number of architecture slices" }),
]);

export default definePack({
  name: "Universal binary (3 slices)",
  endian: "big",
  pointerSize: 4,
  types: [FatArch, FatHeader],
  nodes: {
    "entry": structNode(FatHeader, { label: "FatHeader（入口）" }),
    "FatArch": structNode(FatArch, { label: "FatArch" }),
    "ptr_FatArch_sliceMagic": calcNode({
      label: "FatArch.sliceMagic（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "offset": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["offset"] ?? 0) }),
    }),
    "array_FatHeader_archs": arrayNode(FatArch, {
      label: "FatHeader.archs（动态数组）",
      description: "count 来自 FatHeader.nfatArch；address 指向数组首元素",
    }),
  },
});

