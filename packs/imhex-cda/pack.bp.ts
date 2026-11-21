/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/cda.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Header = struct("Header", [
  u32("RIFF", {  }),
  i32("size", {  }),
  u32("CDDA", {  }),
  u32("fmt", {  }),
  u32("lenghtofthechunck", {  }),
  u16("versionofcdformat", {  }),
  u16("numberofrange", {  }),
  u32("identifier", {  }),
]);

const DataInfo = struct("DataInfo", [
  u32("range", {  }),
  u32("duration", {  }),
  u8("rangepositionframes", {  }),
  u8("rangepositionseconds", {  }),
  u8("rangepositionminutes", {  }),
  u8("nullbyte", {  }),
  u8("durationtrackframes", {  }),
  u8("durationtrackseconds", {  }),
  u8("durationtrackminutes", {  }),
  u8("nullbytee", {  }),
]);

export default definePack({
  name: "Compact Disc Audio track",
  endian: "little",
  pointerSize: 8,
  types: [Header, DataInfo],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "DataInfo": structNode(DataInfo, { label: "DataInfo" }),
  },
});

