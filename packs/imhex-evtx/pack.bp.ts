/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/evtx.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Header = struct("Header", [
  str("signature", { size: 8 }),
  u64("first_chunk_number", {  }),
  u64("last_chunk_number", {  }),
  u64("next_record_identifier", {  }),
  u32("header_size", {  }),
  u16("minor_format_version", {  }),
  u16("major_format_version", {  }),
  u16("header_block_size", {  }),
  u16("number_of_chunks", {  }),
  bytes("unknown", { size: 76 }),
  u32("file_Flag", {  }),
  u32("checkSum", {  }),
  bytes("unknown2", { size: 3968 }),
]);

const BinaryXML = struct("BinaryXML", [
  u8("fragment_header_token", {  }),
  u8("major_version", {  }),
  u8("minor_version", {  }),
  u8("flags", {  }),
]);

const Event_Record = struct("Event_Record", [
  u32("signature", {  }),
  u32("size", {  }),
  u64("event_record_identifier", {  }),
  u64("written_data_amd_time", {  }),
  record("binaryxml", BinaryXML),
]);

const Chunk = struct("Chunk", [
  str("signature", { size: 8 }),
  u64("first_event_record_number", {  }),
  u64("last_event_record_number", {  }),
  u64("first_event_record_identifier", {  }),
  u64("last_event_record_identifier", {  }),
  u32("header_size", {  }),
  u32("last_event_record_data_offset", {  }),
  u32("free_space_offset", {  }),
  u32("event_records_checksum", {  }),
  bytes("unknown", { size: 64 }),
  u32("unknown2", {  }),
  u32("checksum", {  }),
  bytes("common_string_offset_array", { size: 256 }),
  bytes("templatePtr", { size: 128 }),
  record("event_record", Event_Record),
]);

const Evtx = struct("Evtx", [
  record("header", Header),
  record("chunk", Chunk),
]);

export default definePack({
  name: "MS Windows Vista Event Log",
  endian: "little",
  pointerSize: 8,
  types: [Header, BinaryXML, Event_Record, Chunk, Evtx],
  nodes: {
    "entry": structNode(Evtx, { label: "Evtx（入口）" }),
    "Header": structNode(Header, { label: "Header" }),
    "BinaryXML": structNode(BinaryXML, { label: "BinaryXML" }),
    "Event_Record": structNode(Event_Record, { label: "Event_Record" }),
    "Chunk": structNode(Chunk, { label: "Chunk" }),
  },
});

