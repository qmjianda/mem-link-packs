/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bastion/map.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const AiData = struct("AiData", [
  bool("use_target_ai", {  }),
  bool("use_move_ai", {  }),
  bool("use_attack_ai", {  }),
]);

const OrthoData = struct("OrthoData", [
  bool("horizontal", {  }),
  bool("vertical", {  }),
]);

const UnexploredData = struct("UnexploredData", [
  f32("contrast", {  }),
  f32("saturation", {  }),
]);

const RefractData = struct("RefractData", [
  f32("rate", {  }),
  f32("amount", {  }),
]);

const ScrollData = struct("ScrollData", [
  f32("speed", {  }),
  f32("angle", {  }),
]);

const MapThing = struct("MapThing", [
  i32("version", {  }),
]);

const MapThingGroup = struct("MapThingGroup", [
  i32("version", {  }),
]);

const TerrainLayerData = struct("TerrainLayerData", [
  i32("version", {  }),
]);

const SpawnData = struct("SpawnData", [
  i32("version", {  }),
]);

const SpawnWaveData = struct("SpawnWaveData", [
  i32("version", {  }),
]);

const SpawnPointData = struct("SpawnPointData", [
  i32("version", {  }),
]);

const MapData = struct("MapData", [
  i32("version", {  }),
]);

export default definePack({
  name: "Map",
  endian: "little",
  pointerSize: 8,
  types: [AiData, OrthoData, UnexploredData, RefractData, ScrollData, MapThing, MapThingGroup, TerrainLayerData, SpawnData, SpawnWaveData, SpawnPointData, MapData],
  nodes: {
    "entry": structNode(MapData, { label: "MapData（入口）" }),
    "AiData": structNode(AiData, { label: "AiData" }),
    "OrthoData": structNode(OrthoData, { label: "OrthoData" }),
    "UnexploredData": structNode(UnexploredData, { label: "UnexploredData" }),
    "RefractData": structNode(RefractData, { label: "RefractData" }),
    "ScrollData": structNode(ScrollData, { label: "ScrollData" }),
    "MapThing": structNode(MapThing, { label: "MapThing" }),
    "MapThingGroup": structNode(MapThingGroup, { label: "MapThingGroup" }),
    "TerrainLayerData": structNode(TerrainLayerData, { label: "TerrainLayerData" }),
    "SpawnData": structNode(SpawnData, { label: "SpawnData" }),
    "SpawnWaveData": structNode(SpawnWaveData, { label: "SpawnWaveData" }),
    "SpawnPointData": structNode(SpawnPointData, { label: "SpawnPointData" }),
  },
});


/*
未移植项：
- TerrainLightData.texture: 类型 StringLEB128 不可移植
- BloomSettings.name: 类型 StringLEB128 不可移植
*/
