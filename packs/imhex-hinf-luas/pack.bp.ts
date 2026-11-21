/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/hinf_luas.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const String32 = struct("String32", [
  i32("length", {  }),
]);

const String64 = struct("String64", [
  i64("length", {  }),
]);

const lua_enum = struct("lua_enum", [
  i32("value", {  }),
  record("string", String32),
]);

const LuaEnum = struct("LuaEnum", [
  i32("count", {  }),
]);

const REG_CONST_UNUSED = struct("REG_CONST_UNUSED", [
  bits("argB", 17, { at: 0, bit: 0, unit: 4, label: "argB" }),
]);

const REG_NUM_NUM = struct("REG_NUM_NUM", [
  bits("argC", 9, { at: 0, bit: 0, unit: 2, label: "argC" }),
]);

const REG_NUM_UNUSED = struct("REG_NUM_UNUSED", [
  bits("argB", 8, { at: 0, bit: 0, unit: 1, label: "argB" }),
]);

const UNUSED_OFFSET_UNUSED = struct("UNUSED_OFFSET_UNUSED", [
  bits("argA", 8, { at: 0, bit: 0, unit: 1, label: "argA" }),
]);

const LuaBitfield = struct("LuaBitfield", [
  bits("OpCode", 7, { at: 0, bit: 0, unit: 1, label: "OpCode" }),
]);

const LuaInstruction = struct("LuaInstruction", [
  record("OpCode", LuaBitfield),
]);

const LuaConstant = struct("LuaConstant", [
  u8("type", { values: { "0": "TNIL", "1": "TBOOLEAN", "2": "TLIGHTUSERDATA", "3": "TNUMBER", "4": "TSTRING", "5": "TTABLE", "6": "TFUNCTION", "7": "TUSERDATA", "8": "TTHREAD", "9": "TIFUNCTION", "10": "TCFUNCTION", "11": "TUI64", "12": "TSTRUCT" } }),
]);

const HksLocal = struct("HksLocal", [
  record("string", String64),
  u32("start", {  }),
  u32("end", {  }),
]);

const LuaFunction = struct("LuaFunction", [
  i32("upvaluecount", {  }),
  i32("paramcount", {  }),
  i8("isVarArg", {  }),
  i32("slotCount", {  }),
  i32("unk", {  }),
  i32("instruction_count", {  }),
]);

const LuaStructHeader = struct("LuaStructHeader", [
  record("name", String64),
  i32("structID", {  }),
  i32("pad", {  }),
]);

const LuaStructMember = struct("LuaStructMember", [
  i32("pad", {  }),
  record("header", LuaStructHeader),
  i32("index", {  }),
]);

const LuaHeader = struct("LuaHeader", [
  str("luaheader", { size: 4 }),
  u8("version", {  }),
  u8("format", {  }),
  u8("Endianness", { values: { "1": "little_endian", "0": "big_endian" } }),
]);

const Header = struct("Header", [
  u32("magic", {  }),
  u32("version", {  }),
  u64("RootStructAltGUID", {  }),
  u64("AssetChecksum", {  }),
  u32("DependencyCount", {  }),
  i32("DataBlockCount", {  }),
  i32("TagStructCount", {  }),
  i32("DataReferenceCount", {  }),
  i32("TagReferenceCount", {  }),
  u32("StringTableSize", {  }),
  u32("ZoneSetDataSize", {  }),
  u32("Unk_0x34", {  }),
  u32("HeaderSize", {  }),
  u32("DataSize", {  }),
  u32("ResourceDataSize", {  }),
  u32("ActualResoureDataSize", {  }),
  u8("HeaderAlignment", {  }),
  u8("TagDataAlignment", {  }),
  u8("ResourceDataAlignment", {  }),
  u8("ActualResourceDataAlignment", {  }),
  i32("IsResource", {  }),
]);

const _s_tagblock = struct("_s_tagblock", [
  str("tagblock", { size: 16 }),
  i32("count", {  }),
]);

const _s_resource = struct("_s_resource", [
  str("resource", { size: 12 }),
  i32("count", {  }),
]);

const _s_data = struct("_s_data", [
  str("data", { size: 24 }),
]);

const Data_Block = struct("Data_Block", [
  u32("Size", {  }),
  u16("Padding", {  }),
  u16("Section", {  }),
  u64("Offset", {  }),
]);

const Tag_Def_Structure = struct("Tag_Def_Structure", [
  i64("GUID_1", {  }),
  i64("GUID_2", {  }),
  u16("Type", {  }),
  u16("Unk_0x12", {  }),
  i32("TargetIndex", {  }),
  i32("FieldBlock", {  }),
  u32("FieldOffset", {  }),
]);

const Tag_Dependency = struct("Tag_Dependency", [
  str("GroupTag", { size: 4 }),
  u32("NameOffset", {  }),
  u64("AssetID", {  }),
  u32("GlobalID", {  }),
  u32("Unk_0x14", {  }),
]);

const Data_Reference = struct("Data_Reference", [
  i32("ParentStructIndex", {  }),
  i32("Unk_0x04", {  }),
  i32("TargetIndex", {  }),
  i32("FieldBlock", {  }),
  u32("FieldOffset", {  }),
]);

const _s_tagref = struct("_s_tagref", [
  i64("GlobalHandle", {  }),
  i32("ref_id_int", {  }),
  i32("ref_id_sub", {  }),
  i32("ref_id_center_int", {  }),
  str("TagGroupRev", { size: 4 }),
  i32("local_handle", {  }),
]);

const Tag_Fixup_Reference = struct("Tag_Fixup_Reference", [
  i32("FieldBlock", {  }),
  u32("FieldOffset", {  }),
  u32("NameOffset", {  }),
  i32("DependencyIndex", {  }),
]);

const InternalStruct = struct("InternalStruct", [
  i64("vtablespace", {  }),
  u32("global_tag_id", {  }),
  str("local_tag_handle", { size: 4 }),
]);

const LuaReferencedTagContainer = struct("LuaReferencedTagContainer", [
  record("tagReference", _s_tagref),
]);

const LuaScriptTagDefinition = struct("LuaScriptTagDefinition", [
  u32("luaFileName", {  }),
  record("luaFileData", _s_data),
  str("luaFileNameString", { size: 256 }),
  record("referencedTags_count", _s_tagblock),
  record("lua_header", LuaHeader),
]);

export default definePack({
  name: "Halo Infinite HavokScript 5.1 \"luas",
  endian: "little",
  pointerSize: 8,
  types: [String32, String64, lua_enum, LuaEnum, REG_CONST_UNUSED, REG_NUM_NUM, REG_NUM_UNUSED, UNUSED_OFFSET_UNUSED, LuaBitfield, LuaInstruction, LuaConstant, HksLocal, LuaFunction, LuaStructHeader, LuaStructMember, LuaHeader, Header, _s_tagblock, _s_resource, _s_data, Data_Block, Tag_Def_Structure, Tag_Dependency, Data_Reference, _s_tagref, Tag_Fixup_Reference, InternalStruct, LuaReferencedTagContainer, LuaScriptTagDefinition],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "String32": structNode(String32, { label: "String32" }),
    "String64": structNode(String64, { label: "String64" }),
    "lua_enum": structNode(lua_enum, { label: "lua_enum" }),
    "LuaEnum": structNode(LuaEnum, { label: "LuaEnum" }),
    "REG_CONST_UNUSED": structNode(REG_CONST_UNUSED, { label: "REG_CONST_UNUSED" }),
    "REG_NUM_NUM": structNode(REG_NUM_NUM, { label: "REG_NUM_NUM" }),
    "REG_NUM_UNUSED": structNode(REG_NUM_UNUSED, { label: "REG_NUM_UNUSED" }),
    "UNUSED_OFFSET_UNUSED": structNode(UNUSED_OFFSET_UNUSED, { label: "UNUSED_OFFSET_UNUSED" }),
    "LuaBitfield": structNode(LuaBitfield, { label: "LuaBitfield" }),
    "LuaInstruction": structNode(LuaInstruction, { label: "LuaInstruction" }),
    "LuaConstant": structNode(LuaConstant, { label: "LuaConstant" }),
    "HksLocal": structNode(HksLocal, { label: "HksLocal" }),
    "LuaFunction": structNode(LuaFunction, { label: "LuaFunction" }),
    "LuaStructHeader": structNode(LuaStructHeader, { label: "LuaStructHeader" }),
    "LuaStructMember": structNode(LuaStructMember, { label: "LuaStructMember" }),
    "LuaHeader": structNode(LuaHeader, { label: "LuaHeader" }),
    "_s_tagblock": structNode(_s_tagblock, { label: "_s_tagblock" }),
    "_s_resource": structNode(_s_resource, { label: "_s_resource" }),
    "_s_data": structNode(_s_data, { label: "_s_data" }),
    "Data_Block": structNode(Data_Block, { label: "Data_Block" }),
    "Tag_Def_Structure": structNode(Tag_Def_Structure, { label: "Tag_Def_Structure" }),
    "Tag_Dependency": structNode(Tag_Dependency, { label: "Tag_Dependency" }),
    "Data_Reference": structNode(Data_Reference, { label: "Data_Reference" }),
    "_s_tagref": structNode(_s_tagref, { label: "_s_tagref" }),
    "Tag_Fixup_Reference": structNode(Tag_Fixup_Reference, { label: "Tag_Fixup_Reference" }),
    "InternalStruct": structNode(InternalStruct, { label: "InternalStruct" }),
    "LuaReferencedTagContainer": structNode(LuaReferencedTagContainer, { label: "LuaReferencedTagContainer" }),
    "LuaScriptTagDefinition": structNode(LuaScriptTagDefinition, { label: "LuaScriptTagDefinition" }),
  },
});


/*
未移植项：
- LuaStructHeader.unk1: 类型 s24 不可移植
*/
