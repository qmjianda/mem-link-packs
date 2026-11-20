/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gen.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const M68000Vectors = struct("M68000Vectors", [
  u32("stackPointerReset", {  }),
  u32("programCounterReset", {  }),
  u32("busError", {  }),
  u32("addressError", {  }),
  u32("illegalInstruction", {  }),
  u32("divisionByZero", {  }),
  u32("chkInstruction", {  }),
  u32("trapVInstruction", {  }),
  u32("privilegeViolation", {  }),
  u32("trace", {  }),
  u32("lineAInstruction", {  }),
  u32("lineFInstruction", {  }),
  pad(12),
  u32("uninitializedInterruptVector", {  }),
  pad(32),
  u32("spuriousInterrupt", {  }),
  array("interruptAutovectors", "u32", 7),
  array("traps", "u32", 16),
]);

const Info = struct("Info", [
  str("softwareType", { size: 2 }),
  char("space", {  }),
  str("serialNumber", { size: 8 }),
  char("dash", {  }),
  str("revision", { size: 2 }),
]);

const RAMType = struct("RAMType", [
  bits("addresses", 1, { at: 0, bit: 0, unit: 1, label: "addresses" }),
  bits("bits", 2, { at: 0, bit: 4, unit: 1, label: "bits" }),
  bits("saves", 1, { at: 0, bit: 6, unit: 1, label: "saves" }),
  bits("sig", 1, { at: 0, bit: 7, unit: 1, label: "sig" }),
]);

const ExtraMemory = struct("ExtraMemory", [
  str("signature", { size: 2 }),
  record("ramType", RAMType),
  char("memoryType", { values: { "0": "RAM", "1": "EEPROM" } }),
  u32("startAddress", {  }),
  u32("endAddress", {  }),
]);

const ModemSupport = struct("ModemSupport", [
  str("signature", { size: 2 }),
  str("publisher", { size: 4 }),
  str("gameNumber", { size: 2 }),
  char("comma", {  }),
  char("version", {  }),
  str("microphone", { size: 2 }),
]);

const Header = struct("Header", [
  str("systemType", { size: 16 }),
  str("copyright", { size: 16 }),
  str("domesticTitle", { size: 48 }),
  str("overseasTitle", { size: 48 }),
  record("info", Info),
  u16("checksum", {  }),
  array("deviceType", "char", 16),
  array("romAddressRange", "u32", 2),
  array("ramAddressRange", "u32", 2),
]);

export default definePack({
  name: "Sega Genesis/MegaDrive header",
  endian: "big",
  pointerSize: 8,
  types: [M68000Vectors, Info, RAMType, ExtraMemory, ModemSupport, Header],
  nodes: {
    "entry": structNode(M68000Vectors, { label: "M68000Vectors（入口）" }),
    "Info": structNode(Info, { label: "Info" }),
    "RAMType": structNode(RAMType, { label: "RAMType" }),
    "ExtraMemory": structNode(ExtraMemory, { label: "ExtraMemory" }),
    "ModemSupport": structNode(ModemSupport, { label: "ModemSupport" }),
    "Header": structNode(Header, { label: "Header" }),
  },
});

