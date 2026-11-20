/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/dtb
// 原始 pack：dtb · Device tree blob v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 12 项（见文件末尾）
const FdtReserveEntry = struct("FdtReserveEntry", [
  u64("address", { endian: "little", label: "physical start address" }),
  u64("size", { endian: "little", label: "size in bytes (0 with address 0 terminates the map)" }),
]);

const FdtNameChunk = struct("FdtNameChunk", [
  str("text", { size: 4, label: "up to four name characters" }),
]);

const FdtProp = struct("FdtProp", [
  u32("len", { endian: "little", label: "property value length in bytes" }),
  u32("nameOff", { endian: "little", label: "offset of the property name in the strings block" }),
]);

const FdtStructToken = struct("FdtStructToken", [
  u32("token", { values: { "1": "BeginNode", "2": "EndNode", "3": "Prop", "4": "Nop", "9": "End" }, label: "structure block token" }),
]);

const Fdt = struct("Fdt", [
  u32("magic", { endian: "little", label: "0xD00DFEED" }),
  u32("totalSize", { endian: "little", label: "total size of the blob in bytes" }),
  u32("offDtStruct", { endian: "little", label: "offset of the structure block" }),
  u32("offDtStrings", { endian: "little", label: "offset of the strings block" }),
  u32("offMemRsvmap", { endian: "little", label: "offset of the memory reservation map" }),
  u32("version", { endian: "little", label: "format version (17)" }),
  u32("lastCompVersion", { endian: "little", label: "lowest compatible version (16)" }),
  u32("bootCpuidPhys", { endian: "little", label: "physical id of the boot CPU" }),
  u32("sizeDtStrings", { endian: "little", label: "size of the strings block" }),
  u32("sizeDtStruct", { endian: "little", label: "size of the structure block" }),
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
  },
});


/*
未移植项：
- FdtNameChunk.lastByte: 指针字段（at +…）未移植
- FdtBeginNode.name: 指针字段（at +…）未移植
- FdtBeginNode.chunks: repeat 字段未移植，后续布局在此停止
- FdtBeginNode: 没有可移植的固定前缀字段
- FdtProp.value: 变长字节块未移植
- FdtStructToken.body: match 联合类型未移植，后续布局在此停止
- FdtString.name: cstring 变长字段未移植，后续布局在此停止
- FdtString: 没有可移植的固定前缀字段
- Fdt.reserveMap: 指针字段（at …）未移植
- Fdt.structure: 指针字段（at …）未移植
- Fdt.strings: 指针字段（at …）未移植
- Fdt.stringList: 指针字段（at …）未移植
*/
