/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/quantized-mesh.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ZigZag16 = struct("ZigZag16", [
  u16("value", {  }),
]);

const QuantizedMeshHeader = struct("QuantizedMeshHeader", [
  f64("CenterX", {  }),
  f64("CenterY", {  }),
  f64("CenterZ", {  }),
  f32("MinimumHeight", {  }),
  f32("MaximumHeight", {  }),
  f64("BoundingSphereCenterX", {  }),
  f64("BoundingSphereCenterY", {  }),
  f64("BoundingSphereCenterZ", {  }),
  f64("BoundingSphereRadius", {  }),
  f64("HorizonOcclusionPointX", {  }),
  f64("HorizonOcclusionPointY", {  }),
  f64("HorizonOcclusionPointZ", {  }),
]);

const VertexData = struct("VertexData", [
  u32("vertexCount", {  }),
]);

const IndexData16 = struct("IndexData16", [
  u32("triangleCount", {  }),
]);

const IndexData32 = struct("IndexData32", [
  u32("triangleCount", {  }),
]);

const EdgeIndices16 = struct("EdgeIndices16", [
  u32("westVertexCount", {  }),
]);

const EdgeIndices32 = struct("EdgeIndices32", [
  u32("westVertexCount", {  }),
]);

const Oct16 = struct("Oct16", [
  u8("x", {  }),
  u8("y", {  }),
]);

const Metadata = struct("Metadata", [
  u32("jsonLength", {  }),
]);

const ExtensionHeader = struct("ExtensionHeader", [
  u8("extensionId", {  }),
  u32("extensionLength", {  }),
]);

const QuantizedMesh = struct("QuantizedMesh", [
  record("header", QuantizedMeshHeader),
  record("vertdata", VertexData),
]);

export default definePack({
  name: "Cesium quantized-mesh terrain",
  endian: "little",
  pointerSize: 8,
  types: [ZigZag16, QuantizedMeshHeader, VertexData, IndexData16, IndexData32, EdgeIndices16, EdgeIndices32, Oct16, Metadata, ExtensionHeader, QuantizedMesh],
  nodes: {
    "entry": structNode(QuantizedMesh, { label: "QuantizedMesh（入口）" }),
    "ZigZag16": structNode(ZigZag16, { label: "ZigZag16" }),
    "QuantizedMeshHeader": structNode(QuantizedMeshHeader, { label: "QuantizedMeshHeader" }),
    "VertexData": structNode(VertexData, { label: "VertexData" }),
    "IndexData16": structNode(IndexData16, { label: "IndexData16" }),
    "IndexData32": structNode(IndexData32, { label: "IndexData32" }),
    "EdgeIndices16": structNode(EdgeIndices16, { label: "EdgeIndices16" }),
    "EdgeIndices32": structNode(EdgeIndices32, { label: "EdgeIndices32" }),
    "Oct16": structNode(Oct16, { label: "Oct16" }),
    "Metadata": structNode(Metadata, { label: "Metadata" }),
    "ExtensionHeader": structNode(ExtensionHeader, { label: "ExtensionHeader" }),
  },
});

