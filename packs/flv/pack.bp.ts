/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/flv
// 原始 pack：flv · FLV video v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 6 个动态辅助节点；未移植 1 项（见文件末尾）
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
  u32("previousTagSize", { endian: "big", label: "size of the tag before this one; 0 for the first" }),
  u8("tagType", { values: { "8": "Audio", "9": "Video", "18": "ScriptData" }, label: "audio, video, or AMF script data" }),
  u8("sizeHi", { endian: "big", label: "data size byte (high)" }),
  u8("sizeMid", { endian: "big", label: "data size byte (mid)" }),
  u8("sizeLo", { endian: "big", label: "data size byte (low)" }),
  u8("timeHi", { endian: "big", label: "timestamp byte (high)" }),
  u8("timeMid", { endian: "big", label: "timestamp byte (mid)" }),
  u8("timeLo", { endian: "big", label: "timestamp byte (low)" }),
  u8("timestampExt", { endian: "big", label: "the timestamp upper byte: the real value is 32-bit" }),
  u8("streamIdHi", { endian: "big", label: "stream id byte (high), always 0" }),
  u8("streamIdMid", { endian: "big", label: "stream id byte (mid), always 0" }),
  u8("streamIdLo", { endian: "big", label: "stream id byte (low), always 0" }),
]);

const FlvHeaderFlags = struct("FlvHeaderFlags", [
  bits("video", 1, { at: 0, bit: 0, unit: 1, label: "video" }),
  bits("audio", 1, { at: 0, bit: 2, unit: 1, label: "audio" }),
]);

const Flv = struct("Flv", [
  str("signature", { size: 3, label: "FLV" }),
  u8("version", { endian: "big", label: "1" }),
  record("flags", FlvHeaderFlags, { label: "which streams the file contains" }),
  u32("dataOffset", { endian: "big", label: "header size in bytes; 9 in every version so far" }),
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
    "calc_FlvTag_dataSize": calcNode({
      label: "FlvTag.dataSize（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "sizeHi": "number", "sizeMid": "number", "sizeLo": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (((Number(inputs["sizeHi"] ?? 0) * 65536) + (Number(inputs["sizeMid"] ?? 0) * 256)) + Number(inputs["sizeLo"] ?? 0)) }),
    }),
    "calc_FlvTag_timestamp": calcNode({
      label: "FlvTag.timestamp（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "timeHi": "number", "timeMid": "number", "timeLo": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (((Number(inputs["timeHi"] ?? 0) * 65536) + (Number(inputs["timeMid"] ?? 0) * 256)) + Number(inputs["timeLo"] ?? 0)) }),
    }),
    "ptr_FlvTag_decoded": calcNode({
      label: "FlvTag.decoded（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 15 }),
    }),
    "match_FlvTag_decoded_8": structNode(FlvAudioTag, { label: "FlvTag.decoded · match 8" }),
    "match_FlvTag_decoded_9": structNode(FlvVideoTag, { label: "FlvTag.decoded · match 9" }),
    "list_Flv_tags": listNode(FlvTag, {
      label: "Flv.tags（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => {  return e.addr + FlvTag.size; },
      max: 4096,
    }),
  },
});


/*
未移植项：
- FlvTag.data: 变长字节块未移植
*/
