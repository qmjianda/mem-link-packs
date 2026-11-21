/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dicom.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Tag = struct("Tag", [
  u16("group", {  }),
  u16("element", {  }),
]);

const Element = struct("Element", [
  record("tag", Tag),
]);

export default definePack({
  name: "DICOM Digital Imaging and Communications in Medicine",
  endian: "little",
  pointerSize: 8,
  types: [Tag, Element],
  nodes: {
    "entry": structNode(Tag, { label: "Tag（入口）" }),
    "Element": structNode(Element, { label: "Element" }),
  },
});


/*
未移植项：
- File.meta: 类型 FileMetaInformation 不可移植
*/
