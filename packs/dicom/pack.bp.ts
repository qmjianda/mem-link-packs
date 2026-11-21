/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/dicom
// 原始 pack：dicom · DICOM image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 1 个动态辅助节点；未移植 4 项（见文件末尾）
const DicomGroupLength = struct("DicomGroupLength", [
  u16("group", { endian: "little", label: "0x0002, the file meta group" }),
  u16("element", { endian: "little", label: "0x0000, the group length element" }),
  str("vr", { size: 2, label: "UL, a 32-bit unsigned long" }),
  u16("length", { endian: "little", label: "4" }),
  u32("groupLength", { endian: "little", label: "bytes of file meta group following this element" }),
]);

const DicomMetaVersion = struct("DicomMetaVersion", [
  u16("group", { endian: "little", label: "0x0002" }),
  u16("element", { endian: "little", label: "0x0001" }),
  str("vr", { size: 2, label: "OB, other byte - a binary VR, so the length is 32-bit" }),
  u16("reserved", { endian: "little", label: "reserved, zero" }),
  u32("length", { endian: "little", label: "2" }),
  bytes("version", { size: 2, label: "00 01" }),
]);

const DicomElement = struct("DicomElement", [
  u16("group", { endian: "little", label: "group number; 0x0002 for the file meta group" }),
  u16("element", { endian: "little", label: "element number within the group" }),
  str("vr", { size: 2, label: "value representation: UI a UID, SH short text, AE an application entity title" }),
  u16("length", { endian: "little", label: "bytes of value; always even, padded if need be" }),
]);

const Dicom = struct("Dicom", [
  bytes("preamble", { size: 128, label: "128 bytes DICOM ignores; zero, unless an application hid an image header here" }),
  str("magic", { size: 4, label: "DICM" }),
  record("groupLen", DicomGroupLength, { label: "(0002,0000) - how long the file meta group is" }),
  record("version", DicomMetaVersion, { label: "(0002,0001) - the one long-form element in the meta group" }),
]);

export default definePack({
  name: "DICOM",
  endian: "little",
  pointerSize: 4,
  types: [DicomGroupLength, DicomMetaVersion, DicomElement, Dicom],
  nodes: {
    "entry": structNode(Dicom, { label: "Dicom（入口）" }),
    "DicomGroupLength": structNode(DicomGroupLength, { label: "DicomGroupLength" }),
    "DicomMetaVersion": structNode(DicomMetaVersion, { label: "DicomMetaVersion" }),
    "DicomElement": structNode(DicomElement, { label: "DicomElement" }),
    "ptr_Dicom_decoded": calcNode({
      label: "Dicom.decoded（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 158 }),
    }),
  },
});


/*
未移植项：
- DicomElement.value: 变长字节块未移植
- DicomMetaElements: 没有可移植的固定前缀字段
- Dicom.metaGroup: 变长字节块未移植
- Dicom.restLen: computed 表达式依赖非标量字段，未生成 calc 辅助节点
*/
