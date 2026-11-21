/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ne.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const DOSHeader = struct("DOSHeader", [
  str("signature", { size: 2 }),
  u16("lastPageSize", {  }),
  u16("numberOfPages", {  }),
  u16("relocations", {  }),
  u16("headerSizeInParagraphs", {  }),
  u16("minimumAllocatedParagraphs", {  }),
  u16("maximumAllocatedParagraphs", {  }),
  u16("initialSSValue", {  }),
  u16("initialRelativeSPValue", {  }),
  u16("checksum", {  }),
  u16("initialRelativeIPValue", {  }),
  u16("initialCSValue", {  }),
  u16("relocationsTablePointer", {  }),
  u16("overlayNumber", {  }),
  bytes("overlayInformation", { size: 32 }),
  u32("neHeaderPointer", {  }),
]);

const FileHeader = struct("FileHeader", [
  record("dosHeader", DOSHeader),
]);

const ProgramFlags = struct("ProgramFlags", [
  bits("dGroupType", 2, { at: 0, bit: 0, unit: 1, label: "dGroupType" }),
  bits("globalInitialization", 1, { at: 0, bit: 2, unit: 1, label: "globalInitialization" }),
  bits("protectedModeOnly", 1, { at: 0, bit: 3, unit: 1, label: "protectedModeOnly" }),
  bits("instructions86", 1, { at: 0, bit: 4, unit: 1, label: "instructions86" }),
  bits("instructions286", 1, { at: 0, bit: 5, unit: 1, label: "instructions286" }),
  bits("instructions386", 1, { at: 0, bit: 6, unit: 1, label: "instructions386" }),
  bits("instructionsX87", 1, { at: 0, bit: 7, unit: 1, label: "instructionsX87" }),
]);

const ApplicationFlags = struct("ApplicationFlags", [
  bits("applicationType", 2, { at: 0, bit: 0, unit: 1, label: "applicationType" }),
  bits("os2Application", 1, { at: 0, bit: 3, unit: 1, label: "os2Application" }),
  bits("reserved", 1, { at: 0, bit: 4, unit: 1, label: "reserved" }),
  bits("imageError", 1, { at: 0, bit: 5, unit: 1, label: "imageError" }),
  bits("nonConforming", 1, { at: 0, bit: 6, unit: 1, label: "nonConforming" }),
  bits("dll", 1, { at: 0, bit: 7, unit: 1, label: "dll" }),
]);

const OS2EXEFlags = struct("OS2EXEFlags", [
  bits("longFilename", 1, { at: 0, bit: 0, unit: 1, label: "longFilename" }),
  bits("protectedMode", 1, { at: 0, bit: 1, unit: 1, label: "protectedMode" }),
  bits("proportionalFonts", 1, { at: 0, bit: 2, unit: 1, label: "proportionalFonts" }),
  bits("gangloadArea", 1, { at: 0, bit: 3, unit: 1, label: "gangloadArea" }),
]);

const NEHeader = struct("NEHeader", [
  str("signature", { size: 2 }),
  u8("majorLinkerVersion", {  }),
  u8("minorLinkerVersion", {  }),
  u16("entryTableOffset", {  }),
  u16("entryTableLength", {  }),
  u32("fileCRC", {  }),
  record("programFlags", ProgramFlags),
  record("appFlags", ApplicationFlags),
  u16("autoDataSegmentIndex", {  }),
  u16("initHeapSize", {  }),
  u16("initStackSize", {  }),
  u32("entryPoint", {  }),
  u32("initialStackPointer", {  }),
  u16("segmentCount", {  }),
  u16("moduleReferenceCount", {  }),
  u16("nonResidentNamesTableSize", {  }),
  u16("segmentTableOffset", {  }),
  u16("resourceTableOffset", {  }),
  u16("residentNamesTableOffset", {  }),
  u16("moduleReferenceTableOffset", {  }),
  u16("importedNamesTableOffset", {  }),
]);

const SegmentTableFlags = struct("SegmentTableFlags", [
  bits("dataSegment", 1, { at: 0, bit: 0, unit: 2, label: "dataSegment" }),
  bits("typeMask", 2, { at: 0, bit: 1, unit: 2, label: "typeMask" }),
  bits("moveable", 1, { at: 0, bit: 4, unit: 2, label: "moveable" }),
  bits("preloaded", 1, { at: 0, bit: 6, unit: 2, label: "preloaded" }),
  bits("containsRelocationInfo", 1, { at: 0, bit: 8, unit: 2, label: "containsRelocationInfo" }),
  bits("discardPriority", 4, { at: 0, bit: 10, unit: 2, label: "discardPriority" }),
]);

const SegmentTable = struct("SegmentTable", [
  u16("segmentDataPointer", {  }),
  u16("segmentLength", {  }),
  record("segmentTableFlags", SegmentTableFlags),
  u16("minimumAllocationSize", {  }),
]);

const BlockFlags = struct("BlockFlags", [
  bits("moveable", 1, { at: 0, bit: 4, unit: 2, label: "moveable" }),
  bits("shared", 1, { at: 0, bit: 5, unit: 2, label: "shared" }),
  bits("preload", 1, { at: 0, bit: 6, unit: 2, label: "preload" }),
]);

const ResourceRecord = struct("ResourceRecord", [
  u16("typeID", {  }),
  u16("numberOfResources", {  }),
  u32("reserved", {  }),
]);

const ResourceTable = struct("ResourceTable", [
  u16("alignmentShiftCount", {  }),
]);

const ResidentName = struct("ResidentName", [
  u8("stringLength", {  }),
]);

const ModuleReference = struct("ModuleReference", [
  u16("moduleNameOffset", {  }),
]);

const ImportedNameTable = struct("ImportedNameTable", [
  u8("stringLength", {  }),
]);

const EntryTable = struct("EntryTable", [
  u8("entryCount", {  }),
  u8("segmentIndicator", { values: { "0": "Unused", "1": "Fixed", "2": "Moveable" } }),
]);

export default definePack({
  name: "Microsoft DOS NE executable",
  endian: "little",
  pointerSize: 8,
  types: [DOSHeader, FileHeader, ProgramFlags, ApplicationFlags, OS2EXEFlags, NEHeader, SegmentTableFlags, SegmentTable, BlockFlags, ResourceRecord, ResourceTable, ResidentName, ModuleReference, ImportedNameTable, EntryTable],
  nodes: {
    "entry": structNode(FileHeader, { label: "FileHeader（入口）" }),
    "DOSHeader": structNode(DOSHeader, { label: "DOSHeader" }),
    "ProgramFlags": structNode(ProgramFlags, { label: "ProgramFlags" }),
    "ApplicationFlags": structNode(ApplicationFlags, { label: "ApplicationFlags" }),
    "OS2EXEFlags": structNode(OS2EXEFlags, { label: "OS2EXEFlags" }),
    "NEHeader": structNode(NEHeader, { label: "NEHeader" }),
    "SegmentTableFlags": structNode(SegmentTableFlags, { label: "SegmentTableFlags" }),
    "SegmentTable": structNode(SegmentTable, { label: "SegmentTable" }),
    "BlockFlags": structNode(BlockFlags, { label: "BlockFlags" }),
    "ResourceRecord": structNode(ResourceRecord, { label: "ResourceRecord" }),
    "ResourceTable": structNode(ResourceTable, { label: "ResourceTable" }),
    "ResidentName": structNode(ResidentName, { label: "ResidentName" }),
    "ModuleReference": structNode(ModuleReference, { label: "ModuleReference" }),
    "ImportedNameTable": structNode(ImportedNameTable, { label: "ImportedNameTable" }),
    "EntryTable": structNode(EntryTable, { label: "EntryTable" }),
  },
});

