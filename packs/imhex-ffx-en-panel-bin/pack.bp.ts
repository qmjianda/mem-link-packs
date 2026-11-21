/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/en/panel.bin.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const SphereEffect = struct("SphereEffect", [
  bits("strength", 1, { at: 0, bit: 0, unit: 2, label: "strength" }),
  bits("defense", 1, { at: 0, bit: 1, unit: 2, label: "defense" }),
  bits("magic", 1, { at: 0, bit: 2, unit: 2, label: "magic" }),
  bits("magic_defense", 1, { at: 0, bit: 3, unit: 2, label: "magic_defense" }),
  bits("agility", 1, { at: 0, bit: 4, unit: 2, label: "agility" }),
  bits("luck", 1, { at: 0, bit: 5, unit: 2, label: "luck" }),
  bits("evasion", 1, { at: 0, bit: 6, unit: 2, label: "evasion" }),
  bits("accuracy", 1, { at: 0, bit: 7, unit: 2, label: "accuracy" }),
  bits("hp", 1, { at: 0, bit: 8, unit: 2, label: "hp" }),
  bits("mp", 1, { at: 0, bit: 9, unit: 2, label: "mp" }),
  bits("ability", 1, { at: 0, bit: 10, unit: 2, label: "ability" }),
  bits("lock", 1, { at: 0, bit: 15, unit: 2, label: "lock" }),
]);

export default definePack({
  name: "Panel.Bin",
  endian: "little",
  pointerSize: 8,
  types: [SphereEffect],
  nodes: {
    "entry": structNode(SphereEffect, { label: "SphereEffect（入口）" }),
  },
});


/*
未移植项：
- Block.name: 类型 String2 不可移植
*/
