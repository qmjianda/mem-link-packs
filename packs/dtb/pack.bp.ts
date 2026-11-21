/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/dtb
// 原始 pack：dtb · Device tree blob v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 9 个动态辅助节点；未移植 5 项（见文件末尾）
const FdtReserveEntry = struct("FdtReserveEntry", [
  u64("address", { endian: "big", label: "physical start address" }),
  u64("size", { endian: "big", label: "size in bytes (0 with address 0 terminates the map)" }),
]);

const FdtNameChunk = struct("FdtNameChunk", [
  str("text", { size: 4, label: "up to four name characters" }),
]);

const FdtProp = struct("FdtProp", [
  u32("len", { endian: "big", label: "property value length in bytes" }),
  u32("nameOff", { endian: "big", label: "offset of the property name in the strings block" }),
]);

const FdtStructToken = struct("FdtStructToken", [
  u32("token", { values: { "1": "BeginNode", "2": "EndNode", "3": "Prop", "4": "Nop", "9": "End" }, label: "structure block token" }),
]);

const Fdt = struct("Fdt", [
  u32("magic", { endian: "big", label: "0xD00DFEED" }),
  u32("totalSize", { endian: "big", label: "total size of the blob in bytes" }),
  u32("offDtStruct", { endian: "big", label: "offset of the structure block" }),
  u32("offDtStrings", { endian: "big", label: "offset of the strings block" }),
  u32("offMemRsvmap", { endian: "big", label: "offset of the memory reservation map" }),
  u32("version", { endian: "big", label: "format version (17)" }),
  u32("lastCompVersion", { endian: "big", label: "lowest compatible version (16)" }),
  u32("bootCpuidPhys", { endian: "big", label: "physical id of the boot CPU" }),
  u32("sizeDtStrings", { endian: "big", label: "size of the strings block" }),
  u32("sizeDtStruct", { endian: "big", label: "size of the structure block" }),
]);

export default definePack({
  name: "DTB",
  endian: "big",
  pointerSize: 4,
  types: [FdtReserveEntry, FdtNameChunk, FdtProp, FdtStructToken, Fdt],
  nodes: {
    "entry": structNode(Fdt, { label: "Fdt（入口）" }),
    "FdtReserveEntry": structNode(FdtReserveEntry, { label: "FdtReserveEntry" }),
    "FdtNameChunk": structNode(FdtNameChunk, { label: "FdtNameChunk" }),
    "FdtProp": structNode(FdtProp, { label: "FdtProp" }),
    "FdtStructToken": structNode(FdtStructToken, { label: "FdtStructToken" }),
    "ptr_FdtNameChunk_lastByte": calcNode({
      label: "FdtNameChunk.lastByte（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 3 }),
    }),
    "calc_FdtProp_padLen": calcNode({
      label: "FdtProp.padLen（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "len": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: ((4 - (Number(inputs["len"] ?? 0) % 4)) % 4) }),
    }),
    "match_FdtStructToken_body_3": structNode(FdtProp, { label: "FdtStructToken.body · match 3" }),
    "ptr_Fdt_reserveMap": calcNode({
      label: "Fdt.reserveMap（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "offMemRsvmap": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["offMemRsvmap"] ?? 0) }),
    }),
    "list_Fdt_reserveMap": listNode(FdtReserveEntry, {
      label: "Fdt.reserveMap（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => { if ((e.value["size"] == 0)) return null; return e.addr + FdtReserveEntry.size; },
      max: 4096,
    }),
    "ptr_Fdt_structure": calcNode({
      label: "Fdt.structure（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "offDtStruct": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["offDtStruct"] ?? 0) }),
    }),
    "list_Fdt_structure": listNode(FdtStructToken, {
      label: "Fdt.structure（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => { if ((e.value["token"] == 9)) return null; return e.addr + FdtStructToken.size; },
      max: 4096,
    }),
    "ptr_Fdt_strings": calcNode({
      label: "Fdt.strings（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "offDtStrings": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["offDtStrings"] ?? 0) }),
    }),
    "ptr_Fdt_stringList": calcNode({
      label: "Fdt.stringList（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "offDtStrings": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["offDtStrings"] ?? 0) }),
    }),
  },
});


/*
未移植项：
- FdtBeginNode: 没有可移植的固定前缀字段
- FdtProp.value: 变长字节块未移植
- FdtString.name: cstring 变长字段未移植，后续布局在此停止
- FdtString: 没有可移植的固定前缀字段
- Fdt.stringList: 元素类型 FdtString 不可移植
*/
