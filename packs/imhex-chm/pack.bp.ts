/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/chm.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；含 1 个动态辅助节点；未移植 3 项（见文件末尾）
const ListingChunk = struct("ListingChunk", [
  str("magic", { size: 4 }),
]);

const HeaderSection = struct("HeaderSection", [
  str("magic", { size: 4 }),
]);

const HeaderSectionTableEntry = struct("HeaderSectionTableEntry", [
  u64("offset", {  }),
]);

const NameListFile = struct("NameListFile", [
  u16("fileLengthWords", {  }),
  u16("entriesInFile", {  }),
]);

const SectionData = struct("SectionData", [
  u32("fileLengthWords", {  }),
]);

const Content = struct("Content", [
  record("nameListFile", NameListFile),
  record("sectionData", SectionData),
]);

export default definePack({
  name: "Windows HtmlHelp Data (ITSF / CHM)",
  endian: "little",
  pointerSize: 8,
  types: [ListingChunk, HeaderSection, HeaderSectionTableEntry, NameListFile, SectionData, Content],
  nodes: {
    "entry": structNode(ListingChunk, { label: "ListingChunk（入口）" }),
    "HeaderSection": structNode(HeaderSection, { label: "HeaderSection" }),
    "HeaderSectionTableEntry": structNode(HeaderSectionTableEntry, { label: "HeaderSectionTableEntry" }),
    "NameListFile": structNode(NameListFile, { label: "NameListFile" }),
    "SectionData": structNode(SectionData, { label: "SectionData" }),
    "Content": structNode(Content, { label: "Content" }),
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
- varint/LEB128: 已生成 read_varint 辅助节点
- DirectoryListingEntry.nameLength: 变长 type_LEB128 已生成 read_varint 辅助节点，静态布局在此停止
- DirectoryIndexEntry.nameLength: 变长 type_LEB128 已生成 read_varint 辅助节点，静态布局在此停止
*/
