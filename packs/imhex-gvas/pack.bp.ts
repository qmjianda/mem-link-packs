/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gvas.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const FString = struct("FString", [
  i32("length", {  }),
]);

const FEngineVersion = struct("FEngineVersion", [
  u16("major", {  }),
  u16("minor", {  }),
  u16("patch", {  }),
  u32("changeList", {  }),
  record("branch", FString),
]);

const FGuid = struct("FGuid", [
  bits("a", 32, { at: 0, bit: 0, unit: 8, label: "a" }),
  bits("b_lo", 16, { at: 0, bit: 32, unit: 8, label: "b_lo" }),
  bits("b_hi", 16, { at: 0, bit: 48, unit: 8, label: "b_hi" }),
]);

const FFormatArgumentValue = struct("FFormatArgumentValue", [
  u8("type", { values: { "0": "Int", "1": "UInt", "2": "Float", "3": "Double", "4": "Text", "5": "Gender" } }),
]);

const FFormatArgumentData = struct("FFormatArgumentData", [
  record("name", FString),
  record("value", FFormatArgumentValue),
]);

const FTextHistory = struct("FTextHistory", [
  u8("type", { values: { "255": "None", "0": "Base", "1": "NamedFormat", "2": "OrderedFormat", "3": "ArgumentFormat", "4": "AsNumber", "5": "AsPercent", "6": "AsCurrency", "7": "AsDate", "8": "AsTime", "9": "AsDateTime", "10": "Transform", "11": "StringTableEntry", "12": "TextGenerator" } }),
]);

const FText = struct("FText", [
  u32("flags", {  }),
]);

const DateTime = struct("DateTime", [
  u64("ticks", {  }),
]);

const GameplayTagContainer = struct("GameplayTagContainer", [
  u32("count", {  }),
]);

const IntPoint = struct("IntPoint", [
  i32("x", {  }),
  i32("y", {  }),
]);

const LinearColor = struct("LinearColor", [
  f32("r", {  }),
  f32("g", {  }),
  f32("b", {  }),
  f32("a", {  }),
]);

const Timespan = struct("Timespan", [
  u64("ticks", {  }),
]);

const Vector2D = struct("Vector2D", [
  f64("x", {  }),
  f64("y", {  }),
]);

const Delegate = struct("Delegate", [
  record("object", FString),
  record("functionName", FString),
]);

const MulticastInlineDelegate = struct("MulticastInlineDelegate", [
  u32("count", {  }),
]);

const MulticastSparseDelegate = struct("MulticastSparseDelegate", [
  u32("count", {  }),
]);

const SoftObject = struct("SoftObject", [
  record("asset_path", FString),
]);

const PropertyTagFlags = struct("PropertyTagFlags", [
  bits("hasArrayIndex", 1, { at: 0, bit: 0, unit: 1, label: "hasArrayIndex" }),
  bits("hasPropertyGuid", 1, { at: 0, bit: 1, unit: 1, label: "hasPropertyGuid" }),
  bits("hasPropertyExtensions", 1, { at: 0, bit: 2, unit: 1, label: "hasPropertyExtensions" }),
  bits("hasBinaryOrNativeSerialize", 1, { at: 0, bit: 3, unit: 1, label: "hasBinaryOrNativeSerialize" }),
  bits("boolTrue", 1, { at: 0, bit: 4, unit: 1, label: "boolTrue" }),
]);

const TypeTreeNode = struct("TypeTreeNode", [
  record("name", FString),
  u32("children", {  }),
]);

export default definePack({
  name: "Unreal Engine Save Game",
  endian: "little",
  pointerSize: 8,
  types: [FString, FEngineVersion, FGuid, FFormatArgumentValue, FFormatArgumentData, FTextHistory, FText, DateTime, GameplayTagContainer, IntPoint, LinearColor, Timespan, Vector2D, Delegate, MulticastInlineDelegate, MulticastSparseDelegate, SoftObject, PropertyTagFlags, TypeTreeNode],
  nodes: {
    "entry": structNode(FString, { label: "FString（入口）" }),
    "FEngineVersion": structNode(FEngineVersion, { label: "FEngineVersion" }),
    "FGuid": structNode(FGuid, { label: "FGuid" }),
    "FFormatArgumentValue": structNode(FFormatArgumentValue, { label: "FFormatArgumentValue" }),
    "FFormatArgumentData": structNode(FFormatArgumentData, { label: "FFormatArgumentData" }),
    "FTextHistory": structNode(FTextHistory, { label: "FTextHistory" }),
    "FText": structNode(FText, { label: "FText" }),
    "DateTime": structNode(DateTime, { label: "DateTime" }),
    "GameplayTagContainer": structNode(GameplayTagContainer, { label: "GameplayTagContainer" }),
    "IntPoint": structNode(IntPoint, { label: "IntPoint" }),
    "LinearColor": structNode(LinearColor, { label: "LinearColor" }),
    "Timespan": structNode(Timespan, { label: "Timespan" }),
    "Vector2D": structNode(Vector2D, { label: "Vector2D" }),
    "Delegate": structNode(Delegate, { label: "Delegate" }),
    "MulticastInlineDelegate": structNode(MulticastInlineDelegate, { label: "MulticastInlineDelegate" }),
    "MulticastSparseDelegate": structNode(MulticastSparseDelegate, { label: "MulticastSparseDelegate" }),
    "SoftObject": structNode(SoftObject, { label: "SoftObject" }),
    "PropertyTagFlags": structNode(PropertyTagFlags, { label: "PropertyTagFlags" }),
    "TypeTreeNode": structNode(TypeTreeNode, { label: "TypeTreeNode" }),
  },
});


/*
未移植项：
- Guid.integer: 类型 u128 不可移植
- FCustomVersion.key: 类型 Guid 不可移植
- FPropertyTag.auto: 类型 const 不可移植
*/
