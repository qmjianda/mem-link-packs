/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/shp.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Point = struct("Point", [
  f64("x", {  }),
  f64("y", {  }),
]);

const MultiPoint = struct("MultiPoint", [
  array("box", "f64", 4),
  u32("num_points", {  }),
]);

const PolyLine = struct("PolyLine", [
  array("box", "f64", 4),
  u32("num_parts", {  }),
  u32("num_points", {  }),
]);

const Polygon = struct("Polygon", [
  array("box", "f64", 4),
  u32("num_parts", {  }),
  u32("num_points", {  }),
]);

const PointM = struct("PointM", [
  f64("x", {  }),
  f64("y", {  }),
  f64("m", {  }),
]);

const MultiPointM = struct("MultiPointM", [
  array("box", "f64", 4),
  u32("num_points", {  }),
]);

const PolyLineM = struct("PolyLineM", [
  array("box", "f64", 4),
  u32("num_parts", {  }),
  u32("num_points", {  }),
]);

const PolygonM = struct("PolygonM", [
  array("box", "f64", 4),
  u32("num_parts", {  }),
  u32("num_points", {  }),
]);

const PointZ = struct("PointZ", [
  f64("x", {  }),
  f64("y", {  }),
  f64("z", {  }),
  f64("m", {  }),
]);

const MultiPointZ = struct("MultiPointZ", [
  array("box", "f64", 4),
  u32("num_points", {  }),
]);

const PolyLineZ = struct("PolyLineZ", [
  array("box", "f64", 4),
  u32("num_parts", {  }),
  u32("num_points", {  }),
]);

const PolygonZ = struct("PolygonZ", [
  array("box", "f64", 4),
  u32("num_parts", {  }),
  u32("num_points", {  }),
]);

const MultiPatch = struct("MultiPatch", [
  array("box", "f64", 4),
  u32("num_parts", {  }),
  u32("num_points", {  }),
]);

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

const RecordHeader = struct("RecordHeader", [
  u32("record_number", { endian: "big" }),
  u32("content_length", { endian: "big" }),
]);

const Record = struct("Record", [
  u32("shape_type", { values: { "0": "Null", "1": "Point", "3": "PolyLine", "5": "Polygon", "8": "MultiPoint", "11": "PointZ", "13": "PolyLineZ", "15": "PolygonZ", "18": "MultiPointZ", "21": "PointM", "23": "PolyLineM", "25": "PolygonM", "28": "MultiPointM", "32": "MultiPatch" } }),
]);

const ShapeFile = struct("ShapeFile", [
  record("header", Header),
]);

export default definePack({
  name: "ESRI shapefile",
  endian: "little",
  pointerSize: 8,
  types: [Point, MultiPoint, PolyLine, Polygon, PointM, MultiPointM, PolyLineM, PolygonM, PointZ, MultiPointZ, PolyLineZ, PolygonZ, MultiPatch, Header, RecordHeader, Record, ShapeFile],
  nodes: {
    "entry": structNode(ShapeFile, { label: "ShapeFile（入口）" }),
    "Point": structNode(Point, { label: "Point" }),
    "MultiPoint": structNode(MultiPoint, { label: "MultiPoint" }),
    "PolyLine": structNode(PolyLine, { label: "PolyLine" }),
    "Polygon": structNode(Polygon, { label: "Polygon" }),
    "PointM": structNode(PointM, { label: "PointM" }),
    "MultiPointM": structNode(MultiPointM, { label: "MultiPointM" }),
    "PolyLineM": structNode(PolyLineM, { label: "PolyLineM" }),
    "PolygonM": structNode(PolygonM, { label: "PolygonM" }),
    "PointZ": structNode(PointZ, { label: "PointZ" }),
    "MultiPointZ": structNode(MultiPointZ, { label: "MultiPointZ" }),
    "PolyLineZ": structNode(PolyLineZ, { label: "PolyLineZ" }),
    "PolygonZ": structNode(PolygonZ, { label: "PolygonZ" }),
    "MultiPatch": structNode(MultiPatch, { label: "MultiPatch" }),
    "Header": structNode(Header, { label: "Header" }),
    "RecordHeader": structNode(RecordHeader, { label: "RecordHeader" }),
    "Record": structNode(Record, { label: "Record" }),
  },
});

