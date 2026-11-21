/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/rkvd.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Item = struct("Item", [
  u16("id", {  }),
  u16("offset", {  }),
  u16("size", {  }),
  u16("flag", {  }),
]);

const Header = struct("Header", [
  str("tag", { size: 4 }),
  u32("version", {  }),
  u16("next_index", {  }),
  u16("total_items", {  }),
  u16("free_offset", {  }),
  u16("free_size", {  }),
]);

const VendorStorage = struct("VendorStorage", [
  record("header", Header),
]);

export default definePack({
  name: "Rockchip Vendor Storage",
  endian: "little",
  pointerSize: 8,
  types: [Item, Header, VendorStorage],
  nodes: {
    "entry": structNode(VendorStorage, { label: "VendorStorage（入口）" }),
    "Item": structNode(Item, { label: "Item" }),
    "Header": structNode(Header, { label: "Header" }),
  },
});

