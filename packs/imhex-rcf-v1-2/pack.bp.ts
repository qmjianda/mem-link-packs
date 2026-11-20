/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/rcf_v1_2.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const DataEntry = struct("DataEntry", [
  u32("hash", {  }),
  u32("position", {  }),
  u32("size", {  }),
]);

const NameEntry = struct("NameEntry", [
  u32("length", { endian: "little" }),
]);

const Header = struct("Header", [
  str("signature", { size: 32 }),
  u8("version_major", {  }),
  u8("version_minor", {  }),
  bool("is_bigendian", {  }),
  u8("unk_0", {  }),
]);

export default definePack({
  name: "Radcore Cement Library file header (.rcf) v1.2",
  endian: "little",
  pointerSize: 8,
  types: [DataEntry, NameEntry, Header],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "DataEntry": structNode(DataEntry, { label: "DataEntry" }),
    "NameEntry": structNode(NameEntry, { label: "NameEntry" }),
  },
});

