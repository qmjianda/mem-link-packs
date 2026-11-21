/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/thumbcache.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const CacheRecord = struct("CacheRecord", [
  str("signature", { size: 4 }),
]);

export default definePack({
  name: "Windows thumbcache files",
  endian: "little",
  pointerSize: 8,
  types: [CacheRecord],
  nodes: {
    "entry": structNode(CacheRecord, { label: "CacheRecord（入口）" }),
  },
});

