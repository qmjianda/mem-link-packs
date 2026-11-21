/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/unity-asset-bundle.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const v1_Level = struct("v1_Level", [
  u32("compressedSize", {  }),
  u32("decompressedSize", {  }),
]);

const v1_Header = struct("v1_Header", [
  u32("nodeCount", {  }),
]);

const v2_BlockInfo = struct("v2_BlockInfo", [
  u32("decompressedSize", {  }),
  u32("compressedSize", {  }),
  u16("flags", {  }),
]);

const v2_DirectoryRecord = struct("v2_DirectoryRecord", [
  i64("offset", {  }),
  i64("size", {  }),
  u32("flags", {  }),
]);

export default definePack({
  name: "Unity Asset Bundle",
  endian: "big",
  pointerSize: 8,
  types: [v1_Level, v1_Header, v2_BlockInfo, v2_DirectoryRecord],
  nodes: {
    "entry": structNode(v1_Level, { label: "v1_Level（入口）" }),
    "v1_Header": structNode(v1_Header, { label: "v1_Header" }),
    "v2_BlockInfo": structNode(v2_BlockInfo, { label: "v2_BlockInfo" }),
    "v2_DirectoryRecord": structNode(v2_DirectoryRecord, { label: "v2_DirectoryRecord" }),
  },
});

