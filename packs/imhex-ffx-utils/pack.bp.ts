/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/utils.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const String0 = struct("String0", [
  u16("offset", {  }),
]);

const String0Jp = struct("String0Jp", [
  u16("offset", {  }),
]);

const String = struct("String", [
  u16("offset", {  }),
  u16("hira_offset", {  }),
]);

const StringJp = struct("StringJp", [
  u16("offset", {  }),
  u16("hira_offset", {  }),
]);

const String2 = struct("String2", [
  u16("offset", {  }),
  u16("hira_offset", {  }),
]);

const String2Jp = struct("String2Jp", [
  u16("offset", {  }),
  u16("hira_offset", {  }),
]);

export default definePack({
  name: "Utils",
  endian: "little",
  pointerSize: 8,
  types: [String0, String0Jp, String, StringJp, String2, String2Jp],
  nodes: {
    "entry": structNode(String0, { label: "String0（入口）" }),
    "String0Jp": structNode(String0Jp, { label: "String0Jp" }),
    "String": structNode(String, { label: "String" }),
    "StringJp": structNode(StringJp, { label: "StringJp" }),
    "String2": structNode(String2, { label: "String2" }),
    "String2Jp": structNode(String2Jp, { label: "String2Jp" }),
  },
});

