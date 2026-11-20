/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/CGX.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const CGXVariant = struct("CGXVariant", [
  str("language", { size: 4 }),
  u32("sourcePtr", {  }),
  u32("sourceSz", {  }),
  u32("reserved", {  }),
]);

const CGXUniform = struct("CGXUniform", [
  u32("uniformNamePtr", {  }),
  u32("typeNamePtr", {  }),
  u32("unk1", {  }),
  u32("type", { values: { "0": "None", "256": "Float", "257": "Float2", "258": "Float3", "259": "Float4", "273": "Float2x2", "290": "Float3x3", "307": "Float4x4", "1024": "Int", "1025": "Int2", "1026": "Int3", "1027": "Int4", "768": "Bool", "769": "Bool2", "770": "Bool3", "771": "Bool4", "32769": "Sampler2D", "32770": "SamplerCube" } }),
  u32("size", {  }),
  u32("flags", {  }),
]);

const CGXVariantTableEntry = struct("CGXVariantTableEntry", [
  u32("namePtr", {  }),
  u32("variantListPtr", {  }),
  u32("variantCount", {  }),
  u32("uniformsPtr", {  }),
  u32("uniformsNum", {  }),
  u32("attributesNum", {  }),
  u32("varyingsNum", {  }),
  u32("unk4", {  }),
]);

const CgxHeader = struct("CgxHeader", [
  str("magic", { size: 4 }),
  str("cgVer", { size: 4 }),
  str("glesVer", { size: 4 }),
  u32("flags", {  }),
  u32("unk0", {  }),
  u32("unk1", {  }),
  u32("vertexShaderVariantsPtr", {  }),
  u32("unk2", {  }),
  u32("fragmentShaderVariantsPtr", {  }),
  u32("unk4", {  }),
  u32("headerSize", {  }),
  u32("shaderDataPtr", {  }),
  u32("stringTblPtr", {  }),
  u32("stringTblPtr2", {  }),
  u32("totalSize", {  }),
  bytes("hash", { size: 20 }),
]);

export default definePack({
  name: "PlayStation Mobile Shader",
  endian: "little",
  pointerSize: 8,
  types: [CGXVariant, CGXUniform, CGXVariantTableEntry, CgxHeader],
  nodes: {
    "entry": structNode(CgxHeader, { label: "CgxHeader（入口）" }),
    "CGXVariant": structNode(CGXVariant, { label: "CGXVariant" }),
    "CGXUniform": structNode(CGXUniform, { label: "CGXUniform" }),
    "CGXVariantTableEntry": structNode(CGXVariantTableEntry, { label: "CGXVariantTableEntry" }),
  },
});

