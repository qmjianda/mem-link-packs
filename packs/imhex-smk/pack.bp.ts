/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/smk.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const HeaderFlags = struct("HeaderFlags", [
  bits("ContainsRingFrame", 1, { at: 0, bit: 0, unit: 4, label: "ContainsRingFrame" }),
  bits("YInterlaced", 1, { at: 0, bit: 1, unit: 4, label: "YInterlaced" }),
  bits("YDoubled", 1, { at: 0, bit: 2, unit: 4, label: "YDoubled" }),
]);

const HeaderAudioFlags = struct("HeaderAudioFlags", [
  bits("isCompressed", 1, { at: 0, bit: 0, unit: 4, label: "isCompressed" }),
  bits("hasAudio", 1, { at: 0, bit: 1, unit: 4, label: "hasAudio" }),
  bits("is16BitAudio", 1, { at: 0, bit: 2, unit: 4, label: "is16BitAudio" }),
  bits("isStereo", 1, { at: 0, bit: 3, unit: 4, label: "isStereo" }),
  bits("soundDecompression", 2, { at: 0, bit: 4, unit: 4, label: "soundDecompression" }),
  bits("audioSampleRate", 24, { at: 0, bit: 8, unit: 4, label: "audioSampleRate" }),
]);

const Header = struct("Header", [
  str("Signature", { size: 4 }),
  u32("Width", {  }),
  u32("Height", {  }),
  u32("FrameCount", {  }),
  i32("FrameRate", {  }),
  record("Flags", HeaderFlags),
  array("AudioSize", "u32", 7),
  u32("TreesSize", {  }),
  u32("MMap_Size", {  }),
  u32("MClr_Size", {  }),
  u32("Full_Size", {  }),
  u32("Type_Size", {  }),
  array("AudioRate", HeaderAudioFlags, 7),
  pad(4),
]);

const Size = struct("Size", [
  bits("keyframe", 1, { at: 0, bit: 0, unit: 4, label: "keyframe" }),
  bits("dwordCount", 30, { at: 0, bit: 2, unit: 4, label: "dwordCount" }),
]);

const FrameType = struct("FrameType", [
  bits("ContainsPaletteRecord", 1, { at: 0, bit: 0, unit: 1, label: "ContainsPaletteRecord" }),
  bits("ContainsAudioTrack0", 1, { at: 0, bit: 1, unit: 1, label: "ContainsAudioTrack0" }),
  bits("ContainsAudioTrack1", 1, { at: 0, bit: 2, unit: 1, label: "ContainsAudioTrack1" }),
  bits("ContainsAudioTrack2", 1, { at: 0, bit: 3, unit: 1, label: "ContainsAudioTrack2" }),
  bits("ContainsAudioTrack3", 1, { at: 0, bit: 4, unit: 1, label: "ContainsAudioTrack3" }),
  bits("ContainsAudioTrack4", 1, { at: 0, bit: 5, unit: 1, label: "ContainsAudioTrack4" }),
  bits("ContainsAudioTrack5", 1, { at: 0, bit: 6, unit: 1, label: "ContainsAudioTrack5" }),
  bits("ContainsAudioTrack6", 1, { at: 0, bit: 7, unit: 1, label: "ContainsAudioTrack6" }),
]);

const PaletteCopyOnly = struct("PaletteCopyOnly", [
  bits("copy", 7, { at: 0, bit: 0, unit: 1, label: "copy" }),
  bits("mode", 1, { at: 0, bit: 7, unit: 1, label: "mode" }),
]);

const PaletteCopySkip = struct("PaletteCopySkip", [
  bits("copy", 6, { at: 0, bit: 0, unit: 2, label: "copy" }),
  bits("mode", 2, { at: 0, bit: 6, unit: 2, label: "mode" }),
  bits("skip", 8, { at: 0, bit: 8, unit: 2, label: "skip" }),
]);

const PaletteColor = struct("PaletteColor", [
  bits("blue", 6, { at: 0, bit: 0, unit: 4, label: "blue" }),
  bits("mode", 2, { at: 0, bit: 6, unit: 4, label: "mode" }),
  bits("green", 6, { at: 0, bit: 8, unit: 4, label: "green" }),
  bits("red", 6, { at: 0, bit: 16, unit: 4, label: "red" }),
]);

const PaletteChunk = struct("PaletteChunk", [
  u8("length", {  }),
]);

const SMK = struct("SMK", [
  record("header", Header),
]);

export default definePack({
  name: "Smacker video file",
  endian: "little",
  pointerSize: 8,
  types: [HeaderFlags, HeaderAudioFlags, Header, Size, FrameType, PaletteCopyOnly, PaletteCopySkip, PaletteColor, PaletteChunk, SMK],
  nodes: {
    "entry": structNode(SMK, { label: "SMK（入口）" }),
    "HeaderFlags": structNode(HeaderFlags, { label: "HeaderFlags" }),
    "HeaderAudioFlags": structNode(HeaderAudioFlags, { label: "HeaderAudioFlags" }),
    "Header": structNode(Header, { label: "Header" }),
    "Size": structNode(Size, { label: "Size" }),
    "FrameType": structNode(FrameType, { label: "FrameType" }),
    "PaletteCopyOnly": structNode(PaletteCopyOnly, { label: "PaletteCopyOnly" }),
    "PaletteCopySkip": structNode(PaletteCopySkip, { label: "PaletteCopySkip" }),
    "PaletteColor": structNode(PaletteColor, { label: "PaletteColor" }),
    "PaletteChunk": structNode(PaletteChunk, { label: "PaletteChunk" }),
  },
});

