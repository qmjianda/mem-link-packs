/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/selinux.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const CONFIG = struct("CONFIG", [
  bits("DENY_UNKNOWN", 1, { at: 0, bit: 0, unit: 1, label: "DENY_UNKNOWN" }),
  bits("MLS", 1, { at: 0, bit: 1, unit: 1, label: "MLS" }),
  bits("REJECT_UNKNOWN", 1, { at: 0, bit: 2, unit: 1, label: "REJECT_UNKNOWN" }),
  bits("ALLOW_UNKNOWN", 1, { at: 0, bit: 3, unit: 1, label: "ALLOW_UNKNOWN" }),
]);

const permission = struct("permission", [
  u32("length", {  }),
  u32("value", {  }),
]);

const extensible_bitmap_node = struct("extensible_bitmap_node", [
  u32("startbit", {  }),
  u64("map", {  }),
]);

const extensible_bitmap = struct("extensible_bitmap", [
  u32("mapsize", {  }),
]);

const type_set = struct("type_set", [
  record("types", extensible_bitmap),
  record("negset", extensible_bitmap),
  u32("flag", {  }),
]);

const expression = struct("expression", [
  u32("type_", { values: { "1": "not", "2": "and", "3": "or", "4": "attr", "5": "names" } }),
  u32("attribute", {  }),
  u32("operator", {  }),
]);

const constraint = struct("constraint", [
  u32("permissions", {  }),
]);

const mls_range = struct("mls_range", [
  u32("items", {  }),
  u32("sensitivity0", {  }),
]);

const role_set = struct("role_set", [
  record("roles", extensible_bitmap),
  u32("flags", {  }),
]);

const mls_level = struct("mls_level", [
  u32("sensitivity", {  }),
  record("category", extensible_bitmap),
]);

const semantic_category = struct("semantic_category", [
  u32("low", {  }),
  u32("high", {  }),
]);

const mls_semantic_level = struct("mls_semantic_level", [
  u32("sensitivity", {  }),
]);

const mls_semantic_range = struct("mls_semantic_range", [
  record("level0", mls_semantic_level),
  record("level1", mls_semantic_level),
]);

const context_s = struct("context_s", [
  u32("user", {  }),
  u32("role", {  }),
  u32("type_", {  }),
]);

const common = struct("common", [
  u32("length", {  }),
  u32("value", {  }),
  u32("primary_names_count", {  }),
  u32("elements_count", {  }),
]);

const T_class = struct("class", [
  u32("key_length", {  }),
  u32("common_key_length", {  }),
  u32("value", {  }),
  u32("primary_names_count", {  }),
  u32("elements_count", {  }),
  u32("constraints_count", {  }),
]);

const role_s = struct("role_s", [
  u32("length", {  }),
  u32("value", {  }),
  u32("bounds", {  }),
]);

const type_s = struct("type_s", [
  u32("length", {  }),
  u32("value", {  }),
]);

const types_s = struct("types_s", [
  u32("primary_names_count", {  }),
]);

const user_s = struct("user_s", [
  u32("length", {  }),
  u32("value", {  }),
]);

const bool_ = struct("bool_", [
  u32("value", {  }),
  u32("state", {  }),
  u32("length", {  }),
]);

const level = struct("level", [
  u32("length", {  }),
  u32("isalias", {  }),
]);

const category = struct("category", [
  u32("length", {  }),
  u32("value", {  }),
  u32("isalias", {  }),
]);

const module_header = struct("module_header", [
  u32("name_length", {  }),
]);

const access_vector_old = struct("access_vector_old", [
  u32("total", {  }),
  u32("source_type", {  }),
  u32("target_type", {  }),
  u32("target_class", {  }),
  u32("value", {  }),
  array("data", "u32", 8),
]);

const access_vector = struct("access_vector", [
  u16("source_type", {  }),
  u16("target_type", {  }),
  u16("target_class", {  }),
  u16("specified", {  }),
]);

const avrule_item = struct("avrule_item", [
  u32("tclass", {  }),
  u32("data", {  }),
]);

const avrule = struct("avrule", [
  u32("specified", {  }),
  u32("flags", {  }),
  record("stypes", type_set),
  record("ttypes", type_set),
  u32("length", {  }),
]);

const avrule_list = struct("avrule_list", [
  u32("length", {  }),
]);

const conditional_node_item = struct("conditional_node_item", [
  u32("expr_type", {  }),
  u32("boolean", {  }),
]);

const conditional_node = struct("conditional_node", [
  u32("current_state", {  }),
  u32("length", {  }),
]);

const conditional_list = struct("conditional_list", [
  u32("length", {  }),
]);

const role_trans_item = struct("role_trans_item", [
  u32("role", {  }),
  u32("type_", {  }),
  u32("new_role", {  }),
]);

const role_allow_item = struct("role_allow_item", [
  u32("role", {  }),
  u32("new_role", {  }),
]);

const filename_trans_item_old = struct("filename_trans_item_old", [
  u32("length", {  }),
]);

const filename_trans_item_item = struct("filename_trans_item_item", [
  record("stypes", extensible_bitmap),
  u32("otype", {  }),
]);

const filename_trans_item = struct("filename_trans_item", [
  u32("length", {  }),
]);

const role_trans_rule_item = struct("role_trans_rule_item", [
  record("roles", role_set),
  record("types", role_set),
]);

const role_allow_rule_item = struct("role_allow_rule_item", [
  record("roles", role_set),
  record("new_roles", role_set),
]);

const scope_s = struct("scope_s", [
  u32("length", {  }),
]);

const filename_trans_rule_item = struct("filename_trans_rule_item", [
  u32("length", {  }),
]);

const range_trans_rule_item = struct("range_trans_rule_item", [
  record("stypes", type_set),
  record("ttypes", type_set),
  record("tclasses", extensible_bitmap),
  record("trange", mls_semantic_range),
]);

const avrule_decl = struct("avrule_decl", [
  u32("decl_id", {  }),
  u32("enabled", {  }),
  record("cond_list", conditional_list),
  record("avrules", avrule_list),
]);

const avrule_block_item = struct("avrule_block_item", [
  u32("num_decls", {  }),
]);

const initial_sid = struct("initial_sid", [
  u32("sid0", {  }),
  record("context0", context_s),
]);

const filesystem = struct("filesystem", [
  u32("length", {  }),
]);

const port = struct("port", [
  u32("protocol", {  }),
  u32("low_port", {  }),
  u32("high_port", {  }),
  record("context", context_s),
]);

const node = struct("node", [
  u32("addr", {  }),
  u32("mask", {  }),
  record("context", context_s),
]);

const fsuse = struct("fsuse", [
  u32("behavior", {  }),
  u32("length", {  }),
]);

const node6 = struct("node6", [
  array("addr", "u32", 4),
  array("mask", "u32", 4),
  record("context", context_s),
]);

const ibpkey = struct("ibpkey", [
  u32("low_pkey", {  }),
  u32("high_pkey", {  }),
  record("context", context_s),
]);

const ibpendport = struct("ibpendport", [
  u32("length", {  }),
  u32("port", {  }),
]);

const xen_isid = struct("xen_isid", [
  u32("sid0", {  }),
  record("context0", context_s),
]);

const xen_pirq = struct("xen_pirq", [
  u32("pirq", {  }),
  record("context0", context_s),
]);

const xen_ioport = struct("xen_ioport", [
  u32("low_port", {  }),
  u32("high_port", {  }),
  record("context0", context_s),
]);

const xen_pcidevice = struct("xen_pcidevice", [
  u32("device", {  }),
  record("context", context_s),
]);

const xen_devicetree = struct("xen_devicetree", [
  u32("length", {  }),
]);

const genfs2_item = struct("genfs2_item", [
  u32("length", {  }),
]);

const genfs_item = struct("genfs_item", [
  u32("length", {  }),
]);

const range_item = struct("range_item", [
  u32("source_type", {  }),
  u32("target_type", {  }),
]);

const Header = struct("Header", [
  u32("magic", { values: { "4185718668": "kernel", "4185718669": "module" } }),
]);

export default definePack({
  name: "SE Linux module",
  endian: "little",
  pointerSize: 8,
  types: [CONFIG, permission, extensible_bitmap_node, extensible_bitmap, type_set, expression, constraint, mls_range, role_set, mls_level, semantic_category, mls_semantic_level, mls_semantic_range, context_s, common, T_class, role_s, type_s, types_s, user_s, bool_, level, category, module_header, access_vector_old, access_vector, avrule_item, avrule, avrule_list, conditional_node_item, conditional_node, conditional_list, role_trans_item, role_allow_item, filename_trans_item_old, filename_trans_item_item, filename_trans_item, role_trans_rule_item, role_allow_rule_item, scope_s, filename_trans_rule_item, range_trans_rule_item, avrule_decl, avrule_block_item, initial_sid, filesystem, port, node, fsuse, node6, ibpkey, ibpendport, xen_isid, xen_pirq, xen_ioport, xen_pcidevice, xen_devicetree, genfs2_item, genfs_item, range_item, Header],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "CONFIG": structNode(CONFIG, { label: "CONFIG" }),
    "permission": structNode(permission, { label: "permission" }),
    "extensible_bitmap_node": structNode(extensible_bitmap_node, { label: "extensible_bitmap_node" }),
    "extensible_bitmap": structNode(extensible_bitmap, { label: "extensible_bitmap" }),
    "type_set": structNode(type_set, { label: "type_set" }),
    "expression": structNode(expression, { label: "expression" }),
    "constraint": structNode(constraint, { label: "constraint" }),
    "mls_range": structNode(mls_range, { label: "mls_range" }),
    "role_set": structNode(role_set, { label: "role_set" }),
    "mls_level": structNode(mls_level, { label: "mls_level" }),
    "semantic_category": structNode(semantic_category, { label: "semantic_category" }),
    "mls_semantic_level": structNode(mls_semantic_level, { label: "mls_semantic_level" }),
    "mls_semantic_range": structNode(mls_semantic_range, { label: "mls_semantic_range" }),
    "context_s": structNode(context_s, { label: "context_s" }),
    "common": structNode(common, { label: "common" }),
    "T_class": structNode(T_class, { label: "class" }),
    "role_s": structNode(role_s, { label: "role_s" }),
    "type_s": structNode(type_s, { label: "type_s" }),
    "types_s": structNode(types_s, { label: "types_s" }),
    "user_s": structNode(user_s, { label: "user_s" }),
    "bool_": structNode(bool_, { label: "bool_" }),
    "level": structNode(level, { label: "level" }),
    "category": structNode(category, { label: "category" }),
    "module_header": structNode(module_header, { label: "module_header" }),
    "access_vector_old": structNode(access_vector_old, { label: "access_vector_old" }),
    "access_vector": structNode(access_vector, { label: "access_vector" }),
    "avrule_item": structNode(avrule_item, { label: "avrule_item" }),
    "avrule": structNode(avrule, { label: "avrule" }),
    "avrule_list": structNode(avrule_list, { label: "avrule_list" }),
    "conditional_node_item": structNode(conditional_node_item, { label: "conditional_node_item" }),
    "conditional_node": structNode(conditional_node, { label: "conditional_node" }),
    "conditional_list": structNode(conditional_list, { label: "conditional_list" }),
    "role_trans_item": structNode(role_trans_item, { label: "role_trans_item" }),
    "role_allow_item": structNode(role_allow_item, { label: "role_allow_item" }),
    "filename_trans_item_old": structNode(filename_trans_item_old, { label: "filename_trans_item_old" }),
    "filename_trans_item_item": structNode(filename_trans_item_item, { label: "filename_trans_item_item" }),
    "filename_trans_item": structNode(filename_trans_item, { label: "filename_trans_item" }),
    "role_trans_rule_item": structNode(role_trans_rule_item, { label: "role_trans_rule_item" }),
    "role_allow_rule_item": structNode(role_allow_rule_item, { label: "role_allow_rule_item" }),
    "scope_s": structNode(scope_s, { label: "scope_s" }),
    "filename_trans_rule_item": structNode(filename_trans_rule_item, { label: "filename_trans_rule_item" }),
    "range_trans_rule_item": structNode(range_trans_rule_item, { label: "range_trans_rule_item" }),
    "avrule_decl": structNode(avrule_decl, { label: "avrule_decl" }),
    "avrule_block_item": structNode(avrule_block_item, { label: "avrule_block_item" }),
    "initial_sid": structNode(initial_sid, { label: "initial_sid" }),
    "filesystem": structNode(filesystem, { label: "filesystem" }),
    "port": structNode(port, { label: "port" }),
    "node": structNode(node, { label: "node" }),
    "fsuse": structNode(fsuse, { label: "fsuse" }),
    "node6": structNode(node6, { label: "node6" }),
    "ibpkey": structNode(ibpkey, { label: "ibpkey" }),
    "ibpendport": structNode(ibpendport, { label: "ibpendport" }),
    "xen_isid": structNode(xen_isid, { label: "xen_isid" }),
    "xen_pirq": structNode(xen_pirq, { label: "xen_pirq" }),
    "xen_ioport": structNode(xen_ioport, { label: "xen_ioport" }),
    "xen_pcidevice": structNode(xen_pcidevice, { label: "xen_pcidevice" }),
    "xen_devicetree": structNode(xen_devicetree, { label: "xen_devicetree" }),
    "genfs2_item": structNode(genfs2_item, { label: "genfs2_item" }),
    "genfs_item": structNode(genfs_item, { label: "genfs_item" }),
    "range_item": structNode(range_item, { label: "range_item" }),
  },
});


/*
未移植项：
- symbols.commons: 类型 symbols_list 不可移植
- avrule_decl.role_tr_rules: 类型 list 不可移植
*/
