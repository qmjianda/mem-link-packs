/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/flc.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Color64 = struct("Color64", [
  bits("r", 6, { at: 0, bit: 0, unit: 4, label: "r" }),
  bits("g", 6, { at: 0, bit: 8, unit: 4, label: "g" }),
  bits("b", 6, { at: 0, bit: 16, unit: 4, label: "b" }),
]);

const ExtFlags = struct("ExtFlags", [
  bits("segment_table_present", 1, { at: 0, bit: 0, unit: 2, label: "segment_table_present" }),
  bits("regular_key_imagees", 1, { at: 0, bit: 1, unit: 2, label: "regular_key_imagees" }),
  bits("identical_palette", 1, { at: 0, bit: 2, unit: 2, label: "identical_palette" }),
  bits("huffmann_compressed", 1, { at: 0, bit: 3, unit: 2, label: "huffmann_compressed" }),
  bits("bwt_huffmann_compressed", 1, { at: 0, bit: 4, unit: 2, label: "bwt_huffmann_compressed" }),
  bits("bitmap_masks_present", 1, { at: 0, bit: 5, unit: 2, label: "bitmap_masks_present" }),
  bits("multilevel_masks_present", 1, { at: 0, bit: 6, unit: 2, label: "multilevel_masks_present" }),
  bits("region_data_present", 1, { at: 0, bit: 7, unit: 2, label: "region_data_present" }),
  bits("password_protected", 1, { at: 0, bit: 8, unit: 2, label: "password_protected" }),
  bits("digitized_audio", 1, { at: 0, bit: 9, unit: 2, label: "digitized_audio" }),
  bits("contains_script", 1, { at: 0, bit: 10, unit: 2, label: "contains_script" }),
  bits("region_masks_present", 1, { at: 0, bit: 11, unit: 2, label: "region_masks_present" }),
  bits("contains_overlays", 1, { at: 0, bit: 12, unit: 2, label: "contains_overlays" }),
  bits("frame_shift_compressed", 1, { at: 0, bit: 13, unit: 2, label: "frame_shift_compressed" }),
]);

const Header = struct("Header", [
  u32("size", {  }),
  u16("type", { values: { "44817": "FLI", "44818": "FLC_8bit", "44868": "FLIC_other", "44848": "FLIC_Huffmann", "44849": "FLIC_frame_shift" } }),
  u16("frames", {  }),
  u16("width", {  }),
  u16("height", {  }),
  u16("depth", {  }),
  u16("flags", {  }),
  u32("speed", {  }),
  u16("reserved1", {  }),
  u32("created", {  }),
  u32("creator", {  }),
  u32("updated", {  }),
  u32("updater", {  }),
  u16("aspect_dx", {  }),
  u16("aspect_dy", {  }),
  record("ext_flags", ExtFlags),
  u16("keyframes", {  }),
  u16("totalframes", {  }),
  u32("req_memory", {  }),
  u16("max_regions", {  }),
  u16("transp_num", {  }),
  bytes("reserved2", { size: 24 }),
  u32("oframe1", {  }),
  u32("oframe2", {  }),
  bytes("reserved3", { size: 40 }),
]);

const DeltaFLCChunk_Packet = struct("DeltaFLCChunk_Packet", [
  u8("skip_count", {  }),
  i8("count", {  }),
]);

const DeltaFLCChunk_Opcode = struct("DeltaFLCChunk_Opcode", [
  bits("value", 14, { at: 0, bit: 0, unit: 2, label: "value" }),
  bits("type", 2, { at: 0, bit: 14, unit: 2, label: "type" }),
]);

const ByteRunChunk_Packet = struct("ByteRunChunk_Packet", [
  i8("count", {  }),
]);

const Chunk = struct("Chunk", [
  u32("size", {  }),
  u16("type", { values: { "3": "CEL_DATA", "4": "COLOR_256", "7": "DELTA_FLC", "11": "COLOR_64", "12": "DELTA_FLI", "13": "BLACK", "15": "BYTE_RUN", "16": "FLI_COPY", "18": "PSTAMP", "25": "DTA_BRUN", "26": "DTA_COPY", "27": "DTA_LC", "31": "LABEL", "32": "BMP_MASK", "33": "MLEV_MASK", "34": "SEGMENT", "35": "KEY_IMAGE", "36": "KEY_PAL", "37": "REGION", "38": "WAVE", "39": "USERSTRING", "40": "RGN_MASK", "41": "LABELEX", "42": "SHIFT", "43": "PATHMAP", "61696": "PREFIX_TYPE", "61920": "SCRIPT_CHUNK", "61946": "FRAME_TYPE", "61947": "SEGMENT_TABLE", "61948": "HUFFMAN_TABLE" } }),
]);

export default definePack({
  name: "FLC/FLIC animation file",
  endian: "little",
  pointerSize: 8,
  types: [Color64, ExtFlags, Header, DeltaFLCChunk_Packet, DeltaFLCChunk_Opcode, ByteRunChunk_Packet, Chunk],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "Color64": structNode(Color64, { label: "Color64" }),
    "ExtFlags": structNode(ExtFlags, { label: "ExtFlags" }),
    "DeltaFLCChunk_Packet": structNode(DeltaFLCChunk_Packet, { label: "DeltaFLCChunk_Packet" }),
    "DeltaFLCChunk_Opcode": structNode(DeltaFLCChunk_Opcode, { label: "DeltaFLCChunk_Opcode" }),
    "ByteRunChunk_Packet": structNode(ByteRunChunk_Packet, { label: "ByteRunChunk_Packet" }),
    "Chunk": structNode(Chunk, { label: "Chunk" }),
  },
});

