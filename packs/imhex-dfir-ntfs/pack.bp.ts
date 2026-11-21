/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/DFIR/NTFS.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 6 项（见文件末尾）
const RUNLIST_HEADER = struct("RUNLIST_HEADER", [
  bits("SE_Offset", 4, { at: 0, bit: 0, unit: 1, label: "SE_Offset" }),
  bits("Length", 4, { at: 0, bit: 4, unit: 1, label: "Length" }),
]);

const RUNLIST = struct("RUNLIST", [
  record("RunList_Header", RUNLIST_HEADER),
]);

const BIOS_PARAMETER_BLOCK = struct("BIOS_PARAMETER_BLOCK", [
  u16("bytes_per_sector", {  }),
  u8("sectors_per_cluster", {  }),
  u16("reserved_sectors", {  }),
]);

const NTFS_RECORD = struct("NTFS_RECORD", [
  u32("magic", { values: { "1162627398": "magic_FILE", "1480871497": "magic_INDX", "1162628936": "magic_HOLE", "1381258066": "magic_RSTR", "1146241874": "magic_RCRD", "1145784387": "magic_CHKD", "1145127234": "magic_BAAD", "4294967295": "magic_empty" } }),
]);

const STANDARD_INFORMATION_BODY_OLD = struct("STANDARD_INFORMATION_BODY_OLD", [
  u64("Created_DT_UTC", {  }),
  u64("Modified_DT_UTC", {  }),
  u64("MFT_Mod_DT_UTC", {  }),
  u64("Accessed_DT_UTC", {  }),
  u32("file_attributes", { values: { "1": "FILE_ATTR_READONLY", "2": "FILE_ATTR_HIDDEN", "4": "FILE_ATTR_SYSTEM", "16": "FILE_ATTR_DIRECTORY", "32": "FILE_ATTR_ARCHIVE", "64": "FILE_ATTR_DEVICE", "128": "FILE_ATTR_NORMAL", "256": "FILE_ATTR_TEMPORARY", "512": "FILE_ATTR_SPARSE_FILE", "1024": "FILE_ATTR_REPARSE_POINT", "2048": "FILE_ATTR_COMPRESSED", "4096": "FILE_ATTR_OFFLINE", "8192": "FILE_ATTR_NOT_CONTENT_INDEXED", "16384": "FILE_ATTR_ENCRYPTED", "262144": "FILE_ATTRIBUTE_RECALL_ON_OPEN", "294839": "FILE_ATTR_VALID_FLAGS", "12711": "FILE_ATTR_VALID_SET_FLAGS", "268435456": "FILE_ATTR_I30_INDEX_PRESENT", "536870912": "FILE_ATTR_VIEW_INDEX_PRESENT" } }),
]);

const STANDARD_INFORMATION_OLD = struct("STANDARD_INFORMATION_OLD", [
  u64("Created_DT_UTC", {  }),
  u64("Modified_DT_UTC", {  }),
  u64("MFT_Mod_DT_UTC", {  }),
  u64("Accessed_DT_UTC", {  }),
  u32("file_attributes", { values: { "1": "FILE_ATTR_READONLY", "2": "FILE_ATTR_HIDDEN", "4": "FILE_ATTR_SYSTEM", "16": "FILE_ATTR_DIRECTORY", "32": "FILE_ATTR_ARCHIVE", "64": "FILE_ATTR_DEVICE", "128": "FILE_ATTR_NORMAL", "256": "FILE_ATTR_TEMPORARY", "512": "FILE_ATTR_SPARSE_FILE", "1024": "FILE_ATTR_REPARSE_POINT", "2048": "FILE_ATTR_COMPRESSED", "4096": "FILE_ATTR_OFFLINE", "8192": "FILE_ATTR_NOT_CONTENT_INDEXED", "16384": "FILE_ATTR_ENCRYPTED", "262144": "FILE_ATTRIBUTE_RECALL_ON_OPEN", "294839": "FILE_ATTR_VALID_FLAGS", "12711": "FILE_ATTR_VALID_SET_FLAGS", "268435456": "FILE_ATTR_I30_INDEX_PRESENT", "536870912": "FILE_ATTR_VIEW_INDEX_PRESENT" } }),
]);

const STANDARD_INFORMATION = struct("STANDARD_INFORMATION", [
  u64("Created_DT_UTC", {  }),
  u64("Modified_DT_UTC", {  }),
  u64("MFT_Mod_DT_UTC", {  }),
  u64("Accessed_DT_UTC", {  }),
  u32("file_attributes", { values: { "1": "FILE_ATTR_READONLY", "2": "FILE_ATTR_HIDDEN", "4": "FILE_ATTR_SYSTEM", "16": "FILE_ATTR_DIRECTORY", "32": "FILE_ATTR_ARCHIVE", "64": "FILE_ATTR_DEVICE", "128": "FILE_ATTR_NORMAL", "256": "FILE_ATTR_TEMPORARY", "512": "FILE_ATTR_SPARSE_FILE", "1024": "FILE_ATTR_REPARSE_POINT", "2048": "FILE_ATTR_COMPRESSED", "4096": "FILE_ATTR_OFFLINE", "8192": "FILE_ATTR_NOT_CONTENT_INDEXED", "16384": "FILE_ATTR_ENCRYPTED", "262144": "FILE_ATTRIBUTE_RECALL_ON_OPEN", "294839": "FILE_ATTR_VALID_FLAGS", "12711": "FILE_ATTR_VALID_SET_FLAGS", "268435456": "FILE_ATTR_I30_INDEX_PRESENT", "536870912": "FILE_ATTR_VIEW_INDEX_PRESENT" } }),
]);

const FILE_NAME_ATTR_PACKED = struct("FILE_NAME_ATTR_PACKED", [
  u16("packed_ea_size", {  }),
]);

const FILE_NAME_ATTR_FORM = union("FILE_NAME_ATTR_FORM", [
  record("packed", FILE_NAME_ATTR_PACKED),
  u32("reparse_point_tag", {  }),
]);

const VOLUME_INFORMATION = struct("VOLUME_INFORMATION", [
  u64("reserved", {  }),
  u8("major_ver", {  }),
  u8("minor_ver", {  }),
  u16("flags", { values: { "1": "VOLUME_IS_DIRTY", "2": "VOLUME_RESIZE_LOG_FILE", "4": "VOLUME_UPGRADE_ON_MOUNT", "8": "VOLUME_MOUNTED_ON_NT4", "16": "VOLUME_DELETE_USN_UNDERWAY", "32": "VOLUME_REPAIR_OBJECT_ID", "16384": "VOLUME_CHKDSK_UNDERWAY", "32768": "VOLUME_MODIFIED_BY_CHKDSK", "49215": "VOLUME_FLAGS_MASK" } }),
]);

const ACE_HEADER = struct("ACE_HEADER", [
  u8("type", { values: { "0": "ACCESS_MIN_MS_ACE_TYPE", "0": "ACCESS_ALLOWED_ACE_TYPE", "1": "ACCESS_DENIED_ACE_TYPE", "2": "SYSTEM_AUDIT_ACE_TYPE", "3": "SYSTEM_ALARM_ACE_TYPE", "3": "ACCESS_MAX_MS_V2_ACE_TYPE", "4": "ACCESS_ALLOWED_COMPOUND_ACE_TYPE", "4": "ACCESS_MAX_MS_V3_ACE_TYPE", "5": "ACCESS_MIN_MS_OBJECT_ACE_TYPE", "5": "ACCESS_ALLOWED_OBJECT_ACE_TYPE", "6": "ACCESS_DENIED_OBJECT_ACE_TYPE", "7": "SYSTEM_AUDIT_OBJECT_ACE_TYPE", "8": "SYSTEM_ALARM_OBJECT_ACE_TYPE", "8": "ACCESS_MAX_MS_OBJECT_ACE_TYPE", "8": "ACCESS_MAX_MS_V4_ACE_TYPE", "8": "ACCESS_MAX_MS_ACE_TYPE", "9": "ACCESS_ALLOWED_CALLBACK_ACE_TYPE", "10": "ACCESS_DENIED_CALLBACK_ACE_TYPE", "11": "ACCESS_ALLOWED_CALLBACK_OBJECT_ACE_TYPE", "12": "ACCESS_DENIED_CALLBACK_OBJECT_ACE_TYPE", "13": "SYSTEM_AUDIT_CALLBACK_ACE_TYPE", "14": "SYSTEM_ALARM_CALLBACK_ACE_TYPE", "15": "SYSTEM_AUDIT_CALLBACK_OBJECT_ACE_TYPE", "16": "SYSTEM_ALARM_CALLBACK_OBJECT_ACE_TYPE", "17": "SYSTEM_MANDATORY_LABEL_ACE_TYPE", "18": "SYSTEM_RESOURCE_ATTRIBUTE_ACE_TYPE", "19": "SYSTEM_SCOPED_POLICY_ID_ACE_TYPE", "20": "SYSTEM_PROCESS_TRUST_LABEL_ACE_TYPE" } }),
  u8("flags", { values: { "1": "OBJECT_INHERIT_ACE", "2": "CONTAINER_INHERIT_ACE", "4": "NO_PROPAGATE_INHERIT_ACE", "8": "INHERIT_ONLY_ACE", "16": "INHERITED_ACE", "31": "VALID_INHERIT_FLAGS", "64": "SUCCESSFUL_ACCESS_ACE_FLAG", "128": "FAILED_ACCESS_ACE_FLAG" } }),
  u16("size", {  }),
]);

const SID = struct("SID", [
  u8("revision", {  }),
  u8("sub_authority_count", {  }),
  bytes("identifier_authority", { size: 6 }),
]);

const ACCESS_ALLOWED_ACE = struct("ACCESS_ALLOWED_ACE", [
  record("header", ACE_HEADER),
  u32("mask", { values: { "1": "FILE_READ_DATA", "1": "FILE_LIST_DIRECTORY", "2": "FILE_WRITE_DATA", "2": "FILE_ADD_FILE", "4": "FILE_APPEND_DATA", "4": "FILE_ADD_SUBDIRECTORY", "8": "FILE_READ_EA", "16": "FILE_WRITE_EA", "32": "FILE_EXECUTE", "32": "FILE_TRAVERSE", "64": "FILE_DELETE_CHILD", "128": "FILE_READ_ATTRIBUTES", "256": "FILE_WRITE_ATTRIBUTES", "65536": "DELETE", "131072": "READ_CONTROL", "262144": "WRITE_DAC", "524288": "WRITE_OWNER", "1048576": "SYNCHRONIZE", "131072": "STANDARD_RIGHTS_READ", "131072": "STANDARD_RIGHTS_WRITE", "131072": "STANDARD_RIGHTS_EXECUTE", "983040": "STANDARD_RIGHTS_REQUIRED", "2031616": "STANDARD_RIGHTS_ALL", "16777216": "ACCESS_SYSTEM_SECURITY", "33554432": "MAXIMUM_ALLOWED", "268435456": "GENERIC_ALL", "536870912": "GENERIC_EXECUTE", "1073741824": "GENERIC_WRITE", "2147483648": "GENERIC_READ" } }),
  record("sid", SID),
]);

const ACCESS_ALLOWED_OBJECT_ACE = struct("ACCESS_ALLOWED_OBJECT_ACE", [
  record("header", ACE_HEADER),
  u32("mask", { values: { "1": "FILE_READ_DATA", "1": "FILE_LIST_DIRECTORY", "2": "FILE_WRITE_DATA", "2": "FILE_ADD_FILE", "4": "FILE_APPEND_DATA", "4": "FILE_ADD_SUBDIRECTORY", "8": "FILE_READ_EA", "16": "FILE_WRITE_EA", "32": "FILE_EXECUTE", "32": "FILE_TRAVERSE", "64": "FILE_DELETE_CHILD", "128": "FILE_READ_ATTRIBUTES", "256": "FILE_WRITE_ATTRIBUTES", "65536": "DELETE", "131072": "READ_CONTROL", "262144": "WRITE_DAC", "524288": "WRITE_OWNER", "1048576": "SYNCHRONIZE", "131072": "STANDARD_RIGHTS_READ", "131072": "STANDARD_RIGHTS_WRITE", "131072": "STANDARD_RIGHTS_EXECUTE", "983040": "STANDARD_RIGHTS_REQUIRED", "2031616": "STANDARD_RIGHTS_ALL", "16777216": "ACCESS_SYSTEM_SECURITY", "33554432": "MAXIMUM_ALLOWED", "268435456": "GENERIC_ALL", "536870912": "GENERIC_EXECUTE", "1073741824": "GENERIC_WRITE", "2147483648": "GENERIC_READ" } }),
  u32("object_flags", { values: { "1": "ACE_OBJECT_TYPE_PRESENT", "2": "ACE_INHERITED_OBJECT_TYPE_PRESENT" } }),
]);

const ACE = union("ACE", [
  record("hdr", ACE_HEADER),
]);

const ACL = struct("ACL", [
  u8("revision", {  }),
  u8("alignment1", {  }),
  u16("size", {  }),
  u16("ace_count", {  }),
  u16("alignment2", {  }),
]);

const SECURITY_DESCRIPTOR_RELATIVE = struct("SECURITY_DESCRIPTOR_RELATIVE", [
  u8("revision", {  }),
  u8("alignment", {  }),
  u16("control", {  }),
  u32("owner", {  }),
  u32("group", {  }),
  u32("sacl", {  }),
  u32("dacl", {  }),
]);

const INDEX_HEADER = struct("INDEX_HEADER", [
  u32("entries_offset", {  }),
  u32("index_length", {  }),
  u32("allocated_size", {  }),
  u8("ih_flags", { values: { "0": "SMALL_INDEX", "1": "LARGE_INDEX", "0": "LEAF_NODE", "1": "INDEX_NODE", "1": "NODE_MASK" } }),
  bytes("reserved", { size: 3 }),
]);

const REPARSE_INDEX_KEY = struct("REPARSE_INDEX_KEY", [
  u32("reparse_tag", {  }),
  u64("file_id", {  }),
]);

const SDS_ENTRY = struct("SDS_ENTRY", [
  u32("hash", {  }),
  u32("security_id", {  }),
  u64("offset", {  }),
  u32("length", {  }),
  record("sid", SECURITY_DESCRIPTOR_RELATIVE),
]);

const SDH_INDEX_KEY = struct("SDH_INDEX_KEY", [
  u32("hash", {  }),
  u32("security_id", {  }),
]);

const INDEX_ENTR_HEADER_PTR = struct("INDEX_ENTR_HEADER_PTR", [
  u16("data_offset", {  }),
  u16("data_length", {  }),
  u32("reservedV", {  }),
]);

const INDEX_ENTR_HEADER_REF = union("INDEX_ENTR_HEADER_REF", [
  u64("indexed_file", {  }),
  record("ptr", INDEX_ENTR_HEADER_PTR),
]);

const INDEX_ENTRY_HEADER = struct("INDEX_ENTRY_HEADER", [
  record("file_ref", INDEX_ENTR_HEADER_REF),
  u16("length", {  }),
  u16("key_length", {  }),
  u16("flags", {  }),
  u16("reserved", {  }),
]);

const IDX_FILE_NAME_ATTR = struct("IDX_FILE_NAME_ATTR", [
  bytes("MFT_Parent_Dir", { size: 6 }),
  u16("Parent_Seq_Num", {  }),
  u64("Created_DT_UTC", {  }),
  u64("Modified_DT_UTC", {  }),
  u64("MFT_Mod_DT_UTC", {  }),
  u64("Accessed_DT_UTC", {  }),
  u64("allocated_size", {  }),
  u64("data_size", {  }),
  u32("file_attributes", { values: { "1": "FILE_ATTR_READONLY", "2": "FILE_ATTR_HIDDEN", "4": "FILE_ATTR_SYSTEM", "16": "FILE_ATTR_DIRECTORY", "32": "FILE_ATTR_ARCHIVE", "64": "FILE_ATTR_DEVICE", "128": "FILE_ATTR_NORMAL", "256": "FILE_ATTR_TEMPORARY", "512": "FILE_ATTR_SPARSE_FILE", "1024": "FILE_ATTR_REPARSE_POINT", "2048": "FILE_ATTR_COMPRESSED", "4096": "FILE_ATTR_OFFLINE", "8192": "FILE_ATTR_NOT_CONTENT_INDEXED", "16384": "FILE_ATTR_ENCRYPTED", "262144": "FILE_ATTRIBUTE_RECALL_ON_OPEN", "294839": "FILE_ATTR_VALID_FLAGS", "12711": "FILE_ATTR_VALID_SET_FLAGS", "268435456": "FILE_ATTR_I30_INDEX_PRESENT", "536870912": "FILE_ATTR_VIEW_INDEX_PRESENT" } }),
  record("form", FILE_NAME_ATTR_FORM),
  u8("file_name_length", {  }),
  u8("file_name_type", { values: { "0": "FILE_NAME_POSIX", "1": "FILE_NAME_WIN32", "2": "FILE_NAME_DOS", "3": "FILE_NAME_WIN32_AND_DOS" } }),
]);

const INDEX_ENTRY_FILE_NAME = struct("INDEX_ENTRY_FILE_NAME", [
  record("header", INDEX_ENTRY_HEADER),
]);

const INDEX_ENTRY_SII = struct("INDEX_ENTRY_SII", [
  record("header", INDEX_ENTRY_HEADER),
]);

const INDEX_ENTRY_SDH = struct("INDEX_ENTRY_SDH", [
  record("header", INDEX_ENTRY_HEADER),
]);

const INDEX_ENTRY_OBJ_ID = struct("INDEX_ENTRY_OBJ_ID", [
  record("header", INDEX_ENTRY_HEADER),
]);

const INDEX_ENTRY_REPARSE = struct("INDEX_ENTRY_REPARSE", [
  record("header", INDEX_ENTRY_HEADER),
]);

const INDEX_ENTRY_SID = struct("INDEX_ENTRY_SID", [
  record("header", INDEX_ENTRY_HEADER),
]);

const INDEX_ENTRY_OWNER_ID = struct("INDEX_ENTRY_OWNER_ID", [
  record("header", INDEX_ENTRY_HEADER),
]);

const INDEX_BLOCK = struct("INDEX_BLOCK", [
  record("header", NTFS_RECORD),
  u64("lsn", {  }),
  u64("index_block_vcn", {  }),
  record("index", INDEX_HEADER),
]);

const INDEX_ROOT = struct("INDEX_ROOT", [
  u32("type", { values: { "0": "AT_UNUSED", "16": "AT_STANDARD_INFORMATION", "32": "AT_ATTRIBUTE_LIST", "48": "AT_FILE_NAME", "64": "AT_OBJECT_ID", "80": "AT_SECURITY_DESCRIPTOR", "96": "AT_VOLUME_NAME", "112": "AT_VOLUME_INFORMATION", "128": "AT_DATA", "144": "AT_INDEX_ROOT", "160": "AT_INDEX_ALLOCATION", "176": "AT_BITMAP", "192": "AT_REPARSE_POINT", "208": "AT_EA_INFORMATION", "224": "AT_EA", "240": "AT_PROPERTY_SET", "256": "AT_LOGGED_UTILITY_STREAM", "4096": "AT_FIRST_USER_DEFINED_ATTRIBUTE", "4294967295": "AT_END" } }),
  u32("collation_rule", { values: { "0": "COLLATION_BINARY", "1": "COLLATION_FILE_NAME", "2": "COLLATION_UNICODE_STRING", "16": "COLLATION_NTOFS_ULONG", "17": "COLLATION_NTOFS_SID", "18": "COLLATION_NTOFS_SECURITY_HASH", "19": "COLLATION_NTOFS_ULONGS" } }),
  u32("index_block_size", {  }),
  i8("clusters_per_index_block", {  }),
  bytes("reserved", { size: 3 }),
  record("index", INDEX_HEADER),
]);

const RESTART_PAGE_HEADER = struct("RESTART_PAGE_HEADER", [
  u32("magic", { values: { "1162627398": "magic_FILE", "1480871497": "magic_INDX", "1162628936": "magic_HOLE", "1381258066": "magic_RSTR", "1146241874": "magic_RCRD", "1145784387": "magic_CHKD", "1145127234": "magic_BAAD", "4294967295": "magic_empty" } }),
  u16("usa_ofs", {  }),
  u16("usa_count", {  }),
  u64("chkdsk_lsn", {  }),
  u32("system_page_size", {  }),
  u32("log_page_size", {  }),
  u16("restart_area_offset", {  }),
  u16("minor_ver", {  }),
  u16("major_ver", {  }),
  u16("usn", {  }),
]);

const RESTART_AREA = struct("RESTART_AREA", [
  u64("current_lsn", {  }),
  u16("log_clients", {  }),
  u16("client_free_list", {  }),
  u16("client_in_use_list", {  }),
  u16("flags", { values: { "2": "RESTART_VOLUME_IS_CLEAN", "65535": "RESTART_SPACE_FILLER" } }),
  u32("seq_number_bits", {  }),
  u16("restart_area_length", {  }),
  u16("client_array_offset", {  }),
  u64("file_size", {  }),
  u32("last_lsn_data_length", {  }),
  u16("log_record_header_length", {  }),
  u16("log_page_data_offset", {  }),
  u32("restart_log_open_count", {  }),
  u32("reserved", {  }),
]);

const LOG_CLIENT_RECORD = struct("LOG_CLIENT_RECORD", [
  u64("oldest_lsn", {  }),
  u64("client_restart_lsn", {  }),
  u16("prev_client", {  }),
  u16("next_client", {  }),
  u16("seq_number", {  }),
  bytes("reserved", { size: 6 }),
  u32("client_name_length", {  }),
]);

const EA_INFO_ENTRY = struct("EA_INFO_ENTRY", [
  u16("EA_packed_size", {  }),
  u16("EA_Count", {  }),
  u32("EA_unpacked_size", {  }),
]);

const EA_ENTRY = struct("EA_ENTRY", [
  u32("entry_size", {  }),
  u8("flags", {  }),
  u8("name_length", {  }),
  u16("value_length", {  }),
]);

const ATTRHeader = struct("ATTRHeader", [
  u32("type", { values: { "0": "AT_UNUSED", "16": "AT_STANDARD_INFORMATION", "32": "AT_ATTRIBUTE_LIST", "48": "AT_FILE_NAME", "64": "AT_OBJECT_ID", "80": "AT_SECURITY_DESCRIPTOR", "96": "AT_VOLUME_NAME", "112": "AT_VOLUME_INFORMATION", "128": "AT_DATA", "144": "AT_INDEX_ROOT", "160": "AT_INDEX_ALLOCATION", "176": "AT_BITMAP", "192": "AT_REPARSE_POINT", "208": "AT_EA_INFORMATION", "224": "AT_EA", "240": "AT_PROPERTY_SET", "256": "AT_LOGGED_UTILITY_STREAM", "4096": "AT_FIRST_USER_DEFINED_ATTRIBUTE", "4294967295": "AT_END" } }),
  u32("length", {  }),
  u8("non_resident", {  }),
  u8("name_length", {  }),
  u16("name_offset", {  }),
  u16("flags", {  }),
  u16("instance", {  }),
]);

const ATTRBody = struct("ATTRBody", [
  u64("lowest_vcn", {  }),
  u64("highest_vcn", {  }),
  u16("mapping_pairs_offset", {  }),
  u8("compression_unit", {  }),
  bytes("reserved1", { size: 5 }),
  u64("allocated_size", {  }),
  u64("data_size", {  }),
  u64("initialized_size", {  }),
]);

const ATTR_RECORD = struct("ATTR_RECORD", [
  record("ATTR_HEADER", ATTRHeader),
]);

const NTFS_RECORD_HDR = struct("NTFS_RECORD_HDR", [
  u32("magic", { values: { "1162627398": "magic_FILE", "1480871497": "magic_INDX", "1162628936": "magic_HOLE", "1381258066": "magic_RSTR", "1146241874": "magic_RCRD", "1145784387": "magic_CHKD", "1145127234": "magic_BAAD", "4294967295": "magic_empty" } }),
]);

const ATTR_WRAPPER = struct("ATTR_WRAPPER", [
  record("ATTR", ATTR_RECORD),
]);

const MFT_RECORD = struct("MFT_RECORD", [
  record("FR_HEADER", NTFS_RECORD_HDR),
]);

const NTFS_BOOT_SECTOR = struct("NTFS_BOOT_SECTOR", [
  bytes("jmp_boot", { size: 3 }),
  str("oem_id", { size: 8 }),
  record("bpb", BIOS_PARAMETER_BLOCK),
  u8("physical_drive", {  }),
  u8("current_head", {  }),
  u8("extended_boot_signature", {  }),
  u8("reserved1", {  }),
  u64("total_sectors", {  }),
  u64("mft_lcn", {  }),
  u64("mftmirr_lcn", {  }),
  u8("clusters_per_mft_record", {  }),
  bytes("reserved2", { size: 3 }),
  u8("clusters_per_index_buffer", {  }),
  bytes("reserved3", { size: 3 }),
  u64("volume_serial", {  }),
  u32("checksum", {  }),
  bytes("bootstrap", { size: 426 }),
  u16("VBR_SIG", { values: { "43605": "VBR_SIG" } }),
]);

export default definePack({
  name: "NT File System (NTFS_v2.0)",
  endian: "little",
  pointerSize: 8,
  types: [RUNLIST_HEADER, RUNLIST, BIOS_PARAMETER_BLOCK, NTFS_RECORD, STANDARD_INFORMATION_BODY_OLD, STANDARD_INFORMATION_OLD, STANDARD_INFORMATION, FILE_NAME_ATTR_PACKED, FILE_NAME_ATTR_FORM, VOLUME_INFORMATION, ACE_HEADER, SID, ACCESS_ALLOWED_ACE, ACCESS_ALLOWED_OBJECT_ACE, ACE, ACL, SECURITY_DESCRIPTOR_RELATIVE, INDEX_HEADER, REPARSE_INDEX_KEY, SDS_ENTRY, SDH_INDEX_KEY, INDEX_ENTR_HEADER_PTR, INDEX_ENTR_HEADER_REF, INDEX_ENTRY_HEADER, IDX_FILE_NAME_ATTR, INDEX_ENTRY_FILE_NAME, INDEX_ENTRY_SII, INDEX_ENTRY_SDH, INDEX_ENTRY_OBJ_ID, INDEX_ENTRY_REPARSE, INDEX_ENTRY_SID, INDEX_ENTRY_OWNER_ID, INDEX_BLOCK, INDEX_ROOT, RESTART_PAGE_HEADER, RESTART_AREA, LOG_CLIENT_RECORD, EA_INFO_ENTRY, EA_ENTRY, ATTRHeader, ATTRBody, ATTR_RECORD, NTFS_RECORD_HDR, ATTR_WRAPPER, MFT_RECORD, NTFS_BOOT_SECTOR],
  nodes: {
    "entry": structNode(NTFS_BOOT_SECTOR, { label: "NTFS_BOOT_SECTOR（入口）" }),
    "RUNLIST_HEADER": structNode(RUNLIST_HEADER, { label: "RUNLIST_HEADER" }),
    "RUNLIST": structNode(RUNLIST, { label: "RUNLIST" }),
    "BIOS_PARAMETER_BLOCK": structNode(BIOS_PARAMETER_BLOCK, { label: "BIOS_PARAMETER_BLOCK" }),
    "NTFS_RECORD": structNode(NTFS_RECORD, { label: "NTFS_RECORD" }),
    "STANDARD_INFORMATION_BODY_OLD": structNode(STANDARD_INFORMATION_BODY_OLD, { label: "STANDARD_INFORMATION_BODY_OLD" }),
    "STANDARD_INFORMATION_OLD": structNode(STANDARD_INFORMATION_OLD, { label: "STANDARD_INFORMATION_OLD" }),
    "STANDARD_INFORMATION": structNode(STANDARD_INFORMATION, { label: "STANDARD_INFORMATION" }),
    "FILE_NAME_ATTR_PACKED": structNode(FILE_NAME_ATTR_PACKED, { label: "FILE_NAME_ATTR_PACKED" }),
    "FILE_NAME_ATTR_FORM": structNode(FILE_NAME_ATTR_FORM, { label: "FILE_NAME_ATTR_FORM" }),
    "VOLUME_INFORMATION": structNode(VOLUME_INFORMATION, { label: "VOLUME_INFORMATION" }),
    "ACE_HEADER": structNode(ACE_HEADER, { label: "ACE_HEADER" }),
    "SID": structNode(SID, { label: "SID" }),
    "ACCESS_ALLOWED_ACE": structNode(ACCESS_ALLOWED_ACE, { label: "ACCESS_ALLOWED_ACE" }),
    "ACCESS_ALLOWED_OBJECT_ACE": structNode(ACCESS_ALLOWED_OBJECT_ACE, { label: "ACCESS_ALLOWED_OBJECT_ACE" }),
    "ACE": structNode(ACE, { label: "ACE" }),
    "ACL": structNode(ACL, { label: "ACL" }),
    "SECURITY_DESCRIPTOR_RELATIVE": structNode(SECURITY_DESCRIPTOR_RELATIVE, { label: "SECURITY_DESCRIPTOR_RELATIVE" }),
    "INDEX_HEADER": structNode(INDEX_HEADER, { label: "INDEX_HEADER" }),
    "REPARSE_INDEX_KEY": structNode(REPARSE_INDEX_KEY, { label: "REPARSE_INDEX_KEY" }),
    "SDS_ENTRY": structNode(SDS_ENTRY, { label: "SDS_ENTRY" }),
    "SDH_INDEX_KEY": structNode(SDH_INDEX_KEY, { label: "SDH_INDEX_KEY" }),
    "INDEX_ENTR_HEADER_PTR": structNode(INDEX_ENTR_HEADER_PTR, { label: "INDEX_ENTR_HEADER_PTR" }),
    "INDEX_ENTR_HEADER_REF": structNode(INDEX_ENTR_HEADER_REF, { label: "INDEX_ENTR_HEADER_REF" }),
    "INDEX_ENTRY_HEADER": structNode(INDEX_ENTRY_HEADER, { label: "INDEX_ENTRY_HEADER" }),
    "IDX_FILE_NAME_ATTR": structNode(IDX_FILE_NAME_ATTR, { label: "IDX_FILE_NAME_ATTR" }),
    "INDEX_ENTRY_FILE_NAME": structNode(INDEX_ENTRY_FILE_NAME, { label: "INDEX_ENTRY_FILE_NAME" }),
    "INDEX_ENTRY_SII": structNode(INDEX_ENTRY_SII, { label: "INDEX_ENTRY_SII" }),
    "INDEX_ENTRY_SDH": structNode(INDEX_ENTRY_SDH, { label: "INDEX_ENTRY_SDH" }),
    "INDEX_ENTRY_OBJ_ID": structNode(INDEX_ENTRY_OBJ_ID, { label: "INDEX_ENTRY_OBJ_ID" }),
    "INDEX_ENTRY_REPARSE": structNode(INDEX_ENTRY_REPARSE, { label: "INDEX_ENTRY_REPARSE" }),
    "INDEX_ENTRY_SID": structNode(INDEX_ENTRY_SID, { label: "INDEX_ENTRY_SID" }),
    "INDEX_ENTRY_OWNER_ID": structNode(INDEX_ENTRY_OWNER_ID, { label: "INDEX_ENTRY_OWNER_ID" }),
    "INDEX_BLOCK": structNode(INDEX_BLOCK, { label: "INDEX_BLOCK" }),
    "INDEX_ROOT": structNode(INDEX_ROOT, { label: "INDEX_ROOT" }),
    "RESTART_PAGE_HEADER": structNode(RESTART_PAGE_HEADER, { label: "RESTART_PAGE_HEADER" }),
    "RESTART_AREA": structNode(RESTART_AREA, { label: "RESTART_AREA" }),
    "LOG_CLIENT_RECORD": structNode(LOG_CLIENT_RECORD, { label: "LOG_CLIENT_RECORD" }),
    "EA_INFO_ENTRY": structNode(EA_INFO_ENTRY, { label: "EA_INFO_ENTRY" }),
    "EA_ENTRY": structNode(EA_ENTRY, { label: "EA_ENTRY" }),
    "ATTRHeader": structNode(ATTRHeader, { label: "ATTRHeader" }),
    "ATTRBody": structNode(ATTRBody, { label: "ATTRBody" }),
    "ATTR_RECORD": structNode(ATTR_RECORD, { label: "ATTR_RECORD" }),
    "NTFS_RECORD_HDR": structNode(NTFS_RECORD_HDR, { label: "NTFS_RECORD_HDR" }),
    "ATTR_WRAPPER": structNode(ATTR_WRAPPER, { label: "ATTR_WRAPPER" }),
    "MFT_RECORD": structNode(MFT_RECORD, { label: "MFT_RECORD" }),
  },
});


/*
未移植项：
- ATTR_DEF.name: 类型 char16 不可移植
- OBJECT_ID_ATTR_INFO.birth_volume_id: 类型 type_GUID 不可移植
- OBJECT_ID_ATTR_FORM.info: 类型 OBJECT_ID_ATTR_INFO 不可移植
- OBJECT_ID_ATTR.object_id: 类型 type_GUID 不可移植
- ACCESS_ALLOWED_OBJECT_ACE.object_type: 类型 type_GUID 不可移植
- LOG_CLIENT_RECORD.client_name: 类型 char16 不可移植
*/
