/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/en/sphere.bin.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const NodeTypes = struct("NodeTypes", [
  bits("Strength", 1, { at: 0, bit: 0, unit: 2, label: "Strength" }),
  bits("Defense", 1, { at: 0, bit: 1, unit: 2, label: "Defense" }),
  bits("Magic", 1, { at: 0, bit: 2, unit: 2, label: "Magic" }),
  bits("MagicDefense", 1, { at: 0, bit: 3, unit: 2, label: "MagicDefense" }),
  bits("Agility", 1, { at: 0, bit: 4, unit: 2, label: "Agility" }),
  bits("Luck", 1, { at: 0, bit: 5, unit: 2, label: "Luck" }),
  bits("Evasion", 1, { at: 0, bit: 6, unit: 2, label: "Evasion" }),
  bits("Accuracy", 1, { at: 0, bit: 7, unit: 2, label: "Accuracy" }),
  bits("Hp", 1, { at: 0, bit: 8, unit: 2, label: "Hp" }),
  bits("Mp", 1, { at: 0, bit: 9, unit: 2, label: "Mp" }),
  bits("Ability", 1, { at: 0, bit: 10, unit: 2, label: "Ability" }),
]);

export default definePack({
  name: "Sphere.Bin",
  endian: "little",
  pointerSize: 8,
  types: [NodeTypes],
  nodes: {
    "entry": structNode(NodeTypes, { label: "NodeTypes（入口）" }),
  },
});


/*
未移植项：
- Sphere.description: 类型 String2 不可移植
*/
