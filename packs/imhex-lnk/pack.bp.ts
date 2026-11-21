/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/lnk.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 15 项（见文件末尾）
const LinkFlags = struct("LinkFlags", [
  bits("HasLinkTargetIDList", 1, { at: 0, bit: 0, unit: 4, label: "HasLinkTargetIDList" }),
  bits("HasLinkInfo", 1, { at: 0, bit: 1, unit: 4, label: "HasLinkInfo" }),
  bits("HasName", 1, { at: 0, bit: 2, unit: 4, label: "HasName" }),
  bits("HasRelativePath", 1, { at: 0, bit: 3, unit: 4, label: "HasRelativePath" }),
  bits("HasWorkingDir", 1, { at: 0, bit: 4, unit: 4, label: "HasWorkingDir" }),
  bits("HasArguments", 1, { at: 0, bit: 5, unit: 4, label: "HasArguments" }),
  bits("HasIconLocation", 1, { at: 0, bit: 6, unit: 4, label: "HasIconLocation" }),
  bits("IsUnicode", 1, { at: 0, bit: 7, unit: 4, label: "IsUnicode" }),
  bits("ForceNoLinkInfo", 1, { at: 0, bit: 8, unit: 4, label: "ForceNoLinkInfo" }),
  bits("HasExpString", 1, { at: 0, bit: 9, unit: 4, label: "HasExpString" }),
  bits("RunInSeparateProcess", 1, { at: 0, bit: 10, unit: 4, label: "RunInSeparateProcess" }),
  bits("HasDarwinID", 1, { at: 0, bit: 12, unit: 4, label: "HasDarwinID" }),
  bits("RunAsUser", 1, { at: 0, bit: 13, unit: 4, label: "RunAsUser" }),
  bits("HasExpIcon", 1, { at: 0, bit: 14, unit: 4, label: "HasExpIcon" }),
  bits("NoPidlAlias", 1, { at: 0, bit: 15, unit: 4, label: "NoPidlAlias" }),
  bits("RunWithShimLayer", 1, { at: 0, bit: 17, unit: 4, label: "RunWithShimLayer" }),
  bits("ForceNoLinkTrack", 1, { at: 0, bit: 18, unit: 4, label: "ForceNoLinkTrack" }),
  bits("EnableTargetMetadata", 1, { at: 0, bit: 19, unit: 4, label: "EnableTargetMetadata" }),
  bits("DisableLinkPathTracking", 1, { at: 0, bit: 20, unit: 4, label: "DisableLinkPathTracking" }),
  bits("DisableKnownFolderTracking", 1, { at: 0, bit: 21, unit: 4, label: "DisableKnownFolderTracking" }),
  bits("DisableKnownFolderAlias", 1, { at: 0, bit: 22, unit: 4, label: "DisableKnownFolderAlias" }),
  bits("AllowLinkToLink", 1, { at: 0, bit: 23, unit: 4, label: "AllowLinkToLink" }),
  bits("UnaliasOnSave", 1, { at: 0, bit: 24, unit: 4, label: "UnaliasOnSave" }),
  bits("PreferEnvironmentPath", 1, { at: 0, bit: 25, unit: 4, label: "PreferEnvironmentPath" }),
  bits("KeepLocalIDListForUNCTarget", 1, { at: 0, bit: 26, unit: 4, label: "KeepLocalIDListForUNCTarget" }),
]);

const FileAttributesFlags = struct("FileAttributesFlags", [
  bits("FILE_ATTRIBUTE_READONLY", 1, { at: 0, bit: 0, unit: 4, label: "FILE_ATTRIBUTE_READONLY" }),
  bits("FILE_ATTRIBUTE_HIDDEN", 1, { at: 0, bit: 1, unit: 4, label: "FILE_ATTRIBUTE_HIDDEN" }),
  bits("FILE_ATTRIBUTE_SYSTEM", 1, { at: 0, bit: 2, unit: 4, label: "FILE_ATTRIBUTE_SYSTEM" }),
  bits("FILE_ATTRIBUTE_DIRECTORY", 1, { at: 0, bit: 4, unit: 4, label: "FILE_ATTRIBUTE_DIRECTORY" }),
  bits("FILE_ATTRIBUTE_ARCHIVE", 1, { at: 0, bit: 5, unit: 4, label: "FILE_ATTRIBUTE_ARCHIVE" }),
  bits("FILE_ATTRIBUTE_NORMAL", 1, { at: 0, bit: 7, unit: 4, label: "FILE_ATTRIBUTE_NORMAL" }),
  bits("FILE_ATTRIBUTE_TEMPORARY", 1, { at: 0, bit: 8, unit: 4, label: "FILE_ATTRIBUTE_TEMPORARY" }),
  bits("FILE_ATTRIBUTE_SPARSE_FILE", 1, { at: 0, bit: 9, unit: 4, label: "FILE_ATTRIBUTE_SPARSE_FILE" }),
  bits("FILE_ATTRIBUTE_REPARSE_POINT", 1, { at: 0, bit: 10, unit: 4, label: "FILE_ATTRIBUTE_REPARSE_POINT" }),
  bits("FILE_ATTRIBUTE_COMPRESSED", 1, { at: 0, bit: 11, unit: 4, label: "FILE_ATTRIBUTE_COMPRESSED" }),
  bits("FILE_ATTRIBUTE_OFFLINE", 1, { at: 0, bit: 12, unit: 4, label: "FILE_ATTRIBUTE_OFFLINE" }),
  bits("FILE_ATTRIBUTE_NOT_CONTENT_INDEXED", 1, { at: 0, bit: 13, unit: 4, label: "FILE_ATTRIBUTE_NOT_CONTENT_INDEXED" }),
  bits("FILE_ATTRIBUTE_ENCRYPTED", 1, { at: 0, bit: 14, unit: 4, label: "FILE_ATTRIBUTE_ENCRYPTED" }),
]);

const ModifierKeys = struct("ModifierKeys", [
  bits("HOTKEYF_SHIFT", 1, { at: 0, bit: 0, unit: 1, label: "HOTKEYF_SHIFT" }),
  bits("HOTKEYF_CONTROL", 1, { at: 0, bit: 1, unit: 1, label: "HOTKEYF_CONTROL" }),
  bits("HOTKEYF_ALT", 1, { at: 0, bit: 2, unit: 1, label: "HOTKEYF_ALT" }),
]);

const HotKeyFlags = struct("HotKeyFlags", [
  u8("Key", { values: { "0": "KEY_NONE", "48": "KEY_0", "49": "KEY_1", "50": "KEY_2", "51": "KEY_3", "52": "KEY_4", "53": "KEY_5", "54": "KEY_6", "55": "KEY_7", "56": "KEY_8", "57": "KEY_9", "65": "KEY_A", "66": "KEY_B", "67": "KEY_C", "68": "KEY_D", "69": "KEY_E", "70": "KEY_F", "71": "KEY_G", "72": "KEY_H", "73": "KEY_I", "74": "KEY_J", "75": "KEY_K", "76": "KEY_L", "77": "KEY_M", "78": "KEY_N", "79": "KEY_O", "80": "KEY_P", "81": "KEY_Q", "82": "KEY_R", "83": "KEY_S", "84": "KEY_T", "85": "KEY_U", "86": "KEY_V", "87": "KEY_W", "88": "KEY_X", "89": "KEY_Y", "90": "KEY_Z", "112": "VK_F1", "113": "VK_F2", "114": "VK_F3", "115": "VK_F4", "116": "VK_F5", "117": "VK_F6", "118": "VK_F7", "119": "VK_F8", "120": "VK_F9", "121": "VK_F10", "122": "VK_F11", "123": "VK_F12", "124": "VK_F13", "125": "VK_F14", "126": "VK_F15", "127": "VK_F16", "128": "VK_F17", "129": "VK_F18", "130": "VK_F19", "131": "VK_F20", "132": "VK_F21", "133": "VK_F22", "134": "VK_F23", "135": "VK_F24", "144": "VK_NUMLOCK", "145": "VK_SCROLL" } }),
  record("ModifierKeys", ModifierKeys),
]);

const FILETIME = struct("FILETIME", [
  u32("dwLowDateTime", {  }),
  u32("dwHighDateTime", {  }),
]);

const LinkInfoFlags = struct("LinkInfoFlags", [
  bits("VolumeIDAndLocalBasePath", 1, { at: 0, bit: 0, unit: 4, label: "VolumeIDAndLocalBasePath" }),
  bits("CommonNetworkRelativeLinkAndPathSuffix", 1, { at: 0, bit: 1, unit: 4, label: "CommonNetworkRelativeLinkAndPathSuffix" }),
]);

const CommonNetworkRelativeLinkFlags = struct("CommonNetworkRelativeLinkFlags", [
  bits("ValidDevice", 1, { at: 0, bit: 0, unit: 4, label: "ValidDevice" }),
  bits("ValidNetType", 1, { at: 0, bit: 1, unit: 4, label: "ValidNetType" }),
]);

const String = struct("String", [
  u16("CountCharacters", {  }),
]);

const FillAttributes = struct("FillAttributes", [
  bits("FOREGROUND_BLUE", 1, { at: 0, bit: 0, unit: 2, label: "FOREGROUND_BLUE" }),
  bits("FOREGROUND_GREEN", 1, { at: 0, bit: 1, unit: 2, label: "FOREGROUND_GREEN" }),
  bits("FOREGROUND_RED", 1, { at: 0, bit: 2, unit: 2, label: "FOREGROUND_RED" }),
  bits("FOREGROUND_INTENSITY", 1, { at: 0, bit: 3, unit: 2, label: "FOREGROUND_INTENSITY" }),
  bits("BACKGROUND_BLUE", 1, { at: 0, bit: 4, unit: 2, label: "BACKGROUND_BLUE" }),
  bits("BACKGROUND_GREEN", 1, { at: 0, bit: 5, unit: 2, label: "BACKGROUND_GREEN" }),
  bits("BACKGROUND_RED", 1, { at: 0, bit: 6, unit: 2, label: "BACKGROUND_RED" }),
  bits("BACKGROUND_INTENSITY", 1, { at: 0, bit: 7, unit: 2, label: "BACKGROUND_INTENSITY" }),
]);

const ConsoleDataBlock = struct("ConsoleDataBlock", [
  record("FillAttributes", FillAttributes),
  record("PopupFillAttributes", FillAttributes),
  u16("ScreenBufferSizeX", {  }),
  u16("ScreenBufferSizeY", {  }),
  u16("WindowSizeX", {  }),
  u16("WindowSizeY", {  }),
  u16("WindowOriginX", {  }),
  u16("WindowOriginY", {  }),
  pad(4),
  pad(4),
  u32("FontSize", {  }),
  u32("FontFamily", {  }),
  u32("FontWeight", {  }),
]);

const ConsoleFEDataBlock = struct("ConsoleFEDataBlock", [
  u32("CodePage", {  }),
]);

const DarwinDataBlock = struct("DarwinDataBlock", [
  str("DarwinDataAnsi", { size: 260 }),
]);

const EnvironmentVariableDataBlock = struct("EnvironmentVariableDataBlock", [
  str("TargetAnsi", { size: 260 }),
]);

const IconEnvironmentDataBlock = struct("IconEnvironmentDataBlock", [
  str("TargetAnsi", { size: 260 }),
]);

const SpecialFolderDataBlock = struct("SpecialFolderDataBlock", [
  u32("SpecialFolderID", {  }),
  u32("Offset", {  }),
]);

export default definePack({
  name: "Windows Shell Link / Shortcut",
  endian: "little",
  pointerSize: 8,
  types: [LinkFlags, FileAttributesFlags, ModifierKeys, HotKeyFlags, FILETIME, LinkInfoFlags, CommonNetworkRelativeLinkFlags, String, FillAttributes, ConsoleDataBlock, ConsoleFEDataBlock, DarwinDataBlock, EnvironmentVariableDataBlock, IconEnvironmentDataBlock, SpecialFolderDataBlock],
  nodes: {
    "entry": structNode(LinkFlags, { label: "LinkFlags（入口）" }),
    "FileAttributesFlags": structNode(FileAttributesFlags, { label: "FileAttributesFlags" }),
    "ModifierKeys": structNode(ModifierKeys, { label: "ModifierKeys" }),
    "HotKeyFlags": structNode(HotKeyFlags, { label: "HotKeyFlags" }),
    "FILETIME": structNode(FILETIME, { label: "FILETIME" }),
    "LinkInfoFlags": structNode(LinkInfoFlags, { label: "LinkInfoFlags" }),
    "CommonNetworkRelativeLinkFlags": structNode(CommonNetworkRelativeLinkFlags, { label: "CommonNetworkRelativeLinkFlags" }),
    "String": structNode(String, { label: "String" }),
    "FillAttributes": structNode(FillAttributes, { label: "FillAttributes" }),
    "ConsoleDataBlock": structNode(ConsoleDataBlock, { label: "ConsoleDataBlock" }),
    "ConsoleFEDataBlock": structNode(ConsoleFEDataBlock, { label: "ConsoleFEDataBlock" }),
    "DarwinDataBlock": structNode(DarwinDataBlock, { label: "DarwinDataBlock" }),
    "EnvironmentVariableDataBlock": structNode(EnvironmentVariableDataBlock, { label: "EnvironmentVariableDataBlock" }),
    "IconEnvironmentDataBlock": structNode(IconEnvironmentDataBlock, { label: "IconEnvironmentDataBlock" }),
    "SpecialFolderDataBlock": structNode(SpecialFolderDataBlock, { label: "SpecialFolderDataBlock" }),
  },
});


/*
未移植项：
- ShellLinkHeader.HeaderSize: 类型 type_Size32 不可移植
- ItemID.ItemIDSize: 类型 type_Size16 不可移植
- LinkTargetIDList.IDListSize: 类型 type_Size16 不可移植
- VolumeID.VolumeIDSize: 类型 type_Size32 不可移植
- CommonNetworkRelativeLink.CommonNetworkRelativeLinkSize: 类型 type_Size32 不可移植
- LinkInfo.LinkInfoSize: 类型 type_Size32 不可移植
- ConsoleDataBlock.FaceName: 类型 char16 不可移植
- DarwinDataBlock.DarwinDataUnicode: 类型 char16 不可移植
- EnvironmentVariableDataBlock.TargetUnicode: 类型 char16 不可移植
- IconEnvironmentDataBlock.TargetUnicode: 类型 char16 不可移植
- KnownFolderDataBlock.KnownFolderID: 类型 type_GUID 不可移植
- TrackerDataBlock.Length: 类型 type_Size32 不可移植
- VistaAndAboveIDListDataBlock.IDList: 类型 IDList 不可移植
- ExtraDataBlock.BlockSize: 类型 type_Size32 不可移植
- LNK.ShellLinkHeader: 类型 ShellLinkHeader 不可移植
*/
