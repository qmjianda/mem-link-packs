/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/zstd
// 原始 pack：zstd · Zstandard v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 6 项（见文件末尾）
const ZstdBlockHeaderLow = struct("ZstdBlockHeaderLow", [
  bits("lastBlock", 1, { at: 0, bit: 0, unit: 1, label: "lastBlock" }),
  bits("blockType", 2, { at: 0, bit: 1, unit: 1, label: "blockType" }),
  bits("sizeLow", 5, { at: 0, bit: 3, unit: 1, label: "sizeLow" }),
]);

const ZstdBlock = struct("ZstdBlock", [
  record("header", ZstdBlockHeaderLow, { label: "last-block bit, block type, low size bits" }),
  u8("sizeMid", { endian: "little" }),
  u8("sizeHigh", { endian: "little" }),
]);

const ZstdFrameDescriptor = struct("ZstdFrameDescriptor", [
  bits("dictIdFlag", 2, { at: 0, bit: 0, unit: 1, label: "dictIdFlag" }),
  bits("contentChecksum", 1, { at: 0, bit: 2, unit: 1, label: "contentChecksum" }),
  bits("reserved", 1, { at: 0, bit: 3, unit: 1, label: "reserved" }),
  bits("unused", 1, { at: 0, bit: 4, unit: 1, label: "unused" }),
  bits("singleSegment", 1, { at: 0, bit: 5, unit: 1, label: "singleSegment" }),
  bits("frameContentSizeFlag", 2, { at: 0, bit: 6, unit: 1, label: "frameContentSizeFlag" }),
]);

const ZstdWindowDescriptor = struct("ZstdWindowDescriptor", [
  bits("mantissa", 3, { at: 0, bit: 0, unit: 1, label: "mantissa" }),
  bits("exponent", 5, { at: 0, bit: 3, unit: 1, label: "exponent" }),
]);

const ZstdFrame = struct("ZstdFrame", [
  u32("magic", { endian: "little", label: "0xFD2FB528" }),
  record("descriptor", ZstdFrameDescriptor, { label: "which optional header fields follow" }),
]);

export default definePack({
  name: "ZSTD",
  endian: "little",
  pointerSize: 4,
  types: [ZstdBlockHeaderLow, ZstdBlock, ZstdFrameDescriptor, ZstdWindowDescriptor, ZstdFrame],
  nodes: {
    "entry": structNode(ZstdBlock, { label: "ZstdBlock（入口）" }),
    "ZstdFrame": structNode(ZstdFrame, { label: "ZstdFrame" }),
    "flags_ZstdFrameDescriptor": structNode(ZstdFrameDescriptor, { label: "位域 ZstdFrameDescriptor" }),
    "flags_ZstdWindowDescriptor": structNode(ZstdWindowDescriptor, { label: "位域 ZstdWindowDescriptor" }),
    "flags_ZstdBlockHeaderLow": structNode(ZstdBlockHeaderLow, { label: "位域 ZstdBlockHeaderLow" }),
  },
});


/*
未移植项：
- ZstdBlock.blockSize: computed 字段未移植
- ZstdBlock.content: 条件字段未移植，后续布局在此停止
- ZstdFrame.windowDescriptor: 条件字段未移植，后续布局在此停止
- Zstd.frames: repeat 字段未移植，后续布局在此停止
- Zstd: 没有可移植的固定前缀字段
- 入口 struct Zstd 没有可移植字段，改用 ZstdBlock
*/
