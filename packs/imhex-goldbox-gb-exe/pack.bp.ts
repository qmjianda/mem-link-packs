/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/GoldBox/GB_EXE.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const CLASSALIGNARRAY = struct("CLASSALIGNARRAY", [
  bits("LawfulGood", 1, { at: 0, bit: 0, unit: 1, label: "LawfulGood" }),
  bits("LawfulNeutral", 1, { at: 0, bit: 1, unit: 1, label: "LawfulNeutral" }),
  bits("NeutralGood", 1, { at: 0, bit: 2, unit: 1, label: "NeutralGood" }),
  bits("TrueNeutral", 1, { at: 0, bit: 3, unit: 1, label: "TrueNeutral" }),
  bits("ChaoticGood", 1, { at: 0, bit: 4, unit: 1, label: "ChaoticGood" }),
  bits("ChaoticEvil", 1, { at: 0, bit: 5, unit: 1, label: "ChaoticEvil" }),
]);

const CLASSRESTRICTION_A = struct("CLASSRESTRICTION_A", [
  bits("MagicUser", 1, { at: 0, bit: 0, unit: 1, label: "MagicUser" }),
  bits("Cleric", 1, { at: 0, bit: 1, unit: 1, label: "Cleric" }),
  bits("Thief", 1, { at: 0, bit: 2, unit: 1, label: "Thief" }),
  bits("Fighter", 1, { at: 0, bit: 3, unit: 1, label: "Fighter" }),
  bits("Monk", 1, { at: 0, bit: 4, unit: 1, label: "Monk" }),
  bits("Druid", 1, { at: 0, bit: 5, unit: 1, label: "Druid" }),
  bits("Paladin", 1, { at: 0, bit: 6, unit: 1, label: "Paladin" }),
  bits("Ranger", 1, { at: 0, bit: 7, unit: 1, label: "Ranger" }),
]);

const CLASSRESTRICTION_B = struct("CLASSRESTRICTION_B", [
  bits("MagicUser", 1, { at: 0, bit: 0, unit: 1, label: "MagicUser" }),
  bits("Cleric", 1, { at: 0, bit: 1, unit: 1, label: "Cleric" }),
  bits("Thief", 1, { at: 0, bit: 2, unit: 1, label: "Thief" }),
  bits("Fighter", 1, { at: 0, bit: 3, unit: 1, label: "Fighter" }),
  bits("Druid", 1, { at: 0, bit: 4, unit: 1, label: "Druid" }),
  bits("Monk", 1, { at: 0, bit: 5, unit: 1, label: "Monk" }),
  bits("PaladinRanger", 1, { at: 0, bit: 6, unit: 1, label: "PaladinRanger" }),
]);

const CLASSRESTRICTION_C = struct("CLASSRESTRICTION_C", [
  bits("MagicUser", 1, { at: 0, bit: 0, unit: 1, label: "MagicUser" }),
  bits("Cleric", 1, { at: 0, bit: 1, unit: 1, label: "Cleric" }),
  bits("Thief", 1, { at: 0, bit: 2, unit: 1, label: "Thief" }),
  bits("Fighter", 1, { at: 0, bit: 3, unit: 1, label: "Fighter" }),
  bits("Knight", 1, { at: 0, bit: 4, unit: 1, label: "Knight" }),
  bits("Druid", 1, { at: 0, bit: 5, unit: 1, label: "Druid" }),
  bits("PaladinRanger", 1, { at: 0, bit: 6, unit: 1, label: "PaladinRanger" }),
]);

const CLASSRESTRICTION_D = struct("CLASSRESTRICTION_D", [
  bits("MagicUser", 1, { at: 0, bit: 0, unit: 1, label: "MagicUser" }),
  bits("Cleric", 1, { at: 0, bit: 1, unit: 1, label: "Cleric" }),
  bits("Thief", 1, { at: 0, bit: 2, unit: 1, label: "Thief" }),
  bits("Fighter", 1, { at: 0, bit: 3, unit: 1, label: "Fighter" }),
  bits("Knight", 1, { at: 0, bit: 4, unit: 1, label: "Knight" }),
  bits("Druid", 1, { at: 0, bit: 5, unit: 1, label: "Druid" }),
  bits("Paladin", 1, { at: 0, bit: 6, unit: 1, label: "Paladin" }),
  bits("Ranger", 1, { at: 0, bit: 7, unit: 1, label: "Ranger" }),
]);

const BASEABILITY = struct("BASEABILITY", [
  u8("STR", {  }),
  u8("INT", {  }),
  u8("WIS", {  }),
  u8("DEX", {  }),
  u8("CON", {  }),
  u8("CHA", {  }),
]);

const CLASSMONEYBASE = struct("CLASSMONEYBASE", [
  u8("DiceCount", {  }),
  u8("DiceType", {  }),
]);

const THAC0BASE = struct("THAC0BASE", [
  u8("THAC0Base", {  }),
]);

const SPELLNAME = struct("SPELLNAME", [
  u8("Spell", {  }),
]);

const SPELLALLOWED = struct("SPELLALLOWED", [
  array("SpellID", SPELLNAME, 10),
]);

const SAVEPERLVL = struct("SAVEPERLVL", [
  u8("SAV1_PPD", {  }),
  u8("SAV2_PP", {  }),
  u8("SAV3_RSW", {  }),
  u8("SAV4_BW", {  }),
  u8("SAV5_SPL", {  }),
]);

const XPPERLVL = struct("XPPERLVL", [
  i32("XP", {  }),
]);

const CLASSXPPERLVLFIXED = struct("CLASSXPPERLVLFIXED", [
  u32("XP", {  }),
]);

const RACEABILITYLIMIT = struct("RACEABILITYLIMIT", [
  u8("STR_MIN_M", {  }),
  u8("STR_MIN_F", {  }),
  u8("STR_MAX_M", {  }),
  u8("STR_MAX_F", {  }),
  u8("STX_MAX_M", {  }),
  u8("STX_MAX_F", {  }),
  u8("INT_MIN", {  }),
  u8("INT_MAX", {  }),
  u8("WIS_MIN", {  }),
  u8("WIS_MAX", {  }),
  u8("DEX_MIN", {  }),
  u8("DEX_MAX", {  }),
  u8("CON_MIN", {  }),
  u8("CON_MAX", {  }),
  u8("CHA_MIN", {  }),
  u8("CHA_MAX", {  }),
]);

const RACECLASSAGEBASE = struct("RACECLASSAGEBASE", [
  u8("AgeBase", {  }),
  u8("Age256Mult", {  }),
  u8("DiceCount", {  }),
  u8("DiceType", {  }),
]);

const RACEAGERANGE = struct("RACEAGERANGE", [
  u16("Young", {  }),
  u16("Mature", {  }),
  u16("MiddleAge", {  }),
  u16("Old", {  }),
  u16("Venerable", {  }),
]);

const THIEFSKLPERLVL = struct("THIEFSKLPERLVL", [
  u8("TH_1_PickPocket", {  }),
  u8("TH_2_OpenLock", {  }),
  u8("TH_3_FindRemoveTrap", {  }),
  u8("TH_4_MoveSilent", {  }),
  u8("TH_5_HideInShadow", {  }),
  u8("TH_6_HearNoise", {  }),
  u8("TH_7_ClimbWall", {  }),
  u8("TH_8_ReadLanguage", {  }),
]);

const THIEFSKLMODDEX = struct("THIEFSKLMODDEX", [
  i8("TS1_PickPocket", {  }),
]);

const THIEFSKLMODRACE = struct("THIEFSKLMODRACE", [
  i8("TH_1_PickPocket", {  }),
  i8("TH_2_OpenLock", {  }),
  i8("TH_3_FindRemoveTrap", {  }),
  i8("TH_4_MoveSilent", {  }),
  i8("TH_5_HideInShadow", {  }),
  i8("TH_6_HearNoise", {  }),
  i8("TH_7_ClimbWall", {  }),
  i8("TH_8_ReadLanguage", {  }),
]);

const CONHPMODIFIER = struct("CONHPMODIFIER", [
  i8("CONHPModifier", {  }),
]);

const ITEMRANDOM = struct("ITEMRANDOM", [
  u16("NamePart3", {  }),
  u16("NamePart2", {  }),
  u16("NamePart1", {  }),
  u16("Weight", {  }),
  u16("Value", {  }),
  u16("Property3", {  }),
  u16("Property2", {  }),
  u16("Property1", {  }),
]);

const TIMECONV = struct("TIMECONV", [
  u16("SegmentRound", {  }),
  u16("RoundTurn", {  }),
  u16("TurnHour", {  }),
  u16("HourDay", {  }),
  u16("DayMonth", {  }),
  u16("MonthYear", {  }),
  u16("YearCentury", {  }),
]);

export default definePack({
  name: "Gold Box Games - Executable",
  endian: "little",
  pointerSize: 8,
  types: [CLASSALIGNARRAY, CLASSRESTRICTION_A, CLASSRESTRICTION_B, CLASSRESTRICTION_C, CLASSRESTRICTION_D, BASEABILITY, CLASSMONEYBASE, THAC0BASE, SPELLNAME, SPELLALLOWED, SAVEPERLVL, XPPERLVL, CLASSXPPERLVLFIXED, RACEABILITYLIMIT, RACECLASSAGEBASE, RACEAGERANGE, THIEFSKLPERLVL, THIEFSKLMODDEX, THIEFSKLMODRACE, CONHPMODIFIER, ITEMRANDOM, TIMECONV],
  nodes: {
    "entry": structNode(BASEABILITY, { label: "BASEABILITY（入口）" }),
    "CLASSALIGNARRAY": structNode(CLASSALIGNARRAY, { label: "CLASSALIGNARRAY" }),
    "CLASSRESTRICTION_A": structNode(CLASSRESTRICTION_A, { label: "CLASSRESTRICTION_A" }),
    "CLASSRESTRICTION_B": structNode(CLASSRESTRICTION_B, { label: "CLASSRESTRICTION_B" }),
    "CLASSRESTRICTION_C": structNode(CLASSRESTRICTION_C, { label: "CLASSRESTRICTION_C" }),
    "CLASSRESTRICTION_D": structNode(CLASSRESTRICTION_D, { label: "CLASSRESTRICTION_D" }),
    "CLASSMONEYBASE": structNode(CLASSMONEYBASE, { label: "CLASSMONEYBASE" }),
    "THAC0BASE": structNode(THAC0BASE, { label: "THAC0BASE" }),
    "SPELLNAME": structNode(SPELLNAME, { label: "SPELLNAME" }),
    "SPELLALLOWED": structNode(SPELLALLOWED, { label: "SPELLALLOWED" }),
    "SAVEPERLVL": structNode(SAVEPERLVL, { label: "SAVEPERLVL" }),
    "XPPERLVL": structNode(XPPERLVL, { label: "XPPERLVL" }),
    "CLASSXPPERLVLFIXED": structNode(CLASSXPPERLVLFIXED, { label: "CLASSXPPERLVLFIXED" }),
    "RACEABILITYLIMIT": structNode(RACEABILITYLIMIT, { label: "RACEABILITYLIMIT" }),
    "RACECLASSAGEBASE": structNode(RACECLASSAGEBASE, { label: "RACECLASSAGEBASE" }),
    "RACEAGERANGE": structNode(RACEAGERANGE, { label: "RACEAGERANGE" }),
    "THIEFSKLPERLVL": structNode(THIEFSKLPERLVL, { label: "THIEFSKLPERLVL" }),
    "THIEFSKLMODDEX": structNode(THIEFSKLMODDEX, { label: "THIEFSKLMODDEX" }),
    "THIEFSKLMODRACE": structNode(THIEFSKLMODRACE, { label: "THIEFSKLMODRACE" }),
    "CONHPMODIFIER": structNode(CONHPMODIFIER, { label: "CONHPMODIFIER" }),
    "ITEMRANDOM": structNode(ITEMRANDOM, { label: "ITEMRANDOM" }),
    "TIMECONV": structNode(TIMECONV, { label: "TIMECONV" }),
  },
});

