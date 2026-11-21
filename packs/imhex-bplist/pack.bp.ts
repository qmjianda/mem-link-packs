/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bplist.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const CFBinaryPlistObject = struct("CFBinaryPlistObject", [
  u8("marker", {  }),
]);

const CFBinaryPlistTrailer = struct("CFBinaryPlistTrailer", [
  bytes("unused", { size: 5 }),
  u8("sortVersion", {  }),
  u8("offsetIntSize", { endian: "big" }),
]);

export default definePack({
  name: "Apple binary property list",
  endian: "little",
  pointerSize: 8,
  types: [CFBinaryPlistObject, CFBinaryPlistTrailer],
  nodes: {
    "entry": structNode(CFBinaryPlistTrailer, { label: "CFBinaryPlistTrailer（入口）" }),
    "CFBinaryPlistObject": structNode(CFBinaryPlistObject, { label: "CFBinaryPlistObject" }),
  },
});

