/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/sdb.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const TypeId = struct("TypeId", [
  bits("id", 12, { at: 0, bit: 0, unit: 2, label: "id" }),
  bits("type", 4, { at: 0, bit: 12, unit: 2, label: "type" }),
]);

const Tag = struct("Tag", [
  record("tag", TypeId),
]);

const Header = struct("Header", [
  u32("Major", {  }),
  u32("Minor", {  }),
  str("Magic", { size: 4 }),
]);

export default definePack({
  name: "SDB File (Shim DataBase file)",
  endian: "little",
  pointerSize: 8,
  types: [TypeId, Tag, Header],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "TypeId": structNode(TypeId, { label: "TypeId" }),
    "Tag": structNode(Tag, { label: "Tag" }),
  },
});

