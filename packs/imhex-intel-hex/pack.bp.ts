/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/intel_hex.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Bytes = struct("Bytes", [
  u8("HOB", {  }),
  u8("LOB", {  }),
]);

const data_packet = struct("data_packet", [
  char("start_code", {  }),
  record("byte_count", Bytes),
  u32("address", {  }),
  u16("recordType", { values: { "12336": "Data", "12337": "EOF", "12338": "Extended_Segment_Address", "12339": "Start_Segment_Address", "12340": "Extended_Linear_Address", "12341": "Start_Linear_Address" } }),
]);

export default definePack({
  name: "Intel hex",
  endian: "big",
  pointerSize: 8,
  types: [Bytes, data_packet],
  nodes: {
    "entry": structNode(data_packet, { label: "data_packet（入口）" }),
    "Bytes": structNode(Bytes, { label: "Bytes" }),
  },
});

