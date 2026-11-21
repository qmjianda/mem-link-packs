/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ico.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ICONDIR = struct("ICONDIR", [
  u16("reserved", {  }),
  u16("type", { values: { "1": "Icon", "2": "Cursor" } }),
  u16("num_images", {  }),
]);

const ICONDIRENTRY = struct("ICONDIRENTRY", [
  u8("width", {  }),
  u8("height", {  }),
  u8("num_colors", {  }),
  u8("reserved", {  }),
]);

export default definePack({
  name: "Windows Icon (.ico) or Cursor (.cur)",
  endian: "little",
  pointerSize: 8,
  types: [ICONDIR, ICONDIRENTRY],
  nodes: {
    "entry": structNode(ICONDIR, { label: "ICONDIR（入口）" }),
    "ICONDIRENTRY": structNode(ICONDIRENTRY, { label: "ICONDIRENTRY" }),
  },
});

