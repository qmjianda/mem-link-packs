/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/flipper_settings.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const SavedStructHeader = struct("SavedStructHeader", [
  u8("magic", {  }),
  u8("version", {  }),
  u8("checksum", {  }),
  u8("flags", {  }),
  u32("timestamp", {  }),
]);

const InfraredSettings = struct("InfraredSettings", [
  u8("tx_pin", { values: { "0": "FuriHalInfraredTxPinInternal", "1": "FuriHalInfraredTxPinExtPA7", "2": "FuriHalInfraredTxPinMax" } }),
  bool("otg_enabled", {  }),
]);

const ExpansionSettings = struct("ExpansionSettings", [
  u8("uart_index", {  }),
]);

const BtSettings = struct("BtSettings", [
  bool("enabled", {  }),
]);

const SavedStructure = struct("SavedStructure", [
  record("header", SavedStructHeader),
]);

const NotificationSettings = struct("NotificationSettings", [
  u8("version", {  }),
  pad(3),
  f32("display_brightness", {  }),
  f32("led_brightness", {  }),
  f32("speaker_volume", {  }),
  u32("display_off_delay_ms", {  }),
  u8("contrast", {  }),
  bool("vibro_on", {  }),
  pad(2),
]);

export default definePack({
  name: "Flipper Zero Settings",
  endian: "little",
  pointerSize: 8,
  types: [SavedStructHeader, InfraredSettings, ExpansionSettings, BtSettings, SavedStructure, NotificationSettings],
  nodes: {
    "entry": structNode(SavedStructHeader, { label: "SavedStructHeader（入口）" }),
    "InfraredSettings": structNode(InfraredSettings, { label: "InfraredSettings" }),
    "ExpansionSettings": structNode(ExpansionSettings, { label: "ExpansionSettings" }),
    "BtSettings": structNode(BtSettings, { label: "BtSettings" }),
    "SavedStructure": structNode(SavedStructure, { label: "SavedStructure" }),
    "NotificationSettings": structNode(NotificationSettings, { label: "NotificationSettings" }),
  },
});


/*
未移植项：
- DesktopSettings.pin_code: 类型 PinCode 不可移植
*/
