/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fs/ext4.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const ext4_super_compat = struct("ext4_super_compat", [
  bits("COMPAT_DIR_PREALLOC", 1, { at: 0, bit: 0, unit: 2, label: "COMPAT_DIR_PREALLOC" }),
  bits("COMPAT_IMAGIC_INODES", 1, { at: 0, bit: 1, unit: 2, label: "COMPAT_IMAGIC_INODES" }),
  bits("COMPAT_HAS_JOURNAL", 1, { at: 0, bit: 2, unit: 2, label: "COMPAT_HAS_JOURNAL" }),
  bits("COMPAT_EXT_ATTR", 1, { at: 0, bit: 3, unit: 2, label: "COMPAT_EXT_ATTR" }),
  bits("COMPAT_RESIZE_INODE", 1, { at: 0, bit: 4, unit: 2, label: "COMPAT_RESIZE_INODE" }),
  bits("COMPAT_DIR_INDEX", 1, { at: 0, bit: 5, unit: 2, label: "COMPAT_DIR_INDEX" }),
  bits("COMPAT_LAZY_BG", 1, { at: 0, bit: 6, unit: 2, label: "COMPAT_LAZY_BG" }),
  bits("COMPAT_EXCLUDE_INODE", 1, { at: 0, bit: 7, unit: 2, label: "COMPAT_EXCLUDE_INODE" }),
  bits("COMPAT_EXCLUDE_BITMAP", 1, { at: 0, bit: 8, unit: 2, label: "COMPAT_EXCLUDE_BITMAP" }),
  bits("COMPAT_SPARSE_SUPER2", 1, { at: 0, bit: 9, unit: 2, label: "COMPAT_SPARSE_SUPER2" }),
  bits("COMPAT_FAST_COMMIT", 1, { at: 0, bit: 10, unit: 2, label: "COMPAT_FAST_COMMIT" }),
  bits("RO_COMPAT_ORPHAN_PRESENT", 1, { at: 0, bit: 12, unit: 2, label: "RO_COMPAT_ORPHAN_PRESENT" }),
]);

const ext4_super_incompat = struct("ext4_super_incompat", [
  bits("INCOMPAT_COMPRESSION", 1, { at: 0, bit: 0, unit: 4, label: "INCOMPAT_COMPRESSION" }),
  bits("INCOMPAT_FILETYPE", 1, { at: 0, bit: 1, unit: 4, label: "INCOMPAT_FILETYPE" }),
  bits("INCOMPAT_RECOVER", 1, { at: 0, bit: 2, unit: 4, label: "INCOMPAT_RECOVER" }),
  bits("INCOMPAT_JOURNAL_DEV", 1, { at: 0, bit: 3, unit: 4, label: "INCOMPAT_JOURNAL_DEV" }),
  bits("INCOMPAT_META_BG", 1, { at: 0, bit: 4, unit: 4, label: "INCOMPAT_META_BG" }),
  bits("INCOMPAT_EXTENTS", 1, { at: 0, bit: 6, unit: 4, label: "INCOMPAT_EXTENTS" }),
  bits("INCOMPAT_64BIT", 1, { at: 0, bit: 7, unit: 4, label: "INCOMPAT_64BIT" }),
  bits("INCOMPAT_MMP", 1, { at: 0, bit: 8, unit: 4, label: "INCOMPAT_MMP" }),
  bits("INCOMPAT_FLEX_BG", 1, { at: 0, bit: 9, unit: 4, label: "INCOMPAT_FLEX_BG" }),
  bits("INCOMPAT_EA_INODE", 1, { at: 0, bit: 10, unit: 4, label: "INCOMPAT_EA_INODE" }),
  bits("INCOMPAT_DIRDATA", 1, { at: 0, bit: 12, unit: 4, label: "INCOMPAT_DIRDATA" }),
  bits("INCOMPAT_CSUM_SEED", 1, { at: 0, bit: 13, unit: 4, label: "INCOMPAT_CSUM_SEED" }),
  bits("INCOMPAT_LARGEDIR", 1, { at: 0, bit: 14, unit: 4, label: "INCOMPAT_LARGEDIR" }),
  bits("INCOMPAT_INLINE_DATA", 1, { at: 0, bit: 15, unit: 4, label: "INCOMPAT_INLINE_DATA" }),
  bits("INCOMPAT_ENCRYPT", 1, { at: 0, bit: 16, unit: 4, label: "INCOMPAT_ENCRYPT" }),
]);

const ext4_super_compat_ro = struct("ext4_super_compat_ro", [
  bits("RO_COMPAT_SPARSE_SUPER", 1, { at: 0, bit: 0, unit: 4, label: "RO_COMPAT_SPARSE_SUPER" }),
  bits("RO_COMPAT_LARGE_FILE", 1, { at: 0, bit: 1, unit: 4, label: "RO_COMPAT_LARGE_FILE" }),
  bits("RO_COMPAT_BTREE_DIR", 1, { at: 0, bit: 2, unit: 4, label: "RO_COMPAT_BTREE_DIR" }),
  bits("RO_COMPAT_HUGE_FILE", 1, { at: 0, bit: 3, unit: 4, label: "RO_COMPAT_HUGE_FILE" }),
  bits("RO_COMPAT_GDT_CSUM", 1, { at: 0, bit: 4, unit: 4, label: "RO_COMPAT_GDT_CSUM" }),
  bits("RO_COMPAT_DIR_NLINK", 1, { at: 0, bit: 5, unit: 4, label: "RO_COMPAT_DIR_NLINK" }),
  bits("RO_COMPAT_EXTRA_ISIZE", 1, { at: 0, bit: 6, unit: 4, label: "RO_COMPAT_EXTRA_ISIZE" }),
  bits("RO_COMPAT_HAS_SNAPSHOT", 1, { at: 0, bit: 7, unit: 4, label: "RO_COMPAT_HAS_SNAPSHOT" }),
  bits("RO_COMPAT_QUOTA", 1, { at: 0, bit: 8, unit: 4, label: "RO_COMPAT_QUOTA" }),
  bits("RO_COMPAT_BIGALLOC", 1, { at: 0, bit: 9, unit: 4, label: "RO_COMPAT_BIGALLOC" }),
  bits("RO_COMPAT_METADATA_CSUM", 1, { at: 0, bit: 10, unit: 4, label: "RO_COMPAT_METADATA_CSUM" }),
  bits("RO_COMPAT_REPLICA", 1, { at: 0, bit: 11, unit: 4, label: "RO_COMPAT_REPLICA" }),
  bits("RO_COMPAT_READONLY", 1, { at: 0, bit: 12, unit: 4, label: "RO_COMPAT_READONLY" }),
  bits("RO_COMPAT_PROJECT", 1, { at: 0, bit: 13, unit: 4, label: "RO_COMPAT_PROJECT" }),
  bits("RO_COMPAT_VERITY", 1, { at: 0, bit: 15, unit: 4, label: "RO_COMPAT_VERITY" }),
  bits("RO_COMPAT_ORPHAN_PRESENT", 1, { at: 0, bit: 16, unit: 4, label: "RO_COMPAT_ORPHAN_PRESENT" }),
]);

const ext4_super_mountopts = struct("ext4_super_mountopts", [
  bits("EXT4_DEFM_DEBUG", 1, { at: 0, bit: 0, unit: 2, label: "EXT4_DEFM_DEBUG" }),
  bits("EXT4_DEFM_BSDGROUPS", 1, { at: 0, bit: 1, unit: 2, label: "EXT4_DEFM_BSDGROUPS" }),
  bits("EXT4_DEFM_XATTR_USER", 1, { at: 0, bit: 2, unit: 2, label: "EXT4_DEFM_XATTR_USER" }),
  bits("EXT4_DEFM_ACL", 1, { at: 0, bit: 3, unit: 2, label: "EXT4_DEFM_ACL" }),
  bits("EXT4_DEFM_UID16", 1, { at: 0, bit: 4, unit: 2, label: "EXT4_DEFM_UID16" }),
  bits("EXT4_DEFM_JMODE_DATA", 1, { at: 0, bit: 5, unit: 2, label: "EXT4_DEFM_JMODE_DATA" }),
  bits("EXT4_DEFM_JMODE_ORDER", 1, { at: 0, bit: 6, unit: 2, label: "EXT4_DEFM_JMODE_ORDER" }),
  bits("EXT4_DEFM_NOBARRIER", 1, { at: 0, bit: 8, unit: 2, label: "EXT4_DEFM_NOBARRIER" }),
  bits("EXT4_DEFM_BLOCK_VALIDITY", 1, { at: 0, bit: 9, unit: 2, label: "EXT4_DEFM_BLOCK_VALIDITY" }),
  bits("EXT4_DEFM_DISCARD", 1, { at: 0, bit: 10, unit: 2, label: "EXT4_DEFM_DISCARD" }),
  bits("EXT4_DEFM_NODELALLOC", 1, { at: 0, bit: 11, unit: 2, label: "EXT4_DEFM_NODELALLOC" }),
]);

const ext4_super_flags = struct("ext4_super_flags", [
  bits("SIGNED_HASH_DIRECTORY", 1, { at: 0, bit: 0, unit: 1, label: "SIGNED_HASH_DIRECTORY" }),
  bits("UNSIGNED_HASH_DIRECTORY", 1, { at: 0, bit: 1, unit: 1, label: "UNSIGNED_HASH_DIRECTORY" }),
  bits("TEST_DEV_CODE", 1, { at: 0, bit: 2, unit: 1, label: "TEST_DEV_CODE" }),
]);

const ext4_super_block = struct("ext4_super_block", [
  u32("s_inodes_count", {  }),
  u32("s_blocks_count_lo", {  }),
  u32("s_r_blocks_count_lo", {  }),
  u32("s_free_blocks_count_lo", {  }),
  u32("s_free_inodes_count", {  }),
  u32("s_first_data_block", {  }),
  u32("s_log_block_size", {  }),
  u32("s_log_cluster_size", {  }),
  u32("s_blocks_per_group", {  }),
  u32("s_clusters_per_group", {  }),
  u32("s_inodes_per_group", {  }),
]);

const ext4_i_mode = struct("ext4_i_mode", [
  bits("S_IXOTH", 1, { at: 0, bit: 0, unit: 2, label: "S_IXOTH" }),
  bits("S_IWOTH", 1, { at: 0, bit: 1, unit: 2, label: "S_IWOTH" }),
  bits("S_IROTH", 1, { at: 0, bit: 2, unit: 2, label: "S_IROTH" }),
  bits("S_IXGRP", 1, { at: 0, bit: 3, unit: 2, label: "S_IXGRP" }),
  bits("S_IWGRP", 1, { at: 0, bit: 4, unit: 2, label: "S_IWGRP" }),
  bits("S_IRGRP", 1, { at: 0, bit: 5, unit: 2, label: "S_IRGRP" }),
  bits("S_IXUSR", 1, { at: 0, bit: 6, unit: 2, label: "S_IXUSR" }),
  bits("S_IWUSR", 1, { at: 0, bit: 7, unit: 2, label: "S_IWUSR" }),
  bits("S_IRUSR", 1, { at: 0, bit: 8, unit: 2, label: "S_IRUSR" }),
  bits("S_ISVTX", 1, { at: 0, bit: 9, unit: 2, label: "S_ISVTX" }),
  bits("S_ISGID", 1, { at: 0, bit: 10, unit: 2, label: "S_ISGID" }),
  bits("S_ISUID", 1, { at: 0, bit: 11, unit: 2, label: "S_ISUID" }),
  bits("S_IFIFO", 1, { at: 0, bit: 12, unit: 2, label: "S_IFIFO" }),
  bits("S_IFCHR", 1, { at: 0, bit: 13, unit: 2, label: "S_IFCHR" }),
  bits("S_IFDIR", 1, { at: 0, bit: 14, unit: 2, label: "S_IFDIR" }),
  bits("S_IFREG", 1, { at: 0, bit: 15, unit: 2, label: "S_IFREG" }),
]);

const ext4_i_flags = struct("ext4_i_flags", [
  bits("EXT4_SECRM_FL", 1, { at: 0, bit: 0, unit: 4, label: "EXT4_SECRM_FL" }),
  bits("EXT4_UNRM_FL", 1, { at: 0, bit: 1, unit: 4, label: "EXT4_UNRM_FL" }),
  bits("EXT4_COMPR_FL", 1, { at: 0, bit: 2, unit: 4, label: "EXT4_COMPR_FL" }),
  bits("EXT4_SYNC_FL", 1, { at: 0, bit: 3, unit: 4, label: "EXT4_SYNC_FL" }),
  bits("EXT4_IMMUTABLE_FL", 1, { at: 0, bit: 4, unit: 4, label: "EXT4_IMMUTABLE_FL" }),
  bits("EXT4_APPEND_FL", 1, { at: 0, bit: 5, unit: 4, label: "EXT4_APPEND_FL" }),
  bits("EXT4_NODUMP_FL", 1, { at: 0, bit: 6, unit: 4, label: "EXT4_NODUMP_FL" }),
  bits("EXT4_NOATIME_FL", 1, { at: 0, bit: 7, unit: 4, label: "EXT4_NOATIME_FL" }),
  bits("EXT4_DIRTY_FL", 1, { at: 0, bit: 8, unit: 4, label: "EXT4_DIRTY_FL" }),
  bits("EXT4_COMPRBLK_FL", 1, { at: 0, bit: 9, unit: 4, label: "EXT4_COMPRBLK_FL" }),
  bits("EXT4_NOCOMPR_FL", 1, { at: 0, bit: 10, unit: 4, label: "EXT4_NOCOMPR_FL" }),
  bits("EXT4_ENCRYPT_FL", 1, { at: 0, bit: 11, unit: 4, label: "EXT4_ENCRYPT_FL" }),
  bits("EXT4_INDEX_FL", 1, { at: 0, bit: 12, unit: 4, label: "EXT4_INDEX_FL" }),
  bits("EXT4_IMAGIC_FL", 1, { at: 0, bit: 13, unit: 4, label: "EXT4_IMAGIC_FL" }),
  bits("EXT4_JOURNAL_DATA_FL", 1, { at: 0, bit: 14, unit: 4, label: "EXT4_JOURNAL_DATA_FL" }),
  bits("EXT4_NOTAIL_FL", 1, { at: 0, bit: 15, unit: 4, label: "EXT4_NOTAIL_FL" }),
  bits("EXT4_DIRSYNC_FL", 1, { at: 0, bit: 16, unit: 4, label: "EXT4_DIRSYNC_FL" }),
  bits("EXT4_TOPDIR_FL", 1, { at: 0, bit: 17, unit: 4, label: "EXT4_TOPDIR_FL" }),
  bits("EXT4_HUGE_FILE_FL", 1, { at: 0, bit: 18, unit: 4, label: "EXT4_HUGE_FILE_FL" }),
  bits("EXT4_EXTENTS_FL", 1, { at: 0, bit: 19, unit: 4, label: "EXT4_EXTENTS_FL" }),
  bits("EXT4_VERITY_FL", 1, { at: 0, bit: 20, unit: 4, label: "EXT4_VERITY_FL" }),
  bits("EXT4_EA_INODE_FL", 1, { at: 0, bit: 21, unit: 4, label: "EXT4_EA_INODE_FL" }),
  bits("EXT4_EOFBLOCKS_FL", 1, { at: 0, bit: 22, unit: 4, label: "EXT4_EOFBLOCKS_FL" }),
  bits("EXT4_SNAPFILE_FL", 1, { at: 0, bit: 24, unit: 4, label: "EXT4_SNAPFILE_FL" }),
  bits("EXT4_SNAPFILE_DELETED_FL", 1, { at: 0, bit: 26, unit: 4, label: "EXT4_SNAPFILE_DELETED_FL" }),
  bits("EXT4_SNAPFILE_SHRUNK_FL", 1, { at: 0, bit: 27, unit: 4, label: "EXT4_SNAPFILE_SHRUNK_FL" }),
  bits("EXT4_INLINE_DATA_FL", 1, { at: 0, bit: 28, unit: 4, label: "EXT4_INLINE_DATA_FL" }),
  bits("EXT4_PROJINHERIT_FL", 1, { at: 0, bit: 29, unit: 4, label: "EXT4_PROJINHERIT_FL" }),
  bits("EXT4_RESERVED_FL", 1, { at: 0, bit: 31, unit: 4, label: "EXT4_RESERVED_FL" }),
]);

const ext4_inode = struct("ext4_inode", [
  record("i_mode", ext4_i_mode),
  u16("i_uid", {  }),
  u32("i_size", {  }),
]);

const ext4_bg_flags = struct("ext4_bg_flags", [
  bits("EXT4_BG_INODE_UNINIT", 1, { at: 0, bit: 0, unit: 1, label: "EXT4_BG_INODE_UNINIT" }),
  bits("EXT4_BG_BLOCK_UNINIT", 1, { at: 0, bit: 1, unit: 1, label: "EXT4_BG_BLOCK_UNINIT" }),
  bits("EXT4_BG_INODE_ZEROED", 1, { at: 0, bit: 2, unit: 1, label: "EXT4_BG_INODE_ZEROED" }),
]);

const ext4_group_desc_64_bit = struct("ext4_group_desc_64_bit", [
  u32("bg_block_bitmap_hi", {  }),
  u32("bg_inode_bitmap_hi", {  }),
  u32("bg_inode_table_hi", {  }),
  u16("bg_free_blocks_count_hi", {  }),
  u16("bg_free_inodes_count_hi", {  }),
  u16("bg_used_dirs_count_hi", {  }),
  u16("bg_itable_unused_hi", {  }),
  u32("bg_exclude_bitmap_hi", {  }),
  u16("bg_block_bitmap_csum_hi", {  }),
  u16("bg_inode_bitmap_csum_hi", {  }),
  pad(4),
]);

export default definePack({
  name: "ext4 volume layout parser (until inodes)",
  endian: "little",
  pointerSize: 8,
  types: [ext4_super_compat, ext4_super_incompat, ext4_super_compat_ro, ext4_super_mountopts, ext4_super_flags, ext4_super_block, ext4_i_mode, ext4_i_flags, ext4_inode, ext4_bg_flags, ext4_group_desc_64_bit],
  nodes: {
    "entry": structNode(ext4_super_block, { label: "ext4_super_block（入口）" }),
    "ext4_super_compat": structNode(ext4_super_compat, { label: "ext4_super_compat" }),
    "ext4_super_incompat": structNode(ext4_super_incompat, { label: "ext4_super_incompat" }),
    "ext4_super_compat_ro": structNode(ext4_super_compat_ro, { label: "ext4_super_compat_ro" }),
    "ext4_super_mountopts": structNode(ext4_super_mountopts, { label: "ext4_super_mountopts" }),
    "ext4_super_flags": structNode(ext4_super_flags, { label: "ext4_super_flags" }),
    "ext4_i_mode": structNode(ext4_i_mode, { label: "ext4_i_mode" }),
    "ext4_i_flags": structNode(ext4_i_flags, { label: "ext4_i_flags" }),
    "ext4_inode": structNode(ext4_inode, { label: "ext4_inode" }),
    "ext4_bg_flags": structNode(ext4_bg_flags, { label: "ext4_bg_flags" }),
    "ext4_group_desc_64_bit": structNode(ext4_group_desc_64_bit, { label: "ext4_group_desc_64_bit" }),
  },
});


/*
未移植项：
- ext4_super_block.s_mtime: 类型 type_time32_t 不可移植
- ext4_inode.i_atime: 类型 type_time32_t 不可移植
- ext4_group_desc_64_bit: 基类 ext4_group_desc 不可移植
*/
