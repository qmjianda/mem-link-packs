/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/zstd.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const frame_header_descriptor_t = struct("frame_header_descriptor_t", [
  bits("frame_content_size_flag", 2, { at: 0, bit: 0, unit: 1, label: "frame_content_size_flag" }),
  bits("single_segment_flag", 1, { at: 0, bit: 2, unit: 1, label: "single_segment_flag" }),
  bits("unused_bit", 1, { at: 0, bit: 3, unit: 1, label: "unused_bit" }),
  bits("reserved_bit", 1, { at: 0, bit: 4, unit: 1, label: "reserved_bit" }),
  bits("content_checksum_flag", 1, { at: 0, bit: 5, unit: 1, label: "content_checksum_flag" }),
  bits("dictionary_id_flag", 2, { at: 0, bit: 6, unit: 1, label: "dictionary_id_flag" }),
]);

const window_descriptor_t = struct("window_descriptor_t", [
  bits("exponent", 5, { at: 0, bit: 0, unit: 1, label: "exponent" }),
  bits("mantissa", 3, { at: 0, bit: 5, unit: 1, label: "mantissa" }),
]);

const frame_header_t = struct("frame_header_t", [
  record("frame_header_descriptor", frame_header_descriptor_t),
]);

const block_header_t = struct("block_header_t", [
  bits("last_block", 1, { at: 0, bit: 0, unit: 4, label: "last_block" }),
  bits("block_type", 2, { at: 0, bit: 1, unit: 4, label: "block_type" }),
  bits("block_size", 21, { at: 0, bit: 3, unit: 4, label: "block_size" }),
]);

const data_block_t = struct("data_block_t", [
  record("block_header", block_header_t),
]);

const content_checksum_t = struct("content_checksum_t", [
  u32("xxh64_hash", { endian: "little" }),
]);

const zstd_frame_t = struct("zstd_frame_t", [
  u32("magic_number", { endian: "little" }),
]);

export default definePack({
  name: "Zstandard compressed data",
  endian: "little",
  pointerSize: 8,
  types: [frame_header_descriptor_t, window_descriptor_t, frame_header_t, block_header_t, data_block_t, content_checksum_t, zstd_frame_t],
  nodes: {
    "entry": structNode(zstd_frame_t, { label: "zstd_frame_t（入口）" }),
    "frame_header_descriptor_t": structNode(frame_header_descriptor_t, { label: "frame_header_descriptor_t" }),
    "window_descriptor_t": structNode(window_descriptor_t, { label: "window_descriptor_t" }),
    "frame_header_t": structNode(frame_header_t, { label: "frame_header_t" }),
    "block_header_t": structNode(block_header_t, { label: "block_header_t" }),
    "data_block_t": structNode(data_block_t, { label: "data_block_t" }),
    "content_checksum_t": structNode(content_checksum_t, { label: "content_checksum_t" }),
  },
});

