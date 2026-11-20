/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/shx.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Header = struct("Header", [
  u32("magic", { endian: "big" }),
  pad(20),
  u32("file_length", { endian: "big" }),
  u32("version", {  }),
  u32("shape_type", { values: { "0": "Null", "1": "Point", "3": "PolyLine", "5": "Polygon", "8": "MultiPoint", "11": "PointZ", "13": "PolyLineZ", "15": "PolygonZ", "18": "MultiPointZ", "21": "PointM", "23": "PolyLineM", "25": "PolygonM", "28": "MultiPointM", "32": "MultiPatch" } }),
  f64("bb_xmin", {  }),
  f64("bb_ymin", {  }),
  f64("bb_xmax", {  }),
  f64("bb_ymax", {  }),
  f64("bb_zmin", {  }),
  f64("bb_zmax", {  }),
  f64("bb_mmin", {  }),
  f64("bb_mmax", {  }),
]);

const Record = struct("Record", [
  u32("offset", {  }),
  u32("content_length", {  }),
]);

const IndexFile = struct("IndexFile", [
  record("header", Header),
]);

export default definePack({
  name: "ESRI shapefile indices",
  endian: "little",
  pointerSize: 8,
  types: [Header, Record, IndexFile],
  nodes: {
    "entry": structNode(IndexFile, { label: "IndexFile（入口）" }),
    "Header": structNode(Header, { label: "Header" }),
    "Record": structNode(Record, { label: "Record" }),
  },
});

