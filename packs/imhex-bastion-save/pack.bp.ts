/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bastion/save.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 4 项（见文件末尾）
const WorldStateData = struct("WorldStateData", [
  i32("version", {  }),
]);

const SaveData = struct("SaveData", [
  i32("version", {  }),
]);

export default definePack({
  name: "Save",
  endian: "little",
  pointerSize: 8,
  types: [WorldStateData, SaveData],
  nodes: {
    "entry": structNode(SaveData, { label: "SaveData（入口）" }),
    "WorldStateData": structNode(WorldStateData, { label: "WorldStateData" }),
  },
});


/*
未移植项：
- TimeStamp.value: 类型 type_time64_t 不可移植
- Counter.name: 类型 StringLEB128 不可移植
- ActiveWeaponData.name: 类型 StringLEB128 不可移植
- s32: 位域没有可移植的固定成员
*/
