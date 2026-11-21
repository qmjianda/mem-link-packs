/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/blf.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const can_msg_flags = struct("can_msg_flags", [
  bits("is_tx", 1, { at: 0, bit: 0, unit: 1, label: "is_tx" }),
  bits("nerr", 1, { at: 0, bit: 5, unit: 1, label: "nerr" }),
  bits("wu", 1, { at: 0, bit: 6, unit: 1, label: "wu" }),
  bits("rtr", 1, { at: 0, bit: 7, unit: 1, label: "rtr" }),
]);

const can_msg = struct("can_msg", [
  u16("channel", {  }),
  record("flags", can_msg_flags),
  u8("dlc", {  }),
  u32("id", {  }),
  bytes("data", { size: 8 }),
]);

const can_msg2 = struct("can_msg2", [
  u16("channel", {  }),
  record("flags", can_msg_flags),
  u8("dlc", {  }),
  u32("id", {  }),
]);

const can_fd_msg_flags = struct("can_fd_msg_flags", [
  bits("edl", 1, { at: 0, bit: 0, unit: 1, label: "edl" }),
  bits("brs", 1, { at: 0, bit: 1, unit: 1, label: "brs" }),
  bits("esi", 1, { at: 0, bit: 2, unit: 1, label: "esi" }),
]);

const can_fd_msg = struct("can_fd_msg", [
  u16("channel", {  }),
  u8("flags", {  }),
  u8("dlc", {  }),
  u32("id", {  }),
  u32("frame_length", {  }),
  u8("arbitration_bit_count", {  }),
  record("fd_flags", can_fd_msg_flags),
  u8("valid_data_bytes", {  }),
  pad(1),
  pad(4),
  bytes("data", { size: 64 }),
  pad(4),
]);

const can_fd_msg_64_flags = struct("can_fd_msg_64_flags", [
  bits("nerr", 1, { at: 0, bit: 2, unit: 4, label: "nerr" }),
  bits("hv_wake_up", 1, { at: 0, bit: 3, unit: 4, label: "hv_wake_up" }),
  bits("remote_frame", 1, { at: 0, bit: 4, unit: 4, label: "remote_frame" }),
  bits("tx_ack", 1, { at: 0, bit: 6, unit: 4, label: "tx_ack" }),
  bits("tx_req", 1, { at: 0, bit: 7, unit: 4, label: "tx_req" }),
  bits("srr", 1, { at: 0, bit: 9, unit: 4, label: "srr" }),
  bits("r0", 1, { at: 0, bit: 10, unit: 4, label: "r0" }),
  bits("r1", 1, { at: 0, bit: 11, unit: 4, label: "r1" }),
  bits("edl", 1, { at: 0, bit: 12, unit: 4, label: "edl" }),
  bits("brs", 1, { at: 0, bit: 13, unit: 4, label: "brs" }),
  bits("esi", 1, { at: 0, bit: 14, unit: 4, label: "esi" }),
  bits("burst", 1, { at: 0, bit: 17, unit: 4, label: "burst" }),
]);

const can_bitrate_cfg = struct("can_bitrate_cfg", [
  u8("quartz_frequency", {  }),
  u8("prescaler", {  }),
  u8("btl_cycles", {  }),
  u8("sampling_point", {  }),
]);

const can_fd_msg_64 = struct("can_fd_msg_64", [
  u8("channel", {  }),
  u8("dlc", {  }),
  u8("valid_data_bytes", {  }),
  u8("tx_count", {  }),
  u32("id", {  }),
  u32("frame_length", {  }),
  record("flags", can_fd_msg_64_flags),
  record("arbitration_bitrate", can_bitrate_cfg),
  record("data_bitrate", can_bitrate_cfg),
  u32("brs_time_offset", {  }),
  u32("crc_time_offset", {  }),
  u16("bit_length", {  }),
  u8("direction", {  }),
  u8("data_offset", {  }),
  u32("crc", {  }),
]);

const can_statistic = struct("can_statistic", [
  u16("channel", {  }),
  u16("bus_load", {  }),
  u32("standard_data_frames", {  }),
  u32("extended_data_frames", {  }),
  u32("standard_remote_frames", {  }),
  u32("extended_remote_frames", {  }),
  u32("error_frames", {  }),
  u32("overload_frames", {  }),
  u32("reserved", {  }),
]);

const can_driver_error = struct("can_driver_error", [
  u16("channel", {  }),
  u8("tx_errors", {  }),
  u8("rx_errors", {  }),
  u32("error_code", {  }),
]);

const app_text_database_info = struct("app_text_database_info", [
  bits("version", 8, { at: 0, bit: 0, unit: 4, label: "version" }),
  bits("channel_num", 8, { at: 0, bit: 8, unit: 4, label: "channel_num" }),
  bits("bus_type", 8, { at: 0, bit: 16, unit: 4, label: "bus_type" }),
  bits("is_can_fd", 1, { at: 0, bit: 24, unit: 4, label: "is_can_fd" }),
]);

const app_text = struct("app_text", [
  u32("source", { values: { "0": "comment", "1": "database_info", "2": "metadata" } }),
]);

const restore_point_container = struct("restore_point_container", [
  bytes("rpc", { size: 14 }),
  u16("data_len", {  }),
]);

const log_container = struct("log_container", [
  u16("compression_method", { values: { "0": "no_compression", "2": "zlib" } }),
  pad(2),
  pad(4),
  u32("uncompressed_size", {  }),
  pad(4),
]);

const obj_header_ext = struct("obj_header_ext", [
  u32("flags", { values: { "1": "time_10_us", "2": "time_1_ns" } }),
]);

const timestamp = struct("timestamp", [
  u16("year", {  }),
  u16("month", {  }),
  u16("day_of_week", {  }),
  u16("day", {  }),
  u16("hour", {  }),
  u16("minute", {  }),
  u16("second", {  }),
  u16("millisecond", {  }),
]);

export default definePack({
  name: "Vector BLF Frame Logging Files",
  endian: "little",
  pointerSize: 8,
  types: [can_msg_flags, can_msg, can_msg2, can_fd_msg_flags, can_fd_msg, can_fd_msg_64_flags, can_bitrate_cfg, can_fd_msg_64, can_statistic, can_driver_error, app_text_database_info, app_text, restore_point_container, log_container, obj_header_ext, timestamp],
  nodes: {
    "entry": structNode(can_msg_flags, { label: "can_msg_flags（入口）" }),
    "can_msg": structNode(can_msg, { label: "can_msg" }),
    "can_msg2": structNode(can_msg2, { label: "can_msg2" }),
    "can_fd_msg_flags": structNode(can_fd_msg_flags, { label: "can_fd_msg_flags" }),
    "can_fd_msg": structNode(can_fd_msg, { label: "can_fd_msg" }),
    "can_fd_msg_64_flags": structNode(can_fd_msg_64_flags, { label: "can_fd_msg_64_flags" }),
    "can_bitrate_cfg": structNode(can_bitrate_cfg, { label: "can_bitrate_cfg" }),
    "can_fd_msg_64": structNode(can_fd_msg_64, { label: "can_fd_msg_64" }),
    "can_statistic": structNode(can_statistic, { label: "can_statistic" }),
    "can_driver_error": structNode(can_driver_error, { label: "can_driver_error" }),
    "app_text_database_info": structNode(app_text_database_info, { label: "app_text_database_info" }),
    "app_text": structNode(app_text, { label: "app_text" }),
    "restore_point_container": structNode(restore_point_container, { label: "restore_point_container" }),
    "log_container": structNode(log_container, { label: "log_container" }),
    "obj_header_ext": structNode(obj_header_ext, { label: "obj_header_ext" }),
    "timestamp": structNode(timestamp, { label: "timestamp" }),
  },
});


/*
未移植项：
- obj_struct.header: 类型 obj_header 不可移植
- file_layout.header: 类型 file_header 不可移植
*/
