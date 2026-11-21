/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/openssh.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const String = struct("String", [
  u32("length", {  }),
]);

const PublicKey = struct("PublicKey", [
  u32("total_size", {  }),
  record("name", String),
  record("key", String),
]);

const PrivateKey = struct("PrivateKey", [
  u32("total_size", {  }),
  u64("maybe_checksum", {  }),
  record("key_type", String),
]);

export default definePack({
  name: "OpenSSH private key",
  endian: "big",
  pointerSize: 8,
  types: [String, PublicKey, PrivateKey],
  nodes: {
    "entry": structNode(String, { label: "String（入口）" }),
    "PublicKey": structNode(PublicKey, { label: "PublicKey" }),
    "PrivateKey": structNode(PrivateKey, { label: "PrivateKey" }),
  },
});


/*
未移植项：
- KeyMaterial.header: 类型 Header 不可移植
*/
