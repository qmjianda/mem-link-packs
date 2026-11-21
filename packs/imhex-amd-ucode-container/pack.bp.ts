/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/amd_ucode_container.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const FileSection = struct("FileSection", [
  u32("section_type", { values: { "0": "EQUIV_CPU_TABLE", "1": "UCODE" } }),
  u32("section_size", {  }),
]);

const AmdUcodeContainer = struct("AmdUcodeContainer", [
  str("magic", { size: 4 }),
]);

export default definePack({
  name: "AMD Linux Kernel microcode container",
  endian: "little",
  pointerSize: 8,
  types: [FileSection, AmdUcodeContainer],
  nodes: {
    "entry": structNode(AmdUcodeContainer, { label: "AmdUcodeContainer（入口）" }),
    "FileSection": structNode(FileSection, { label: "FileSection" }),
  },
});

