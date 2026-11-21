/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dod-save.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 7 项（见文件末尾）
const Color24 = struct("Color24", [
  u8("r", {  }),
  u8("g", {  }),
  u8("b", {  }),
]);

const Vector2 = struct("Vector2", [
  f32("x", {  }),
  f32("y", {  }),
]);

const int2 = struct("int2", [
  i32("x", {  }),
  i32("y", {  }),
]);

const NrbfString = struct("NrbfString", [
  u8("object_type", { values: { "0": "Header", "1": "RefTypeObject", "2": "UntypedRuntimeObject", "3": "UntypedExternalObject", "4": "RuntimeObject", "5": "ExternalObject", "6": "String", "7": "GenericArray", "8": "BoxedPrimitiveTypeValue", "9": "ObjectReference", "10": "NullValue", "11": "End", "12": "Assembly", "13": "ArrayFiller8b", "14": "ArrayFiller32b", "15": "ArrayOfPrimitiveType", "16": "ArrayOfObject", "17": "ArrayOfString", "18": "Method", "19": "_Unknown4", "20": "_Unknown5", "21": "MethodCall", "22": "MethodResponse" } }),
]);

const ListOfStrings = struct("ListOfStrings", [
  i32("length", {  }),
]);

const SaveDataHeader = struct("SaveDataHeader", [
  f32("version", {  }),
  i32("build", {  }),
]);

const Pickup = struct("Pickup", [
  i16("id", {  }),
]);

const ItemsData = struct("ItemsData", [
  i32("count", {  }),
]);

const Item = struct("Item", [
  u16("id", {  }),
  i32("amount", {  }),
]);

const BarItem = struct("BarItem", [
  u16("id", {  }),
]);

const PlayerInventory = struct("PlayerInventory", [
  i32("items_count", {  }),
]);

const ItemVar = struct("ItemVar", [
  bool("exists", {  }),
]);

const PlayerSkin = struct("PlayerSkin", [
  bool("is_female", {  }),
  f32("color", {  }),
  i32("hair_style", {  }),
  record("color_hair", Color24),
  record("color_eyes", Color24),
]);

const Player = struct("Player", [
  u64("steam_id", {  }),
]);

const PlayersData = struct("PlayersData", [
  i32("players_count", {  }),
]);

const EnvironmentsData = struct("EnvironmentsData", [
  i32("last_events_count", {  }),
]);

const CellFlags = struct("CellFlags", [
  bits("CustomData0", 1, { at: 0, bit: 0, unit: 4, label: "CustomData0" }),
  bits("CustomData1", 1, { at: 0, bit: 1, unit: 4, label: "CustomData1" }),
  bits("CustomData2", 1, { at: 0, bit: 2, unit: 4, label: "CustomData2" }),
  bits("UNUSED0", 1, { at: 0, bit: 3, unit: 4, label: "UNUSED0" }),
  bits("IsXReversed", 1, { at: 0, bit: 4, unit: 4, label: "IsXReversed" }),
  bits("IsBurning", 1, { at: 0, bit: 5, unit: 4, label: "IsBurning" }),
  bits("IsMapped", 1, { at: 0, bit: 6, unit: 4, label: "IsMapped" }),
  bits("UNUSED1", 1, { at: 0, bit: 7, unit: 4, label: "UNUSED1" }),
  bits("BackWall_0", 1, { at: 0, bit: 8, unit: 4, label: "BackWall_0" }),
  bits("BgSurface_0", 1, { at: 0, bit: 9, unit: 4, label: "BgSurface_0" }),
  bits("BgSurface_1", 1, { at: 0, bit: 10, unit: 4, label: "BgSurface_1" }),
  bits("BgSurface_2", 1, { at: 0, bit: 11, unit: 4, label: "BgSurface_2" }),
  bits("WaterFall", 1, { at: 0, bit: 12, unit: 4, label: "WaterFall" }),
  bits("StreamLFast", 1, { at: 0, bit: 13, unit: 4, label: "StreamLFast" }),
  bits("StreamRFast", 1, { at: 0, bit: 14, unit: 4, label: "StreamRFast" }),
  bits("IsLava", 1, { at: 0, bit: 15, unit: 4, label: "IsLava" }),
  bits("HasWireRight", 1, { at: 0, bit: 16, unit: 4, label: "HasWireRight" }),
  bits("HasWireTop", 1, { at: 0, bit: 17, unit: 4, label: "HasWireTop" }),
  bits("ElectricAlgoState", 1, { at: 0, bit: 18, unit: 4, label: "ElectricAlgoState" }),
  bits("IsPowered", 1, { at: 0, bit: 19, unit: 4, label: "IsPowered" }),
  bits("UNUSED2", 1, { at: 0, bit: 20, unit: 4, label: "UNUSED2" }),
  bits("UNUSED3", 1, { at: 0, bit: 21, unit: 4, label: "UNUSED3" }),
  bits("UNUSED4", 1, { at: 0, bit: 22, unit: 4, label: "UNUSED4" }),
  bits("UNUSED5", 1, { at: 0, bit: 23, unit: 4, label: "UNUSED5" }),
  bits("UNUSED6", 1, { at: 0, bit: 24, unit: 4, label: "UNUSED6" }),
  bits("UNUSED7", 1, { at: 0, bit: 25, unit: 4, label: "UNUSED7" }),
  bits("UNUSED8", 1, { at: 0, bit: 26, unit: 4, label: "UNUSED8" }),
  bits("UNUSED9", 1, { at: 0, bit: 27, unit: 4, label: "UNUSED9" }),
  bits("UNUSED10", 1, { at: 0, bit: 28, unit: 4, label: "UNUSED10" }),
  bits("UNUSED11", 1, { at: 0, bit: 29, unit: 4, label: "UNUSED11" }),
  bits("UNUSED12", 1, { at: 0, bit: 30, unit: 4, label: "UNUSED12" }),
  bits("UNUSED13", 1, { at: 0, bit: 31, unit: 4, label: "UNUSED13" }),
]);

const Cell = struct("Cell", [
  record("flags", CellFlags),
  u16("content_id", {  }),
  u16("content_hp", {  }),
  f32("water", {  }),
  i16("force_x", {  }),
  i16("force_y", {  }),
  record("light", Color24),
]);

const UnitsData = struct("UnitsData", [
  i32("units_count", {  }),
]);

export default definePack({
  name: "Dig Or Die Save File",
  endian: "little",
  pointerSize: 8,
  types: [Color24, Vector2, int2, NrbfString, ListOfStrings, SaveDataHeader, Pickup, ItemsData, Item, BarItem, PlayerInventory, ItemVar, PlayerSkin, Player, PlayersData, EnvironmentsData, CellFlags, Cell, UnitsData],
  nodes: {
    "entry": structNode(Color24, { label: "Color24（入口）" }),
    "Vector2": structNode(Vector2, { label: "Vector2" }),
    "int2": structNode(int2, { label: "int2" }),
    "NrbfString": structNode(NrbfString, { label: "NrbfString" }),
    "ListOfStrings": structNode(ListOfStrings, { label: "ListOfStrings" }),
    "SaveDataHeader": structNode(SaveDataHeader, { label: "SaveDataHeader" }),
    "Pickup": structNode(Pickup, { label: "Pickup" }),
    "ItemsData": structNode(ItemsData, { label: "ItemsData" }),
    "Item": structNode(Item, { label: "Item" }),
    "BarItem": structNode(BarItem, { label: "BarItem" }),
    "PlayerInventory": structNode(PlayerInventory, { label: "PlayerInventory" }),
    "ItemVar": structNode(ItemVar, { label: "ItemVar" }),
    "PlayerSkin": structNode(PlayerSkin, { label: "PlayerSkin" }),
    "Player": structNode(Player, { label: "Player" }),
    "PlayersData": structNode(PlayersData, { label: "PlayersData" }),
    "EnvironmentsData": structNode(EnvironmentsData, { label: "EnvironmentsData" }),
    "CellFlags": structNode(CellFlags, { label: "CellFlags" }),
    "Cell": structNode(Cell, { label: "Cell" }),
    "UnitsData": structNode(UnitsData, { label: "UnitsData" }),
  },
});


/*
未移植项：
- String.length: 类型 EncodedInt7Bit 不可移植
- ParamsField.fieldName: 类型 String 不可移植
- ItemVarDico.name: 类型 String 不可移植
- Player.name: 类型 String 不可移植
- Unit.code_name: 类型 String 不可移植
- SpecieKilled.code_name: 类型 String 不可移植
- VarsField.fieldName: 类型 String 不可移植
*/
