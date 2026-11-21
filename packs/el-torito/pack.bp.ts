/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/iso9660
// 原始 pack：iso9660 · ISO 9660 image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 3 个动态辅助节点
const ElToritoValidationEntry = struct("ElToritoValidationEntry", [
  u8("headerId", { endian: "little", label: "1" }),
  u8("platformId", { values: { "0": "X86", "1": "PowerPc", "2": "Mac", "239": "Efi" }, label: "firmware the entries that follow are for" }),
  u16("reserved", { endian: "little", label: "zero" }),
  str("manufacturer", { size: 24, label: "who made the disc" }),
  u16("checksum", { endian: "little", label: "makes the 16-bit words of this entry sum to zero" }),
  u8("keyByte1", { endian: "little", label: "0x55" }),
  u8("keyByte2", { endian: "little", label: "0xAA" }),
]);

const ElToritoInitialEntry = struct("ElToritoInitialEntry", [
  u8("bootIndicator", { endian: "little", label: "0x88 bootable, 0x00 not bootable" }),
  u8("bootMedia", { values: { "0": "NoEmulation", "1": "Floppy12M", "2": "Floppy144M", "3": "Floppy288M", "4": "HardDisk" }, label: "what the firmware should emulate" }),
  u16("loadSegment", { endian: "little", label: "real-mode segment to load at; 0 means 0x7C0" }),
  u8("systemType", { endian: "little", label: "partition type byte, copied from the image" }),
  u8("unused", { endian: "little", label: "zero" }),
  u16("sectorCount", { endian: "little", label: "virtual 512-byte sectors to load" }),
  u32("loadRba", { endian: "little", label: "first sector of the boot image, in 2048-byte sectors" }),
  bytes("unused2", { size: 20, label: "zero" }),
]);

const ElToritoBootCatalog = struct("ElToritoBootCatalog", [
  record("validation", ElToritoValidationEntry, { label: "validation entry" }),
  record("initial", ElToritoInitialEntry, { label: "the default boot entry" }),
]);

const ElTorito = struct("ElTorito", [
  bytes("skipToSector17", { size: 34816, label: "sectors 0-16: the system area and the primary volume descriptor" }),
  u8("type", { endian: "little", label: "0 for a boot record volume descriptor" }),
  str("identifier", { size: 5, label: "CD001" }),
  u8("version", { endian: "little", label: "1" }),
  str("systemId", { size: 32, label: "EL TORITO SPECIFICATION" }),
  bytes("unused", { size: 32, label: "zero" }),
  u32("catalogSector", { endian: "little", label: "sector holding the boot catalog" }),
  bytes("unused2", { size: 1973, label: "zero, to the end of the sector" }),
]);

export default definePack({
  name: "El Torito",
  endian: "little",
  pointerSize: 4,
  types: [ElToritoValidationEntry, ElToritoInitialEntry, ElToritoBootCatalog, ElTorito],
  nodes: {
    "entry": structNode(ElTorito, { label: "ElTorito（入口）" }),
    "ElToritoValidationEntry": structNode(ElToritoValidationEntry, { label: "ElToritoValidationEntry" }),
    "ElToritoInitialEntry": structNode(ElToritoInitialEntry, { label: "ElToritoInitialEntry" }),
    "ElToritoBootCatalog": structNode(ElToritoBootCatalog, { label: "ElToritoBootCatalog" }),
    "calc_ElTorito_catalogOffset": calcNode({
      label: "ElTorito.catalogOffset（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "catalogSector": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["catalogSector"] ?? 0) * 2048) }),
    }),
    "ptr_ElTorito_catalog": calcNode({
      label: "ElTorito.catalog（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "catalogOffset": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["catalogOffset"] ?? 0) }),
    }),
    "ptrtarget_ElTorito_catalog": structNode(ElToritoBootCatalog, { label: "指针目标 · ElTorito.catalog" }),
  },
});

