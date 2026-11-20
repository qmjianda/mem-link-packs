/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gmd.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const RGBA8 = struct("RGBA8", [
  u8("red", {  }),
  u8("green", {  }),
  u8("blue", {  }),
  pad(1),
]);

const BGR8 = struct("BGR8", [
  u8("blue", {  }),
  u8("green", {  }),
  u8("red", {  }),
]);

const RLEImageDataRow = struct("RLEImageDataRow", [
  u32("segment_count", {  }),
]);

const RLEImage = struct("RLEImage", [
  u32("width", {  }),
  u32("height", {  }),
]);

const RLEImageColorTabledDataRow = struct("RLEImageColorTabledDataRow", [
  u32("segment_count", {  }),
]);

const RLEImageColorTabled = struct("RLEImageColorTabled", [
  u32("color_count", {  }),
]);

const PascalString = struct("PascalString", [
  u32("length", {  }),
]);

const BitmapData = struct("BitmapData", [
  i32("bmType", {  }),
]);

const BoundingBox = struct("BoundingBox", [
  u32("left", {  }),
  u32("right", {  }),
  u32("bottom", {  }),
  u32("top", {  }),
]);

const RectRegion = struct("RectRegion", [
  i32("left", {  }),
  i32("top", {  }),
  i32("width", {  }),
  i32("height", {  }),
]);

const ActionFlags = struct("ActionFlags", [
  bits("has_name", 1, { at: 0, bit: 0, unit: 1, label: "has_name" }),
  bits("expression", 1, { at: 0, bit: 1, unit: 1, label: "expression" }),
]);

const GameObjectAction = struct("GameObjectAction", [
  i32("version_verify", {  }),
]);

const GameObjectSubEvent = struct("GameObjectSubEvent", [
  i32("subevent_number", {  }),
  i32("version_verify", {  }),
  u32("action_count", {  }),
]);

const Sprite = struct("Sprite", [
  bool("data_present", {  }),
  pad(3),
]);

const Background = struct("Background", [
  bool("data_present", {  }),
  pad(3),
]);

const PathPoint = struct("PathPoint", [
  f64("x", {  }),
  f64("y", {  }),
  f64("speed", {  }),
]);

const Path = struct("Path", [
  bool("data_present", {  }),
  pad(3),
]);

const Script = struct("Script", [
  bool("data_present", {  }),
  pad(3),
]);

const DataFile = struct("DataFile", [
  bool("data_present", {  }),
  pad(3),
]);

const Font = struct("Font", [
  bool("data_present", {  }),
  pad(3),
]);

const Timeline = struct("Timeline", [
  bool("data_present", {  }),
  pad(3),
]);

const GameObject = struct("GameObject", [
  bool("data_present", {  }),
  pad(3),
]);

const RoomView = struct("RoomView", [
  bool("enabled", {  }),
  pad(3),
  i32("x", {  }),
  i32("y", {  }),
  u32("width", {  }),
  u32("height", {  }),
]);

const RoomBackground = struct("RoomBackground", [
  bool("enabled", {  }),
  pad(3),
  bool("foreground", {  }),
  pad(3),
  i32("background_index", {  }),
  i32("x", {  }),
  i32("y", {  }),
  bool("tile_horiz", {  }),
  pad(3),
  bool("tile_vert", {  }),
  pad(3),
  i32("hspeed", {  }),
  i32("vspeed", {  }),
]);

const RoomInstance = struct("RoomInstance", [
  i32("x", {  }),
  i32("y", {  }),
  i32("object_index", {  }),
  i32("id", {  }),
]);

const RoomTile = struct("RoomTile", [
  i32("x", {  }),
  i32("y", {  }),
  i32("tileset_index", {  }),
  record("region", RectRegion),
  i32("depth", {  }),
  i32("id", {  }),
]);

const Room = struct("Room", [
  bool("data_present", {  }),
  pad(3),
]);

const SoundAudioEffects = struct("SoundAudioEffects", [
  bits("chorus", 1, { at: 0, bit: 0, unit: 1, label: "chorus" }),
  bits("echo", 1, { at: 0, bit: 1, unit: 1, label: "echo" }),
  bits("flanger", 1, { at: 0, bit: 2, unit: 1, label: "flanger" }),
  bits("gargle", 1, { at: 0, bit: 3, unit: 1, label: "gargle" }),
  bits("reverb", 1, { at: 0, bit: 4, unit: 1, label: "reverb" }),
]);

const Sound = struct("Sound", [
  bool("data_present", {  }),
  pad(3),
]);

const GameConstant = struct("GameConstant", [
  record("name", PascalString),
  record("value", PascalString),
]);

const GameOptions = struct("GameOptions", [
  i32("version_verify", {  }),
  bool("fullscreen_startup", {  }),
  pad(3),
]);

const GameInformation = struct("GameInformation", [
  i32("version_verify", {  }),
  record("back_color", RGBA8),
]);

const TreeNode = struct("TreeNode", [
  u32("type", { values: { "0": "None", "1": "Folder", "2": "Subfolder", "3": "Data" } }),
  u32("subtype", { values: { "0": "None", "1": "Object", "2": "Sprite", "3": "Sound", "4": "Room", "6": "Background", "7": "Script", "8": "Path", "9": "DataFile", "10": "GameInfo", "11": "GameOptions", "12": "TimeLine" } }),
  u32("uid", {  }),
  record("node_name", PascalString),
  u32("child_count", {  }),
]);

const GMD = struct("GMD", [
  i32("signature", {  }),
  i32("ide_version", {  }),
]);

export default definePack({
  name: "Game Maker 4.0-6.1A data (GMD/GMR/GM6)",
  endian: "little",
  pointerSize: 8,
  types: [RGBA8, BGR8, RLEImageDataRow, RLEImage, RLEImageColorTabledDataRow, RLEImageColorTabled, PascalString, BitmapData, BoundingBox, RectRegion, ActionFlags, GameObjectAction, GameObjectSubEvent, Sprite, Background, PathPoint, Path, Script, DataFile, Font, Timeline, GameObject, RoomView, RoomBackground, RoomInstance, RoomTile, Room, SoundAudioEffects, Sound, GameConstant, GameOptions, GameInformation, TreeNode, GMD],
  nodes: {
    "entry": structNode(GMD, { label: "GMD（入口）" }),
    "RGBA8": structNode(RGBA8, { label: "RGBA8" }),
    "BGR8": structNode(BGR8, { label: "BGR8" }),
    "RLEImageDataRow": structNode(RLEImageDataRow, { label: "RLEImageDataRow" }),
    "RLEImage": structNode(RLEImage, { label: "RLEImage" }),
    "RLEImageColorTabledDataRow": structNode(RLEImageColorTabledDataRow, { label: "RLEImageColorTabledDataRow" }),
    "RLEImageColorTabled": structNode(RLEImageColorTabled, { label: "RLEImageColorTabled" }),
    "PascalString": structNode(PascalString, { label: "PascalString" }),
    "BitmapData": structNode(BitmapData, { label: "BitmapData" }),
    "BoundingBox": structNode(BoundingBox, { label: "BoundingBox" }),
    "RectRegion": structNode(RectRegion, { label: "RectRegion" }),
    "ActionFlags": structNode(ActionFlags, { label: "ActionFlags" }),
    "GameObjectAction": structNode(GameObjectAction, { label: "GameObjectAction" }),
    "GameObjectSubEvent": structNode(GameObjectSubEvent, { label: "GameObjectSubEvent" }),
    "Sprite": structNode(Sprite, { label: "Sprite" }),
    "Background": structNode(Background, { label: "Background" }),
    "PathPoint": structNode(PathPoint, { label: "PathPoint" }),
    "Path": structNode(Path, { label: "Path" }),
    "Script": structNode(Script, { label: "Script" }),
    "DataFile": structNode(DataFile, { label: "DataFile" }),
    "Font": structNode(Font, { label: "Font" }),
    "Timeline": structNode(Timeline, { label: "Timeline" }),
    "GameObject": structNode(GameObject, { label: "GameObject" }),
    "RoomView": structNode(RoomView, { label: "RoomView" }),
    "RoomBackground": structNode(RoomBackground, { label: "RoomBackground" }),
    "RoomInstance": structNode(RoomInstance, { label: "RoomInstance" }),
    "RoomTile": structNode(RoomTile, { label: "RoomTile" }),
    "Room": structNode(Room, { label: "Room" }),
    "SoundAudioEffects": structNode(SoundAudioEffects, { label: "SoundAudioEffects" }),
    "Sound": structNode(Sound, { label: "Sound" }),
    "GameConstant": structNode(GameConstant, { label: "GameConstant" }),
    "GameOptions": structNode(GameOptions, { label: "GameOptions" }),
    "GameInformation": structNode(GameInformation, { label: "GameInformation" }),
    "TreeNode": structNode(TreeNode, { label: "TreeNode" }),
  },
});

