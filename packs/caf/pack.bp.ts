/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/caf
// 原始 pack：caf · CAF audio v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 2 项（见文件末尾）
const CafFormatFlags = struct("CafFormatFlags", [
  bits("isFloat", 1, { at: 0, bit: 0, unit: 4, label: "isFloat" }),
  bits("isLittleEndian", 1, { at: 0, bit: 1, unit: 4, label: "isLittleEndian" }),
]);

const CafAudioDescription = struct("CafAudioDescription", [
  f64("sampleRate", { endian: "big", label: "frames per second, as a double (44100.0, 48000.0)" }),
  str("formatId", { size: 4, label: "codec: lpcm, aac , alac, ima4, ulaw, alaw" }),
  record("formatFlags", CafFormatFlags, { label: "codec-specific flags; for lpcm, the sample layout" }),
  u32("bytesPerPacket", { endian: "big", label: "bytes in one packet, 0 when packets vary in size" }),
  u32("framesPerPacket", { endian: "big", label: "frames in one packet, 0 when that varies too" }),
  u32("channelsPerFrame", { endian: "big", label: "channel count (1 mono, 2 stereo)" }),
  u32("bitsPerChannel", { endian: "big", label: "bits per sample in one channel, 0 for compressed audio" }),
]);

const CafPacketTable = struct("CafPacketTable", [
  i64("numberPackets", { endian: "big", label: "packets in the data chunk" }),
  i64("numberValidFrames", { endian: "big", label: "frames of real audio, excluding codec priming and padding" }),
  i32("primingFrames", { endian: "big", label: "frames the decoder must run before the output is valid" }),
  i32("remainderFrames", { endian: "big", label: "frames of padding at the end of the last packet" }),
]);

const CafData = struct("CafData", [
  u32("editCount", { endian: "big", label: "bumped every time the audio is edited; 0 in a fresh file" }),
]);

const CafInfo = struct("CafInfo", [
  u32("numEntries", { endian: "big", label: "number of key/value string pairs that follow" }),
]);

const CafChunk = struct("CafChunk", [
  str("type", { size: 4, label: "four-character chunk type" }),
  i64("size", { endian: "big", label: "bytes of chunk data; -1 on the last chunk means to end of file" }),
]);

const Caf = struct("Caf", [
  str("fileType", { size: 4, label: "caff" }),
  u16("fileVersion", { endian: "big", label: "format version, 1" }),
  u16("fileFlags", { endian: "big", label: "no flags are defined for version 1; always 0" }),
]);

export default definePack({
  name: "CAF",
  endian: "big",
  pointerSize: 4,
  types: [CafFormatFlags, CafAudioDescription, CafPacketTable, CafData, CafInfo, CafChunk, Caf],
  nodes: {
    "entry": structNode(Caf, { label: "Caf（入口）" }),
    "CafAudioDescription": structNode(CafAudioDescription, { label: "CafAudioDescription" }),
    "CafPacketTable": structNode(CafPacketTable, { label: "CafPacketTable" }),
    "CafData": structNode(CafData, { label: "CafData" }),
    "CafInfo": structNode(CafInfo, { label: "CafInfo" }),
    "CafChunk": structNode(CafChunk, { label: "CafChunk" }),
    "flags_CafFormatFlags": structNode(CafFormatFlags, { label: "位域 CafFormatFlags" }),
  },
});


/*
未移植项：
- CafChunk.data: 变长字节块未移植
- Caf.chunks: repeat 字段未移植，后续布局在此停止
*/
