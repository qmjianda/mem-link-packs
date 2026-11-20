/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/lz4.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const FLG = struct("FLG", [
  bits("dictionary_id_present", 1, { at: 0, bit: 0, unit: 1, label: "dictionary_id_present" }),
  bits("reserved_1", 1, { at: 0, bit: 1, unit: 1, label: "reserved_1" }),
  bits("content_checksum_present", 1, { at: 0, bit: 2, unit: 1, label: "content_checksum_present" }),
  bits("content_size_present", 1, { at: 0, bit: 3, unit: 1, label: "content_size_present" }),
  bits("block_checksum_present", 1, { at: 0, bit: 4, unit: 1, label: "block_checksum_present" }),
  bits("block_independence", 1, { at: 0, bit: 5, unit: 1, label: "block_independence" }),
  bits("version", 2, { at: 0, bit: 6, unit: 1, label: "version" }),
]);

const BD = struct("BD", [
  bits("reserved_0", 4, { at: 0, bit: 0, unit: 1, label: "reserved_0" }),
  bits("block_max_size", 3, { at: 0, bit: 4, unit: 1, label: "block_max_size" }),
  bits("reserved_7", 1, { at: 0, bit: 7, unit: 1, label: "reserved_7" }),
]);

const FrameDescriptor = struct("FrameDescriptor", [
  record("flg", FLG),
  record("bd", BD),
]);

const BlockSize = struct("BlockSize", [
  bits("size", 31, { at: 0, bit: 0, unit: 4, label: "size" }),
  bits("uncompressed", 1, { at: 0, bit: 31, unit: 4, label: "uncompressed" }),
]);

const StandardFrame = struct("StandardFrame", [
  record("descriptor", FrameDescriptor),
]);

const SkippableFrame = struct("SkippableFrame", [
  u32("frame_size", {  }),
]);

const LegacyBlock = struct("LegacyBlock", [
  u32("compressed_size", {  }),
]);

const Frame = struct("Frame", [
  u32("magic", { values: { "407708164": "Standard", "407642370": "Legacy", "407710288": "Skippable_0", "407710289": "Skippable_1", "407710290": "Skippable_2", "407710291": "Skippable_3", "407710292": "Skippable_4", "407710293": "Skippable_5", "407710294": "Skippable_6", "407710295": "Skippable_7", "407710296": "Skippable_8", "407710297": "Skippable_9", "407710298": "Skippable_A", "407710299": "Skippable_B", "407710300": "Skippable_C", "407710301": "Skippable_D", "407710302": "Skippable_E", "407710303": "Skippable_F" } }),
]);

export default definePack({
  name: "LZ4 Frame Format",
  endian: "little",
  pointerSize: 8,
  types: [FLG, BD, FrameDescriptor, BlockSize, StandardFrame, SkippableFrame, LegacyBlock, Frame],
  nodes: {
    "entry": structNode(Frame, { label: "Frame（入口）" }),
    "FLG": structNode(FLG, { label: "FLG" }),
    "BD": structNode(BD, { label: "BD" }),
    "FrameDescriptor": structNode(FrameDescriptor, { label: "FrameDescriptor" }),
    "BlockSize": structNode(BlockSize, { label: "BlockSize" }),
    "StandardFrame": structNode(StandardFrame, { label: "StandardFrame" }),
    "SkippableFrame": structNode(SkippableFrame, { label: "SkippableFrame" }),
    "LegacyBlock": structNode(LegacyBlock, { label: "LegacyBlock" }),
  },
});

