/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pyinstaller.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Cookie = struct("Cookie", [
  str("signature", { size: 8 }),
  u32("len", {  }),
  u32("TOC", {  }),
  i32("TOClen", {  }),
  i32("pyVers", {  }),
  str("pyLibName", { size: 64 }),
]);

const ZlibArchive = struct("ZlibArchive", [
  str("pyzMagic", { size: 4 }),
  str("pyMagic", { size: 4 }),
  u32("pyzTOCPos", {  }),
]);

const TOC = struct("TOC", [
  i32("structLen", {  }),
  u32("pos", {  }),
  u32("len", {  }),
  u32("uLen", {  }),
  bool("cFlag", {  }),
  u8("typcd", { values: { "98": "Binary", "122": "Zlib", "109": "Module", "115": "Script", "120": "Data", "111": "RuntimeOption" } }),
]);

export default definePack({
  name: "PyInstaller binray",
  endian: "big",
  pointerSize: 8,
  types: [Cookie, ZlibArchive, TOC],
  nodes: {
    "entry": structNode(Cookie, { label: "Cookie（入口）" }),
    "ZlibArchive": structNode(ZlibArchive, { label: "ZlibArchive" }),
    "TOC": structNode(TOC, { label: "TOC" }),
  },
});

