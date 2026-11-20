/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/flv
// 原始 pack：flv · FLV video v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 4 项（见文件末尾）
const FlvAudioHeader = struct("FlvAudioHeader", [
  bits("soundType", 1, { at: 0, bit: 0, unit: 1, label: "soundType" }),
  bits("soundSize", 1, { at: 0, bit: 1, unit: 1, label: "soundSize" }),
  bits("soundRate", 2, { at: 0, bit: 2, unit: 1, label: "soundRate" }),
  bits("soundFormat", 4, { at: 0, bit: 4, unit: 1, label: "soundFormat" }),
]);

const FlvAudioTag = struct("FlvAudioTag", [
  record("header", FlvAudioHeader, { label: "codec, sample rate, sample size and channel count" }),
]);

const FlvVideoHeader = struct("FlvVideoHeader", [
  bits("codecId", 4, { at: 0, bit: 0, unit: 1, label: "codecId" }),
  bits("frameType", 4, { at: 0, bit: 4, unit: 1, label: "frameType" }),
]);

const FlvVideoTag = struct("FlvVideoTag", [
  record("header", FlvVideoHeader, { label: "frame type and codec" }),
]);

const FlvTag = struct("FlvTag", [
  u32("previousTagSize", { endian: "little", label: "size of the tag before this one; 0 for the first" }),
  u8("tagType", { values: { "8": "Audio", "9": "Video", "18": "ScriptData" }, label: "audio, video, or AMF script data" }),
  u8("sizeHi", { endian: "little", label: "data size byte (high)" }),
  u8("sizeMid", { endian: "little", label: "data size byte (mid)" }),
  u8("sizeLo", { endian: "little", label: "data size byte (low)" }),
  u8("timeHi", { endian: "little", label: "timestamp byte (high)" }),
  u8("timeMid", { endian: "little", label: "timestamp byte (mid)" }),
  u8("timeLo", { endian: "little", label: "timestamp byte (low)" }),
  u8("timestampExt", { endian: "little", label: "the timestamp upper byte: the real value is 32-bit" }),
  u8("streamIdHi", { endian: "little", label: "stream id byte (high), always 0" }),
  u8("streamIdMid", { endian: "little", label: "stream id byte (mid), always 0" }),
  u8("streamIdLo", { endian: "little", label: "stream id byte (low), always 0" }),
]);

const FlvHeaderFlags = struct("FlvHeaderFlags", [
  bits("video", 1, { at: 0, bit: 0, unit: 1, label: "video" }),
  bits("audio", 1, { at: 0, bit: 2, unit: 1, label: "audio" }),
]);

const Flv = struct("Flv", [
  str("signature", { size: 3, label: "FLV" }),
  u8("version", { endian: "little", label: "1" }),
  record("flags", FlvHeaderFlags, { label: "which streams the file contains" }),
  u32("dataOffset", { endian: "little", label: "header size in bytes; 9 in every version so far" }),
]);

export default definePack({
  name: "FLV",
  endian: "big",
  pointerSize: 4,
  types: [FlvAudioHeader, FlvAudioTag, FlvVideoHeader, FlvVideoTag, FlvTag, FlvHeaderFlags, Flv],
  nodes: {
    "entry": structNode(Flv, { label: "Flv（入口）" }),
    "FlvAudioTag": structNode(FlvAudioTag, { label: "FlvAudioTag" }),
    "FlvVideoTag": structNode(FlvVideoTag, { label: "FlvVideoTag" }),
    "FlvTag": structNode(FlvTag, { label: "FlvTag" }),
    "flags_FlvHeaderFlags": structNode(FlvHeaderFlags, { label: "位域 FlvHeaderFlags" }),
    "flags_FlvAudioHeader": structNode(FlvAudioHeader, { label: "位域 FlvAudioHeader" }),
    "flags_FlvVideoHeader": structNode(FlvVideoHeader, { label: "位域 FlvVideoHeader" }),
  },
});


/*
未移植项：
- FlvTag.dataSize: computed 字段未移植
- FlvTag.timestamp: computed 字段未移植
- FlvTag.data: 变长字节块未移植
- Flv.tags: repeat 字段未移植，后续布局在此停止
*/
