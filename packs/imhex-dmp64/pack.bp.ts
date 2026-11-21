/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dmp64.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const DUMP_FILE_ATTRIBUTES = union("DUMP_FILE_ATTRIBUTES", [
  u32("bitfields", {  }),
  u32("attributes", {  }),
]);

const EXCEPTION_RECORD64 = struct("EXCEPTION_RECORD64", [
  u32("exception_code", {  }),
  u32("exception_flags", {  }),
  u64("exception_record", {  }),
  u64("exception_address", {  }),
  u32("number_parameters", {  }),
  u32("unused_alignment", {  }),
  array("exception_information", "u64", 15),
]);

const PHYSICAL_MEMORY_RUN64 = struct("PHYSICAL_MEMORY_RUN64", [
  u64("base_page", {  }),
  u64("page_count", {  }),
]);

const PHYSICAL_MEMORY_DESCRIPTOR64 = struct("PHYSICAL_MEMORY_DESCRIPTOR64", [
  u32("no_of_runs", {  }),
  str("description", { size: 4 }),
  u64("no_of_pages", {  }),
]);

const DUMP_HEADER64 = struct("DUMP_HEADER64", [
  str("signature", { size: 4 }),
  str("validdump", { size: 4 }),
  u32("major_version", {  }),
  u32("minor_version", {  }),
  u64("dtb", {  }),
  u64("pfn", {  }),
  u64("ploadedmodulelist", {  }),
  u64("pactiveprocesshead", {  }),
  u32("machine_type", {  }),
  u32("processor_counts", {  }),
  u32("bug_check", {  }),
  u32("bug_check_code_desc", {  }),
  u64("bug_check_param1", {  }),
  u64("bug_check_param2", {  }),
  u64("bug_check_param3", {  }),
  u64("bug_check_param4", {  }),
  str("version_user", { size: 32 }),
  u64("kdbg", {  }),
  record("phys_mem_desc", PHYSICAL_MEMORY_DESCRIPTOR64),
  str("mem_block_buffer", { size: 608 }),
  str("context_record", { size: 3000 }),
  record("excr", EXCEPTION_RECORD64),
  u32("dmp_type", { values: { "1": "FULL_DUMP", "5": "BITMAP_DUMP" } }),
  str("desc1", { size: 4 }),
  u64("req_dump_space", {  }),
  u64("sys_time", {  }),
]);

export default definePack({
  name: "KERNEL DUMP",
  endian: "little",
  pointerSize: 8,
  types: [DUMP_FILE_ATTRIBUTES, EXCEPTION_RECORD64, PHYSICAL_MEMORY_RUN64, PHYSICAL_MEMORY_DESCRIPTOR64, DUMP_HEADER64],
  nodes: {
    "entry": structNode(DUMP_HEADER64, { label: "DUMP_HEADER64（入口）" }),
    "DUMP_FILE_ATTRIBUTES": structNode(DUMP_FILE_ATTRIBUTES, { label: "DUMP_FILE_ATTRIBUTES" }),
    "EXCEPTION_RECORD64": structNode(EXCEPTION_RECORD64, { label: "EXCEPTION_RECORD64" }),
    "PHYSICAL_MEMORY_RUN64": structNode(PHYSICAL_MEMORY_RUN64, { label: "PHYSICAL_MEMORY_RUN64" }),
    "PHYSICAL_MEMORY_DESCRIPTOR64": structNode(PHYSICAL_MEMORY_DESCRIPTOR64, { label: "PHYSICAL_MEMORY_DESCRIPTOR64" }),
  },
});

