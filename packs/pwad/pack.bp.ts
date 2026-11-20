/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/wad
// 原始 pack：wad · Doom WAD v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
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
  },
});


/*
未移植项：
- Wad.directory: 指针字段（at …）未移植
*/
