/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/GoldBox/GB_CHR.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 9 项（见文件末尾）
const SFX_BASE = struct("SFX_BASE", [
  u8("EffectID", {  }),
  u16("TimeRemaining", {  }),
  u8("Modifier", {  }),
  u8("IsItemEffect", {  }),
]);

const SFX_CHR07 = struct("SFX_CHR07", [
  u8("EffectID", {  }),
  u16("TimeRemaining", {  }),
  u8("Modifier", {  }),
  u8("IsItemEffect", {  }),
  u32("ADDR_NextEffect", {  }),
]);

const SFX_MON10 = struct("SFX_MON10", [
  u8("EffectID", {  }),
]);

const SFX_CHR10 = struct("SFX_CHR10", [
  u8("EffectID", {  }),
  u8("Unknown_01", {  }),
  u16("TimeRemaining", {  }),
  u8("Modifier", {  }),
  bool("IsItemEffect", {  }),
  u32("ADDR_NextEffect", {  }),
]);

const FLAGARRAY02 = struct("FLAGARRAY02", [
  bits("Vulnerable_Dispel", 1, { at: 0, bit: 0, unit: 1, label: "Vulnerable_Dispel" }),
  bits("Penalty_ToHit_Dwarf", 1, { at: 0, bit: 1, unit: 1, label: "Penalty_ToHit_Dwarf" }),
  bits("Penalty_ToHit_Gnome", 1, { at: 0, bit: 2, unit: 1, label: "Penalty_ToHit_Gnome" }),
  bits("Bonus_Damage_Ranger", 1, { at: 0, bit: 3, unit: 1, label: "Bonus_Damage_Ranger" }),
]);

const FLAGARRAY03 = struct("FLAGARRAY03", [
  bits("Vulnerable_Dispel", 1, { at: 0, bit: 0, unit: 2, label: "Vulnerable_Dispel" }),
  bits("Type_Mammal", 1, { at: 0, bit: 1, unit: 2, label: "Type_Mammal" }),
  bits("Penalty_ToHit_Dwarf", 1, { at: 0, bit: 2, unit: 2, label: "Penalty_ToHit_Dwarf" }),
  bits("Bonus_Damage_Ranger", 1, { at: 0, bit: 3, unit: 2, label: "Bonus_Damage_Ranger" }),
  bits("Type_Snake", 1, { at: 0, bit: 4, unit: 2, label: "Type_Snake" }),
  bits("Penalty_ToHit_Gnome", 1, { at: 0, bit: 5, unit: 2, label: "Penalty_ToHit_Gnome" }),
  bits("Type_Animal", 1, { at: 0, bit: 6, unit: 2, label: "Type_Animal" }),
  bits("Bonus_ToHit_Dwarf", 1, { at: 0, bit: 7, unit: 2, label: "Bonus_ToHit_Dwarf" }),
  bits("Type_Giant", 1, { at: 0, bit: 8, unit: 2, label: "Type_Giant" }),
  bits("Unknown_09", 1, { at: 0, bit: 9, unit: 2, label: "Unknown_09" }),
  bits("Unknown_10", 1, { at: 0, bit: 10, unit: 2, label: "Unknown_10" }),
  bits("Immune_DeathMagic", 1, { at: 0, bit: 11, unit: 2, label: "Immune_DeathMagic" }),
]);

const FLAGARRAY04 = struct("FLAGARRAY04", [
  bits("Vulnerable_Dispel", 1, { at: 0, bit: 0, unit: 2, label: "Vulnerable_Dispel" }),
  bits("Unknown_01", 1, { at: 0, bit: 1, unit: 2, label: "Unknown_01" }),
  bits("Penalty_ToHit_Dwarf", 1, { at: 0, bit: 2, unit: 2, label: "Penalty_ToHit_Dwarf" }),
  bits("Bonus_Damage_Ranger", 1, { at: 0, bit: 3, unit: 2, label: "Bonus_Damage_Ranger" }),
  bits("Type_Snake", 1, { at: 0, bit: 4, unit: 2, label: "Type_Snake" }),
  bits("Penalty_ToHit_Gnome", 1, { at: 0, bit: 5, unit: 2, label: "Penalty_ToHit_Gnome" }),
  bits("Type_Animal", 1, { at: 0, bit: 6, unit: 2, label: "Type_Animal" }),
  bits("Bonus_ToHit_Dwarf", 1, { at: 0, bit: 7, unit: 2, label: "Bonus_ToHit_Dwarf" }),
  bits("Type_Giant", 1, { at: 0, bit: 8, unit: 2, label: "Type_Giant" }),
  bits("Vulnerable_CharmHold", 1, { at: 0, bit: 9, unit: 2, label: "Vulnerable_CharmHold" }),
  bits("Type_Reptile", 1, { at: 0, bit: 10, unit: 2, label: "Type_Reptile" }),
  bits("Immune_DeathMagic", 1, { at: 0, bit: 11, unit: 2, label: "Immune_DeathMagic" }),
  bits("Immune_Poison", 1, { at: 0, bit: 12, unit: 2, label: "Immune_Poison" }),
  bits("Immune_Decapitation", 1, { at: 0, bit: 13, unit: 2, label: "Immune_Decapitation" }),
  bits("Immune_Confusion", 1, { at: 0, bit: 14, unit: 2, label: "Immune_Confusion" }),
]);

const FLAGARRAY05 = struct("FLAGARRAY05", [
  bits("Vulnerable_Dispel", 1, { at: 0, bit: 0, unit: 2, label: "Vulnerable_Dispel" }),
  bits("Type_Undead", 1, { at: 0, bit: 1, unit: 2, label: "Type_Undead" }),
  bits("Penalty_ToHit_Dwarf", 1, { at: 0, bit: 2, unit: 2, label: "Penalty_ToHit_Dwarf" }),
  bits("Bonus_Damage_Ranger", 1, { at: 0, bit: 3, unit: 2, label: "Bonus_Damage_Ranger" }),
  bits("Type_Snake", 1, { at: 0, bit: 4, unit: 2, label: "Type_Snake" }),
  bits("Type_Reptile", 1, { at: 0, bit: 5, unit: 2, label: "Type_Reptile" }),
  bits("Type_Animal", 1, { at: 0, bit: 6, unit: 2, label: "Type_Animal" }),
  bits("Bonus_ToHit_Dwarf", 1, { at: 0, bit: 7, unit: 2, label: "Bonus_ToHit_Dwarf" }),
  bits("Type_Dragon", 1, { at: 0, bit: 8, unit: 2, label: "Type_Dragon" }),
  bits("Bonus_ToHit_Gnome", 1, { at: 0, bit: 9, unit: 2, label: "Bonus_ToHit_Gnome" }),
]);

const FLAGARRAY06 = struct("FLAGARRAY06", [
  bits("Vulnerable_Dispel", 1, { at: 0, bit: 0, unit: 2, label: "Vulnerable_Dispel" }),
  bits("Unknown_01", 1, { at: 0, bit: 1, unit: 2, label: "Unknown_01" }),
  bits("Unknown_02", 1, { at: 0, bit: 2, unit: 2, label: "Unknown_02" }),
  bits("Unknown_03", 1, { at: 0, bit: 3, unit: 2, label: "Unknown_03" }),
  bits("Unknown_04", 1, { at: 0, bit: 4, unit: 2, label: "Unknown_04" }),
  bits("Type_Reptile", 1, { at: 0, bit: 5, unit: 2, label: "Type_Reptile" }),
  bits("Unknown_06", 1, { at: 0, bit: 6, unit: 2, label: "Unknown_06" }),
  bits("Unknown_07", 1, { at: 0, bit: 7, unit: 2, label: "Unknown_07" }),
  bits("Type_Dragon", 1, { at: 0, bit: 8, unit: 2, label: "Type_Dragon" }),
  bits("Unknown_09", 1, { at: 0, bit: 9, unit: 2, label: "Unknown_09" }),
  bits("Unknown_10", 1, { at: 0, bit: 10, unit: 2, label: "Unknown_10" }),
  bits("Immune_DeathMagic", 1, { at: 0, bit: 11, unit: 2, label: "Immune_DeathMagic" }),
]);

const FLAGARRAY07 = struct("FLAGARRAY07", [
  bits("Vulnerable_Dispel", 1, { at: 0, bit: 0, unit: 2, label: "Vulnerable_Dispel" }),
  bits("Type_Mammal", 1, { at: 0, bit: 1, unit: 2, label: "Type_Mammal" }),
  bits("Penalty_ToHit_Dwarf", 1, { at: 0, bit: 2, unit: 2, label: "Penalty_ToHit_Dwarf" }),
  bits("Bonus_Damage_Ranger", 1, { at: 0, bit: 3, unit: 2, label: "Bonus_Damage_Ranger" }),
  bits("Type_Snake", 1, { at: 0, bit: 4, unit: 2, label: "Type_Snake" }),
  bits("Type_Undead", 1, { at: 0, bit: 5, unit: 2, label: "Type_Undead" }),
  bits("Type_Animal", 1, { at: 0, bit: 6, unit: 2, label: "Type_Animal" }),
  bits("Bonus_ToHit_Dwarf", 1, { at: 0, bit: 7, unit: 2, label: "Bonus_ToHit_Dwarf" }),
  bits("Type_Giant", 1, { at: 0, bit: 8, unit: 2, label: "Type_Giant" }),
  bits("Vulnerable_CharmHold", 1, { at: 0, bit: 9, unit: 2, label: "Vulnerable_CharmHold" }),
  bits("Type_Reptile", 1, { at: 0, bit: 10, unit: 2, label: "Type_Reptile" }),
  bits("Immune_DeathMagic", 1, { at: 0, bit: 11, unit: 2, label: "Immune_DeathMagic" }),
  bits("Immune_Poison", 1, { at: 0, bit: 12, unit: 2, label: "Immune_Poison" }),
  bits("Immune_Decapitation", 1, { at: 0, bit: 13, unit: 2, label: "Immune_Decapitation" }),
  bits("Immune_Confusion", 1, { at: 0, bit: 14, unit: 2, label: "Immune_Confusion" }),
  bits("Type_Dragon", 1, { at: 0, bit: 15, unit: 2, label: "Type_Dragon" }),
]);

const FLAGARRAY08 = struct("FLAGARRAY08", [
  bits("Vulnerable_Dispel", 1, { at: 0, bit: 0, unit: 1, label: "Vulnerable_Dispel" }),
  bits("Type_Mammal", 1, { at: 0, bit: 1, unit: 1, label: "Type_Mammal" }),
  bits("Penalty_ToHit_Dwarf", 1, { at: 0, bit: 2, unit: 1, label: "Penalty_ToHit_Dwarf" }),
  bits("Bonus_Damage_Ranger", 1, { at: 0, bit: 3, unit: 1, label: "Bonus_Damage_Ranger" }),
  bits("Type_Snake", 1, { at: 0, bit: 4, unit: 1, label: "Type_Snake" }),
  bits("Penalty_ToHit_Gnome", 1, { at: 0, bit: 5, unit: 1, label: "Penalty_ToHit_Gnome" }),
  bits("Type_Animal", 1, { at: 0, bit: 6, unit: 1, label: "Type_Animal" }),
  bits("Bonus_ToHit_Dwarf", 1, { at: 0, bit: 7, unit: 1, label: "Bonus_ToHit_Dwarf" }),
]);

const FLAGARRAY09 = struct("FLAGARRAY09", [
  bits("Vulnerable_Dispel", 1, { at: 0, bit: 0, unit: 2, label: "Vulnerable_Dispel" }),
  bits("Type_Mammal", 1, { at: 0, bit: 1, unit: 2, label: "Type_Mammal" }),
  bits("Penalty_ToHit_Dwarf", 1, { at: 0, bit: 2, unit: 2, label: "Penalty_ToHit_Dwarf" }),
  bits("Bonus_Damage_Ranger", 1, { at: 0, bit: 3, unit: 2, label: "Bonus_Damage_Ranger" }),
  bits("Type_Snake", 1, { at: 0, bit: 4, unit: 2, label: "Type_Snake" }),
  bits("Penalty_ToHit_Gnome", 1, { at: 0, bit: 5, unit: 2, label: "Penalty_ToHit_Gnome" }),
  bits("Type_Animal", 1, { at: 0, bit: 6, unit: 2, label: "Type_Animal" }),
  bits("Bonus_ToHit_Dwarf", 1, { at: 0, bit: 7, unit: 2, label: "Bonus_ToHit_Dwarf" }),
  bits("Type_Giant", 1, { at: 0, bit: 8, unit: 2, label: "Type_Giant" }),
  bits("Vulnerable_CharmHold", 1, { at: 0, bit: 9, unit: 2, label: "Vulnerable_CharmHold" }),
  bits("Unknown_10", 1, { at: 0, bit: 10, unit: 2, label: "Unknown_10" }),
  bits("Immune_DeathMagic", 1, { at: 0, bit: 11, unit: 2, label: "Immune_DeathMagic" }),
  bits("Immune_Poison", 1, { at: 0, bit: 12, unit: 2, label: "Immune_Poison" }),
  bits("Immune_Decapitation", 1, { at: 0, bit: 13, unit: 2, label: "Immune_Decapitation" }),
  bits("Immune_Confusion", 1, { at: 0, bit: 14, unit: 2, label: "Immune_Confusion" }),
]);

const FLAGARRAY10 = struct("FLAGARRAY10", [
  bits("Vulnerable_Dispel", 1, { at: 0, bit: 0, unit: 2, label: "Vulnerable_Dispel" }),
  bits("Type_Mammal", 1, { at: 0, bit: 1, unit: 2, label: "Type_Mammal" }),
  bits("Penalty_ToHit_Dwarf", 1, { at: 0, bit: 2, unit: 2, label: "Penalty_ToHit_Dwarf" }),
  bits("Bonus_Damage_Ranger", 1, { at: 0, bit: 3, unit: 2, label: "Bonus_Damage_Ranger" }),
  bits("Type_Snake", 1, { at: 0, bit: 4, unit: 2, label: "Type_Snake" }),
  bits("Penalty_ToHit_Gnome", 1, { at: 0, bit: 5, unit: 2, label: "Penalty_ToHit_Gnome" }),
  bits("Type_Animal", 1, { at: 0, bit: 6, unit: 2, label: "Type_Animal" }),
  bits("Bonus_ToHit_Dwarf", 1, { at: 0, bit: 7, unit: 2, label: "Bonus_ToHit_Dwarf" }),
  bits("Type_Giant", 1, { at: 0, bit: 8, unit: 2, label: "Type_Giant" }),
  bits("Vulnerable_CharmHold", 1, { at: 0, bit: 9, unit: 2, label: "Vulnerable_CharmHold" }),
  bits("Bonus_ToHit_Gnome", 1, { at: 0, bit: 10, unit: 2, label: "Bonus_ToHit_Gnome" }),
  bits("Immune_DeathMagic", 1, { at: 0, bit: 11, unit: 2, label: "Immune_DeathMagic" }),
  bits("Immune_Poison", 1, { at: 0, bit: 12, unit: 2, label: "Immune_Poison" }),
  bits("Immune_Decapitation", 1, { at: 0, bit: 13, unit: 2, label: "Immune_Decapitation" }),
  bits("Immune_Confusion", 1, { at: 0, bit: 14, unit: 2, label: "Immune_Confusion" }),
]);

const CHAR01 = struct("CHAR01", [
  u8("Name_Length", {  }),
  str("Name", { size: 15 }),
]);

const CHAR0208 = struct("CHAR0208", [
  u8("Name_Length", {  }),
  str("Name", { size: 15 }),
]);

const CHAR03 = struct("CHAR03", [
  u8("Name_Length", {  }),
  str("Name", { size: 15 }),
]);

const CHAR0409 = struct("CHAR0409", [
  u8("Name_Length", {  }),
  str("Name", { size: 15 }),
]);

const CHAR05 = struct("CHAR05", [
  u8("Name_Length", {  }),
  str("Name", { size: 15 }),
]);

const CHAR06 = struct("CHAR06", [
  u8("Name_Length", {  }),
  str("Name", { size: 15 }),
]);

const CHAR_BASE07 = struct("CHAR_BASE07", [
  u32("ADDR_NextCharacter", {  }),
  u32("ADDR_Effect", {  }),
]);

const CHAR_CHR07 = struct("CHAR_CHR07", [
  u32("ADDR_NextCharacter", {  }),
  u32("ADDR_Effect", {  }),
]);

const CHAR_MON07 = struct("CHAR_MON07", [
  u32("ADDR_NextCharacter", {  }),
  u32("ADDR_Effect", {  }),
  u8("SFX_Count", {  }),
  u8("ITM_Count_MON", {  }),
]);

const CHAR_BASE10 = struct("CHAR_BASE10", [
  u32("ADDR_NextCharacter", {  }),
  u32("ADDR_Effect", {  }),
]);

const CHAR_CHR10 = struct("CHAR_CHR10", [
  u32("ADDR_NextCharacter", {  }),
  u32("ADDR_Effect", {  }),
]);

const CHAR_MON10 = struct("CHAR_MON10", [
  u32("ADDR_NextCharacter", {  }),
  u32("ADDR_Effect", {  }),
]);

export default definePack({
  name: "Gold Box Games - Character",
  endian: "little",
  pointerSize: 8,
  types: [SFX_BASE, SFX_CHR07, SFX_MON10, SFX_CHR10, FLAGARRAY02, FLAGARRAY03, FLAGARRAY04, FLAGARRAY05, FLAGARRAY06, FLAGARRAY07, FLAGARRAY08, FLAGARRAY09, FLAGARRAY10, CHAR01, CHAR0208, CHAR03, CHAR0409, CHAR05, CHAR06, CHAR_BASE07, CHAR_CHR07, CHAR_MON07, CHAR_BASE10, CHAR_CHR10, CHAR_MON10],
  nodes: {
    "entry": structNode(SFX_BASE, { label: "SFX_BASE（入口）" }),
    "SFX_CHR07": structNode(SFX_CHR07, { label: "SFX_CHR07" }),
    "SFX_MON10": structNode(SFX_MON10, { label: "SFX_MON10" }),
    "SFX_CHR10": structNode(SFX_CHR10, { label: "SFX_CHR10" }),
    "FLAGARRAY02": structNode(FLAGARRAY02, { label: "FLAGARRAY02" }),
    "FLAGARRAY03": structNode(FLAGARRAY03, { label: "FLAGARRAY03" }),
    "FLAGARRAY04": structNode(FLAGARRAY04, { label: "FLAGARRAY04" }),
    "FLAGARRAY05": structNode(FLAGARRAY05, { label: "FLAGARRAY05" }),
    "FLAGARRAY06": structNode(FLAGARRAY06, { label: "FLAGARRAY06" }),
    "FLAGARRAY07": structNode(FLAGARRAY07, { label: "FLAGARRAY07" }),
    "FLAGARRAY08": structNode(FLAGARRAY08, { label: "FLAGARRAY08" }),
    "FLAGARRAY09": structNode(FLAGARRAY09, { label: "FLAGARRAY09" }),
    "FLAGARRAY10": structNode(FLAGARRAY10, { label: "FLAGARRAY10" }),
    "CHAR01": structNode(CHAR01, { label: "CHAR01" }),
    "CHAR0208": structNode(CHAR0208, { label: "CHAR0208" }),
    "CHAR03": structNode(CHAR03, { label: "CHAR03" }),
    "CHAR0409": structNode(CHAR0409, { label: "CHAR0409" }),
    "CHAR05": structNode(CHAR05, { label: "CHAR05" }),
    "CHAR06": structNode(CHAR06, { label: "CHAR06" }),
    "CHAR_BASE07": structNode(CHAR_BASE07, { label: "CHAR_BASE07" }),
    "CHAR_CHR07": structNode(CHAR_CHR07, { label: "CHAR_CHR07" }),
    "CHAR_MON07": structNode(CHAR_MON07, { label: "CHAR_MON07" }),
    "CHAR_BASE10": structNode(CHAR_BASE10, { label: "CHAR_BASE10" }),
    "CHAR_CHR10": structNode(CHAR_CHR10, { label: "CHAR_CHR10" }),
    "CHAR_MON10": structNode(CHAR_MON10, { label: "CHAR_MON10" }),
  },
});


/*
未移植项：
- CHAR01.Ability: 类型 ABILITY 不可移植
- CHAR0208.Ability: 类型 ABILITY 不可移植
- CHAR03.Ability: 类型 ABILITY 不可移植
- CHAR0409.Ability: 类型 ABILITY 不可移植
- CHAR05.Ability: 类型 ABILITY 不可移植
- CHAR06.Ability: 类型 ABILITY 不可移植
- CHAR_BASE07.Inventory: 类型 INVENTORY 不可移植
- CHAR_BASE10.Inventory: 类型 INVENTORY 不可移植
- CHAR_MON10.Item: 类型 ITM_MON10 不可移植
*/
