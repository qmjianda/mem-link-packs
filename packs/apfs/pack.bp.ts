/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/apfs
// 原始 pack：apfs · APFS container v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 14 个动态辅助节点；未移植 1 项（见文件末尾）
const ApfsObjectType = struct("ApfsObjectType", [
  bits("type", 16, { at: 0, bit: 0, unit: 4, label: "type" }),
  bits("nonpersistent", 1, { at: 0, bit: 27, unit: 4, label: "nonpersistent" }),
  bits("encrypted", 1, { at: 0, bit: 28, unit: 4, label: "encrypted" }),
  bits("noHeader", 1, { at: 0, bit: 29, unit: 4, label: "noHeader" }),
  bits("physical", 1, { at: 0, bit: 30, unit: 4, label: "physical" }),
  bits("ephemeral", 1, { at: 0, bit: 31, unit: 4, label: "ephemeral" }),
]);

const ApfsObjectHeader = struct("ApfsObjectHeader", [
  u64("checksum", { endian: "little", label: "Fletcher-64 over the rest of the block" }),
  u64("oid", { endian: "little", label: "object id: a block number for physical objects" }),
  u64("xid", { endian: "little", label: "transaction that last wrote this object" }),
  record("type", ApfsObjectType),
  u32("subtype", { endian: "little", label: "for a B-tree, what it indexes (11 object map, 14 filesystem records)" }),
]);

const ApfsPrange = struct("ApfsPrange", [
  u64("start", { endian: "little", label: "first block" }),
  u64("count", { endian: "little", label: "number of blocks" }),
]);

const ApfsModifiedBy = struct("ApfsModifiedBy", [
  str("id", { size: 32, label: "the software that did it, e.g. a newfs_apfs or apfsd version" }),
  u64("timestamp", { endian: "little", label: "nanoseconds since 1970" }),
  u64("lastXid", { endian: "little", label: "last transaction it wrote" }),
]);

const ApfsVolumeIncompatibleFeatures = struct("ApfsVolumeIncompatibleFeatures", [
  bits("caseInsensitive", 1, { at: 0, bit: 0, unit: 8, label: "caseInsensitive" }),
  bits("datalessSnapshots", 1, { at: 0, bit: 1, unit: 8, label: "datalessSnapshots" }),
  bits("encryptionRolled", 1, { at: 0, bit: 2, unit: 8, label: "encryptionRolled" }),
  bits("normalizationInsensitive", 1, { at: 0, bit: 3, unit: 8, label: "normalizationInsensitive" }),
  bits("incompleteRestore", 1, { at: 0, bit: 4, unit: 8, label: "incompleteRestore" }),
  bits("sealedVolume", 1, { at: 0, bit: 5, unit: 8, label: "sealedVolume" }),
]);

const ApfsVolume = struct("ApfsVolume", [
  record("header", ApfsObjectHeader),
  str("magic", { size: 4, label: "APSB" }),
  u32("fsIndex", { endian: "little", label: "this volume's slot in the container's volume list" }),
  u64("features", { endian: "little", label: "bit 0 legacy defrag, bit 1 hard-link maps, bit 2 defrag" }),
  u64("readonlyCompatibleFeatures", { endian: "little" }),
  record("incompatibleFeatures", ApfsVolumeIncompatibleFeatures),
  u64("unmountTime", { endian: "little", label: "nanoseconds since 1970" }),
  u64("reserveBlockCount", { endian: "little", label: "blocks guaranteed to this volume" }),
  u64("quotaBlockCount", { endian: "little", label: "the most blocks this volume may use, 0 for no limit" }),
  u64("allocCount", { endian: "little", label: "blocks in use" }),
  bytes("metaCrypto", { size: 20, label: "how the volume's metadata is protected" }),
  u32("rootTreeType", { endian: "little" }),
  u32("extentrefTreeType", { endian: "little" }),
  u32("snapMetaTreeType", { endian: "little" }),
  u64("omapOid", { endian: "little", label: "block of this volume's own object map" }),
  u64("rootTreeOid", { endian: "little", label: "virtual id of the filesystem tree: inodes, directory entries, extents" }),
  u64("extentrefTreeOid", { endian: "little" }),
  u64("snapMetaTreeOid", { endian: "little" }),
  u64("revertToXid", { endian: "little" }),
  u64("revertToSblockOid", { endian: "little" }),
  u64("nextObjId", { endian: "little", label: "next inode number to hand out" }),
  u64("numFiles", { endian: "little" }),
  u64("numDirectories", { endian: "little" }),
  u64("numSymlinks", { endian: "little" }),
  u64("numOtherFsObjects", { endian: "little" }),
  u64("numSnapshots", { endian: "little" }),
  u64("totalBlocksAlloced", { endian: "little" }),
  u64("totalBlocksFreed", { endian: "little" }),
  bytes("volumeUuid", { size: 16 }),
  u64("lastModTime", { endian: "little", label: "nanoseconds since 1970" }),
  u64("fsFlags", { endian: "little", label: "bit 0 unencrypted, bit 3 one key, bit 4 spilled over" }),
  record("formattedBy", ApfsModifiedBy, { label: "who created the volume" }),
  array("modifiedBy", ApfsModifiedBy, 8, { label: "the last eight to mount it for writing, newest first" }),
  str("volumeName", { size: 256, label: "volume name, UTF-8" }),
  u32("nextDocId", { endian: "little" }),
  u16("role", { values: { "0": "None", "1": "System", "2": "User", "4": "Recovery", "8": "Vm", "16": "Preboot", "32": "Installer", "64": "Data", "128": "Baseband", "192": "Update", "256": "Xart", "320": "Hardware", "384": "Backup", "576": "Enterprise", "704": "Prelogin" }, label: "what the volume is for" }),
]);

const ApfsOmapMapping = struct("ApfsOmapMapping", [
  u64("oid", { endian: "little", label: "virtual object id" }),
  u64("xid", { endian: "little", label: "transaction of this version" }),
]);

const ApfsOmapValue = struct("ApfsOmapValue", [
  u32("flags", { endian: "little", label: "bit 0 deleted, bit 2 encrypted" }),
  u32("size", { endian: "little", label: "object size in bytes" }),
  u64("paddr", { endian: "little", label: "block holding the object" }),
]);

const ApfsOmapRoot = struct("ApfsOmapRoot", [
  record("header", ApfsObjectHeader),
  u16("flags", { endian: "little", label: "bit 0 root, bit 1 leaf, bit 2 fixed-size keys and values" }),
  u16("level", { endian: "little", label: "0 for a leaf" }),
  u32("keyCount", { endian: "little", label: "entries in this node" }),
  u16("tableOffset", { endian: "little", label: "table of contents, from the end of this header" }),
  u16("tableLength", { endian: "little" }),
  u16("freeOffset", { endian: "little" }),
  u16("freeLength", { endian: "little" }),
  u32("keyFreeList", { endian: "little" }),
  u32("valueFreeList", { endian: "little" }),
  u16("firstKeyOffset", { endian: "little", label: "offset of the first key, from the end of the table" }),
  u16("firstValueOffset", { endian: "little", label: "offset of the first value, back from the B-tree info" }),
]);

const ApfsOmap = struct("ApfsOmap", [
  record("header", ApfsObjectHeader),
  u32("flags", { endian: "little", label: "bit 0 manually managed, bit 1 encrypting, bit 2 decrypting" }),
  u32("snapshotCount", { endian: "little" }),
  u32("treeType", { endian: "little" }),
  u32("snapshotTreeType", { endian: "little" }),
  u64("treeOid", { endian: "little", label: "block of the B-tree root" }),
  u64("snapshotTreeOid", { endian: "little" }),
  u64("mostRecentSnapshot", { endian: "little" }),
  u64("pendingRevertMin", { endian: "little" }),
  u64("pendingRevertMax", { endian: "little" }),
]);

const ApfsContainerFeatures = struct("ApfsContainerFeatures", [
  bits("defrag", 1, { at: 0, bit: 0, unit: 8, label: "defrag" }),
  bits("lowCapacityFusion", 1, { at: 0, bit: 1, unit: 8, label: "lowCapacityFusion" }),
]);

const ApfsIncompatibleFeatures = struct("ApfsIncompatibleFeatures", [
  bits("version1", 1, { at: 0, bit: 0, unit: 8, label: "version1" }),
  bits("version2", 1, { at: 0, bit: 1, unit: 8, label: "version2" }),
  bits("fusion", 1, { at: 0, bit: 8, unit: 8, label: "fusion" }),
]);

const Apfs = struct("Apfs", [
  record("header", ApfsObjectHeader),
  str("magic", { size: 4, label: "NXSB" }),
  u32("blockSize", { endian: "little", label: "bytes per block, 4096" }),
  u64("blockCount", { endian: "little", label: "blocks in the container" }),
  record("features", ApfsContainerFeatures),
  u64("readonlyCompatibleFeatures", { endian: "little" }),
  record("incompatibleFeatures", ApfsIncompatibleFeatures),
  bytes("uuid", { size: 16, label: "container UUID" }),
  u64("nextOid", { endian: "little", label: "next object id to hand out" }),
  u64("nextXid", { endian: "little", label: "next transaction id" }),
  u32("xpDescBlocks", { endian: "little", label: "checkpoint descriptor area size; top bit set if it is not contiguous" }),
  u32("xpDataBlocks", { endian: "little", label: "checkpoint data area size" }),
  u64("xpDescBase", { endian: "little", label: "first block of the checkpoint descriptor area" }),
  u64("xpDataBase", { endian: "little", label: "first block of the checkpoint data area" }),
  u32("xpDescNext", { endian: "little" }),
  u32("xpDataNext", { endian: "little" }),
  u32("xpDescIndex", { endian: "little", label: "where the newest checkpoint starts in the descriptor area" }),
  u32("xpDescLen", { endian: "little" }),
  u32("xpDataIndex", { endian: "little" }),
  u32("xpDataLen", { endian: "little" }),
  u64("spacemanOid", { endian: "little", label: "space manager, an ephemeral object" }),
  u64("omapOid", { endian: "little", label: "block of the container's object map" }),
  u64("reaperOid", { endian: "little" }),
  u32("testType", { endian: "little" }),
  u32("maxFileSystems", { endian: "little", label: "how many volumes the container can hold" }),
  array("fsOid", "u64", 100, { label: "virtual id of each volume's superblock, 0 for an empty slot" }),
  array("counters", "u64", 32),
  record("blockedOutRange", ApfsPrange, { label: "blocks being evacuated by a resize" }),
  u64("evictMappingTreeOid", { endian: "little" }),
  u64("flags", { endian: "little", label: "bit 1 software crypto" }),
  u64("efiJumpstart", { endian: "little", label: "block of the EFI driver record, what lets firmware boot from APFS" }),
  bytes("fusionUuid", { size: 16 }),
  record("keylocker", ApfsPrange, { label: "the container keybag" }),
  array("ephemeralInfo", "u64", 4),
  u64("testOid", { endian: "little" }),
  u64("fusionMtOid", { endian: "little" }),
  u64("fusionWbcOid", { endian: "little" }),
  record("fusionWbc", ApfsPrange),
  u64("newestMountedVersion", { endian: "little" }),
  record("mkbLocker", ApfsPrange),
]);

export default definePack({
  name: "APFS",
  endian: "little",
  pointerSize: 4,
  types: [ApfsObjectType, ApfsObjectHeader, ApfsPrange, ApfsModifiedBy, ApfsVolumeIncompatibleFeatures, ApfsVolume, ApfsOmapMapping, ApfsOmapValue, ApfsOmapRoot, ApfsOmap, ApfsContainerFeatures, ApfsIncompatibleFeatures, Apfs],
  nodes: {
    "entry": structNode(Apfs, { label: "Apfs（入口）" }),
    "ApfsObjectHeader": structNode(ApfsObjectHeader, { label: "ApfsObjectHeader" }),
    "ApfsPrange": structNode(ApfsPrange, { label: "ApfsPrange" }),
    "ApfsModifiedBy": structNode(ApfsModifiedBy, { label: "ApfsModifiedBy" }),
    "ApfsVolume": structNode(ApfsVolume, { label: "ApfsVolume" }),
    "ApfsOmapMapping": structNode(ApfsOmapMapping, { label: "ApfsOmapMapping" }),
    "ApfsOmapValue": structNode(ApfsOmapValue, { label: "ApfsOmapValue" }),
    "ApfsOmapRoot": structNode(ApfsOmapRoot, { label: "ApfsOmapRoot" }),
    "ApfsOmap": structNode(ApfsOmap, { label: "ApfsOmap" }),
    "flags_ApfsObjectType": structNode(ApfsObjectType, { label: "位域 ApfsObjectType" }),
    "flags_ApfsContainerFeatures": structNode(ApfsContainerFeatures, { label: "位域 ApfsContainerFeatures" }),
    "flags_ApfsIncompatibleFeatures": structNode(ApfsIncompatibleFeatures, { label: "位域 ApfsIncompatibleFeatures" }),
    "flags_ApfsVolumeIncompatibleFeatures": structNode(ApfsVolumeIncompatibleFeatures, { label: "位域 ApfsVolumeIncompatibleFeatures" }),
    "calc_ApfsOmapValue_volumeAt": calcNode({
      label: "ApfsOmapValue.volumeAt（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "paddr": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["paddr"] ?? 0) * 4096) }),
    }),
    "ptr_ApfsOmapValue_volume": calcNode({
      label: "ApfsOmapValue.volume（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "volumeAt": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["volumeAt"] ?? 0) }),
    }),
    "ptrtarget_ApfsOmapValue_volume": structNode(ApfsVolume, { label: "指针目标 · ApfsOmapValue.volume" }),
    "calc_ApfsOmapRoot_keyAt": calcNode({
      label: "ApfsOmapRoot.keyAt（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "tableOffset": "number", "tableLength": "number", "firstKeyOffset": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (((56 + Number(inputs["tableOffset"] ?? 0)) + Number(inputs["tableLength"] ?? 0)) + Number(inputs["firstKeyOffset"] ?? 0)) }),
    }),
    "calc_ApfsOmapRoot_valueAt": calcNode({
      label: "ApfsOmapRoot.valueAt（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "firstValueOffset": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: ((4096 - 40) - Number(inputs["firstValueOffset"] ?? 0)) }),
    }),
    "ptr_ApfsOmapRoot_firstKey": calcNode({
      label: "ApfsOmapRoot.firstKey（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "keyAt": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["keyAt"] ?? 0) }),
    }),
    "ptrtarget_ApfsOmapRoot_firstKey": structNode(ApfsOmapMapping, { label: "指针目标 · ApfsOmapRoot.firstKey" }),
    "ptr_ApfsOmapRoot_firstValue": calcNode({
      label: "ApfsOmapRoot.firstValue（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "valueAt": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["valueAt"] ?? 0) }),
    }),
    "ptrtarget_ApfsOmapRoot_firstValue": structNode(ApfsOmapValue, { label: "指针目标 · ApfsOmapRoot.firstValue" }),
    "calc_Apfs_omapAt": calcNode({
      label: "Apfs.omapAt（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "omapOid": "number", "blockSize": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["omapOid"] ?? 0) * Number(inputs["blockSize"] ?? 0)) }),
    }),
    "ptr_Apfs_omap": calcNode({
      label: "Apfs.omap（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "omapAt": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["omapAt"] ?? 0) }),
    }),
    "ptrtarget_Apfs_omap": structNode(ApfsOmap, { label: "指针目标 · Apfs.omap" }),
    "ptr_Apfs_omapTree": calcNode({
      label: "Apfs.omapTree（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "omapTreeAt": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["omapTreeAt"] ?? 0) }),
    }),
    "ptrtarget_Apfs_omapTree": structNode(ApfsOmapRoot, { label: "指针目标 · Apfs.omapTree" }),
  },
});


/*
未移植项：
- Apfs.omapTreeAt: computed 表达式依赖非标量字段，未生成 calc 辅助节点
*/
