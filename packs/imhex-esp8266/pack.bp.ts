/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/esp8266.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const flash_config_t = struct("flash_config_t", [
  bits("freq", 4, { at: 0, bit: 0, unit: 1, label: "freq" }),
  bits("size", 4, { at: 0, bit: 4, unit: 1, label: "size" }),
]);

const header = struct("header", [
  u8("magic", {  }),
  u8("segment_count", {  }),
  u8("flash_mode", { values: { "0": "QIO", "1": "QOUT", "2": "DIO", "3": "DOUT" } }),
  record("flash_config", flash_config_t),
  u32("entrypoint", {  }),
]);

const segment = struct("segment", [
  u32("load_addr", {  }),
  u32("size", {  }),
]);

export default definePack({
  name: "ESP8266 Firmware Image v1",
  endian: "little",
  pointerSize: 8,
  types: [flash_config_t, header, segment],
  nodes: {
    "entry": structNode(header, { label: "header（入口）" }),
    "flash_config_t": structNode(flash_config_t, { label: "flash_config_t" }),
    "segment": structNode(segment, { label: "segment" }),
  },
});

