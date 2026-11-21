/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dex.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；含 1 个动态辅助节点；未移植 5 项（见文件末尾）
const header_item = struct("header_item", [
  bytes("magic", { size: 8 }),
  u32("checksum", {  }),
  bytes("signature", { size: 20 }),
  u32("file_size", {  }),
  u32("header_size", {  }),
  u32("endian_tag", {  }),
  u32("link_size", {  }),
  u32("link_off", {  }),
  u32("map_off", {  }),
  u32("string_ids_size", {  }),
  u32("string_ids_off", {  }),
  u32("type_ids_size", {  }),
  u32("type_ids_off", {  }),
  u32("proto_ids_size", {  }),
  u32("proto_ids_off", {  }),
  u32("field_ids_size", {  }),
  u32("field_ids_off", {  }),
  u32("method_ids_size", {  }),
  u32("method_ids_off", {  }),
  u32("class_defs_size", {  }),
  u32("class_defs_off", {  }),
  u32("data_size", {  }),
  u32("data_off", {  }),
]);

const map_item = struct("map_item", [
  u16("type", {  }),
  u16("unused", {  }),
  u32("size", {  }),
  u32("offset", {  }),
]);

const map_list = struct("map_list", [
  u32("size", {  }),
]);

const type_id_item = struct("type_id_item", [
  u32("descriptor_idx", {  }),
]);

const proto_id_item = struct("proto_id_item", [
  u32("shorty_idx", {  }),
  u32("return_type_idx", {  }),
  u32("parameters_off", {  }),
]);

const field_id_item = struct("field_id_item", [
  u16("class_idx", {  }),
  u16("type_idx", {  }),
  u32("name_idx", {  }),
]);

const method_id_item = struct("method_id_item", [
  u16("class_idx", {  }),
  u16("proto_idx", {  }),
  u32("name_idx", {  }),
]);

const class_site_id_item = struct("class_site_id_item", [
  u32("call_site_off", {  }),
]);

const method_handle_item = struct("method_handle_item", [
  u16("method_handle_type", {  }),
  u16("unused", {  }),
  u16("field_or_method_id", {  }),
  u16("unused2", {  }),
]);

const class_def_item = struct("class_def_item", [
  u32("class_idx", {  }),
  u32("access_flags", {  }),
  u32("superclass_idx", {  }),
  u32("interfaces_off", {  }),
  u32("source_file_idx", {  }),
  u32("annotations_off", {  }),
  u32("class_data_off", {  }),
  u32("static_values_off", {  }),
]);

const type_item = struct("type_item", [
  u16("type_idx", {  }),
]);

const type_list = struct("type_list", [
  u32("size", {  }),
]);

const code_item = struct("code_item", [
  u16("registers_size", {  }),
  u16("ins_size", {  }),
  u16("outs_size", {  }),
  u16("tries_size", {  }),
  u32("debug_info_off", {  }),
  u32("insns_size", {  }),
]);

const try_item = struct("try_item", [
  u32("start_addr", {  }),
  u16("insn_count", {  }),
  u16("handler_off", {  }),
]);

const Dex = struct("Dex", [
  record("header", header_item),
]);

export default definePack({
  name: "Dalvik EXecutable",
  endian: "little",
  pointerSize: 8,
  types: [header_item, map_item, map_list, type_id_item, proto_id_item, field_id_item, method_id_item, class_site_id_item, method_handle_item, class_def_item, type_item, type_list, code_item, try_item, Dex],
  nodes: {
    "entry": structNode(Dex, { label: "Dex（入口）" }),
    "header_item": structNode(header_item, { label: "header_item" }),
    "map_item": structNode(map_item, { label: "map_item" }),
    "map_list": structNode(map_list, { label: "map_list" }),
    "type_id_item": structNode(type_id_item, { label: "type_id_item" }),
    "proto_id_item": structNode(proto_id_item, { label: "proto_id_item" }),
    "field_id_item": structNode(field_id_item, { label: "field_id_item" }),
    "method_id_item": structNode(method_id_item, { label: "method_id_item" }),
    "class_site_id_item": structNode(class_site_id_item, { label: "class_site_id_item" }),
    "method_handle_item": structNode(method_handle_item, { label: "method_handle_item" }),
    "class_def_item": structNode(class_def_item, { label: "class_def_item" }),
    "type_item": structNode(type_item, { label: "type_item" }),
    "type_list": structNode(type_list, { label: "type_list" }),
    "code_item": structNode(code_item, { label: "code_item" }),
    "try_item": structNode(try_item, { label: "try_item" }),
    "read_varint": calcNode({
      label: '读 Varint / LEB128',
      description: '按地址解码 1–9 字节无符号 LEB128；有符号字段请用 sLEB128 变体',
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
  },
});


/*
未移植项：
- varint/LEB128: 已生成 read_varint 辅助节点
- string_data_item.utf16_size: 变长 type_uLEB128 已生成 read_varint 辅助节点，静态布局在此停止
- encoded_field.field_idx_diff: 变长 type_uLEB128 已生成 read_varint 辅助节点，静态布局在此停止
- encoded_method.method_idx_diff: 变长 type_uLEB128 已生成 read_varint 辅助节点，静态布局在此停止
- class_data_item.static_fields_size: 变长 type_uLEB128 已生成 read_varint 辅助节点，静态布局在此停止
*/
