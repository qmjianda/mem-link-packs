/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/GoldBox/GB_ITM-Base.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const CLASSRESTRICTION = struct("CLASSRESTRICTION", [
  bits("MagicUser", 1, { at: 0, bit: 0, unit: 1, label: "MagicUser" }),
  bits("Cleric", 1, { at: 0, bit: 1, unit: 1, label: "Cleric" }),
  bits("Thief", 1, { at: 0, bit: 2, unit: 1, label: "Thief" }),
  bits("Fighter", 1, { at: 0, bit: 3, unit: 1, label: "Fighter" }),
]);

const WEAPONFLAGARRAY = struct("WEAPONFLAGARRAY", [
  bits("LaunchArrow", 1, { at: 0, bit: 0, unit: 1, label: "LaunchArrow" }),
  bits("IsRanged", 1, { at: 0, bit: 1, unit: 1, label: "IsRanged" }),
  bits("STR_Bonus", 1, { at: 0, bit: 2, unit: 1, label: "STR_Bonus" }),
  bits("IsMultiFire", 1, { at: 0, bit: 3, unit: 1, label: "IsMultiFire" }),
  bits("IsThrown", 1, { at: 0, bit: 4, unit: 1, label: "IsThrown" }),
  bits("LaunchBolt", 1, { at: 0, bit: 7, unit: 1, label: "LaunchBolt" }),
]);

const ITEMBASE = struct("ITEMBASE", [
  u8("ItemType", { values: { "0": "Weapon", "1": "Shield", "2": "Armor", "3": "Hands", "4": "Head", "5": "BeltNeck", "6": "Robe", "7": "Cloak", "8": "Boots", "9": "Ring", "10": "Other", "11": "MUScroll", "12": "CLScroll", "74": "LeatherHolySymbol", "75": "BrassKey", "77": "Bracers", "78": "Wand", "80": "PotionOfGiantStrength", "81": "Unknown_81", "82": "EfreetiBottle", "83": "Unknown_83", "91": "Pass" } }),
  u8("Hands", {  }),
  u8("DvL_Dice_Count", {  }),
  u8("DvL_Dice_Type", {  }),
  i8("DvL_Bonus", {  }),
  u8("RateOfFire", {  }),
  u8("AC", {  }),
]);

export default definePack({
  name: "Gold Box Games - Item Base",
  endian: "little",
  pointerSize: 8,
  types: [CLASSRESTRICTION, WEAPONFLAGARRAY, ITEMBASE],
  nodes: {
    "entry": structNode(ITEMBASE, { label: "ITEMBASE（入口）" }),
    "CLASSRESTRICTION": structNode(CLASSRESTRICTION, { label: "CLASSRESTRICTION" }),
    "WEAPONFLAGARRAY": structNode(WEAPONFLAGARRAY, { label: "WEAPONFLAGARRAY" }),
  },
});

