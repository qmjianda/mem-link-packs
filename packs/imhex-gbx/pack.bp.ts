/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gbx.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const SachenMMC2SolderPad = struct("SachenMMC2SolderPad", [
  bits("opt1", 1, { at: 0, bit: 5, unit: 1, label: "opt1" }),
  bits("openBus512KiBOuterBanks", 1, { at: 0, bit: 6, unit: 1, label: "openBus512KiBOuterBanks" }),
  bits("openBus1MiBOuterBanks", 1, { at: 0, bit: 7, unit: 1, label: "openBus1MiBOuterBanks" }),
]);

const VastFameRunningValueType = struct("VastFameRunningValueType", [
  bits("TaiwanReleases", 1, { at: 0, bit: 0, unit: 1, label: "TaiwanReleases" }),
  bits("MainlandChinaReleases", 1, { at: 0, bit: 1, unit: 1, label: "MainlandChinaReleases" }),
]);

const CartridgeInformation = struct("CartridgeInformation", [
  str("mapper", { size: 4 }),
  bool("battery", {  }),
  bool("rumble", {  }),
  bool("timer", {  }),
  pad(1),
  u32("romSize", {  }),
  u32("ramSize", {  }),
]);

const GBXMetadata = struct("GBXMetadata", [
  u32("footerSize", {  }),
  u32("majorVersion", {  }),
  u32("minorVersion", {  }),
  str("signature", { size: 4 }),
]);

const GBXFooter = struct("GBXFooter", [
  record("cartInfo", CartridgeInformation),
  record("metadata", GBXMetadata),
]);

export default definePack({
  name: "GameBoy ROM file GBX footer",
  endian: "little",
  pointerSize: 8,
  types: [SachenMMC2SolderPad, VastFameRunningValueType, CartridgeInformation, GBXMetadata, GBXFooter],
  nodes: {
    "entry": structNode(SachenMMC2SolderPad, { label: "SachenMMC2SolderPad（入口）" }),
    "VastFameRunningValueType": structNode(VastFameRunningValueType, { label: "VastFameRunningValueType" }),
    "CartridgeInformation": structNode(CartridgeInformation, { label: "CartridgeInformation" }),
    "GBXMetadata": structNode(GBXMetadata, { label: "GBXMetadata" }),
    "GBXFooter": structNode(GBXFooter, { label: "GBXFooter" }),
  },
});

