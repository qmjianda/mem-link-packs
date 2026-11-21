/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/tmd.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Signature = struct("Signature", [
  u32("type", {  }),
]);

const Cert = struct("Cert", [
  record("sig", Signature),
  str("issuer", { size: 64 }),
  u32("type", {  }),
  str("name", { size: 64 }),
]);

const TMDContent = struct("TMDContent", [
  u32("cid", {  }),
  u16("index", {  }),
  u16("type", {  }),
  u64("csize", {  }),
]);

const TMDInfo = struct("TMDInfo", [
  u16("cid", {  }),
  u16("ccc", {  }),
  bytes("sha256", { size: 32 }),
]);

const TMD = struct("TMD", [
  record("sig", Signature),
  str("issuer", { size: 64 }),
  u8("version", {  }),
  u8("ca_crl_version", {  }),
  u8("signed_crl_version", {  }),
  bool("is_vwii", {  }),
  u64("system_version", {  }),
  u64("title_id", {  }),
  u32("type", {  }),
  u16("group_id", {  }),
]);

export default definePack({
  name: "Nintendo TMD",
  endian: "big",
  pointerSize: 8,
  types: [Signature, Cert, TMDContent, TMDInfo, TMD],
  nodes: {
    "entry": structNode(TMD, { label: "TMD（入口）" }),
    "Signature": structNode(Signature, { label: "Signature" }),
    "Cert": structNode(Cert, { label: "Cert" }),
    "TMDContent": structNode(TMDContent, { label: "TMDContent" }),
    "TMDInfo": structNode(TMDInfo, { label: "TMDInfo" }),
  },
});


/*
未移植项：
- Cert.date: 类型 type_time32_t 不可移植
*/
