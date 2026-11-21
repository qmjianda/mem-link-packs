/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/a3/a3_texheaders.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const BGRA8 = struct("BGRA8", [
  u8("b", {  }),
  u8("g", {  }),
  u8("r", {  }),
  u8("a", {  }),
]);

const RGBAfloat = struct("RGBAfloat", [
  f32("r", {  }),
  f32("g", {  }),
  f32("b", {  }),
  f32("a", {  }),
]);

const Mipmap = struct("Mipmap", [
  u16("width", {  }),
  u16("height", {  }),
  pad(2),
  u8("format", { values: { "0": "INDEXED", "1": "GRAY", "2": "RGB565", "3": "RGBA5551", "4": "RGBA4444", "5": "RGBA8888", "6": "DXT1", "7": "DXT2", "8": "DXT3", "9": "DXT4", "10": "DXT5" } }),
  pad(1),
  u32("offset", {  }),
]);

const Texture = struct("Texture", [
  u32("count_color_pallets", {  }),
  u32("pallet_pointer", {  }),
  record("average_color_float", RGBAfloat),
  record("average_color", BGRA8),
  record("max_color", BGRA8),
  u32("clamp_flags", {  }),
  u32("transparency", {  }),
  bool("maxcolor_defined", {  }),
  bool("alpha_interpolated", {  }),
  bool("alpha_binary", {  }),
  bool("non_opaque", {  }),
  u32("count_mipmaps", {  }),
  u8("format", { values: { "0": "INDEXED", "1": "GRAY", "2": "RGB565", "3": "RGBA5551", "4": "RGBA4444", "5": "RGBA8888", "6": "DXT1", "7": "DXT2", "8": "DXT3", "9": "DXT4", "10": "DXT5" } }),
  pad(3),
  bool("little_endian", {  }),
  bool("is_paa", {  }),
]);

const TexHeaders = struct("TexHeaders", [
  str("signature", { size: 4 }),
  u32("version", {  }),
  u32("count_textures", {  }),
]);

export default definePack({
  name: "Arma 3 texture index file format",
  endian: "little",
  pointerSize: 8,
  types: [BGRA8, RGBAfloat, Mipmap, Texture, TexHeaders],
  nodes: {
    "entry": structNode(TexHeaders, { label: "TexHeaders（入口）" }),
    "BGRA8": structNode(BGRA8, { label: "BGRA8" }),
    "RGBAfloat": structNode(RGBAfloat, { label: "RGBAfloat" }),
    "Mipmap": structNode(Mipmap, { label: "Mipmap" }),
    "Texture": structNode(Texture, { label: "Texture" }),
  },
});


/*
未移植项：
- Texture.path: 类型 std_string_NullString 不可移植
*/
