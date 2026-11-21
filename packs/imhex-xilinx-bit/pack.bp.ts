/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/xilinx_bit.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Flags = struct("Flags", [
  u16("length", { endian: "big" }),
]);

const Command = struct("Command", [
  u32("value", { endian: "big" }),
]);

const Header = struct("Header", [
  record("flags", Flags),
  u16("keySize", { endian: "big" }),
]);

export default definePack({
  name: "Xilinx FPGA Bitstream",
  endian: "little",
  pointerSize: 8,
  types: [Flags, Command, Header],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "Flags": structNode(Flags, { label: "Flags" }),
    "Command": structNode(Command, { label: "Command" }),
  },
});


/*
未移植项：
- Header.tlv: 类型 TLV 不可移植
*/
