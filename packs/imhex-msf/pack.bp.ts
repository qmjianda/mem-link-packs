/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/msf.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const SmallStreamEntry = struct("SmallStreamEntry", [
  u32("stream_size", {  }),
  u32("ignored", {  }),
]);

const PdbStreamHeader = struct("PdbStreamHeader", [
  u32("version", { values: { "19941610": "VC2", "19950623": "VC4", "19950814": "VC41", "19960307": "VC50", "19970604": "VC98", "19990604": "VC70Dep", "20000404": "VC70", "20030901": "VC80", "20091201": "VC110", "20140508": "VC140" } }),
  i32("signature", {  }),
  u32("age", {  }),
]);

const HashEntry = struct("HashEntry", [
  u32("key", {  }),
  u32("value", {  }),
]);

const NamedStreams = struct("NamedStreams", [
  u32("keys_size", {  }),
]);

const TypeStreamHeader = struct("TypeStreamHeader", [
  u32("version", { values: { "19950410": "V40", "19951122": "V41", "19960307": "V50Interim", "19961031": "V50", "19990903": "V70", "20040203": "V80" } }),
  u32("header_size", {  }),
  u32("type_index_begin", {  }),
  u32("type_index_end", {  }),
  u32("type_record_bytes", {  }),
  u16("hash_stream_index", {  }),
  u16("hash_aux_stream_index", {  }),
  u32("hash_key_size", {  }),
  u32("num_hash_buckets", {  }),
  i32("hash_value_buffer_offset", {  }),
  u32("hash_value_buffer_length", {  }),
  i32("index_offset_buffer_offset", {  }),
  u32("index_offset_buffer_length", {  }),
  i32("hash_adj_buffer_offset", {  }),
  u32("hash_adj_buffer_length", {  }),
]);

const TypeRecordHeader = struct("TypeRecordHeader", [
  u16("size", {  }),
  u16("kind", { values: { "4097": "LF_MODIFIER", "4098": "LF_POINTER", "4104": "LF_PROCEDURE", "4609": "LF_ARGLIST", "4611": "LF_FIELDLIST", "4613": "LF_BITFIELD", "5124": "LF_INDEX", "5378": "LF_ENUMERATE", "5379": "LF_ARRAY", "5380": "LF_CLASS", "5381": "LF_STRUCTURE", "5382": "LF_UNION", "5383": "LF_ENUM", "5389": "LF_MEMBER", "5633": "LF_FUNC_ID", "32768": "LF_CHAR", "32769": "LF_SHORT", "32770": "LF_USHORT", "32771": "LF_LONG", "32772": "LF_ULONG", "32777": "LF_QUADWORD", "32778": "LF_UQUADWORD" } }),
]);

const TypeStream = struct("TypeStream", [
  record("header", TypeStreamHeader),
]);

const DbiSectionContribEntry = struct("DbiSectionContribEntry", [
  u16("section", {  }),
  pad(2),
  i32("offset", {  }),
  i32("size", {  }),
  u32("characteristics", {  }),
  u16("module_index", {  }),
  pad(2),
  u32("data_crc", {  }),
  u32("reloc_crc", {  }),
]);

const DbiSectionContribEntry2 = struct("DbiSectionContribEntry2", [
  u16("section", {  }),
  pad(2),
  i32("offset", {  }),
  i32("size", {  }),
  u32("characteristics", {  }),
  u16("module_index", {  }),
  pad(2),
  u32("data_crc", {  }),
  u32("reloc_crc", {  }),
  u32("coff_section", {  }),
]);

const DbiModuleInfoFlags = struct("DbiModuleInfoFlags", [
  bits("written", 1, { at: 0, bit: 0, unit: 1, label: "written" }),
  bits("ec_enabled", 1, { at: 0, bit: 1, unit: 1, label: "ec_enabled" }),
]);

const DbiModuleInfo = struct("DbiModuleInfo", [
  u32("old_module_index", {  }),
  record("section_contrib", DbiSectionContribEntry),
  record("flags", DbiModuleInfoFlags),
  u16("stream", {  }),
  u32("sym_byte_size", {  }),
  u32("c11_byte_size", {  }),
  u32("c13_byte_size", {  }),
  u16("source_file_count", {  }),
  pad(2),
  u32("unused2", {  }),
  u32("source_file_name_index", {  }),
  u32("pdb_file_path_name_index", {  }),
]);

const DbiSectionContributionsSubstream = struct("DbiSectionContributionsSubstream", [
  u32("version", { values: { "4046371373": "V60", "4046541284": "V2" } }),
]);

const DbiSectionMapEntryFlags = struct("DbiSectionMapEntryFlags", [
  bits("Read", 1, { at: 0, bit: 0, unit: 2, label: "Read" }),
  bits("Write", 1, { at: 0, bit: 1, unit: 2, label: "Write" }),
  bits("Execute", 1, { at: 0, bit: 2, unit: 2, label: "Execute" }),
  bits("AddressIs32Bit", 1, { at: 0, bit: 3, unit: 2, label: "AddressIs32Bit" }),
  bits("IsSelector", 1, { at: 0, bit: 8, unit: 2, label: "IsSelector" }),
  bits("IsAbsoluteAddress", 1, { at: 0, bit: 9, unit: 2, label: "IsAbsoluteAddress" }),
  bits("IsGroup", 1, { at: 0, bit: 10, unit: 2, label: "IsGroup" }),
]);

const DbiSectionMapEntry = struct("DbiSectionMapEntry", [
  record("flags", DbiSectionMapEntryFlags),
  u16("overlay", {  }),
  u16("group", {  }),
  u16("frame", {  }),
  u16("section_name", {  }),
  u16("class_name", {  }),
  u32("offset", {  }),
  u32("section_length", {  }),
]);

const DbiSectionMapSubstream = struct("DbiSectionMapSubstream", [
  u16("num_segments", {  }),
  u16("num_logical_segments", {  }),
]);

const DbiSourcesSubstream = struct("DbiSourcesSubstream", [
  u16("num_modules", {  }),
  u16("num_sources", {  }),
]);

const DbiTypeServerEntry = struct("DbiTypeServerEntry", [
  u32("signature", {  }),
  u32("age", {  }),
  u16("stream", {  }),
]);

const NamesMapEntry = struct("NamesMapEntry", [
  u32("offset", {  }),
]);

const DbiOptionalDebugHeaderSubstream = struct("DbiOptionalDebugHeaderSubstream", [
  u16("fpo_data", {  }),
  u16("exception_data", {  }),
  u16("fixup_data", {  }),
  u16("omap_to_src", {  }),
  u16("omap_from_src", {  }),
  u16("section_header_data", {  }),
  u16("token_rid_map", {  }),
  u16("xdata", {  }),
  u16("pdata", {  }),
  u16("new_fpo_data", {  }),
  u16("original_section_header_data", {  }),
]);

export default definePack({
  name: "Microsoft debugging files",
  endian: "little",
  pointerSize: 8,
  types: [SmallStreamEntry, PdbStreamHeader, HashEntry, NamedStreams, TypeStreamHeader, TypeRecordHeader, TypeStream, DbiSectionContribEntry, DbiSectionContribEntry2, DbiModuleInfoFlags, DbiModuleInfo, DbiSectionContributionsSubstream, DbiSectionMapEntryFlags, DbiSectionMapEntry, DbiSectionMapSubstream, DbiSourcesSubstream, DbiTypeServerEntry, NamesMapEntry, DbiOptionalDebugHeaderSubstream],
  nodes: {
    "entry": structNode(SmallStreamEntry, { label: "SmallStreamEntry（入口）" }),
    "PdbStreamHeader": structNode(PdbStreamHeader, { label: "PdbStreamHeader" }),
    "HashEntry": structNode(HashEntry, { label: "HashEntry" }),
    "NamedStreams": structNode(NamedStreams, { label: "NamedStreams" }),
    "TypeStreamHeader": structNode(TypeStreamHeader, { label: "TypeStreamHeader" }),
    "TypeRecordHeader": structNode(TypeRecordHeader, { label: "TypeRecordHeader" }),
    "TypeStream": structNode(TypeStream, { label: "TypeStream" }),
    "DbiSectionContribEntry": structNode(DbiSectionContribEntry, { label: "DbiSectionContribEntry" }),
    "DbiSectionContribEntry2": structNode(DbiSectionContribEntry2, { label: "DbiSectionContribEntry2" }),
    "DbiModuleInfoFlags": structNode(DbiModuleInfoFlags, { label: "DbiModuleInfoFlags" }),
    "DbiModuleInfo": structNode(DbiModuleInfo, { label: "DbiModuleInfo" }),
    "DbiSectionContributionsSubstream": structNode(DbiSectionContributionsSubstream, { label: "DbiSectionContributionsSubstream" }),
    "DbiSectionMapEntryFlags": structNode(DbiSectionMapEntryFlags, { label: "DbiSectionMapEntryFlags" }),
    "DbiSectionMapEntry": structNode(DbiSectionMapEntry, { label: "DbiSectionMapEntry" }),
    "DbiSectionMapSubstream": structNode(DbiSectionMapSubstream, { label: "DbiSectionMapSubstream" }),
    "DbiSourcesSubstream": structNode(DbiSourcesSubstream, { label: "DbiSourcesSubstream" }),
    "DbiTypeServerEntry": structNode(DbiTypeServerEntry, { label: "DbiTypeServerEntry" }),
    "NamesMapEntry": structNode(NamesMapEntry, { label: "NamesMapEntry" }),
    "DbiOptionalDebugHeaderSubstream": structNode(DbiOptionalDebugHeaderSubstream, { label: "DbiOptionalDebugHeaderSubstream" }),
  },
});


/*
未移植项：
- DbiModuleInfo.module_name: 类型 NullStringWorkAround 不可移植
- DbiTypeServerEntry.pdb_path: 类型 NullStringWorkAround 不可移植
- DbiStream.header: 类型 DbiStreamHeader 不可移植
*/
