/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bastion/map.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；含 1 个动态辅助节点；未移植 3 项（见文件末尾）
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
    "read_varint": calcNode({
      label: '读 Varint / LEB128',
      description: '按地址解码 1–9 字节无符号 LEB128；有符号字段请用 sLEB128 变体',
      inputs: { address: 'number' },
      outputs: { value: 'number', bytes: 'number' },
      run: ({ address }, ctx) => {
        let value = 0;
        for (let i = 0; i < 9; i += 1) {
          const b = ctx.mem.u8(Number(address) + i);
          if (i === 8) return { value: value * 256 + b, bytes: 9 };
          value = value * 128 + (b & 0x7f);
          if ((b & 0x80) === 0) return { value, bytes: i + 1 };
        }
        return { value, bytes: 9 };
      },
    }),
  },
});


/*
未移植项：
- varint/LEB128: 已生成 read_varint 辅助节点
- TerrainLightData.texture: 变长 StringLEB128 已生成 read_varint 辅助节点，静态布局在此停止
- BloomSettings.name: 变长 StringLEB128 已生成 read_varint 辅助节点，静态布局在此停止
*/
