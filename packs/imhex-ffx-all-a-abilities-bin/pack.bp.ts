/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/all/a_abilities.bin.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Element = struct("Element", [
  bits("Fire", 1, { at: 0, bit: 0, unit: 1, label: "Fire" }),
  bits("Ice", 1, { at: 0, bit: 1, unit: 1, label: "Ice" }),
  bits("Thunder", 1, { at: 0, bit: 2, unit: 1, label: "Thunder" }),
  bits("Water", 1, { at: 0, bit: 3, unit: 1, label: "Water" }),
  bits("Holy", 1, { at: 0, bit: 4, unit: 1, label: "Holy" }),
]);

const AutoStatus = struct("AutoStatus", [
  bits("Death", 1, { at: 0, bit: 0, unit: 4, label: "Death" }),
  bits("Zombie", 1, { at: 0, bit: 1, unit: 4, label: "Zombie" }),
  bits("Petrify", 1, { at: 0, bit: 2, unit: 4, label: "Petrify" }),
  bits("Poison", 1, { at: 0, bit: 3, unit: 4, label: "Poison" }),
  bits("PowerBreak", 1, { at: 0, bit: 4, unit: 4, label: "PowerBreak" }),
  bits("MagicBreak", 1, { at: 0, bit: 5, unit: 4, label: "MagicBreak" }),
  bits("ArmorBreak", 1, { at: 0, bit: 6, unit: 4, label: "ArmorBreak" }),
  bits("MentalBreak", 1, { at: 0, bit: 7, unit: 4, label: "MentalBreak" }),
  bits("Confuse", 1, { at: 0, bit: 8, unit: 4, label: "Confuse" }),
  bits("Berserk", 1, { at: 0, bit: 9, unit: 4, label: "Berserk" }),
  bits("Provoke", 1, { at: 0, bit: 10, unit: 4, label: "Provoke" }),
  bits("Threaten", 1, { at: 0, bit: 11, unit: 4, label: "Threaten" }),
  bits("Sleep", 1, { at: 0, bit: 12, unit: 4, label: "Sleep" }),
  bits("Silence", 1, { at: 0, bit: 13, unit: 4, label: "Silence" }),
  bits("Darkness", 1, { at: 0, bit: 14, unit: 4, label: "Darkness" }),
  bits("Shell", 1, { at: 0, bit: 15, unit: 4, label: "Shell" }),
  bits("Protect", 1, { at: 0, bit: 16, unit: 4, label: "Protect" }),
  bits("Reflect", 1, { at: 0, bit: 17, unit: 4, label: "Reflect" }),
  bits("NulWater", 1, { at: 0, bit: 18, unit: 4, label: "NulWater" }),
  bits("NulFire", 1, { at: 0, bit: 19, unit: 4, label: "NulFire" }),
  bits("NulThunder", 1, { at: 0, bit: 20, unit: 4, label: "NulThunder" }),
  bits("NulBlizzard", 1, { at: 0, bit: 21, unit: 4, label: "NulBlizzard" }),
  bits("Regen", 1, { at: 0, bit: 22, unit: 4, label: "Regen" }),
  bits("Haste", 1, { at: 0, bit: 23, unit: 4, label: "Haste" }),
  bits("Slow", 1, { at: 0, bit: 24, unit: 4, label: "Slow" }),
]);

const ExtraStatusFlags = struct("ExtraStatusFlags", [
  bits("Scan", 1, { at: 0, bit: 0, unit: 2, label: "Scan" }),
  bits("DistillPower", 1, { at: 0, bit: 1, unit: 2, label: "DistillPower" }),
  bits("DistillMana", 1, { at: 0, bit: 2, unit: 2, label: "DistillMana" }),
  bits("DistillSpeed", 1, { at: 0, bit: 3, unit: 2, label: "DistillSpeed" }),
  bits("_DistillMove", 1, { at: 0, bit: 4, unit: 2, label: "_DistillMove" }),
  bits("DistillAbility", 1, { at: 0, bit: 5, unit: 2, label: "DistillAbility" }),
  bits("Shield", 1, { at: 0, bit: 6, unit: 2, label: "Shield" }),
  bits("Boost", 1, { at: 0, bit: 7, unit: 2, label: "Boost" }),
  bits("Eject", 1, { at: 0, bit: 8, unit: 2, label: "Eject" }),
  bits("AutoLife", 1, { at: 0, bit: 9, unit: 2, label: "AutoLife" }),
  bits("Curse", 1, { at: 0, bit: 10, unit: 2, label: "Curse" }),
  bits("Defend", 1, { at: 0, bit: 11, unit: 2, label: "Defend" }),
  bits("Guard", 1, { at: 0, bit: 12, unit: 2, label: "Guard" }),
  bits("Sentinel", 1, { at: 0, bit: 13, unit: 2, label: "Sentinel" }),
  bits("Doom", 1, { at: 0, bit: 14, unit: 2, label: "Doom" }),
  bits("_Unk", 1, { at: 0, bit: 15, unit: 2, label: "_Unk" }),
]);

const Stats = struct("Stats", [
  bits("Hp", 1, { at: 0, bit: 0, unit: 1, label: "Hp" }),
  bits("Mp", 1, { at: 0, bit: 1, unit: 1, label: "Mp" }),
  bits("Str", 1, { at: 0, bit: 2, unit: 1, label: "Str" }),
  bits("Mag", 1, { at: 0, bit: 3, unit: 1, label: "Mag" }),
  bits("Def", 1, { at: 0, bit: 4, unit: 1, label: "Def" }),
  bits("MDef", 1, { at: 0, bit: 5, unit: 1, label: "MDef" }),
]);

const Abilities = struct("Abilities", [
  bits("Sensor", 1, { at: 0, bit: 0, unit: 8, label: "Sensor" }),
  bits("FirstStrike", 1, { at: 0, bit: 1, unit: 8, label: "FirstStrike" }),
  bits("Initiative", 1, { at: 0, bit: 2, unit: 8, label: "Initiative" }),
  bits("Counterattack", 1, { at: 0, bit: 3, unit: 8, label: "Counterattack" }),
  bits("EvadeNCounter", 1, { at: 0, bit: 4, unit: 8, label: "EvadeNCounter" }),
  bits("MagicCounter", 1, { at: 0, bit: 5, unit: 8, label: "MagicCounter" }),
  bits("MagicBooster", 1, { at: 0, bit: 6, unit: 8, label: "MagicBooster" }),
  bits("Unk1", 1, { at: 0, bit: 7, unit: 8, label: "Unk1" }),
  bits("Unk2", 1, { at: 0, bit: 8, unit: 8, label: "Unk2" }),
  bits("Alchemy", 1, { at: 0, bit: 9, unit: 8, label: "Alchemy" }),
  bits("AutoPotion", 1, { at: 0, bit: 10, unit: 8, label: "AutoPotion" }),
  bits("AutoMed", 1, { at: 0, bit: 11, unit: 8, label: "AutoMed" }),
  bits("AutoPhoenix", 1, { at: 0, bit: 12, unit: 8, label: "AutoPhoenix" }),
  bits("Piercing", 1, { at: 0, bit: 13, unit: 8, label: "Piercing" }),
  bits("HalfMpCost", 1, { at: 0, bit: 14, unit: 8, label: "HalfMpCost" }),
  bits("OneMpCost", 1, { at: 0, bit: 15, unit: 8, label: "OneMpCost" }),
  bits("DoubleOverdrive", 1, { at: 0, bit: 16, unit: 8, label: "DoubleOverdrive" }),
  bits("TripleOverdrive", 1, { at: 0, bit: 17, unit: 8, label: "TripleOverdrive" }),
  bits("SosOverdrive", 1, { at: 0, bit: 18, unit: 8, label: "SosOverdrive" }),
  bits("OverdriveToAp", 1, { at: 0, bit: 19, unit: 8, label: "OverdriveToAp" }),
  bits("DoubleAp", 1, { at: 0, bit: 20, unit: 8, label: "DoubleAp" }),
  bits("TripleAp", 1, { at: 0, bit: 21, unit: 8, label: "TripleAp" }),
  bits("NoAp", 1, { at: 0, bit: 22, unit: 8, label: "NoAp" }),
  bits("Pickpocket", 1, { at: 0, bit: 23, unit: 8, label: "Pickpocket" }),
  bits("MasterThief", 1, { at: 0, bit: 24, unit: 8, label: "MasterThief" }),
  bits("Bhpl", 1, { at: 0, bit: 25, unit: 8, label: "Bhpl" }),
  bits("Bmpl", 1, { at: 0, bit: 26, unit: 8, label: "Bmpl" }),
  bits("Bdl", 1, { at: 0, bit: 27, unit: 8, label: "Bdl" }),
  bits("Unk3", 1, { at: 0, bit: 28, unit: 8, label: "Unk3" }),
  bits("Unk4", 1, { at: 0, bit: 29, unit: 8, label: "Unk4" }),
  bits("Gillionaire", 1, { at: 0, bit: 30, unit: 8, label: "Gillionaire" }),
  bits("HpStroll", 1, { at: 0, bit: 31, unit: 8, label: "HpStroll" }),
  bits("MpStroll", 1, { at: 0, bit: 32, unit: 8, label: "MpStroll" }),
  bits("NoEncounters", 1, { at: 0, bit: 33, unit: 8, label: "NoEncounters" }),
  bits("Capture", 1, { at: 0, bit: 34, unit: 8, label: "Capture" }),
  bits("Unk5", 1, { at: 0, bit: 35, unit: 8, label: "Unk5" }),
  bits("Unk6", 1, { at: 0, bit: 36, unit: 8, label: "Unk6" }),
  bits("Unk7", 1, { at: 0, bit: 37, unit: 8, label: "Unk7" }),
  bits("Unk8", 1, { at: 0, bit: 38, unit: 8, label: "Unk8" }),
  bits("Unk9", 1, { at: 0, bit: 39, unit: 8, label: "Unk9" }),
]);

const Status = struct("Status", [
  u8("death", {  }),
  u8("zombie", {  }),
  u8("petrify", {  }),
  u8("poison", {  }),
  u8("power_break", {  }),
  u8("magic_break", {  }),
  u8("armor_break", {  }),
  u8("mental_break", {  }),
  u8("confuse", {  }),
  u8("berserk", {  }),
  u8("provoke", {  }),
  u8("threaten", {  }),
  u8("sleep", {  }),
  u8("silence", {  }),
  u8("darkness", {  }),
  u8("shell", {  }),
  u8("protect", {  }),
  u8("reflect", {  }),
  u8("nul_water", {  }),
  u8("nul_fire", {  }),
  u8("nul_thunder", {  }),
  u8("nul_blizzard", {  }),
  u8("regen", {  }),
  u8("haste", {  }),
  u8("slow", {  }),
]);

const StatusDur = struct("StatusDur", [
  u8("sleep", {  }),
  u8("silence", {  }),
  u8("darkness", {  }),
  u8("shell", {  }),
  u8("protect", {  }),
  u8("reflect", {  }),
  u8("nul_water", {  }),
  u8("nul_fire", {  }),
  u8("nul_thunder", {  }),
  u8("nul_blizzard", {  }),
  u8("regen", {  }),
  u8("haste", {  }),
  u8("slow", {  }),
]);

export default definePack({
  name: "A Abilities.Bin",
  endian: "little",
  pointerSize: 8,
  types: [Element, AutoStatus, ExtraStatusFlags, Stats, Abilities, Status, StatusDur],
  nodes: {
    "entry": structNode(Element, { label: "Element（入口）" }),
    "AutoStatus": structNode(AutoStatus, { label: "AutoStatus" }),
    "ExtraStatusFlags": structNode(ExtraStatusFlags, { label: "ExtraStatusFlags" }),
    "Stats": structNode(Stats, { label: "Stats" }),
    "Abilities": structNode(Abilities, { label: "Abilities" }),
    "Status": structNode(Status, { label: "Status" }),
    "StatusDur": structNode(StatusDur, { label: "StatusDur" }),
  },
});


/*
未移植项：
- AutoAbility.name: 类型 String 不可移植
*/
