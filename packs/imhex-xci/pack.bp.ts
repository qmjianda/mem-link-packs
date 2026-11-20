/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/xci.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Index = struct("Index", [
  bits("titleKeyDecIndex", 4, { at: 0, bit: 0, unit: 1, label: "titleKeyDecIndex" }),
  bits("kekIndex", 4, { at: 0, bit: 4, unit: 1, label: "kekIndex" }),
]);

const Flags = struct("Flags", [
  bits("autoBoot", 1, { at: 0, bit: 0, unit: 1, label: "autoBoot" }),
  bits("historyErase", 1, { at: 0, bit: 1, unit: 1, label: "historyErase" }),
  bits("repairTool", 1, { at: 0, bit: 2, unit: 1, label: "repairTool" }),
  bits("differentRegionCupToTerraDevice", 1, { at: 0, bit: 3, unit: 1, label: "differentRegionCupToTerraDevice" }),
  bits("differentRegionCupToGlobalDevice", 1, { at: 0, bit: 4, unit: 1, label: "differentRegionCupToGlobalDevice" }),
  bits("hasNewCardHeader", 1, { at: 0, bit: 7, unit: 1, label: "hasNewCardHeader" }),
]);

const SelSec = struct("SelSec", [
  u16("t1", {  }),
  u16("t2", {  }),
]);

const CardHeader = struct("CardHeader", [
  bytes("headerSignature", { size: 256 }),
]);

const FileEntry = struct("FileEntry", [
  u64("dataOffset", {  }),
]);

const XCI = struct("XCI", [
  record("header", CardHeader),
]);

export default definePack({
  name: "Nintendo Switch XCI cartridge ROM",
  endian: "little",
  pointerSize: 8,
  types: [Index, Flags, SelSec, CardHeader, FileEntry, XCI],
  nodes: {
    "entry": structNode(XCI, { label: "XCI（入口）" }),
    "Index": structNode(Index, { label: "Index" }),
    "Flags": structNode(Flags, { label: "Flags" }),
    "SelSec": structNode(SelSec, { label: "SelSec" }),
    "CardHeader": structNode(CardHeader, { label: "CardHeader" }),
    "FileEntry": structNode(FileEntry, { label: "FileEntry" }),
  },
});

