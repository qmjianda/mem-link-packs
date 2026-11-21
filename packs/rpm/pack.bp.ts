/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/rpm
// 原始 pack：rpm · RPM package v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 1 个动态辅助节点
const RpmLead = struct("RpmLead", [
  bytes("magic", { size: 4, label: "ED AB EE DB" }),
  u8("major", { endian: "big", label: "format major version, 3 or 4" }),
  u8("minor", { endian: "big", label: "format minor version, 0" }),
  u16("type", { values: { "0": "Binary", "1": "Source" }, label: "binary or source package" }),
  u16("archNum", { endian: "big", label: "architecture the package was built for, an rpm-internal number" }),
  str("name", { size: 66, label: "package name and version, NUL-padded" }),
  u16("osNum", { endian: "big", label: "target operating system, an rpm-internal number (1 is Linux)" }),
  u16("signatureType", { values: { "5": "HeaderSignature" }, label: "how the signature is stored; always 5" }),
  bytes("reserved", { size: 16, label: "reserved, zero" }),
]);

const RpmIndexEntry = struct("RpmIndexEntry", [
  i32("tag", { endian: "big", label: "which piece of metadata this is" }),
  u32("type", { values: { "0": "Null", "1": "Char", "2": "Int8", "3": "Int16", "4": "Int32", "5": "Int64", "6": "String", "7": "Bin", "8": "StringArray", "9": "I18nString" }, label: "how the value is stored" }),
  i32("offset", { endian: "big", label: "offset of the value within the data blob" }),
  u32("count", { endian: "big", label: "number of values of that type" }),
]);

const RpmHeader = struct("RpmHeader", [
  bytes("magic", { size: 3, label: "8E AD E8" }),
  u8("version", { endian: "big", label: "header structure version, 1" }),
  bytes("reserved", { size: 4, label: "reserved, zero" }),
  u32("numIndex", { endian: "big", label: "index entries that follow" }),
  u32("dataSize", { endian: "big", label: "bytes of data blob after the index" }),
]);

const Rpm = struct("Rpm", [
  record("lead", RpmLead, { label: "the obsolete but still written 96-byte lead" }),
  record("signature", RpmHeader, { label: "the signature header: digests and signatures over the rest of the file" }),
]);

export default definePack({
  name: "RPM",
  endian: "big",
  pointerSize: 4,
  types: [RpmLead, RpmIndexEntry, RpmHeader, Rpm],
  nodes: {
    "entry": structNode(Rpm, { label: "Rpm（入口）" }),
    "RpmLead": structNode(RpmLead, { label: "RpmLead" }),
    "RpmIndexEntry": structNode(RpmIndexEntry, { label: "RpmIndexEntry" }),
    "RpmHeader": structNode(RpmHeader, { label: "RpmHeader" }),
    "array_RpmHeader_index": arrayNode(RpmIndexEntry, {
      label: "RpmHeader.index（动态数组）",
      description: "count 来自 RpmHeader.numIndex；address 指向数组首元素",
    }),
  },
});

