/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/xbeh.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const AllowedMedia = struct("AllowedMedia", [
  bits("HardDisk", 1, { at: 0, bit: 0, unit: 4, label: "HardDisk" }),
  bits("DVD_X2", 1, { at: 0, bit: 1, unit: 4, label: "DVD_X2" }),
  bits("DVD_CD", 1, { at: 0, bit: 2, unit: 4, label: "DVD_CD" }),
  bits("CD", 1, { at: 0, bit: 3, unit: 4, label: "CD" }),
  bits("DVD_5_RO", 1, { at: 0, bit: 4, unit: 4, label: "DVD_5_RO" }),
  bits("DVD_9_RO", 1, { at: 0, bit: 5, unit: 4, label: "DVD_9_RO" }),
  bits("DVD_5_RW", 1, { at: 0, bit: 6, unit: 4, label: "DVD_5_RW" }),
  bits("DVD_9_RW", 1, { at: 0, bit: 7, unit: 4, label: "DVD_9_RW" }),
  bits("Dongle", 1, { at: 0, bit: 8, unit: 4, label: "Dongle" }),
  bits("MediaBoard", 1, { at: 0, bit: 9, unit: 4, label: "MediaBoard" }),
  bits("NonSecureHardDisk", 1, { at: 0, bit: 30, unit: 4, label: "NonSecureHardDisk" }),
  bits("NonSecureMode", 1, { at: 0, bit: 31, unit: 4, label: "NonSecureMode" }),
]);

const GameRegion = struct("GameRegion", [
  bits("NorthAmerica", 1, { at: 0, bit: 0, unit: 4, label: "NorthAmerica" }),
  bits("Japan", 1, { at: 0, bit: 1, unit: 4, label: "Japan" }),
  bits("RestOfTheWorld", 1, { at: 0, bit: 2, unit: 4, label: "RestOfTheWorld" }),
  bits("Manufacturing", 1, { at: 0, bit: 31, unit: 4, label: "Manufacturing" }),
]);

const InitializationFlags = struct("InitializationFlags", [
  bits("MountUtilityDrive", 1, { at: 0, bit: 0, unit: 4, label: "MountUtilityDrive" }),
  bits("FormatUtilityDrive", 1, { at: 0, bit: 1, unit: 4, label: "FormatUtilityDrive" }),
  bits("Limit64Megabytes", 1, { at: 0, bit: 2, unit: 4, label: "Limit64Megabytes" }),
  bits("DontSetuptHarddisk", 1, { at: 0, bit: 3, unit: 4, label: "DontSetuptHarddisk" }),
]);

const EntryPoint = union("EntryPoint", [
  u32("betaAddress", {  }),
  u32("debugAddress", {  }),
  u32("retailAddress", {  }),
]);

const KernelImageThunkAddress = union("KernelImageThunkAddress", [
  u32("debugAddress", {  }),
  u32("retailAddress", {  }),
]);

const TLS = struct("TLS", [
  u32("rawDataStart", {  }),
  u32("rawDataEnd", {  }),
  u32("indexAddress", {  }),
  u32("callbacksAddress", {  }),
]);

const LibraryFlags = struct("LibraryFlags", [
  bits("QFEVersion", 13, { at: 0, bit: 0, unit: 2, label: "QFEVersion" }),
  bits("Approved", 2, { at: 0, bit: 13, unit: 2, label: "Approved" }),
  bits("DebugBuild", 1, { at: 0, bit: 15, unit: 2, label: "DebugBuild" }),
]);

const LibraryVersion = struct("LibraryVersion", [
  str("libraryName", { size: 8 }),
  u16("major", {  }),
  u16("minor", {  }),
  u16("build", {  }),
  record("flags", LibraryFlags),
]);

const SectionFlags = struct("SectionFlags", [
  bits("Writable", 1, { at: 0, bit: 0, unit: 4, label: "Writable" }),
  bits("Preload", 1, { at: 0, bit: 1, unit: 4, label: "Preload" }),
  bits("Executable", 1, { at: 0, bit: 2, unit: 4, label: "Executable" }),
  bits("InsertedFile", 1, { at: 0, bit: 3, unit: 4, label: "InsertedFile" }),
  bits("HeadPageReadOnly", 1, { at: 0, bit: 4, unit: 4, label: "HeadPageReadOnly" }),
  bits("TailPageReadOnly", 1, { at: 0, bit: 5, unit: 4, label: "TailPageReadOnly" }),
]);

const SectionHeader = struct("SectionHeader", [
  record("sectionFlags", SectionFlags),
  u32("virtualAddress", {  }),
]);

export default definePack({
  name: "Xbox executable",
  endian: "little",
  pointerSize: 8,
  types: [AllowedMedia, GameRegion, InitializationFlags, EntryPoint, KernelImageThunkAddress, TLS, LibraryFlags, LibraryVersion, SectionFlags, SectionHeader],
  nodes: {
    "entry": structNode(AllowedMedia, { label: "AllowedMedia（入口）" }),
    "GameRegion": structNode(GameRegion, { label: "GameRegion" }),
    "InitializationFlags": structNode(InitializationFlags, { label: "InitializationFlags" }),
    "EntryPoint": structNode(EntryPoint, { label: "EntryPoint" }),
    "KernelImageThunkAddress": structNode(KernelImageThunkAddress, { label: "KernelImageThunkAddress" }),
    "TLS": structNode(TLS, { label: "TLS" }),
    "LibraryFlags": structNode(LibraryFlags, { label: "LibraryFlags" }),
    "LibraryVersion": structNode(LibraryVersion, { label: "LibraryVersion" }),
    "SectionFlags": structNode(SectionFlags, { label: "SectionFlags" }),
    "SectionHeader": structNode(SectionHeader, { label: "SectionHeader" }),
  },
});

