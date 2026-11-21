/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/Crashlvl.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Objects = struct("Objects", [
  u32("objCount", {  }),
]);

export default definePack({
  name: "Crash Bandicoot - Back in Time (fan game) User created level",
  endian: "little",
  pointerSize: 8,
  types: [Objects],
  nodes: {
    "entry": structNode(Objects, { label: "Objects（入口）" }),
  },
});

