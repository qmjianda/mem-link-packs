/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/matroska
// 原始 pack：matroska · Matroska / WebM video v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 293 项（见文件末尾）
const EbmlIdShort = struct("EbmlIdShort", [
  u8("value", { endian: "little", label: "the ID" }),
]);

const EbmlVintShort = struct("EbmlVintShort", [
  u8("byte", { endian: "little" }),
]);

const EbmlUint24 = struct("EbmlUint24", [
  u8("high", { endian: "little" }),
  u16("low", { endian: "little" }),
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
  },
});


/*
未移植项：
- EbmlCrcFirst.present: computed 字段未移植
- EbmlCrcFirst: 没有可移植的固定前缀字段
- EbmlNoCrc.present: computed 字段未移植
- EbmlNoCrc: 没有可移植的固定前缀字段
- EBML.kind: computed 字段未移植
- EBML.first: 指针字段（at +…）未移植
- EBML.crc: match 联合类型未移植，后续布局在此停止
- EBML: 没有可移植的固定前缀字段
- EBMLVersion.kind: computed 字段未移植
- EBMLVersion.children: computed 字段未移植
- EBMLVersion: 没有可移植的固定前缀字段
- EBMLReadVersion.kind: computed 字段未移植
- EBMLReadVersion.children: computed 字段未移植
- EBMLReadVersion: 没有可移植的固定前缀字段
- EBMLMaxIDLength.kind: computed 字段未移植
- EBMLMaxIDLength.children: computed 字段未移植
- EBMLMaxIDLength: 没有可移植的固定前缀字段
- EBMLMaxSizeLength.kind: computed 字段未移植
- EBMLMaxSizeLength.children: computed 字段未移植
- EBMLMaxSizeLength: 没有可移植的固定前缀字段
- DocType.kind: computed 字段未移植
- DocType.children: computed 字段未移植
- DocType: 没有可移植的固定前缀字段
- DocTypeVersion.kind: computed 字段未移植
- DocTypeVersion.children: computed 字段未移植
- DocTypeVersion: 没有可移植的固定前缀字段
- DocTypeReadVersion.kind: computed 字段未移植
- DocTypeReadVersion.children: computed 字段未移植
- DocTypeReadVersion: 没有可移植的固定前缀字段
- Segment.kind: computed 字段未移植
- Segment.children: computed 字段未移植
- Segment: 没有可移植的固定前缀字段
- SeekHead.kind: computed 字段未移植
- SeekHead.first: 指针字段（at +…）未移植
- SeekHead.crc: match 联合类型未移植，后续布局在此停止
- SeekHead: 没有可移植的固定前缀字段
- Seek.kind: computed 字段未移植
- Seek.first: 指针字段（at +…）未移植
- Seek.crc: match 联合类型未移植，后续布局在此停止
- Seek: 没有可移植的固定前缀字段
- SeekPosition.kind: computed 字段未移植
- SeekPosition.children: computed 字段未移植
- SeekPosition: 没有可移植的固定前缀字段
- Info.kind: computed 字段未移植
- Info.first: 指针字段（at +…）未移植
- Info.crc: match 联合类型未移植，后续布局在此停止
- Info: 没有可移植的固定前缀字段
- TimestampScale.kind: computed 字段未移植
- TimestampScale.children: computed 字段未移植
- TimestampScale: 没有可移植的固定前缀字段
- Duration.kind: computed 字段未移植
- Duration.children: computed 字段未移植
- Duration: 没有可移植的固定前缀字段
- DateUTC.kind: computed 字段未移植
- DateUTC.children: computed 字段未移植
- DateUTC: 没有可移植的固定前缀字段
- Title.kind: computed 字段未移植
- Title.children: computed 字段未移植
- Title: 没有可移植的固定前缀字段
- MuxingApp.kind: computed 字段未移植
- MuxingApp.children: computed 字段未移植
- MuxingApp: 没有可移植的固定前缀字段
- WritingApp.kind: computed 字段未移植
- WritingApp.children: computed 字段未移植
- WritingApp: 没有可移植的固定前缀字段
- Tracks.kind: computed 字段未移植
- Tracks.first: 指针字段（at +…）未移植
- Tracks.crc: match 联合类型未移植，后续布局在此停止
- Tracks: 没有可移植的固定前缀字段
- TrackEntry.kind: computed 字段未移植
- TrackEntry.first: 指针字段（at +…）未移植
- TrackEntry.crc: match 联合类型未移植，后续布局在此停止
- TrackEntry: 没有可移植的固定前缀字段
- TrackNumber.kind: computed 字段未移植
- TrackNumber.children: computed 字段未移植
- TrackNumber: 没有可移植的固定前缀字段
- TrackUID.kind: computed 字段未移植
- TrackUID.children: computed 字段未移植
- TrackUID: 没有可移植的固定前缀字段
- TrackType.kind: computed 字段未移植
- TrackType.children: computed 字段未移植
- TrackType: 没有可移植的固定前缀字段
- FlagEnabled.kind: computed 字段未移植
- FlagEnabled.children: computed 字段未移植
- FlagEnabled: 没有可移植的固定前缀字段
- FlagDefault.kind: computed 字段未移植
- FlagDefault.children: computed 字段未移植
- FlagDefault: 没有可移植的固定前缀字段
- FlagForced.kind: computed 字段未移植
- FlagForced.children: computed 字段未移植
- FlagForced: 没有可移植的固定前缀字段
- FlagLacing.kind: computed 字段未移植
- FlagLacing.children: computed 字段未移植
- FlagLacing: 没有可移植的固定前缀字段
- DefaultDuration.kind: computed 字段未移植
- DefaultDuration.children: computed 字段未移植
- DefaultDuration: 没有可移植的固定前缀字段
- CodecDelay.kind: computed 字段未移植
- CodecDelay.children: computed 字段未移植
- CodecDelay: 没有可移植的固定前缀字段
- SeekPreRoll.kind: computed 字段未移植
- SeekPreRoll.children: computed 字段未移植
- SeekPreRoll: 没有可移植的固定前缀字段
- CodecID.kind: computed 字段未移植
- CodecID.children: computed 字段未移植
- CodecID: 没有可移植的固定前缀字段
- CodecName.kind: computed 字段未移植
- CodecName.children: computed 字段未移植
- CodecName: 没有可移植的固定前缀字段
- Name.kind: computed 字段未移植
- Name.children: computed 字段未移植
- Name: 没有可移植的固定前缀字段
- Language.kind: computed 字段未移植
- Language.children: computed 字段未移植
- Language: 没有可移植的固定前缀字段
- Video.kind: computed 字段未移植
- Video.first: 指针字段（at +…）未移植
- Video.crc: match 联合类型未移植，后续布局在此停止
- Video: 没有可移植的固定前缀字段
- PixelWidth.kind: computed 字段未移植
- PixelWidth.children: computed 字段未移植
- PixelWidth: 没有可移植的固定前缀字段
- PixelHeight.kind: computed 字段未移植
- PixelHeight.children: computed 字段未移植
- PixelHeight: 没有可移植的固定前缀字段
- DisplayWidth.kind: computed 字段未移植
- DisplayWidth.children: computed 字段未移植
- DisplayWidth: 没有可移植的固定前缀字段
- DisplayHeight.kind: computed 字段未移植
- DisplayHeight.children: computed 字段未移植
- DisplayHeight: 没有可移植的固定前缀字段
- FlagInterlaced.kind: computed 字段未移植
- FlagInterlaced.children: computed 字段未移植
- FlagInterlaced: 没有可移植的固定前缀字段
- Audio.kind: computed 字段未移植
- Audio.first: 指针字段（at +…）未移植
- Audio.crc: match 联合类型未移植，后续布局在此停止
- Audio: 没有可移植的固定前缀字段
- SamplingFrequency.kind: computed 字段未移植
- SamplingFrequency.children: computed 字段未移植
- SamplingFrequency: 没有可移植的固定前缀字段
- Channels.kind: computed 字段未移植
- Channels.children: computed 字段未移植
- Channels: 没有可移植的固定前缀字段
- BitDepth.kind: computed 字段未移植
- BitDepth.children: computed 字段未移植
- BitDepth: 没有可移植的固定前缀字段
- Cluster.kind: computed 字段未移植
- Cluster.first: 指针字段（at +…）未移植
- Cluster.crc: match 联合类型未移植，后续布局在此停止
- Cluster: 没有可移植的固定前缀字段
- Timestamp.kind: computed 字段未移植
- Timestamp.children: computed 字段未移植
- Timestamp: 没有可移植的固定前缀字段
- PrevSize.kind: computed 字段未移植
- PrevSize.children: computed 字段未移植
- PrevSize: 没有可移植的固定前缀字段
- SimpleBlock.kind: computed 字段未移植
- SimpleBlock.children: computed 字段未移植
- SimpleBlock: 没有可移植的固定前缀字段
- BlockGroup.kind: computed 字段未移植
- BlockGroup.first: 指针字段（at +…）未移植
- BlockGroup.crc: match 联合类型未移植，后续布局在此停止
- BlockGroup: 没有可移植的固定前缀字段
- Block.kind: computed 字段未移植
- Block.children: computed 字段未移植
- Block: 没有可移植的固定前缀字段
- BlockDuration.kind: computed 字段未移植
- BlockDuration.children: computed 字段未移植
- BlockDuration: 没有可移植的固定前缀字段
- Cues.kind: computed 字段未移植
- Cues.first: 指针字段（at +…）未移植
- Cues.crc: match 联合类型未移植，后续布局在此停止
- Cues: 没有可移植的固定前缀字段
- CuePoint.kind: computed 字段未移植
- CuePoint.first: 指针字段（at +…）未移植
- CuePoint.crc: match 联合类型未移植，后续布局在此停止
- CuePoint: 没有可移植的固定前缀字段
- CueTime.kind: computed 字段未移植
- CueTime.children: computed 字段未移植
- CueTime: 没有可移植的固定前缀字段
- CueTrackPositions.kind: computed 字段未移植
- CueTrackPositions.first: 指针字段（at +…）未移植
- CueTrackPositions.crc: match 联合类型未移植，后续布局在此停止
- CueTrackPositions: 没有可移植的固定前缀字段
- CueTrack.kind: computed 字段未移植
- CueTrack.children: computed 字段未移植
- CueTrack: 没有可移植的固定前缀字段
- CueClusterPosition.kind: computed 字段未移植
- CueClusterPosition.children: computed 字段未移植
- CueClusterPosition: 没有可移植的固定前缀字段
- CueRelativePosition.kind: computed 字段未移植
- CueRelativePosition.children: computed 字段未移植
- CueRelativePosition: 没有可移植的固定前缀字段
- Tags.kind: computed 字段未移植
- Tags.first: 指针字段（at +…）未移植
- Tags.crc: match 联合类型未移植，后续布局在此停止
- Tags: 没有可移植的固定前缀字段
- Tag.kind: computed 字段未移植
- Tag.first: 指针字段（at +…）未移植
- Tag.crc: match 联合类型未移植，后续布局在此停止
- Tag: 没有可移植的固定前缀字段
- SimpleTag.kind: computed 字段未移植
- SimpleTag.first: 指针字段（at +…）未移植
- SimpleTag.crc: match 联合类型未移植，后续布局在此停止
- SimpleTag: 没有可移植的固定前缀字段
- TagName.kind: computed 字段未移植
- TagName.children: computed 字段未移植
- TagName: 没有可移植的固定前缀字段
- TagString.kind: computed 字段未移植
- TagString.children: computed 字段未移植
- TagString: 没有可移植的固定前缀字段
- Chapters.kind: computed 字段未移植
- Chapters.first: 指针字段（at +…）未移植
- Chapters.crc: match 联合类型未移植，后续布局在此停止
- Chapters: 没有可移植的固定前缀字段
- Attachments.kind: computed 字段未移植
- Attachments.first: 指针字段（at +…）未移植
- Attachments.crc: match 联合类型未移植，后续布局在此停止
- Attachments: 没有可移植的固定前缀字段
- Void.kind: computed 字段未移植
- Void.children: computed 字段未移植
- Void: 没有可移植的固定前缀字段
- CRC32.kind: computed 字段未移植
- CRC32.children: computed 字段未移植
- CRC32: 没有可移植的固定前缀字段
- SeekID.kind: computed 字段未移植
- SeekID.children: computed 字段未移植
- SeekID: 没有可移植的固定前缀字段
- SegmentUUID.kind: computed 字段未移植
- SegmentUUID.children: computed 字段未移植
- SegmentUUID: 没有可移植的固定前缀字段
- CodecPrivate.kind: computed 字段未移植
- CodecPrivate.children: computed 字段未移植
- CodecPrivate: 没有可移植的固定前缀字段
- Targets.kind: computed 字段未移植
- Targets.children: computed 字段未移植
- Targets: 没有可移植的固定前缀字段
- Binary.kind: computed 字段未移植
- Binary.children: computed 字段未移植
- Binary: 没有可移植的固定前缀字段
- EbmlIdShort.length: computed 字段未移植
- EbmlIdLong.peek: 指针字段（at +…）未移植
- EbmlIdLong.first: 指针字段（at +…）未移植
- EbmlIdLong.nibble: computed 字段未移植
- EbmlIdLong.two: computed 字段未移植
- EbmlIdLong.three: computed 字段未移植
- EbmlIdLong.four: computed 字段未移植
- EbmlIdLong.length: computed 字段未移植
- EbmlIdLong.value: computed 字段未移植
- EbmlIdLong.raw: 变长字节块未移植
- EbmlIdLong: 没有可移植的固定前缀字段
- EbmlId.first: 指针字段（at +…）未移植
- EbmlId.short: computed 字段未移植
- EbmlId.coded: match 联合类型未移植，后续布局在此停止
- EbmlId: 没有可移植的固定前缀字段
- EbmlVintShort.length: computed 字段未移植
- EbmlVintShort.value: computed 字段未移植
- EbmlVintShort.unknown: computed 字段未移植
- EbmlVintLong.peek: 指针字段（at +…）未移植
- EbmlVintLong.first: 指针字段（at +…）未移植
- EbmlVintLong.atLeast2: computed 字段未移植
- EbmlVintLong.atLeast3: computed 字段未移植
- EbmlVintLong.atLeast4: computed 字段未移植
- EbmlVintLong.atLeast5: computed 字段未移植
- EbmlVintLong.atLeast6: computed 字段未移植
- EbmlVintLong.atLeast7: computed 字段未移植
- EbmlVintLong.atLeast8: computed 字段未移植
- EbmlVintLong.width2: computed 字段未移植
- EbmlVintLong.width3: computed 字段未移植
- EbmlVintLong.width4: computed 字段未移植
- EbmlVintLong.width5: computed 字段未移植
- EbmlVintLong.width6: computed 字段未移植
- EbmlVintLong.width7: computed 字段未移植
- EbmlVintLong.width8: computed 字段未移植
- EbmlVintLong.length: computed 字段未移植
- EbmlVintLong.value: computed 字段未移植
- EbmlVintLong.limit: computed 字段未移植
- EbmlVintLong.unknown: computed 字段未移植
- EbmlVintLong.raw: 变长字节块未移植
- EbmlVintLong: 没有可移植的固定前缀字段
- EbmlVint.first: 指针字段（at +…）未移植
- EbmlVint.short: computed 字段未移植
- EbmlVint.coded: match 联合类型未移植，后续布局在此停止
- EbmlVint: 没有可移植的固定前缀字段
- EbmlUint24.value: computed 字段未移植
- MkvBlockHeader.track: 类型 EbmlVint 不可移植
- MkvBlockHeader: 没有可移植的固定前缀字段
- EbmlElement.id: 类型 EbmlId 不可移植
- EbmlElement: 没有可移植的固定前缀字段
- Matroska.elements: repeat 字段未移植，后续布局在此停止
- Matroska: 没有可移植的固定前缀字段
- 入口 struct Matroska 没有可移植字段，改用 EbmlIdShort
*/
