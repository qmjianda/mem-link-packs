/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/chromium_pak.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const IndexEntry = struct("IndexEntry", [
  u16("id", {  }),
  u32("offset", {  }),
]);

const AliasEntry = struct("AliasEntry", [
  u16("id", {  }),
  u16("index", {  }),
]);

const Pak = struct("Pak", [
  u32("version", {  }),
]);

export default definePack({
  name: "Chromium Pak File",
  endian: "little",
  pointerSize: 8,
  types: [IndexEntry, AliasEntry, Pak],
  nodes: {
    "entry": structNode(Pak, { label: "Pak（入口）" }),
    "IndexEntry": structNode(IndexEntry, { label: "IndexEntry" }),
    "AliasEntry": structNode(AliasEntry, { label: "AliasEntry" }),
  },
});

