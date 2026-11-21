/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bloodborne_save.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 4 项（见文件末尾）
const Dungeon = struct("Dungeon", [
  pad(1),
  u8("AreaDepth", {  }),
  u16("Layout", {  }),
  u64("IdServer", {  }),
  pad(1),
  u8("AreaDepth2", {  }),
  u16("Layout2", {  }),
  u32("JoinReq", {  }),
  u64("SpecialEnemyShop", {  }),
  u64("UniqueItem", {  }),
  u64("GemEffect", {  }),
  u64("FourthLayer", {  }),
  u64("Poison", {  }),
  u64("Fetid", {  }),
  u64("Rotted", {  }),
  u64("Cursed", {  }),
  u64("Unused", {  }),
]);

const Coordinates = struct("Coordinates", [
  f32("X", {  }),
  f32("Y", {  }),
  f32("Z", {  }),
]);

const Health = struct("Health", [
  u32("current_health", {  }),
  u32("max_health_buff", {  }),
  u32("max_health", {  }),
]);

const Stamina = struct("Stamina", [
  u32("current_stamina", {  }),
  u32("max_stamina_buff", {  }),
  u32("max_stamina", {  }),
]);

export default definePack({
  name: "Bloodborne Save file",
  endian: "little",
  pointerSize: 8,
  types: [Dungeon, Coordinates, Health, Stamina],
  nodes: {
    "entry": structNode(Dungeon, { label: "Dungeon（入口）" }),
    "Coordinates": structNode(Coordinates, { label: "Coordinates" }),
    "Health": structNode(Health, { label: "Health" }),
    "Stamina": structNode(Stamina, { label: "Stamina" }),
  },
});


/*
未移植项：
- Dungeon.Psn: 类型 u128 不可移植
- Bosses.ClericBeast: 类型 ClericBeast 不可移植
- Save.Flags: 类型 Flags 不可移植
- Player.Stats: 类型 Stats 不可移植
*/
