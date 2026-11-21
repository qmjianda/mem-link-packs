/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/hprof.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 7 项（见文件末尾）
const LoadClass = struct("LoadClass", [
  u32("classSerialNumber", {  }),
]);

const StackTrace = struct("StackTrace", [
  u32("stackTraceSerialNumber", {  }),
  u32("threadSerialNumber", {  }),
  u32("numberOfFrames", {  }),
]);

const ConstantPoolEntry = struct("ConstantPoolEntry", [
  u16("constantPoolIndex", {  }),
  u8("type", { values: { "2": "Object", "4": "Boolean", "5": "Char", "6": "Float", "7": "Double", "8": "Byte", "9": "Short", "10": "Int", "11": "Long" } }),
]);

const ConstantPoolArray = struct("ConstantPoolArray", [
  u16("size", {  }),
]);

const StaicFieldArray = struct("StaicFieldArray", [
  u16("size", {  }),
]);

const InstanceFieldsArray = struct("InstanceFieldsArray", [
  u16("size", {  }),
]);

const HeapDump = struct("HeapDump", [
  u8("subTag", { values: { "255": "RootUnknown", "1": "RootJNIGlobal", "2": "RootJNILocal", "3": "RootJavaFrame", "4": "RootNativeStack", "5": "RootStickyClass", "6": "RootThreadBlock", "7": "RootMonitorUsed", "8": "RootThreadObject", "32": "ClassDump", "33": "InstanceDump", "34": "ObjectArrayDump", "35": "PrimitiveArrayDump" } }),
]);

const UnloadClass = struct("UnloadClass", [
  u32("classSerialNumber", {  }),
]);

const AllocSitesFlags = struct("AllocSitesFlags", [
  bits("completeInsteadOfIncremental", 1, { at: 0, bit: 0, unit: 2, label: "completeInsteadOfIncremental" }),
  bits("sortedByLineInsteadOfAllocation", 1, { at: 0, bit: 1, unit: 2, label: "sortedByLineInsteadOfAllocation" }),
  bits("forceGc", 1, { at: 0, bit: 2, unit: 2, label: "forceGc" }),
]);

const AllocSite = struct("AllocSite", [
  bool("arrayIndicator", {  }),
  u32("classSerialNumber", {  }),
  u32("stackTraceSerialNumber", {  }),
  u32("numberOfLiveBytes", {  }),
  u32("numberOfLiveInstances", {  }),
  u32("numberOfBytesAllocated", {  }),
  u32("numberOfInstancesAllocated", {  }),
]);

const AllocSites = struct("AllocSites", [
  record("flags", AllocSitesFlags),
  f32("cutoffRatio", {  }),
  u32("totalLiveBytes", {  }),
  u32("totalLiveInstances", {  }),
  u64("totalBytesAllocated", {  }),
  u64("totalInstancesAllocated", {  }),
  u32("numSites", {  }),
]);

const HeapSummary = struct("HeapSummary", [
  u32("totalLiveBytes", {  }),
  u32("totalLiveInstances", {  }),
  u64("totalBytesAllocated", {  }),
  u64("totalInstancesAllocated", {  }),
]);

const StartThread = struct("StartThread", [
  u32("threadSerialNumber", {  }),
]);

const EndThread = struct("EndThread", [
  u32("threadSerialNumber", {  }),
]);

const Sample = struct("Sample", [
  u32("numberOfSamples", {  }),
  u32("stackTraceSerialNumber", {  }),
]);

const CpuSamples = struct("CpuSamples", [
  u32("numSamples", {  }),
]);

const ControlSettingsFlags = struct("ControlSettingsFlags", [
  bits("allocTraces", 1, { at: 0, bit: 0, unit: 4, label: "allocTraces" }),
  bits("cpuSampling", 1, { at: 0, bit: 1, unit: 4, label: "cpuSampling" }),
]);

const ControlSettings = struct("ControlSettings", [
  record("flags", ControlSettingsFlags),
  u16("stackTraceDepth", {  }),
]);

const Record = struct("Record", [
  u8("tag", { values: { "1": "STRING_IN_UTF8", "2": "LOAD_CLASS", "3": "UNLOAD_CLASS", "4": "STACK_FRAME", "5": "STACK_TRACE", "6": "ALLOC_SITES", "7": "HEAP_SUMMARY", "10": "START_THREAD", "11": "END_THREAD", "12": "HEAP_DUMP", "28": "HEAP_DUMP_SEGMENT", "44": "HEAP_DUMP_END", "13": "CPU_SAMPLES", "14": "CONTROL_SETTINGS" } }),
  u32("time", {  }),
  u32("length", {  }),
]);

export default definePack({
  name: "Java HPROF Profiler Data Format",
  endian: "big",
  pointerSize: 8,
  types: [LoadClass, StackTrace, ConstantPoolEntry, ConstantPoolArray, StaicFieldArray, InstanceFieldsArray, HeapDump, UnloadClass, AllocSitesFlags, AllocSite, AllocSites, HeapSummary, StartThread, EndThread, Sample, CpuSamples, ControlSettingsFlags, ControlSettings, Record],
  nodes: {
    "entry": structNode(LoadClass, { label: "LoadClass（入口）" }),
    "StackTrace": structNode(StackTrace, { label: "StackTrace" }),
    "ConstantPoolEntry": structNode(ConstantPoolEntry, { label: "ConstantPoolEntry" }),
    "ConstantPoolArray": structNode(ConstantPoolArray, { label: "ConstantPoolArray" }),
    "StaicFieldArray": structNode(StaicFieldArray, { label: "StaicFieldArray" }),
    "InstanceFieldsArray": structNode(InstanceFieldsArray, { label: "InstanceFieldsArray" }),
    "HeapDump": structNode(HeapDump, { label: "HeapDump" }),
    "UnloadClass": structNode(UnloadClass, { label: "UnloadClass" }),
    "AllocSitesFlags": structNode(AllocSitesFlags, { label: "AllocSitesFlags" }),
    "AllocSite": structNode(AllocSite, { label: "AllocSite" }),
    "AllocSites": structNode(AllocSites, { label: "AllocSites" }),
    "HeapSummary": structNode(HeapSummary, { label: "HeapSummary" }),
    "StartThread": structNode(StartThread, { label: "StartThread" }),
    "EndThread": structNode(EndThread, { label: "EndThread" }),
    "Sample": structNode(Sample, { label: "Sample" }),
    "CpuSamples": structNode(CpuSamples, { label: "CpuSamples" }),
    "ControlSettingsFlags": structNode(ControlSettingsFlags, { label: "ControlSettingsFlags" }),
    "ControlSettings": structNode(ControlSettings, { label: "ControlSettings" }),
    "Record": structNode(Record, { label: "Record" }),
  },
});


/*
未移植项：
- StringInUTF8.id: 类型 ID 不可移植
- LoadClass.classObjectId: 类型 ID 不可移植
- StackFrame.stackFrameId: 类型 ID 不可移植
- StaticFieldEntry.staticFieldNameStringId: 类型 ID 不可移植
- InstanceField.fieldNameStringId: 类型 ID 不可移植
- StartThread.threadObjectId: 类型 ID 不可移植
- HPROF.header: 类型 Header 不可移植
*/
