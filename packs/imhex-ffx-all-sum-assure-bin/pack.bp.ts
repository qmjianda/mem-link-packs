/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/all/sum_assure.bin.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const AeonStats = struct("AeonStats", [
  u16("hp", {  }),
  u16("mp", {  }),
  u8("strength", {  }),
  u8("defense", {  }),
  u8("magic", {  }),
  u8("magic_defense", {  }),
  u8("accuracy", {  }),
  u8("evasion", {  }),
  u8("agility", {  }),
  u8("luck", {  }),
]);

export default definePack({
  name: "Sum Assure.Bin",
  endian: "little",
  pointerSize: 8,
  types: [AeonStats],
  nodes: {
    "entry": structNode(AeonStats, { label: "AeonStats（入口）" }),
  },
});

