/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/adtfdat.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const ChunkFlags = struct("ChunkFlags", [
  bits("key", 1, { at: 0, bit: 0, unit: 2, label: "key" }),
  bits("info", 1, { at: 0, bit: 1, unit: 2, label: "info" }),
  bits("marker", 1, { at: 0, bit: 2, unit: 2, label: "marker" }),
  bits("type", 1, { at: 0, bit: 3, unit: 2, label: "type" }),
  bits("trigger", 1, { at: 0, bit: 4, unit: 2, label: "trigger" }),
  bits("reserved", 11, { at: 0, bit: 5, unit: 2, label: "reserved" }),
]);

const Extension = struct("Extension", [
  str("identifier", { size: 384 }),
  u16("stream_id", {  }),
  bytes("reserved1", { size: 2 }),
  u32("user_id", {  }),
  u32("type_id", {  }),
  u32("version_id", {  }),
  u64("data_pos", {  }),
  u64("data_size", {  }),
  bytes("reserved", { size: 96 }),
]);

const ChunkHeader = struct("ChunkHeader", [
  u64("time_stamp", {  }),
]);

const SampleInfo = struct("SampleInfo", [
  u8("memory_layout_version", {  }),
  u32("size", {  }),
]);

const Sample = struct("Sample", [
  i64("timestamp", {  }),
]);

const Chunk = struct("Chunk", [
  record("header", ChunkHeader),
]);

const Header = struct("Header", [
  u32("file_id", {  }),
  u32("version_id", {  }),
  u32("flags", {  }),
  u32("extension_count", {  }),
  u64("extension_offset", {  }),
  u64("data_offset", {  }),
  u64("data_size", {  }),
  u64("chunk_count", {  }),
  u64("max_chunk_size", {  }),
  u64("duration", {  }),
]);

const IndexedFile = struct("IndexedFile", [
  record("header", Header),
]);

export default definePack({
  name: "ADTFDAT File",
  endian: "little",
  pointerSize: 8,
  types: [ChunkFlags, Extension, ChunkHeader, SampleInfo, Sample, Chunk, Header, IndexedFile],
  nodes: {
    "entry": structNode(IndexedFile, { label: "IndexedFile（入口）" }),
    "ChunkFlags": structNode(ChunkFlags, { label: "ChunkFlags" }),
    "Extension": structNode(Extension, { label: "Extension" }),
    "ChunkHeader": structNode(ChunkHeader, { label: "ChunkHeader" }),
    "SampleInfo": structNode(SampleInfo, { label: "SampleInfo" }),
    "Sample": structNode(Sample, { label: "Sample" }),
    "Chunk": structNode(Chunk, { label: "Chunk" }),
    "Header": structNode(Header, { label: "Header" }),
  },
});


/*
未移植项：
- Header.filetime: 类型 type_time64_t 不可移植
*/
