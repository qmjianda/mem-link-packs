/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/afe2.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const gprs_named = struct("gprs_named", [
  array("gprs", "u64", 29),
  u64("fp", {  }),
  u64("lr", {  }),
  u64("sp", {  }),
]);

const gprs = union("gprs", [
  array("gprs", "u64", 32),
  record("named", gprs_named),
]);

const atmosphere_fatal_error_ctx = struct("atmosphere_fatal_error_ctx", [
  str("magic", { size: 4 }),
  u32("error_desc", {  }),
  u64("program_id", {  }),
  record("gprs", gprs),
  u64("pc", {  }),
  u64("module_base", {  }),
  u32("pstate", {  }),
  u32("afsr0", {  }),
  u32("afsr1", {  }),
  u32("esr", {  }),
  u64("far", {  }),
  u64("report_identifier", {  }),
  u64("stack_trace_size", {  }),
  u64("stack_dump_size", {  }),
]);

export default definePack({
  name: "Nintendo Switch Atmosphère CFW Fatal Error log",
  endian: "little",
  pointerSize: 8,
  types: [gprs_named, gprs, atmosphere_fatal_error_ctx],
  nodes: {
    "entry": structNode(atmosphere_fatal_error_ctx, { label: "atmosphere_fatal_error_ctx（入口）" }),
    "gprs_named": structNode(gprs_named, { label: "gprs_named" }),
    "gprs": structNode(gprs, { label: "gprs" }),
  },
});

