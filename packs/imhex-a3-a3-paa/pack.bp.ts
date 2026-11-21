/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/a3/a3_paa.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Tagg = struct("Tagg", [
  str("signature", { size: 8 }),
  u32("length", {  }),
]);

const Palette = struct("Palette", [
  u16("length", {  }),
]);

const Mipmap = struct("Mipmap", [
  u16("width_and_lzo", {  }),
  u16("height", {  }),
]);

const PAA = struct("PAA", [
  u16("format", { values: { "65281": "DXT1", "65282": "DXT2", "65283": "DXT3", "65284": "DXT4", "65285": "DXT5", "17476": "RGBA4", "5461": "RGBA5", "34952": "RGBA8", "32896": "GRAY" } }),
]);

export default definePack({
  name: "Arma 3 PAA image format",
  endian: "little",
  pointerSize: 8,
  types: [Tagg, Palette, Mipmap, PAA],
  nodes: {
    "entry": structNode(PAA, { label: "PAA（入口）" }),
    "Tagg": structNode(Tagg, { label: "Tagg" }),
    "Palette": structNode(Palette, { label: "Palette" }),
    "Mipmap": structNode(Mipmap, { label: "Mipmap" }),
  },
});

