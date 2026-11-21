/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/cfb
// 原始 pack：cfb · Compound File Binary v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 6 个动态辅助节点
const CfbDirectoryEntry = struct("CfbDirectoryEntry", [
  bytes("name", { size: 64, label: "entry name, UTF-16LE, NUL-terminated" }),
  u16("nameLength", { endian: "little", label: "bytes of name in use, terminator included" }),
  u8("objectType", { values: { "0": "Unallocated", "1": "Storage", "2": "Stream", "5": "RootEntry" }, label: "storage, stream, or the root" }),
  u8("colorFlag", { values: { "0": "Red", "1": "Black" }, label: "red-black tree colour of this node" }),
  u32("leftSibling", { endian: "little", label: "directory id of the left sibling, 0xFFFFFFFF for none" }),
  u32("rightSibling", { endian: "little", label: "directory id of the right sibling, 0xFFFFFFFF for none" }),
  u32("child", { endian: "little", label: "directory id of the first child, for a storage" }),
  bytes("clsid", { size: 16, label: "CLSID of the object, for a storage" }),
  u32("stateBits", { endian: "little", label: "user-defined state flags" }),
  u64("creationTime", { endian: "little", label: "FILETIME: 100-nanosecond ticks since 1601-01-01 UTC" }),
  u64("modifiedTime", { endian: "little", label: "FILETIME of the last modification" }),
  u32("startSector", { endian: "little", label: "first sector of the stream, or of the mini stream for the root" }),
  u64("streamSize", { endian: "little", label: "stream length in bytes" }),
]);

const CfbDirectorySector = struct("CfbDirectorySector", [
  array("entries", CfbDirectoryEntry, 4, { label: "the first four entries; the root is entry 0" }),
]);

const Cfb = struct("Cfb", [
  bytes("signature", { size: 8, label: "D0 CF 11 E0 A1 B1 1A E1" }),
  bytes("clsid", { size: 16, label: "unused, zero" }),
  u16("minorVersion", { endian: "little", label: "0x003E in practice" }),
  u16("majorVersion", { endian: "little", label: "3 for 512-byte sectors, 4 for 4096-byte sectors" }),
  u16("byteOrder", { endian: "little", label: "0xFFFE, marking little-endian" }),
  u16("sectorShift", { endian: "little", label: "sector size as a power of two: 9 means 512 bytes, 12 means 4096" }),
  u16("miniSectorShift", { endian: "little", label: "mini sector size as a power of two; always 6, so 64 bytes" }),
  bytes("reserved", { size: 6, label: "reserved, zero" }),
  u32("numDirSectors", { endian: "little", label: "sectors in the directory chain; 0 in a v3 file" }),
  u32("numFatSectors", { endian: "little", label: "sectors making up the FAT" }),
  u32("firstDirSector", { endian: "little", label: "first sector of the directory chain" }),
  u32("transactionSignature", { endian: "little", label: "incremented by transactioned writers; 0 otherwise" }),
  u32("miniStreamCutoff", { endian: "little", label: "streams below this size live in the mini stream; always 4096" }),
  u32("firstMiniFatSector", { endian: "little", label: "first sector of the MiniFAT chain" }),
  u32("numMiniFatSectors", { endian: "little", label: "sectors making up the MiniFAT" }),
  u32("difatFirstSector", { endian: "little", label: "first DIFAT sector, when the 109 entries below are not enough" }),
  u32("numDifatSectors", { endian: "little", label: "sectors making up the rest of the DIFAT" }),
  array("difat", "u32", 109, { label: "the first 109 FAT sector numbers; unused slots are 0xFFFFFFFF" }),
]);

export default definePack({
  name: "CFB",
  endian: "little",
  pointerSize: 4,
  types: [CfbDirectoryEntry, CfbDirectorySector, Cfb],
  nodes: {
    "entry": structNode(Cfb, { label: "Cfb（入口）" }),
    "CfbDirectoryEntry": structNode(CfbDirectoryEntry, { label: "CfbDirectoryEntry" }),
    "CfbDirectorySector": structNode(CfbDirectorySector, { label: "CfbDirectorySector" }),
    "calc_Cfb_dirOffsetV3": calcNode({
      label: "Cfb.dirOffsetV3（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "firstDirSector": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: ((Number(inputs["firstDirSector"] ?? 0) * 512) + 512) }),
    }),
    "calc_Cfb_dirOffsetV4": calcNode({
      label: "Cfb.dirOffsetV4（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "firstDirSector": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: ((Number(inputs["firstDirSector"] ?? 0) * 4096) + 4096) }),
    }),
    "ptr_Cfb_rootDirectoryV3": calcNode({
      label: "Cfb.rootDirectoryV3（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "dirOffsetV3": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["dirOffsetV3"] ?? 0) }),
    }),
    "ptrtarget_Cfb_rootDirectoryV3": structNode(CfbDirectorySector, { label: "指针目标 · Cfb.rootDirectoryV3" }),
    "ptr_Cfb_rootDirectoryV4": calcNode({
      label: "Cfb.rootDirectoryV4（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "dirOffsetV4": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["dirOffsetV4"] ?? 0) }),
    }),
    "ptrtarget_Cfb_rootDirectoryV4": structNode(CfbDirectorySector, { label: "指针目标 · Cfb.rootDirectoryV4" }),
  },
});

