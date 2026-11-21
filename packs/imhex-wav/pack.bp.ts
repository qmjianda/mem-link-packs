/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/wav.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const RiffHeader = struct("RiffHeader", [
  str("ckID", { size: 4 }),
  u32("ckSize", {  }),
  str("format", { size: 4 }),
]);

const WaveChunk = struct("WaveChunk", [
  str("chunkId", { size: 4 }),
  u32("chunkSize", {  }),
]);

const WaveFormat = struct("WaveFormat", [
  u16("formatTag", { values: { "0": "Unknown", "1": "PCM", "2": "MS_ADPCM", "3": "IEEEFloatingPoint", "6": "ALAW", "7": "MULAW", "17": "IMA_ADPCM", "49": "GSM610", "80": "MPEG", "85": "MPEGLAYER3", "65534": "EXTENSIBLE" } }),
  u16("channels", {  }),
  u32("samplesPerSec", {  }),
  u32("avgBytesPerSec", {  }),
  u16("blockAlign", {  }),
]);

const WaveFormatEx = struct("WaveFormatEx", [
  u16("bitsPerSample", {  }),
  u16("extendedDataSize", {  }),
]);

const ChannelMask = struct("ChannelMask", [
  bits("SPEAKER_FRONT_LEFT", 1, { at: 0, bit: 0, unit: 4, label: "SPEAKER_FRONT_LEFT" }),
  bits("SPEAKER_FRONT_RIGHT", 1, { at: 0, bit: 1, unit: 4, label: "SPEAKER_FRONT_RIGHT" }),
  bits("SPEAKER_FRONT_CENTER", 1, { at: 0, bit: 2, unit: 4, label: "SPEAKER_FRONT_CENTER" }),
  bits("SPEAKER_LOW_FREQUENCY", 1, { at: 0, bit: 3, unit: 4, label: "SPEAKER_LOW_FREQUENCY" }),
  bits("SPEAKER_BACK_LEFT", 1, { at: 0, bit: 4, unit: 4, label: "SPEAKER_BACK_LEFT" }),
  bits("SPEAKER_BACK_RIGHT", 1, { at: 0, bit: 5, unit: 4, label: "SPEAKER_BACK_RIGHT" }),
  bits("SPEAKER_FRONT_LEFT_OF_CENTER", 1, { at: 0, bit: 6, unit: 4, label: "SPEAKER_FRONT_LEFT_OF_CENTER" }),
  bits("SPEAKER_FRONT_RIGHT_OF_CENTER", 1, { at: 0, bit: 7, unit: 4, label: "SPEAKER_FRONT_RIGHT_OF_CENTER" }),
  bits("SPEAKER_BACK_CENTER", 1, { at: 0, bit: 8, unit: 4, label: "SPEAKER_BACK_CENTER" }),
  bits("SPEAKER_SIDE_LEFT", 1, { at: 0, bit: 9, unit: 4, label: "SPEAKER_SIDE_LEFT" }),
  bits("SPEAKER_SIDE_RIGHT", 1, { at: 0, bit: 10, unit: 4, label: "SPEAKER_SIDE_RIGHT" }),
  bits("SPEAKER_TOP_CENTER", 1, { at: 0, bit: 11, unit: 4, label: "SPEAKER_TOP_CENTER" }),
  bits("SPEAKER_TOP_FRONT_LEFT", 1, { at: 0, bit: 12, unit: 4, label: "SPEAKER_TOP_FRONT_LEFT" }),
  bits("SPEAKER_TOP_FRONT_CENTER", 1, { at: 0, bit: 13, unit: 4, label: "SPEAKER_TOP_FRONT_CENTER" }),
  bits("SPEAKER_TOP_FRONT_RIGHT", 1, { at: 0, bit: 14, unit: 4, label: "SPEAKER_TOP_FRONT_RIGHT" }),
  bits("SPEAKER_TOP_BACK_LEFT", 1, { at: 0, bit: 15, unit: 4, label: "SPEAKER_TOP_BACK_LEFT" }),
  bits("SPEAKER_TOP_BACK_CENTER", 1, { at: 0, bit: 16, unit: 4, label: "SPEAKER_TOP_BACK_CENTER" }),
  bits("SPEAKER_TOP_BACK_RIGHT", 1, { at: 0, bit: 17, unit: 4, label: "SPEAKER_TOP_BACK_RIGHT" }),
]);

const WaveFormatExtensibleChunks = struct("WaveFormatExtensibleChunks", [
  u16("validBitsPerSample", {  }),
  record("channelMask", ChannelMask),
]);

const WaveFormatExDummy = struct("WaveFormatExDummy", [
  u16("bitsPerSample", {  }),
  u16("extendedDataSize", {  }),
]);

const WaveFormatPCM = struct("WaveFormatPCM", [
  u16("bitsPerSample", {  }),
]);

const WaveMSADPCMCoefSet = struct("WaveMSADPCMCoefSet", [
  i16("coef1", {  }),
  i16("coef2", {  }),
]);

const WaveFormatMSADPCM = struct("WaveFormatMSADPCM", [
  u16("bitsPerSample", {  }),
  u16("extendedDataSize", {  }),
  u16("samplesPerBlock", {  }),
  u16("numCoef", {  }),
]);

const WaveMPEGLayer = struct("WaveMPEGLayer", [
  bits("Layer1", 1, { at: 0, bit: 0, unit: 2, label: "Layer1" }),
  bits("Layer2", 1, { at: 0, bit: 1, unit: 2, label: "Layer2" }),
  bits("Layer3", 1, { at: 0, bit: 2, unit: 2, label: "Layer3" }),
]);

const WaveMPEGMode = struct("WaveMPEGMode", [
  bits("Stereo", 1, { at: 0, bit: 0, unit: 2, label: "Stereo" }),
  bits("JointStereo", 1, { at: 0, bit: 1, unit: 2, label: "JointStereo" }),
  bits("DualChannel", 1, { at: 0, bit: 2, unit: 2, label: "DualChannel" }),
  bits("SingleChannel", 1, { at: 0, bit: 3, unit: 2, label: "SingleChannel" }),
]);

const WaveMPEGFlags = struct("WaveMPEGFlags", [
  bits("PrivateBit", 1, { at: 0, bit: 0, unit: 2, label: "PrivateBit" }),
  bits("Copyright", 1, { at: 0, bit: 1, unit: 2, label: "Copyright" }),
  bits("OriginalHome", 1, { at: 0, bit: 2, unit: 2, label: "OriginalHome" }),
  bits("ProtectionBit", 1, { at: 0, bit: 3, unit: 2, label: "ProtectionBit" }),
  bits("IdMPEG1", 1, { at: 0, bit: 4, unit: 2, label: "IdMPEG1" }),
]);

const WaveFormatIEEEFloatingPoint = struct("WaveFormatIEEEFloatingPoint", [
  u16("bitsPerSample", {  }),
]);

const WaveFormatMPEG = struct("WaveFormatMPEG", [
  u16("bitsPerSample", {  }),
  u16("extendedDataSize", {  }),
  record("headLayersUsed", WaveMPEGLayer),
  u32("headBitrate", {  }),
  record("headMode", WaveMPEGMode),
  u16("headModeExt", {  }),
  u16("headEmphasis", {  }),
  record("headFlags", WaveMPEGFlags),
  u32("PTSLow", {  }),
  u32("PTSHigh", {  }),
]);

const WaveFormatMPEGLayer3 = struct("WaveFormatMPEGLayer3", [
  u16("bitsPerSample", {  }),
  u16("extendedDataSize", {  }),
  u16("id", {  }),
  u32("flags", { values: { "0": "MPEGLAYER3_FLAG_PADDING_ISO", "1": "MPEGLAYER3_FLAG_PADDING_ON", "2": "MPEGLAYER3_FLAG_PADDING_OFF" } }),
  u16("blockSize", {  }),
  u16("framesPerBlock", {  }),
  u16("codecDelay", {  }),
]);

const WaveFact = struct("WaveFact", [
  u32("uncompressedSize", {  }),
]);

const SampleLookup = struct("SampleLookup", [
  u32("id", {  }),
  u32("type", { values: { "0": "TYPE_LOOP_FORWARD", "1": "TYPE_LOOP_ALTERNATE", "2": "TYPE_LOOP_BACKWARD" } }),
  u32("start", {  }),
  u32("end", {  }),
  u32("fraction", {  }),
  u32("playCount", {  }),
]);

const WaveSample = struct("WaveSample", [
  u32("manufacturer", {  }),
  u32("product", {  }),
  u32("samplePeriod", {  }),
  u32("MIDIUnityNote", {  }),
  u32("MIDIPitchFraction", {  }),
  u32("SMPTEFormat", {  }),
  u32("SMPTEOffset", {  }),
  u32("numSampleLoops", {  }),
  u32("sampleLoopsSize", {  }),
]);

const WaveCuePoint = struct("WaveCuePoint", [
  u32("indentifier", {  }),
  u32("position", {  }),
  str("chunkID", { size: 4 }),
  u32("chunkStart", {  }),
  u32("blockStart", {  }),
  u32("sampleOffset", {  }),
]);

const WaveCue = struct("WaveCue", [
  u32("numCuePoints", {  }),
]);

const WaveLabel = struct("WaveLabel", [
  u32("id", {  }),
]);

const WaveListItem = struct("WaveListItem", [
  str("chunkId", { size: 4 }),
  u32("chunkSize", {  }),
]);

const WaveList = struct("WaveList", [
  str("type", { size: 4 }),
]);

const WavData = struct("WavData", [
  record("chunk", WaveChunk),
]);

export default definePack({
  name: "RIFF/WAVE/PCM (.wav)",
  endian: "little",
  pointerSize: 8,
  types: [RiffHeader, WaveChunk, WaveFormat, WaveFormatEx, ChannelMask, WaveFormatExtensibleChunks, WaveFormatExDummy, WaveFormatPCM, WaveMSADPCMCoefSet, WaveFormatMSADPCM, WaveMPEGLayer, WaveMPEGMode, WaveMPEGFlags, WaveFormatIEEEFloatingPoint, WaveFormatMPEG, WaveFormatMPEGLayer3, WaveFact, SampleLookup, WaveSample, WaveCuePoint, WaveCue, WaveLabel, WaveListItem, WaveList, WavData],
  nodes: {
    "entry": structNode(RiffHeader, { label: "RiffHeader（入口）" }),
    "WaveChunk": structNode(WaveChunk, { label: "WaveChunk" }),
    "WaveFormat": structNode(WaveFormat, { label: "WaveFormat" }),
    "WaveFormatEx": structNode(WaveFormatEx, { label: "WaveFormatEx" }),
    "ChannelMask": structNode(ChannelMask, { label: "ChannelMask" }),
    "WaveFormatExtensibleChunks": structNode(WaveFormatExtensibleChunks, { label: "WaveFormatExtensibleChunks" }),
    "WaveFormatExDummy": structNode(WaveFormatExDummy, { label: "WaveFormatExDummy" }),
    "WaveFormatPCM": structNode(WaveFormatPCM, { label: "WaveFormatPCM" }),
    "WaveMSADPCMCoefSet": structNode(WaveMSADPCMCoefSet, { label: "WaveMSADPCMCoefSet" }),
    "WaveFormatMSADPCM": structNode(WaveFormatMSADPCM, { label: "WaveFormatMSADPCM" }),
    "WaveMPEGLayer": structNode(WaveMPEGLayer, { label: "WaveMPEGLayer" }),
    "WaveMPEGMode": structNode(WaveMPEGMode, { label: "WaveMPEGMode" }),
    "WaveMPEGFlags": structNode(WaveMPEGFlags, { label: "WaveMPEGFlags" }),
    "WaveFormatIEEEFloatingPoint": structNode(WaveFormatIEEEFloatingPoint, { label: "WaveFormatIEEEFloatingPoint" }),
    "WaveFormatMPEG": structNode(WaveFormatMPEG, { label: "WaveFormatMPEG" }),
    "WaveFormatMPEGLayer3": structNode(WaveFormatMPEGLayer3, { label: "WaveFormatMPEGLayer3" }),
    "WaveFact": structNode(WaveFact, { label: "WaveFact" }),
    "SampleLookup": structNode(SampleLookup, { label: "SampleLookup" }),
    "WaveSample": structNode(WaveSample, { label: "WaveSample" }),
    "WaveCuePoint": structNode(WaveCuePoint, { label: "WaveCuePoint" }),
    "WaveCue": structNode(WaveCue, { label: "WaveCue" }),
    "WaveLabel": structNode(WaveLabel, { label: "WaveLabel" }),
    "WaveListItem": structNode(WaveListItem, { label: "WaveListItem" }),
    "WaveList": structNode(WaveList, { label: "WaveList" }),
    "WavData": structNode(WavData, { label: "WavData" }),
  },
});


/*
未移植项：
- WaveFormatExtensibleChunks.subformat: 类型 type_GUID 不可移植
*/
