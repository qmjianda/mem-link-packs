/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/openexr
// 原始 pack：openexr · OpenEXR image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 3 项（见文件末尾）
const ExrVersion = struct("ExrVersion", [
  bits("version", 8, { at: 0, bit: 0, unit: 4, label: "version" }),
  bits("tiled", 1, { at: 0, bit: 9, unit: 4, label: "tiled" }),
  bits("longNames", 1, { at: 0, bit: 10, unit: 4, label: "longNames" }),
  bits("nonImage", 1, { at: 0, bit: 11, unit: 4, label: "nonImage" }),
  bits("multiPart", 1, { at: 0, bit: 12, unit: 4, label: "multiPart" }),
]);

const Exr = struct("Exr", [
  bytes("magic", { size: 4, label: "76 2F 31 01, the OpenEXR magic" }),
  record("version", ExrVersion, { label: "version number in the low byte, feature flags above it" }),
]);

export default definePack({
  name: "EXR",
  endian: "little",
  pointerSize: 4,
  types: [ExrVersion, Exr],
  nodes: {
    "entry": structNode(Exr, { label: "Exr（入口）" }),
    "flags_ExrVersion": structNode(ExrVersion, { label: "位域 ExrVersion" }),
  },
});


/*
未移植项：
- ExrAttribute.name: cstring 变长字段未移植，后续布局在此停止
- ExrAttribute: 没有可移植的固定前缀字段
- Exr.attributes: 元素类型 ExrAttribute 不可移植
*/
