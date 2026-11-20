/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/unity_web_data.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const FileEntry = struct("FileEntry", [
  u32("fileOffset", {  }),
  u32("fileSize", {  }),
  u32("filePathSize", {  }),
]);

const Header = struct("Header", [
  str("signature", { size: 16 }),
  u32("headerSize", {  }),
]);

export default definePack({
  name: "Unity Web Data 1.0",
  endian: "little",
  pointerSize: 8,
  types: [FileEntry, Header],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "FileEntry": structNode(FileEntry, { label: "FileEntry" }),
  },
});

