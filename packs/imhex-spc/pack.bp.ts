/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/spc.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const SPC_ID666_TextMain = struct("SPC_ID666_TextMain", [
  str("songTitle", { size: 32 }),
  str("gameTitle", { size: 32 }),
  str("dumperName", { size: 16 }),
  str("comments", { size: 32 }),
  str("dumpDate", { size: 11 }),
]);

const SPC_ID666_BinaryMain = struct("SPC_ID666_BinaryMain", [
  str("songTitle", { size: 32 }),
  str("gameTitle", { size: 32 }),
  str("dumperName", { size: 16 }),
  str("comments", { size: 32 }),
  str("dumpDate", { size: 4 }),
]);

const SPC_ID666_Extended_Chunk = struct("SPC_ID666_Extended_Chunk", [
  bytes("type", { size: 4 }),
  u32("size", {  }),
]);

const SPC_Main = struct("SPC_Main", [
  str("signature", { size: 33 }),
]);

export default definePack({
  name: "SNES SPC-700 Sound File",
  endian: "little",
  pointerSize: 8,
  types: [SPC_ID666_TextMain, SPC_ID666_BinaryMain, SPC_ID666_Extended_Chunk, SPC_Main],
  nodes: {
    "entry": structNode(SPC_Main, { label: "SPC_Main（入口）" }),
    "SPC_ID666_TextMain": structNode(SPC_ID666_TextMain, { label: "SPC_ID666_TextMain" }),
    "SPC_ID666_BinaryMain": structNode(SPC_ID666_BinaryMain, { label: "SPC_ID666_BinaryMain" }),
    "SPC_ID666_Extended_Chunk": structNode(SPC_ID666_Extended_Chunk, { label: "SPC_ID666_Extended_Chunk" }),
  },
});


/*
未移植项：
- SPC_ID666_TextMain.secondsTillFadeout: 类型 u24 不可移植
- SPC_ID666_BinaryMain.secondsTillFadeout: 类型 u24 不可移植
- SPC_Main.hasId666: 类型 ID666_ID666Bool 不可移植
*/
