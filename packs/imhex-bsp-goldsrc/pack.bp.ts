/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bsp_goldsrc.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const vec3f = struct("vec3f", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
]);

const dlump_t = struct("dlump_t", [
  i32("fileofs", {  }),
  i32("filelen", {  }),
]);

const dheader_t = struct("dheader_t", [
  i32("version", {  }),
]);

const dmodel_t = struct("dmodel_t", [
  record("mins", vec3f),
  record("maxs", vec3f),
  record("origin", vec3f),
]);

const dplane_t = struct("dplane_t", [
  record("normal", vec3f),
  f32("dist", {  }),
  i32("type", {  }),
]);

const dtexinfo_t = struct("dtexinfo_t", [
  array("vecs", "f32", 8),
  i32("miptex", {  }),
  i16("flags", {  }),
  i16("faceinfo", {  }),
]);

const dleaf_t = struct("dleaf_t", [
  i32("contents", {  }),
  i32("visofs", {  }),
  array("mins", "i16", 3),
  array("maxs", "i16", 3),
  u16("firstmarksurface", {  }),
  u16("nummarksurfaces", {  }),
]);

const dnode_t = struct("dnode_t", [
  i32("planenum", {  }),
  array("children", "i16", 2),
  array("mins", "i16", 3),
  array("maxs", "i16", 3),
  u16("firstface", {  }),
  u16("numfaces", {  }),
]);

const dface_t = struct("dface_t", [
  u16("planenum", {  }),
  i16("side", {  }),
  i32("firstedge", {  }),
  i16("numedges", {  }),
  i16("texinfo", {  }),
]);

const dedge_t = struct("dedge_t", [
  array("v", "u16", 2),
]);

const dclipnode_t = struct("dclipnode_t", [
  i32("planenum", {  }),
  array("children", "i16", 2),
]);

const miptex_t = struct("miptex_t", [
  str("name", { size: 16 }),
  u32("width", {  }),
  u32("height", {  }),
  array("offsets", "u32", 4),
]);

const dmiptexlump_t = struct("dmiptexlump_t", [
  i32("nummiptex", {  }),
]);

export default definePack({
  name: "GoldSrc engine map (Half-Life 1)",
  endian: "little",
  pointerSize: 8,
  types: [vec3f, dlump_t, dheader_t, dmodel_t, dplane_t, dtexinfo_t, dleaf_t, dnode_t, dface_t, dedge_t, dclipnode_t, miptex_t, dmiptexlump_t],
  nodes: {
    "entry": structNode(dheader_t, { label: "dheader_t（入口）" }),
    "vec3f": structNode(vec3f, { label: "vec3f" }),
    "dlump_t": structNode(dlump_t, { label: "dlump_t" }),
    "dmodel_t": structNode(dmodel_t, { label: "dmodel_t" }),
    "dplane_t": structNode(dplane_t, { label: "dplane_t" }),
    "dtexinfo_t": structNode(dtexinfo_t, { label: "dtexinfo_t" }),
    "dleaf_t": structNode(dleaf_t, { label: "dleaf_t" }),
    "dnode_t": structNode(dnode_t, { label: "dnode_t" }),
    "dface_t": structNode(dface_t, { label: "dface_t" }),
    "dedge_t": structNode(dedge_t, { label: "dedge_t" }),
    "dclipnode_t": structNode(dclipnode_t, { label: "dclipnode_t" }),
    "miptex_t": structNode(miptex_t, { label: "miptex_t" }),
    "dmiptexlump_t": structNode(dmiptexlump_t, { label: "dmiptexlump_t" }),
  },
});

