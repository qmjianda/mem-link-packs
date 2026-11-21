/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/uefi_fv_varstore.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 4 项（见文件末尾）
const VariableAttributes = struct("VariableAttributes", [
  bits("NON_VOLATILE", 1, { at: 0, bit: 0, unit: 4, label: "NON_VOLATILE" }),
  bits("BOOTSERVICE_ACCESS", 1, { at: 0, bit: 1, unit: 4, label: "BOOTSERVICE_ACCESS" }),
  bits("RUNTIME_ACCESS", 1, { at: 0, bit: 2, unit: 4, label: "RUNTIME_ACCESS" }),
  bits("HARDWARE_ERROR_RECORD", 1, { at: 0, bit: 3, unit: 4, label: "HARDWARE_ERROR_RECORD" }),
  bits("AUTHENTICATED_WRITE_ACCESS", 1, { at: 0, bit: 4, unit: 4, label: "AUTHENTICATED_WRITE_ACCESS" }),
  bits("TIME_BASED_AUTHENTICATED_WRITE_ACCESS", 1, { at: 0, bit: 5, unit: 4, label: "TIME_BASED_AUTHENTICATED_WRITE_ACCESS" }),
  bits("APPEND_WRITE", 1, { at: 0, bit: 6, unit: 4, label: "APPEND_WRITE" }),
  bits("RSVD", 25, { at: 0, bit: 7, unit: 4, label: "RSVD" }),
]);

const EFI_TIME = struct("EFI_TIME", [
  u16("Year", {  }),
  u8("Month", {  }),
  u8("Day", {  }),
  u8("Hour", {  }),
  u8("Minute", {  }),
  u8("Second", {  }),
  u8("Pad1", {  }),
  u32("Nanosecond", {  }),
  u16("TimeZone", {  }),
  u8("Daylight", {  }),
  u8("Pad2", {  }),
]);

const EFI_FV_BLOCK_MAP_ENTRY = struct("EFI_FV_BLOCK_MAP_ENTRY", [
  u32("NumBlocks", {  }),
  u32("Length", {  }),
]);

const VARIABLE_HEADER = struct("VARIABLE_HEADER", [
  u16("StartId", {  }),
  u8("State", { values: { "254": "VAR_IN_DELETED_TRANSITION", "253": "VAR_DELETED", "127": "VAR_HEADER_VALID_ONLY", "63": "VAR_ADDED", "60": "VAR_ADDED__VAR_IN_DELETED_TRANSITION__VAR_DELETED", "62": "VAR_ADDED__VAR_IN_DELETED_TRANSITION", "61": "VAR_ADDED__VAR_DELETED" } }),
  u8("Reserved", {  }),
  record("Attributes", VariableAttributes),
  u32("NameSize", {  }),
  u32("DataSize", {  }),
]);

const AUTHENTICATED_VARIABLE_HEADER = struct("AUTHENTICATED_VARIABLE_HEADER", [
  u16("StartId", {  }),
  u8("State", { values: { "254": "VAR_IN_DELETED_TRANSITION", "253": "VAR_DELETED", "127": "VAR_HEADER_VALID_ONLY", "63": "VAR_ADDED", "60": "VAR_ADDED__VAR_IN_DELETED_TRANSITION__VAR_DELETED", "62": "VAR_ADDED__VAR_IN_DELETED_TRANSITION", "61": "VAR_ADDED__VAR_DELETED" } }),
  u8("Reserved", {  }),
  record("Attributes", VariableAttributes),
  u64("MonotonicCount", {  }),
  record("TimeStamp", EFI_TIME),
  u32("PubKeyIndex", {  }),
  u32("NameSize", {  }),
  u32("DataSize", {  }),
]);

const UEFI_VARIABLE = struct("UEFI_VARIABLE", [
  record("Header", AUTHENTICATED_VARIABLE_HEADER),
]);

export default definePack({
  name: "UEFI Firmware Volume Variable Store",
  endian: "little",
  pointerSize: 8,
  types: [VariableAttributes, EFI_TIME, EFI_FV_BLOCK_MAP_ENTRY, VARIABLE_HEADER, AUTHENTICATED_VARIABLE_HEADER, UEFI_VARIABLE],
  nodes: {
    "entry": structNode(VariableAttributes, { label: "VariableAttributes（入口）" }),
    "EFI_TIME": structNode(EFI_TIME, { label: "EFI_TIME" }),
    "EFI_FV_BLOCK_MAP_ENTRY": structNode(EFI_FV_BLOCK_MAP_ENTRY, { label: "EFI_FV_BLOCK_MAP_ENTRY" }),
    "VARIABLE_HEADER": structNode(VARIABLE_HEADER, { label: "VARIABLE_HEADER" }),
    "AUTHENTICATED_VARIABLE_HEADER": structNode(AUTHENTICATED_VARIABLE_HEADER, { label: "AUTHENTICATED_VARIABLE_HEADER" }),
    "UEFI_VARIABLE": structNode(UEFI_VARIABLE, { label: "UEFI_VARIABLE" }),
  },
});


/*
未移植项：
- EFI_FIRMWARE_VOLUME_HEADER.ZeroVector: 类型 u128 不可移植
- VARIABLE_STORE_HEADER.Signature: 类型 type_GUID 不可移植
- VARIABLE_HEADER.VendorGuid: 类型 type_GUID 不可移植
- AUTHENTICATED_VARIABLE_HEADER.VendorGuid: 类型 type_GUID 不可移植
*/
