/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/imah.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const imah_chunk_header = struct("imah_chunk_header", [
  bytes("id", { size: 4 }),
  u32("offset", {  }),
  u32("size", {  }),
  u32("attrib", {  }),
  u64("address", {  }),
  bytes("reserved", { size: 8 }),
]);

const imah_header = struct("imah_header", [
  bytes("magic", { size: 4 }),
  u32("header_version", {  }),
  u32("size", {  }),
  bytes("reserved", { size: 4 }),
  u32("header_size", {  }),
  u32("signature_size", {  }),
  u32("payload_size", {  }),
  u32("target_size", {  }),
  u8("os", {  }),
  u8("arch", {  }),
  u8("compression", {  }),
  u8("anti_version", {  }),
  u32("auth_alg", {  }),
  bytes("auth_key", { size: 4 }),
  bytes("enc_key", { size: 4 }),
  bytes("scram_key", { size: 16 }),
  bytes("name", { size: 32 }),
  bytes("type", { size: 4 }),
  u32("version", {  }),
  u32("date", {  }),
  u32("encr_cksum", {  }),
  bytes("reserved2", { size: 16 }),
  bytes("userdata", { size: 16 }),
  bytes("entry", { size: 8 }),
  u32("plain_cksum", {  }),
  u32("chunk_num", {  }),
  bytes("payload_digest", { size: 32 }),
]);

export default definePack({
  name: "DJI Encrypted/Signed Firmware (IM*H)",
  endian: "little",
  pointerSize: 8,
  types: [imah_chunk_header, imah_header],
  nodes: {
    "entry": structNode(imah_header, { label: "imah_header（入口）" }),
    "imah_chunk_header": structNode(imah_chunk_header, { label: "imah_chunk_header" }),
  },
});

