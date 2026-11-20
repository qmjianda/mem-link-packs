/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/all/sphere_grid_layout.dat.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Cluster = struct("Cluster", [
  u16("x", {  }),
  u16("y", {  }),
  pad(2),
  u16("type", {  }),
  pad(8),
]);

const Node = struct("Node", [
  u16("x", {  }),
  u16("y", {  }),
  pad(2),
  u16("cluster", {  }),
]);

const Link = struct("Link", [
  u16("node_a_idx", {  }),
  u16("node_b_idx", {  }),
  u16("anchor_idx", {  }),
]);

const Header = struct("Header", [
  pad(2),
  u16("cluster_count", {  }),
  u16("node_count", {  }),
  u16("link_count", {  }),
  pad(8),
]);

const Data = struct("Data", [
  record("header", Header),
]);

export default definePack({
  name: "Sphere Grid Layout.Dat",
  endian: "little",
  pointerSize: 8,
  types: [Cluster, Node, Link, Header, Data],
  nodes: {
    "entry": structNode(Data, { label: "Data（入口）" }),
    "Cluster": structNode(Cluster, { label: "Cluster" }),
    "Node": structNode(Node, { label: "Node" }),
    "Link": structNode(Link, { label: "Link" }),
    "Header": structNode(Header, { label: "Header" }),
  },
});

