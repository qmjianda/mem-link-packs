/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/notepadwindowstate.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const WindowState = struct("WindowState", [
  str("HeaderIdentifier", { size: 2 }),
]);

export default definePack({
  name: "Windows 11 Notepad Window State file",
  endian: "little",
  pointerSize: 8,
  types: [WindowState],
  nodes: {
    "entry": structNode(WindowState, { label: "WindowState（入口）" }),
  },
});


/*
未移植项：
- Tab.GUID: 类型 u128 不可移植
- WindowState.SequenceNumber: 类型 type_uLEB128 不可移植
*/
