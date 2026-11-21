/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/wasm
// 原始 pack：wasm · WebAssembly module v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 4 个动态辅助节点；未移植 6 项（见文件末尾）
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

const Elem_u8 = struct("u8Value", [
  u8('value', { endian: "little" }),
]);

export default definePack({
  name: "WASM",
  endian: "little",
  pointerSize: 4,
  types: [Wasm, WasmSection, WasmFuncType, Elem_u8],
  nodes: {
    "entry": structNode(Wasm, { label: "Wasm（入口）" }),
    "WasmSection": structNode(WasmSection, { label: "WasmSection" }),
    "WasmFuncType": structNode(WasmFuncType, { label: "WasmFuncType" }),
    "read_varint": calcNode({
      label: '读 Varint',
      description: '按地址解码 1–9 字节 varint（LEB128）',
      inputs: { address: 'number' },
      outputs: { value: 'number', bytes: 'number' },
      run: ({ address }, ctx) => {
        let value = 0;
        for (let i = 0; i < 9; i += 1) {
          const b = ctx.mem.u8(Number(address) + i);
          if (i === 8) return { value: value * 256 + b, bytes: 9 };
          value = value * 128 + (b & 0x7f);
          if ((b & 0x80) === 0) return { value, bytes: i + 1 };
        }
        return { value, bytes: 9 };
      },
    }),
    "list_Wasm_sections": listNode(WasmSection, {
      label: "Wasm.sections（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => {  return e.addr + WasmSection.size; },
      max: 4096,
    }),
    "array_WasmFuncType_params": arrayNode(Elem_u8, {
      label: "WasmFuncType.params（动态数组）",
      description: "count 来自 WasmFuncType.nparams；address 指向数组首元素",
    }),
    "array_WasmFuncType_results": arrayNode(Elem_u8, {
      label: "WasmFuncType.results（动态数组）",
      description: "count 来自 WasmFuncType.nresults；address 指向数组首元素",
    }),
  },
});


/*
未移植项：
- WasmTypeSection: 没有可移植的固定前缀字段
- WasmFunctionSection: 没有可移植的固定前缀字段
- WasmExportSection: 没有可移植的固定前缀字段
- WasmCodeSection: 没有可移植的固定前缀字段
- WasmExport: 没有可移植的固定前缀字段
- WasmFuncBody: 没有可移植的固定前缀字段
*/
