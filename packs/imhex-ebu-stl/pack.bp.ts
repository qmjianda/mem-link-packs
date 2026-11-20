/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ebu_stl.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const GSI_Block = struct("GSI_Block", [
  str("cpn", { size: 3 }),
  str("dfc", { size: 8 }),
  char("dsc", {  }),
  str("cct", { size: 2 }),
  str("lc", { size: 2 }),
  str("opt", { size: 32 }),
  str("oet", { size: 32 }),
  str("tpt", { size: 32 }),
  str("tet", { size: 32 }),
  str("tn", { size: 32 }),
  str("tcd", { size: 32 }),
  str("slr", { size: 16 }),
  str("cd", { size: 6 }),
  str("rd", { size: 6 }),
  str("rn", { size: 2 }),
  str("tnb", { size: 5 }),
  str("tns", { size: 5 }),
  str("tng", { size: 3 }),
  str("mnc", { size: 2 }),
  str("mnr", { size: 2 }),
  char("tcs", {  }),
  str("tcp", { size: 8 }),
  str("tcf", { size: 8 }),
  u8("tnd", {  }),
  u8("dsn", {  }),
  str("co", { size: 3 }),
  str("pub", { size: 32 }),
  str("en", { size: 32 }),
  str("ecd", { size: 32 }),
  bytes("spare", { size: 75 }),
  bytes("uda", { size: 576 }),
]);

const TTI_Block = struct("TTI_Block", [
  u8("sgn", {  }),
  u16("sn", {  }),
  u8("ebn", {  }),
  u8("cs", {  }),
  u8("tci_hours", {  }),
  u8("tci_mins", {  }),
  u8("tci_secs", {  }),
  u8("tci_frames", {  }),
  u8("tco_hours", {  }),
  u8("tco_mins", {  }),
  u8("tco_secs", {  }),
  u8("tco_frames", {  }),
  u8("vp", {  }),
  u8("jc", {  }),
  u8("cf", {  }),
  bytes("tf", { size: 112 }),
]);

const EBU_STL = struct("EBU_STL", [
  record("gsi", GSI_Block),
]);

export default definePack({
  name: "EBU STL Subtitle File Format (EBU Tech 3264)",
  endian: "big",
  pointerSize: 8,
  types: [GSI_Block, TTI_Block, EBU_STL],
  nodes: {
    "entry": structNode(EBU_STL, { label: "EBU_STL（入口）" }),
    "GSI_Block": structNode(GSI_Block, { label: "GSI_Block" }),
    "TTI_Block": structNode(TTI_Block, { label: "TTI_Block" }),
  },
});

