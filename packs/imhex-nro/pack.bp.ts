/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/nro.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const MOD0 = struct("MOD0", [
  str("magic", { size: 4 }),
  u32("dynamic_offset", {  }),
  u32("bss_start_offset", {  }),
  u32("bss_end_offset", {  }),
  u32("eh_frane_hdr_start_offset", {  }),
  u32("eh_frane_hdr_end_offset", {  }),
  u32("runtime_generated_module_object_offset", {  }),
]);

const Start = struct("Start", [
  pad(4),
]);

const SegmentHeader = struct("SegmentHeader", [
  u32("offset", {  }),
  u32("size", {  }),
]);

export default definePack({
  name: "Nintendo Switch NRO",
  endian: "little",
  pointerSize: 8,
  types: [MOD0, Start, SegmentHeader],
  nodes: {
    "entry": structNode(Start, { label: "Start（入口）" }),
    "MOD0": structNode(MOD0, { label: "MOD0" }),
    "SegmentHeader": structNode(SegmentHeader, { label: "SegmentHeader" }),
  },
});

