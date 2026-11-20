/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/uefi_boot_entry.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const HARD_DRIVE = struct("HARD_DRIVE", [
  u32("partitionNumber", {  }),
  u64("partitionStart", {  }),
  u64("partitionSize", {  }),
]);

const DEVICE_PATH = struct("DEVICE_PATH", [
  u8("type", {  }),
  u8("subtype", {  }),
  u16("length", {  }),
]);

const LOAD_OPTION = struct("LOAD_OPTION", [
  u32("attributes", {  }),
  u16("filePathLength", {  }),
]);

const EFI_VAR = struct("EFI_VAR", [
  u32("attributes", {  }),
  record("loadOption", LOAD_OPTION),
]);

export default definePack({
  name: "UEFI Boot Entry (Load option)",
  endian: "little",
  pointerSize: 8,
  types: [HARD_DRIVE, DEVICE_PATH, LOAD_OPTION, EFI_VAR],
  nodes: {
    "entry": structNode(EFI_VAR, { label: "EFI_VAR（入口）" }),
    "HARD_DRIVE": structNode(HARD_DRIVE, { label: "HARD_DRIVE" }),
    "DEVICE_PATH": structNode(DEVICE_PATH, { label: "DEVICE_PATH" }),
    "LOAD_OPTION": structNode(LOAD_OPTION, { label: "LOAD_OPTION" }),
  },
});


/*
未移植项：
- HARD_DRIVE.partitionSig: 类型 type_GUID 不可移植
*/
