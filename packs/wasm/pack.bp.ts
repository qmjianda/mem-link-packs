/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/wasm
// 原始 pack：wasm · WebAssembly module v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 15 项（见文件末尾）
const Wasm = struct("Wasm", [
  bytes("magic", { size: 4, label: "00 61 73 6d" }),
  u32("version", { endian: "little", label: "binary format version (1)" }),
]);

const WasmSection = struct("WasmSection", [
  u8("id", { endian: "little", label: "0 custom, 1 type, 3 function, 7 导出, 10 code" }),
]);

const WasmFuncType = struct("WasmFuncType", [
  u8("form", { endian: "little", label: "0x60 marks a function type" }),
]);

export default definePack({
  name: "WASM",
  endian: "little",
  pointerSize: 4,
  types: [Wasm, WasmSection, WasmFuncType],
  nodes: {
    "entry": structNode(Wasm, { label: "Wasm（入口）" }),
    "WasmSection": structNode(WasmSection, { label: "WasmSection" }),
    "WasmFuncType": structNode(WasmFuncType, { label: "WasmFuncType" }),
  },
});


/*
未移植项：
- Wasm.sections: repeat 字段未移植，后续布局在此停止
- WasmSection.size: varint 变长字段未移植，后续布局在此停止
- WasmTypeSection.count: varint 变长字段未移植，后续布局在此停止
- WasmTypeSection: 没有可移植的固定前缀字段
- WasmFuncType.nparams: varint 变长字段未移植，后续布局在此停止
- WasmFunctionSection.count: varint 变长字段未移植，后续布局在此停止
- WasmFunctionSection: 没有可移植的固定前缀字段
- WasmExportSection.count: varint 变长字段未移植，后续布局在此停止
- WasmExportSection: 没有可移植的固定前缀字段
- WasmExport.nameLen: varint 变长字段未移植，后续布局在此停止
- WasmExport: 没有可移植的固定前缀字段
- WasmCodeSection.count: varint 变长字段未移植，后续布局在此停止
- WasmCodeSection: 没有可移植的固定前缀字段
- WasmFuncBody.bodySize: varint 变长字段未移植，后续布局在此停止
- WasmFuncBody: 没有可移植的固定前缀字段
*/
