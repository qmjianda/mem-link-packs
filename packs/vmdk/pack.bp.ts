/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/vmdk
// 原始 pack：vmdk · VMDK sparse disk v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 12 个动态辅助节点
const VmdkFirstTable = struct("VmdkFirstTable", [
  u32("sector", { endian: "little", label: "sector of the first grain table" }),
]);

const VmdkFlags = struct("VmdkFlags", [
  bits("validNewlineTest", 1, { at: 0, bit: 0, unit: 4, label: "validNewlineTest" }),
  bits("redundantGrainTable", 1, { at: 0, bit: 1, unit: 4, label: "redundantGrainTable" }),
  bits("zeroedGrainGte", 1, { at: 0, bit: 2, unit: 4, label: "zeroedGrainGte" }),
  bits("compressedGrains", 1, { at: 0, bit: 16, unit: 4, label: "compressedGrains" }),
  bits("markers", 1, { at: 0, bit: 17, unit: 4, label: "markers" }),
]);

const Vmdk = struct("Vmdk", [
  str("magic", { size: 4, label: "KDMV" }),
  u32("version", { endian: "little", label: "1, or 2/3 for disks with newer features" }),
  record("flags", VmdkFlags),
  u64("capacity", { endian: "little", label: "virtual disk size in sectors" }),
  u64("grainSize", { endian: "little", label: "sectors per grain, 128 (64 KiB) by default" }),
  u64("descriptorOffset", { endian: "little", label: "sector of the embedded descriptor, 0 if none" }),
  u64("descriptorSize", { endian: "little", label: "sectors reserved for the descriptor" }),
  u32("numGtesPerGt", { endian: "little", label: "entries per grain table, 512" }),
  u64("rgdOffset", { endian: "little", label: "sector of the redundant grain directory" }),
  u64("gdOffset", { endian: "little", label: "sector of the grain directory" }),
  u64("overhead", { endian: "little", label: "sectors before the first grain: header, descriptor and tables" }),
  u8("uncleanShutdown", { endian: "little", label: "1 if the disk was not closed cleanly" }),
  char("singleEndLineChar", { endian: "little", label: "newline, to catch text-mode corruption" }),
  char("nonEndLineChar", { endian: "little", label: "space" }),
  char("doubleEndLineChar1", { endian: "little", label: "carriage return" }),
  char("doubleEndLineChar2", { endian: "little", label: "newline" }),
  u16("compressAlgorithm", { values: { "0": "None", "1": "Deflate" } }),
  bytes("pad", { size: 433 }),
]);

const Elem_u32 = struct("u32Value", [
  u32('value', { endian: "little" }),
]);

export default definePack({
  name: "VMDK",
  endian: "little",
  pointerSize: 4,
  types: [VmdkFirstTable, VmdkFlags, Vmdk, Elem_u32],
  nodes: {
    "entry": structNode(Vmdk, { label: "Vmdk（入口）" }),
    "VmdkFirstTable": structNode(VmdkFirstTable, { label: "VmdkFirstTable" }),
    "flags_VmdkFlags": structNode(VmdkFlags, { label: "位域 VmdkFlags" }),
    "calc_VmdkFirstTable_start": calcNode({
      label: "VmdkFirstTable.start（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "sector": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["sector"] ?? 0) * 512) }),
    }),
    "ptr_VmdkFirstTable_table": calcNode({
      label: "VmdkFirstTable.table（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "start": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["start"] ?? 0) }),
    }),
    "calc_Vmdk_descriptorStart": calcNode({
      label: "Vmdk.descriptorStart（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "descriptorOffset": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["descriptorOffset"] ?? 0) * 512) }),
    }),
    "calc_Vmdk_descriptorBytes": calcNode({
      label: "Vmdk.descriptorBytes（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "descriptorSize": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["descriptorSize"] ?? 0) * 512) }),
    }),
    "ptr_Vmdk_descriptor": calcNode({
      label: "Vmdk.descriptor（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "descriptorStart": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["descriptorStart"] ?? 0) }),
    }),
    "calc_Vmdk_grainsPerTable": calcNode({
      label: "Vmdk.grainsPerTable（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "grainSize": "number", "numGtesPerGt": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["grainSize"] ?? 0) * Number(inputs["numGtesPerGt"] ?? 0)) }),
    }),
    "calc_Vmdk_gdEntries": calcNode({
      label: "Vmdk.gdEntries（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "capacity": "number", "grainsPerTable": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (((Number(inputs["capacity"] ?? 0) + Number(inputs["grainsPerTable"] ?? 0)) - 1) / Number(inputs["grainsPerTable"] ?? 0)) }),
    }),
    "calc_Vmdk_gdStart": calcNode({
      label: "Vmdk.gdStart（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "gdOffset": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["gdOffset"] ?? 0) * 512) }),
    }),
    "ptr_Vmdk_grainDirectory": calcNode({
      label: "Vmdk.grainDirectory（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "gdStart": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["gdStart"] ?? 0) }),
    }),
    "array_Vmdk_grainDirectory": arrayNode(Elem_u32, {
      label: "Vmdk.grainDirectory（动态数组）",
      description: "count 来自 Vmdk.gdEntries；address 指向数组首元素",
    }),
    "ptr_Vmdk_firstGrainTable": calcNode({
      label: "Vmdk.firstGrainTable（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "gdStart": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["gdStart"] ?? 0) }),
    }),
    "ptrtarget_Vmdk_firstGrainTable": structNode(VmdkFirstTable, { label: "指针目标 · Vmdk.firstGrainTable" }),
  },
});

