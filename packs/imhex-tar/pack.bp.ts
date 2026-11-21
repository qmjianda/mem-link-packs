/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/tar.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const posix_header = struct("posix_header", [
  str("name", { size: 100 }),
  str("mode", { size: 8 }),
  str("uid", { size: 8 }),
  str("gid", { size: 8 }),
  str("size", { size: 12 }),
  str("mtime", { size: 12 }),
  str("chksum", { size: 8 }),
  char("typeflag", { values: { "0": "regular", "1": "also_regular", "2": "link_to_another_file_already_archived", "3": "symbolic_link", "4": "character_special_device", "5": "block_special_device", "6": "directory", "7": "fifo_special_file", "8": "reserved" } }),
  str("linkname", { size: 100 }),
  str("magic", { size: 6 }),
  str("version", { size: 2 }),
  str("uname", { size: 32 }),
  str("gname", { size: 32 }),
  str("devmajor", { size: 8 }),
  str("devminor", { size: 8 }),
  str("prefix", { size: 155 }),
  str("reserved", { size: 12 }),
]);

const tar = struct("tar", [
  record("header_raw", posix_header),
]);

export default definePack({
  name: "GNU Tar",
  endian: "little",
  pointerSize: 8,
  types: [posix_header, tar],
  nodes: {
    "entry": structNode(tar, { label: "tar（入口）" }),
    "posix_header": structNode(posix_header, { label: "posix_header" }),
  },
});

