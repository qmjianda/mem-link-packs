/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gguf.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const gguf_string_t = struct("gguf_string_t", [
  u64("len", {  }),
]);

const gguf_metadata_value_t = struct("gguf_metadata_value_t", [
  u32("type", { values: { "0": "GGUF_METADATA_VALUE_TYPE_UINT8", "1": "GGUF_METADATA_VALUE_TYPE_INT8", "2": "GGUF_METADATA_VALUE_TYPE_UINT16", "3": "GGUF_METADATA_VALUE_TYPE_INT16", "4": "GGUF_METADATA_VALUE_TYPE_UINT32", "5": "GGUF_METADATA_VALUE_TYPE_INT32", "6": "GGUF_METADATA_VALUE_TYPE_FLOAT32", "7": "GGUF_METADATA_VALUE_TYPE_BOOL", "8": "GGUF_METADATA_VALUE_TYPE_STRING", "9": "GGUF_METADATA_VALUE_TYPE_ARRAY", "10": "GGUF_METADATA_VALUE_TYPE_UINT64", "11": "GGUF_METADATA_VALUE_TYPE_INT64", "12": "GGUF_METADATA_VALUE_TYPE_FLOAT64" } }),
  u64("length", {  }),
]);

const gguf_metadata_value = struct("gguf_metadata_value", [
  u32("type", { values: { "0": "GGUF_METADATA_VALUE_TYPE_UINT8", "1": "GGUF_METADATA_VALUE_TYPE_INT8", "2": "GGUF_METADATA_VALUE_TYPE_UINT16", "3": "GGUF_METADATA_VALUE_TYPE_INT16", "4": "GGUF_METADATA_VALUE_TYPE_UINT32", "5": "GGUF_METADATA_VALUE_TYPE_INT32", "6": "GGUF_METADATA_VALUE_TYPE_FLOAT32", "7": "GGUF_METADATA_VALUE_TYPE_BOOL", "8": "GGUF_METADATA_VALUE_TYPE_STRING", "9": "GGUF_METADATA_VALUE_TYPE_ARRAY", "10": "GGUF_METADATA_VALUE_TYPE_UINT64", "11": "GGUF_METADATA_VALUE_TYPE_INT64", "12": "GGUF_METADATA_VALUE_TYPE_FLOAT64" } }),
]);

const gguf_metadata_kv_t = struct("gguf_metadata_kv_t", [
  record("key", gguf_string_t),
  record("value", gguf_metadata_value),
]);

const gguf_header_t = struct("gguf_header_t", [
  u32("magic", {  }),
  u32("version", {  }),
  u64("tensor_count", {  }),
  u64("metadata_kv_count", {  }),
]);

const gguf_tensor_info_t = struct("gguf_tensor_info_t", [
  record("name", gguf_string_t),
  u32("n_dimensions", {  }),
]);

const gguf_file_t = struct("gguf_file_t", [
  record("header", gguf_header_t),
]);

export default definePack({
  name: "ggml GGUF v3",
  endian: "little",
  pointerSize: 8,
  types: [gguf_string_t, gguf_metadata_value_t, gguf_metadata_value, gguf_metadata_kv_t, gguf_header_t, gguf_tensor_info_t, gguf_file_t],
  nodes: {
    "entry": structNode(gguf_file_t, { label: "gguf_file_t（入口）" }),
    "gguf_string_t": structNode(gguf_string_t, { label: "gguf_string_t" }),
    "gguf_metadata_value_t": structNode(gguf_metadata_value_t, { label: "gguf_metadata_value_t" }),
    "gguf_metadata_value": structNode(gguf_metadata_value, { label: "gguf_metadata_value" }),
    "gguf_metadata_kv_t": structNode(gguf_metadata_kv_t, { label: "gguf_metadata_kv_t" }),
    "gguf_header_t": structNode(gguf_header_t, { label: "gguf_header_t" }),
    "gguf_tensor_info_t": structNode(gguf_tensor_info_t, { label: "gguf_tensor_info_t" }),
  },
});

