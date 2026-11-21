/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/minidump.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 14 项（见文件末尾）
const MINIDUMP_MEMORY_DESCRIPTOR = struct("MINIDUMP_MEMORY_DESCRIPTOR", [
  u64("StartOfMemoryRange", {  }),
]);

const MINIDUMP_THREAD = struct("MINIDUMP_THREAD", [
  u32("ThreadId", {  }),
  u32("SuspendCount", {  }),
  u32("PriorityClass", {  }),
  u32("Priority", {  }),
  u64("Teb", {  }),
  record("Stack", MINIDUMP_MEMORY_DESCRIPTOR),
]);

const MINIDUMP_THREAD_LIST = struct("MINIDUMP_THREAD_LIST", [
  u32("NumberOfThreads", {  }),
]);

const VS_FIXEDFILEINFO = struct("VS_FIXEDFILEINFO", [
  u32("dwSignature", {  }),
  u32("dwStrucVersion", {  }),
  u32("dwFileVersionMS", {  }),
  u32("dwFileVersionLS", {  }),
  u32("dwProductVersionMS", {  }),
  u32("dwProductVersionLS", {  }),
  u32("dwFileFlagsMask", {  }),
  u32("dwFileFlags", {  }),
  u32("dwFileOS", {  }),
  u32("dwFileType", {  }),
  u32("dwFileSubtype", {  }),
  u32("dwFileDateMS", {  }),
  u32("dwFileDateLS", {  }),
]);

const MINIDUMP_MODULE = struct("MINIDUMP_MODULE", [
  u64("BaseOfImage", {  }),
]);

const MINIDUMP_MODULE_LIST = struct("MINIDUMP_MODULE_LIST", [
  u32("NumberOfModules", {  }),
]);

const MINIDUMP_MEMORY_LIST = struct("MINIDUMP_MEMORY_LIST", [
  u32("NumberOfMemoryRanges", {  }),
]);

const MINIDUMP_EXCEPTION = struct("MINIDUMP_EXCEPTION", [
  u32("ExceptionCode", {  }),
  u32("ExceptionFlags", {  }),
  u64("ExceptionRecord", {  }),
  u64("ExceptionAddress", {  }),
  u32("NumberParameters", {  }),
  pad(4),
  array("ExceptionInformation", "u64", 15),
]);

const MINIDUMP_EXCEPTION_STREAM = struct("MINIDUMP_EXCEPTION_STREAM", [
  u32("ThreadId", {  }),
  pad(4),
  record("ExceptionRecord", MINIDUMP_EXCEPTION),
]);

const CPU_INFORMATION = struct("CPU_INFORMATION", [
  array("VendorId", "u32", 3),
  u32("VersionInformation", {  }),
  u32("FeatureInformation", {  }),
  u32("AMDExtendedCpuFeatures", {  }),
]);

const MINIDUMP_SYSTEM_INFO = struct("MINIDUMP_SYSTEM_INFO", [
  u16("ProcessorArchitecture", {  }),
  u16("ProcessorLevel", {  }),
  u16("ProcessorRevision", {  }),
]);

const MINIDUMP_THREAD_EX = struct("MINIDUMP_THREAD_EX", [
  u32("ThreadId", {  }),
  u32("SuspendCount", {  }),
  u32("PriorityClass", {  }),
  u32("Priority", {  }),
  u64("Teb", {  }),
  record("Stack", MINIDUMP_MEMORY_DESCRIPTOR),
]);

const MINIDUMP_THREAD_EX_LIST = struct("MINIDUMP_THREAD_EX_LIST", [
  u32("NumberOfThreads", {  }),
]);

const MINIDUMP_MEMORY_DESCRIPTOR64 = struct("MINIDUMP_MEMORY_DESCRIPTOR64", [
  u64("StartOfMemoryRange", {  }),
]);

const MINIDUMP_MEMORY64_LIST = struct("MINIDUMP_MEMORY64_LIST", [
  u64("NumberOfMemoryRanges", {  }),
  u64("BaseRva", {  }),
]);

const MINIDUMP_HANDLE_DESCRIPTOR = struct("MINIDUMP_HANDLE_DESCRIPTOR", [
  u64("Handle", {  }),
  u32("TypeNameRva", {  }),
  u32("ObjectNameRva", {  }),
  u32("Attributes", {  }),
  u32("GrantedAccess", {  }),
  u32("HandleCount", {  }),
  u32("PointerCount", {  }),
]);

const MINIDUMP_HANDLE_DESCRIPTOR_2 = struct("MINIDUMP_HANDLE_DESCRIPTOR_2", [
  u64("Handle", {  }),
  u32("TypeNameRva", {  }),
  u32("ObjectNameRva", {  }),
  u32("Attributes", {  }),
  u32("GrantedAccess", {  }),
  u32("HandleCount", {  }),
  u32("PointerCount", {  }),
  u32("ObjectInfoRva", {  }),
  u32("Reserved0", {  }),
]);

const MINIDUMP_HANDLE_DATA_STREAM = struct("MINIDUMP_HANDLE_DATA_STREAM", [
  u32("SizeOfHeader", {  }),
  u32("SizeOfDescriptor", {  }),
  u32("NumberOfDescriptors", {  }),
  u32("Reserved", {  }),
]);

const MINIDUMP_FUNCTION_TABLE_DESCRIPTOR = struct("MINIDUMP_FUNCTION_TABLE_DESCRIPTOR", [
  u64("MinimumAddress", {  }),
  u64("MaximumAddress", {  }),
  u64("BaseAddress", {  }),
  u32("EntryCount", {  }),
]);

const MINIDUMP_UNLOADED_MODULE = struct("MINIDUMP_UNLOADED_MODULE", [
  u64("BaseOfImage", {  }),
]);

const MINIDUMP_UNLOADED_MODULE_LIST = struct("MINIDUMP_UNLOADED_MODULE_LIST", [
  u32("SizeOfHeader", {  }),
  u32("SizeOfEntry", {  }),
  u32("NumberOfEntries", {  }),
]);

const MINIDUMP_MISC_INFO = struct("MINIDUMP_MISC_INFO", [
  u32("SizeOfInfo", {  }),
  u32("Flags1", {  }),
  u32("ProcessId", {  }),
  u32("ProcessCreateTime", {  }),
  u32("ProcessUserTime", {  }),
  u32("ProcessKernelTime", {  }),
]);

const MINIDUMP_MEMORY_INFO = struct("MINIDUMP_MEMORY_INFO", [
  u64("BaseAddress", {  }),
  u64("AllocationBase", {  }),
  u32("AllocationProtect", {  }),
  pad(4),
]);

const MINIDUMP_MEMORY_INFO_LIST = struct("MINIDUMP_MEMORY_INFO_LIST", [
  u32("SizeOfHeader", {  }),
  u32("SizeOfEntry", {  }),
  u64("NumberOfEntries", {  }),
]);

const MINIDUMP_THREAD_INFO = struct("MINIDUMP_THREAD_INFO", [
  u32("ThreadId", {  }),
  u32("DumpFlags", {  }),
  u32("DumpError", {  }),
  u32("ExitStatus", {  }),
  u64("CreateTime", {  }),
  u64("ExitTime", {  }),
  u64("KernelTime", {  }),
  u64("UserTime", {  }),
  u64("StartAddress", {  }),
  u64("Affinity", {  }),
]);

const MINIDUMP_THREAD_INFO_LIST = struct("MINIDUMP_THREAD_INFO_LIST", [
  u32("SizeOfHeader", {  }),
  u32("SizeOfEntry", {  }),
  u32("NumberOfEntries", {  }),
]);

const MINIDUMP_HANDLE_OPERATION_LIST = struct("MINIDUMP_HANDLE_OPERATION_LIST", [
  u32("SizeOfHeader", {  }),
  u32("SizeOfEntry", {  }),
  u32("NumberOfEntries", {  }),
  u32("Reserved", {  }),
]);

const MINIDUMP_DIRECTORY = struct("MINIDUMP_DIRECTORY", [
  u32("StreamType", { values: { "0": "UnusedStream", "1": "ReservedStream0", "2": "ReservedStream1", "3": "ThreadListStream", "4": "ModuleListStream", "5": "MemoryListStream", "6": "ExceptionStream", "7": "SystemInfoStream", "8": "ThreadExListStream", "9": "Memory64ListStream", "10": "CommentStreamA", "11": "CommentStreamW", "12": "HandleDataStream", "13": "FunctionTableStream", "14": "UnloadedModuleListStream", "15": "MiscInfoStream", "16": "MemoryInfoListStream", "17": "ThreadInfoListStream", "18": "HandleOperationListStream", "19": "TokenStream", "20": "JavaScriptDataStream", "21": "SystemMemoryInfoStream", "22": "ProcessVmCountersStream", "23": "IptTraceStream", "24": "ThreadNamesStream", "32768": "ceStreamNull", "32769": "ceStreamSystemInfo", "32770": "ceStreamException", "32771": "ceStreamModuleList", "32772": "ceStreamProcessList", "32773": "ceStreamThreadList", "32774": "ceStreamThreadContextList", "32775": "ceStreamThreadCallStackList", "32776": "ceStreamMemoryVirtualList", "32777": "ceStreamMemoryPhysicalList", "32778": "ceStreamBucketParameters", "32779": "ceStreamProcessModuleMap", "32780": "ceStreamDiagnosisList", "65535": "LastReservedStream" } }),
]);

const MINIDUMP_TYPE = struct("MINIDUMP_TYPE", [
  bits("MiniDumpWithDataSegs", 1, { at: 0, bit: 0, unit: 8, label: "MiniDumpWithDataSegs" }),
  bits("MiniDumpWithFullMemory", 1, { at: 0, bit: 1, unit: 8, label: "MiniDumpWithFullMemory" }),
  bits("MiniDumpWithHandleData", 1, { at: 0, bit: 2, unit: 8, label: "MiniDumpWithHandleData" }),
  bits("MiniDumpFilterMemory", 1, { at: 0, bit: 3, unit: 8, label: "MiniDumpFilterMemory" }),
  bits("MiniDumpScanMemory", 1, { at: 0, bit: 4, unit: 8, label: "MiniDumpScanMemory" }),
  bits("MiniDumpWithUnloadedModules", 1, { at: 0, bit: 5, unit: 8, label: "MiniDumpWithUnloadedModules" }),
  bits("MiniDumpWithIndirectlyReferencedMemory", 1, { at: 0, bit: 6, unit: 8, label: "MiniDumpWithIndirectlyReferencedMemory" }),
  bits("MiniDumpFilterModulePaths", 1, { at: 0, bit: 7, unit: 8, label: "MiniDumpFilterModulePaths" }),
  bits("MiniDumpWithProcessThreadData", 1, { at: 0, bit: 8, unit: 8, label: "MiniDumpWithProcessThreadData" }),
  bits("MiniDumpWithPrivateReadWriteMemory", 1, { at: 0, bit: 9, unit: 8, label: "MiniDumpWithPrivateReadWriteMemory" }),
  bits("MiniDumpWithoutOptionalData", 1, { at: 0, bit: 10, unit: 8, label: "MiniDumpWithoutOptionalData" }),
  bits("MiniDumpWithFullMemoryInfo", 1, { at: 0, bit: 11, unit: 8, label: "MiniDumpWithFullMemoryInfo" }),
  bits("MiniDumpWithThreadInfo", 1, { at: 0, bit: 12, unit: 8, label: "MiniDumpWithThreadInfo" }),
  bits("MiniDumpWithCodeSegs", 1, { at: 0, bit: 13, unit: 8, label: "MiniDumpWithCodeSegs" }),
  bits("MiniDumpWithoutAuxiliaryState", 1, { at: 0, bit: 14, unit: 8, label: "MiniDumpWithoutAuxiliaryState" }),
  bits("MiniDumpWithFullAuxiliaryState", 1, { at: 0, bit: 15, unit: 8, label: "MiniDumpWithFullAuxiliaryState" }),
  bits("MiniDumpWithPrivateWriteCopyMemory", 1, { at: 0, bit: 16, unit: 8, label: "MiniDumpWithPrivateWriteCopyMemory" }),
  bits("MiniDumpIgnoreInaccessibleMemory", 1, { at: 0, bit: 17, unit: 8, label: "MiniDumpIgnoreInaccessibleMemory" }),
  bits("MiniDumpWithTokenInformation", 1, { at: 0, bit: 18, unit: 8, label: "MiniDumpWithTokenInformation" }),
  bits("MiniDumpWithModuleHeaders", 1, { at: 0, bit: 19, unit: 8, label: "MiniDumpWithModuleHeaders" }),
  bits("MiniDumpFilterTriage", 1, { at: 0, bit: 20, unit: 8, label: "MiniDumpFilterTriage" }),
  bits("MiniDumpWithAvxXStateContext", 1, { at: 0, bit: 21, unit: 8, label: "MiniDumpWithAvxXStateContext" }),
  bits("MiniDumpWithIptTrace", 1, { at: 0, bit: 22, unit: 8, label: "MiniDumpWithIptTrace" }),
  bits("MiniDumpScanInaccessiblePartialPages", 1, { at: 0, bit: 23, unit: 8, label: "MiniDumpScanInaccessiblePartialPages" }),
]);

const MINIDUMP_HEADER = struct("MINIDUMP_HEADER", [
  str("Signature", { size: 4 }),
  u32("Version", {  }),
  u32("NumberOfStreams", {  }),
  u32("StreamDirectoryRva", {  }),
  u32("Checksum", {  }),
]);

const MINIDUMP = struct("MINIDUMP", [
  record("Header", MINIDUMP_HEADER),
]);

export default definePack({
  name: "Windows MiniDump",
  endian: "little",
  pointerSize: 8,
  types: [MINIDUMP_MEMORY_DESCRIPTOR, MINIDUMP_THREAD, MINIDUMP_THREAD_LIST, VS_FIXEDFILEINFO, MINIDUMP_MODULE, MINIDUMP_MODULE_LIST, MINIDUMP_MEMORY_LIST, MINIDUMP_EXCEPTION, MINIDUMP_EXCEPTION_STREAM, CPU_INFORMATION, MINIDUMP_SYSTEM_INFO, MINIDUMP_THREAD_EX, MINIDUMP_THREAD_EX_LIST, MINIDUMP_MEMORY_DESCRIPTOR64, MINIDUMP_MEMORY64_LIST, MINIDUMP_HANDLE_DESCRIPTOR, MINIDUMP_HANDLE_DESCRIPTOR_2, MINIDUMP_HANDLE_DATA_STREAM, MINIDUMP_FUNCTION_TABLE_DESCRIPTOR, MINIDUMP_UNLOADED_MODULE, MINIDUMP_UNLOADED_MODULE_LIST, MINIDUMP_MISC_INFO, MINIDUMP_MEMORY_INFO, MINIDUMP_MEMORY_INFO_LIST, MINIDUMP_THREAD_INFO, MINIDUMP_THREAD_INFO_LIST, MINIDUMP_HANDLE_OPERATION_LIST, MINIDUMP_DIRECTORY, MINIDUMP_TYPE, MINIDUMP_HEADER, MINIDUMP],
  nodes: {
    "entry": structNode(MINIDUMP, { label: "MINIDUMP（入口）" }),
    "MINIDUMP_MEMORY_DESCRIPTOR": structNode(MINIDUMP_MEMORY_DESCRIPTOR, { label: "MINIDUMP_MEMORY_DESCRIPTOR" }),
    "MINIDUMP_THREAD": structNode(MINIDUMP_THREAD, { label: "MINIDUMP_THREAD" }),
    "MINIDUMP_THREAD_LIST": structNode(MINIDUMP_THREAD_LIST, { label: "MINIDUMP_THREAD_LIST" }),
    "VS_FIXEDFILEINFO": structNode(VS_FIXEDFILEINFO, { label: "VS_FIXEDFILEINFO" }),
    "MINIDUMP_MODULE": structNode(MINIDUMP_MODULE, { label: "MINIDUMP_MODULE" }),
    "MINIDUMP_MODULE_LIST": structNode(MINIDUMP_MODULE_LIST, { label: "MINIDUMP_MODULE_LIST" }),
    "MINIDUMP_MEMORY_LIST": structNode(MINIDUMP_MEMORY_LIST, { label: "MINIDUMP_MEMORY_LIST" }),
    "MINIDUMP_EXCEPTION": structNode(MINIDUMP_EXCEPTION, { label: "MINIDUMP_EXCEPTION" }),
    "MINIDUMP_EXCEPTION_STREAM": structNode(MINIDUMP_EXCEPTION_STREAM, { label: "MINIDUMP_EXCEPTION_STREAM" }),
    "CPU_INFORMATION": structNode(CPU_INFORMATION, { label: "CPU_INFORMATION" }),
    "MINIDUMP_SYSTEM_INFO": structNode(MINIDUMP_SYSTEM_INFO, { label: "MINIDUMP_SYSTEM_INFO" }),
    "MINIDUMP_THREAD_EX": structNode(MINIDUMP_THREAD_EX, { label: "MINIDUMP_THREAD_EX" }),
    "MINIDUMP_THREAD_EX_LIST": structNode(MINIDUMP_THREAD_EX_LIST, { label: "MINIDUMP_THREAD_EX_LIST" }),
    "MINIDUMP_MEMORY_DESCRIPTOR64": structNode(MINIDUMP_MEMORY_DESCRIPTOR64, { label: "MINIDUMP_MEMORY_DESCRIPTOR64" }),
    "MINIDUMP_MEMORY64_LIST": structNode(MINIDUMP_MEMORY64_LIST, { label: "MINIDUMP_MEMORY64_LIST" }),
    "MINIDUMP_HANDLE_DESCRIPTOR": structNode(MINIDUMP_HANDLE_DESCRIPTOR, { label: "MINIDUMP_HANDLE_DESCRIPTOR" }),
    "MINIDUMP_HANDLE_DESCRIPTOR_2": structNode(MINIDUMP_HANDLE_DESCRIPTOR_2, { label: "MINIDUMP_HANDLE_DESCRIPTOR_2" }),
    "MINIDUMP_HANDLE_DATA_STREAM": structNode(MINIDUMP_HANDLE_DATA_STREAM, { label: "MINIDUMP_HANDLE_DATA_STREAM" }),
    "MINIDUMP_FUNCTION_TABLE_DESCRIPTOR": structNode(MINIDUMP_FUNCTION_TABLE_DESCRIPTOR, { label: "MINIDUMP_FUNCTION_TABLE_DESCRIPTOR" }),
    "MINIDUMP_UNLOADED_MODULE": structNode(MINIDUMP_UNLOADED_MODULE, { label: "MINIDUMP_UNLOADED_MODULE" }),
    "MINIDUMP_UNLOADED_MODULE_LIST": structNode(MINIDUMP_UNLOADED_MODULE_LIST, { label: "MINIDUMP_UNLOADED_MODULE_LIST" }),
    "MINIDUMP_MISC_INFO": structNode(MINIDUMP_MISC_INFO, { label: "MINIDUMP_MISC_INFO" }),
    "MINIDUMP_MEMORY_INFO": structNode(MINIDUMP_MEMORY_INFO, { label: "MINIDUMP_MEMORY_INFO" }),
    "MINIDUMP_MEMORY_INFO_LIST": structNode(MINIDUMP_MEMORY_INFO_LIST, { label: "MINIDUMP_MEMORY_INFO_LIST" }),
    "MINIDUMP_THREAD_INFO": structNode(MINIDUMP_THREAD_INFO, { label: "MINIDUMP_THREAD_INFO" }),
    "MINIDUMP_THREAD_INFO_LIST": structNode(MINIDUMP_THREAD_INFO_LIST, { label: "MINIDUMP_THREAD_INFO_LIST" }),
    "MINIDUMP_HANDLE_OPERATION_LIST": structNode(MINIDUMP_HANDLE_OPERATION_LIST, { label: "MINIDUMP_HANDLE_OPERATION_LIST" }),
    "MINIDUMP_DIRECTORY": structNode(MINIDUMP_DIRECTORY, { label: "MINIDUMP_DIRECTORY" }),
    "MINIDUMP_TYPE": structNode(MINIDUMP_TYPE, { label: "MINIDUMP_TYPE" }),
    "MINIDUMP_HEADER": structNode(MINIDUMP_HEADER, { label: "MINIDUMP_HEADER" }),
  },
});


/*
未移植项：
- MINIDUMP_LOCATION_DESCRIPTOR.DataSize: 类型 type_Size32 不可移植
- MINIDUMP_MEMORY_DESCRIPTOR.Memory: 类型 MINIDUMP_LOCATION_DESCRIPTOR 不可移植
- MINIDUMP_THREAD.ThreadContext: 类型 MINIDUMP_LOCATION_DESCRIPTOR 不可移植
- MINIDUMP_MODULE.SizeOfImage: 类型 type_Size32 不可移植
- MINIDUMP_EXCEPTION_STREAM.ThreadContext: 类型 MINIDUMP_LOCATION_DESCRIPTOR 不可移植
- MINIDUMP_SYSTEM_INFO.NumberOfProcessors: 类型 UCHAR 不可移植
- MINIDUMP_THREAD_EX.ThreadContext: 类型 MINIDUMP_LOCATION_DESCRIPTOR 不可移植
- MINIDUMP_MEMORY_DESCRIPTOR64.DataSize: 类型 type_Size64 不可移植
- MINIDUMP_FUNCTION_TABLE_DESCRIPTOR.SizeOfAlignPad: 类型 type_Size32 不可移植
- MINIDUMP_FUNCTION_TABLE_STREAM.SizeOfHeader: 类型 type_Size32 不可移植
- MINIDUMP_UNLOADED_MODULE.SizeOfImage: 类型 type_Size32 不可移植
- MINIDUMP_MEMORY_INFO.RegionSize: 类型 type_Size64 不可移植
- MINIDUMP_DIRECTORY.Location: 类型 MINIDUMP_LOCATION_DESCRIPTOR 不可移植
- MINIDUMP_HEADER.TimeDateStamp: 类型 type_time32_t 不可移植
*/
