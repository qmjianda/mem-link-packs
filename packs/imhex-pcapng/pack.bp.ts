/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pcapng.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Version = struct("Version", [
  u16("major", {  }),
  u16("minor", {  }),
]);

const SectionHeaderBlockBody = struct("SectionHeaderBlockBody", [
  u32("sectionbyteorder", { values: { "439041101": "Little", "1295788826": "Big" } }),
  record("version", Version),
  u64("section_len", {  }),
]);

const InterfaceDescBlockBody = struct("InterfaceDescBlockBody", [
  u16("link_type", { values: { "0": "LINKTYPE_NULL", "1": "LINKTYPE_ETHERNET", "3": "LINKTYPE_AX25", "6": "LINKTYPE_IEEE802_5", "7": "LINKTYPE_ARCNET_BSD", "8": "LINKTYPE_SLIP", "9": "LINKTYPE_PPP", "10": "LINKTYPE_FDDI", "50": "LINKTYPE_PPP_HDLC", "51": "LINKTYPE_PPP_ETHER", "100": "LINKTYPE_ATM_RFC1483", "101": "LINKTYPE_RAW", "104": "LINKTYPE_C_HDLC", "105": "LINKTYPE_IEEE802_11", "107": "LINKTYPE_FRELAY", "108": "LINKTYPE_LOOP", "113": "LINKTYPE_LINUX_SLL", "114": "LINKTYPE_LTALK", "117": "LINKTYPE_PFLOG", "119": "LINKTYPE_IEEE802_11_PRISM", "122": "LINKTYPE_IP_OVER_FC", "123": "LINKTYPE_SUNATM", "127": "LINKTYPE_IEEE802_11_RADIOTAP", "129": "LINKTYPE_ARCNET_LINUX", "138": "LINKTYPE_APPLE_IP_OVER_IEEE1394", "139": "LINKTYPE_MTP2_WITH_PHDR", "140": "LINKTYPE_MTP2", "141": "LINKTYPE_MTP3", "142": "LINKTYPE_SCCP", "143": "LINKTYPE_DOCSIS", "144": "LINKTYPE_LINUX_IRDA", "163": "LINKTYPE_IEEE802_11_AVS", "165": "LINKTYPE_BACNET_MS_TP", "166": "LINKTYPE_PPP_PPPD", "169": "LINKTYPE_GPRS_LLC", "170": "LINKTYPE_GPF_T", "171": "LINKTYPE_GPF_F", "177": "LINKTYPE_LINUX_LAPD", "182": "LINKTYPE_MFR", "187": "LINKTYPE_BLUETOOTH_HCI_H4", "189": "LINKTYPE_USB_LINUX", "192": "LINKTYPE_PPI", "195": "LINKTYPE_IEEE802_15_4_WITHFCS", "196": "LINKTYPE_SITA", "197": "LINKTYPE_ERF", "201": "LINKTYPE_BLUETOOTH_HCI_H4_WITH_PHDR", "202": "LINKTYPE_AX25_KISS", "203": "LINKTYPE_LAPD", "204": "LINKTYPE_PPP_WITH_DIR", "205": "LINKTYPE_C_HDLC_WITH_DIR", "206": "LINKTYPE_FRELAY_WITH_DIR", "207": "LINKTYPE_LAPB_WITH_DIR", "209": "LINKTYPE_IPMB_LINUX", "210": "LINKTYPE_FLEXRAY", "215": "LINKTYPE_IEEE802_15_4_NONASK_PHY", "220": "LINKTYPE_USB_LINUX_MMAPPED", "224": "LINKTYPE_FC_2", "225": "LINKTYPE_FC_2_WITH_FRAME_DELIMS", "226": "LINKTYPE_IPNET", "227": "LINKTYPE_CAN_SOCKETCAN", "228": "LINKTYPE_IPV4", "229": "LINKTYPE_IPV6", "230": "LINKTYPE_IEEE802_15_4_NOFCS", "231": "LINKTYPE_DBUS", "235": "LINKTYPE_DVB_CI", "236": "LINKTYPE_MUX27010", "237": "LINKTYPE_STANAG_5066_D_PDU", "239": "LINKTYPE_NFLOG", "240": "LINKTYPE_NETANALYZER", "241": "LINKTYPE_NETANALYZER_TRANSPARENT", "242": "LINKTYPE_IPOIB", "243": "LINKTYPE_MPEG_2_TS", "244": "LINKTYPE_NG40", "245": "LINKTYPE_NFC_LLCP", "247": "LINKTYPE_INFINIBAND", "248": "LINKTYPE_SCTP", "249": "LINKTYPE_USBPCAP", "250": "LINKTYPE_RTAC_SERIAL", "251": "LINKTYPE_BLUETOOTH_LE_LL", "253": "LINKTYPE_NETLINK", "254": "LINKTYPE_BLUETOOTH_LINUX_MONITOR", "255": "LINKTYPE_BLUETOOTH_BREDR_BB", "256": "LINKTYPE_BLUETOOTH_LE_LL_WITH_PHDR", "257": "LINKTYPE_PROFIBUS_DL", "258": "LINKTYPE_PKTAP", "259": "LINKTYPE_EPON", "260": "LINKTYPE_IPMI_HPM_2", "261": "LINKTYPE_ZWAVE_R1_R2", "262": "LINKTYPE_ZWAVE_R3", "263": "LINKTYPE_WATTSTOPPER_DLM", "264": "LINKTYPE_ISO_14443", "265": "LINKTYPE_RDS", "266": "LINKTYPE_USB_DARWIN", "268": "LINKTYPE_SDLC", "270": "LINKTYPE_LORATAP", "271": "LINKTYPE_VSOCK", "272": "LINKTYPE_NORDIC_BLE", "273": "LINKTYPE_DOCSIS31_XRA31", "274": "LINKTYPE_ETHERNET_MPACKET", "275": "LINKTYPE_DISPLAYPORT_AUX", "276": "LINKTYPE_LINUX_SLL2", "278": "LINKTYPE_OPENVIZSLA", "279": "LINKTYPE_EBHSCR", "280": "LINKTYPE_VPP_DISPATCH", "281": "LINKTYPE_DSA_TAG_BRCM", "282": "LINKTYPE_DSA_TAG_BRCM_PREPEND", "283": "LINKTYPE_IEEE802_15_4_TAP", "284": "LINKTYPE_DSA_TAG_DSA", "285": "LINKTYPE_DSA_TAG_EDSA", "286": "LINKTYPE_ELEE", "287": "LINKTYPE_Z_WAVE_SERIAL", "288": "LINKTYPE_USB_2_0", "289": "LINKTYPE_ATSC_ALP", "290": "LINKTYPE_ETW" } }),
  u16("reserved", {  }),
  u32("snap_len", {  }),
]);

const EnhancedPacketBlockBody = struct("EnhancedPacketBlockBody", [
  u32("interface_id", {  }),
  u64("timestamp", {  }),
  u32("captured_len", {  }),
  u32("pkt_len", {  }),
]);

const InterfaceStatsBlock = struct("InterfaceStatsBlock", [
  u32("interface_id", {  }),
  u64("timestamp", {  }),
]);

const SimplePacketBlockBody = struct("SimplePacketBlockBody", [
  u32("pkt_len", {  }),
  char("data", {  }),
]);

const CustomBlockBody = struct("CustomBlockBody", [
  u32("pen", {  }),
]);

const EncryptionBlockBody = struct("EncryptionBlockBody", [
  u32("comp_type", { values: { "1414288203": "TLS", "1397966923": "SSH", "1464290124": "WIREGUARD", "1515083595": "ZIGBEE_NWK_KEY", "1514229843": "ZIGBEE_APS_KEY" } }),
  u32("secrets_len", {  }),
]);

export default definePack({
  name: "PcapNG",
  endian: "little",
  pointerSize: 8,
  types: [Version, SectionHeaderBlockBody, InterfaceDescBlockBody, EnhancedPacketBlockBody, InterfaceStatsBlock, SimplePacketBlockBody, CustomBlockBody, EncryptionBlockBody],
  nodes: {
    "entry": structNode(Version, { label: "Version（入口）" }),
    "SectionHeaderBlockBody": structNode(SectionHeaderBlockBody, { label: "SectionHeaderBlockBody" }),
    "InterfaceDescBlockBody": structNode(InterfaceDescBlockBody, { label: "InterfaceDescBlockBody" }),
    "EnhancedPacketBlockBody": structNode(EnhancedPacketBlockBody, { label: "EnhancedPacketBlockBody" }),
    "InterfaceStatsBlock": structNode(InterfaceStatsBlock, { label: "InterfaceStatsBlock" }),
    "SimplePacketBlockBody": structNode(SimplePacketBlockBody, { label: "SimplePacketBlockBody" }),
    "CustomBlockBody": structNode(CustomBlockBody, { label: "CustomBlockBody" }),
    "EncryptionBlockBody": structNode(EncryptionBlockBody, { label: "EncryptionBlockBody" }),
  },
});


/*
未移植项：
- Block.block_type: 类型 BlockType 不可移植
*/
