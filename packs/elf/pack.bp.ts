/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * ELF 可执行文件 / 目标文件。
 *
 * 以最常见的**小端**布局提供 32/64 位文件头、程序头和节头。大端 ELF 请把
 * 字段的 endian 覆盖为 big，或复制一份改 `definePack({ endian: 'big' })`。
 * e_ident 里的 EI_DATA 字段说明真实字节序。
 */

const ElfIdent = struct('ElfIdent', [
  bytes('magic', { at: 0, size: 4, label: '魔数 7F 45 4C 46' }),
  u8('class', { at: 4, values: { 1: 'ELF32', 2: 'ELF64' }, label: '位宽' }),
  u8('data', { at: 5, values: { 1: '小端', 2: '大端' }, label: '字节序' }),
  u8('version', { at: 6, values: { 1: '当前版本' }, label: 'ELF 版本' }),
  u8('osabi', {
    at: 7,
    values: { 0: 'System V', 1: 'HP-UX', 2: 'NetBSD', 3: 'Linux', 6: 'Solaris', 9: 'FreeBSD', 12: 'OpenBSD' },
    label: 'OS ABI',
  }),
  u8('abiversion', { at: 8, label: 'ABI 版本' }),
  bytes('padding', { at: 9, size: 7, label: '填充' }),
]);

const Elf64Header = struct('Elf64Header', [
  record('ident', ElfIdent, { at: 0 }),
  u16('type', {
    at: 16,
    values: { 0: 'NONE', 1: 'REL', 2: 'EXEC', 3: 'DYN', 4: 'CORE' },
    label: '文件类型',
  }),
  u16('machine', {
    at: 18,
    values: { 0: '无', 2: 'SPARC', 3: 'x86', 8: 'MIPS', 20: 'PowerPC', 40: 'ARM', 62: 'x86-64', 183: 'AArch64', 243: 'RISC-V' },
    label: '目标架构',
  }),
  u32('version', { at: 20, label: 'ELF 版本' }),
  u64('entry', { at: 24, format: 'hex', label: '入口虚拟地址' }),
  u64('phoff', { at: 32, format: 'hex', label: '程序头表偏移' }),
  u64('shoff', { at: 40, format: 'hex', label: '节头表偏移' }),
  u32('flags', { at: 48, format: 'hex', label: '处理器相关标志' }),
  u16('ehsize', { at: 52, label: 'ELF 头大小' }),
  u16('phentsize', { at: 54, label: '程序头项大小' }),
  u16('phnum', { at: 56, label: '程序头数量' }),
  u16('shentsize', { at: 58, label: '节头项大小' }),
  u16('shnum', { at: 60, label: '节头数量' }),
  u16('shstrndx', { at: 62, label: '节名表索引' }),
]);

const Elf32Header = struct('Elf32Header', [
  record('ident', ElfIdent, { at: 0 }),
  u16('type', {
    at: 16,
    values: { 0: 'NONE', 1: 'REL', 2: 'EXEC', 3: 'DYN', 4: 'CORE' },
    label: '文件类型',
  }),
  u16('machine', {
    at: 18,
    values: { 0: '无', 2: 'SPARC', 3: 'x86', 8: 'MIPS', 20: 'PowerPC', 40: 'ARM', 62: 'x86-64', 183: 'AArch64', 243: 'RISC-V' },
    label: '目标架构',
  }),
  u32('version', { at: 20, label: 'ELF 版本' }),
  u32('entry', { at: 24, format: 'hex', label: '入口虚拟地址' }),
  u32('phoff', { at: 28, format: 'hex', label: '程序头表偏移' }),
  u32('shoff', { at: 32, format: 'hex', label: '节头表偏移' }),
  u32('flags', { at: 36, format: 'hex', label: '处理器相关标志' }),
  u16('ehsize', { at: 40, label: 'ELF 头大小' }),
  u16('phentsize', { at: 42, label: '程序头项大小' }),
  u16('phnum', { at: 44, label: '程序头数量' }),
  u16('shentsize', { at: 46, label: '节头项大小' }),
  u16('shnum', { at: 48, label: '节头数量' }),
  u16('shstrndx', { at: 50, label: '节名表索引' }),
]);

const ProgramHeader64 = struct('ProgramHeader64', [
  u32('type', { at: 0, values: { 0: 'PT_NULL', 1: 'PT_LOAD', 2: 'PT_DYNAMIC', 3: 'PT_INTERP', 4: 'PT_NOTE', 6: 'PT_PHDR', 7: 'PT_TLS' }, label: '段类型' }),
  u32('flags', { at: 4, format: 'hex', label: '段标志（R/W/X）' }),
  u64('offset', { at: 8, format: 'hex', label: '文件偏移' }),
  u64('vaddr', { at: 16, format: 'hex', label: '虚拟地址' }),
  u64('paddr', { at: 24, format: 'hex', label: '物理地址' }),
  u64('filesz', { at: 32, format: 'hex', label: '文件大小' }),
  u64('memsz', { at: 40, format: 'hex', label: '内存大小' }),
  u64('align', { at: 48, format: 'hex', label: '对齐' }),
]);

const ProgramHeader32 = struct('ProgramHeader32', [
  u32('type', { at: 0, values: { 0: 'PT_NULL', 1: 'PT_LOAD', 2: 'PT_DYNAMIC', 3: 'PT_INTERP', 4: 'PT_NOTE', 6: 'PT_PHDR', 7: 'PT_TLS' }, label: '段类型' }),
  u32('offset', { at: 4, format: 'hex', label: '文件偏移' }),
  u32('vaddr', { at: 8, format: 'hex', label: '虚拟地址' }),
  u32('paddr', { at: 12, format: 'hex', label: '物理地址' }),
  u32('filesz', { at: 16, format: 'hex', label: '文件大小' }),
  u32('memsz', { at: 20, format: 'hex', label: '内存大小' }),
  u32('flags', { at: 24, format: 'hex', label: '段标志（R/W/X）' }),
  u32('align', { at: 28, format: 'hex', label: '对齐' }),
]);

const SectionHeader64 = struct('SectionHeader64', [
  u32('name', { at: 0, label: '节名偏移（.shstrtab）' }),
  u32('type', { at: 4, values: { 0: 'SHT_NULL', 1: 'SHT_PROGBITS', 2: 'SHT_SYMTAB', 3: 'SHT_STRTAB', 4: 'SHT_RELA', 8: 'SHT_NOBITS', 9: 'SHT_REL', 11: 'SHT_DYNSYM' }, label: '节类型' }),
  u64('flags', { at: 8, format: 'hex', label: '节标志' }),
  u64('addr', { at: 16, format: 'hex', label: '虚拟地址' }),
  u64('offset', { at: 24, format: 'hex', label: '文件偏移' }),
  u64('size', { at: 32, format: 'hex', label: '节大小' }),
  u32('link', { at: 40, label: '关联节索引' }),
  u32('info', { at: 44, label: '附加信息' }),
  u64('addralign', { at: 48, format: 'hex', label: '地址对齐' }),
  u64('entsize', { at: 56, format: 'hex', label: '表项大小' }),
]);

const SectionHeader32 = struct('SectionHeader32', [
  u32('name', { at: 0, label: '节名偏移（.shstrtab）' }),
  u32('type', { at: 4, values: { 0: 'SHT_NULL', 1: 'SHT_PROGBITS', 2: 'SHT_SYMTAB', 3: 'SHT_STRTAB', 4: 'SHT_RELA', 8: 'SHT_NOBITS', 9: 'SHT_REL', 11: 'SHT_DYNSYM' }, label: '节类型' }),
  u32('flags', { at: 8, format: 'hex', label: '节标志' }),
  u32('addr', { at: 12, format: 'hex', label: '虚拟地址' }),
  u32('offset', { at: 16, format: 'hex', label: '文件偏移' }),
  u32('size', { at: 20, format: 'hex', label: '节大小' }),
  u32('link', { at: 24, label: '关联节索引' }),
  u32('info', { at: 28, label: '附加信息' }),
  u32('addralign', { at: 32, format: 'hex', label: '地址对齐' }),
  u32('entsize', { at: 36, format: 'hex', label: '表项大小' }),
]);

const is64 = calcNode({
  label: 'ELF 是否 64 位',
  description: '读取 EI_CLASS（偏移 4）：2 = ELF64，1 = ELF32。',
  inputs: { address: 'number' },
  outputs: { is64: 'boolean', class: 'number' },
  run: ({ address }, ctx) => {
    const cls = ctx.mem.u8(Number(address) + 4);
    return { is64: cls === 2, class: cls };
  },
});

export default definePack({
  name: 'ELF',
  endian: 'little',
  pointerSize: 8,
  constants: {
    ELF_IDENT_SIZE: 16,
    ELF64_HEADER_SIZE: 64,
    ELF32_HEADER_SIZE: 52,
    ELF64_PH_SIZE: 56,
    ELF32_PH_SIZE: 32,
    ELF64_SH_SIZE: 64,
    ELF32_SH_SIZE: 40,
  },
  types: [ElfIdent, Elf64Header, Elf32Header, ProgramHeader64, ProgramHeader32, SectionHeader64, SectionHeader32],
  nodes: {
    header64: structNode(Elf64Header, { label: 'ELF64 文件头（64 B）' }),
    header32: structNode(Elf32Header, { label: 'ELF32 文件头（52 B）' }),
    program64: structNode(ProgramHeader64, { label: 'ELF64 程序头（56 B）' }),
    program32: structNode(ProgramHeader32, { label: 'ELF32 程序头（32 B）' }),
    section64: structNode(SectionHeader64, { label: 'ELF64 节头（64 B）' }),
    section32: structNode(SectionHeader32, { label: 'ELF32 节头（40 B）' }),
    ident: structNode(ElfIdent, { label: 'ELF e_ident（16 B）' }),
    class: is64,
  },
});
