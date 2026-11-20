/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/gzip
// 原始 pack：gzip · gzip compressed v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
const GzipFlags = struct("GzipFlags", [
  bits("text", 1, { at: 0, bit: 0, unit: 1, label: "text" }),
  bits("hcrc", 1, { at: 0, bit: 1, unit: 1, label: "hcrc" }),
  bits("extra", 1, { at: 0, bit: 2, unit: 1, label: "extra" }),
  bits("name", 1, { at: 0, bit: 3, unit: 1, label: "name" }),
  bits("comment", 1, { at: 0, bit: 4, unit: 1, label: "comment" }),
]);

const Gzip = struct("Gzip", [
  bytes("magic", { size: 2, label: "1F 8B" }),
  u8("method", { endian: "little", label: "compression method; 8 = deflate, the only one defined" }),
  record("flags", GzipFlags, { label: "which optional fields follow the fixed header" }),
  u32("mtime", { endian: "little", label: "modification time of the original file (unix), 0 if unset" }),
  u8("extraFlags", { endian: "little", label: "2 = compressed with the best algorithm, 4 = with the fastest" }),
  u8("os", { values: { "0": "Fat", "1": "Amiga", "2": "Vms", "3": "Unix", "4": "VmCms", "5": "AtariTos", "6": "Hpfs", "7": "Macintosh", "8": "ZSystem", "9": "CpM", "10": "Tops20", "11": "Ntfs", "12": "Qdos", "13": "AcornRiscOs", "255": "Unknown" }, label: "filesystem the file came from" }),
]);

export default definePack({
  name: "GZIP",
  endian: "little",
  pointerSize: 4,
  types: [GzipFlags, Gzip],
  nodes: {
    "entry": structNode(Gzip, { label: "Gzip（入口）" }),
    "flags_GzipFlags": structNode(GzipFlags, { label: "位域 GzipFlags" }),
  },
});


/*
未移植项：
- Gzip.extraLen: 条件字段未移植，后续布局在此停止
*/
