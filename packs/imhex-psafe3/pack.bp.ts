/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/psafe3.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Prologue = struct("Prologue", [
  bytes("SALT", { size: 32 }),
  u32("ITER", {  }),
  bytes("HPP", { size: 32 }),
  bytes("B1", { size: 16 }),
  bytes("B2", { size: 16 }),
  bytes("B3", { size: 16 }),
  bytes("B4", { size: 16 }),
  bytes("IV", { size: 16 }),
]);

const EOF = struct("EOF", [
  bytes("HMAC", { size: 32 }),
]);

export default definePack({
  name: "Password Safe V3",
  endian: "little",
  pointerSize: 8,
  types: [Prologue, EOF],
  nodes: {
    "entry": structNode(Prologue, { label: "Prologue（入口）" }),
    "EOF": structNode(EOF, { label: "EOF" }),
  },
});

