/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/minidump
// 原始 pack：minidump · Windows minidump v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 27 个动态辅助节点；未移植 2 项（见文件末尾）
const Location = struct("Location", [
  u32("dataSize", { endian: "little", label: "size in bytes" }),
  u32("rva", { endian: "little", label: "file offset" }),
]);

const MinidumpString = struct("MinidumpString", [
  u32("length", { endian: "little", label: "length of the text in bytes" }),
]);

const SystemInfo = struct("SystemInfo", [
  u16("processorArchitecture", { values: { "0": "Intel", "1": "Mips", "2": "Alpha", "3": "Ppc", "4": "Shx", "5": "Arm", "6": "Ia64", "7": "Alpha64", "8": "Msil", "9": "Amd64", "10": "Ia32OnWin64", "12": "Arm64", "65535": "Unknown" }, label: "CPU architecture" }),
  u16("processorLevel", { endian: "little", label: "CPU family (x86: 6 = P6 and later)" }),
  u16("processorRevision", { endian: "little", label: "CPU model/stepping" }),
  u8("numberOfProcessors", { endian: "little", label: "logical processor count" }),
  u8("productType", { values: { "1": "Workstation", "2": "DomainController", "3": "Server" }, label: "workstation / server" }),
  u32("majorVersion", { endian: "little", label: "OS major version (10 for Windows 10/11)" }),
  u32("minorVersion", { endian: "little", label: "OS minor version" }),
  u32("buildNumber", { endian: "little", label: "OS build number" }),
  u32("platformId", { endian: "little", label: "2 = Win32 NT; Breakpad: 0x8000 macOS, 0x8201 Linux, 0x8203 Android" }),
  u32("csdVersionRva", { endian: "little", label: "RVA of the service pack string" }),
  u16("suiteMask", { endian: "little", label: "installed product suites" }),
  u16("reserved2", { endian: "little" }),
  bytes("cpuInfo", { size: 24, label: "CPUID vendor/version/features (x86) or processor features" }),
]);

const ExceptionRecord = struct("ExceptionRecord", [
  u32("exceptionCode", { values: { "3221225477": "AccessViolation", "3221225478": "InPageError", "3221225501": "IllegalInstruction", "3221225612": "ArrayBoundsExceeded", "3221225614": "FloatDivideByZero", "3221225620": "IntegerDivideByZero", "3221225621": "IntegerOverflow", "3221225622": "PrivilegedInstruction", "3221225725": "StackOverflow", "3221226356": "HeapCorruption", "3221226505": "FailFast", "2147483651": "Breakpoint", "2147483652": "SingleStep", "1073807366": "DbgPrint", "3765269347": "CppException", "3762504530": "ClrException" }, label: "NTSTATUS-style exception code" }),
  u32("exceptionFlags", { endian: "little", label: "0 = continuable, 1 = non-continuable" }),
  u64("exceptionRecord", { endian: "little", label: "pointer to a nested exception record" }),
  u64("exceptionAddress", { endian: "little", label: "address where the exception occurred" }),
  u32("numberParameters", { endian: "little", label: "meaningful entries in exceptionInformation" }),
  u32("unusedAlignment", { endian: "little" }),
  array("exceptionInformation", "u64", 15, { label: "access violation: [0] 0 read / 1 write / 8 execute, [1] faulting address" }),
]);

const ExceptionStream = struct("ExceptionStream", [
  u32("threadId", { endian: "little", label: "id of the faulting thread" }),
  u32("alignment", { endian: "little" }),
  record("record", ExceptionRecord, { label: "the exception itself" }),
  record("threadContext", Location, { label: "CONTEXT record of the faulting thread" }),
]);

const Module = struct("Module", [
  u64("baseOfImage", { endian: "little", label: "load address" }),
  u32("sizeOfImage", { endian: "little", label: "mapped image size" }),
  u32("checksum", { endian: "little", label: "PE checksum" }),
  u32("timeDateStamp", { endian: "little", label: "PE timestamp (Unix seconds)" }),
  u32("moduleNameRva", { endian: "little", label: "RVA of the module path" }),
  bytes("versionInfo", { size: 52, label: "VS_FIXEDFILEINFO" }),
  record("cvRecord", Location, { label: "CodeView record (PDB name and GUID)" }),
  record("miscRecord", Location, { label: "misc debug record" }),
  u64("reserved0", { endian: "little" }),
  u64("reserved1", { endian: "little" }),
]);

const ModuleList = struct("ModuleList", [
  u32("numberOfModules", { endian: "little", label: "loaded module count" }),
]);

const MemoryDescriptor = struct("MemoryDescriptor", [
  u64("startOfMemoryRange", { endian: "little", label: "virtual address of the range" }),
  record("memory", Location, { label: "where its bytes are in the dump" }),
]);

const Thread = struct("Thread", [
  u32("threadId", { endian: "little", label: "thread id" }),
  u32("suspendCount", { endian: "little", label: "suspend count at dump time" }),
  u32("priorityClass", { endian: "little" }),
  u32("priority", { endian: "little" }),
  u64("teb", { endian: "little", label: "thread environment block address" }),
  record("stack", MemoryDescriptor, { label: "captured stack memory" }),
  record("threadContext", Location, { label: "CONTEXT record" }),
]);

const ThreadList = struct("ThreadList", [
  u32("numberOfThreads", { endian: "little", label: "thread count" }),
]);

const MemoryList = struct("MemoryList", [
  u32("numberOfMemoryRanges", { endian: "little", label: "captured range count" }),
]);

const Memory64Descriptor = struct("Memory64Descriptor", [
  u64("startOfMemoryRange", { endian: "little", label: "virtual address of the range" }),
  u64("dataSize", { endian: "little", label: "size in bytes; the data is laid out contiguously from baseRva" }),
]);

const Memory64List = struct("Memory64List", [
  u64("numberOfMemoryRanges", { endian: "little", label: "captured range count" }),
  u64("baseRva", { endian: "little", label: "file offset where the first range's bytes start" }),
]);

const UnloadedModule = struct("UnloadedModule", [
  u64("baseOfImage", { endian: "little", label: "load address before unloading" }),
  u32("sizeOfImage", { endian: "little" }),
  u32("checksum", { endian: "little" }),
  u32("timeDateStamp", { endian: "little", label: "PE timestamp (Unix seconds)" }),
  u32("moduleNameRva", { endian: "little", label: "RVA of the module path" }),
]);

const UnloadedModuleList = struct("UnloadedModuleList", [
  u32("sizeOfHeader", { endian: "little", label: "size of this header (12)" }),
  u32("sizeOfEntry", { endian: "little", label: "size of each entry (24)" }),
  u32("numberOfEntries", { endian: "little", label: "unloaded module count" }),
]);

const ThreadName = struct("ThreadName", [
  u32("threadId", { endian: "little", label: "thread id" }),
  u64("rvaOfThreadName", { endian: "little", label: "RVA of the name string" }),
]);

const ThreadNames = struct("ThreadNames", [
  u32("numberOfThreadNames", { endian: "little", label: "named thread count" }),
]);

const MiscInfoFlags = struct("MiscInfoFlags", [
  bits("processId", 1, { at: 0, bit: 0, unit: 4, label: "processId" }),
  bits("processTimes", 1, { at: 0, bit: 1, unit: 4, label: "processTimes" }),
  bits("processorPowerInfo", 1, { at: 0, bit: 2, unit: 4, label: "processorPowerInfo" }),
  bits("processIntegrity", 1, { at: 0, bit: 4, unit: 4, label: "processIntegrity" }),
  bits("processExecuteFlags", 1, { at: 0, bit: 5, unit: 4, label: "processExecuteFlags" }),
  bits("timezone", 1, { at: 0, bit: 6, unit: 4, label: "timezone" }),
  bits("protectedProcess", 1, { at: 0, bit: 7, unit: 4, label: "protectedProcess" }),
  bits("buildString", 1, { at: 0, bit: 8, unit: 4, label: "buildString" }),
  bits("processCookie", 1, { at: 0, bit: 9, unit: 4, label: "processCookie" }),
]);

const MiscInfo = struct("MiscInfo", [
  u32("sizeOfInfo", { endian: "little", label: "structure size (24 / 44 / 232 / 416 by version)" }),
  record("flags1", MiscInfoFlags, { label: "which fields are valid" }),
  u32("processId", { endian: "little", label: "crashing process id" }),
  u32("processCreateTime", { endian: "little", label: "process start (Unix seconds)" }),
  u32("processUserTime", { endian: "little", label: "user-mode CPU seconds" }),
  u32("processKernelTime", { endian: "little", label: "kernel-mode CPU seconds" }),
]);

const Directory = struct("Directory", [
  u32("streamType", { values: { "0": "Unused", "3": "ThreadList", "4": "ModuleList", "5": "MemoryList", "6": "Exception", "7": "SystemInfo", "8": "ThreadExList", "9": "Memory64List", "10": "CommentA", "11": "CommentW", "12": "HandleData", "13": "FunctionTable", "14": "UnloadedModuleList", "15": "MiscInfo", "16": "MemoryInfoList", "17": "ThreadInfoList", "18": "HandleOperationList", "19": "Token", "20": "JavaScriptData", "21": "SystemMemoryInfo", "22": "ProcessVmCounters", "23": "IptTrace", "24": "ThreadNames" }, label: "what the stream holds" }),
  u32("dataSize", { endian: "little", label: "stream size in bytes" }),
  u32("rva", { endian: "little", label: "file offset of the stream" }),
]);

const MinidumpType = struct("MinidumpType", [
  bits("withDataSegs", 1, { at: 0, bit: 0, unit: 8, label: "withDataSegs" }),
  bits("withFullMemory", 1, { at: 0, bit: 1, unit: 8, label: "withFullMemory" }),
  bits("withHandleData", 1, { at: 0, bit: 2, unit: 8, label: "withHandleData" }),
  bits("filterMemory", 1, { at: 0, bit: 3, unit: 8, label: "filterMemory" }),
  bits("scanMemory", 1, { at: 0, bit: 4, unit: 8, label: "scanMemory" }),
  bits("withUnloadedModules", 1, { at: 0, bit: 5, unit: 8, label: "withUnloadedModules" }),
  bits("withIndirectlyReferencedMemory", 1, { at: 0, bit: 6, unit: 8, label: "withIndirectlyReferencedMemory" }),
  bits("filterModulePaths", 1, { at: 0, bit: 7, unit: 8, label: "filterModulePaths" }),
  bits("withProcessThreadData", 1, { at: 0, bit: 8, unit: 8, label: "withProcessThreadData" }),
  bits("withPrivateReadWriteMemory", 1, { at: 0, bit: 9, unit: 8, label: "withPrivateReadWriteMemory" }),
  bits("withoutOptionalData", 1, { at: 0, bit: 10, unit: 8, label: "withoutOptionalData" }),
  bits("withFullMemoryInfo", 1, { at: 0, bit: 11, unit: 8, label: "withFullMemoryInfo" }),
  bits("withThreadInfo", 1, { at: 0, bit: 12, unit: 8, label: "withThreadInfo" }),
  bits("withCodeSegs", 1, { at: 0, bit: 13, unit: 8, label: "withCodeSegs" }),
  bits("withoutAuxiliaryState", 1, { at: 0, bit: 14, unit: 8, label: "withoutAuxiliaryState" }),
  bits("withFullAuxiliaryState", 1, { at: 0, bit: 15, unit: 8, label: "withFullAuxiliaryState" }),
  bits("withPrivateWriteCopyMemory", 1, { at: 0, bit: 16, unit: 8, label: "withPrivateWriteCopyMemory" }),
  bits("ignoreInaccessibleMemory", 1, { at: 0, bit: 17, unit: 8, label: "ignoreInaccessibleMemory" }),
  bits("withTokenInformation", 1, { at: 0, bit: 18, unit: 8, label: "withTokenInformation" }),
  bits("withModuleHeaders", 1, { at: 0, bit: 19, unit: 8, label: "withModuleHeaders" }),
  bits("filterTriage", 1, { at: 0, bit: 20, unit: 8, label: "filterTriage" }),
  bits("withAvxXStateContext", 1, { at: 0, bit: 21, unit: 8, label: "withAvxXStateContext" }),
  bits("withIptTrace", 1, { at: 0, bit: 22, unit: 8, label: "withIptTrace" }),
  bits("scanInaccessiblePartialPages", 1, { at: 0, bit: 23, unit: 8, label: "scanInaccessiblePartialPages" }),
  bits("filterWriteCombinedMemory", 1, { at: 0, bit: 24, unit: 8, label: "filterWriteCombinedMemory" }),
]);

const Minidump = struct("Minidump", [
  str("signature", { size: 4, label: "always MDMP" }),
  u16("version", { endian: "little", label: "format version (0xA793)" }),
  u16("implementationVersion", { endian: "little", label: "writer-specific" }),
  u32("numberOfStreams", { endian: "little", label: "directory entry count" }),
  u32("streamDirectoryRva", { endian: "little", label: "file offset of the directory" }),
  u32("checksum", { endian: "little", label: "unused (0)" }),
  u32("timeDateStamp", { endian: "little", label: "dump creation time (Unix seconds)" }),
  record("flags", MinidumpType, { label: "MINIDUMP_TYPE: what was captured" }),
]);

export default definePack({
  name: "MDMP",
  endian: "little",
  pointerSize: 4,
  types: [Location, MinidumpString, SystemInfo, ExceptionRecord, ExceptionStream, Module, ModuleList, MemoryDescriptor, Thread, ThreadList, MemoryList, Memory64Descriptor, Memory64List, UnloadedModule, UnloadedModuleList, ThreadName, ThreadNames, MiscInfoFlags, MiscInfo, Directory, MinidumpType, Minidump],
  nodes: {
    "entry": structNode(Minidump, { label: "Minidump（入口）" }),
    "Location": structNode(Location, { label: "Location" }),
    "MinidumpString": structNode(MinidumpString, { label: "MinidumpString" }),
    "SystemInfo": structNode(SystemInfo, { label: "SystemInfo" }),
    "ExceptionRecord": structNode(ExceptionRecord, { label: "ExceptionRecord" }),
    "ExceptionStream": structNode(ExceptionStream, { label: "ExceptionStream" }),
    "Module": structNode(Module, { label: "Module" }),
    "ModuleList": structNode(ModuleList, { label: "ModuleList" }),
    "MemoryDescriptor": structNode(MemoryDescriptor, { label: "MemoryDescriptor" }),
    "Thread": structNode(Thread, { label: "Thread" }),
    "ThreadList": structNode(ThreadList, { label: "ThreadList" }),
    "MemoryList": structNode(MemoryList, { label: "MemoryList" }),
    "Memory64Descriptor": structNode(Memory64Descriptor, { label: "Memory64Descriptor" }),
    "Memory64List": structNode(Memory64List, { label: "Memory64List" }),
    "UnloadedModule": structNode(UnloadedModule, { label: "UnloadedModule" }),
    "UnloadedModuleList": structNode(UnloadedModuleList, { label: "UnloadedModuleList" }),
    "ThreadName": structNode(ThreadName, { label: "ThreadName" }),
    "ThreadNames": structNode(ThreadNames, { label: "ThreadNames" }),
    "MiscInfo": structNode(MiscInfo, { label: "MiscInfo" }),
    "Directory": structNode(Directory, { label: "Directory" }),
    "flags_MinidumpType": structNode(MinidumpType, { label: "位域 MinidumpType" }),
    "flags_MiscInfoFlags": structNode(MiscInfoFlags, { label: "位域 MiscInfoFlags" }),
    "ptr_SystemInfo_csdVersion": calcNode({
      label: "SystemInfo.csdVersion（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "csdVersionRva": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["csdVersionRva"] ?? 0) }),
    }),
    "ptrtarget_SystemInfo_csdVersion": structNode(MinidumpString, { label: "指针目标 · SystemInfo.csdVersion" }),
    "ptr_Module_name": calcNode({
      label: "Module.name（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "moduleNameRva": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["moduleNameRva"] ?? 0) }),
    }),
    "ptrtarget_Module_name": structNode(MinidumpString, { label: "指针目标 · Module.name" }),
    "array_ModuleList_modules": arrayNode(Module, {
      label: "ModuleList.modules（动态数组）",
      description: "count 来自 ModuleList.numberOfModules；address 指向数组首元素",
    }),
    "array_ThreadList_threads": arrayNode(Thread, {
      label: "ThreadList.threads（动态数组）",
      description: "count 来自 ThreadList.numberOfThreads；address 指向数组首元素",
    }),
    "array_MemoryList_ranges": arrayNode(MemoryDescriptor, {
      label: "MemoryList.ranges（动态数组）",
      description: "count 来自 MemoryList.numberOfMemoryRanges；address 指向数组首元素",
    }),
    "array_Memory64List_ranges": arrayNode(Memory64Descriptor, {
      label: "Memory64List.ranges（动态数组）",
      description: "count 来自 Memory64List.numberOfMemoryRanges；address 指向数组首元素",
    }),
    "ptr_UnloadedModule_name": calcNode({
      label: "UnloadedModule.name（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "moduleNameRva": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["moduleNameRva"] ?? 0) }),
    }),
    "ptrtarget_UnloadedModule_name": structNode(MinidumpString, { label: "指针目标 · UnloadedModule.name" }),
    "array_UnloadedModuleList_entries": arrayNode(UnloadedModule, {
      label: "UnloadedModuleList.entries（动态数组）",
      description: "count 来自 UnloadedModuleList.numberOfEntries；address 指向数组首元素",
    }),
    "ptr_ThreadName_name": calcNode({
      label: "ThreadName.name（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "rvaOfThreadName": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["rvaOfThreadName"] ?? 0) }),
    }),
    "ptrtarget_ThreadName_name": structNode(MinidumpString, { label: "指针目标 · ThreadName.name" }),
    "array_ThreadNames_names": arrayNode(ThreadName, {
      label: "ThreadNames.names（动态数组）",
      description: "count 来自 ThreadNames.numberOfThreadNames；address 指向数组首元素",
    }),
    "calc_MiscInfo_restLen": calcNode({
      label: "MiscInfo.restLen（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "sizeOfInfo": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["sizeOfInfo"] ?? 0) - 24) }),
    }),
    "ptr_Directory_stream": calcNode({
      label: "Directory.stream（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "rva": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["rva"] ?? 0) }),
    }),
    "match_Directory_stream_3": structNode(ThreadList, { label: "Directory.stream · match 3" }),
    "match_Directory_stream_4": structNode(ModuleList, { label: "Directory.stream · match 4" }),
    "match_Directory_stream_5": structNode(MemoryList, { label: "Directory.stream · match 5" }),
    "match_Directory_stream_6": structNode(ExceptionStream, { label: "Directory.stream · match 6" }),
    "match_Directory_stream_7": structNode(SystemInfo, { label: "Directory.stream · match 7" }),
    "match_Directory_stream_9": structNode(Memory64List, { label: "Directory.stream · match 9" }),
    "match_Directory_stream_14": structNode(UnloadedModuleList, { label: "Directory.stream · match 14" }),
    "match_Directory_stream_15": structNode(MiscInfo, { label: "Directory.stream · match 15" }),
    "match_Directory_stream_24": structNode(ThreadNames, { label: "Directory.stream · match 24" }),
    "ptr_Minidump_directory": calcNode({
      label: "Minidump.directory（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "streamDirectoryRva": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["streamDirectoryRva"] ?? 0) }),
    }),
    "array_Minidump_directory": arrayNode(Directory, {
      label: "Minidump.directory（动态数组）",
      description: "count 来自 Minidump.numberOfStreams；address 指向数组首元素",
    }),
  },
});


/*
未移植项：
- MinidumpString.text: 变长字节块未移植
- MiscInfo.rest: 变长字节块未移植
*/
