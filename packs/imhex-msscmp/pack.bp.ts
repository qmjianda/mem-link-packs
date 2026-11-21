/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/msscmp.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const msscmp_file_header = struct("msscmp_file_header", [
  u32("pathaddr", {  }),
  u32("nameaddr", {  }),
  u32("fileaddr", { endian: "little" }),
  pad(8),
  u32("samplerate", {  }),
  u32("filesize", {  }),
]);

const msscmp_file = struct("msscmp_file", [
  pad(4),
  u32("headeraddr", {  }),
]);

const msscmp_fileinfo = struct("msscmp_fileinfo", [
  u32("pathaddr", {  }),
  u32("infoaddr", {  }),
]);

const msscmp_header32 = struct("msscmp_header32", [
  pad(16),
  u32("infoaddr", {  }),
  pad(8),
  u32("entryaddr", {  }),
  pad(4),
  u32("infocount", {  }),
  pad(8),
  u32("entrycount", {  }),
]);

const msscmp_header64 = struct("msscmp_header64", [
  pad(20),
  u64("infoaddr", {  }),
  u64("infocount", {  }),
  pad(8),
  u64("entryaddr", {  }),
  pad(20),
  u64("entrycount", {  }),
]);

const msscmp = struct("msscmp", [
  str("magic", { size: 4 }),
]);

export default definePack({
  name: "MSSCMP (Miles Sound System Compressed Archive)",
  endian: "little",
  pointerSize: 8,
  types: [msscmp_file_header, msscmp_file, msscmp_fileinfo, msscmp_header32, msscmp_header64, msscmp],
  nodes: {
    "entry": structNode(msscmp, { label: "msscmp（入口）" }),
    "msscmp_file_header": structNode(msscmp_file_header, { label: "msscmp_file_header" }),
    "msscmp_file": structNode(msscmp_file, { label: "msscmp_file" }),
    "msscmp_fileinfo": structNode(msscmp_fileinfo, { label: "msscmp_fileinfo" }),
    "msscmp_header32": structNode(msscmp_header32, { label: "msscmp_header32" }),
    "msscmp_header64": structNode(msscmp_header64, { label: "msscmp_header64" }),
  },
});

