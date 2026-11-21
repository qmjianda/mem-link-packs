/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/xex.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const block = struct("block", [
  u16("start", {  }),
]);

export default definePack({
  name: "Atari 8-bit binary format (.xex)",
  endian: "little",
  pointerSize: 8,
  types: [block],
  nodes: {
    "entry": structNode(block, { label: "block（入口）" }),
  },
});

