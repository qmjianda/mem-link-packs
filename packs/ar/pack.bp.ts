/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/ar
// 原始 pack：ar · Unix ar archive v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const ArMemberHeader = struct("ArMemberHeader", [
  str("name", { size: 16, label: "member name, space padded; see the variants above" }),
  str("mtime", { size: 12, label: "modification time, decimal seconds since the epoch" }),
  str("uid", { size: 6, label: "owner user id, decimal" }),
  str("gid", { size: 6, label: "owner group id, decimal" }),
  str("mode", { size: 8, label: "file mode, octal" }),
  str("size", { size: 10, label: "member size in bytes, decimal, not counting this header or the padding byte" }),
  bytes("terminator", { size: 2, label: "60 0A, the backtick-newline that ends every header" }),
]);

const ArArchive = struct("ArArchive", [
  str("magic", { size: 8, label: "!<arch> followed by a newline" }),
  record("first", ArMemberHeader, { label: "header of the first member; for a .deb, debian-binary" }),
]);

export default definePack({
  name: "AR",
  endian: "little",
  pointerSize: 4,
  types: [ArMemberHeader, ArArchive],
  nodes: {
    "entry": structNode(ArArchive, { label: "ArArchive（入口）" }),
    "ArMemberHeader": structNode(ArMemberHeader, { label: "ArMemberHeader" }),
  },
});

