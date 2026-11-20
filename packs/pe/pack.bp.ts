/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * Windows PE / PE32+ 可执行文件。
 *
 * PE 使用**小端**。DOS 头偏移 0x3C 的 e_lfanew 指向 PE 头；PE 头 =
 * 4 字节签名 + 20 字节 COFF 文件头 + 可选头。可选头之后是节表。
 * 常见布局：DOS 头 64 B，PE 头位于 0x80（e_lfanew），可选头从 e_lfanew+24 开始。
 */

const DosHeader = struct('DosHeader', [
  str('eMagic', { at: 0, size: 2, label: '魔数 MZ' }),
  u16('eCblp', { at: 2, label: '最后一页字节数' }),
  u16('eCp', { at: 4, label: '页数' }),
  u16('eCrlc', { at: 6, label: '重定位项数' }),
  u16('eCparhdr', { at: 8, label: '头大小（段落）' }),
  u16('eMinalloc', { at: 10, label: '最小额外内存' }),
  u16('eMaxalloc', { at: 12, label: '最大额外内存' }),
  u16('eSs', { at: 14, label: '初始 SS' }),
  u16('eSp', { at: 16, label: '初始 SP' }),
  u16('eCsum', { at: 18, label: '校验和' }),
  u16('eIp', { at: 20, label: '初始 IP' }),
  u16('eCs', { at: 22, label: '初始 CS' }),
  u16('eLfarlc', { at: 24, label: '重定位表偏移' }),
  u16('eOvno', { at: 26, label: '覆盖层号' }),
  array('eRes', 'u16', 4, { at: 28, label: '保留' }),
  u16('eOemid', { at: 36, label: 'OEM 标识' }),
  u16('eOeminfo', { at: 38, label: 'OEM 信息' }),
  array('eRes2', 'u16', 10, { at: 40, label: '保留' }),
  u32('eLfanew', { at: 60, format: 'hex', label: 'PE 头文件偏移' }),
]);

/** COFF characteristics 位（16 位）。 */
function coffCharacteristics(at: number) {
  return [
    bits('relocsStripped', 1, { at, bit: 0, label: '重定位已剥离' }),
    bits('executableImage', 1, { bit: 1, label: '可执行' }),
    bits('lineNumsStripped', 1, { bit: 2, label: '行号已剥离' }),
    bits('localSymsStripped', 1, { bit: 3, label: '局部符号已剥离' }),
    bits('aggressiveWsTrim', 1, { bit: 4, label: '积极工作集裁剪' }),
    bits('largeAddressAware', 1, { bit: 5, label: '支持大地址' }),
    bits('reserved6', 1, { bit: 6, label: '保留' }),
    bits('bytesReversedLo', 1, { bit: 7, label: '低位字节反转' }),
    bits('machine32Bit', 1, { bit: 8, label: '32 位机器' }),
    bits('debugStripped', 1, { bit: 9, label: '调试信息已剥离' }),
    bits('removableRunFromSwap', 1, { bit: 10, label: '可移动介质从交换运行' }),
    bits('netRunFromSwap', 1, { bit: 11, label: '网络从交换运行' }),
    bits('system', 1, { bit: 12, label: '系统文件' }),
    bits('dll', 1, { bit: 13, label: 'DLL' }),
    bits('upSystemOnly', 1, { bit: 14, label: '仅单处理器' }),
    bits('bytesReversedHi', 1, { bit: 15, label: '高位字节反转' }),
  ];
}

const CoffFileHeader = struct('CoffFileHeader', [
  u16('machine', {
    at: 0,
    values: { 0x014c: 'x86', 0x8664: 'x86-64', 0x01c0: 'ARM', 0xaa64: 'ARM64', 0x0200: 'IA64', 0x01c4: 'ARMv7' },
    label: '目标架构',
  }),
  u16('numberOfSections', { at: 2, label: '节数量' }),
  u32('timeDateStamp', { at: 4, format: 'time', label: '时间戳' }),
  u32('pointerToSymbolTable', { at: 8, format: 'hex', label: '符号表偏移' }),
  u32('numberOfSymbols', { at: 12, label: '符号数量' }),
  u16('sizeOfOptionalHeader', { at: 16, label: '可选头大小' }),
  ...coffCharacteristics(18),
]);

const PeFileHeader = struct('PeFileHeader', [
  bytes('signature', { at: 0, size: 4, label: 'PE\\0\\0' }),
  record('coff', CoffFileHeader, { at: 4 }),
]);

/** DLL characteristics 位（16 位）。 */
function dllCharacteristics(at: number) {
  return [
    bits('dllHighEntropyVa', 1, { at, bit: 5, label: '高熵 ASLR' }),
    bits('dllDynamicBase', 1, { bit: 6, label: '动态基址（ASLR）' }),
    bits('dllForceIntegrity', 1, { bit: 7, label: '强制完整性' }),
    bits('dllNxCompat', 1, { bit: 8, label: 'NX 兼容（DEP）' }),
    bits('dllNoIsolation', 1, { bit: 9, label: '无隔离' }),
    bits('dllNoSeh', 1, { bit: 10, label: '无 SEH' }),
    bits('dllNoBind', 1, { bit: 11, label: '不绑定' }),
    bits('dllAppContainer', 1, { bit: 12, label: 'AppContainer' }),
    bits('dllWdmDriver', 1, { bit: 13, label: 'WDM 驱动' }),
    bits('dllGuardCf', 1, { bit: 14, label: 'Control Flow Guard' }),
    bits('dllTerminalServerAware', 1, { bit: 15, label: '终端服务器感知' }),
  ];
}

const DataDirectory = struct('DataDirectory', [
  u32('virtualAddress', { at: 0, format: 'hex', label: 'RVA' }),
  u32('size', { at: 4, label: '大小' }),
]);

const OptionalHeader32 = struct('OptionalHeader32', [
  u16('magic', { at: 0, format: 'hex', values: { 0x10b: 'PE32' }, label: '可选头魔数' }),
  u8('majorLinkerVersion', { at: 2, label: '链接器主版本' }),
  u8('minorLinkerVersion', { at: 3, label: '链接器次版本' }),
  u32('sizeOfCode', { at: 4, label: '代码大小' }),
  u32('sizeOfInitializedData', { at: 8, label: '已初始化数据大小' }),
  u32('sizeOfUninitializedData', { at: 12, label: '未初始化数据大小' }),
  u32('addressOfEntryPoint', { at: 16, format: 'hex', label: '入口 RVA' }),
  u32('baseOfCode', { at: 20, format: 'hex', label: '代码段 RVA' }),
  u32('baseOfData', { at: 24, format: 'hex', label: '数据段 RVA' }),
  u32('imageBase', { at: 28, format: 'hex', label: '首选加载基址' }),
  u32('sectionAlignment', { at: 32, label: '节对齐' }),
  u32('fileAlignment', { at: 36, label: '文件对齐' }),
  u16('majorOperatingSystemVersion', { at: 40, label: 'OS 主版本' }),
  u16('minorOperatingSystemVersion', { at: 42, label: 'OS 次版本' }),
  u16('majorImageVersion', { at: 44, label: '映像主版本' }),
  u16('minorImageVersion', { at: 46, label: '映像次版本' }),
  u16('majorSubsystemVersion', { at: 48, label: '子系统主版本' }),
  u16('minorSubsystemVersion', { at: 50, label: '子系统次版本' }),
  u32('win32VersionValue', { at: 52, label: 'Win32 版本值（保留）' }),
  u32('sizeOfImage', { at: 56, label: '映像内存大小' }),
  u32('sizeOfHeaders', { at: 60, label: '所有头大小' }),
  u32('checkSum', { at: 64, format: 'hex', label: '校验和' }),
  u16('subsystem', { at: 68, values: { 1: 'Native', 2: 'Windows GUI', 3: 'Windows CUI', 7: 'POSIX CUI', 9: 'Windows CE', 10: 'EFI 应用', 11: 'EFI 引导驱动', 12: 'EFI 运行时驱动' }, label: '子系统' }),
  ...dllCharacteristics(70),
  u32('sizeOfStackReserve', { at: 72, label: '栈保留大小' }),
  u32('sizeOfStackCommit', { at: 76, label: '栈提交大小' }),
  u32('sizeOfHeapReserve', { at: 80, label: '堆保留大小' }),
  u32('sizeOfHeapCommit', { at: 84, label: '堆提交大小' }),
  u32('loaderFlags', { at: 88, label: '加载器标志' }),
  u32('numberOfRvaAndSizes', { at: 92, label: '数据目录数量' }),
  array('dataDirectories', DataDirectory, 16, { at: 96, label: '数据目录（16 项）' }),
]);

const OptionalHeader64 = struct('OptionalHeader64', [
  u16('magic', { at: 0, format: 'hex', values: { 0x20b: 'PE32+' }, label: '可选头魔数' }),
  u8('majorLinkerVersion', { at: 2, label: '链接器主版本' }),
  u8('minorLinkerVersion', { at: 3, label: '链接器次版本' }),
  u32('sizeOfCode', { at: 4, label: '代码大小' }),
  u32('sizeOfInitializedData', { at: 8, label: '已初始化数据大小' }),
  u32('sizeOfUninitializedData', { at: 12, label: '未初始化数据大小' }),
  u32('addressOfEntryPoint', { at: 16, format: 'hex', label: '入口 RVA' }),
  u32('baseOfCode', { at: 20, format: 'hex', label: '代码段 RVA' }),
  u64('imageBase', { at: 24, format: 'hex', label: '首选加载基址' }),
  u32('sectionAlignment', { at: 32, label: '节对齐' }),
  u32('fileAlignment', { at: 36, label: '文件对齐' }),
  u16('majorOperatingSystemVersion', { at: 40, label: 'OS 主版本' }),
  u16('minorOperatingSystemVersion', { at: 42, label: 'OS 次版本' }),
  u16('majorImageVersion', { at: 44, label: '映像主版本' }),
  u16('minorImageVersion', { at: 46, label: '映像次版本' }),
  u16('majorSubsystemVersion', { at: 48, label: '子系统主版本' }),
  u16('minorSubsystemVersion', { at: 50, label: '子系统次版本' }),
  u32('win32VersionValue', { at: 52, label: 'Win32 版本值（保留）' }),
  u32('sizeOfImage', { at: 56, label: '映像内存大小' }),
  u32('sizeOfHeaders', { at: 60, label: '所有头大小' }),
  u32('checkSum', { at: 64, format: 'hex', label: '校验和' }),
  u16('subsystem', { at: 68, values: { 1: 'Native', 2: 'Windows GUI', 3: 'Windows CUI', 7: 'POSIX CUI', 9: 'Windows CE', 10: 'EFI 应用', 11: 'EFI 引导驱动', 12: 'EFI 运行时驱动' }, label: '子系统' }),
  ...dllCharacteristics(70),
  u64('sizeOfStackReserve', { at: 72, label: '栈保留大小' }),
  u64('sizeOfStackCommit', { at: 80, label: '栈提交大小' }),
  u64('sizeOfHeapReserve', { at: 88, label: '堆保留大小' }),
  u64('sizeOfHeapCommit', { at: 96, label: '堆提交大小' }),
  u32('loaderFlags', { at: 104, label: '加载器标志' }),
  u32('numberOfRvaAndSizes', { at: 108, label: '数据目录数量' }),
  array('dataDirectories', DataDirectory, 16, { at: 112, label: '数据目录（16 项）' }),
]);

const SectionHeader = struct('SectionHeader', [
  str('name', { at: 0, size: 8, label: '节名' }),
  u32('virtualSize', { at: 8, format: 'hex', label: '虚拟大小' }),
  u32('virtualAddress', { at: 12, format: 'hex', label: '虚拟地址（RVA）' }),
  u32('sizeOfRawData', { at: 16, label: '文件中的原始大小' }),
  u32('pointerToRawData', { at: 20, format: 'hex', label: '文件偏移' }),
  u32('pointerToRelocations', { at: 24, format: 'hex', label: '重定位表偏移' }),
  u32('pointerToLinenumbers', { at: 28, format: 'hex', label: '行号表偏移' }),
  u16('numberOfRelocations', { at: 32, label: '重定位数量' }),
  u16('numberOfLinenumbers', { at: 34, label: '行号数量' }),
  u32('characteristics', { at: 36, format: 'hex', label: '节属性' }),
]);

const peHeaderOffset = calcNode({
  label: 'PE 头偏移',
  description: '读取 DOS 头 0x3C 处的 e_lfanew；可选头 = PE 头 + 24（4 字节签名 + 20 字节 COFF）。',
  inputs: { dosAddress: 'number' },
  outputs: { peOffset: 'number', optionalOffset: 'number' },
  run: ({ dosAddress }, ctx) => {
    const peOffset = Number(dosAddress) + ctx.mem.u32(Number(dosAddress) + 0x3c);
    return { peOffset, optionalOffset: peOffset + 24 };
  },
});

export default definePack({
  name: 'PE',
  endian: 'little',
  pointerSize: 8,
  constants: {
    DOS_HEADER_SIZE: 64,
    PE_SIGNATURE_SIZE: 4,
    COFF_HEADER_SIZE: 20,
    OPTIONAL_HEADER32_SIZE: 224,
    OPTIONAL_HEADER64_SIZE: 240,
    SECTION_HEADER_SIZE: 40,
    PE_HEADER_SIZE: 24,
  },
  types: [DosHeader, CoffFileHeader, PeFileHeader, DataDirectory, OptionalHeader32, OptionalHeader64, SectionHeader],
  nodes: {
    dosHeader: structNode(DosHeader, { label: 'DOS 头（64 B）' }),
    peHeader: structNode(PeFileHeader, { label: 'PE 签名 + COFF 头（24 B）' }),
    optional32: structNode(OptionalHeader32, { label: 'PE32 可选头（224 B）' }),
    optional64: structNode(OptionalHeader64, { label: 'PE32+ 可选头（240 B）' }),
    section: structNode(SectionHeader, { label: 'PE 节头（40 B）' }),
    dataDirectory: structNode(DataDirectory, { label: '数据目录项（8 B）' }),
    peHeaderOffset,
  },
});
