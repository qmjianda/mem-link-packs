/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/nes.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Flags = struct("Flags", [
  bits("mirroring", 1, { at: 0, bit: 0, unit: 1, label: "mirroring" }),
  bits("ignoreMirroring", 1, { at: 0, bit: 1, unit: 1, label: "ignoreMirroring" }),
  bits("trainerOf512Bytes", 1, { at: 0, bit: 2, unit: 1, label: "trainerOf512Bytes" }),
  bits("batterybackedPRGRAM", 1, { at: 0, bit: 3, unit: 1, label: "batterybackedPRGRAM" }),
  bits("lowerMapperNybble", 4, { at: 0, bit: 4, unit: 1, label: "lowerMapperNybble" }),
]);

const iNESFlags7 = struct("iNESFlags7", [
  bits("consoleType", 2, { at: 0, bit: 0, unit: 1, label: "consoleType" }),
  bits("nes2Format", 2, { at: 0, bit: 2, unit: 1, label: "nes2Format" }),
  bits("higherMapperNybble", 4, { at: 0, bit: 4, unit: 1, label: "higherMapperNybble" }),
]);

const iNESFlags9 = struct("iNESFlags9", [
  bits("tvSystem", 1, { at: 0, bit: 0, unit: 1, label: "tvSystem" }),
]);

const iNESFlags10 = struct("iNESFlags10", [
  bits("dualTVSystem", 2, { at: 0, bit: 0, unit: 1, label: "dualTVSystem" }),
  bits("prgRAM", 1, { at: 0, bit: 4, unit: 1, label: "prgRAM" }),
  bits("busConflicts", 1, { at: 0, bit: 5, unit: 1, label: "busConflicts" }),
]);

const MapperExtra = struct("MapperExtra", [
  bits("highestMapperNybble", 4, { at: 0, bit: 0, unit: 1, label: "highestMapperNybble" }),
  bits("submapper", 4, { at: 0, bit: 4, unit: 1, label: "submapper" }),
]);

const ROMSize = struct("ROMSize", [
  bits("extraPRGROMSize", 4, { at: 0, bit: 0, unit: 1, label: "extraPRGROMSize" }),
  bits("extraCHRROMSize", 4, { at: 0, bit: 4, unit: 1, label: "extraCHRROMSize" }),
]);

const PRGRAMSize = struct("PRGRAMSize", [
  bits("prgRAMShiftCount", 4, { at: 0, bit: 0, unit: 1, label: "prgRAMShiftCount" }),
  bits("eepromShiftCount", 4, { at: 0, bit: 4, unit: 1, label: "eepromShiftCount" }),
]);

const CHRRAMSize = struct("CHRRAMSize", [
  bits("chrRAMSizeShiftCount", 4, { at: 0, bit: 0, unit: 1, label: "chrRAMSizeShiftCount" }),
  bits("chrNVRAMSizeShiftCount", 4, { at: 0, bit: 4, unit: 1, label: "chrNVRAMSizeShiftCount" }),
]);

const Timing = struct("Timing", [
  bits("processorTiming", 2, { at: 0, bit: 0, unit: 1, label: "processorTiming" }),
]);

const VsSystemType = struct("VsSystemType", [
  bits("vsPPUType", 4, { at: 0, bit: 0, unit: 1, label: "vsPPUType" }),
  bits("vsHardwareType", 4, { at: 0, bit: 4, unit: 1, label: "vsHardwareType" }),
]);

const ExtendedConsoleTypeByte = struct("ExtendedConsoleTypeByte", [
  bits("type", 4, { at: 0, bit: 0, unit: 1, label: "type" }),
]);

const MiscellaneousROMsHeaderByte = struct("MiscellaneousROMsHeaderByte", [
  bits("numberOfMiscellaneousROMs", 2, { at: 0, bit: 0, unit: 1, label: "numberOfMiscellaneousROMs" }),
]);

const DefaultExpansionDevice = struct("DefaultExpansionDevice", [
  bits("defaultExpansionDevice", 6, { at: 0, bit: 0, unit: 1, label: "defaultExpansionDevice" }),
]);

const NES2Attributes = struct("NES2Attributes", [
  record("mapperExtra", MapperExtra),
  record("romSize", ROMSize),
  record("prgRAMSize", PRGRAMSize),
  record("chrRAMSize", CHRRAMSize),
  record("timing", Timing),
]);

const Header = struct("Header", [
  str("identifier", { size: 4 }),
  u8("prgROMSizeBy16KiBs", {  }),
  u8("chrROMSizeBy8KiBs", {  }),
  record("flags", Flags),
]);

const MemorySize = struct("MemorySize", [
  bits("prgROMSizeBy16KiBs", 4, { at: 0, bit: 0, unit: 1, label: "prgROMSizeBy16KiBs" }),
  bits("chrType", 1, { at: 0, bit: 4, unit: 1, label: "chrType" }),
  bits("chrSize", 3, { at: 0, bit: 5, unit: 1, label: "chrSize" }),
]);

const CartridgeType = struct("CartridgeType", [
  bits("nametableArrangement", 1, { at: 0, bit: 0, unit: 1, label: "nametableArrangement" }),
  bits("mapper", 7, { at: 0, bit: 1, unit: 1, label: "mapper" }),
]);

const Footer = struct("Footer", [
  str("title", { size: 16 }),
  u16("programChecksum", {  }),
  u16("characterChecksum", {  }),
  record("memorySize", MemorySize),
  record("cartridgeType", CartridgeType),
  u8("encodingType", { values: { "0": "None", "1": "ASCII", "2": "JIS" } }),
  u8("titleLength", {  }),
  u8("licenseeID", {  }),
  u8("complementaryChecksum", {  }),
]);

export default definePack({
  name: "Nintendo Entertainment System ROM",
  endian: "little",
  pointerSize: 8,
  types: [Flags, iNESFlags7, iNESFlags9, iNESFlags10, MapperExtra, ROMSize, PRGRAMSize, CHRRAMSize, Timing, VsSystemType, ExtendedConsoleTypeByte, MiscellaneousROMsHeaderByte, DefaultExpansionDevice, NES2Attributes, Header, MemorySize, CartridgeType, Footer],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "Flags": structNode(Flags, { label: "Flags" }),
    "iNESFlags7": structNode(iNESFlags7, { label: "iNESFlags7" }),
    "iNESFlags9": structNode(iNESFlags9, { label: "iNESFlags9" }),
    "iNESFlags10": structNode(iNESFlags10, { label: "iNESFlags10" }),
    "MapperExtra": structNode(MapperExtra, { label: "MapperExtra" }),
    "ROMSize": structNode(ROMSize, { label: "ROMSize" }),
    "PRGRAMSize": structNode(PRGRAMSize, { label: "PRGRAMSize" }),
    "CHRRAMSize": structNode(CHRRAMSize, { label: "CHRRAMSize" }),
    "Timing": structNode(Timing, { label: "Timing" }),
    "VsSystemType": structNode(VsSystemType, { label: "VsSystemType" }),
    "ExtendedConsoleTypeByte": structNode(ExtendedConsoleTypeByte, { label: "ExtendedConsoleTypeByte" }),
    "MiscellaneousROMsHeaderByte": structNode(MiscellaneousROMsHeaderByte, { label: "MiscellaneousROMsHeaderByte" }),
    "DefaultExpansionDevice": structNode(DefaultExpansionDevice, { label: "DefaultExpansionDevice" }),
    "NES2Attributes": structNode(NES2Attributes, { label: "NES2Attributes" }),
    "MemorySize": structNode(MemorySize, { label: "MemorySize" }),
    "CartridgeType": structNode(CartridgeType, { label: "CartridgeType" }),
    "Footer": structNode(Footer, { label: "Footer" }),
  },
});

