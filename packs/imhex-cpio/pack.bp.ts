/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/cpio.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const old_binary_Mode = struct("old_binary_Mode", [
  bits("x", 3, { at: 0, bit: 0, unit: 2, label: "x" }),
  bits("w", 3, { at: 0, bit: 3, unit: 2, label: "w" }),
  bits("r", 3, { at: 0, bit: 6, unit: 2, label: "r" }),
  bits("sticky", 1, { at: 0, bit: 9, unit: 2, label: "sticky" }),
  bits("sgid", 1, { at: 0, bit: 10, unit: 2, label: "sgid" }),
  bits("suid", 1, { at: 0, bit: 11, unit: 2, label: "suid" }),
  bits("file_type", 4, { at: 0, bit: 12, unit: 2, label: "file_type" }),
]);

export default definePack({
  name: "Old Binary CPIO",
  endian: "little",
  pointerSize: 8,
  types: [old_binary_Mode],
  nodes: {
    "entry": structNode(old_binary_Mode, { label: "old_binary_Mode（入口）" }),
  },
});


/*
未移植项：
- old_binary_Cpio.header: 类型 CpioHeader 不可移植
*/
