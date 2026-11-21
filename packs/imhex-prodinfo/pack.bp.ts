/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/prodinfo.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const WlanCountryCode = struct("WlanCountryCode", [
  str("code", { size: 3 }),
]);

const Cert = struct("Cert", [
  bytes("DeviceKey", { size: 48 }),
  pad(16),
  bytes("DeviceCertificate", { size: 384 }),
  pad(16),
]);

const PRODINFO = struct("PRODINFO", [
  str("MagicNumber", { size: 4 }),
  u32("Version", {  }),
  u32("BodySize", {  }),
  u16("Model", { values: { "1": "NX" } }),
  u16("UpdateCount", {  }),
  pad(16),
  bytes("BodyHash", { size: 32 }),
  str("ConfigurationId1", { size: 30 }),
  pad(2),
  pad(32),
  u32("WlanCountryCodesNum", {  }),
  u32("WlanCountryCodesLastIndex", {  }),
]);

export default definePack({
  name: "Nintendo Switch PRODINFO",
  endian: "little",
  pointerSize: 8,
  types: [WlanCountryCode, Cert, PRODINFO],
  nodes: {
    "entry": structNode(PRODINFO, { label: "PRODINFO（入口）" }),
    "WlanCountryCode": structNode(WlanCountryCode, { label: "WlanCountryCode" }),
    "Cert": structNode(Cert, { label: "Cert" }),
  },
});

