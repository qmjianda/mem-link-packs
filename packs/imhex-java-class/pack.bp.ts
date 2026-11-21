/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/java_class.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const access_flags_method = struct("access_flags_method", [
  bits("ACC_PUBLIC", 1, { at: 0, bit: 0, unit: 2, label: "ACC_PUBLIC" }),
  bits("ACC_PRIVATE", 1, { at: 0, bit: 1, unit: 2, label: "ACC_PRIVATE" }),
  bits("ACC_PROTECTED", 1, { at: 0, bit: 2, unit: 2, label: "ACC_PROTECTED" }),
  bits("ACC_STATIC", 1, { at: 0, bit: 3, unit: 2, label: "ACC_STATIC" }),
  bits("ACC_FINAL", 1, { at: 0, bit: 4, unit: 2, label: "ACC_FINAL" }),
  bits("ACC_SYNCHRONIZED", 1, { at: 0, bit: 5, unit: 2, label: "ACC_SYNCHRONIZED" }),
  bits("ACC_BRIDGE", 1, { at: 0, bit: 6, unit: 2, label: "ACC_BRIDGE" }),
  bits("ACC_VARARGS", 1, { at: 0, bit: 7, unit: 2, label: "ACC_VARARGS" }),
  bits("ACC_NATIVE", 1, { at: 0, bit: 8, unit: 2, label: "ACC_NATIVE" }),
  bits("ACC_ABSTRACT", 1, { at: 0, bit: 10, unit: 2, label: "ACC_ABSTRACT" }),
  bits("ACC_STRICT", 1, { at: 0, bit: 11, unit: 2, label: "ACC_STRICT" }),
  bits("ACC_SYNTHETIC", 1, { at: 0, bit: 12, unit: 2, label: "ACC_SYNTHETIC" }),
]);

const access_flags_field = struct("access_flags_field", [
  bits("ACC_PUBLIC", 1, { at: 0, bit: 0, unit: 2, label: "ACC_PUBLIC" }),
  bits("ACC_PRIVATE", 1, { at: 0, bit: 1, unit: 2, label: "ACC_PRIVATE" }),
  bits("ACC_PROTECTED", 1, { at: 0, bit: 2, unit: 2, label: "ACC_PROTECTED" }),
  bits("ACC_STATIC", 1, { at: 0, bit: 3, unit: 2, label: "ACC_STATIC" }),
  bits("ACC_FINAL", 1, { at: 0, bit: 4, unit: 2, label: "ACC_FINAL" }),
  bits("ACC_VOLATILE", 1, { at: 0, bit: 6, unit: 2, label: "ACC_VOLATILE" }),
  bits("ACC_TRANSIENT", 1, { at: 0, bit: 7, unit: 2, label: "ACC_TRANSIENT" }),
  bits("ACC_SYNTHETIC", 1, { at: 0, bit: 12, unit: 2, label: "ACC_SYNTHETIC" }),
  bits("ACC_ENUM", 1, { at: 0, bit: 14, unit: 2, label: "ACC_ENUM" }),
]);

const access_flags_class = struct("access_flags_class", [
  bits("ACC_PUBLIC", 1, { at: 0, bit: 0, unit: 2, label: "ACC_PUBLIC" }),
  bits("ACC_FINAL", 1, { at: 0, bit: 4, unit: 2, label: "ACC_FINAL" }),
  bits("ACC_SUPER", 1, { at: 0, bit: 5, unit: 2, label: "ACC_SUPER" }),
  bits("ACC_INTERFACE", 1, { at: 0, bit: 9, unit: 2, label: "ACC_INTERFACE" }),
  bits("ACC_ABSTRACT", 1, { at: 0, bit: 10, unit: 2, label: "ACC_ABSTRACT" }),
  bits("ACC_SYNTHETIC", 1, { at: 0, bit: 12, unit: 2, label: "ACC_SYNTHETIC" }),
  bits("ACC_ANNOTATION", 1, { at: 0, bit: 13, unit: 2, label: "ACC_ANNOTATION" }),
  bits("ACC_ENUM", 1, { at: 0, bit: 14, unit: 2, label: "ACC_ENUM" }),
  bits("ACC_MODULE", 1, { at: 0, bit: 15, unit: 2, label: "ACC_MODULE" }),
]);

const access_flags_module = struct("access_flags_module", [
  bits("ACC_TRANSITIVE", 1, { at: 0, bit: 5, unit: 2, label: "ACC_TRANSITIVE" }),
  bits("ACC_STATIC_PHASE", 1, { at: 0, bit: 6, unit: 2, label: "ACC_STATIC_PHASE" }),
  bits("ACC_SYNTHETIC", 1, { at: 0, bit: 12, unit: 2, label: "ACC_SYNTHETIC" }),
  bits("ACC_MANDATED", 1, { at: 0, bit: 15, unit: 2, label: "ACC_MANDATED" }),
]);

const attribute_constant_value = struct("attribute_constant_value", [
  u16("constantvalue_index", {  }),
]);

const verification_type_info = struct("verification_type_info", [
  u8("tag", {  }),
]);

const same_locals_1_stack_item_frame = struct("same_locals_1_stack_item_frame", [
  array("stack", verification_type_info, 1),
]);

const same_locals_1_stack_item_frame_extended = struct("same_locals_1_stack_item_frame_extended", [
  u16("offset_delta", {  }),
  array("stack", verification_type_info, 1),
]);

const chop_frame = struct("chop_frame", [
  u16("offset_delta", {  }),
]);

const same_frame_extended = struct("same_frame_extended", [
  u16("offset_delta", {  }),
]);

const full_frame = struct("full_frame", [
  u16("offset_delta", {  }),
  u16("number_of_locals", {  }),
]);

const stack_map_frame = struct("stack_map_frame", [
  u8("frame_type", {  }),
]);

const attribute_stack_map_table = struct("attribute_stack_map_table", [
  u16("number_of_entries", {  }),
]);

const attribute_exception = struct("attribute_exception", [
  u16("number_of_exceptions", {  }),
]);

const inner_class = struct("inner_class", [
  u16("inner_class_info_index", {  }),
  u16("potential_outer_class_info_index", {  }),
]);

const attribute_inner_classes = struct("attribute_inner_classes", [
  u16("number_of_classes", {  }),
]);

const attribute_enclosing_method = struct("attribute_enclosing_method", [
  u16("class_index", {  }),
  u16("method_index", {  }),
]);

const attribute_signature = struct("attribute_signature", [
  u16("signature_index", {  }),
]);

const attribute_source_file = struct("attribute_source_file", [
  u16("sourcefile_index", {  }),
]);

const line_number_table_entry = struct("line_number_table_entry", [
  u16("start_pc", {  }),
  u16("line_number", {  }),
]);

const attribute_line_number_table = struct("attribute_line_number_table", [
  u16("line_number_table_length", {  }),
]);

const local_variable_table_entry = struct("local_variable_table_entry", [
  u16("start_pc", {  }),
  u16("length", {  }),
  u16("name_index", {  }),
  u16("descriptor_index", {  }),
  u16("index", {  }),
]);

const attribute_local_variable_table = struct("attribute_local_variable_table", [
  u16("local_variable_table_length", {  }),
]);

const local_variable_type_table_entry = struct("local_variable_type_table_entry", [
  u16("start_pc", {  }),
  u16("length", {  }),
  u16("name_index", {  }),
  u16("signature_index", {  }),
  u16("index", {  }),
]);

const attribute_local_variable_type_table = struct("attribute_local_variable_type_table", [
  u16("local_variable_type_table_length", {  }),
]);

const element_value = struct("element_value", [
  char("tag", {  }),
]);

const element_value_pair = struct("element_value_pair", [
  u16("element_name_index", {  }),
  record("value", element_value),
]);

const annotation = struct("annotation", [
  u16("type_index", {  }),
  u16("num_element_value_pairs", {  }),
]);

const annotation_base = struct("annotation_base", [
  u16("num_annotations", {  }),
]);

const attribute_runtime_visible_parameter_annotations = struct("attribute_runtime_visible_parameter_annotations", [
  u8("num_parameters", {  }),
]);

const attribute_runtime_invisible_parameter_annotations = struct("attribute_runtime_invisible_parameter_annotations", [
  u8("num_parameters", {  }),
]);

const path_element = struct("path_element", [
  u8("type_path_kind", {  }),
  u8("type_argument_index", {  }),
]);

const type_path = struct("type_path", [
  u8("path_length", {  }),
]);

const localvar_target_entry = struct("localvar_target_entry", [
  u16("start_pc", {  }),
  u16("length", {  }),
  u16("index", {  }),
]);

const type_annotation = struct("type_annotation", [
  u8("target_type", {  }),
]);

const attribute_runtime_visible_type_annotations = struct("attribute_runtime_visible_type_annotations", [
  u16("num_annotations", {  }),
]);

const attribute_runtime_invisible_type_annotations = struct("attribute_runtime_invisible_type_annotations", [
  u16("num_annotations", {  }),
]);

const attribute_annotation_default = struct("attribute_annotation_default", [
  record("default_value", element_value),
]);

const bootstrap_method = struct("bootstrap_method", [
  u16("bootstrap_method_ref", {  }),
  u16("num_bootstrap_arguments", {  }),
]);

const attribute_bootstrap_methods = struct("attribute_bootstrap_methods", [
  u16("num_bootstrap_methods", {  }),
]);

const method_parameter = struct("method_parameter", [
  u16("potential_name_index", {  }),
]);

const attribute_method_parameters = struct("attribute_method_parameters", [
  u8("parameters_count", {  }),
]);

const require = struct("require", [
  u16("require_index", {  }),
  record("require_flags", access_flags_module),
  u16("potential_require_version_index", {  }),
]);

const T_export = struct("导出", [
  u16("exports_index", {  }),
  record("exports_flags", access_flags_module),
  u16("exports_to_count", {  }),
]);

const open = struct("open", [
  u16("opens_index", {  }),
  record("opens_flags", access_flags_module),
  u16("opens_to_count", {  }),
]);

const provide = struct("provide", [
  u16("provides_index", {  }),
  u16("provides_with_count", {  }),
]);

const attribute_module = struct("attribute_module", [
  u16("module_name_index", {  }),
  u16("module_flags", {  }),
  u16("potential_module_version_index", {  }),
]);

const attribute_module_packages = struct("attribute_module_packages", [
  u16("package_count", {  }),
]);

const attribute_module_main_class = struct("attribute_module_main_class", [
  u16("main_class_index", {  }),
]);

const attribute_nest_host = struct("attribute_nest_host", [
  u16("host_class_index", {  }),
]);

const attribute_nest_members = struct("attribute_nest_members", [
  u16("number_of_classes", {  }),
]);

const attribute_record = struct("attribute_record", [
  u16("component_count", {  }),
]);

const attribute_permitted_subclasses = struct("attribute_permitted_subclasses", [
  u16("number_of_classes", {  }),
]);

const record_component_info = struct("record_component_info", [
  u16("name_index", {  }),
  u16("descriptor_index", {  }),
  u16("attributes_count", {  }),
]);

const exception = struct("exception", [
  u16("start_pc", {  }),
  u16("end_pc", {  }),
  u16("handler_pc", {  }),
  u16("catch_type", {  }),
]);

const match_offset = struct("match_offset", [
  u32("match_case", {  }),
  u32("offset", {  }),
]);

const instruction = struct("instruction", [
  u8("mnemonic", {  }),
]);

const attribute_code = struct("attribute_code", [
  u16("max_stack", {  }),
  u16("max_locals", {  }),
  u32("code_length", {  }),
]);

const field_info = struct("field_info", [
  record("access_flags", access_flags_field),
  u16("name_index", {  }),
  u16("descriptor_index", {  }),
  u16("attribute_count", {  }),
]);

const method_info = struct("method_info", [
  record("access_flags", access_flags_method),
  u16("name_index", {  }),
  u16("descriptor_index", {  }),
  u16("attribute_count", {  }),
]);

const ClassFile = struct("ClassFile", [
  bytes("magic", { size: 4 }),
  u16("minor_version", {  }),
  u16("major_version", { values: { "45": "JDK_1_1", "46": "JDK_1_2", "47": "JDK_1_3", "48": "JDK_1_4", "49": "Java_SE_5_0", "50": "Java_SE_6", "51": "Java_SE_7", "52": "Java_SE_8", "53": "Java_SE_9", "54": "Java_SE_10", "55": "Java_SE_11", "56": "Java_SE_12", "57": "Java_SE_13", "58": "Java_SE_14", "59": "Java_SE_15", "60": "Java_SE_16", "61": "Java_SE_17", "62": "Java_SE_18", "63": "Java_SE_19", "64": "Java_SE_20", "65": "Java_SE_21", "66": "Java_SE_22", "67": "Java_SE_23", "68": "Java_SE_24", "69": "Java_SE_25", "70": "Java_SE_26" } }),
  u16("constant_pool_count", {  }),
]);

export default definePack({
  name: "Java Class",
  endian: "big",
  pointerSize: 8,
  types: [access_flags_method, access_flags_field, access_flags_class, access_flags_module, attribute_constant_value, verification_type_info, same_locals_1_stack_item_frame, same_locals_1_stack_item_frame_extended, chop_frame, same_frame_extended, full_frame, stack_map_frame, attribute_stack_map_table, attribute_exception, inner_class, attribute_inner_classes, attribute_enclosing_method, attribute_signature, attribute_source_file, line_number_table_entry, attribute_line_number_table, local_variable_table_entry, attribute_local_variable_table, local_variable_type_table_entry, attribute_local_variable_type_table, element_value, element_value_pair, annotation, annotation_base, attribute_runtime_visible_parameter_annotations, attribute_runtime_invisible_parameter_annotations, path_element, type_path, localvar_target_entry, type_annotation, attribute_runtime_visible_type_annotations, attribute_runtime_invisible_type_annotations, attribute_annotation_default, bootstrap_method, attribute_bootstrap_methods, method_parameter, attribute_method_parameters, require, T_export, open, provide, attribute_module, attribute_module_packages, attribute_module_main_class, attribute_nest_host, attribute_nest_members, attribute_record, attribute_permitted_subclasses, record_component_info, exception, match_offset, instruction, attribute_code, field_info, method_info, ClassFile],
  nodes: {
    "entry": structNode(ClassFile, { label: "ClassFile（入口）" }),
    "access_flags_method": structNode(access_flags_method, { label: "access_flags_method" }),
    "access_flags_field": structNode(access_flags_field, { label: "access_flags_field" }),
    "access_flags_class": structNode(access_flags_class, { label: "access_flags_class" }),
    "access_flags_module": structNode(access_flags_module, { label: "access_flags_module" }),
    "attribute_constant_value": structNode(attribute_constant_value, { label: "attribute_constant_value" }),
    "verification_type_info": structNode(verification_type_info, { label: "verification_type_info" }),
    "same_locals_1_stack_item_frame": structNode(same_locals_1_stack_item_frame, { label: "same_locals_1_stack_item_frame" }),
    "same_locals_1_stack_item_frame_extended": structNode(same_locals_1_stack_item_frame_extended, { label: "same_locals_1_stack_item_frame_extended" }),
    "chop_frame": structNode(chop_frame, { label: "chop_frame" }),
    "same_frame_extended": structNode(same_frame_extended, { label: "same_frame_extended" }),
    "full_frame": structNode(full_frame, { label: "full_frame" }),
    "stack_map_frame": structNode(stack_map_frame, { label: "stack_map_frame" }),
    "attribute_stack_map_table": structNode(attribute_stack_map_table, { label: "attribute_stack_map_table" }),
    "attribute_exception": structNode(attribute_exception, { label: "attribute_exception" }),
    "inner_class": structNode(inner_class, { label: "inner_class" }),
    "attribute_inner_classes": structNode(attribute_inner_classes, { label: "attribute_inner_classes" }),
    "attribute_enclosing_method": structNode(attribute_enclosing_method, { label: "attribute_enclosing_method" }),
    "attribute_signature": structNode(attribute_signature, { label: "attribute_signature" }),
    "attribute_source_file": structNode(attribute_source_file, { label: "attribute_source_file" }),
    "line_number_table_entry": structNode(line_number_table_entry, { label: "line_number_table_entry" }),
    "attribute_line_number_table": structNode(attribute_line_number_table, { label: "attribute_line_number_table" }),
    "local_variable_table_entry": structNode(local_variable_table_entry, { label: "local_variable_table_entry" }),
    "attribute_local_variable_table": structNode(attribute_local_variable_table, { label: "attribute_local_variable_table" }),
    "local_variable_type_table_entry": structNode(local_variable_type_table_entry, { label: "local_variable_type_table_entry" }),
    "attribute_local_variable_type_table": structNode(attribute_local_variable_type_table, { label: "attribute_local_variable_type_table" }),
    "element_value": structNode(element_value, { label: "element_value" }),
    "element_value_pair": structNode(element_value_pair, { label: "element_value_pair" }),
    "annotation": structNode(annotation, { label: "annotation" }),
    "annotation_base": structNode(annotation_base, { label: "annotation_base" }),
    "attribute_runtime_visible_parameter_annotations": structNode(attribute_runtime_visible_parameter_annotations, { label: "attribute_runtime_visible_parameter_annotations" }),
    "attribute_runtime_invisible_parameter_annotations": structNode(attribute_runtime_invisible_parameter_annotations, { label: "attribute_runtime_invisible_parameter_annotations" }),
    "path_element": structNode(path_element, { label: "path_element" }),
    "type_path": structNode(type_path, { label: "type_path" }),
    "localvar_target_entry": structNode(localvar_target_entry, { label: "localvar_target_entry" }),
    "type_annotation": structNode(type_annotation, { label: "type_annotation" }),
    "attribute_runtime_visible_type_annotations": structNode(attribute_runtime_visible_type_annotations, { label: "attribute_runtime_visible_type_annotations" }),
    "attribute_runtime_invisible_type_annotations": structNode(attribute_runtime_invisible_type_annotations, { label: "attribute_runtime_invisible_type_annotations" }),
    "attribute_annotation_default": structNode(attribute_annotation_default, { label: "attribute_annotation_default" }),
    "bootstrap_method": structNode(bootstrap_method, { label: "bootstrap_method" }),
    "attribute_bootstrap_methods": structNode(attribute_bootstrap_methods, { label: "attribute_bootstrap_methods" }),
    "method_parameter": structNode(method_parameter, { label: "method_parameter" }),
    "attribute_method_parameters": structNode(attribute_method_parameters, { label: "attribute_method_parameters" }),
    "require": structNode(require, { label: "require" }),
    "T_export": structNode(T_export, { label: "导出" }),
    "open": structNode(open, { label: "open" }),
    "provide": structNode(provide, { label: "provide" }),
    "attribute_module": structNode(attribute_module, { label: "attribute_module" }),
    "attribute_module_packages": structNode(attribute_module_packages, { label: "attribute_module_packages" }),
    "attribute_module_main_class": structNode(attribute_module_main_class, { label: "attribute_module_main_class" }),
    "attribute_nest_host": structNode(attribute_nest_host, { label: "attribute_nest_host" }),
    "attribute_nest_members": structNode(attribute_nest_members, { label: "attribute_nest_members" }),
    "attribute_record": structNode(attribute_record, { label: "attribute_record" }),
    "attribute_permitted_subclasses": structNode(attribute_permitted_subclasses, { label: "attribute_permitted_subclasses" }),
    "record_component_info": structNode(record_component_info, { label: "record_component_info" }),
    "exception": structNode(exception, { label: "exception" }),
    "match_offset": structNode(match_offset, { label: "match_offset" }),
    "instruction": structNode(instruction, { label: "instruction" }),
    "attribute_code": structNode(attribute_code, { label: "attribute_code" }),
    "field_info": structNode(field_info, { label: "field_info" }),
    "method_info": structNode(method_info, { label: "method_info" }),
  },
});

