/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/GoldBox/GB_GEO.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 6 项（见文件末尾）
const WALL_NE = struct("WALL_NE", [
  bits("WallID_East", 4, { at: 0, bit: 0, unit: 1, label: "WallID_East" }),
  bits("WallID_North", 4, { at: 0, bit: 4, unit: 1, label: "WallID_North" }),
]);

const WALL_SW = struct("WALL_SW", [
  bits("WallID_West", 4, { at: 0, bit: 0, unit: 1, label: "WallID_West" }),
  bits("WallID_South", 4, { at: 0, bit: 4, unit: 1, label: "WallID_South" }),
]);

const BACKGROUND = struct("BACKGROUND", [
  bits("UseBackground2", 1, { at: 0, bit: 1, unit: 1, label: "UseBackground2" }),
  bits("UseBackground3", 1, { at: 0, bit: 3, unit: 1, label: "UseBackground3" }),
]);

const EVENT = struct("EVENT", [
  bits("EventID", 7, { at: 0, bit: 0, unit: 1, label: "EventID" }),
  bits("IsInterior", 1, { at: 0, bit: 7, unit: 1, label: "IsInterior" }),
]);

const CELL_A = struct("CELL_A", [
  record("NorthEast", WALL_NE),
]);

const STRING = struct("STRING", [
  u8("StringSize", {  }),
]);

const STRG = struct("STRG", [
  str("FOURCC", { size: 4 }),
  u32("SectionSize", { endian: "big" }),
  u16("DataSize_Max", {  }),
  i16("Unknown_0B", {  }),
  u16("DataSize_Used", {  }),
  array("StringList", STRING, 400),
]);

const ZONE = struct("ZONE", [
  bits("Zone1", 1, { at: 0, bit: 0, unit: 1, label: "Zone1" }),
  bits("Zone2", 1, { at: 0, bit: 1, unit: 1, label: "Zone2" }),
  bits("Zone3", 1, { at: 0, bit: 2, unit: 1, label: "Zone3" }),
  bits("Zone4", 1, { at: 0, bit: 3, unit: 1, label: "Zone4" }),
  bits("Zone5", 1, { at: 0, bit: 4, unit: 1, label: "Zone5" }),
  bits("Zone6", 1, { at: 0, bit: 5, unit: 1, label: "Zone6" }),
  bits("Zone7", 1, { at: 0, bit: 6, unit: 1, label: "Zone7" }),
  bits("Zone8", 1, { at: 0, bit: 7, unit: 1, label: "Zone8" }),
]);

const RESTEVENT = struct("RESTEVENT", [
  bits("Minutes", 16, { at: 0, bit: 0, unit: 4, label: "Minutes" }),
  bits("EventID", 8, { at: 0, bit: 16, unit: 4, label: "EventID" }),
  bits("Chance", 7, { at: 0, bit: 24, unit: 4, label: "Chance" }),
  bits("NoRest", 1, { at: 0, bit: 31, unit: 4, label: "NoRest" }),
]);

const STEPEVENT = struct("STEPEVENT", [
  u16("StepCount", {  }),
  u8("Event", {  }),
  record("Zones", ZONE),
]);

const ENTRYPOINT_DIR = struct("ENTRYPOINT_DIR", [
  bits("Direction", 2, { at: 0, bit: 1, unit: 1, label: "Direction" }),
]);

const ENTRYPOINT = struct("ENTRYPOINT", [
  u8("Y", {  }),
  u8("X", {  }),
  record("EntryDir", ENTRYPOINT_DIR),
  pad(1),
]);

const HDR_ZONE_NAME = struct("HDR_ZONE_NAME", [
  str("ZoneName", { size: 16 }),
]);

const HDR_ZONE_MESSAGE = struct("HDR_ZONE_MESSAGE", [
  u16("Overland_Zone_Message", { endian: "big" }),
]);

const HDR = struct("HDR", [
  str("FOURCC", { size: 4 }),
  u32("SectionSize", { endian: "big" }),
  u8("Unknown_00", {  }),
  u8("Unknown_01", {  }),
  u8("Height", {  }),
  u8("Width", {  }),
]);

const ENTRYPOINTCOORD = struct("ENTRYPOINTCOORD", [
  u8("Y", {  }),
  u8("X", {  }),
  pad(2),
]);

const WALL_IN = struct("WALL_IN", [
  bits("WallID", 4, { at: 0, bit: 0, unit: 1, label: "WallID" }),
  bits("Obstruction", 4, { at: 0, bit: 4, unit: 1, label: "Obstruction" }),
]);

const WALL_OUT = struct("WALL_OUT", [
  bits("Obstruction", 4, { at: 0, bit: 4, unit: 1, label: "Obstruction" }),
]);

const MAP = struct("MAP", [
  str("FOURCC", { size: 4 }),
  u32("SectionSize", { endian: "big" }),
]);

const EVENTHIERARCHY = struct("EVENTHIERARCHY", [
  u8("EventID", {  }),
  u8("ZoneID", {  }),
  u16("CellID", {  }),
  u8("ParentID", {  }),
  u8("ParentTypeID", {  }),
  u8("AltID", {  }),
]);

const CLASSARRAY = struct("CLASSARRAY", [
  bits("MagicUser", 1, { at: 0, bit: 0, unit: 1, label: "MagicUser" }),
  bits("Cleric", 1, { at: 0, bit: 1, unit: 1, label: "Cleric" }),
  bits("Thief", 1, { at: 0, bit: 2, unit: 1, label: "Thief" }),
  bits("Fighter", 1, { at: 0, bit: 3, unit: 1, label: "Fighter" }),
  bits("Paladin", 1, { at: 0, bit: 4, unit: 1, label: "Paladin" }),
  bits("Ranger", 1, { at: 0, bit: 5, unit: 1, label: "Ranger" }),
]);

const SHOPTYPE = struct("SHOPTYPE", [
  bits("TypeOfItems", 4, { at: 0, bit: 4, unit: 1, label: "TypeOfItems" }),
]);

const SHOP = union("SHOP", [
  record("ShopType", SHOPTYPE),
]);

const EVENTCONTROL = struct("EVENTCONTROL", [
  bits("DoOnce", 1, { at: 0, bit: 0, unit: 1, label: "DoOnce" }),
  bits("ChainControl", 2, { at: 0, bit: 1, unit: 1, label: "ChainControl" }),
  bits("ConditionType", 5, { at: 0, bit: 3, unit: 1, label: "ConditionType" }),
]);

const EVENT_SOUND = struct("EVENT_SOUND", [
  u8("Sound", { values: { "0": "NoSound", "3": "Cast", "4": "Blast", "5": "Sorcery", "6": "Death", "7": "Missile", "8": "Hit", "9": "Lightning", "10": "Swish", "11": "Footstep", "12": "Fireball", "13": "Bowstring", "14": "Sploosh", "15": "Crackle", "32": "Overture", "33": "Treasure", "34": "Foes", "35": "Battle", "36": "Mystery", "37": "UhOh", "38": "EvilMarch", "39": "Victory" } }),
]);

const EVENT_03_25_BYTE_04 = struct("EVENT_03_25_BYTE_04", [
  bits("MNY_Platinum", 31, { at: 0, bit: 0, unit: 4, label: "MNY_Platinum" }),
  bits("IsIdentified", 1, { at: 0, bit: 31, unit: 4, label: "IsIdentified" }),
]);

const EVENT_04_BYTE_0D = struct("EVENT_04_BYTE_0D", [
  bits("SaveBonus", 4, { at: 0, bit: 0, unit: 2, label: "SaveBonus" }),
  bits("SaveType", 3, { at: 0, bit: 4, unit: 2, label: "SaveType" }),
  bits("Distance", 2, { at: 0, bit: 13, unit: 2, label: "Distance" }),
]);

const EVENT_09_BYTE_04 = struct("EVENT_09_BYTE_04", [
  bits("MaxSpellLevel", 3, { at: 0, bit: 0, unit: 1, label: "MaxSpellLevel" }),
]);

const EVENT_10_21_BYTE_0F = struct("EVENT_10_21_BYTE_0F", [
  bits("Event1_BackupOneStep", 1, { at: 0, bit: 0, unit: 1, label: "Event1_BackupOneStep" }),
  bits("Event2_BackupOneStep", 1, { at: 0, bit: 1, unit: 1, label: "Event2_BackupOneStep" }),
  bits("Event3_BackupOneStep", 1, { at: 0, bit: 2, unit: 1, label: "Event3_BackupOneStep" }),
  bits("Event4_BackupOneStep", 1, { at: 0, bit: 3, unit: 1, label: "Event4_BackupOneStep" }),
  bits("Event5_BackupOneStep", 1, { at: 0, bit: 4, unit: 1, label: "Event5_BackupOneStep" }),
]);

const EVENT_15_BYTE_09 = struct("EVENT_15_BYTE_09", [
  bits("Approach_Action", 3, { at: 0, bit: 0, unit: 8, label: "Approach_Action" }),
  bits("Approach_Allowed", 1, { at: 0, bit: 3, unit: 8, label: "Approach_Allowed" }),
  bits("Approach_NotClose", 1, { at: 0, bit: 4, unit: 8, label: "Approach_NotClose" }),
  bits("Retreat_Action", 3, { at: 0, bit: 8, unit: 8, label: "Retreat_Action" }),
  bits("Retreat_Allowed", 1, { at: 0, bit: 11, unit: 8, label: "Retreat_Allowed" }),
  bits("Fight_Action", 3, { at: 0, bit: 16, unit: 8, label: "Fight_Action" }),
  bits("Fight_Allowed", 1, { at: 0, bit: 19, unit: 8, label: "Fight_Allowed" }),
  bits("Fight_OnlyClose", 1, { at: 0, bit: 20, unit: 8, label: "Fight_OnlyClose" }),
  bits("Wait_Action", 3, { at: 0, bit: 24, unit: 8, label: "Wait_Action" }),
  bits("Wait_Allowed", 1, { at: 0, bit: 27, unit: 8, label: "Wait_Allowed" }),
  bits("Talk_Action", 3, { at: 0, bit: 32, unit: 8, label: "Talk_Action" }),
  bits("Talk_Allowed", 1, { at: 0, bit: 35, unit: 8, label: "Talk_Allowed" }),
  bits("Talk_OnlyClose", 1, { at: 0, bit: 36, unit: 8, label: "Talk_OnlyClose" }),
  bits("RangeZero_Action", 3, { at: 0, bit: 40, unit: 8, label: "RangeZero_Action" }),
]);

const EVENT_16_BYTE_04 = struct("EVENT_16_BYTE_04", [
  bits("Math_Operation", 2, { at: 0, bit: 0, unit: 1, label: "Math_Operation" }),
  bits("Multi_Operation", 2, { at: 0, bit: 2, unit: 1, label: "Multi_Operation" }),
  bits("ExitPlayNow", 1, { at: 0, bit: 4, unit: 1, label: "ExitPlayNow" }),
]);

const EVENT_18_19_20_BYTE_0A = struct("EVENT_18_19_20_BYTE_0A", [
  bits("Failure_Action", 2, { at: 0, bit: 0, unit: 1, label: "Failure_Action" }),
  bits("Success_Action", 2, { at: 0, bit: 2, unit: 1, label: "Success_Action" }),
]);

const EVENT_22_BYTE_09 = struct("EVENT_22_BYTE_09", [
  bits("Shop_CostFactor", 5, { at: 0, bit: 0, unit: 1, label: "Shop_CostFactor" }),
  bits("MaxSpellLevel", 3, { at: 0, bit: 5, unit: 1, label: "MaxSpellLevel" }),
]);

const EVENT_22_BYTE_0C = struct("EVENT_22_BYTE_0C", [
  bits("TrainingHallTemple_CostModifier", 5, { at: 0, bit: 0, unit: 1, label: "TrainingHallTemple_CostModifier" }),
]);

const EVENT_INVALID = struct("EVENT_INVALID", [
  u8("Invalid", {  }),
]);

export default definePack({
  name: "Gold Box Games - Map (GEO)",
  endian: "little",
  pointerSize: 8,
  types: [WALL_NE, WALL_SW, BACKGROUND, EVENT, CELL_A, STRING, STRG, ZONE, RESTEVENT, STEPEVENT, ENTRYPOINT_DIR, ENTRYPOINT, HDR_ZONE_NAME, HDR_ZONE_MESSAGE, HDR, ENTRYPOINTCOORD, WALL_IN, WALL_OUT, MAP, EVENTHIERARCHY, CLASSARRAY, SHOPTYPE, SHOP, EVENTCONTROL, EVENT_SOUND, EVENT_03_25_BYTE_04, EVENT_04_BYTE_0D, EVENT_09_BYTE_04, EVENT_10_21_BYTE_0F, EVENT_15_BYTE_09, EVENT_16_BYTE_04, EVENT_18_19_20_BYTE_0A, EVENT_22_BYTE_09, EVENT_22_BYTE_0C, EVENT_INVALID],
  nodes: {
    "entry": structNode(STRG, { label: "STRG（入口）" }),
    "WALL_NE": structNode(WALL_NE, { label: "WALL_NE" }),
    "WALL_SW": structNode(WALL_SW, { label: "WALL_SW" }),
    "BACKGROUND": structNode(BACKGROUND, { label: "BACKGROUND" }),
    "EVENT": structNode(EVENT, { label: "EVENT" }),
    "CELL_A": structNode(CELL_A, { label: "CELL_A" }),
    "STRING": structNode(STRING, { label: "STRING" }),
    "ZONE": structNode(ZONE, { label: "ZONE" }),
    "RESTEVENT": structNode(RESTEVENT, { label: "RESTEVENT" }),
    "STEPEVENT": structNode(STEPEVENT, { label: "STEPEVENT" }),
    "ENTRYPOINT_DIR": structNode(ENTRYPOINT_DIR, { label: "ENTRYPOINT_DIR" }),
    "ENTRYPOINT": structNode(ENTRYPOINT, { label: "ENTRYPOINT" }),
    "HDR_ZONE_NAME": structNode(HDR_ZONE_NAME, { label: "HDR_ZONE_NAME" }),
    "HDR_ZONE_MESSAGE": structNode(HDR_ZONE_MESSAGE, { label: "HDR_ZONE_MESSAGE" }),
    "HDR": structNode(HDR, { label: "HDR" }),
    "ENTRYPOINTCOORD": structNode(ENTRYPOINTCOORD, { label: "ENTRYPOINTCOORD" }),
    "WALL_IN": structNode(WALL_IN, { label: "WALL_IN" }),
    "WALL_OUT": structNode(WALL_OUT, { label: "WALL_OUT" }),
    "MAP": structNode(MAP, { label: "MAP" }),
    "EVENTHIERARCHY": structNode(EVENTHIERARCHY, { label: "EVENTHIERARCHY" }),
    "CLASSARRAY": structNode(CLASSARRAY, { label: "CLASSARRAY" }),
    "SHOPTYPE": structNode(SHOPTYPE, { label: "SHOPTYPE" }),
    "SHOP": structNode(SHOP, { label: "SHOP" }),
    "EVENTCONTROL": structNode(EVENTCONTROL, { label: "EVENTCONTROL" }),
    "EVENT_SOUND": structNode(EVENT_SOUND, { label: "EVENT_SOUND" }),
    "EVENT_03_25_BYTE_04": structNode(EVENT_03_25_BYTE_04, { label: "EVENT_03_25_BYTE_04" }),
    "EVENT_04_BYTE_0D": structNode(EVENT_04_BYTE_0D, { label: "EVENT_04_BYTE_0D" }),
    "EVENT_09_BYTE_04": structNode(EVENT_09_BYTE_04, { label: "EVENT_09_BYTE_04" }),
    "EVENT_10_21_BYTE_0F": structNode(EVENT_10_21_BYTE_0F, { label: "EVENT_10_21_BYTE_0F" }),
    "EVENT_15_BYTE_09": structNode(EVENT_15_BYTE_09, { label: "EVENT_15_BYTE_09" }),
    "EVENT_16_BYTE_04": structNode(EVENT_16_BYTE_04, { label: "EVENT_16_BYTE_04" }),
    "EVENT_18_19_20_BYTE_0A": structNode(EVENT_18_19_20_BYTE_0A, { label: "EVENT_18_19_20_BYTE_0A" }),
    "EVENT_22_BYTE_09": structNode(EVENT_22_BYTE_09, { label: "EVENT_22_BYTE_09" }),
    "EVENT_22_BYTE_0C": structNode(EVENT_22_BYTE_0C, { label: "EVENT_22_BYTE_0C" }),
    "EVENT_INVALID": structNode(EVENT_INVALID, { label: "EVENT_INVALID" }),
  },
});


/*
未移植项：
- DOOR: 位域没有可移植的固定成员
- ART_WALLSLOT.WallSlot: 类型 IMG_10_WALL 不可移植
- ART_COMBAT_DUNGEON.CombatArt_Indoor: 类型 IMG_COMBAT_IN 不可移植
- ART_COMBAT_OVERLAND.CombatArt_Overland: 类型 IMG_COMBAT_OUT 不可移植
- HDR.WallSlot: 类型 ART_WALLSLOT 不可移植
- GRID: 位域没有可移植的固定成员
*/
