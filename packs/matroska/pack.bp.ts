/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/matroska
// 原始 pack：matroska · Matroska / WebM video v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 5 个动态辅助节点；未移植 87 项（见文件末尾）
const EbmlIdShort = struct("EbmlIdShort", [
  u8("value", { endian: "big", label: "the ID" }),
]);

const EbmlVintShort = struct("EbmlVintShort", [
  u8("byte", { endian: "big" }),
]);

const EbmlUint24 = struct("EbmlUint24", [
  u8("high", { endian: "big" }),
  u16("low", { endian: "big" }),
]);

const MkvBlockFlags = struct("MkvBlockFlags", [
  bits("discardable", 1, { at: 0, bit: 0, unit: 1, label: "discardable" }),
  bits("lacing", 2, { at: 0, bit: 1, unit: 1, label: "lacing" }),
  bits("invisible", 1, { at: 0, bit: 3, unit: 1, label: "invisible" }),
  bits("keyframe", 1, { at: 0, bit: 7, unit: 1, label: "keyframe" }),
]);

export default definePack({
  name: "MATROSKA",
  endian: "big",
  pointerSize: 4,
  types: [EbmlIdShort, EbmlVintShort, EbmlUint24, MkvBlockFlags],
  nodes: {
    "entry": structNode(EbmlIdShort, { label: "EbmlIdShort（入口）" }),
    "EbmlVintShort": structNode(EbmlVintShort, { label: "EbmlVintShort" }),
    "EbmlUint24": structNode(EbmlUint24, { label: "EbmlUint24" }),
    "flags_MkvBlockFlags": structNode(MkvBlockFlags, { label: "位域 MkvBlockFlags" }),
    "calc_EbmlIdShort_length": calcNode({
      label: "EbmlIdShort.length（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: {  },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: 1 }),
    }),
    "calc_EbmlVintShort_length": calcNode({
      label: "EbmlVintShort.length（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: {  },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: 1 }),
    }),
    "calc_EbmlVintShort_value": calcNode({
      label: "EbmlVintShort.value（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "byte": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["byte"] ?? 0) - 128) }),
    }),
    "calc_EbmlVintShort_unknown": calcNode({
      label: "EbmlVintShort.unknown（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "value": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: ((Number(inputs["value"] ?? 0) + 1) / 128) }),
    }),
    "calc_EbmlUint24_value": calcNode({
      label: "EbmlUint24.value（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "high": "number", "low": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: ((Number(inputs["high"] ?? 0) * 65536) + Number(inputs["low"] ?? 0)) }),
    }),
  },
});


/*
未移植项：
- EbmlCrcFirst: 没有可移植的固定前缀字段
- EbmlNoCrc: 没有可移植的固定前缀字段
- EBML: 没有可移植的固定前缀字段
- EBMLVersion: 没有可移植的固定前缀字段
- EBMLReadVersion: 没有可移植的固定前缀字段
- EBMLMaxIDLength: 没有可移植的固定前缀字段
- EBMLMaxSizeLength: 没有可移植的固定前缀字段
- DocType: 没有可移植的固定前缀字段
- DocTypeVersion: 没有可移植的固定前缀字段
- DocTypeReadVersion: 没有可移植的固定前缀字段
- Segment: 没有可移植的固定前缀字段
- SeekHead: 没有可移植的固定前缀字段
- Seek: 没有可移植的固定前缀字段
- SeekPosition: 没有可移植的固定前缀字段
- Info: 没有可移植的固定前缀字段
- TimestampScale: 没有可移植的固定前缀字段
- Duration: 没有可移植的固定前缀字段
- DateUTC: 没有可移植的固定前缀字段
- Title: 没有可移植的固定前缀字段
- MuxingApp: 没有可移植的固定前缀字段
- WritingApp: 没有可移植的固定前缀字段
- Tracks: 没有可移植的固定前缀字段
- TrackEntry: 没有可移植的固定前缀字段
- TrackNumber: 没有可移植的固定前缀字段
- TrackUID: 没有可移植的固定前缀字段
- TrackType: 没有可移植的固定前缀字段
- FlagEnabled: 没有可移植的固定前缀字段
- FlagDefault: 没有可移植的固定前缀字段
- FlagForced: 没有可移植的固定前缀字段
- FlagLacing: 没有可移植的固定前缀字段
- DefaultDuration: 没有可移植的固定前缀字段
- CodecDelay: 没有可移植的固定前缀字段
- SeekPreRoll: 没有可移植的固定前缀字段
- CodecID: 没有可移植的固定前缀字段
- CodecName: 没有可移植的固定前缀字段
- Name: 没有可移植的固定前缀字段
- Language: 没有可移植的固定前缀字段
- Video: 没有可移植的固定前缀字段
- PixelWidth: 没有可移植的固定前缀字段
- PixelHeight: 没有可移植的固定前缀字段
- DisplayWidth: 没有可移植的固定前缀字段
- DisplayHeight: 没有可移植的固定前缀字段
- FlagInterlaced: 没有可移植的固定前缀字段
- Audio: 没有可移植的固定前缀字段
- SamplingFrequency: 没有可移植的固定前缀字段
- Channels: 没有可移植的固定前缀字段
- BitDepth: 没有可移植的固定前缀字段
- Cluster: 没有可移植的固定前缀字段
- Timestamp: 没有可移植的固定前缀字段
- PrevSize: 没有可移植的固定前缀字段
- SimpleBlock: 没有可移植的固定前缀字段
- BlockGroup: 没有可移植的固定前缀字段
- Block: 没有可移植的固定前缀字段
- BlockDuration: 没有可移植的固定前缀字段
- Cues: 没有可移植的固定前缀字段
- CuePoint: 没有可移植的固定前缀字段
- CueTime: 没有可移植的固定前缀字段
- CueTrackPositions: 没有可移植的固定前缀字段
- CueTrack: 没有可移植的固定前缀字段
- CueClusterPosition: 没有可移植的固定前缀字段
- CueRelativePosition: 没有可移植的固定前缀字段
- Tags: 没有可移植的固定前缀字段
- Tag: 没有可移植的固定前缀字段
- SimpleTag: 没有可移植的固定前缀字段
- TagName: 没有可移植的固定前缀字段
- TagString: 没有可移植的固定前缀字段
- Chapters: 没有可移植的固定前缀字段
- Attachments: 没有可移植的固定前缀字段
- Void: 没有可移植的固定前缀字段
- CRC32: 没有可移植的固定前缀字段
- SeekID: 没有可移植的固定前缀字段
- SegmentUUID: 没有可移植的固定前缀字段
- CodecPrivate: 没有可移植的固定前缀字段
- Targets: 没有可移植的固定前缀字段
- Binary: 没有可移植的固定前缀字段
- EbmlIdLong.raw: 变长字节块未移植
- EbmlIdLong: 没有可移植的固定前缀字段
- EbmlId: 没有可移植的固定前缀字段
- EbmlVintLong.raw: 变长字节块未移植
- EbmlVintLong: 没有可移植的固定前缀字段
- EbmlVint: 没有可移植的固定前缀字段
- MkvBlockHeader.track: 类型 EbmlVint 不可移植
- MkvBlockHeader: 没有可移植的固定前缀字段
- EbmlElement.id: 类型 EbmlId 不可移植
- EbmlElement: 没有可移植的固定前缀字段
- Matroska: 没有可移植的固定前缀字段
- 入口 struct Matroska 没有可移植字段，改用 EbmlIdShort
*/
