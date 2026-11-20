/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/stdfv4.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const VarLenStr = struct("VarLenStr", [
  u8("len", {  }),
]);

const VarLenBytes = struct("VarLenBytes", [
  u8("len", {  }),
]);

const VarLenBits = struct("VarLenBits", [
  u16("bitlen", {  }),
]);

const VarLenNibbles = struct("VarLenNibbles", [
  u8("len", {  }),
]);

const Header = struct("Header", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
]);

const UnknownRecord = struct("UnknownRecord", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
]);

const FAR = struct("FAR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("CPU_TYPE", { values: { "0": "PDP11_VAX", "1": "SUN1234", "2": "IBM" } }),
  u8("STDF_VER", {  }),
]);

const ATR = struct("ATR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
]);

const MIR = struct("MIR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
]);

const MRR = struct("MRR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
]);

const PCR = struct("PCR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_NUM", {  }),
]);

const HBR = struct("HBR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_NUM", {  }),
  u16("HBIN_NUM", {  }),
  u32("HBIN_CNT", {  }),
]);

const SBR = struct("SBR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_NUM", {  }),
  u16("SBIN_NUM", {  }),
  u32("SBIN_CNT", {  }),
]);

const PMR = struct("PMR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u16("PMR_INDX", {  }),
]);

const PGR = struct("PGR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u16("GRP_INDX", {  }),
  record("GRP_NAM", VarLenStr),
  u16("INDX_CNT", {  }),
]);

const PLR = struct("PLR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u16("GRP_CNT", {  }),
]);

const RDR = struct("RDR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u16("NUM_BINS", {  }),
]);

const SDR = struct("SDR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_GRP", {  }),
  u8("SITE_CNT", {  }),
]);

const WIR = struct("WIR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_GRP", {  }),
  u32("START_T", {  }),
]);

const WRR = struct("WRR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_GRP", {  }),
  u32("FINISH_T", {  }),
  u32("PART_CNT", {  }),
]);

const WCR = struct("WCR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
]);

const PIR = struct("PIR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_NUM", {  }),
]);

const PRRPartFlg = struct("PRRPartFlg", [
  bits("supersedes_prev_same_part_id", 1, { at: 0, bit: 0, unit: 1, label: "supersedes_prev_same_part_id" }),
  bits("supersedes_prev_same_xy", 1, { at: 0, bit: 1, unit: 1, label: "supersedes_prev_same_xy" }),
  bits("abnormal_test_end", 1, { at: 0, bit: 2, unit: 1, label: "abnormal_test_end" }),
  bits("part_failed", 1, { at: 0, bit: 3, unit: 1, label: "part_failed" }),
  bits("no_pass_fail", 1, { at: 0, bit: 4, unit: 1, label: "no_pass_fail" }),
]);

const PRR = struct("PRR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_NUM", {  }),
  record("PART_FLG", PRRPartFlg),
  u16("NUM_TEST", {  }),
  u16("HARD_BIN", {  }),
]);

const TSROptFlag = struct("TSROptFlag", [
  bits("TEST_MIN_invalid", 1, { at: 0, bit: 0, unit: 1, label: "TEST_MIN_invalid" }),
  bits("TEST_MAX_invalid", 1, { at: 0, bit: 1, unit: 1, label: "TEST_MAX_invalid" }),
  bits("TEST_TIM_invalid", 1, { at: 0, bit: 2, unit: 1, label: "TEST_TIM_invalid" }),
  bits("TST_SUMS_invalid", 1, { at: 0, bit: 4, unit: 1, label: "TST_SUMS_invalid" }),
  bits("TST_SQRS_invalid", 1, { at: 0, bit: 5, unit: 1, label: "TST_SQRS_invalid" }),
]);

const TSR = struct("TSR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_NUM", {  }),
  char("TEST_TYP", { values: { "0": "PARAMETRIC", "1": "FUNCTIONAL", "2": "MULTIPLE_RESULT", "3": "UNKNOWN" } }),
  u32("TEST_NUM", {  }),
]);

const PTRTestFlg = struct("PTRTestFlg", [
  bits("alarm", 1, { at: 0, bit: 0, unit: 1, label: "alarm" }),
  bits("result_valid", 1, { at: 0, bit: 1, unit: 1, label: "result_valid" }),
  bits("unreliable", 1, { at: 0, bit: 2, unit: 1, label: "unreliable" }),
  bits("timeout", 1, { at: 0, bit: 3, unit: 1, label: "timeout" }),
  bits("executed", 1, { at: 0, bit: 4, unit: 1, label: "executed" }),
  bits("aborted", 1, { at: 0, bit: 5, unit: 1, label: "aborted" }),
  bits("pass_fail_valid", 1, { at: 0, bit: 6, unit: 1, label: "pass_fail_valid" }),
  bits("failed", 1, { at: 0, bit: 7, unit: 1, label: "failed" }),
]);

const ParamFlg = struct("ParamFlg", [
  bits("scale_error", 1, { at: 0, bit: 0, unit: 1, label: "scale_error" }),
  bits("drift_error", 1, { at: 0, bit: 1, unit: 1, label: "drift_error" }),
  bits("oscillation_detected", 1, { at: 0, bit: 2, unit: 1, label: "oscillation_detected" }),
  bits("gt_test_limit", 1, { at: 0, bit: 3, unit: 1, label: "gt_test_limit" }),
  bits("lt_test_limit", 1, { at: 0, bit: 4, unit: 1, label: "lt_test_limit" }),
  bits("passed_alternate_limits", 1, { at: 0, bit: 5, unit: 1, label: "passed_alternate_limits" }),
  bits("eq_low_is_pass", 1, { at: 0, bit: 6, unit: 1, label: "eq_low_is_pass" }),
  bits("eq_high_is_pass", 1, { at: 0, bit: 7, unit: 1, label: "eq_high_is_pass" }),
]);

const PTROptFlag = struct("PTROptFlag", [
  bits("res_scal_invalid", 1, { at: 0, bit: 0, unit: 1, label: "res_scal_invalid" }),
  bits("no_lo_spec_limit", 1, { at: 0, bit: 2, unit: 1, label: "no_lo_spec_limit" }),
  bits("no_hi_spec_limit", 1, { at: 0, bit: 3, unit: 1, label: "no_hi_spec_limit" }),
  bits("lo_limit_llm_scal_invalid", 1, { at: 0, bit: 4, unit: 1, label: "lo_limit_llm_scal_invalid" }),
  bits("hi_limit_hlm_scal_invalid", 1, { at: 0, bit: 5, unit: 1, label: "hi_limit_hlm_scal_invalid" }),
  bits("no_low_limit", 1, { at: 0, bit: 6, unit: 1, label: "no_low_limit" }),
  bits("no_high_limit", 1, { at: 0, bit: 7, unit: 1, label: "no_high_limit" }),
]);

const PTR = struct("PTR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u32("TEST_NUM", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_NUM", {  }),
  record("TEST_FLG", PTRTestFlg),
  record("PARM_FLG", ParamFlg),
]);

const MPR_FTR_TestFlg = struct("MPR_FTR_TestFlg", [
  bits("alarm", 1, { at: 0, bit: 0, unit: 1, label: "alarm" }),
  bits("results_unreliable", 1, { at: 0, bit: 2, unit: 1, label: "results_unreliable" }),
  bits("timeout", 1, { at: 0, bit: 3, unit: 1, label: "timeout" }),
  bits("test_not_executed", 1, { at: 0, bit: 4, unit: 1, label: "test_not_executed" }),
  bits("test_aborted", 1, { at: 0, bit: 5, unit: 1, label: "test_aborted" }),
  bits("completed_no_pass_fail", 1, { at: 0, bit: 6, unit: 1, label: "completed_no_pass_fail" }),
  bits("test_failed", 1, { at: 0, bit: 7, unit: 1, label: "test_failed" }),
]);

const MPROptFlag = struct("MPROptFlag", [
  bits("res_scal_invalid", 1, { at: 0, bit: 0, unit: 1, label: "res_scal_invalid" }),
  bits("start_incr_in_incr_invalid", 1, { at: 0, bit: 1, unit: 1, label: "start_incr_in_incr_invalid" }),
  bits("no_lo_spec_limit", 1, { at: 0, bit: 2, unit: 1, label: "no_lo_spec_limit" }),
  bits("no_hi_spec_limit", 1, { at: 0, bit: 3, unit: 1, label: "no_hi_spec_limit" }),
  bits("lo_limit_llm_scal_invalid", 1, { at: 0, bit: 4, unit: 1, label: "lo_limit_llm_scal_invalid" }),
  bits("hi_limit_hlm_scal_invalid", 1, { at: 0, bit: 5, unit: 1, label: "hi_limit_hlm_scal_invalid" }),
  bits("no_lo_limit", 1, { at: 0, bit: 6, unit: 1, label: "no_lo_limit" }),
  bits("no_hi_limit", 1, { at: 0, bit: 7, unit: 1, label: "no_hi_limit" }),
]);

const MPR = struct("MPR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u32("TEST_NUM", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_NUM", {  }),
  record("TEST_FLG", MPR_FTR_TestFlg),
  record("PARM_FLG", ParamFlg),
  u16("RTN_ICNT", {  }),
  u16("RSLT_CNT", {  }),
]);

const FTROptFlag = struct("FTROptFlag", [
  bits("CYCL_CNT_invalid", 1, { at: 0, bit: 0, unit: 1, label: "CYCL_CNT_invalid" }),
  bits("REL_VADR_invalid", 1, { at: 0, bit: 1, unit: 1, label: "REL_VADR_invalid" }),
  bits("REPT_CNT_invalid", 1, { at: 0, bit: 2, unit: 1, label: "REPT_CNT_invalid" }),
  bits("NUM_FAIL_invalid", 1, { at: 0, bit: 3, unit: 1, label: "NUM_FAIL_invalid" }),
  bits("XFAIL_AD_YFAIL_AD_invalid", 1, { at: 0, bit: 4, unit: 1, label: "XFAIL_AD_YFAIL_AD_invalid" }),
  bits("VECT_OFF_invalid", 1, { at: 0, bit: 5, unit: 1, label: "VECT_OFF_invalid" }),
]);

const FTR = struct("FTR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u32("TEST_NUM", {  }),
  u8("HEAD_NUM", {  }),
  u8("SITE_NUM", {  }),
  record("TEST_FLG", MPR_FTR_TestFlg),
]);

const BPS = struct("BPS", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  record("SEQ_NAME", VarLenStr),
]);

const EPS = struct("EPS", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
]);

const GenData = struct("GenData", [
  u8("type", {  }),
]);

const GDR = struct("GDR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  u16("FLD_CNT", {  }),
]);

const DTR = struct("DTR", [
  u16("REC_LEN", {  }),
  u8("REC_TYPE", {  }),
  u8("REC_SUB", {  }),
  record("TEXT_DAT", VarLenStr),
]);

const Record = struct("Record", [
  record("hh", Header),
]);

const STDF = struct("STDF", [
  record("far_try", FAR),
]);

export default definePack({
  name: "STDFv4 (Standard Test Data Format)",
  endian: "little",
  pointerSize: 8,
  types: [VarLenStr, VarLenBytes, VarLenBits, VarLenNibbles, Header, UnknownRecord, FAR, ATR, MIR, MRR, PCR, HBR, SBR, PMR, PGR, PLR, RDR, SDR, WIR, WRR, WCR, PIR, PRRPartFlg, PRR, TSROptFlag, TSR, PTRTestFlg, ParamFlg, PTROptFlag, PTR, MPR_FTR_TestFlg, MPROptFlag, MPR, FTROptFlag, FTR, BPS, EPS, GenData, GDR, DTR, Record, STDF],
  nodes: {
    "entry": structNode(STDF, { label: "STDF（入口）" }),
    "VarLenStr": structNode(VarLenStr, { label: "VarLenStr" }),
    "VarLenBytes": structNode(VarLenBytes, { label: "VarLenBytes" }),
    "VarLenBits": structNode(VarLenBits, { label: "VarLenBits" }),
    "VarLenNibbles": structNode(VarLenNibbles, { label: "VarLenNibbles" }),
    "Header": structNode(Header, { label: "Header" }),
    "UnknownRecord": structNode(UnknownRecord, { label: "UnknownRecord" }),
    "FAR": structNode(FAR, { label: "FAR" }),
    "ATR": structNode(ATR, { label: "ATR" }),
    "MIR": structNode(MIR, { label: "MIR" }),
    "MRR": structNode(MRR, { label: "MRR" }),
    "PCR": structNode(PCR, { label: "PCR" }),
    "HBR": structNode(HBR, { label: "HBR" }),
    "SBR": structNode(SBR, { label: "SBR" }),
    "PMR": structNode(PMR, { label: "PMR" }),
    "PGR": structNode(PGR, { label: "PGR" }),
    "PLR": structNode(PLR, { label: "PLR" }),
    "RDR": structNode(RDR, { label: "RDR" }),
    "SDR": structNode(SDR, { label: "SDR" }),
    "WIR": structNode(WIR, { label: "WIR" }),
    "WRR": structNode(WRR, { label: "WRR" }),
    "WCR": structNode(WCR, { label: "WCR" }),
    "PIR": structNode(PIR, { label: "PIR" }),
    "PRRPartFlg": structNode(PRRPartFlg, { label: "PRRPartFlg" }),
    "PRR": structNode(PRR, { label: "PRR" }),
    "TSROptFlag": structNode(TSROptFlag, { label: "TSROptFlag" }),
    "TSR": structNode(TSR, { label: "TSR" }),
    "PTRTestFlg": structNode(PTRTestFlg, { label: "PTRTestFlg" }),
    "ParamFlg": structNode(ParamFlg, { label: "ParamFlg" }),
    "PTROptFlag": structNode(PTROptFlag, { label: "PTROptFlag" }),
    "PTR": structNode(PTR, { label: "PTR" }),
    "MPR_FTR_TestFlg": structNode(MPR_FTR_TestFlg, { label: "MPR_FTR_TestFlg" }),
    "MPROptFlag": structNode(MPROptFlag, { label: "MPROptFlag" }),
    "MPR": structNode(MPR, { label: "MPR" }),
    "FTROptFlag": structNode(FTROptFlag, { label: "FTROptFlag" }),
    "FTR": structNode(FTR, { label: "FTR" }),
    "BPS": structNode(BPS, { label: "BPS" }),
    "EPS": structNode(EPS, { label: "EPS" }),
    "GenData": structNode(GenData, { label: "GenData" }),
    "GDR": structNode(GDR, { label: "GDR" }),
    "DTR": structNode(DTR, { label: "DTR" }),
    "Record": structNode(Record, { label: "Record" }),
  },
});


/*
未移植项：
- ATR.MOD_TIM: 类型 std_time_EpochTime 不可移植
- MIR.SETUP_T: 类型 std_time_EpochTime 不可移植
- MRR.FINISH_T: 类型 std_time_EpochTime 不可移植
*/
