/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fez.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const SevenBitEncodedIntByte = struct("SevenBitEncodedIntByte", [
  u8("byte", {  }),
]);

const Vector3 = struct("Vector3", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
]);

const TrileEmplacement = struct("TrileEmplacement", [
  i32("x", {  }),
  i32("y", {  }),
  i32("z", {  }),
]);

const WinConditions = struct("WinConditions", [
  i32("lockedDoorCount", {  }),
  i32("unlockedDoorCount", {  }),
  i32("chestCount", {  }),
  i32("cubeShardCount", {  }),
  i32("otherCollectibleCount", {  }),
  i32("splitUpCount", {  }),
]);

const FezSaveFile = struct("FezSaveFile", [
  i64("fileTime", {  }),
  i64("version", {  }),
]);

export default definePack({
  name: "FEZ Game Save File Format",
  endian: "little",
  pointerSize: 8,
  types: [SevenBitEncodedIntByte, Vector3, TrileEmplacement, WinConditions, FezSaveFile],
  nodes: {
    "entry": structNode(FezSaveFile, { label: "FezSaveFile（入口）" }),
    "SevenBitEncodedIntByte": structNode(SevenBitEncodedIntByte, { label: "SevenBitEncodedIntByte" }),
    "Vector3": structNode(Vector3, { label: "Vector3" }),
    "TrileEmplacement": structNode(TrileEmplacement, { label: "TrileEmplacement" }),
    "WinConditions": structNode(WinConditions, { label: "WinConditions" }),
  },
});


/*
未移植项：
- String.size: 类型 SevenBitEncodedInt 不可移植
*/
