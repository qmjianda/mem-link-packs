/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/java-class
// 原始 pack：java-class · Java class file v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 16 个动态辅助节点；未移植 1 项（见文件末尾）
const CpUtf8 = struct("CpUtf8", [
  u16("length", { endian: "big" }),
]);

const CpRef = struct("CpRef", [
  u16("classIndex", { endian: "big" }),
  u16("nameTypeIndex", { endian: "big", label: "class/field/method reference" }),
]);

const CpIndex1 = struct("CpIndex1", [
  u16("index", { endian: "big", label: "single constant-pool index" }),
]);

const CpMethodHandle = struct("CpMethodHandle", [
  u8("refKind", { endian: "big" }),
  u16("refIndex", { endian: "big", label: "method handle" }),
]);

const CpInfo = struct("CpInfo", [
  u8("tag", { endian: "big", label: "constant type tag" }),
]);

const ClassAccess = struct("ClassAccess", [
  bits("public", 1, { at: 0, bit: 0, unit: 2, label: "public" }),
  bits("final", 1, { at: 0, bit: 4, unit: 2, label: "final" }),
  bits("super", 1, { at: 0, bit: 5, unit: 2, label: "super" }),
  bits("interface", 1, { at: 0, bit: 9, unit: 2, label: "interface" }),
  bits("abstract", 1, { at: 0, bit: 10, unit: 2, label: "abstract" }),
  bits("synthetic", 1, { at: 0, bit: 12, unit: 2, label: "synthetic" }),
  bits("annotation", 1, { at: 0, bit: 13, unit: 2, label: "annotation" }),
  bits("isEnum", 1, { at: 0, bit: 14, unit: 2, label: "isEnum" }),
  bits("module", 1, { at: 0, bit: 15, unit: 2, label: "module" }),
]);

const ClassFile = struct("ClassFile", [
  str("magic", { size: 4, label: "magic CAFEBABE" }),
  u16("minor", { endian: "big", label: "minor version" }),
  u16("major", { endian: "big", label: "major version (52 = Java 8, 61 = Java 17)" }),
  u16("cpCount", { endian: "big", label: "constant pool count (entries = count - 1)" }),
]);

const Elem_u16 = struct("u16Value", [
  u16('value', { endian: "big" }),
]);

export default definePack({
  name: "Java class",
  endian: "big",
  pointerSize: 4,
  types: [CpUtf8, CpRef, CpIndex1, CpMethodHandle, CpInfo, ClassAccess, ClassFile, Elem_u16],
  nodes: {
    "entry": structNode(ClassFile, { label: "ClassFile（入口）" }),
    "CpUtf8": structNode(CpUtf8, { label: "CpUtf8" }),
    "CpRef": structNode(CpRef, { label: "CpRef" }),
    "CpIndex1": structNode(CpIndex1, { label: "CpIndex1" }),
    "CpMethodHandle": structNode(CpMethodHandle, { label: "CpMethodHandle" }),
    "CpInfo": structNode(CpInfo, { label: "CpInfo" }),
    "flags_ClassAccess": structNode(ClassAccess, { label: "位域 ClassAccess" }),
    "match_CpInfo_info_1": structNode(CpUtf8, { label: "CpInfo.info · match 1" }),
    "match_CpInfo_info_7": structNode(CpIndex1, { label: "CpInfo.info · match 7" }),
    "match_CpInfo_info_8": structNode(CpIndex1, { label: "CpInfo.info · match 8" }),
    "match_CpInfo_info_9": structNode(CpRef, { label: "CpInfo.info · match 9" }),
    "match_CpInfo_info_10": structNode(CpRef, { label: "CpInfo.info · match 10" }),
    "match_CpInfo_info_11": structNode(CpRef, { label: "CpInfo.info · match 11" }),
    "match_CpInfo_info_12": structNode(CpRef, { label: "CpInfo.info · match 12" }),
    "match_CpInfo_info_15": structNode(CpMethodHandle, { label: "CpInfo.info · match 15" }),
    "match_CpInfo_info_16": structNode(CpIndex1, { label: "CpInfo.info · match 16" }),
    "match_CpInfo_info_17": structNode(CpRef, { label: "CpInfo.info · match 17" }),
    "match_CpInfo_info_18": structNode(CpRef, { label: "CpInfo.info · match 18" }),
    "match_CpInfo_info_19": structNode(CpIndex1, { label: "CpInfo.info · match 19" }),
    "match_CpInfo_info_20": structNode(CpIndex1, { label: "CpInfo.info · match 20" }),
    "calc_ClassFile_cpEntries": calcNode({
      label: "ClassFile.cpEntries（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "cpCount": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["cpCount"] ?? 0) - 1) }),
    }),
    "array_ClassFile_constantPool": arrayNode(CpInfo, {
      label: "ClassFile.constantPool（动态数组）",
      description: "count 来自 ClassFile.cpEntries；address 指向数组首元素",
    }),
    "array_ClassFile_interfaces": arrayNode(Elem_u16, {
      label: "ClassFile.interfaces（动态数组）",
      description: "count 来自 ClassFile.interfaceCount；address 指向数组首元素",
    }),
  },
});


/*
未移植项：
- CpUtf8.text: 变长字符串未移植
*/
