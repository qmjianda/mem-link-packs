/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ip.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const MAC = struct("MAC", [
  bytes("octets", { size: 6 }),
]);

const ip_udp_Packet = struct("ip_udp_Packet", [
  u16("source_port", {  }),
  u16("destination_port", {  }),
  u16("length", {  }),
]);

const ip_tcp_Flags = struct("ip_tcp_Flags", [
  bits("data_offset", 4, { at: 0, bit: 0, unit: 2, label: "data_offset" }),
  bits("ns", 1, { at: 0, bit: 7, unit: 2, label: "ns" }),
  bits("cwr", 1, { at: 0, bit: 8, unit: 2, label: "cwr" }),
  bits("ece", 1, { at: 0, bit: 9, unit: 2, label: "ece" }),
  bits("urg", 1, { at: 0, bit: 10, unit: 2, label: "urg" }),
  bits("ack", 1, { at: 0, bit: 11, unit: 2, label: "ack" }),
  bits("psh", 1, { at: 0, bit: 12, unit: 2, label: "psh" }),
  bits("rst", 1, { at: 0, bit: 13, unit: 2, label: "rst" }),
  bits("syn", 1, { at: 0, bit: 14, unit: 2, label: "syn" }),
  bits("fin", 1, { at: 0, bit: 15, unit: 2, label: "fin" }),
]);

const ip_tcp_Packet = struct("ip_tcp_Packet", [
  u16("source_port", {  }),
  u16("destination_port", {  }),
  u32("sequence_number", {  }),
  u32("ack_number", {  }),
]);

const ipv4_Address = struct("ipv4_Address", [
  bytes("octets", { size: 4 }),
]);

const ipv4_Header = struct("ipv4_Header", [
  bits("version", 4, { at: 0, bit: 0, unit: 4, label: "version" }),
  bits("ihl", 4, { at: 0, bit: 4, unit: 4, label: "ihl" }),
  bits("tos", 8, { at: 0, bit: 8, unit: 4, label: "tos" }),
  bits("total_length", 16, { at: 0, bit: 16, unit: 4, label: "total_length" }),
]);

const ipv4_Flags = struct("ipv4_Flags", [
  bits("reserved", 1, { at: 0, bit: 0, unit: 2, label: "reserved" }),
  bits("df", 1, { at: 0, bit: 1, unit: 2, label: "df" }),
  bits("mf", 1, { at: 0, bit: 2, unit: 2, label: "mf" }),
  bits("fragment_offset", 13, { at: 0, bit: 3, unit: 2, label: "fragment_offset" }),
]);

const ipv6_Address = struct("ipv6_Address", [
  array("segments", "u16", 8),
]);

const ipv6_Header = struct("ipv6_Header", [
  bits("version", 4, { at: 0, bit: 0, unit: 4, label: "version" }),
  bits("ds", 6, { at: 0, bit: 4, unit: 4, label: "ds" }),
  bits("ecn", 2, { at: 0, bit: 10, unit: 4, label: "ecn" }),
  bits("flow_label", 20, { at: 0, bit: 12, unit: 4, label: "flow_label" }),
]);

const TCI = struct("TCI", [
  bits("pcp", 3, { at: 0, bit: 0, unit: 2, label: "pcp" }),
  bits("dei", 1, { at: 0, bit: 3, unit: 2, label: "dei" }),
  bits("vid", 12, { at: 0, bit: 4, unit: 2, label: "vid" }),
]);

const EthernetIIFrame = struct("EthernetIIFrame", [
  record("destination_address", MAC),
  record("source_address", MAC),
  u16("possible_tpid", {  }),
]);

export default definePack({
  name: "Ethernet II Frames (IP Packets)",
  endian: "big",
  pointerSize: 8,
  types: [MAC, ip_udp_Packet, ip_tcp_Flags, ip_tcp_Packet, ipv4_Address, ipv4_Header, ipv4_Flags, ipv6_Address, ipv6_Header, TCI, EthernetIIFrame],
  nodes: {
    "entry": structNode(EthernetIIFrame, { label: "EthernetIIFrame（入口）" }),
    "MAC": structNode(MAC, { label: "MAC" }),
    "ip_udp_Packet": structNode(ip_udp_Packet, { label: "ip_udp_Packet" }),
    "ip_tcp_Flags": structNode(ip_tcp_Flags, { label: "ip_tcp_Flags" }),
    "ip_tcp_Packet": structNode(ip_tcp_Packet, { label: "ip_tcp_Packet" }),
    "ipv4_Address": structNode(ipv4_Address, { label: "ipv4_Address" }),
    "ipv4_Header": structNode(ipv4_Header, { label: "ipv4_Header" }),
    "ipv4_Flags": structNode(ipv4_Flags, { label: "ipv4_Flags" }),
    "ipv6_Address": structNode(ipv6_Address, { label: "ipv6_Address" }),
    "ipv6_Header": structNode(ipv6_Header, { label: "ipv6_Header" }),
    "TCI": structNode(TCI, { label: "TCI" }),
  },
});


/*
未移植项：
- ip_tcp_Packet.flags: 类型 Flags 不可移植
- ipv4_Packet.header: 类型 Header 不可移植
- ipv6_Packet.header: 类型 Header 不可移植
*/
