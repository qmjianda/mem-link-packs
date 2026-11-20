/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ifile.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const DelTime = struct("DelTime", [
  u64("raw", {  }),
]);

const IFile = struct("IFile", [
  u64("Version", {  }),
  u64("Size", {  }),
  record("DelTime", DelTime),
  u32("NameSize", {  }),
]);

export default definePack({
  name: "Windows Recycling Bin $I file",
  endian: "little",
  pointerSize: 8,
  types: [DelTime, IFile],
  nodes: {
    "entry": structNode(IFile, { label: "IFile（入口）" }),
    "DelTime": structNode(DelTime, { label: "DelTime" }),
  },
});


/*
未移植项：
- IFile.Path: 类型 std_string_NullString16 不可移植
*/
