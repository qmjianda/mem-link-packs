/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/sfo.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const SfoEntries = struct("SfoEntries", [
  u16("nameOffset", {  }),
  u8("align", {  }),
  u8("type", { values: { "0": "PSF_TYPE_BIN", "2": "PSF_TYPE_STR", "4": "PSF_TYPE_VAL" } }),
  u32("size", {  }),
  u32("totalSize", {  }),
  u32("dataOffset", {  }),
]);

export default definePack({
  name: "PlayStation SFO",
  endian: "little",
  pointerSize: 8,
  types: [SfoEntries],
  nodes: {
    "entry": structNode(SfoEntries, { label: "SfoEntries（入口）" }),
  },
});

