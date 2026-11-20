/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/rar
// 原始 pack：rar · RAR archive v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 3 项（见文件末尾）
const Rar4MainFlags = struct("Rar4MainFlags", [
  bits("volume", 1, { at: 0, bit: 0, unit: 2, label: "volume" }),
  bits("comment", 1, { at: 0, bit: 1, unit: 2, label: "comment" }),
  bits("locked", 1, { at: 0, bit: 2, unit: 2, label: "locked" }),
  bits("solid", 1, { at: 0, bit: 3, unit: 2, label: "solid" }),
  bits("newNumbering", 1, { at: 0, bit: 4, unit: 2, label: "newNumbering" }),
  bits("authInfo", 1, { at: 0, bit: 5, unit: 2, label: "authInfo" }),
  bits("recovery", 1, { at: 0, bit: 6, unit: 2, label: "recovery" }),
  bits("passwordEncrypted", 1, { at: 0, bit: 7, unit: 2, label: "passwordEncrypted" }),
  bits("firstVolume", 1, { at: 0, bit: 8, unit: 2, label: "firstVolume" }),
  bits("encryptVer", 1, { at: 0, bit: 9, unit: 2, label: "encryptVer" }),
  bits("longBlock", 1, { at: 0, bit: 15, unit: 2, label: "longBlock" }),
]);

const Rar4MainHeader = struct("Rar4MainHeader", [
  u16("crc", { endian: "little", label: "CRC-16 of the header" }),
  u8("type", { values: { "114": "Marker", "115": "Main", "116": "File", "117": "Comment", "118": "ExtraInfo", "119": "Subblock", "120": "Recovery", "121": "AuthInfo", "122": "NewSubblock", "123": "EndArchive" }, label: "0x73" }),
  record("flags", Rar4MainFlags, { label: "archive flags" }),
  u16("headSize", { endian: "little", label: "header size (13)" }),
  u16("reserved1", { endian: "little" }),
  u32("reserved2", { endian: "little" }),
]);

const Rar4FileFlags = struct("Rar4FileFlags", [
  bits("splitBefore", 1, { at: 0, bit: 0, unit: 2, label: "splitBefore" }),
  bits("splitAfter", 1, { at: 0, bit: 1, unit: 2, label: "splitAfter" }),
  bits("password", 1, { at: 0, bit: 2, unit: 2, label: "password" }),
  bits("comment", 1, { at: 0, bit: 3, unit: 2, label: "comment" }),
  bits("solid", 1, { at: 0, bit: 4, unit: 2, label: "solid" }),
  bits("dictionary", 3, { at: 0, bit: 5, unit: 2, label: "dictionary" }),
  bits("largeFile", 1, { at: 0, bit: 8, unit: 2, label: "largeFile" }),
  bits("unicode", 1, { at: 0, bit: 9, unit: 2, label: "unicode" }),
  bits("salt", 1, { at: 0, bit: 10, unit: 2, label: "salt" }),
  bits("version", 1, { at: 0, bit: 11, unit: 2, label: "version" }),
  bits("extTime", 1, { at: 0, bit: 12, unit: 2, label: "extTime" }),
  bits("longBlock", 1, { at: 0, bit: 15, unit: 2, label: "longBlock" }),
]);

const Rar4FileHeader = struct("Rar4FileHeader", [
  u16("crc", { endian: "little", label: "CRC-16 of the header" }),
  u8("type", { values: { "114": "Marker", "115": "Main", "116": "File", "117": "Comment", "118": "ExtraInfo", "119": "Subblock", "120": "Recovery", "121": "AuthInfo", "122": "NewSubblock", "123": "EndArchive" }, label: "0x74" }),
  record("flags", Rar4FileFlags, { label: "file flags" }),
  u16("headSize", { endian: "little", label: "header size including the file name" }),
  u32("packSize", { endian: "little", label: "packed size (low 32 bits)" }),
  u32("unpSize", { endian: "little", label: "unpacked size (low 32 bits)" }),
  u8("hostOs", { values: { "0": "MsDos", "1": "Os2", "2": "Win32", "3": "Unix", "4": "MacOs", "5": "BeOs" }, label: "OS the file was archived on" }),
  u32("fileCrc", { endian: "little", label: "CRC-32 of the unpacked file" }),
  u32("fileTime", { endian: "little", label: "modification time (MS-DOS date/time)" }),
  u8("unpVer", { endian: "little", label: "RAR version needed to extract (x10: 29 = 2.9)" }),
  u8("method", { values: { "48": "Store", "49": "Fastest", "50": "Fast", "51": "Normal", "52": "Good", "53": "Best" }, label: "compression method" }),
  u16("nameSize", { endian: "little", label: "file name length" }),
  u32("attr", { endian: "little", label: "file attributes (host OS specific)" }),
]);

const Rar4BlockFlags = struct("Rar4BlockFlags", [
  bits("skipIfUnknown", 1, { at: 0, bit: 14, unit: 2, label: "skipIfUnknown" }),
  bits("longBlock", 1, { at: 0, bit: 15, unit: 2, label: "longBlock" }),
]);

const Rar4Block = struct("Rar4Block", [
  u16("crc", { endian: "little", label: "CRC-16 of the header" }),
  u8("type", { values: { "114": "Marker", "115": "Main", "116": "File", "117": "Comment", "118": "ExtraInfo", "119": "Subblock", "120": "Recovery", "121": "AuthInfo", "122": "NewSubblock", "123": "EndArchive" }, label: "block type" }),
  record("flags", Rar4BlockFlags, { label: "block flags (bit 15: data follows)" }),
  u16("headSize", { endian: "little", label: "header size, this field included" }),
]);

const Rar4 = struct("Rar4", [
  bytes("signature", { size: 7, label: "52 61 72 21 1A 07 00" }),
]);

export default definePack({
  name: "RAR4",
  endian: "little",
  pointerSize: 4,
  types: [Rar4MainFlags, Rar4MainHeader, Rar4FileFlags, Rar4FileHeader, Rar4BlockFlags, Rar4Block, Rar4],
  nodes: {
    "entry": structNode(Rar4, { label: "Rar4（入口）" }),
    "Rar4MainHeader": structNode(Rar4MainHeader, { label: "Rar4MainHeader" }),
    "Rar4FileHeader": structNode(Rar4FileHeader, { label: "Rar4FileHeader" }),
    "Rar4Block": structNode(Rar4Block, { label: "Rar4Block" }),
    "flags_Rar4BlockFlags": structNode(Rar4BlockFlags, { label: "位域 Rar4BlockFlags" }),
    "flags_Rar4MainFlags": structNode(Rar4MainFlags, { label: "位域 Rar4MainFlags" }),
    "flags_Rar4FileFlags": structNode(Rar4FileFlags, { label: "位域 Rar4FileFlags" }),
  },
});


/*
未移植项：
- Rar4FileHeader.highPackSize: 条件字段未移植，后续布局在此停止
- Rar4Block.addSize: 条件字段未移植，后续布局在此停止
- Rar4.blocks: repeat 字段未移植，后续布局在此停止
*/
