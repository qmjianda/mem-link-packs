/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/adts.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ADTS_HEADER = struct("ADTS_HEADER", [
  bits("Syncword", 12, { at: 0, bit: 0, unit: 8, label: "Syncword" }),
  bits("MPEG_Version", 1, { at: 0, bit: 12, unit: 8, label: "MPEG_Version" }),
  bits("Layer", 2, { at: 0, bit: 13, unit: 8, label: "Layer" }),
  bits("Protection_absence", 1, { at: 0, bit: 15, unit: 8, label: "Protection_absence" }),
  bits("Profile", 2, { at: 0, bit: 16, unit: 8, label: "Profile" }),
  bits("Sampling_frequency_index", 4, { at: 0, bit: 18, unit: 8, label: "Sampling_frequency_index" }),
  bits("Private_bit", 1, { at: 0, bit: 22, unit: 8, label: "Private_bit" }),
  bits("Channel_configuration", 3, { at: 0, bit: 23, unit: 8, label: "Channel_configuration" }),
  bits("Originality", 1, { at: 0, bit: 26, unit: 8, label: "Originality" }),
  bits("Home", 1, { at: 0, bit: 27, unit: 8, label: "Home" }),
  bits("Copyright_id_bit", 1, { at: 0, bit: 28, unit: 8, label: "Copyright_id_bit" }),
  bits("Copyright_id_start", 1, { at: 0, bit: 29, unit: 8, label: "Copyright_id_start" }),
  bits("AAC_frame_length", 13, { at: 0, bit: 30, unit: 8, label: "AAC_frame_length" }),
  bits("ADTS_buffer_fullness", 11, { at: 0, bit: 43, unit: 8, label: "ADTS_buffer_fullness" }),
  bits("Number_of_AAC_frames_minus_1", 2, { at: 0, bit: 54, unit: 8, label: "Number_of_AAC_frames_minus_1" }),
]);

const ADTS_FRAME = struct("ADTS_FRAME", [
  record("Header", ADTS_HEADER),
]);

export default definePack({
  name: "AAC ADTSn (Audio Data Transport Stream) Audio",
  endian: "big",
  pointerSize: 8,
  types: [ADTS_HEADER, ADTS_FRAME],
  nodes: {
    "entry": structNode(ADTS_FRAME, { label: "ADTS_FRAME（入口）" }),
    "ADTS_HEADER": structNode(ADTS_HEADER, { label: "ADTS_HEADER" }),
  },
});

