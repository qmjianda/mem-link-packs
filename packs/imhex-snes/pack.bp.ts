/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/snes.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ExpandedHeader = struct("ExpandedHeader", [
  str("makerID", { size: 2 }),
  str("gameID", { size: 4 }),
  pad(6),
  u8("expansionFlashSize", {  }),
  u8("expansionRAMSize", {  }),
  u8("specialVersion", {  }),
  u8("chipsetSubtype", { values: { "0": "SPC7110", "1": "ST01x", "2": "ST018", "3": "CX4" } }),
]);

const ROMType = struct("ROMType", [
  bits("mappingMode", 4, { at: 0, bit: 0, unit: 1, label: "mappingMode" }),
  bits("speed", 1, { at: 0, bit: 4, unit: 1, label: "speed" }),
  bits("unknown", 1, { at: 0, bit: 5, unit: 1, label: "unknown" }),
]);

const ExtraHardware = struct("ExtraHardware", [
  bits("extraHardwareType", 4, { at: 0, bit: 0, unit: 1, label: "extraHardwareType" }),
  bits("coprocessorType", 4, { at: 0, bit: 4, unit: 1, label: "coprocessorType" }),
]);

const Header = struct("Header", [
  str("title", { size: 21 }),
  record("romType", ROMType),
  record("extraHardware", ExtraHardware),
  u8("romSize", {  }),
  u8("ramSize", {  }),
  u8("country", { values: { "1": "NTSC", "2": "PAL" } }),
  u8("developerID", {  }),
  u8("romVersion", {  }),
  u16("checksumComplement", {  }),
  u16("checksum", {  }),
  pad(4),
  array("vectors", "u16", 6),
  pad(4),
  array("emulationModeVectors", "u16", 6),
]);

export default definePack({
  name: "Super Nintendo Entertainment System ROM header",
  endian: "little",
  pointerSize: 8,
  types: [ExpandedHeader, ROMType, ExtraHardware, Header],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "ExpandedHeader": structNode(ExpandedHeader, { label: "ExpandedHeader" }),
    "ROMType": structNode(ROMType, { label: "ROMType" }),
    "ExtraHardware": structNode(ExtraHardware, { label: "ExtraHardware" }),
  },
});

