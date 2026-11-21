/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bink_container.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const VideoFlags = struct("VideoFlags", [
  bits("Unknown1", 16, { at: 0, bit: 0, unit: 4, label: "Unknown1" }),
  bits("Greyscale", 1, { at: 0, bit: 16, unit: 4, label: "Greyscale" }),
  bits("Unknown2", 2, { at: 0, bit: 17, unit: 4, label: "Unknown2" }),
  bits("HasAlphaPLane", 1, { at: 0, bit: 19, unit: 4, label: "HasAlphaPLane" }),
  bits("Unknown3", 7, { at: 0, bit: 20, unit: 4, label: "Unknown3" }),
  bits("Scaling", 4, { at: 0, bit: 27, unit: 4, label: "Scaling" }),
]);

const AudioPropertyFlags = struct("AudioPropertyFlags", [
  bits("Unknown1", 11, { at: 0, bit: 0, unit: 2, label: "Unknown1" }),
  bits("Algorithm", 1, { at: 0, bit: 11, unit: 2, label: "Algorithm" }),
  bits("IsStereo", 1, { at: 0, bit: 12, unit: 2, label: "IsStereo" }),
  bits("HasAlphaPLane", 1, { at: 0, bit: 13, unit: 2, label: "HasAlphaPLane" }),
  bits("Unknown2", 2, { at: 0, bit: 14, unit: 2, label: "Unknown2" }),
]);

const FrameAddressData = struct("FrameAddressData", [
  bits("IsKeyframe", 1, { at: 0, bit: 0, unit: 8, label: "IsKeyframe" }),
  bits("FrameAddress", 32, { at: 0, bit: 1, unit: 8, label: "FrameAddress" }),
]);

const AudioChannelData = struct("AudioChannelData", [
  u16("Unknown", {  }),
  u16("NotAuthoritativeAudioChannelQty", {  }),
]);

const AudioChannelProperties = struct("AudioChannelProperties", [
  u16("SampleRate", {  }),
  record("NotAuthoritativeAudioChannelQty", AudioPropertyFlags),
]);

const BinkHeader = struct("BinkHeader", [
  str("MagicNumber", { size: 3 }),
  char("BinkVersion", {  }),
  u32("SizeOfRemainingBytes", {  }),
  u32("NumberOfFrames", {  }),
  u32("LargestFrameSize", {  }),
  u32("NumberOfFramesAgain", {  }),
  u32("VideoFrameWidth", {  }),
  u32("VideoFrameHeight", {  }),
  u32("VideoFPSDividend", {  }),
  u32("VideoFPSDivisor", {  }),
  record("VideoFlags", VideoFlags),
  u32("AudioTrackQty", {  }),
]);

const BinkAudioTrack = struct("BinkAudioTrack", [
  u32("LengthOfRemainingTrackData", {  }),
]);

const BinkFile = struct("BinkFile", [
  record("Header", BinkHeader),
]);

export default definePack({
  name: "Bink Video Container - RAD Game Tools",
  endian: "little",
  pointerSize: 8,
  types: [VideoFlags, AudioPropertyFlags, FrameAddressData, AudioChannelData, AudioChannelProperties, BinkHeader, BinkAudioTrack, BinkFile],
  nodes: {
    "entry": structNode(BinkFile, { label: "BinkFile（入口）" }),
    "VideoFlags": structNode(VideoFlags, { label: "VideoFlags" }),
    "AudioPropertyFlags": structNode(AudioPropertyFlags, { label: "AudioPropertyFlags" }),
    "FrameAddressData": structNode(FrameAddressData, { label: "FrameAddressData" }),
    "AudioChannelData": structNode(AudioChannelData, { label: "AudioChannelData" }),
    "AudioChannelProperties": structNode(AudioChannelProperties, { label: "AudioChannelProperties" }),
    "BinkHeader": structNode(BinkHeader, { label: "BinkHeader" }),
    "BinkAudioTrack": structNode(BinkAudioTrack, { label: "BinkAudioTrack" }),
  },
});

