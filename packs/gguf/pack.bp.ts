/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/gguf
// 原始 pack：gguf · GGUF model v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 5 个动态辅助节点；未移植 1 项（见文件末尾）
const GgufString = struct("GgufString", [
  u64("length", { endian: "little", label: "bytes of UTF-8 text" }),
]);

const GgufArray = struct("GgufArray", [
  u32("type", { values: { "0": "Uint8", "1": "Int8", "2": "Uint16", "3": "Int16", "4": "Uint32", "5": "Int32", "6": "Float32", "7": "Bool", "8": "String", "9": "Array", "10": "Uint64", "11": "Int64", "12": "Float64" }, label: "element type" }),
  u64("count", { endian: "little", label: "number of elements" }),
]);

const GgufKv = struct("GgufKv", [
  record("key", GgufString, { label: "dotted key, e.g. general.architecture or llama.context_length" }),
  u32("type", { values: { "0": "Uint8", "1": "Int8", "2": "Uint16", "3": "Int16", "4": "Uint32", "5": "Int32", "6": "Float32", "7": "Bool", "8": "String", "9": "Array", "10": "Uint64", "11": "Int64", "12": "Float64" }, label: "type of the value that follows" }),
]);

const GgufTensorInfo = struct("GgufTensorInfo", [
  record("name", GgufString, { label: "tensor name, e.g. blk.0.attn_q.weight" }),
  u32("nDims", { endian: "little", label: "number of dimensions, at most 4" }),
]);

const Gguf = struct("Gguf", [
  str("magic", { size: 4, label: "GGUF" }),
  u32("version", { endian: "little", label: "format version, 3 for current files" }),
  u64("tensorCount", { endian: "little", label: "number of tensors" }),
  u64("kvCount", { endian: "little", label: "number of metadata key/value pairs" }),
]);

const Elem_u64 = struct("u64Value", [
  u64('value', { endian: "little" }),
]);

export default definePack({
  name: "GGUF",
  endian: "little",
  pointerSize: 4,
  types: [GgufString, GgufArray, GgufKv, GgufTensorInfo, Gguf, Elem_u64],
  nodes: {
    "entry": structNode(Gguf, { label: "Gguf（入口）" }),
    "GgufString": structNode(GgufString, { label: "GgufString" }),
    "GgufArray": structNode(GgufArray, { label: "GgufArray" }),
    "GgufKv": structNode(GgufKv, { label: "GgufKv" }),
    "GgufTensorInfo": structNode(GgufTensorInfo, { label: "GgufTensorInfo" }),
    "match_GgufKv_value_8": structNode(GgufString, { label: "GgufKv.value · match 8" }),
    "match_GgufKv_value_9": structNode(GgufArray, { label: "GgufKv.value · match 9" }),
    "array_GgufTensorInfo_dims": arrayNode(Elem_u64, {
      label: "GgufTensorInfo.dims（动态数组）",
      description: "count 来自 GgufTensorInfo.nDims；address 指向数组首元素",
    }),
    "array_Gguf_metadata": arrayNode(GgufKv, {
      label: "Gguf.metadata（动态数组）",
      description: "count 来自 Gguf.kvCount；address 指向数组首元素",
    }),
    "array_Gguf_tensors": arrayNode(GgufTensorInfo, {
      label: "Gguf.tensors（动态数组）",
      description: "count 来自 Gguf.tensorCount；address 指向数组首元素",
    }),
  },
});


/*
未移植项：
- GgufString.text: 变长字符串未移植
*/
