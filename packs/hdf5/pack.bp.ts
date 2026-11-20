/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/hdf5
// 原始 pack：hdf5 · HDF5 file v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 10 项（见文件末尾）
const HdfMessageV1 = struct("HdfMessageV1", [
  u16("type", { values: { "0": "Nil", "1": "Dataspace", "2": "LinkInfo", "3": "Datatype", "4": "FillValueOld", "5": "FillValue", "6": "Link", "7": "ExternalFiles", "8": "DataLayout", "9": "Bogus", "10": "GroupInfo", "11": "FilterPipeline", "12": "Attribute", "13": "ObjectComment", "14": "ModificationTimeOld", "15": "SharedMessageTable", "16": "Continuation", "17": "SymbolTable", "18": "ModificationTime", "19": "BtreeKValues", "20": "DriverInfo", "21": "AttributeInfo", "22": "ReferenceCount", "23": "FileSpaceInfo" }, label: "what the message describes" }),
  u16("size", { endian: "little", label: "bytes of message data" }),
  u8("flags", { endian: "little", label: "bit 0 constant, bit 1 shared, bit 3 fail if not understood" }),
  bytes("reserved", { size: 3 }),
]);

const HdfObjectHeaderV1 = struct("HdfObjectHeaderV1", [
  u8("version", { endian: "little", label: "1" }),
  u8("reserved", { endian: "little" }),
  u16("numMessages", { endian: "little", label: "messages in this header, across all of its blocks" }),
  u32("refCount", { endian: "little", label: "number of hard links to this object" }),
  u32("headerSize", { endian: "little", label: "bytes of messages in this first block" }),
  u32("padding", { endian: "little", label: "aligns the messages to 8 bytes" }),
  record("firstMessage", HdfMessageV1, { label: "first header message" }),
]);

const HdfObjectHeaderFlags = struct("HdfObjectHeaderFlags", [
  bits("chunkSizeWidth", 2, { at: 0, bit: 0, unit: 1, label: "chunkSizeWidth" }),
  bits("trackCreationOrder", 1, { at: 0, bit: 2, unit: 1, label: "trackCreationOrder" }),
  bits("indexCreationOrder", 1, { at: 0, bit: 3, unit: 1, label: "indexCreationOrder" }),
  bits("storePhaseChange", 1, { at: 0, bit: 4, unit: 1, label: "storePhaseChange" }),
  bits("storeTimes", 1, { at: 0, bit: 5, unit: 1, label: "storeTimes" }),
]);

const HdfObjectHeaderV2 = struct("HdfObjectHeaderV2", [
  str("signature", { size: 4, label: "OHDR" }),
  u8("version", { endian: "little", label: "2" }),
  record("flags", HdfObjectHeaderFlags),
]);

const HdfLocalHeap = struct("HdfLocalHeap", [
  str("signature", { size: 4, label: "HEAP" }),
  u8("version", { endian: "little" }),
  bytes("reserved", { size: 3 }),
  u64("dataSegmentSize", { endian: "little", label: "bytes in the data segment" }),
  u64("freeListOffset", { endian: "little", label: "offset of the first free block, or undefined" }),
  u64("dataSegmentAddress", { endian: "little", label: "address of the data segment" }),
]);

const HdfGroupBtreeEntry = struct("HdfGroupBtreeEntry", [
  u64("child", { endian: "little", label: "address of the child node" }),
  u64("key", { endian: "little", label: "heap offset of the largest name under that child" }),
]);

const HdfBtreeV1 = struct("HdfBtreeV1", [
  str("signature", { size: 4, label: "TREE" }),
  u8("nodeType", { endian: "little", label: "0 group members, 1 raw data chunks" }),
  u8("nodeLevel", { endian: "little", label: "0 for a leaf" }),
  u16("entriesUsed", { endian: "little", label: "children in this node" }),
  u64("leftSibling", { endian: "little", label: "address of the left sibling, or undefined" }),
  u64("rightSibling", { endian: "little", label: "address of the right sibling, or undefined" }),
]);

const HdfSymbolTableEntry = struct("HdfSymbolTableEntry", [
  u64("linkNameOffset", { endian: "little", label: "offset of this entry's name in the parent's local heap" }),
  u64("objectHeaderAddress", { endian: "little", label: "address of the object's header" }),
  u32("cacheType", { endian: "little", label: "0 nothing cached, 1 group B-tree and heap addresses, 2 symbolic link" }),
  u32("reserved", { endian: "little" }),
]);

const HdfSymbolNode = struct("HdfSymbolNode", [
  str("signature", { size: 4, label: "SNOD" }),
  u8("version", { endian: "little", label: "1" }),
  u8("reserved", { endian: "little" }),
  u16("numSymbols", { endian: "little", label: "entries in use in this node" }),
]);

const HdfConsistencyFlags = struct("HdfConsistencyFlags", [
  bits("writeAccess", 1, { at: 0, bit: 0, unit: 4, label: "writeAccess" }),
  bits("swmrWrite", 1, { at: 0, bit: 2, unit: 4, label: "swmrWrite" }),
]);

const HdfSuperblockV0 = struct("HdfSuperblockV0", [
  u8("freeSpaceVersion", { endian: "little", label: "0" }),
  u8("rootSymbolTableVersion", { endian: "little", label: "0" }),
  u8("reserved0", { endian: "little" }),
  u8("sharedHeaderVersion", { endian: "little", label: "0" }),
  u8("sizeOfOffsets", { endian: "little", label: "bytes per address, almost always 8" }),
  u8("sizeOfLengths", { endian: "little", label: "bytes per length, almost always 8" }),
  u8("reserved1", { endian: "little" }),
  u16("groupLeafNodeK", { endian: "little", label: "half the maximum entries in a symbol table node" }),
  u16("groupInternalNodeK", { endian: "little", label: "half the maximum children of a group B-tree node" }),
  record("consistencyFlags", HdfConsistencyFlags),
  u64("baseAddress", { endian: "little", label: "addresses are relative to this, usually 0" }),
  u64("freeSpaceAddress", { endian: "little", label: "free-space info, undefined in practice" }),
  u64("endOfFileAddress", { endian: "little", label: "end of the file's allocated space" }),
  u64("driverInfoAddress", { endian: "little", label: "driver information block, or undefined" }),
  record("rootGroup", HdfSymbolTableEntry, { label: "the root group" }),
]);

const HdfSuperblockV1 = struct("HdfSuperblockV1", [
  u8("freeSpaceVersion", { endian: "little", label: "0" }),
  u8("rootSymbolTableVersion", { endian: "little", label: "0" }),
  u8("reserved0", { endian: "little" }),
  u8("sharedHeaderVersion", { endian: "little", label: "0" }),
  u8("sizeOfOffsets", { endian: "little", label: "bytes per address, almost always 8" }),
  u8("sizeOfLengths", { endian: "little", label: "bytes per length, almost always 8" }),
  u8("reserved1", { endian: "little" }),
  u16("groupLeafNodeK", { endian: "little", label: "half the maximum entries in a symbol table node" }),
  u16("groupInternalNodeK", { endian: "little", label: "half the maximum children of a group B-tree node" }),
  record("consistencyFlags", HdfConsistencyFlags),
  u16("indexedStorageK", { endian: "little", label: "half the maximum children of a chunk B-tree node" }),
  u16("reserved2", { endian: "little" }),
  u64("baseAddress", { endian: "little", label: "addresses are relative to this, usually 0" }),
  u64("freeSpaceAddress", { endian: "little", label: "free-space info, undefined in practice" }),
  u64("endOfFileAddress", { endian: "little", label: "end of the file's allocated space" }),
  u64("driverInfoAddress", { endian: "little", label: "driver information block, or undefined" }),
  record("rootGroup", HdfSymbolTableEntry, { label: "the root group" }),
]);

const HdfSuperblockV2 = struct("HdfSuperblockV2", [
  u8("sizeOfOffsets", { endian: "little", label: "bytes per address, almost always 8" }),
  u8("sizeOfLengths", { endian: "little", label: "bytes per length, almost always 8" }),
  u8("consistencyFlags", { endian: "little", label: "bit 0 write access, bit 2 SWMR write" }),
  u64("baseAddress", { endian: "little", label: "addresses are relative to this, usually 0" }),
  u64("extensionAddress", { endian: "little", label: "superblock extension object header, or undefined" }),
  u64("endOfFileAddress", { endian: "little", label: "end of the file's allocated space" }),
  u64("rootObjectHeaderAddress", { endian: "little", label: "address of the root group's object header" }),
  u32("checksum", { endian: "little", label: "Jenkins lookup3 hash of the superblock" }),
]);

const Hdf5 = struct("Hdf5", [
  bytes("signature", { size: 8, label: "89 HDF CR LF 1A LF, a PNG-style signature" }),
  u8("version", { endian: "little", label: "superblock version: 0, 1, 2 or 3" }),
]);

export default definePack({
  name: "HDF5",
  endian: "little",
  pointerSize: 4,
  types: [HdfMessageV1, HdfObjectHeaderV1, HdfObjectHeaderFlags, HdfObjectHeaderV2, HdfLocalHeap, HdfGroupBtreeEntry, HdfBtreeV1, HdfSymbolTableEntry, HdfSymbolNode, HdfConsistencyFlags, HdfSuperblockV0, HdfSuperblockV1, HdfSuperblockV2, Hdf5],
  nodes: {
    "entry": structNode(Hdf5, { label: "Hdf5（入口）" }),
    "HdfMessageV1": structNode(HdfMessageV1, { label: "HdfMessageV1" }),
    "HdfObjectHeaderV1": structNode(HdfObjectHeaderV1, { label: "HdfObjectHeaderV1" }),
    "HdfObjectHeaderV2": structNode(HdfObjectHeaderV2, { label: "HdfObjectHeaderV2" }),
    "HdfLocalHeap": structNode(HdfLocalHeap, { label: "HdfLocalHeap" }),
    "HdfSymbolNode": structNode(HdfSymbolNode, { label: "HdfSymbolNode" }),
    "HdfGroupBtreeEntry": structNode(HdfGroupBtreeEntry, { label: "HdfGroupBtreeEntry" }),
    "HdfBtreeV1": structNode(HdfBtreeV1, { label: "HdfBtreeV1" }),
    "HdfSymbolTableEntry": structNode(HdfSymbolTableEntry, { label: "HdfSymbolTableEntry" }),
    "HdfSuperblockV0": structNode(HdfSuperblockV0, { label: "HdfSuperblockV0" }),
    "HdfSuperblockV1": structNode(HdfSuperblockV1, { label: "HdfSuperblockV1" }),
    "HdfSuperblockV2": structNode(HdfSuperblockV2, { label: "HdfSuperblockV2" }),
    "flags_HdfConsistencyFlags": structNode(HdfConsistencyFlags, { label: "位域 HdfConsistencyFlags" }),
    "flags_HdfObjectHeaderFlags": structNode(HdfObjectHeaderFlags, { label: "位域 HdfObjectHeaderFlags" }),
  },
});


/*
未移植项：
- HdfMessageV1.data: 变长字节块未移植
- HdfObjectHeaderV2.accessTime: 条件字段未移植，后续布局在此停止
- HdfLocalHeap.names: 指针字段（at …）未移植
- HdfSymbolNode.entries: 动态数组长度（field）未移植
- HdfSymbolTableEntry.btreeAddress: 条件字段未移植，后续布局在此停止
- HdfBtreeV1.firstKey: 条件字段未移植，后续布局在此停止
- HdfGroupBtreeEntry.childSignature: 指针字段（at …）未移植
- HdfGroupBtreeEntry.node: 指针字段（at …）未移植
- HdfSuperblockV2.rootObjectHeader: 指针字段（at …）未移植
- Hdf5.superblock: match 联合类型未移植，后续布局在此停止
*/
