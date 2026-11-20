/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ntag.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const AccessCapability = struct("AccessCapability", [
  bits("Read", 4, { at: 0, bit: 0, unit: 1, label: "Read" }),
  bits("Write", 4, { at: 0, bit: 4, unit: 1, label: "Write" }),
]);

const CapabilityContainer = struct("CapabilityContainer", [
  u8("magic", {  }),
  u8("version", {  }),
  u8("memorySize", {  }),
  record("accessCapability", AccessCapability),
]);

const NDEFFlags = struct("NDEFFlags", [
  bits("MB", 1, { at: 0, bit: 0, unit: 1, label: "MB" }),
  bits("ME", 1, { at: 0, bit: 1, unit: 1, label: "ME" }),
  bits("CF", 1, { at: 0, bit: 2, unit: 1, label: "CF" }),
  bits("SR", 1, { at: 0, bit: 3, unit: 1, label: "SR" }),
  bits("IL", 1, { at: 0, bit: 4, unit: 1, label: "IL" }),
  bits("TNF", 3, { at: 0, bit: 5, unit: 1, label: "TNF" }),
]);

const NDEF = struct("NDEF", [
  record("flags", NDEFFlags),
  u8("typeLength", {  }),
]);

const LockControl = struct("LockControl", [
  u8("dynamicLockByteOffset", {  }),
  u8("numBits", {  }),
  u8("pageControlInfo", {  }),
]);

const MemoryControl = struct("MemoryControl", [
  u8("reservedBytesOffset", {  }),
  u8("numBytes", {  }),
  u8("pageSize", {  }),
]);

const Length = struct("Length", [
  u8("byte", {  }),
]);

const TLV = struct("TLV", [
  u8("tag", { values: { "0": "NULL", "1": "LockControl", "2": "MemoryControl", "3": "NDEFMessage", "253": "Proprietary", "254": "TerminatorTLV" } }),
]);

const ManufacturerData = struct("ManufacturerData", [
  bytes("serial1", { size: 3 }),
  u8("checkByte0", {  }),
  bytes("serial2", { size: 4 }),
  u8("checkByte1", {  }),
  u8("internal", {  }),
  u16("lockBytes", {  }),
]);

const DynamicLockBytes = struct("DynamicLockBytes", [
  bytes("bytes", { size: 3 }),
  pad(1),
]);

const MIRROR = struct("MIRROR", [
  bits("MIRROR_CONF", 2, { at: 0, bit: 0, unit: 1, label: "MIRROR_CONF" }),
  bits("MIRROR_BYTE", 2, { at: 0, bit: 2, unit: 1, label: "MIRROR_BYTE" }),
  bits("STRG_MOD_EN", 1, { at: 0, bit: 5, unit: 1, label: "STRG_MOD_EN" }),
]);

const ACCESS = struct("ACCESS", [
  bits("PROT", 1, { at: 0, bit: 0, unit: 1, label: "PROT" }),
  bits("CFGLCK", 1, { at: 0, bit: 1, unit: 1, label: "CFGLCK" }),
  bits("NFC_CNT_EN", 1, { at: 0, bit: 3, unit: 1, label: "NFC_CNT_EN" }),
  bits("NFC_CNT_PWD_PROT", 1, { at: 0, bit: 4, unit: 1, label: "NFC_CNT_PWD_PROT" }),
  bits("AUTHLIM", 3, { at: 0, bit: 5, unit: 1, label: "AUTHLIM" }),
]);

const Config = struct("Config", [
  record("MIRROR", MIRROR),
  u8("MIRROR_PAGE", {  }),
  u8("AUTH0", {  }),
  record("ACCESS", ACCESS),
  u32("PWD", {  }),
  u16("PACK", {  }),
]);

const NTAG = struct("NTAG", [
  record("manufacturerData", ManufacturerData),
  record("cc", CapabilityContainer),
]);

export default definePack({
  name: "NTAG213/NTAG215/NTAG216, NFC Forum Type 2 Tag compliant IC",
  endian: "little",
  pointerSize: 8,
  types: [AccessCapability, CapabilityContainer, NDEFFlags, NDEF, LockControl, MemoryControl, Length, TLV, ManufacturerData, DynamicLockBytes, MIRROR, ACCESS, Config, NTAG],
  nodes: {
    "entry": structNode(NTAG, { label: "NTAG（入口）" }),
    "AccessCapability": structNode(AccessCapability, { label: "AccessCapability" }),
    "CapabilityContainer": structNode(CapabilityContainer, { label: "CapabilityContainer" }),
    "NDEFFlags": structNode(NDEFFlags, { label: "NDEFFlags" }),
    "NDEF": structNode(NDEF, { label: "NDEF" }),
    "LockControl": structNode(LockControl, { label: "LockControl" }),
    "MemoryControl": structNode(MemoryControl, { label: "MemoryControl" }),
    "Length": structNode(Length, { label: "Length" }),
    "TLV": structNode(TLV, { label: "TLV" }),
    "ManufacturerData": structNode(ManufacturerData, { label: "ManufacturerData" }),
    "DynamicLockBytes": structNode(DynamicLockBytes, { label: "DynamicLockBytes" }),
    "MIRROR": structNode(MIRROR, { label: "MIRROR" }),
    "ACCESS": structNode(ACCESS, { label: "ACCESS" }),
    "Config": structNode(Config, { label: "Config" }),
  },
});

