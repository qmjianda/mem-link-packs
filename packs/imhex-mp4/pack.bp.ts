/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/mp4.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const FixedPoint16 = struct("FixedPoint16", [
  u8("integer", {  }),
  u8("fraction", {  }),
]);

const FixedPoint32 = struct("FixedPoint32", [
  u16("integer", {  }),
  u16("fraction", {  }),
]);

const BaseBox = struct("BaseBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
]);

const FullBox = struct("FullBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
]);

const UnknownBox = struct("UnknownBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
]);

const FileTypeBox = struct("FileTypeBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u32("major_brand", {  }),
  u32("minor_version", {  }),
]);

const MovieHeaderBox = struct("MovieHeaderBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
]);

const TrackHeaderBox = struct("TrackHeaderBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
]);

const DataEntryBox = struct("DataEntryBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
]);

const DataReferenceBox = struct("DataReferenceBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("entry_count", {  }),
]);

const HandlerBox = struct("HandlerBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("component_type", {  }),
  str("handler_type", { size: 4 }),
  array("reserved", "u32", 3),
]);

const VideoMediaHeaderBox = struct("VideoMediaHeaderBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u16("graphicsmode", {  }),
  array("opcolor", "u16", 3),
]);

const Avc1Box = struct("Avc1Box", [
  u32("size", {  }),
  str("type", { size: 4 }),
]);

const Mp4aBox = struct("Mp4aBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
]);

const SampleDescriptionBox = struct("SampleDescriptionBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("entry_count", {  }),
]);

const SampleTimeToSampleEntry = struct("SampleTimeToSampleEntry", [
  u32("sample_count", {  }),
  u32("sample_delta", {  }),
]);

const SampleTimeToSampleBox = struct("SampleTimeToSampleBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("entry_count", {  }),
]);

const SampleToChunkEntry = struct("SampleToChunkEntry", [
  u32("first_chunk", {  }),
  u32("samples_per_chunk", {  }),
  u32("sample_description_index", {  }),
]);

const SampleToChunkBox = struct("SampleToChunkBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("entry_count", {  }),
]);

const ChunkOffsetBox = struct("ChunkOffsetBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("entry_count", {  }),
]);

const SyncSampleBox = struct("SyncSampleBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("entry_count", {  }),
]);

const CompositionOffsetEntryV0 = struct("CompositionOffsetEntryV0", [
  u32("sample_count", {  }),
  u32("sample_offset", {  }),
]);

const CompositionOffsetEntryV1 = struct("CompositionOffsetEntryV1", [
  u32("sample_count", {  }),
  i32("sample_offset", {  }),
]);

const CompositionOffsetBox = struct("CompositionOffsetBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("entry_count", {  }),
]);

const SampleSizeBox = struct("SampleSizeBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("sample_size", {  }),
  u32("sample_count", {  }),
]);

const MediaHeaderBox = struct("MediaHeaderBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
]);

const EditListEntry64 = struct("EditListEntry64", [
  u64("segment_duration", {  }),
  i64("media_time", {  }),
  i16("media_rate_integer", {  }),
  i16("media_rate_fraction", {  }),
]);

const EditListEntry32 = struct("EditListEntry32", [
  u32("segment_duration", {  }),
  i32("media_time", {  }),
  i16("media_rate_integer", {  }),
  i16("media_rate_fraction", {  }),
]);

const EditListBox = struct("EditListBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
  u8("version", {  }),
  u32("entry_count", {  }),
]);

const MediaDataBox = struct("MediaDataBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
]);

const ContainerBox = struct("ContainerBox", [
  u32("size", {  }),
  str("type", { size: 4 }),
]);

export default definePack({
  name: "MPEG-4 Part 14 digital multimedia container (MP4)",
  endian: "big",
  pointerSize: 8,
  types: [FixedPoint16, FixedPoint32, BaseBox, FullBox, UnknownBox, FileTypeBox, MovieHeaderBox, TrackHeaderBox, DataEntryBox, DataReferenceBox, HandlerBox, VideoMediaHeaderBox, Avc1Box, Mp4aBox, SampleDescriptionBox, SampleTimeToSampleEntry, SampleTimeToSampleBox, SampleToChunkEntry, SampleToChunkBox, ChunkOffsetBox, SyncSampleBox, CompositionOffsetEntryV0, CompositionOffsetEntryV1, CompositionOffsetBox, SampleSizeBox, MediaHeaderBox, EditListEntry64, EditListEntry32, EditListBox, MediaDataBox, ContainerBox],
  nodes: {
    "entry": structNode(FixedPoint16, { label: "FixedPoint16（入口）" }),
    "FixedPoint32": structNode(FixedPoint32, { label: "FixedPoint32" }),
    "BaseBox": structNode(BaseBox, { label: "BaseBox" }),
    "FullBox": structNode(FullBox, { label: "FullBox" }),
    "UnknownBox": structNode(UnknownBox, { label: "UnknownBox" }),
    "FileTypeBox": structNode(FileTypeBox, { label: "FileTypeBox" }),
    "MovieHeaderBox": structNode(MovieHeaderBox, { label: "MovieHeaderBox" }),
    "TrackHeaderBox": structNode(TrackHeaderBox, { label: "TrackHeaderBox" }),
    "DataEntryBox": structNode(DataEntryBox, { label: "DataEntryBox" }),
    "DataReferenceBox": structNode(DataReferenceBox, { label: "DataReferenceBox" }),
    "HandlerBox": structNode(HandlerBox, { label: "HandlerBox" }),
    "VideoMediaHeaderBox": structNode(VideoMediaHeaderBox, { label: "VideoMediaHeaderBox" }),
    "Avc1Box": structNode(Avc1Box, { label: "Avc1Box" }),
    "Mp4aBox": structNode(Mp4aBox, { label: "Mp4aBox" }),
    "SampleDescriptionBox": structNode(SampleDescriptionBox, { label: "SampleDescriptionBox" }),
    "SampleTimeToSampleEntry": structNode(SampleTimeToSampleEntry, { label: "SampleTimeToSampleEntry" }),
    "SampleTimeToSampleBox": structNode(SampleTimeToSampleBox, { label: "SampleTimeToSampleBox" }),
    "SampleToChunkEntry": structNode(SampleToChunkEntry, { label: "SampleToChunkEntry" }),
    "SampleToChunkBox": structNode(SampleToChunkBox, { label: "SampleToChunkBox" }),
    "ChunkOffsetBox": structNode(ChunkOffsetBox, { label: "ChunkOffsetBox" }),
    "SyncSampleBox": structNode(SyncSampleBox, { label: "SyncSampleBox" }),
    "CompositionOffsetEntryV0": structNode(CompositionOffsetEntryV0, { label: "CompositionOffsetEntryV0" }),
    "CompositionOffsetEntryV1": structNode(CompositionOffsetEntryV1, { label: "CompositionOffsetEntryV1" }),
    "CompositionOffsetBox": structNode(CompositionOffsetBox, { label: "CompositionOffsetBox" }),
    "SampleSizeBox": structNode(SampleSizeBox, { label: "SampleSizeBox" }),
    "MediaHeaderBox": structNode(MediaHeaderBox, { label: "MediaHeaderBox" }),
    "EditListEntry64": structNode(EditListEntry64, { label: "EditListEntry64" }),
    "EditListEntry32": structNode(EditListEntry32, { label: "EditListEntry32" }),
    "EditListBox": structNode(EditListBox, { label: "EditListBox" }),
    "MediaDataBox": structNode(MediaDataBox, { label: "MediaDataBox" }),
    "ContainerBox": structNode(ContainerBox, { label: "ContainerBox" }),
  },
});


/*
未移植项：
- FullBox.flags: 类型 u24 不可移植
- Avc1Box.reserved: 类型 u48 不可移植
- Mp4aBox.reserved: 类型 u48 不可移植
*/
