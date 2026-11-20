/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/pcap
// 原始 pack：pcap · PCAP capture v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
const PcapRecord = struct("PcapRecord", [
  u32("tsSec", { endian: "little", label: "timestamp, seconds since the epoch" }),
  u32("tsUsec", { endian: "little", label: "timestamp, microseconds (or nanoseconds)" }),
  u32("inclLen", { endian: "little", label: "number of bytes of this packet in the file" }),
  u32("origLen", { endian: "little", label: "original packet length on the wire" }),
]);

const Pcap = struct("Pcap", [
  u32("magic", { endian: "little", label: "0xA1B2C3D4 for a little-endian capture" }),
  u16("versionMajor", { endian: "little", label: "major version (2)" }),
  u16("versionMinor", { endian: "little", label: "minor version (4)" }),
  i32("thisZone", { endian: "little", label: "GMT to local time correction (usually 0)" }),
  u32("sigfigs", { endian: "little", label: "timestamp accuracy (usually 0)" }),
  u32("snaplen", { endian: "little", label: "max captured length per packet" }),
  u32("network", { values: { "0": "Null", "1": "Ethernet", "9": "Ppp", "101": "Raw", "105": "Ieee80211", "113": "LinuxSll" }, label: "link-layer header type" }),
  record("firstPacket", PcapRecord, { label: "the first captured packet record" }),
]);

export default definePack({
  name: "PCAP",
  endian: "little",
  pointerSize: 4,
  types: [PcapRecord, Pcap],
  nodes: {
    "entry": structNode(Pcap, { label: "Pcap（入口）" }),
    "PcapRecord": structNode(PcapRecord, { label: "PcapRecord" }),
  },
});


/*
未移植项：
- PcapRecord.data: 变长字节块未移植
*/
