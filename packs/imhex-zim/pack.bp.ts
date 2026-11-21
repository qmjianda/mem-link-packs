/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/zim.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Header = struct("Header", [
  str("signature", { size: 4 }),
  u16("majorVersion", {  }),
  u16("minorVersion", {  }),
]);

const ClusterInfo = struct("ClusterInfo", [
  bits("compression", 4, { at: 0, bit: 0, unit: 1, label: "compression" }),
  bits("offsetSize", 1, { at: 0, bit: 4, unit: 1, label: "offsetSize" }),
]);

const Cluster = struct("Cluster", [
  record("info", ClusterInfo),
]);

const Entry = struct("Entry", [
  u16("mimetype", {  }),
  u8("parameterlen", {  }),
  char("_namespace", {  }),
  u32("revision", {  }),
]);

export default definePack({
  name: "ZIM file format",
  endian: "little",
  pointerSize: 8,
  types: [Header, ClusterInfo, Cluster, Entry],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "ClusterInfo": structNode(ClusterInfo, { label: "ClusterInfo" }),
    "Cluster": structNode(Cluster, { label: "Cluster" }),
    "Entry": structNode(Entry, { label: "Entry" }),
  },
});


/*
未移植项：
- Header.uid: 类型 u128 不可移植
*/
