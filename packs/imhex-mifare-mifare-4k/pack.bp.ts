/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/mifare/mifare-4k.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const SectorTrailer = struct("SectorTrailer", [
  bytes("keyA", { size: 6 }),
  u8("acc0", {  }),
  u8("acc1", {  }),
  u8("acc2", {  }),
  u8("userData", {  }),
  bytes("keyB", { size: 6 }),
]);

const ManufacturerBlock = struct("ManufacturerBlock", [
  bytes("uid", { size: 4 }),
  u8("bcc", {  }),
  u8("sak", {  }),
  u16("atqa", {  }),
  bytes("manufacturerData", { size: 8 }),
]);

const DataBlock = struct("DataBlock", [
  bytes("data", { size: 16 }),
]);

const Sector0 = struct("Sector0", [
  record("manufacturerBlock", ManufacturerBlock),
  record("block1", DataBlock),
  record("block2", DataBlock),
  record("trailer", SectorTrailer),
]);

const SmallSector = struct("SmallSector", [
  record("block0", DataBlock),
  record("block1", DataBlock),
  record("block2", DataBlock),
  record("trailer", SectorTrailer),
]);

const LargeSector = struct("LargeSector", [
  record("block0", DataBlock),
  record("block1", DataBlock),
  record("block2", DataBlock),
  record("block3", DataBlock),
  record("block4", DataBlock),
  record("block5", DataBlock),
  record("block6", DataBlock),
  record("block7", DataBlock),
  record("block8", DataBlock),
  record("block9", DataBlock),
  record("block10", DataBlock),
  record("block11", DataBlock),
  record("block12", DataBlock),
  record("block13", DataBlock),
  record("block14", DataBlock),
  record("trailer", SectorTrailer),
]);

const MifareClassic4K = struct("MifareClassic4K", [
  record("sector0", Sector0),
  array("smallSectors", SmallSector, 31),
  array("largeSectors", LargeSector, 8),
]);

export default definePack({
  name: "MIFARE Classic EV1 4K (MF1S70yyX/V1), ISO/IEC 14443-3 Type A",
  endian: "little",
  pointerSize: 8,
  types: [SectorTrailer, ManufacturerBlock, DataBlock, Sector0, SmallSector, LargeSector, MifareClassic4K],
  nodes: {
    "entry": structNode(MifareClassic4K, { label: "MifareClassic4K（入口）" }),
    "SectorTrailer": structNode(SectorTrailer, { label: "SectorTrailer" }),
    "ManufacturerBlock": structNode(ManufacturerBlock, { label: "ManufacturerBlock" }),
    "DataBlock": structNode(DataBlock, { label: "DataBlock" }),
    "Sector0": structNode(Sector0, { label: "Sector0" }),
    "SmallSector": structNode(SmallSector, { label: "SmallSector" }),
    "LargeSector": structNode(LargeSector, { label: "LargeSector" }),
  },
});

