/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/loc.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Keys = struct("Keys", [
  bool("useUniqueIDs", {  }),
  u32("count", {  }),
]);

const LangIds = struct("LangIds", [
  u16("len", {  }),
]);

const LocString = struct("LocString", [
  u16("keySize", {  }),
]);

const Language = struct("Language", [
  u32("read", {  }),
]);

const Loc = struct("Loc", [
  u32("version", {  }),
  u32("count", {  }),
]);

export default definePack({
  name: "Minecraft LCE LOC file",
  endian: "big",
  pointerSize: 8,
  types: [Keys, LangIds, LocString, Language, Loc],
  nodes: {
    "entry": structNode(Loc, { label: "Loc（入口）" }),
    "Keys": structNode(Keys, { label: "Keys" }),
    "LangIds": structNode(LangIds, { label: "LangIds" }),
    "LocString": structNode(LocString, { label: "LocString" }),
    "Language": structNode(Language, { label: "Language" }),
  },
});

