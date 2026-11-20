/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/Spore/spore-pdr.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const str32_t = union("str32_t", [
  u32("number", {  }),
  str("text", { size: 4 }),
]);

const version_t = union("version_t", [
  u32("value", {  }),
]);

const header_t = struct("header_t", [
  str("signature", { size: 4 }),
  record("version", version_t),
  i32("platform", { values: { "0": "NONE", "1": "GENERIC", "2": "WINDOWS", "3": "XENON", "4": "PS3", "5": "REVOLUTION" } }),
  u32("length", {  }),
  u32("patch_count", {  }),
  u32("sample_count", {  }),
]);

const asset_chunk_t = struct("asset_chunk_t", [
  u32("length", {  }),
]);

const EAPdResource = struct("EAPdResource", [
  record("header", header_t),
]);

export default definePack({
  name: "Spore EAPd Resource (Binary Patch)",
  endian: "little",
  pointerSize: 8,
  types: [str32_t, version_t, header_t, asset_chunk_t, EAPdResource],
  nodes: {
    "entry": structNode(EAPdResource, { label: "EAPdResource（入口）" }),
    "str32_t": structNode(str32_t, { label: "str32_t" }),
    "version_t": structNode(version_t, { label: "version_t" }),
    "header_t": structNode(header_t, { label: "header_t" }),
    "asset_chunk_t": structNode(asset_chunk_t, { label: "asset_chunk_t" }),
  },
});

