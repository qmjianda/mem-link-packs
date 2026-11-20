/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/prefetch
// 原始 pack：prefetch · Windows Prefetch v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
const PrefetchFileInfo17 = struct("PrefetchFileInfo17", [
  u32("metricsOffset", { endian: "little", label: "offset of the file metrics array" }),
  u32("metricsCount", { endian: "little", label: "entries in it: one per file the program loaded" }),
  u32("traceChainsOffset", { endian: "little", label: "offset of the trace chains array" }),
  u32("traceChainsCount", { endian: "little", label: "entries in it" }),
  u32("filenameStringsOffset", { endian: "little", label: "offset of the filename strings the metrics point into" }),
  u32("filenameStringsSize", { endian: "little", label: "bytes of those strings, UTF-16LE" }),
  u32("volumesInfoOffset", { endian: "little", label: "offset of the volumes information" }),
  u32("volumesCount", { endian: "little", label: "number of volumes involved" }),
  u32("volumesInfoSize", { endian: "little", label: "bytes of volumes information" }),
  u64("lastRunTime", { endian: "little", label: "FILETIME of the last execution, UTC" }),
  bytes("unknown", { size: 16, label: "unknown" }),
  u32("runCount", { endian: "little", label: "times this program has run" }),
  u32("unknown2", { endian: "little", label: "unknown" }),
]);

const PrefetchFileInfo23 = struct("PrefetchFileInfo23", [
  u32("metricsOffset", { endian: "little", label: "offset of the file metrics array" }),
  u32("metricsCount", { endian: "little", label: "entries in it" }),
  u32("traceChainsOffset", { endian: "little", label: "offset of the trace chains array" }),
  u32("traceChainsCount", { endian: "little", label: "entries in it" }),
  u32("filenameStringsOffset", { endian: "little", label: "offset of the filename strings" }),
  u32("filenameStringsSize", { endian: "little", label: "bytes of those strings, UTF-16LE" }),
  u32("volumesInfoOffset", { endian: "little", label: "offset of the volumes information" }),
  u32("volumesCount", { endian: "little", label: "number of volumes involved" }),
  u32("volumesInfoSize", { endian: "little", label: "bytes of volumes information" }),
  u64("unknown", { endian: "little", label: "unknown" }),
  u64("lastRunTime", { endian: "little", label: "FILETIME of the last execution, UTC" }),
  bytes("unknown2", { size: 16, label: "unknown" }),
  u32("runCount", { endian: "little", label: "times this program has run" }),
  u32("unknown3", { endian: "little", label: "unknown" }),
  bytes("unknown4", { size: 80, label: "unknown" }),
]);

const PrefetchFileInfo26 = struct("PrefetchFileInfo26", [
  u32("metricsOffset", { endian: "little", label: "offset of the file metrics array" }),
  u32("metricsCount", { endian: "little", label: "entries in it" }),
  u32("traceChainsOffset", { endian: "little", label: "offset of the trace chains array" }),
  u32("traceChainsCount", { endian: "little", label: "entries in it" }),
  u32("filenameStringsOffset", { endian: "little", label: "offset of the filename strings" }),
  u32("filenameStringsSize", { endian: "little", label: "bytes of those strings, UTF-16LE" }),
  u32("volumesInfoOffset", { endian: "little", label: "offset of the volumes information" }),
  u32("volumesCount", { endian: "little", label: "number of volumes involved" }),
  u32("volumesInfoSize", { endian: "little", label: "bytes of volumes information" }),
  u64("unknown", { endian: "little", label: "unknown" }),
  array("lastRunTimes", "u64", 8, { label: "the last eight execution times as FILETIMEs, newest first; unused slots are zero" }),
  bytes("unknown2", { size: 16, label: "unknown" }),
  u32("runCount", { endian: "little", label: "times this program has run" }),
  u32("unknown3", { endian: "little", label: "unknown" }),
  u32("unknown4", { endian: "little", label: "unknown" }),
  bytes("unknown5", { size: 88, label: "unknown" }),
]);

const Prefetch = struct("Prefetch", [
  u32("version", { endian: "little", label: "format version: 17, 23, 26 or 30 - see the table above" }),
  str("signature", { size: 4, label: "SCCA" }),
  u32("unknown", { endian: "little", label: "unknown; 0x0F, 0x11 or 0x17 in practice" }),
  u32("fileSize", { endian: "little", label: "size of this prefetch file in bytes" }),
  bytes("executableName", { size: 60, label: "executable file name, UTF-16LE, NUL-terminated, up to 29 characters" }),
  u32("prefetchHash", { endian: "little", label: "hash of the executable path; the same value appears in the file name" }),
  u32("unknown2", { endian: "little", label: "unknown flags" }),
]);

export default definePack({
  name: "Prefetch",
  endian: "little",
  pointerSize: 4,
  types: [PrefetchFileInfo17, PrefetchFileInfo23, PrefetchFileInfo26, Prefetch],
  nodes: {
    "entry": structNode(Prefetch, { label: "Prefetch（入口）" }),
    "PrefetchFileInfo17": structNode(PrefetchFileInfo17, { label: "PrefetchFileInfo17" }),
    "PrefetchFileInfo23": structNode(PrefetchFileInfo23, { label: "PrefetchFileInfo23" }),
    "PrefetchFileInfo26": structNode(PrefetchFileInfo26, { label: "PrefetchFileInfo26" }),
  },
});


/*
未移植项：
- Prefetch.fileInfo17: 条件字段未移植，后续布局在此停止
*/
