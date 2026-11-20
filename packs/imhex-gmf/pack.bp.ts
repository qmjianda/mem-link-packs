/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gmf.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Colors = struct("Colors", [
  u8("red", {  }),
  u8("green", {  }),
  u8("blue", {  }),
  pad(1),
]);

const PascalString = struct("PascalString", [
  u32("length", {  }),
]);

const BitmapData = struct("BitmapData", [
  bytes("type", { size: 2 }),
  u32("size", {  }),
]);

const SpriteBoundingBox = struct("SpriteBoundingBox", [
  u32("left", {  }),
  u32("right", {  }),
  u32("bottom", {  }),
  u32("top", {  }),
]);

const GameObjectAction = struct("GameObjectAction", [
  i32("version_verify", {  }),
  i32("action_id", { values: { "0": "EnumerateActions", "1": "EndAction", "101": "MoveFixed", "102": "ReverseHorizontal", "103": "ReverseVertical", "104": "JumpPosition", "105": "JumpRandom", "106": "Bounce", "111": "SetSpeedHorizontal", "112": "SetSpeedVertical", "121": "SetGravity", "122": "SetFriction", "131": "MoveFree", "201": "SetAlarm", "311": "InstanceCreate", "312": "InstanceDestroy", "313": "InstanceChange", "321": "PositionDestroy", "401": "Sound", "411": "ShowMessage", "421": "SetScore", "431": "DisplayHighscore", "501": "GoToRoom", "511": "EndGame", "521": "Sleep", "601": "ExitEvent", "701": "CheckPlaceFree", "702": "CheckInstanceNumber", "703": "CheckPlaceObject", "704": "CheckPlaceCollision", "721": "CheckQuestion", "751": "Else", "801": "CheckExpression", "811": "ExecuteCode", "821": "SetVariable", "901": "BlockStart", "902": "BlockEnd", "1001": "DrawImage", "1002": "DrawText", "1003": "SetFont" } }),
  i32("apply_to", {  }),
  bool("relative", {  }),
  pad(3),
  u32("param_count", {  }),
]);

const GameObjectSubEvent = struct("GameObjectSubEvent", [
  i32("subevent_number", {  }),
  i32("version_verify", {  }),
  u32("action_count", {  }),
]);

const GameSprite = struct("GameSprite", [
  i32("version_verify", {  }),
  i32("width", {  }),
  i32("height", {  }),
  record("bounding_box1", SpriteBoundingBox),
  u32("image_count", {  }),
]);

const GameObject = struct("GameObject", [
  i32("version_verify", {  }),
  record("name", PascalString),
  bool("solid", {  }),
  pad(3),
  bool("active", {  }),
  pad(3),
]);

const GameRoomView = struct("GameRoomView", [
  bool("enabled", {  }),
  pad(3),
]);

const GameRoomInstance = struct("GameRoomInstance", [
  i32("left", {  }),
  i32("top", {  }),
  i32("object_index", {  }),
]);

const GameRoom = struct("GameRoom", [
  u32("version_verify", {  }),
  record("name", PascalString),
  record("back_color1", Colors),
]);

const GameSound = struct("GameSound", [
  u32("version_verify", {  }),
  record("name", PascalString),
  u32("reserved", {  }),
  record("filename", PascalString),
  bool("allow_for_sound_effects", {  }),
  pad(3),
  u32("buffer_count", {  }),
]);

const GMF = struct("GMF", [
  u32("version", {  }),
  array("verification", "u32", 2),
  u32("version_verify_options", {  }),
  u32("option_count", {  }),
]);

export default definePack({
  name: "Game Maker 3.x data",
  endian: "little",
  pointerSize: 8,
  types: [Colors, PascalString, BitmapData, SpriteBoundingBox, GameObjectAction, GameObjectSubEvent, GameSprite, GameObject, GameRoomView, GameRoomInstance, GameRoom, GameSound, GMF],
  nodes: {
    "entry": structNode(GMF, { label: "GMF（入口）" }),
    "Colors": structNode(Colors, { label: "Colors" }),
    "PascalString": structNode(PascalString, { label: "PascalString" }),
    "BitmapData": structNode(BitmapData, { label: "BitmapData" }),
    "SpriteBoundingBox": structNode(SpriteBoundingBox, { label: "SpriteBoundingBox" }),
    "GameObjectAction": structNode(GameObjectAction, { label: "GameObjectAction" }),
    "GameObjectSubEvent": structNode(GameObjectSubEvent, { label: "GameObjectSubEvent" }),
    "GameSprite": structNode(GameSprite, { label: "GameSprite" }),
    "GameObject": structNode(GameObject, { label: "GameObject" }),
    "GameRoomView": structNode(GameRoomView, { label: "GameRoomView" }),
    "GameRoomInstance": structNode(GameRoomInstance, { label: "GameRoomInstance" }),
    "GameRoom": structNode(GameRoom, { label: "GameRoom" }),
    "GameSound": structNode(GameSound, { label: "GameSound" }),
  },
});

