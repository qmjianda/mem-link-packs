/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/pcapng
// 原始 pack：pcapng · pcapng capture v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 6 项（见文件末尾）
const PcapngShb = struct("PcapngShb", [
  u32("byteOrderMagic", { endian: "little", label: "0x1A2B3C4D; byte-swapped in a big-endian section" }),
  u16("versionMajor", { endian: "little", label: "major version (1)" }),
  u16("versionMinor", { endian: "little", label: "minor version (0)" }),
  i64("sectionLength", { endian: "little", label: "bytes in this section, or -1 when unknown" }),
]);

const PcapngIdb = struct("PcapngIdb", [
  u16("linkType", { values: { "0": "Null", "1": "Ethernet", "9": "Ppp", "101": "Raw", "105": "Ieee80211", "108": "Loopback", "113": "LinuxSll", "189": "Usb", "201": "Bluetooth", "276": "LinuxSll2" }, label: "link-layer type of this interface" }),
  u16("reserved", { endian: "little" }),
  u32("snapLen", { endian: "little", label: "max captured bytes per packet (0 = no limit)" }),
]);

const PcapngEpb = struct("PcapngEpb", [
  u32("interfaceId", { endian: "little", label: "index of the interface this arrived on" }),
  u32("timestampHi", { endian: "little", label: "high 32 bits of the timestamp" }),
  u32("timestampLo", { endian: "little", label: "low 32 bits of the timestamp" }),
  u32("capturedLen", { endian: "little", label: "bytes of the packet stored here" }),
  u32("originalLen", { endian: "little", label: "length of the packet on the wire" }),
]);

const PcapngSpb = struct("PcapngSpb", [
  u32("originalLen", { endian: "little", label: "length of the packet on the wire" }),
]);

const PcapngNrb = struct("PcapngNrb", [
  u16("recordType", { endian: "little", label: "1 = IPv4, 2 = IPv6, 0 = end of records" }),
  u16("recordLength", { endian: "little", label: "length of the record value" }),
]);

const PcapngIsb = struct("PcapngIsb", [
  u32("interfaceId", { endian: "little", label: "index of the interface these stats describe" }),
  u32("timestampHi", { endian: "little" }),
  u32("timestampLo", { endian: "little" }),
]);

const PcapngBlock = struct("PcapngBlock", [
  u32("blockType", { endian: "little", label: "block type (0x0A0D0D0A = section header)" }),
  u32("blockLength", { endian: "little", label: "total block length, both length fields included" }),
]);

export default definePack({
  name: "PCAPNG",
  endian: "little",
  pointerSize: 4,
  types: [PcapngShb, PcapngIdb, PcapngEpb, PcapngSpb, PcapngNrb, PcapngIsb, PcapngBlock],
  nodes: {
    "entry": structNode(PcapngShb, { label: "PcapngShb（入口）" }),
    "PcapngIdb": structNode(PcapngIdb, { label: "PcapngIdb" }),
    "PcapngEpb": structNode(PcapngEpb, { label: "PcapngEpb" }),
    "PcapngSpb": structNode(PcapngSpb, { label: "PcapngSpb" }),
    "PcapngNrb": structNode(PcapngNrb, { label: "PcapngNrb" }),
    "PcapngIsb": structNode(PcapngIsb, { label: "PcapngIsb" }),
    "PcapngBlock": structNode(PcapngBlock, { label: "PcapngBlock" }),
  },
});


/*
未移植项：
- PcapngEpb.packetData: 变长字节块未移植
- PcapngBlock.bodyLen: computed 字段未移植
- PcapngBlock.body: 变长字节块未移植
- Pcapng.blocks: repeat 字段未移植，后续布局在此停止
- Pcapng: 没有可移植的固定前缀字段
- 入口 struct Pcapng 没有可移植字段，改用 PcapngShb
*/
