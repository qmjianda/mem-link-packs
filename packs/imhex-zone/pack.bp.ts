/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/zone.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const u4 = struct("u4", [
  bits("low", 4, { at: 0, bit: 0, unit: 1, label: "low" }),
  bits("high", 4, { at: 0, bit: 4, unit: 1, label: "high" }),
]);

const InfdevZone_Slot_Properties = struct("InfdevZone_Slot_Properties", [
  bits("unused", 63, { at: 0, bit: 0, unit: 8, label: "unused" }),
  bits("terrainPopulated", 1, { at: 0, bit: 63, unit: 8, label: "terrainPopulated" }),
]);

const InfdevZone_Slot_Header = struct("InfdevZone_Slot_Header", [
  i32("x", {  }),
  i32("z", {  }),
  i64("inhabitedTime", {  }),
]);

const InfdevZone_Slot_Slot = struct("InfdevZone_Slot_Slot", [
  record("header", InfdevZone_Slot_Header),
]);

const InfdevZone_ZoneFile_Header = struct("InfdevZone_ZoneFile_Header", [
  i32("magic", {  }),
]);

const InfdevZone_ZoneFile_ZoneFile = struct("InfdevZone_ZoneFile_ZoneFile", [
  record("header", InfdevZone_ZoneFile_Header),
]);

export default definePack({
  name: "Minecraft Infdev 20100624 Zone File",
  endian: "big",
  pointerSize: 8,
  types: [u4, InfdevZone_Slot_Properties, InfdevZone_Slot_Header, InfdevZone_Slot_Slot, InfdevZone_ZoneFile_Header, InfdevZone_ZoneFile_ZoneFile],
  nodes: {
    "entry": structNode(InfdevZone_ZoneFile_ZoneFile, { label: "InfdevZone_ZoneFile_ZoneFile（入口）" }),
    "u4": structNode(u4, { label: "u4" }),
    "InfdevZone_Slot_Properties": structNode(InfdevZone_Slot_Properties, { label: "InfdevZone_Slot_Properties" }),
    "InfdevZone_Slot_Header": structNode(InfdevZone_Slot_Header, { label: "InfdevZone_Slot_Header" }),
    "InfdevZone_Slot_Slot": structNode(InfdevZone_Slot_Slot, { label: "InfdevZone_Slot_Slot" }),
    "InfdevZone_ZoneFile_Header": structNode(InfdevZone_ZoneFile_Header, { label: "InfdevZone_ZoneFile_Header" }),
  },
});


/*
未移植项：
- InfdevZone_Slot_Header.properties: 类型 Properties 不可移植
*/
