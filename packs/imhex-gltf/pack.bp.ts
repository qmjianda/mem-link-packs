/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gltf.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const gltf_chunk_t = struct("gltf_chunk_t", [
  u32("length", {  }),
  u32("type", { values: { "1313821514": "JSON", "5130562": "BIN" } }),
]);

export default definePack({
  name: "GL Transmission Format binary 3D model (.glb)",
  endian: "little",
  pointerSize: 8,
  types: [gltf_chunk_t],
  nodes: {
    "entry": structNode(gltf_chunk_t, { label: "gltf_chunk_t（入口）" }),
  },
});


/*
未移植项：
- glb_file_t.magic: 类型 gltf_magic_t 不可移植
*/
