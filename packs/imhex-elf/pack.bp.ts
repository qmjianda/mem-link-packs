/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/elf.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const SYMINFO_FLG = struct("SYMINFO_FLG", [
  bits("DIRECT", 1, { at: 0, bit: 0, unit: 2, label: "DIRECT" }),
  bits("RESERVED", 1, { at: 0, bit: 1, unit: 2, label: "RESERVED" }),
  bits("COPY", 1, { at: 0, bit: 2, unit: 2, label: "COPY" }),
  bits("LAZYLOAD", 1, { at: 0, bit: 3, unit: 2, label: "LAZYLOAD" }),
  bits("DIRECTBIND", 1, { at: 0, bit: 4, unit: 2, label: "DIRECTBIND" }),
  bits("NOEXTDIRECT", 1, { at: 0, bit: 5, unit: 2, label: "NOEXTDIRECT" }),
]);

const ST = struct("ST", [
  bits("ST_BIND", 4, { at: 0, bit: 0, unit: 1, label: "ST_BIND" }),
  bits("ST_TYPE", 4, { at: 0, bit: 4, unit: 1, label: "ST_TYPE" }),
]);

const SHF = struct("SHF", [
  bits("WRITE", 1, { at: 0, bit: 0, unit: 4, label: "WRITE" }),
  bits("ALLOC", 1, { at: 0, bit: 1, unit: 4, label: "ALLOC" }),
  bits("EXECINSTR", 1, { at: 0, bit: 2, unit: 4, label: "EXECINSTR" }),
  bits("MERGE", 1, { at: 0, bit: 4, unit: 4, label: "MERGE" }),
  bits("STRINGS", 1, { at: 0, bit: 5, unit: 4, label: "STRINGS" }),
  bits("INFO_LINK", 1, { at: 0, bit: 6, unit: 4, label: "INFO_LINK" }),
  bits("LINK_ORDER", 1, { at: 0, bit: 7, unit: 4, label: "LINK_ORDER" }),
  bits("OS_NONCONFORMING", 1, { at: 0, bit: 8, unit: 4, label: "OS_NONCONFORMING" }),
  bits("GROUP", 1, { at: 0, bit: 9, unit: 4, label: "GROUP" }),
  bits("TLS", 1, { at: 0, bit: 10, unit: 4, label: "TLS" }),
  bits("COMPRESSED", 1, { at: 0, bit: 11, unit: 4, label: "COMPRESSED" }),
  bits("UNKNOWN", 8, { at: 0, bit: 12, unit: 4, label: "UNKNOWN" }),
  bits("MASKOS", 8, { at: 0, bit: 20, unit: 4, label: "MASKOS" }),
  bits("MASKPROC", 4, { at: 0, bit: 28, unit: 4, label: "MASKPROC" }),
]);

const ELF32_R_INFO = struct("ELF32_R_INFO", [
  bits("TYPE", 8, { at: 0, bit: 0, unit: 4, label: "TYPE" }),
  bits("SYM", 8, { at: 0, bit: 8, unit: 4, label: "SYM" }),
]);

const ELF64_R_INFO = struct("ELF64_R_INFO", [
  bits("TYPE", 32, { at: 0, bit: 0, unit: 8, label: "TYPE" }),
  bits("SYM", 32, { at: 0, bit: 32, unit: 8, label: "SYM" }),
]);

const PF = struct("PF", [
  bits("X", 1, { at: 0, bit: 0, unit: 4, label: "X" }),
  bits("W", 1, { at: 0, bit: 1, unit: 4, label: "W" }),
  bits("R", 1, { at: 0, bit: 2, unit: 4, label: "R" }),
  bits("MASKOS", 4, { at: 0, bit: 20, unit: 4, label: "MASKOS" }),
  bits("MASKPROC", 4, { at: 0, bit: 24, unit: 4, label: "MASKPROC" }),
]);

const Elf32_Ehdr = struct("Elf32_Ehdr", [
  u16("e_type", { values: { "0": "NONE", "1": "REL", "2": "EXEC", "3": "DYN", "4": "CORE" } }),
  u16("e_machine", { values: { "0": "EM_NONE", "1": "EM_M32", "2": "EM_SPARC", "3": "EM_386", "4": "EM_68K", "5": "EM_88K", "6": "EM_IAMCU", "7": "EM_860", "8": "EM_MIPS", "9": "EM_S370", "10": "EM_MIPS_RS4_BE", "15": "EM_PARISC", "17": "EM_VPP500", "18": "EM_SPARC32PLUS", "19": "EM_960", "20": "EM_PPC", "21": "EM_PPC64", "22": "EM_S390", "23": "EM_SPU", "36": "EM_V800", "37": "EM_FR20", "38": "EM_RH32", "39": "EM_RCE", "40": "EM_ARM", "41": "EM_ALPHA", "42": "EM_SH", "43": "EM_SPARCV9", "44": "EM_TRICORE", "45": "EM_ARC", "46": "EM_H8_300", "47": "EM_H8_300H", "48": "EM_H8S", "49": "EM_H8_500", "50": "EM_IA_64", "51": "EM_MIPS_X", "52": "EM_COLDFIRE", "53": "EM_68HC12", "54": "EM_MMA", "55": "EM_PCP", "56": "EM_NCPU", "57": "EM_NDR1", "58": "EM_STARCORE", "59": "EM_ME16", "60": "EM_ST100", "61": "EM_TINYJ", "62": "EM_X86_64", "63": "EM_PDSP", "64": "EM_PDP10", "65": "EM_PDP11", "66": "EM_FX66", "67": "EM_ST9PLUS", "68": "EM_ST7", "69": "EM_68HC16", "70": "EM_68HC11", "71": "EM_68HC08", "72": "EM_68HC05", "73": "EM_SVX", "74": "EM_ST19", "75": "EM_VAX", "76": "EM_CRIS", "77": "EM_JAVELIN", "78": "EM_FIREPATH", "79": "EM_ZSP", "80": "EM_MMIX", "81": "EM_HUANY", "82": "EM_PRISM", "83": "EM_AVR", "84": "EM_FR30", "85": "EM_D10V", "86": "EM_D30V", "87": "EM_V850", "88": "EM_M32R", "89": "EM_MN10300", "90": "EM_MN10200", "91": "EM_PJ", "92": "EM_OPENRISC", "93": "EM_ARC_COMPACT", "94": "EM_XTENSA", "95": "EM_VIDEOCORE", "96": "EM_TMM_GPP", "97": "EM_NS32K", "98": "EM_TPC", "99": "EM_SNP1K", "100": "EM_ST200", "101": "EM_IP2K", "102": "EM_MAX", "103": "EM_CR", "104": "EM_F2MC16", "105": "EM_MSP430", "106": "EM_BLACKFIN", "107": "EM_SE_C33", "108": "EM_SEP", "109": "EM_ARCA", "110": "EM_UNICORE", "111": "EM_EXCESS", "112": "EM_DXP", "113": "EM_ALTERA_NIOS2", "114": "EM_CRX", "115": "EM_XGATE", "116": "EM_C166", "117": "EM_M16C", "118": "EM_DSPIC30F", "119": "EM_CE", "120": "EM_M32C", "131": "EM_TSK3000", "132": "EM_RS08", "133": "EM_SHARC", "134": "EM_ECOG2", "135": "EM_SCORE7", "136": "EM_DSP24", "137": "EM_VIDEOCORE3", "138": "EM_LATTICEMICO32", "139": "EM_SE_C17", "140": "EM_TI_C6000", "141": "EM_TI_C2000", "142": "EM_TI_C5500", "143": "EM_TI_ARP32", "144": "EM_TI_PRU", "160": "EM_MMDSP_PLUS", "161": "EM_CYPRESS_M8C", "162": "EM_R32C", "163": "EM_TRIMEDIA", "164": "EM_QDSP6", "165": "EM_8051", "166": "EM_STXP7X", "167": "EM_NDS32", "168": "EM_ECOG1", "168": "EM_ECOG1X", "169": "EM_MAXQ30", "170": "EM_XIMO16", "171": "EM_MANIK", "172": "EM_CRAYNV2", "173": "EM_RX", "174": "EM_METAG", "175": "EM_MCST_ELBRUS", "176": "EM_ECOG16", "177": "EM_CR16", "178": "EM_ETPU", "179": "EM_SLE9X", "180": "EM_L10M", "181": "EM_K10M", "183": "EM_AARCH64", "185": "EM_AVR32", "186": "EM_STM8", "187": "EM_TILE64", "188": "EM_TILEPRO", "189": "EM_MICROBLAZE", "190": "EM_CUDA", "191": "EM_TILEGX", "192": "EM_CLOUDSHIELD", "193": "EM_COREA_1ST", "194": "EM_COREA_2ND", "195": "EM_ARC_COMPACT2", "196": "EM_OPEN8", "197": "EM_RL78", "198": "EM_VIDEOCORE5", "199": "EM_78KOR", "200": "EM_56800EX", "201": "EM_BA1", "202": "EM_BA2", "203": "EM_XCORE", "204": "EM_MCHP_PIC", "205": "EM_INTEL205", "206": "EM_INTEL206", "207": "EM_INTEL207", "208": "EM_INTEL208", "209": "EM_INTEL209", "210": "EM_KM32", "211": "EM_KMX32", "212": "EM_KMX16", "213": "EM_KMX8", "214": "EM_KVARC", "215": "EM_CDP", "216": "EM_COGE", "217": "EM_COOL", "218": "EM_NORC", "219": "EM_CSR_KALIMBA", "220": "EM_Z80", "221": "EM_VISIUM", "222": "EM_FT32", "223": "EM_MOXIE", "224": "EM_AMDGPU", "243": "EM_RISCV" } }),
  u32("e_version", {  }),
  u32("e_entry", {  }),
  u32("e_phoff", {  }),
  u32("e_shoff", {  }),
  u32("e_flags", {  }),
  u16("e_ehsize", {  }),
  u16("e_phentsize", {  }),
  u16("e_phnum", {  }),
  u16("e_shentsize", {  }),
  u16("e_shnum", {  }),
  u16("e_shstrndx", {  }),
]);

const Elf64_Ehdr = struct("Elf64_Ehdr", [
  u16("e_type", { values: { "0": "NONE", "1": "REL", "2": "EXEC", "3": "DYN", "4": "CORE" } }),
  u16("e_machine", { values: { "0": "EM_NONE", "1": "EM_M32", "2": "EM_SPARC", "3": "EM_386", "4": "EM_68K", "5": "EM_88K", "6": "EM_IAMCU", "7": "EM_860", "8": "EM_MIPS", "9": "EM_S370", "10": "EM_MIPS_RS4_BE", "15": "EM_PARISC", "17": "EM_VPP500", "18": "EM_SPARC32PLUS", "19": "EM_960", "20": "EM_PPC", "21": "EM_PPC64", "22": "EM_S390", "23": "EM_SPU", "36": "EM_V800", "37": "EM_FR20", "38": "EM_RH32", "39": "EM_RCE", "40": "EM_ARM", "41": "EM_ALPHA", "42": "EM_SH", "43": "EM_SPARCV9", "44": "EM_TRICORE", "45": "EM_ARC", "46": "EM_H8_300", "47": "EM_H8_300H", "48": "EM_H8S", "49": "EM_H8_500", "50": "EM_IA_64", "51": "EM_MIPS_X", "52": "EM_COLDFIRE", "53": "EM_68HC12", "54": "EM_MMA", "55": "EM_PCP", "56": "EM_NCPU", "57": "EM_NDR1", "58": "EM_STARCORE", "59": "EM_ME16", "60": "EM_ST100", "61": "EM_TINYJ", "62": "EM_X86_64", "63": "EM_PDSP", "64": "EM_PDP10", "65": "EM_PDP11", "66": "EM_FX66", "67": "EM_ST9PLUS", "68": "EM_ST7", "69": "EM_68HC16", "70": "EM_68HC11", "71": "EM_68HC08", "72": "EM_68HC05", "73": "EM_SVX", "74": "EM_ST19", "75": "EM_VAX", "76": "EM_CRIS", "77": "EM_JAVELIN", "78": "EM_FIREPATH", "79": "EM_ZSP", "80": "EM_MMIX", "81": "EM_HUANY", "82": "EM_PRISM", "83": "EM_AVR", "84": "EM_FR30", "85": "EM_D10V", "86": "EM_D30V", "87": "EM_V850", "88": "EM_M32R", "89": "EM_MN10300", "90": "EM_MN10200", "91": "EM_PJ", "92": "EM_OPENRISC", "93": "EM_ARC_COMPACT", "94": "EM_XTENSA", "95": "EM_VIDEOCORE", "96": "EM_TMM_GPP", "97": "EM_NS32K", "98": "EM_TPC", "99": "EM_SNP1K", "100": "EM_ST200", "101": "EM_IP2K", "102": "EM_MAX", "103": "EM_CR", "104": "EM_F2MC16", "105": "EM_MSP430", "106": "EM_BLACKFIN", "107": "EM_SE_C33", "108": "EM_SEP", "109": "EM_ARCA", "110": "EM_UNICORE", "111": "EM_EXCESS", "112": "EM_DXP", "113": "EM_ALTERA_NIOS2", "114": "EM_CRX", "115": "EM_XGATE", "116": "EM_C166", "117": "EM_M16C", "118": "EM_DSPIC30F", "119": "EM_CE", "120": "EM_M32C", "131": "EM_TSK3000", "132": "EM_RS08", "133": "EM_SHARC", "134": "EM_ECOG2", "135": "EM_SCORE7", "136": "EM_DSP24", "137": "EM_VIDEOCORE3", "138": "EM_LATTICEMICO32", "139": "EM_SE_C17", "140": "EM_TI_C6000", "141": "EM_TI_C2000", "142": "EM_TI_C5500", "143": "EM_TI_ARP32", "144": "EM_TI_PRU", "160": "EM_MMDSP_PLUS", "161": "EM_CYPRESS_M8C", "162": "EM_R32C", "163": "EM_TRIMEDIA", "164": "EM_QDSP6", "165": "EM_8051", "166": "EM_STXP7X", "167": "EM_NDS32", "168": "EM_ECOG1", "168": "EM_ECOG1X", "169": "EM_MAXQ30", "170": "EM_XIMO16", "171": "EM_MANIK", "172": "EM_CRAYNV2", "173": "EM_RX", "174": "EM_METAG", "175": "EM_MCST_ELBRUS", "176": "EM_ECOG16", "177": "EM_CR16", "178": "EM_ETPU", "179": "EM_SLE9X", "180": "EM_L10M", "181": "EM_K10M", "183": "EM_AARCH64", "185": "EM_AVR32", "186": "EM_STM8", "187": "EM_TILE64", "188": "EM_TILEPRO", "189": "EM_MICROBLAZE", "190": "EM_CUDA", "191": "EM_TILEGX", "192": "EM_CLOUDSHIELD", "193": "EM_COREA_1ST", "194": "EM_COREA_2ND", "195": "EM_ARC_COMPACT2", "196": "EM_OPEN8", "197": "EM_RL78", "198": "EM_VIDEOCORE5", "199": "EM_78KOR", "200": "EM_56800EX", "201": "EM_BA1", "202": "EM_BA2", "203": "EM_XCORE", "204": "EM_MCHP_PIC", "205": "EM_INTEL205", "206": "EM_INTEL206", "207": "EM_INTEL207", "208": "EM_INTEL208", "209": "EM_INTEL209", "210": "EM_KM32", "211": "EM_KMX32", "212": "EM_KMX16", "213": "EM_KMX8", "214": "EM_KVARC", "215": "EM_CDP", "216": "EM_COGE", "217": "EM_COOL", "218": "EM_NORC", "219": "EM_CSR_KALIMBA", "220": "EM_Z80", "221": "EM_VISIUM", "222": "EM_FT32", "223": "EM_MOXIE", "224": "EM_AMDGPU", "243": "EM_RISCV" } }),
  u32("e_version", {  }),
  u64("e_entry", {  }),
  u64("e_phoff", {  }),
  u64("e_shoff", {  }),
  u32("e_flags", {  }),
  u16("e_ehsize", {  }),
  u16("e_phentsize", {  }),
  u16("e_phnum", {  }),
  u16("e_shentsize", {  }),
  u16("e_shnum", {  }),
  u16("e_shstrndx", {  }),
]);

const Elf32_Phdr = struct("Elf32_Phdr", [
  u32("p_type", { values: { "0": "NULL", "1": "LOAD", "2": "DYNAMIC", "3": "INTERP", "4": "NOTE", "5": "SHLIB", "6": "PHDR", "7": "TLS", "1610612736": "LOOS", "1879048191": "HIOS", "1879048192": "GNU_EH_FRAME", "1879048193": "GNU_STACK", "1879048194": "GNU_RELRO", "1879048195": "GNU_PROPERTY", "1879048186": "SUNWBSS", "1879048187": "SUNWSTACK", "1879048192": "ARM_ARCHEXT", "1879048193": "ARM_UNWIND" } }),
  u32("p_offset", {  }),
  u32("p_vaddr", {  }),
  u32("p_paddr", {  }),
  u32("p_filesz", {  }),
  u32("p_memsz", {  }),
  record("p_flags", PF),
  u32("p_align", {  }),
]);

const Elf64_Phdr = struct("Elf64_Phdr", [
  u32("p_type", { values: { "0": "NULL", "1": "LOAD", "2": "DYNAMIC", "3": "INTERP", "4": "NOTE", "5": "SHLIB", "6": "PHDR", "7": "TLS", "1610612736": "LOOS", "1879048191": "HIOS", "1879048192": "GNU_EH_FRAME", "1879048193": "GNU_STACK", "1879048194": "GNU_RELRO", "1879048195": "GNU_PROPERTY", "1879048186": "SUNWBSS", "1879048187": "SUNWSTACK", "1879048192": "ARM_ARCHEXT", "1879048193": "ARM_UNWIND" } }),
  record("p_flags", PF),
  u64("p_offset", {  }),
  u64("p_vaddr", {  }),
  u64("p_paddr", {  }),
  u64("p_filesz", {  }),
  u64("p_memsz", {  }),
  u64("p_align", {  }),
]);

const Elf32_Chdr = struct("Elf32_Chdr", [
  u32("ch_type", {  }),
  u32("ch_size", {  }),
  u32("ch_addralign", {  }),
]);

const Elf32_Rel = struct("Elf32_Rel", [
  u32("r_offset", {  }),
  record("r_info", ELF32_R_INFO),
]);

const Elf32_Rela = struct("Elf32_Rela", [
  u32("r_offset", {  }),
  record("r_info", ELF32_R_INFO),
  i32("r_addend", {  }),
]);

const Elf32_Sym = struct("Elf32_Sym", [
  u32("st_name", {  }),
  u32("st_value", {  }),
  u32("st_size", {  }),
  record("st_info", ST),
  u8("st_other", { values: { "0": "DEFAULT", "1": "INTERNAL", "2": "HIDDEN", "3": "PROTECTED" } }),
  u16("st_shndx", {  }),
]);

const Elf32_Syminfo = struct("Elf32_Syminfo", [
  u16("si_boundto", {  }),
  record("si_flags", SYMINFO_FLG),
]);

const Elf32_Dyn = struct("Elf32_Dyn", [
  u32("d_tag", { values: { "0": "DT_NULL", "1": "DT_NEEDED", "2": "DT_PLTRELSZ", "3": "DT_PLTGOT", "4": "DT_HASH", "5": "DT_STRTAB", "6": "DT_SYMTAB", "7": "DT_RELA", "8": "DT_RELASZ", "9": "DT_RELAENT", "10": "DT_STRSZ", "11": "DT_SYMENT", "12": "DT_INIT", "13": "DT_FINI", "14": "DT_SONAME", "15": "DT_RPATH", "16": "DT_SYMBOLIC", "17": "DT_REL", "18": "DT_RELSZ", "19": "DT_RELENT", "20": "DT_PLTREL", "21": "DT_DEBUG", "22": "DT_TEXTREL", "23": "DT_JMPREL", "24": "DT_BIND_NOW", "25": "DT_INIT_ARRAY", "26": "DT_FINI_ARRAY", "27": "DT_INIT_ARRAYSZ", "28": "DT_FINI_ARRAYSZ", "29": "DT_RUNPATH", "30": "DT_FLAGS", "32": "DT_PREINIT_ARRAY", "33": "DT_PREINIT_ARRAYSZ", "34": "DT_MAXPOSTAGS", "35": "DT_NUM", "1879047669": "DT_GNU_PRELINKED", "1879047670": "DT_GNU_CONFLICTSZ", "1879047671": "DT_GNU_LIBLISTSZ", "1879047672": "DT_CHECKSUM", "1879047673": "DT_PLTPADSZ", "1879047674": "DT_MOVEENT", "1879047675": "DT_MOVESZ", "1879047676": "DT_FEATURE_1", "1879047677": "DT_POSFLAG_1", "1879047678": "DT_SYMINSZ", "1879047679": "DT_SYMINENT", "1879047925": "DT_GNU_HASH", "1879047926": "DT_TLSDESC_PLT", "1879047927": "DT_TLSDESC_GOT", "1879047928": "DT_GNU_CONFLICT", "1879047929": "DT_GNU_LIBLIST", "1879047930": "DT_CONFIG", "1879047931": "DT_DEPAUDIT", "1879047932": "DT_AUDIT", "1879047933": "DT_PLTPAD", "1879047934": "DT_MOVETAB", "1879047935": "DT_SYMINFO", "1879048176": "DT_VERSYM", "1879048185": "DT_RELACOUNT", "1879048186": "DT_RELCOUNT", "1879048187": "DT_FLAGS_1", "1879048188": "DT_VERDEF", "1879048189": "DT_VERDEFNUM", "1879048190": "DT_VERNEED", "1879048191": "DT_VERNEEDNUM", "2147483645": "DT_AUXILIARY", "2147483646": "DT_USED", "2147483647": "DT_FILTER", "117440513": "DT_DEPRECATED_SPARC_REGISTER", "1610612749": "DT_SUNW_AUXILIARY", "1610612750": "DT_SUNW_RTLDINF", "1610612751": "DT_SUNW_FILTER", "1610612752": "DT_SUNW_CAP", "1610612753": "DT_SUNW_SYMTAB", "1610612754": "DT_SUNW_SYMSZ", "1610612755": "DT_SUNW_SORTENT", "1610612756": "DT_SUNW_SYMSORT", "1610612757": "DT_SUNW_SYMSORTSZ", "1610612758": "DT_SUNW_TLSSORT", "1610612759": "DT_SUNW_TLSSORTSZ", "1610612761": "DT_SUNW_STRPAD", "1610612763": "DT_SUNW_LDMACH" } }),
  u32("d_val", {  }),
]);

const Elf32_Shdr = struct("Elf32_Shdr", [
  u32("sh_name", {  }),
  u32("sh_type", { values: { "0": "NULL", "1": "PROGBITS", "2": "SYMTAB", "3": "STRTAB", "4": "RELA", "5": "HASH", "6": "DYNAMIC", "7": "NOTE", "8": "NOBITS", "9": "REL", "10": "SHLIB", "11": "DYNSYM", "12": "UNKNOWN12", "13": "UNKNOWN13", "14": "INIT_ARRAY", "15": "FINI_ARRAY", "16": "PREINIT_ARRAY", "17": "GROUP", "18": "SYMTAB_SHNDX", "1879000832": "GNU_INCREMENTAL_INPUTS", "1879048181": "GNU_ATTRIBUTES", "1879048182": "GNU_HASH", "1879048183": "GNU_LIBLIST", "1879048184": "CHECKSUM", "1879048186": "SUNW_move", "1879048187": "SUNW_COMDAT", "1879048188": "SUNW_syminfo", "1879048189": "GNU_verdef", "1879048190": "GNU_verneed", "1879048191": "GNU_versym", "1879048193": "ARM_EXIDX", "1879048194": "ARM_PREEMPTMAP", "1879048195": "ARM_ATTRIBUTES", "1879048196": "ARM_DEBUGOVERLAY", "1879048197": "ARM_OVERLAYSECTION" } }),
  record("sh_flags", SHF),
  u32("sh_addr", {  }),
  u32("sh_offset", {  }),
  u32("sh_size", {  }),
  u32("sh_link", {  }),
  u32("sh_info", {  }),
  u32("sh_addralign", {  }),
  u32("sh_entsize", {  }),
]);

const Elf64_Chdr = struct("Elf64_Chdr", [
  u32("ch_type", {  }),
  u32("ch_size", {  }),
  u32("ch_addralign", {  }),
]);

const Elf64_Rel = struct("Elf64_Rel", [
  u64("r_offset", {  }),
  record("r_info", ELF64_R_INFO),
]);

const Elf64_Rela = struct("Elf64_Rela", [
  u64("r_offset", {  }),
  record("r_info", ELF64_R_INFO),
  i64("r_addend", {  }),
]);

const Elf64_Sym = struct("Elf64_Sym", [
  u32("st_name", {  }),
  record("st_info", ST),
  u8("st_other", { values: { "0": "DEFAULT", "1": "INTERNAL", "2": "HIDDEN", "3": "PROTECTED" } }),
  u16("st_shndx", {  }),
  u64("st_value", {  }),
  u64("st_size", {  }),
]);

const Elf64_Syminfo = struct("Elf64_Syminfo", [
  u16("si_boundto", {  }),
  record("si_flags", SYMINFO_FLG),
]);

const Elf64_Dyn = struct("Elf64_Dyn", [
  u32("d_tag", { values: { "0": "DT_NULL", "1": "DT_NEEDED", "2": "DT_PLTRELSZ", "3": "DT_PLTGOT", "4": "DT_HASH", "5": "DT_STRTAB", "6": "DT_SYMTAB", "7": "DT_RELA", "8": "DT_RELASZ", "9": "DT_RELAENT", "10": "DT_STRSZ", "11": "DT_SYMENT", "12": "DT_INIT", "13": "DT_FINI", "14": "DT_SONAME", "15": "DT_RPATH", "16": "DT_SYMBOLIC", "17": "DT_REL", "18": "DT_RELSZ", "19": "DT_RELENT", "20": "DT_PLTREL", "21": "DT_DEBUG", "22": "DT_TEXTREL", "23": "DT_JMPREL", "24": "DT_BIND_NOW", "25": "DT_INIT_ARRAY", "26": "DT_FINI_ARRAY", "27": "DT_INIT_ARRAYSZ", "28": "DT_FINI_ARRAYSZ", "29": "DT_RUNPATH", "30": "DT_FLAGS", "32": "DT_PREINIT_ARRAY", "33": "DT_PREINIT_ARRAYSZ", "34": "DT_MAXPOSTAGS", "35": "DT_NUM", "1879047669": "DT_GNU_PRELINKED", "1879047670": "DT_GNU_CONFLICTSZ", "1879047671": "DT_GNU_LIBLISTSZ", "1879047672": "DT_CHECKSUM", "1879047673": "DT_PLTPADSZ", "1879047674": "DT_MOVEENT", "1879047675": "DT_MOVESZ", "1879047676": "DT_FEATURE_1", "1879047677": "DT_POSFLAG_1", "1879047678": "DT_SYMINSZ", "1879047679": "DT_SYMINENT", "1879047925": "DT_GNU_HASH", "1879047926": "DT_TLSDESC_PLT", "1879047927": "DT_TLSDESC_GOT", "1879047928": "DT_GNU_CONFLICT", "1879047929": "DT_GNU_LIBLIST", "1879047930": "DT_CONFIG", "1879047931": "DT_DEPAUDIT", "1879047932": "DT_AUDIT", "1879047933": "DT_PLTPAD", "1879047934": "DT_MOVETAB", "1879047935": "DT_SYMINFO", "1879048176": "DT_VERSYM", "1879048185": "DT_RELACOUNT", "1879048186": "DT_RELCOUNT", "1879048187": "DT_FLAGS_1", "1879048188": "DT_VERDEF", "1879048189": "DT_VERDEFNUM", "1879048190": "DT_VERNEED", "1879048191": "DT_VERNEEDNUM", "2147483645": "DT_AUXILIARY", "2147483646": "DT_USED", "2147483647": "DT_FILTER", "117440513": "DT_DEPRECATED_SPARC_REGISTER", "1610612749": "DT_SUNW_AUXILIARY", "1610612750": "DT_SUNW_RTLDINF", "1610612751": "DT_SUNW_FILTER", "1610612752": "DT_SUNW_CAP", "1610612753": "DT_SUNW_SYMTAB", "1610612754": "DT_SUNW_SYMSZ", "1610612755": "DT_SUNW_SORTENT", "1610612756": "DT_SUNW_SYMSORT", "1610612757": "DT_SUNW_SYMSORTSZ", "1610612758": "DT_SUNW_TLSSORT", "1610612759": "DT_SUNW_TLSSORTSZ", "1610612761": "DT_SUNW_STRPAD", "1610612763": "DT_SUNW_LDMACH" } }),
  pad(4),
  u64("d_val", {  }),
]);

const Elf64_Shdr = struct("Elf64_Shdr", [
  u32("sh_name", {  }),
  u32("sh_type", { values: { "0": "NULL", "1": "PROGBITS", "2": "SYMTAB", "3": "STRTAB", "4": "RELA", "5": "HASH", "6": "DYNAMIC", "7": "NOTE", "8": "NOBITS", "9": "REL", "10": "SHLIB", "11": "DYNSYM", "12": "UNKNOWN12", "13": "UNKNOWN13", "14": "INIT_ARRAY", "15": "FINI_ARRAY", "16": "PREINIT_ARRAY", "17": "GROUP", "18": "SYMTAB_SHNDX", "1879000832": "GNU_INCREMENTAL_INPUTS", "1879048181": "GNU_ATTRIBUTES", "1879048182": "GNU_HASH", "1879048183": "GNU_LIBLIST", "1879048184": "CHECKSUM", "1879048186": "SUNW_move", "1879048187": "SUNW_COMDAT", "1879048188": "SUNW_syminfo", "1879048189": "GNU_verdef", "1879048190": "GNU_verneed", "1879048191": "GNU_versym", "1879048193": "ARM_EXIDX", "1879048194": "ARM_PREEMPTMAP", "1879048195": "ARM_ATTRIBUTES", "1879048196": "ARM_DEBUGOVERLAY", "1879048197": "ARM_OVERLAYSECTION" } }),
  record("sh_flags", SHF),
  pad(4),
  u64("sh_addr", {  }),
  u64("sh_offset", {  }),
  u64("sh_size", {  }),
  u32("sh_link", {  }),
  u32("sh_info", {  }),
  u64("sh_addralign", {  }),
  u64("sh_entsize", {  }),
]);

export default definePack({
  name: "Executable and Linkable Format executable (ELF)",
  endian: "little",
  pointerSize: 8,
  types: [SYMINFO_FLG, ST, SHF, ELF32_R_INFO, ELF64_R_INFO, PF, Elf32_Ehdr, Elf64_Ehdr, Elf32_Phdr, Elf64_Phdr, Elf32_Chdr, Elf32_Rel, Elf32_Rela, Elf32_Sym, Elf32_Syminfo, Elf32_Dyn, Elf32_Shdr, Elf64_Chdr, Elf64_Rel, Elf64_Rela, Elf64_Sym, Elf64_Syminfo, Elf64_Dyn, Elf64_Shdr],
  nodes: {
    "entry": structNode(SYMINFO_FLG, { label: "SYMINFO_FLG（入口）" }),
    "ST": structNode(ST, { label: "ST" }),
    "SHF": structNode(SHF, { label: "SHF" }),
    "ELF32_R_INFO": structNode(ELF32_R_INFO, { label: "ELF32_R_INFO" }),
    "ELF64_R_INFO": structNode(ELF64_R_INFO, { label: "ELF64_R_INFO" }),
    "PF": structNode(PF, { label: "PF" }),
    "Elf32_Ehdr": structNode(Elf32_Ehdr, { label: "Elf32_Ehdr" }),
    "Elf64_Ehdr": structNode(Elf64_Ehdr, { label: "Elf64_Ehdr" }),
    "Elf32_Phdr": structNode(Elf32_Phdr, { label: "Elf32_Phdr" }),
    "Elf64_Phdr": structNode(Elf64_Phdr, { label: "Elf64_Phdr" }),
    "Elf32_Chdr": structNode(Elf32_Chdr, { label: "Elf32_Chdr" }),
    "Elf32_Rel": structNode(Elf32_Rel, { label: "Elf32_Rel" }),
    "Elf32_Rela": structNode(Elf32_Rela, { label: "Elf32_Rela" }),
    "Elf32_Sym": structNode(Elf32_Sym, { label: "Elf32_Sym" }),
    "Elf32_Syminfo": structNode(Elf32_Syminfo, { label: "Elf32_Syminfo" }),
    "Elf32_Dyn": structNode(Elf32_Dyn, { label: "Elf32_Dyn" }),
    "Elf32_Shdr": structNode(Elf32_Shdr, { label: "Elf32_Shdr" }),
    "Elf64_Chdr": structNode(Elf64_Chdr, { label: "Elf64_Chdr" }),
    "Elf64_Rel": structNode(Elf64_Rel, { label: "Elf64_Rel" }),
    "Elf64_Rela": structNode(Elf64_Rela, { label: "Elf64_Rela" }),
    "Elf64_Sym": structNode(Elf64_Sym, { label: "Elf64_Sym" }),
    "Elf64_Syminfo": structNode(Elf64_Syminfo, { label: "Elf64_Syminfo" }),
    "Elf64_Dyn": structNode(Elf64_Dyn, { label: "Elf64_Dyn" }),
    "Elf64_Shdr": structNode(Elf64_Shdr, { label: "Elf64_Shdr" }),
  },
});


/*
未移植项：
- ELF.e_ident: 类型 E_IDENT 不可移植
*/
