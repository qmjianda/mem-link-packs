/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/xilinx_bootgen.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const zynqmp_AuthenticationCertificationHeader = struct("zynqmp_AuthenticationCertificationHeader", [
  bits("public_algorithm", 2, { at: 0, bit: 0, unit: 4, label: "public_algorithm" }),
  bits("hash_algorithm", 2, { at: 0, bit: 2, unit: 4, label: "hash_algorithm" }),
  bits("public_strength", 4, { at: 0, bit: 4, unit: 4, label: "public_strength" }),
  bits("spk_enable", 1, { at: 0, bit: 8, unit: 4, label: "spk_enable" }),
  bits("ppk_key_source", 2, { at: 0, bit: 9, unit: 4, label: "ppk_key_source" }),
  bits("ppk_key_type", 1, { at: 0, bit: 11, unit: 4, label: "ppk_key_type" }),
  bits("authentication_certificate_version", 2, { at: 0, bit: 12, unit: 4, label: "authentication_certificate_version" }),
  bits("authentication_certificate_format", 2, { at: 0, bit: 14, unit: 4, label: "authentication_certificate_format" }),
  bits("ppk_key_select", 2, { at: 0, bit: 16, unit: 4, label: "ppk_key_select" }),
  bits("spk_user_efuse_select", 2, { at: 0, bit: 18, unit: 4, label: "spk_user_efuse_select" }),
]);

const zynqmp_PartitionAttributeBits = struct("zynqmp_PartitionAttributeBits", [
  bits("trustzone", 1, { at: 0, bit: 0, unit: 4, label: "trustzone" }),
  bits("exception_level", 2, { at: 0, bit: 1, unit: 4, label: "exception_level" }),
  bits("a5x_exec_state", 1, { at: 0, bit: 3, unit: 4, label: "a5x_exec_state" }),
  bits("destination_device", 3, { at: 0, bit: 4, unit: 4, label: "destination_device" }),
  bits("encryption_present", 1, { at: 0, bit: 7, unit: 4, label: "encryption_present" }),
  bits("destination_cpu", 4, { at: 0, bit: 8, unit: 4, label: "destination_cpu" }),
  bits("checksum_type", 3, { at: 0, bit: 12, unit: 4, label: "checksum_type" }),
  bits("rsa_authentication_certificate_present", 1, { at: 0, bit: 15, unit: 4, label: "rsa_authentication_certificate_present" }),
  bits("partition_owner", 2, { at: 0, bit: 16, unit: 4, label: "partition_owner" }),
  bits("endianness", 1, { at: 0, bit: 18, unit: 4, label: "endianness" }),
  bits("early_handoff", 1, { at: 0, bit: 19, unit: 4, label: "early_handoff" }),
  bits("vector_location", 1, { at: 0, bit: 23, unit: 4, label: "vector_location" }),
]);

const zynqmp_PartitionHeader = struct("zynqmp_PartitionHeader", [
  u32("encrypted_partition_data_word_length", {  }),
  u32("unencrypted_data_word_length", {  }),
  u32("total_partition_word_length", {  }),
]);

const zynqmp_ImageHeaderTable = struct("zynqmp_ImageHeaderTable", [
  u32("version", {  }),
  u32("count_of_image_header", {  }),
  u32("first_partition_header_offset", {  }),
]);

const zynqmp_RegisterInitializationTablePair = struct("zynqmp_RegisterInitializationTablePair", [
  u32("address", {  }),
  u32("value", {  }),
]);

const zynqmp_BootHeaderAttributeBits = struct("zynqmp_BootHeaderAttributeBits", [
  bits("puf_hd", 2, { at: 0, bit: 6, unit: 4, label: "puf_hd" }),
  bits("hashing_select", 2, { at: 0, bit: 8, unit: 4, label: "hashing_select" }),
  bits("cpu_select", 2, { at: 0, bit: 10, unit: 4, label: "cpu_select" }),
  bits("bhdr_rsa", 2, { at: 0, bit: 14, unit: 4, label: "bhdr_rsa" }),
]);

const zynqmp_PufHelperData = struct("zynqmp_PufHelperData", [
  array("data", "u32", 384),
  u32("chash", {  }),
  u16("aux", {  }),
  pad(2),
]);

export default definePack({
  name: "Xilinx Zynq UltraScale+ Boot Image",
  endian: "little",
  pointerSize: 8,
  types: [zynqmp_AuthenticationCertificationHeader, zynqmp_PartitionAttributeBits, zynqmp_PartitionHeader, zynqmp_ImageHeaderTable, zynqmp_RegisterInitializationTablePair, zynqmp_BootHeaderAttributeBits, zynqmp_PufHelperData],
  nodes: {
    "entry": structNode(zynqmp_AuthenticationCertificationHeader, { label: "zynqmp_AuthenticationCertificationHeader（入口）" }),
    "zynqmp_PartitionAttributeBits": structNode(zynqmp_PartitionAttributeBits, { label: "zynqmp_PartitionAttributeBits" }),
    "zynqmp_PartitionHeader": structNode(zynqmp_PartitionHeader, { label: "zynqmp_PartitionHeader" }),
    "zynqmp_ImageHeaderTable": structNode(zynqmp_ImageHeaderTable, { label: "zynqmp_ImageHeaderTable" }),
    "zynqmp_RegisterInitializationTablePair": structNode(zynqmp_RegisterInitializationTablePair, { label: "zynqmp_RegisterInitializationTablePair" }),
    "zynqmp_BootHeaderAttributeBits": structNode(zynqmp_BootHeaderAttributeBits, { label: "zynqmp_BootHeaderAttributeBits" }),
    "zynqmp_PufHelperData": structNode(zynqmp_PufHelperData, { label: "zynqmp_PufHelperData" }),
  },
});


/*
未移植项：
- zynqmp_AuthenticationCertificates.authentication_header: 类型 AuthenticationCertificationHeader 不可移植
- zynqmp_RegisterInitializationTable.register_initialization_pairs: 类型 RegisterInitializationTablePair 不可移植
- zynqmp_BootHeader.arm_vector_table: 类型 ArmVectorTable 不可移植
*/
