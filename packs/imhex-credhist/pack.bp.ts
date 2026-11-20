/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/credhist.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const SID = struct("SID", [
  u8("revisionlvl", {  }),
  u8("dashes", {  }),
  str("ntauth", { size: 6 }),
  u32("subatuh1", {  }),
  u32("subatuh2", {  }),
  u32("subatuh3", {  }),
  u32("subatuh4", {  }),
  u32("rid", {  }),
]);

const CREDHIST_HEADER = struct("CREDHIST_HEADER", [
  u32("version", {  }),
]);

const CREDHIST = struct("CREDHIST", [
  record("credheader", CREDHIST_HEADER),
]);

export default definePack({
  name: "CREDHIST",
  endian: "little",
  pointerSize: 8,
  types: [SID, CREDHIST_HEADER, CREDHIST],
  nodes: {
    "entry": structNode(CREDHIST, { label: "CREDHIST（入口）" }),
    "SID": structNode(SID, { label: "SID" }),
    "CREDHIST_HEADER": structNode(CREDHIST_HEADER, { label: "CREDHIST_HEADER" }),
  },
});


/*
未移植项：
- CREDHIST_HEADER.guid: 类型 type_GUID 不可移植
*/
