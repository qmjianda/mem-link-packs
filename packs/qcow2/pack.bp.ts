/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/qcow2
// 原始 pack：qcow2 · QCOW2 disk image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 2 个动态辅助节点；未移植 1 项（见文件末尾）
const Qcow2IncompatibleFeatures = struct("Qcow2IncompatibleFeatures", [
  bits("dirty", 1, { at: 0, bit: 0, unit: 8, label: "dirty" }),
  bits("corrupt", 1, { at: 0, bit: 1, unit: 8, label: "corrupt" }),
  bits("externalData", 1, { at: 0, bit: 2, unit: 8, label: "externalData" }),
  bits("compressionType", 1, { at: 0, bit: 3, unit: 8, label: "compressionType" }),
  bits("extendedL2", 1, { at: 0, bit: 4, unit: 8, label: "extendedL2" }),
]);

const Qcow2CompatibleFeatures = struct("Qcow2CompatibleFeatures", [
  bits("lazyRefcounts", 1, { at: 0, bit: 0, unit: 8, label: "lazyRefcounts" }),
]);

const Qcow2AutoclearFeatures = struct("Qcow2AutoclearFeatures", [
  bits("bitmaps", 1, { at: 0, bit: 0, unit: 8, label: "bitmaps" }),
  bits("rawExternalData", 1, { at: 0, bit: 1, unit: 8, label: "rawExternalData" }),
]);

const Qcow2 = struct("Qcow2", [
  bytes("magic", { size: 4, label: "51 46 49 FB, the ASCII QFI followed by 0xFB" }),
  u32("version", { endian: "big", label: "2 or 3" }),
  u64("backingFileOffset", { endian: "big", label: "offset of the backing file path string, 0 if this image stands alone" }),
  u32("backingFileSize", { endian: "big", label: "length of that path in bytes, no terminator" }),
  u32("clusterBits", { endian: "big", label: "cluster size as a power of two; 16 means 65536 bytes" }),
  u64("size", { endian: "big", label: "virtual disk size the guest sees, in bytes" }),
  u32("cryptMethod", { values: { "0": "NoEncryption", "1": "Aes", "2": "Luks" }, label: "how guest data is encrypted" }),
  u32("l1Size", { endian: "big", label: "entries in the L1 table" }),
  u64("l1TableOffset", { endian: "big", label: "offset of the L1 table; cluster aligned" }),
  u64("refcountTableOffset", { endian: "big", label: "offset of the refcount table; cluster aligned" }),
  u32("refcountTableClusters", { endian: "big", label: "clusters occupied by the refcount table" }),
  u32("nbSnapshots", { endian: "big", label: "number of internal snapshots" }),
  u64("snapshotsOffset", { endian: "big", label: "offset of the snapshot table" }),
]);

const Elem_u64 = struct("u64Value", [
  u64('value', { endian: "big" }),
]);

export default definePack({
  name: "QCOW2",
  endian: "big",
  pointerSize: 4,
  types: [Qcow2IncompatibleFeatures, Qcow2CompatibleFeatures, Qcow2AutoclearFeatures, Qcow2, Elem_u64],
  nodes: {
    "entry": structNode(Qcow2, { label: "Qcow2（入口）" }),
    "flags_Qcow2IncompatibleFeatures": structNode(Qcow2IncompatibleFeatures, { label: "位域 Qcow2IncompatibleFeatures" }),
    "flags_Qcow2CompatibleFeatures": structNode(Qcow2CompatibleFeatures, { label: "位域 Qcow2CompatibleFeatures" }),
    "flags_Qcow2AutoclearFeatures": structNode(Qcow2AutoclearFeatures, { label: "位域 Qcow2AutoclearFeatures" }),
    "ptr_Qcow2_l1Table": calcNode({
      label: "Qcow2.l1Table（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "l1TableOffset": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["l1TableOffset"] ?? 0) }),
    }),
    "array_Qcow2_l1Table": arrayNode(Elem_u64, {
      label: "Qcow2.l1Table（动态数组）",
      description: "count 来自 Qcow2.l1Size；address 指向数组首元素",
    }),
  },
});


/*
未移植项：
- Qcow2.incompatibleFeatures: 条件字段未移植，后续布局在此停止
*/
