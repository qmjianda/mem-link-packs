/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/flac
// 原始 pack：flac · FLAC audio v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 3 项（见文件末尾）
const FlacBlockHeader = struct("FlacBlockHeader", [
  bits("blockType", 7, { at: 0, bit: 0, unit: 1, label: "blockType" }),
  bits("lastBlock", 1, { at: 0, bit: 7, unit: 1, label: "lastBlock" }),
]);

const FlacBlock = struct("FlacBlock", [
  record("header", FlacBlockHeader, { label: "bit7 = last block, bits0-6 = type (0 = STREAMINFO)" }),
  u8("lenHi", { endian: "big", label: "length byte (high)" }),
  u8("lenMid", { endian: "big", label: "length byte (mid)" }),
  u8("lenLo", { endian: "big", label: "length byte (low)" }),
]);

const Flac = struct("Flac", [
  str("magic", { size: 4, label: "magic 'fLaC'" }),
]);

export default definePack({
  name: "FLAC",
  endian: "big",
  pointerSize: 4,
  types: [FlacBlockHeader, FlacBlock, Flac],
  nodes: {
    "entry": structNode(Flac, { label: "Flac（入口）" }),
    "FlacBlock": structNode(FlacBlock, { label: "FlacBlock" }),
    "flags_FlacBlockHeader": structNode(FlacBlockHeader, { label: "位域 FlacBlockHeader" }),
  },
});


/*
未移植项：
- FlacBlock.length: computed 字段未移植
- FlacBlock.data: 变长字节块未移植
- Flac.blocks: repeat 字段未移植，后续布局在此停止
*/
