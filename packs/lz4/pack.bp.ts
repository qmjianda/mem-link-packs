/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/lz4
// 原始 pack：lz4 · LZ4 frame v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 2 个动态辅助节点；未移植 5 项（见文件末尾）
const Lz4BlockSize = struct("Lz4BlockSize", [
  bits("size", 31, { at: 0, bit: 0, unit: 4, label: "size" }),
  bits("uncompressed", 1, { at: 0, bit: 31, unit: 4, label: "uncompressed" }),
]);

const Lz4Block = struct("Lz4Block", [
  record("header", Lz4BlockSize, { label: "size and stored flag" }),
]);

const Lz4CheckedBlock = struct("Lz4CheckedBlock", [
  record("header", Lz4BlockSize, { label: "size and stored flag" }),
]);

const Lz4Flags = struct("Lz4Flags", [
  bits("dictId", 1, { at: 0, bit: 0, unit: 1, label: "dictId" }),
  bits("reserved", 1, { at: 0, bit: 1, unit: 1, label: "reserved" }),
  bits("contentChecksum", 1, { at: 0, bit: 2, unit: 1, label: "contentChecksum" }),
  bits("contentSize", 1, { at: 0, bit: 3, unit: 1, label: "contentSize" }),
  bits("blockChecksum", 1, { at: 0, bit: 4, unit: 1, label: "blockChecksum" }),
  bits("blockIndependence", 1, { at: 0, bit: 5, unit: 1, label: "blockIndependence" }),
  bits("version", 2, { at: 0, bit: 6, unit: 1, label: "version" }),
]);

const Lz4BlockDescriptor = struct("Lz4BlockDescriptor", [
  bits("blockMaxSize", 3, { at: 0, bit: 4, unit: 1, label: "blockMaxSize" }),
]);

const Lz4Frame = struct("Lz4Frame", [
  u32("magic", { endian: "little", label: "0x184D2204" }),
  record("flags", Lz4Flags, { label: "frame descriptor flags" }),
  record("blockDescriptor", Lz4BlockDescriptor, { label: "maximum block size" }),
]);

export default definePack({
  name: "LZ4",
  endian: "little",
  pointerSize: 4,
  types: [Lz4BlockSize, Lz4Block, Lz4CheckedBlock, Lz4Flags, Lz4BlockDescriptor, Lz4Frame],
  nodes: {
    "entry": structNode(Lz4Frame, { label: "Lz4Frame（入口）" }),
    "Lz4Block": structNode(Lz4Block, { label: "Lz4Block" }),
    "Lz4CheckedBlock": structNode(Lz4CheckedBlock, { label: "Lz4CheckedBlock" }),
    "flags_Lz4Flags": structNode(Lz4Flags, { label: "位域 Lz4Flags" }),
    "flags_Lz4BlockDescriptor": structNode(Lz4BlockDescriptor, { label: "位域 Lz4BlockDescriptor" }),
    "flags_Lz4BlockSize": structNode(Lz4BlockSize, { label: "位域 Lz4BlockSize" }),
    "list_Lz4Frame_blocks": listNode(Lz4Block, {
      label: "Lz4Frame.blocks（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => { if ((e.value["dataLen"] == 0)) return null; return e.addr + Lz4Block.size; },
      max: 4096,
    }),
    "list_Lz4Frame_checkedBlocks": listNode(Lz4CheckedBlock, {
      label: "Lz4Frame.checkedBlocks（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => { if ((e.value["dataLen"] == 0)) return null; return e.addr + Lz4CheckedBlock.size; },
      max: 4096,
    }),
  },
});


/*
未移植项：
- Lz4Block.data: 变长字节块未移植
- Lz4Block.dataLen: computed 表达式依赖非标量字段，未生成 calc 辅助节点
- Lz4CheckedBlock.data: 变长字节块未移植
- Lz4CheckedBlock.dataLen: computed 表达式依赖非标量字段，未生成 calc 辅助节点
- Lz4Frame.contentSize: 条件字段未移植，后续布局在此停止
*/
