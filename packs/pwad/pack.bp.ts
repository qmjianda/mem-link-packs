/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/wad
// 原始 pack：wad · Doom WAD v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 2 个动态辅助节点
const WadLump = struct("WadLump", [
  u32("filePos", { endian: "little", label: "file offset where this lump's data starts" }),
  u32("size", { endian: "little", label: "bytes of data; 0 for a marker lump" }),
  str("name", { size: 8, label: "lump name, uppercase ASCII, NUL-padded rather than terminated" }),
]);

const Wad = struct("Wad", [
  str("identification", { size: 4, label: "PWAD" }),
  u32("numLumps", { endian: "little", label: "number of lumps, and so of directory entries" }),
  u32("infoTableOfs", { endian: "little", label: "file offset of the directory, which sits after the lump data" }),
]);

export default definePack({
  name: "PWAD",
  endian: "little",
  pointerSize: 4,
  types: [WadLump, Wad],
  nodes: {
    "entry": structNode(Wad, { label: "Wad（入口）" }),
    "WadLump": structNode(WadLump, { label: "WadLump" }),
    "ptr_Wad_directory": calcNode({
      label: "Wad.directory（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "infoTableOfs": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["infoTableOfs"] ?? 0) }),
    }),
    "array_Wad_directory": arrayNode(WadLump, {
      label: "Wad.directory（动态数组）",
      description: "count 来自 Wad.numLumps；address 指向数组首元素",
    }),
  },
});

