/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/tar
// 原始 pack：tar · TAR archive v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const TarHeader = struct("TarHeader", [
  str("name", { size: 100, label: "file name" }),
  str("mode", { size: 8, label: "file mode (octal ASCII)" }),
  str("uid", { size: 8, label: "owner user id (octal ASCII)" }),
  str("gid", { size: 8, label: "owner group id (octal ASCII)" }),
  str("size", { size: 12, label: "file size in bytes (octal ASCII)" }),
  str("mtime", { size: 12, label: "modification time (octal ASCII)" }),
  str("checksum", { size: 8, label: "header checksum (octal ASCII)" }),
  char("typeflag", { endian: "little", label: "entry type: 0 = file, 5 = directory" }),
  str("linkname", { size: 100, label: "link target name" }),
  str("magic", { size: 6, label: "format magic (ustar)" }),
  str("version", { size: 2, label: "ustar version" }),
  str("uname", { size: 32, label: "owner user name" }),
  str("gname", { size: 32, label: "owner group name" }),
  str("devmajor", { size: 8, label: "device major number (octal ASCII)" }),
  str("devminor", { size: 8, label: "device minor number (octal ASCII)" }),
  str("prefix", { size: 155, label: "path name prefix" }),
  bytes("padding", { size: 12, label: "padding to a 512-byte record" }),
]);

export default definePack({
  name: "TAR",
  endian: "little",
  pointerSize: 4,
  types: [TarHeader],
  nodes: {
    "entry": structNode(TarHeader, { label: "TarHeader（入口）" }),
  },
});

