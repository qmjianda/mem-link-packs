/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pf.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const Header = struct("Header", [
  u32("version", { values: { "31": "Windows11", "30": "Windows10", "26": "Windows8x", "23": "Windows7orVista", "17": "WindowsXPor2003" } }),
]);

const FileInformation = struct("FileInformation", [
  u32("metrics_offset", {  }),
  u32("metrics_entry_count", {  }),
  u32("trace_chains_offset", {  }),
  u32("trace_chains_entry_count", {  }),
  u32("filenames_offset", {  }),
  u32("filenames_size", {  }),
  u32("volumes_information_offset", {  }),
  u32("volumes_count", {  }),
  u32("volumes_information_size", {  }),
]);

const DirectoryString = struct("DirectoryString", [
  u16("length", {  }),
]);

const VolumeInformation = struct("VolumeInformation", [
  u32("volume_device_path_offset", {  }),
  u32("volume_device_path_length", {  }),
]);

export default definePack({
  name: "Parse forensically relevant parts of Windows Prefetch(*.pf) (only uncompressed SCCA version)",
  endian: "little",
  pointerSize: 8,
  types: [Header, FileInformation, DirectoryString, VolumeInformation],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "FileInformation": structNode(FileInformation, { label: "FileInformation" }),
    "DirectoryString": structNode(DirectoryString, { label: "DirectoryString" }),
    "VolumeInformation": structNode(VolumeInformation, { label: "VolumeInformation" }),
  },
});


/*
未移植项：
- FileReference.mft_entry_index: 类型 u48 不可移植
- VolumeInformation.volume_creation_time: 类型 type_FILETIME 不可移植
*/
