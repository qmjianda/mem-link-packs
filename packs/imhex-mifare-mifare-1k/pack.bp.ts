/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/mifare/mifare-1k.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
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

const Sector = struct("Sector", [
  record("block0", DataBlock),
  record("block1", DataBlock),
  record("block2", DataBlock),
  record("trailer", SectorTrailer),
]);

const MifareClassic1K = struct("MifareClassic1K", [
  record("sector0", Sector0),
  array("sectors", Sector, 15),
]);

export default definePack({
  name: "MIFARE Classic EV1 1K (MF1S50yyX/V1), ISO/IEC 14443-3 Type A",
  endian: "little",
  pointerSize: 8,
  types: [SectorTrailer, ManufacturerBlock, DataBlock, Sector0, Sector, MifareClassic1K],
  nodes: {
    "entry": structNode(MifareClassic1K, { label: "MifareClassic1K（入口）" }),
    "SectorTrailer": structNode(SectorTrailer, { label: "SectorTrailer" }),
    "ManufacturerBlock": structNode(ManufacturerBlock, { label: "ManufacturerBlock" }),
    "DataBlock": structNode(DataBlock, { label: "DataBlock" }),
    "Sector0": structNode(Sector0, { label: "Sector0" }),
    "Sector": structNode(Sector, { label: "Sector" }),
  },
});

