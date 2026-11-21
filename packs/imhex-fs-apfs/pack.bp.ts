/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fs/apfs.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 13 项（见文件末尾）
const prange = struct("prange", [
  i64("pr_start_paddr", {  }),
  u64("pr_block_count", {  }),
]);

const o_type_t = struct("o_type_t", [
  u16("t_type", { values: { "1": "OBJECT_TYPE_NX_SUPERBLOCK", "2": "OBJECT_TYPE_BTREE", "3": "OBJECT_TYPE_BTREE_NODE", "5": "OBJECT_TYPE_SPACEMAN", "6": "OBJECT_TYPE_SPACEMAN_CAB", "7": "OBJECT_TYPE_SPACEMAN_CIB", "8": "OBJECT_TYPE_SPACEMAN_BITMAP", "9": "OBJECT_TYPE_SPACEMAN_FREE_QUEUE", "10": "OBJECT_TYPE_EXTENT_LIST_TREE", "11": "OBJECT_TYPE_OMAP", "12": "OBJECT_TYPE_CHECKPOINT_MAP", "13": "OBJECT_TYPE_FS", "14": "OBJECT_TYPE_FSTREE", "15": "OBJECT_TYPE_BLOCKREFTREE", "16": "OBJECT_TYPE_SNAPMETATREE", "17": "OBJECT_TYPE_NX_REAPER", "18": "OBJECT_TYPE_NX_REAP_LIST", "19": "OBJECT_TYPE_OMAP_SNAPSHOT", "20": "OBJECT_TYPE_EFI_JUMPSTART", "21": "OBJECT_TYPE_FUSION_MIDDLE_TREE", "22": "OBJECT_TYPE_NX_FUSION_WBC", "23": "OBJECT_TYPE_NX_FUSION_WBC_LIST", "24": "OBJECT_TYPE_ER_STATE", "25": "OBJECT_TYPE_GBITMAP", "26": "OBJECT_TYPE_GBITMAP_TREE", "27": "OBJECT_TYPE_GBITMAP_BLOCK", "28": "OBJECT_TYPE_ER_RECOVERY_BLOCK", "29": "OBJECT_TYPE_SNAP_META_EXT", "30": "OBJECT_TYPE_INTEGRITY_META", "31": "OBJECT_TYPE_FEXT_TREE", "32": "OBJECT_TYPE_RESERVED_20", "0": "OBJECT_TYPE_INVALID", "255": "OBJECT_TYPE_TEST", "31091": "OBJECT_TYPE_CONTAINER_KEYBAG", "27493": "OBJECT_TYPE_CONTAINER_KEYBAG_2" } }),
  u16("t_flag", { values: { "0": "OBJ_VIRTUAL", "32768": "OBJ_EPHEMERAL", "16384": "OBJ_PHYSICAL", "8192": "OBJ_NOHEADER", "4096": "OBJ_ENCRYPTED", "2048": "OBJ_NONPERSISTENT" } }),
]);

const nx_features_t = struct("nx_features_t", [
  bits("defrag", 1, { at: 0, bit: 0, unit: 8, label: "defrag" }),
  bits("lcfd", 1, { at: 0, bit: 1, unit: 8, label: "lcfd" }),
]);

const nx_rocompat_features_t = struct("nx_rocompat_features_t", [
  u64('value', { endian: "little" }),
]);

const nx_incompat_features_t = struct("nx_incompat_features_t", [
  bits("version1", 1, { at: 0, bit: 0, unit: 8, label: "version1" }),
  bits("version2", 1, { at: 0, bit: 1, unit: 8, label: "version2" }),
  bits("fusion", 1, { at: 0, bit: 8, unit: 8, label: "fusion" }),
]);

const checkpoint_mapping_t = struct("checkpoint_mapping_t", [
  record("cpm_type", o_type_t),
  record("cpm_subtype", o_type_t),
  u32("cpm_size", {  }),
  u32("cpm_pad", {  }),
  u64("cpm_fs_oid", {  }),
  u64("cpm_oid", {  }),
  u64("cpm_paddr", {  }),
]);

const evict_mapping_val_t = struct("evict_mapping_val_t", [
  i64("dst_paddr", {  }),
  u64("len", {  }),
]);

const omap_key_t = struct("omap_key_t", [
  u64("ok_oid", {  }),
  u64("ok_xid", {  }),
]);

const omap_val_t = struct("omap_val_t", [
  u32("ov_flags", {  }),
  u32("ov_size", {  }),
  i64("ov_paddr", {  }),
]);

const omap_snapshot_t = struct("omap_snapshot_t", [
  u32("oms_flags", {  }),
  u32("oms_pad", {  }),
  u64("oms_oid", {  }),
]);

const chunk_info_t = struct("chunk_info_t", [
  u64("ci_xid", {  }),
  u64("ci_addr", {  }),
  u32("ci_block_count", {  }),
  u32("ci_free_count", {  }),
  i64("ci_bitmap_addr", {  }),
]);

const spaceman_free_queue_key_t = struct("spaceman_free_queue_key_t", [
  u64("sfqk_xid", {  }),
  i64("sfqk_paddr", {  }),
]);

const spaceman_free_queue_entry_t = struct("spaceman_free_queue_entry_t", [
  record("sfqe_key", spaceman_free_queue_key_t),
  u64("sfqe_count", {  }),
]);

const spaceman_free_queue_t = struct("spaceman_free_queue_t", [
  u64("sfq_count", {  }),
  u64("sfq_tree_oid", {  }),
  u64("sfq_oldest_xid", {  }),
  u16("sfq_tree_node_limit", {  }),
  u16("sfq_pad16", {  }),
  u32("sfq_pad32", {  }),
  u64("sfq_reserved", {  }),
]);

const spaceman_device_t = struct("spaceman_device_t", [
  u64("sm_block_count", {  }),
  u64("sm_chunk_count", {  }),
  u32("sm_cib_count", {  }),
  u32("sm_cab_count", {  }),
  u64("sm_free_count", {  }),
  u32("sm_addr_offset", {  }),
  u32("sm_reserved", {  }),
  u64("sm_reserved2", {  }),
]);

const spaceman_allocation_zone_boundaries_t = struct("spaceman_allocation_zone_boundaries_t", [
  u64("saz_zone_start", {  }),
  u64("saz_zone_end", {  }),
]);

const spaceman_allocation_zone_info_phys_t = struct("spaceman_allocation_zone_info_phys_t", [
  record("saz_current_boundaries", spaceman_allocation_zone_boundaries_t),
]);

const nx_reap_list_entry_t = struct("nx_reap_list_entry_t", [
  u32("nrle_next", {  }),
  u32("nrle_flags", {  }),
  u32("nrle_type", {  }),
  u32("nrle_size", {  }),
  u64("nrle_fs_oid", {  }),
  u64("nrle_oid", {  }),
  u64("nrle_xid", {  }),
]);

const kb_locker_t = struct("kb_locker_t", [
  u16("kl_version", {  }),
  u16("kl_nkeys", {  }),
  u32("kl_nbytes", {  }),
  pad(8),
]);

const wrapped_crypto_state_t = struct("wrapped_crypto_state_t", [
  u16("major_version", {  }),
  u16("minor_version", {  }),
  u32("cpflags", {  }),
  u32("persistent_class", {  }),
  u32("key_os_version", {  }),
  u16("key_revision", {  }),
  u16("key_len", {  }),
]);

const wrapped_meta_crypto_state_t = struct("wrapped_meta_crypto_state_t", [
  u16("major_version", {  }),
  u16("minor_version", {  }),
  u32("cpflags", {  }),
  u32("persistent_class", {  }),
  u32("key_os_version", {  }),
  u16("key_revision", {  }),
  u16("unused", {  }),
]);

const j_crypto_val_t = struct("j_crypto_val_t", [
  u32("refcnt", {  }),
  record("state", wrapped_crypto_state_t),
]);

const apfs_fs_flags_t = struct("apfs_fs_flags_t", [
  bits("APFS_FS_UNENCRYPTED", 1, { at: 0, bit: 0, unit: 8, label: "APFS_FS_UNENCRYPTED" }),
  bits("APFS_FS_RESERVED_2", 1, { at: 0, bit: 1, unit: 8, label: "APFS_FS_RESERVED_2" }),
  bits("APFS_FS_RESERVED_4", 1, { at: 0, bit: 2, unit: 8, label: "APFS_FS_RESERVED_4" }),
  bits("APFS_FS_ONEKEY", 1, { at: 0, bit: 3, unit: 8, label: "APFS_FS_ONEKEY" }),
  bits("APFS_FS_SPILLEDOVER", 1, { at: 0, bit: 4, unit: 8, label: "APFS_FS_SPILLEDOVER" }),
  bits("APFS_FS_RUN_SPILLOVER_CLEANER", 1, { at: 0, bit: 5, unit: 8, label: "APFS_FS_RUN_SPILLOVER_CLEANER" }),
  bits("APFS_FS_ALWAYS_CHECK_EXTENTREF", 1, { at: 0, bit: 6, unit: 8, label: "APFS_FS_ALWAYS_CHECK_EXTENTREF" }),
  bits("APFS_FS_RESERVED_80", 1, { at: 0, bit: 7, unit: 8, label: "APFS_FS_RESERVED_80" }),
  bits("APFS_FS_RESERVED_100", 1, { at: 0, bit: 8, unit: 8, label: "APFS_FS_RESERVED_100" }),
]);

const apfs_incompatible_features_t = struct("apfs_incompatible_features_t", [
  bits("APFS_INCOMPAT_CASE_INSENSITIVE", 1, { at: 0, bit: 0, unit: 8, label: "APFS_INCOMPAT_CASE_INSENSITIVE" }),
  bits("APFS_INCOMPAT_DATALESS_SNAPS", 1, { at: 0, bit: 1, unit: 8, label: "APFS_INCOMPAT_DATALESS_SNAPS" }),
  bits("APFS_INCOMPAT_ENC_ROLLED", 1, { at: 0, bit: 2, unit: 8, label: "APFS_INCOMPAT_ENC_ROLLED" }),
  bits("APFS_INCOMPAT_NORMALIZATION_INSENSITIVE", 1, { at: 0, bit: 3, unit: 8, label: "APFS_INCOMPAT_NORMALIZATION_INSENSITIVE" }),
  bits("APFS_INCOMPAT_INCOMPLETE_RESTORE", 1, { at: 0, bit: 4, unit: 8, label: "APFS_INCOMPAT_INCOMPLETE_RESTORE" }),
  bits("APFS_INCOMPAT_SEALED_VOLUME", 1, { at: 0, bit: 5, unit: 8, label: "APFS_INCOMPAT_SEALED_VOLUME" }),
  bits("APFS_INCOMPAT_RESERVED_40", 1, { at: 0, bit: 6, unit: 8, label: "APFS_INCOMPAT_RESERVED_40" }),
]);

const j_inode_flags_t = struct("j_inode_flags_t", [
  bits("INODE_IS_APFS_PRIVATE", 1, { at: 0, bit: 0, unit: 8, label: "INODE_IS_APFS_PRIVATE" }),
  bits("INODE_MAINTAIN_DIR_STATS", 1, { at: 0, bit: 1, unit: 8, label: "INODE_MAINTAIN_DIR_STATS" }),
  bits("INODE_DIR_STATS_ORIGIN", 1, { at: 0, bit: 2, unit: 8, label: "INODE_DIR_STATS_ORIGIN" }),
  bits("INODE_PROT_CLASS_EXPLICIT", 1, { at: 0, bit: 3, unit: 8, label: "INODE_PROT_CLASS_EXPLICIT" }),
  bits("INODE_WAS_CLONED", 1, { at: 0, bit: 4, unit: 8, label: "INODE_WAS_CLONED" }),
  bits("INODE_FLAGS_UNUSED", 1, { at: 0, bit: 5, unit: 8, label: "INODE_FLAGS_UNUSED" }),
  bits("INODE_HAS_SECURITY_EA", 1, { at: 0, bit: 6, unit: 8, label: "INODE_HAS_SECURITY_EA" }),
  bits("INODE_BEING_TRUNCATED", 1, { at: 0, bit: 7, unit: 8, label: "INODE_BEING_TRUNCATED" }),
  bits("INODE_HAS_FINDER_INFO", 1, { at: 0, bit: 8, unit: 8, label: "INODE_HAS_FINDER_INFO" }),
  bits("INODE_IS_SPARSE", 1, { at: 0, bit: 9, unit: 8, label: "INODE_IS_SPARSE" }),
  bits("INODE_WAS_EVER_CLONED", 1, { at: 0, bit: 10, unit: 8, label: "INODE_WAS_EVER_CLONED" }),
  bits("INODE_ACTIVE_FILE_TRIMMED", 1, { at: 0, bit: 11, unit: 8, label: "INODE_ACTIVE_FILE_TRIMMED" }),
  bits("INODE_PINNED_TO_MAIN", 1, { at: 0, bit: 12, unit: 8, label: "INODE_PINNED_TO_MAIN" }),
  bits("INODE_PINNED_TO_TIER2", 1, { at: 0, bit: 13, unit: 8, label: "INODE_PINNED_TO_TIER2" }),
  bits("INODE_HAS_RSRC_FORK", 1, { at: 0, bit: 14, unit: 8, label: "INODE_HAS_RSRC_FORK" }),
  bits("INODE_NO_RSRC_FORK", 1, { at: 0, bit: 15, unit: 8, label: "INODE_NO_RSRC_FORK" }),
  bits("INODE_ALLOCATION_SPILLEDOVER", 1, { at: 0, bit: 16, unit: 8, label: "INODE_ALLOCATION_SPILLEDOVER" }),
  bits("INODE_FAST_PROMOTE", 1, { at: 0, bit: 17, unit: 8, label: "INODE_FAST_PROMOTE" }),
  bits("INODE_HAS_UNCOMPRESSED_SIZE", 1, { at: 0, bit: 18, unit: 8, label: "INODE_HAS_UNCOMPRESSED_SIZE" }),
  bits("INODE_IS_PURGEABLE", 1, { at: 0, bit: 19, unit: 8, label: "INODE_IS_PURGEABLE" }),
  bits("INODE_WANTS_TO_BE_PURGEABLE", 1, { at: 0, bit: 20, unit: 8, label: "INODE_WANTS_TO_BE_PURGEABLE" }),
  bits("INODE_IS_SYNC_ROOT", 1, { at: 0, bit: 21, unit: 8, label: "INODE_IS_SYNC_ROOT" }),
  bits("INODE_SNAPSHOT_COW_EXEMPTION", 1, { at: 0, bit: 22, unit: 8, label: "INODE_SNAPSHOT_COW_EXEMPTION" }),
]);

const j_inode_val_t = struct("j_inode_val_t", [
  u64("parent_id", {  }),
  u64("private_id", {  }),
]);

const j_drec_key_t = struct("j_drec_key_t", [
  u16("name_len", {  }),
]);

const j_drec_hashed_len_t = struct("j_drec_hashed_len_t", [
  bits("length", 10, { at: 0, bit: 0, unit: 4, label: "length" }),
  bits("hash", 22, { at: 0, bit: 10, unit: 4, label: "hash" }),
]);

const j_drec_hashed_key_t = struct("j_drec_hashed_key_t", [
  record("name_len_and_hash", j_drec_hashed_len_t),
]);

const dir_rec_flags_t = struct("dir_rec_flags_t", [
  bits("DREC_TYPE_MASK", 8, { at: 0, bit: 0, unit: 8, label: "DREC_TYPE_MASK" }),
  bits("RESERVED_10", 1, { at: 0, bit: 8, unit: 8, label: "RESERVED_10" }),
]);

const j_drec_val_t = struct("j_drec_val_t", [
  u64("file_id", {  }),
  u64("date_added", {  }),
  record("flags", dir_rec_flags_t),
]);

const j_dir_stats_val_t = struct("j_dir_stats_val_t", [
  u64("num_children", {  }),
  u64("total_size", {  }),
  u64("chained_key", {  }),
  u64("gen_count", {  }),
]);

const j_xattr_key_t = struct("j_xattr_key_t", [
  u16("name_len", {  }),
]);

const j_xattr_flags_t = struct("j_xattr_flags_t", [
  bits("XATTR_DATA_STREAM", 1, { at: 0, bit: 0, unit: 2, label: "XATTR_DATA_STREAM" }),
  bits("XATTR_DATA_EMBEDDED", 1, { at: 0, bit: 1, unit: 2, label: "XATTR_DATA_EMBEDDED" }),
  bits("XATTR_FILE_SYSTEM_OWNED", 1, { at: 0, bit: 2, unit: 2, label: "XATTR_FILE_SYSTEM_OWNED" }),
  bits("XATTR_RESERVED_8", 1, { at: 0, bit: 3, unit: 2, label: "XATTR_RESERVED_8" }),
]);

const j_xattr_val_t = struct("j_xattr_val_t", [
  record("flags", j_xattr_flags_t),
  u16("xdata_len", {  }),
]);

const j_inode_bsd_flags = struct("j_inode_bsd_flags", [
  bits("APFS_UF_NODUMP", 1, { at: 0, bit: 0, unit: 4, label: "APFS_UF_NODUMP" }),
  bits("APFS_UF_IMMUTABLE", 1, { at: 0, bit: 1, unit: 4, label: "APFS_UF_IMMUTABLE" }),
  bits("APFS_UF_APPEND", 1, { at: 0, bit: 2, unit: 4, label: "APFS_UF_APPEND" }),
  bits("APFS_UF_OPAQUE", 1, { at: 0, bit: 3, unit: 4, label: "APFS_UF_OPAQUE" }),
  bits("APFS_UF_NOUNLINK", 1, { at: 0, bit: 4, unit: 4, label: "APFS_UF_NOUNLINK" }),
  bits("APFS_UF_COMPRESSED", 1, { at: 0, bit: 5, unit: 4, label: "APFS_UF_COMPRESSED" }),
  bits("APFS_UF_TRACKED", 1, { at: 0, bit: 6, unit: 4, label: "APFS_UF_TRACKED" }),
  bits("APFS_UF_DATAVAULT", 1, { at: 0, bit: 7, unit: 4, label: "APFS_UF_DATAVAULT" }),
  bits("reserved", 7, { at: 0, bit: 8, unit: 4, label: "reserved" }),
  bits("APFS_UF_HIDDEN", 1, { at: 0, bit: 15, unit: 4, label: "APFS_UF_HIDDEN" }),
  bits("APFS_SF_ARCHIVED", 1, { at: 0, bit: 16, unit: 4, label: "APFS_SF_ARCHIVED" }),
  bits("APFS_SF_IMMUTABLE", 1, { at: 0, bit: 17, unit: 4, label: "APFS_SF_IMMUTABLE" }),
  bits("APFS_SF_APPEND", 1, { at: 0, bit: 18, unit: 4, label: "APFS_SF_APPEND" }),
  bits("APFS_SF_RESTRICTED", 1, { at: 0, bit: 19, unit: 4, label: "APFS_SF_RESTRICTED" }),
  bits("APFS_SF_NOUNLINK", 1, { at: 0, bit: 20, unit: 4, label: "APFS_SF_NOUNLINK" }),
  bits("APFS_SF_SNAPSHOT", 1, { at: 0, bit: 21, unit: 4, label: "APFS_SF_SNAPSHOT" }),
  bits("APFS_SF_FIRMLINK", 1, { at: 0, bit: 22, unit: 4, label: "APFS_SF_FIRMLINK" }),
  bits("APFS_SF_DATALESS", 1, { at: 0, bit: 29, unit: 4, label: "APFS_SF_DATALESS" }),
]);

const j_phys_ext_val_t = struct("j_phys_ext_val_t", [
  u64("len_and_kind", {  }),
  u64("owning_obj_id", {  }),
  u32("refcnt", {  }),
]);

const j_file_extent_key_t = struct("j_file_extent_key_t", [
  u64("logical_addr", {  }),
]);

const j_file_extent_val_t = struct("j_file_extent_val_t", [
  u64("len_and_flags", {  }),
  u64("phys_block_num", {  }),
  u64("crypto_id", {  }),
]);

const j_dstream_id_val_t = struct("j_dstream_id_val_t", [
  u32("refcnt", {  }),
]);

const j_dstream_t = struct("j_dstream_t", [
  u64("size", {  }),
  u64("alloced_size", {  }),
  u64("default_crypto_id", {  }),
  u64("total_bytes_written", {  }),
  u64("total_bytes_read", {  }),
]);

const j_xattr_dstream_t = struct("j_xattr_dstream_t", [
  u64("xattr_obj_id", {  }),
  record("dstream", j_dstream_t),
]);

const xf_blob_t = struct("xf_blob_t", [
  u16("xf_num_exts", {  }),
  u16("xf_used_data", {  }),
]);

const x_flags_t = struct("x_flags_t", [
  bits("XF_DATA_DEPENDENT", 1, { at: 0, bit: 0, unit: 1, label: "XF_DATA_DEPENDENT" }),
  bits("XF_DO_NOT_COPY", 1, { at: 0, bit: 1, unit: 1, label: "XF_DO_NOT_COPY" }),
  bits("XF_RESERVED_4", 1, { at: 0, bit: 2, unit: 1, label: "XF_RESERVED_4" }),
  bits("XF_CHILDREN_INHERIT", 1, { at: 0, bit: 3, unit: 1, label: "XF_CHILDREN_INHERIT" }),
  bits("XF_USER_FIELD", 1, { at: 0, bit: 4, unit: 1, label: "XF_USER_FIELD" }),
  bits("XF_SYSTEM_FIELD", 1, { at: 0, bit: 5, unit: 1, label: "XF_SYSTEM_FIELD" }),
  bits("XF_RESERVED_40", 1, { at: 0, bit: 6, unit: 1, label: "XF_RESERVED_40" }),
  bits("XF_RESERVED_80", 1, { at: 0, bit: 7, unit: 1, label: "XF_RESERVED_80" }),
]);

const x_field_t = struct("x_field_t", [
  u8("x_type", { values: { "1": "DREC_EXT_TYPE_SIBLING_ID", "1": "INO_EXT_TYPE_SNAP_XID", "2": "INO_EXT_TYPE_DELTRA_TREE_OID", "3": "INO_EXT_TYPE_DOCUMENT_ID", "4": "INO_EXT_TYPE_NAME", "5": "INO_EXT_TYPE_PREV_FSIZE", "6": "INO_EXT_TYPE_RESERVED_6", "7": "INO_EXT_TYPE_FINDER_INFO", "8": "INO_EXT_TYPE_DSTREAM", "9": "INO_EXT_TYPE_RESERVED_9", "10": "INO_EXT_TYPE_DIR_STATS_KEY", "11": "INO_EXT_TYPE_FS_UUID", "12": "INO_EXT_TYPE_RESERVED_12", "13": "INO_EXT_TYPE_SPARSE_BYTES", "14": "INO_EXT_TYPE_RDEV", "15": "INO_EXT_TYPE_PURGEABLE_FLAGS", "16": "INO_EXT_TYPE_ORIG_SYNC_ROOT_ID" } }),
  record("x_flags", x_flags_t),
  u16("x_size", {  }),
]);

const j_sibling_key_t = struct("j_sibling_key_t", [
  u64("sibling_id", {  }),
]);

const j_sibling_val_t = struct("j_sibling_val_t", [
  u64("parent_id", {  }),
  u16("name_len", {  }),
]);

const j_sibling_map_val_t = struct("j_sibling_map_val_t", [
  u64("file_id", {  }),
]);

const snap_meta_flags_t = struct("snap_meta_flags_t", [
  bits("SNAP_META_PENDING_DATALESS", 1, { at: 0, bit: 0, unit: 4, label: "SNAP_META_PENDING_DATALESS" }),
  bits("SNAP_META_MERGE_IN_PROGRESS", 1, { at: 0, bit: 1, unit: 4, label: "SNAP_META_MERGE_IN_PROGRESS" }),
]);

const j_snap_metadata_val_t = struct("j_snap_metadata_val_t", [
  u64("extentref_tree_oid", {  }),
  u64("sblock_oid", {  }),
]);

const j_snap_name_key_t = struct("j_snap_name_key_t", [
  u16("name_len", {  }),
]);

const j_snap_name_val_t = struct("j_snap_name_val_t", [
  u64("snap_xid", {  }),
]);

const j_file_info_lba_t = struct("j_file_info_lba_t", [
  bits("lba", 56, { at: 0, bit: 0, unit: 8, label: "lba" }),
  bits("type", 8, { at: 0, bit: 56, unit: 8, label: "type" }),
]);

const j_file_info_key_t = struct("j_file_info_key_t", [
  record("info_and_lba", j_file_info_lba_t),
]);

const j_file_data_hash_val_t = struct("j_file_data_hash_val_t", [
  u16("hashed_len", {  }),
  u8("hash_size", {  }),
]);

const j_file_info_val_t = struct("j_file_info_val_t", [
  record("dhash", j_file_data_hash_val_t),
]);

const j_key_t = struct("j_key_t", [
  bits("obj_id", 60, { at: 0, bit: 0, unit: 8, label: "obj_id" }),
  bits("obj_type", 4, { at: 0, bit: 60, unit: 8, label: "obj_type" }),
]);

const nloc_t = struct("nloc_t", [
  u16("off", {  }),
  u16("len", {  }),
]);

const kvloc_t = struct("kvloc_t", [
  record("key_loc", nloc_t),
  record("val_loc", nloc_t),
]);

const kvoff_t = struct("kvoff_t", [
  u16("key_off", {  }),
  u16("val_off", {  }),
]);

const btn_flags_t = struct("btn_flags_t", [
  bits("BTNODE_ROOT", 1, { at: 0, bit: 0, unit: 2, label: "BTNODE_ROOT" }),
  bits("BTNODE_LEAF", 1, { at: 0, bit: 1, unit: 2, label: "BTNODE_LEAF" }),
  bits("BTNODE_FIXED_KV_SIZE", 1, { at: 0, bit: 2, unit: 2, label: "BTNODE_FIXED_KV_SIZE" }),
  bits("BTNODE_HASHED", 1, { at: 0, bit: 3, unit: 2, label: "BTNODE_HASHED" }),
  bits("BTNODE_NOHEADER", 1, { at: 0, bit: 4, unit: 2, label: "BTNODE_NOHEADER" }),
  bits("BTNODE_CHECK_KOFF_INVAL", 1, { at: 0, bit: 15, unit: 2, label: "BTNODE_CHECK_KOFF_INVAL" }),
]);

const bt_flags_t = struct("bt_flags_t", [
  bits("BTREE_UINT64_KEYS", 1, { at: 0, bit: 0, unit: 4, label: "BTREE_UINT64_KEYS" }),
  bits("BTREE_SEQUENTIAL_INSERT", 1, { at: 0, bit: 1, unit: 4, label: "BTREE_SEQUENTIAL_INSERT" }),
  bits("BTREE_ALLOW_GHOSTS", 1, { at: 0, bit: 2, unit: 4, label: "BTREE_ALLOW_GHOSTS" }),
  bits("BTREE_EPHEMERAL", 1, { at: 0, bit: 3, unit: 4, label: "BTREE_EPHEMERAL" }),
  bits("BTREE_PHYSICAL", 1, { at: 0, bit: 4, unit: 4, label: "BTREE_PHYSICAL" }),
  bits("BTREE_NONPERSISTENT", 1, { at: 0, bit: 5, unit: 4, label: "BTREE_NONPERSISTENT" }),
  bits("BTREE_KV_NONALIGNED", 1, { at: 0, bit: 6, unit: 4, label: "BTREE_KV_NONALIGNED" }),
  bits("BTREE_HASHED", 1, { at: 0, bit: 7, unit: 4, label: "BTREE_HASHED" }),
  bits("BTREE_NOHEADER", 1, { at: 0, bit: 8, unit: 4, label: "BTREE_NOHEADER" }),
]);

const btree_info_fixed_t = struct("btree_info_fixed_t", [
  record("bt_flags", bt_flags_t),
  u32("bt_node_size", {  }),
  u32("bt_key_size", {  }),
  u32("bt_val_size", {  }),
]);

const btree_info_t = struct("btree_info_t", [
  record("bt_fixed", btree_info_fixed_t),
  u32("bt_longest_key", {  }),
  u32("bt_longest_val", {  }),
  u64("bt_key_count", {  }),
  u64("bt_node_count", {  }),
]);

const btn_index_node_val_t = struct("btn_index_node_val_t", [
  u64("binv_child_oid", {  }),
]);

export default definePack({
  name: "Apple File System (APFS)",
  endian: "little",
  pointerSize: 8,
  types: [prange, o_type_t, nx_features_t, nx_rocompat_features_t, nx_incompat_features_t, checkpoint_mapping_t, evict_mapping_val_t, omap_key_t, omap_val_t, omap_snapshot_t, chunk_info_t, spaceman_free_queue_key_t, spaceman_free_queue_entry_t, spaceman_free_queue_t, spaceman_device_t, spaceman_allocation_zone_boundaries_t, spaceman_allocation_zone_info_phys_t, nx_reap_list_entry_t, kb_locker_t, wrapped_crypto_state_t, wrapped_meta_crypto_state_t, j_crypto_val_t, apfs_fs_flags_t, apfs_incompatible_features_t, j_inode_flags_t, j_inode_val_t, j_drec_key_t, j_drec_hashed_len_t, j_drec_hashed_key_t, dir_rec_flags_t, j_drec_val_t, j_dir_stats_val_t, j_xattr_key_t, j_xattr_flags_t, j_xattr_val_t, j_inode_bsd_flags, j_phys_ext_val_t, j_file_extent_key_t, j_file_extent_val_t, j_dstream_id_val_t, j_dstream_t, j_xattr_dstream_t, xf_blob_t, x_flags_t, x_field_t, j_sibling_key_t, j_sibling_val_t, j_sibling_map_val_t, snap_meta_flags_t, j_snap_metadata_val_t, j_snap_name_key_t, j_snap_name_val_t, j_file_info_lba_t, j_file_info_key_t, j_file_data_hash_val_t, j_file_info_val_t, j_key_t, nloc_t, kvloc_t, kvoff_t, btn_flags_t, bt_flags_t, btree_info_fixed_t, btree_info_t, btn_index_node_val_t],
  nodes: {
    "entry": structNode(apfs_incompatible_features_t, { label: "apfs_incompatible_features_t（入口）" }),
    "prange": structNode(prange, { label: "prange" }),
    "o_type_t": structNode(o_type_t, { label: "o_type_t" }),
    "nx_features_t": structNode(nx_features_t, { label: "nx_features_t" }),
    "nx_rocompat_features_t": structNode(nx_rocompat_features_t, { label: "nx_rocompat_features_t" }),
    "nx_incompat_features_t": structNode(nx_incompat_features_t, { label: "nx_incompat_features_t" }),
    "checkpoint_mapping_t": structNode(checkpoint_mapping_t, { label: "checkpoint_mapping_t" }),
    "evict_mapping_val_t": structNode(evict_mapping_val_t, { label: "evict_mapping_val_t" }),
    "omap_key_t": structNode(omap_key_t, { label: "omap_key_t" }),
    "omap_val_t": structNode(omap_val_t, { label: "omap_val_t" }),
    "omap_snapshot_t": structNode(omap_snapshot_t, { label: "omap_snapshot_t" }),
    "chunk_info_t": structNode(chunk_info_t, { label: "chunk_info_t" }),
    "spaceman_free_queue_key_t": structNode(spaceman_free_queue_key_t, { label: "spaceman_free_queue_key_t" }),
    "spaceman_free_queue_entry_t": structNode(spaceman_free_queue_entry_t, { label: "spaceman_free_queue_entry_t" }),
    "spaceman_free_queue_t": structNode(spaceman_free_queue_t, { label: "spaceman_free_queue_t" }),
    "spaceman_device_t": structNode(spaceman_device_t, { label: "spaceman_device_t" }),
    "spaceman_allocation_zone_boundaries_t": structNode(spaceman_allocation_zone_boundaries_t, { label: "spaceman_allocation_zone_boundaries_t" }),
    "spaceman_allocation_zone_info_phys_t": structNode(spaceman_allocation_zone_info_phys_t, { label: "spaceman_allocation_zone_info_phys_t" }),
    "nx_reap_list_entry_t": structNode(nx_reap_list_entry_t, { label: "nx_reap_list_entry_t" }),
    "kb_locker_t": structNode(kb_locker_t, { label: "kb_locker_t" }),
    "wrapped_crypto_state_t": structNode(wrapped_crypto_state_t, { label: "wrapped_crypto_state_t" }),
    "wrapped_meta_crypto_state_t": structNode(wrapped_meta_crypto_state_t, { label: "wrapped_meta_crypto_state_t" }),
    "j_crypto_val_t": structNode(j_crypto_val_t, { label: "j_crypto_val_t" }),
    "apfs_fs_flags_t": structNode(apfs_fs_flags_t, { label: "apfs_fs_flags_t" }),
    "j_inode_flags_t": structNode(j_inode_flags_t, { label: "j_inode_flags_t" }),
    "j_inode_val_t": structNode(j_inode_val_t, { label: "j_inode_val_t" }),
    "j_drec_key_t": structNode(j_drec_key_t, { label: "j_drec_key_t" }),
    "j_drec_hashed_len_t": structNode(j_drec_hashed_len_t, { label: "j_drec_hashed_len_t" }),
    "j_drec_hashed_key_t": structNode(j_drec_hashed_key_t, { label: "j_drec_hashed_key_t" }),
    "dir_rec_flags_t": structNode(dir_rec_flags_t, { label: "dir_rec_flags_t" }),
    "j_drec_val_t": structNode(j_drec_val_t, { label: "j_drec_val_t" }),
    "j_dir_stats_val_t": structNode(j_dir_stats_val_t, { label: "j_dir_stats_val_t" }),
    "j_xattr_key_t": structNode(j_xattr_key_t, { label: "j_xattr_key_t" }),
    "j_xattr_flags_t": structNode(j_xattr_flags_t, { label: "j_xattr_flags_t" }),
    "j_xattr_val_t": structNode(j_xattr_val_t, { label: "j_xattr_val_t" }),
    "j_inode_bsd_flags": structNode(j_inode_bsd_flags, { label: "j_inode_bsd_flags" }),
    "j_phys_ext_val_t": structNode(j_phys_ext_val_t, { label: "j_phys_ext_val_t" }),
    "j_file_extent_key_t": structNode(j_file_extent_key_t, { label: "j_file_extent_key_t" }),
    "j_file_extent_val_t": structNode(j_file_extent_val_t, { label: "j_file_extent_val_t" }),
    "j_dstream_id_val_t": structNode(j_dstream_id_val_t, { label: "j_dstream_id_val_t" }),
    "j_dstream_t": structNode(j_dstream_t, { label: "j_dstream_t" }),
    "j_xattr_dstream_t": structNode(j_xattr_dstream_t, { label: "j_xattr_dstream_t" }),
    "xf_blob_t": structNode(xf_blob_t, { label: "xf_blob_t" }),
    "x_flags_t": structNode(x_flags_t, { label: "x_flags_t" }),
    "x_field_t": structNode(x_field_t, { label: "x_field_t" }),
    "j_sibling_key_t": structNode(j_sibling_key_t, { label: "j_sibling_key_t" }),
    "j_sibling_val_t": structNode(j_sibling_val_t, { label: "j_sibling_val_t" }),
    "j_sibling_map_val_t": structNode(j_sibling_map_val_t, { label: "j_sibling_map_val_t" }),
    "snap_meta_flags_t": structNode(snap_meta_flags_t, { label: "snap_meta_flags_t" }),
    "j_snap_metadata_val_t": structNode(j_snap_metadata_val_t, { label: "j_snap_metadata_val_t" }),
    "j_snap_name_key_t": structNode(j_snap_name_key_t, { label: "j_snap_name_key_t" }),
    "j_snap_name_val_t": structNode(j_snap_name_val_t, { label: "j_snap_name_val_t" }),
    "j_file_info_lba_t": structNode(j_file_info_lba_t, { label: "j_file_info_lba_t" }),
    "j_file_info_key_t": structNode(j_file_info_key_t, { label: "j_file_info_key_t" }),
    "j_file_data_hash_val_t": structNode(j_file_data_hash_val_t, { label: "j_file_data_hash_val_t" }),
    "j_file_info_val_t": structNode(j_file_info_val_t, { label: "j_file_info_val_t" }),
    "j_key_t": structNode(j_key_t, { label: "j_key_t" }),
    "nloc_t": structNode(nloc_t, { label: "nloc_t" }),
    "kvloc_t": structNode(kvloc_t, { label: "kvloc_t" }),
    "kvoff_t": structNode(kvoff_t, { label: "kvoff_t" }),
    "btn_flags_t": structNode(btn_flags_t, { label: "btn_flags_t" }),
    "bt_flags_t": structNode(bt_flags_t, { label: "bt_flags_t" }),
    "btree_info_fixed_t": structNode(btree_info_fixed_t, { label: "btree_info_fixed_t" }),
    "btree_info_t": structNode(btree_info_t, { label: "btree_info_t" }),
    "btn_index_node_val_t": structNode(btn_index_node_val_t, { label: "btn_index_node_val_t" }),
  },
});


/*
未移植项：
- nx_superblock_t.nx_o: 类型 obj_phys_t 不可移植
- checkpoint_map_phys_t.cpm_o: 类型 obj_phys_t 不可移植
- omap_phys_t.om_o: 类型 obj_phys_t 不可移植
- chunk_info_block_t.cib_o: 类型 obj_phys_t 不可移植
- cib_addr_block_t.cab_o: 类型 obj_phys_t 不可移植
- spaceman_phys_t.sm_o: 类型 obj_phys_t 不可移植
- nx_reaper_phys_t.nr_o: 类型 obj_phys_t 不可移植
- nx_reap_list_phys_t.nrl_o: 类型 obj_phys_t 不可移植
- keybag_entry_t.ke_uuid: 类型 type_GUID 不可移植
- media_keybag_t.mk_obj: 类型 mk_obj_t 不可移植
- apfs_superblock_t.apfs_o: 类型 obj_phys_t 不可移植
- j_inode_val_t.create_time: 类型 type_time64_t 不可移植
- j_snap_metadata_val_t.create_time: 类型 type_time64_t 不可移植
*/
