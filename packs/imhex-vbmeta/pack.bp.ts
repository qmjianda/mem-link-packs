/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/vbmeta.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const AvbPropertyDescriptor = struct("AvbPropertyDescriptor", [
  u64("key_num_bytes", {  }),
  u64("value_num_bytes", {  }),
]);

const AvbHashtreeDescriptorFlags = struct("AvbHashtreeDescriptorFlags", [
  bits("AVB_HASHTREE_DESCRIPTOR_FLAGS_DO_NOT_USE_AB", 1, { at: 0, bit: 0, unit: 1, label: "AVB_HASHTREE_DESCRIPTOR_FLAGS_DO_NOT_USE_AB" }),
  bits("AVB_HASHTREE_DESCRIPTOR_FLAGS_CHECK_AT_MOST_ONCE", 1, { at: 0, bit: 1, unit: 1, label: "AVB_HASHTREE_DESCRIPTOR_FLAGS_CHECK_AT_MOST_ONCE" }),
]);

const AvbHashtreeDescriptor = struct("AvbHashtreeDescriptor", [
  u32("dm_verity_version", {  }),
  u64("image_size", {  }),
  u64("tree_offset", {  }),
  u64("tree_size", {  }),
  u32("data_block_size", {  }),
  u32("hash_block_size", {  }),
  u32("fec_num_roots", {  }),
  u64("fec_offset", {  }),
  u64("fec_size", {  }),
  str("hash_algorithm", { size: 32 }),
  u32("partition_name_len", {  }),
  u32("salt_len", {  }),
  u32("root_digest_len", {  }),
  record("flags", AvbHashtreeDescriptorFlags),
  pad(60),
]);

const AvbHashDescriptor = struct("AvbHashDescriptor", [
  u64("image_size", {  }),
  str("hash_algorithm", { size: 32 }),
  u32("partition_name_len", {  }),
  u32("salt_len", {  }),
  u32("digest_len", {  }),
  u32("flags", {  }),
  pad(60),
]);

const AvbKernelCmdlineDescriptor = struct("AvbKernelCmdlineDescriptor", [
  u32("flags", {  }),
  u32("kernel_cmdline_length", {  }),
]);

const AvbChainPartitionDescriptor = struct("AvbChainPartitionDescriptor", [
  u32("rollback_index_location", {  }),
  u32("partition_name_len", {  }),
  u32("public_key_len", {  }),
  pad(64),
]);

export default definePack({
  name: "Android VBMeta image",
  endian: "big",
  pointerSize: 8,
  types: [AvbPropertyDescriptor, AvbHashtreeDescriptorFlags, AvbHashtreeDescriptor, AvbHashDescriptor, AvbKernelCmdlineDescriptor, AvbChainPartitionDescriptor],
  nodes: {
    "entry": structNode(AvbPropertyDescriptor, { label: "AvbPropertyDescriptor（入口）" }),
    "AvbHashtreeDescriptorFlags": structNode(AvbHashtreeDescriptorFlags, { label: "AvbHashtreeDescriptorFlags" }),
    "AvbHashtreeDescriptor": structNode(AvbHashtreeDescriptor, { label: "AvbHashtreeDescriptor" }),
    "AvbHashDescriptor": structNode(AvbHashDescriptor, { label: "AvbHashDescriptor" }),
    "AvbKernelCmdlineDescriptor": structNode(AvbKernelCmdlineDescriptor, { label: "AvbKernelCmdlineDescriptor" }),
    "AvbChainPartitionDescriptor": structNode(AvbChainPartitionDescriptor, { label: "AvbChainPartitionDescriptor" }),
  },
});


/*
未移植项：
- AvbVBMetaImage.header: 类型 AvbVBMetaImageHeader 不可移植
*/
