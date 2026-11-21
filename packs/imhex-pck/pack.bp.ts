/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pck.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const LookUpTableValue = struct("LookUpTableValue", [
  i32("index", {  }),
]);

const LookUpTable = struct("LookUpTable", [
  i32("count", {  }),
]);

const Property = struct("Property", [
  i32("key", {  }),
]);

const AssetProperties = struct("AssetProperties", [
  i32("propertyCount", {  }),
]);

const Asset = struct("Asset", [
  record("properties", AssetProperties),
]);

const Assets = struct("Assets", [
  i32("count", {  }),
]);

const Pck = struct("Pck", [
  i32("version", {  }),
]);

export default definePack({
  name: "Minecraft LCE .pck files",
  endian: "little",
  pointerSize: 8,
  types: [LookUpTableValue, LookUpTable, Property, AssetProperties, Asset, Assets, Pck],
  nodes: {
    "entry": structNode(Pck, { label: "Pck（入口）" }),
    "LookUpTableValue": structNode(LookUpTableValue, { label: "LookUpTableValue" }),
    "LookUpTable": structNode(LookUpTable, { label: "LookUpTable" }),
    "Property": structNode(Property, { label: "Property" }),
    "AssetProperties": structNode(AssetProperties, { label: "AssetProperties" }),
    "Asset": structNode(Asset, { label: "Asset" }),
    "Assets": structNode(Assets, { label: "Assets" }),
  },
});


/*
未移植项：
- LookUpTableValue.value: 类型 string 不可移植
- Property.value: 类型 string 不可移植
- AssetEntry.size: 类型 type_Size32 不可移植
*/
