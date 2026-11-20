/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/lnk
// 原始 pack：lnk · Windows shortcut v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const LnkFlags = struct("LnkFlags", [
  bits("hasLinkTargetIdList", 1, { at: 0, bit: 0, unit: 4, label: "hasLinkTargetIdList" }),
  bits("hasLinkInfo", 1, { at: 0, bit: 1, unit: 4, label: "hasLinkInfo" }),
  bits("hasName", 1, { at: 0, bit: 2, unit: 4, label: "hasName" }),
  bits("hasRelativePath", 1, { at: 0, bit: 3, unit: 4, label: "hasRelativePath" }),
  bits("hasWorkingDir", 1, { at: 0, bit: 4, unit: 4, label: "hasWorkingDir" }),
  bits("hasArguments", 1, { at: 0, bit: 5, unit: 4, label: "hasArguments" }),
  bits("hasIconLocation", 1, { at: 0, bit: 6, unit: 4, label: "hasIconLocation" }),
  bits("isUnicode", 1, { at: 0, bit: 7, unit: 4, label: "isUnicode" }),
  bits("forceNoLinkInfo", 1, { at: 0, bit: 8, unit: 4, label: "forceNoLinkInfo" }),
  bits("hasExpString", 1, { at: 0, bit: 9, unit: 4, label: "hasExpString" }),
  bits("runInSeparateProcess", 1, { at: 0, bit: 10, unit: 4, label: "runInSeparateProcess" }),
  bits("hasDarwinId", 1, { at: 0, bit: 12, unit: 4, label: "hasDarwinId" }),
  bits("runAsUser", 1, { at: 0, bit: 13, unit: 4, label: "runAsUser" }),
  bits("hasExpIcon", 1, { at: 0, bit: 14, unit: 4, label: "hasExpIcon" }),
  bits("noPidlAlias", 1, { at: 0, bit: 15, unit: 4, label: "noPidlAlias" }),
  bits("runWithShimLayer", 1, { at: 0, bit: 17, unit: 4, label: "runWithShimLayer" }),
  bits("forceNoLinkTrack", 1, { at: 0, bit: 18, unit: 4, label: "forceNoLinkTrack" }),
  bits("enableTargetMetadata", 1, { at: 0, bit: 19, unit: 4, label: "enableTargetMetadata" }),
  bits("disableLinkPathTracking", 1, { at: 0, bit: 20, unit: 4, label: "disableLinkPathTracking" }),
  bits("disableKnownFolderTracking", 1, { at: 0, bit: 21, unit: 4, label: "disableKnownFolderTracking" }),
  bits("disableKnownFolderAlias", 1, { at: 0, bit: 22, unit: 4, label: "disableKnownFolderAlias" }),
  bits("allowLinkToLink", 1, { at: 0, bit: 23, unit: 4, label: "allowLinkToLink" }),
  bits("unaliasOnSave", 1, { at: 0, bit: 24, unit: 4, label: "unaliasOnSave" }),
  bits("preferEnvironmentPath", 1, { at: 0, bit: 25, unit: 4, label: "preferEnvironmentPath" }),
  bits("keepLocalIdListForUncTarget", 1, { at: 0, bit: 26, unit: 4, label: "keepLocalIdListForUncTarget" }),
]);

const LnkFileAttributes = struct("LnkFileAttributes", [
  bits("readOnly", 1, { at: 0, bit: 0, unit: 4, label: "readOnly" }),
  bits("hidden", 1, { at: 0, bit: 1, unit: 4, label: "hidden" }),
  bits("system", 1, { at: 0, bit: 2, unit: 4, label: "system" }),
  bits("directory", 1, { at: 0, bit: 4, unit: 4, label: "directory" }),
  bits("archive", 1, { at: 0, bit: 5, unit: 4, label: "archive" }),
  bits("normal", 1, { at: 0, bit: 7, unit: 4, label: "normal" }),
  bits("temporary", 1, { at: 0, bit: 8, unit: 4, label: "temporary" }),
  bits("sparseFile", 1, { at: 0, bit: 9, unit: 4, label: "sparseFile" }),
  bits("reparsePoint", 1, { at: 0, bit: 10, unit: 4, label: "reparsePoint" }),
  bits("compressed", 1, { at: 0, bit: 11, unit: 4, label: "compressed" }),
  bits("offline", 1, { at: 0, bit: 12, unit: 4, label: "offline" }),
  bits("notContentIndexed", 1, { at: 0, bit: 13, unit: 4, label: "notContentIndexed" }),
  bits("encrypted", 1, { at: 0, bit: 14, unit: 4, label: "encrypted" }),
]);

const ShellLinkHeader = struct("ShellLinkHeader", [
  u32("headerSize", { endian: "little", label: "always 0x0000004C" }),
  bytes("linkClsid", { size: 16, label: "00021401-0000-0000-C000-000000000046" }),
  record("linkFlags", LnkFlags, { label: "which optional structures follow" }),
  record("fileAttributes", LnkFileAttributes, { label: "attributes of the target file" }),
  u64("creationTime", { endian: "little", label: "target creation time (FILETIME)" }),
  u64("accessTime", { endian: "little", label: "target last access time (FILETIME)" }),
  u64("writeTime", { endian: "little", label: "target last write time (FILETIME)" }),
  u32("fileSize", { endian: "little", label: "low 32 bits of the target size" }),
  i32("iconIndex", { endian: "little", label: "index into the icon location" }),
  u32("showCommand", { values: { "1": "Normal", "3": "Maximized", "7": "MinNoActive" }, label: "how the target window opens" }),
  u16("hotKey", { endian: "little", label: "hotkey: low byte key, high byte modifiers" }),
  u16("reserved1", { endian: "little" }),
  u32("reserved2", { endian: "little" }),
  u32("reserved3", { endian: "little" }),
]);

export default definePack({
  name: "LNK",
  endian: "little",
  pointerSize: 4,
  types: [LnkFlags, LnkFileAttributes, ShellLinkHeader],
  nodes: {
    "entry": structNode(ShellLinkHeader, { label: "ShellLinkHeader（入口）" }),
    "flags_LnkFlags": structNode(LnkFlags, { label: "位域 LnkFlags" }),
    "flags_LnkFileAttributes": structNode(LnkFileAttributes, { label: "位域 LnkFileAttributes" }),
  },
});

