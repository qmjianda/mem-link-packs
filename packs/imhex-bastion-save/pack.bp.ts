/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bastion/save.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；含 1 个动态辅助节点；未移植 4 项（见文件末尾）
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
    "read_varint": calcNode({
      label: '读 Varint / LEB128',
      description: '按地址解码 1–9 字节无符号 LEB128；有符号字段请用 sLEB128 变体',
      inputs: { address: 'number' },
      outputs: { value: 'number', bytes: 'number' },
      run: ({ address }, ctx) => {
        let value = 0;
        for (let i = 0; i < 9; i += 1) {
          const b = ctx.mem.u8(Number(address) + i);
          if (i === 8) return { value: value * 256 + b, bytes: 9 };
          value = value * 128 + (b & 0x7f);
          if ((b & 0x80) === 0) return { value, bytes: i + 1 };
        }
        return { value, bytes: 9 };
      },
    }),
  },
});


/*
未移植项：
- TimeStamp.value: 类型 type_time64_t 不可移植
- varint/LEB128: 已生成 read_varint 辅助节点
- Counter.name: 变长 StringLEB128 已生成 read_varint 辅助节点，静态布局在此停止
- ActiveWeaponData.name: 变长 StringLEB128 已生成 read_varint 辅助节点，静态布局在此停止
*/
