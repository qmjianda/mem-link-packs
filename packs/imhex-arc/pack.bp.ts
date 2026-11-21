/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/arc.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Table = struct("Table", [
  u16("nameSize", {  }),
]);

const ARC = struct("ARC", [
  u32("count", {  }),
]);

export default definePack({
  name: "Minecraft LCE ARC File",
  endian: "big",
  pointerSize: 8,
  types: [Table, ARC],
  nodes: {
    "entry": structNode(ARC, { label: "ARC（入口）" }),
    "Table": structNode(Table, { label: "Table" }),
  },
});

