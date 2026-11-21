/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gba.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const GBAHeader = struct("GBAHeader", [
  bytes("entryPoint", { size: 4 }),
  bytes("nintendoLogo", { size: 156 }),
  str("gameTitle", { size: 12 }),
  str("gameCode", { size: 4 }),
  str("makerCode", { size: 2 }),
  u8("fixedValue", {  }),
  u8("unitCode", {  }),
  u8("deviceType", {  }),
  bytes("reserved1", { size: 7 }),
  u8("softwareVersion", {  }),
  u8("complementCheck", {  }),
  bytes("reserved2", { size: 2 }),
]);

export default definePack({
  name: "Game Boy Advance ROM Header",
  endian: "little",
  pointerSize: 8,
  types: [GBAHeader],
  nodes: {
    "entry": structNode(GBAHeader, { label: "GBAHeader（入口）" }),
  },
});

