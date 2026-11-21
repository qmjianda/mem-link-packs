/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/3ds.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Vector2f = struct("Vector2f", [
  f32("x", {  }),
  f32("y", {  }),
]);

const Vector3f = struct("Vector3f", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
]);

const FaceFlags = struct("FaceFlags", [
  bits("CA_Visible", 1, { at: 0, bit: 0, unit: 2, label: "CA_Visible" }),
  bits("BC_Visible", 1, { at: 0, bit: 1, unit: 2, label: "BC_Visible" }),
  bits("AB_Visible", 1, { at: 0, bit: 2, unit: 2, label: "AB_Visible" }),
  bits("Mapped", 1, { at: 0, bit: 3, unit: 2, label: "Mapped" }),
  bits("CA_Selected", 1, { at: 0, bit: 13, unit: 2, label: "CA_Selected" }),
  bits("BC_Selected", 1, { at: 0, bit: 14, unit: 2, label: "BC_Selected" }),
  bits("AB_Selected", 1, { at: 0, bit: 15, unit: 2, label: "AB_Selected" }),
]);

const Face = struct("Face", [
  u16("v0", {  }),
  u16("v1", {  }),
  u16("v2", {  }),
  record("flags", FaceFlags),
]);

const VertexFlags = struct("VertexFlags", [
  bits("selected3", 1, { at: 0, bit: 13, unit: 2, label: "selected3" }),
  bits("selected2", 1, { at: 0, bit: 14, unit: 2, label: "selected2" }),
  bits("selected1", 1, { at: 0, bit: 15, unit: 2, label: "selected1" }),
]);

const KeyFlags1 = struct("KeyFlags1", [
  bits("Show_Path", 1, { at: 0, bit: 0, unit: 1, label: "Show_Path" }),
  bits("Smooth", 1, { at: 0, bit: 1, unit: 1, label: "Smooth" }),
  bits("Motion_Blur", 1, { at: 0, bit: 4, unit: 1, label: "Motion_Blur" }),
  bits("Morph_Mat", 1, { at: 0, bit: 6, unit: 1, label: "Morph_Mat" }),
]);

const KeyFlags2 = struct("KeyFlags2", [
  bits("Hidden", 1, { at: 0, bit: 10, unit: 2, label: "Hidden" }),
]);

const Spline = struct("Spline", [
  bits("Use_Tension", 1, { at: 0, bit: 0, unit: 1, label: "Use_Tension" }),
  bits("Use_Continuity", 1, { at: 0, bit: 1, unit: 1, label: "Use_Continuity" }),
  bits("Use_Bias", 1, { at: 0, bit: 2, unit: 1, label: "Use_Bias" }),
  bits("Use_Ease_To", 1, { at: 0, bit: 3, unit: 1, label: "Use_Ease_To" }),
  bits("Use_Ease_From", 1, { at: 0, bit: 4, unit: 1, label: "Use_Ease_From" }),
]);

const VectorKey = struct("VectorKey", [
  u32("index", {  }),
  record("splineData", Spline),
  record("value", Vector3f),
]);

const RotationKey = struct("RotationKey", [
  u32("index", {  }),
  record("splineData", Spline),
  f32("angle", {  }),
  record("vector", Vector3f),
]);

const AngleKey = struct("AngleKey", [
  u32("index", {  }),
  record("splineData", Spline),
  f32("angle", {  }),
]);

const MorphKey = struct("MorphKey", [
  u32("index", {  }),
  record("splineData", Spline),
]);

const HideKey = struct("HideKey", [
  u32("index", {  }),
  record("splineData", Spline),
]);

const TrackFlags = struct("TrackFlags", [
  bits("Mode", 2, { at: 0, bit: 0, unit: 2, label: "Mode" }),
  bits("Lock_X", 1, { at: 0, bit: 3, unit: 2, label: "Lock_X" }),
  bits("Lock_Y", 1, { at: 0, bit: 4, unit: 2, label: "Lock_Y" }),
  bits("Lock_Z", 1, { at: 0, bit: 5, unit: 2, label: "Lock_Z" }),
  bits("Unlink_X", 1, { at: 0, bit: 7, unit: 2, label: "Unlink_X" }),
  bits("Unlink_Y", 1, { at: 0, bit: 8, unit: 2, label: "Unlink_Y" }),
  bits("Unlink_Z", 1, { at: 0, bit: 9, unit: 2, label: "Unlink_Z" }),
]);

const Chunk = struct("Chunk", [
  u16("identifier", { values: { "0": "NULL_CHUNK", "2453": "ChunkType", "2454": "ChunkUnique", "2455": "NotChunk", "2456": "Container", "2457": "IsChunk", "65535": "DUMMY", "61712": "POINT_ARRAY_ENTRY", "61713": "POINT_FLAG_ARRAY_ENTRY", "61728": "FACE_ARRAY_ENTRY", "61744": "MSH_MAT_GROUP_ENTRY", "61760": "TEX_VERTS_ENTRY", "61776": "SMOOTH_GROUP_ENTRY", "61472": "POS_TRACK_TAG_KEY", "61473": "ROT_TRACK_TAG_KEY", "61474": "SCL_TRACK_TAG_KEY", "61475": "FOV_TRACK_TAG_KEY", "61476": "ROLL_TRACK_TAG_KEY", "61477": "COL_TRACK_TAG_KEY", "61478": "MORPH_TRACK_TAG_KEY", "61479": "HOT_TRACK_TAG_KEY", "61480": "FALL_TRACK_TAG_KEY", "16": "COLOR_F", "17": "COLOR_24", "18": "LIN_COLOR_24", "19": "LIN_COLOR_F", "48": "INT_PERCENTAGE", "49": "FLOAT_PERCENTAGE", "19789": "M3DMAGIC", "11565": "SMAGIC", "11581": "LMAGIC", "15786": "MLIBMAGIC", "15871": "MATMAGIC", "2": "M3D_VERSION", "15677": "MDATA", "15678": "MESH_VERSION", "28689": "WORLD_VIEWPORT_DATA", "28690": "WORLD_VIEWPORT_DATA3", "28704": "WORLD_VIEWPORT_SIZE", "28673": "WORLD_VIEWPORT_LAYOUT", "256": "MASTER_SCALE", "4352": "BIT_MAP", "4353": "USE_BIT_MAP", "4608": "SOLID_BGND", "4609": "USE_SOLID_BGND", "4864": "V_GRADIENT", "4865": "USE_V_GRADIENT", "5120": "LO_SHADOW_BIAS", "5136": "HI_SHADOW_BIAS", "5152": "SHADOW_MAP_SIZE", "5168": "SHADOW_SAMPLES", "5184": "SHADOW_RANGE", "5200": "SHADOW_FILTER", "5216": "RAY_BIAS", "5232": "USE_RAYTRACE", "5376": "O_CONSTS", "8448": "AMBIENT_LIGHT", "8704": "FOG", "8705": "USE_FOG", "8720": "FOG_BGND", "8960": "DISTANCE_CUE", "8961": "USE_DISTANCE_CUE", "8962": "WORLD_LAYERED_FOG", "8963": "WORLD_USE_LAYERED_FOG", "12288": "DEFAULT_VIEW", "12304": "VIEW_TOP", "12320": "VIEW_BOTTOM", "12336": "VIEW_LEFT", "12352": "VIEW_RIGHT", "12368": "VIEW_FRONT", "12384": "VIEW_BACK", "12400": "VIEW_USER", "12416": "VIEW_CAMERA", "12432": "VIEW_WINDOW", "16384": "NAMED_OBJECT", "16400": "OBJ_HIDDEN", "16401": "OBJ_VIS_LOFTER", "16402": "OBJ_DOESNT_CAST", "16403": "OBJ_MATTE", "16404": "OBJ_FAST", "16405": "OBJ_PROCEDURAL", "16406": "OBJ_FROZEN", "16407": "OBJ_DONT_RCVSHADOW", "16640": "N_TRI_OBJECT", "16656": "POINT_ARRAY", "16657": "POINT_FLAG_ARRAY", "16672": "FACE_ARRAY", "16688": "MSH_MAT_GROUP", "16689": "OLD_MAT_GROUP", "16720": "SMOOTH_GROUP", "16704": "TEX_VERTS", "16736": "MESH_MATRIX", "16741": "MESH_COLOR", "16752": "MESH_TEXTURE_INFO", "16769": "PROC_NAME", "16770": "PROC_DATA", "16784": "MSH_BOXMAP", "17408": "N_D_L_OLD", "17664": "N_CAM_OLD", "17920": "N_DIRECT_LIGHT", "17936": "DL_SPOTLIGHT", "17959": "DL_RAYSHAD", "17968": "DL_SHADOWED", "17984": "DL_LOCAL_SHADOW", "17985": "DL_LOCAL_SHADOW2", "18000": "DL_SEE_CONE", "18001": "DL_SPOT_RECTANGULAR", "18002": "DL_SPOT_OVERSHOOT", "18003": "DL_SPOT_PROJECTOR", "18004": "DL_EXCLUDE", "18005": "DL_RANGE", "18006": "DL_SPOT_ROLL", "18007": "DL_SPOT_ASPECT", "18008": "DL_RAY_BIAS", "17952": "DL_OFF", "17957": "DL_ATTENUATE", "18009": "DL_INNER_RANGE", "18010": "DL_OUTER_RANGE", "18011": "DL_MULTIPLIER", "18048": "N_AMBIENT_LIGHT", "18176": "N_CAMERA", "18192": "CAM_SEE_CONE", "18208": "CAM_RANGES", "20224": "HIERARCHY", "20240": "PARENT_OBJECT", "20256": "PIVOT_OBJECT", "20272": "PIVOT_LIMITS", "20288": "PIVOT_ORDER", "20304": "XLATE_RANGE", "20480": "POLY_2D", "20496": "SHAPE_OK", "20497": "SHAPE_NOT_OK", "20512": "SHAPE_HOOK", "24576": "PATH_3D", "24581": "PATH_MATRIX", "24592": "SHAPE_2D", "24608": "M_SCALE", "24624": "M_TWIST", "24640": "M_TEETER", "24656": "M_FIT", "24672": "M_BEVEL", "24688": "XZ_CURVE", "24704": "YZ_CURVE", "24720": "INTERPCT", "24736": "DEFORM_LIMIT", "24832": "USE_CONTOUR", "24848": "USE_TWEEN", "24864": "USE_SCALE", "24880": "USE_TWIST", "24896": "USE_TEETER", "24912": "USE_FIT", "24928": "USE_BEVEL", "28672": "VIEWPORT_LAYOUT_OLD", "28688": "VIEWPORT_DATA_OLD", "28673": "VIEWPORT_LAYOUT", "28689": "VIEWPORT_DATA", "28690": "VIEWPORT_DATA_3", "28704": "VIEWPORT_SIZE", "28720": "NETWORK_VIEW", "32768": "XDATA_SECTION", "32769": "XDATA_ENTRY", "32770": "XDATA_APPNAME", "32771": "XDATA_STRING", "32772": "XDATA_FLOAT", "32773": "XDATA_DOUBLE", "32774": "XDATA_SHORT", "32775": "XDATA_LONG", "32776": "XDATA_VOID", "32777": "XDATA_GROUP", "32778": "XDATA_RFU6", "32779": "XDATA_RFU5", "32780": "XDATA_RFU4", "32781": "XDATA_RFU3", "32782": "XDATA_RFU2", "32783": "XDATA_RFU1", "33008": "PARENT_NAME", "45055": "MAT_ENTRY", "40960": "MAT_NAME", "40976": "MAT_AMBIENT", "40992": "MAT_DIFFUSE", "41008": "MAT_SPECULAR", "41024": "MAT_SHININESS", "41025": "MAT_SHIN2PCT", "41026": "MAT_SHIN3PCT", "41040": "MAT_TRANSPARENCY", "41042": "MAT_XPFALL", "41043": "MAT_REFBLUR", "41088": "MAT_SELF_ILLUM", "41089": "MAT_TWO_SIDE", "41090": "MAT_DECAL", "41091": "MAT_ADDITIVE", "41092": "MAT_SELF_ILPCT", "41093": "MAT_WIRE", "41094": "MAT_SUPERSMP", "41095": "MAT_WIRESIZE", "41096": "MAT_FACEMAP", "41098": "MAT_XPFALLIN", "41100": "MAT_PHONGSOFT", "41102": "MAT_WIREABS", "41216": "MAT_SHADING", "41472": "MAT_TEXMAP", "41728": "MAT_MAPNAME", "41744": "MAT_ACUBIC", "41808": "MAT_MAP_TILINGOLD", "41809": "MAT_MAP_TILING", "41810": "MAT_MAP_TEXBLUR_OLD", "41811": "MAT_MAP_TEXBLUR", "41812": "MAT_MAP_USCALE", "41814": "MAT_MAP_VSCALE", "41816": "MAT_MAP_UOFFSET", "41818": "MAT_MAP_VOFFSET", "41820": "MAT_MAP_ANG", "41824": "MAT_MAP_COL1", "41826": "MAT_MAP_COL2", "41828": "MAT_MAP_RCOL", "41830": "MAT_MAP_GCOL", "41832": "MAT_MAP_BCOL", "41476": "MAT_SPECMAP", "41488": "MAT_OPACMAP", "41504": "MAT_REFLMAP", "41520": "MAT_BUMPMAP", "41552": "MAT_USE_REFBLUR", "41554": "MAT_BUMP_PERCENT", "41760": "MAT_SXP_TEXT_DATA", "41761": "MAT_SXP_TEXT2_DATA", "41762": "MAT_SXP_OPAC_DATA", "41764": "MAT_SXP_BUMP_DATA", "41765": "MAT_SXP_SPEC_DATA", "41766": "MAT_SXP_SHIN_DATA", "41768": "MAT_SXP_SELFI_DATA", "41770": "MAT_SXP_TEXT_MASKDATA", "41772": "MAT_SXP_TEXT2_MASKDATA", "41774": "MAT_SXP_OPAC_MASKDATA", "41776": "MAT_SXP_BUMP_MASKDATA", "41778": "MAT_SXP_SPEC_MASKDATA", "41780": "MAT_SXP_SHIN_MASKDATA", "41782": "MAT_SXP_SELFI_MASKDATA", "41784": "MAT_SXP_REFL_MASKDATA", "41786": "MAT_TEX2MAP", "41788": "MAT_SHINMAP", "41789": "MAT_SELFIMAP", "41790": "MAT_TEXMASK", "41792": "MAT_TEX2MASK", "41794": "MAT_OPACMASK", "41796": "MAT_BUMPMASK", "41798": "MAT_SHINMASK", "41800": "MAT_SPECMASK", "41802": "MAT_SELFIMASK", "41804": "MAT_REFLMASK", "45056": "KFDATA", "45066": "KFHDR", "45057": "AMBIENT_NODE_TAG", "45058": "OBJECT_NODE_TAG", "45059": "CAMERA_NODE_TAG", "45060": "TARGET_NODE_TAG", "45061": "LIGHT_NODE_TAG", "45062": "L_TARGET_NODE_TAG", "45063": "SPOTLIGHT_NODE_TAG", "45064": "KFSEG", "45065": "KFCURTIME", "45072": "NODE_HDR", "45073": "INSTANCE_NAME", "45074": "PRESCALE", "45075": "PIVOT", "45076": "BOUNDBOX", "45077": "MORPH_SMOOTH", "45088": "POS_TRACK_TAG", "45089": "ROT_TRACK_TAG", "45090": "SCL_TRACK_TAG", "45091": "FOV_TRACK_TAG", "45092": "ROLL_TRACK_TAG", "45093": "COL_TRACK_TAG", "45094": "MORPH_TRACK_TAG", "45095": "HOT_TRACK_TAG", "45096": "FALL_TRACK_TAG", "45097": "HIDE_TRACK_TAG", "45104": "NODE_ID", "49725": "CMAGIC", "49168": "C_MDRAWER", "49184": "C_TDRAWER", "49200": "C_SHPDRAWER", "49216": "C_MODDRAWER", "49232": "C_RIPDRAWER", "49248": "C_TXDRAWER", "49250": "C_PDRAWER", "49252": "C_MTLDRAWER", "49254": "C_FLIDRAWER", "49255": "C_CUBDRAWER", "49264": "C_MFILE", "49280": "C_SHPFILE", "49296": "C_MODFILE", "49312": "C_RIPFILE", "49328": "C_TXFILE", "49330": "C_PFILE", "49332": "C_MTLFILE", "49334": "C_FLIFILE", "49336": "C_PALFILE", "49344": "C_TX_STRING", "49360": "C_CONSTS", "49376": "C_SNAPS", "49392": "C_GRIDS", "49408": "C_ASNAPS", "49424": "C_GRID_RANGE", "49440": "C_RENDTYPE", "49456": "C_PROGMODE", "49472": "C_PREVMODE", "49488": "C_MODWMODE", "49504": "C_MODMODEL", "49520": "C_ALL_LINES", "49536": "C_BACK_TYPE", "49552": "C_MD_CS", "49568": "C_MD_CE", "49584": "C_MD_SML", "49600": "C_MD_SMW", "49603": "C_LOFT_WITH_TEXTURE", "49604": "C_LOFT_L_REPEAT", "49605": "C_LOFT_W_REPEAT", "49606": "C_LOFT_UV_NORMALIZE", "49607": "C_WELD_LOFT", "49616": "C_MD_PDET", "49632": "C_MD_SDET", "49648": "C_RGB_RMODE", "49664": "C_RGB_HIDE", "49666": "C_RGB_MAPSW", "49668": "C_RGB_TWOSIDE", "49672": "C_RGB_SHADOW", "49680": "C_RGB_AA", "49696": "C_RGB_OVW", "49712": "C_RGB_OVH", "49728": "C_RGB_PICTYPE", "49744": "C_RGB_OUTPUT", "49747": "C_RGB_TODISK", "49748": "C_RGB_COMPRESS", "49749": "C_JPEG_COMPRESSION", "49750": "C_RGB_DISPDEV", "49753": "C_RGB_HARDDEV", "49754": "C_RGB_PATH", "49755": "C_BITMAP_DRAWER", "49760": "C_RGB_FILE", "49776": "C_RGB_OVASPECT", "49777": "C_RGB_ANIMTYPE", "49778": "C_RENDER_ALL", "49779": "C_REND_FROM", "49780": "C_REND_TO", "49781": "C_REND_NTH", "49782": "C_PAL_TYPE", "49783": "C_RND_TURBO", "49784": "C_RND_MIP", "49785": "C_BGND_METHOD", "49786": "C_AUTO_REFLECT", "49787": "C_VP_FROM", "49788": "C_VP_TO", "49789": "C_VP_NTH", "49790": "C_REND_TSTEP", "49791": "C_VP_TSTEP", "49792": "C_SRDIAM", "49808": "C_SRDEG", "49824": "C_SRSEG", "49840": "C_SRDIR", "49856": "C_HETOP", "49872": "C_HEBOT", "49888": "C_HEHT", "49904": "C_HETURNS", "49920": "C_HEDEG", "49936": "C_HESEG", "49952": "C_HEDIR", "49968": "C_QUIKSTUFF", "49984": "C_SEE_LIGHTS", "50000": "C_SEE_CAMERAS", "50016": "C_SEE_3D", "50032": "C_MESHSEL", "50048": "C_MESHUNSEL", "50064": "C_POLYSEL", "50080": "C_POLYUNSEL", "50082": "C_SHPLOCAL", "50084": "C_MSHLOCAL", "50096": "C_NUM_FORMAT", "50112": "C_ARCH_DENOM", "50128": "C_IN_DEVICE", "50144": "C_MSCALE", "50160": "C_COMM_PORT", "50176": "C_TAB_BASES", "50192": "C_TAB_DIVS", "50208": "C_MASTER_SCALES", "50224": "C_SHOW_1STVERT", "50240": "C_SHAPER_OK", "50256": "C_LOFTER_OK", "50272": "C_EDITOR_OK", "50288": "C_KEYFRAMER_OK", "50304": "C_PICKSIZE", "50320": "C_MAPTYPE", "50336": "C_MAP_DISPLAY", "50352": "C_TILE_XY", "50368": "C_MAP_XYZ", "50384": "C_MAP_SCALE", "50400": "C_MAP_MATRIX_OLD", "50401": "C_MAP_MATRIX", "50416": "C_MAP_WID_HT", "50432": "C_OBNAME", "50448": "C_CAMNAME", "50464": "C_LTNAME", "50469": "C_CUR_MNAME", "50470": "C_CURMTL_FROM_MESH", "50471": "C_GET_SHAPE_MAKE_FACES", "50480": "C_DETAIL", "50496": "C_VERTMARK", "50512": "C_MSHAX", "50528": "C_MSHCP", "50544": "C_USERAX", "50560": "C_SHOOK", "50576": "C_RAX", "50592": "C_STAPE", "50608": "C_LTAPE", "50624": "C_ETAPE", "50632": "C_KTAPE", "50640": "C_SPHSEGS", "50656": "C_GEOSMOOTH", "50672": "C_HEMISEGS", "50688": "C_PRISMSEGS", "50704": "C_PRISMSIDES", "50720": "C_TUBESEGS", "50736": "C_TUBESIDES", "50752": "C_TORSEGS", "50768": "C_TORSIDES", "50784": "C_CONESIDES", "50785": "C_CONESEGS", "50800": "C_NGPARMS", "50816": "C_PTHLEVEL", "50832": "C_MSCSYM", "50848": "C_MFTSYM", "50864": "C_MTTSYM", "50880": "C_SMOOTHING", "50896": "C_MODICOUNT", "50912": "C_FONTSEL", "50928": "C_TESS_TYPE", "50929": "C_TESS_TENSION", "50944": "C_SEG_START", "50949": "C_SEG_END", "50960": "C_CURTIME", "50965": "C_ANIMLENGTH", "50976": "C_PV_FROM", "50981": "C_PV_TO", "50992": "C_PV_DOFNUM", "50997": "C_PV_RNG", "51008": "C_PV_NTH", "51013": "C_PV_TYPE", "51024": "C_PV_METHOD", "51029": "C_PV_FPS", "51045": "C_VTR_FRAMES", "51056": "C_VTR_HDTL", "51057": "C_VTR_HD", "51058": "C_VTR_TL", "51061": "C_VTR_IN", "51072": "C_VTR_PK", "51077": "C_VTR_SH", "51088": "C_WORK_MTLS", "51090": "C_WORK_MTLS_2", "51091": "C_WORK_MTLS_3", "51092": "C_WORK_MTLS_4", "51968": "C_WORK_MTLS_5", "51969": "C_WORK_MTLS_6", "51970": "C_WORK_MTLS_7", "51971": "C_WORK_MTLS_8", "51972": "C_WORKMTL", "51984": "C_SXP_TEXT_DATA", "52000": "C_SXP_TEXT2_DATA", "51985": "C_SXP_OPAC_DATA", "51986": "C_SXP_BUMP_DATA", "52004": "C_SXP_SPEC_DATA", "51987": "C_SXP_SHIN_DATA", "52008": "C_SXP_SELFI_DATA", "52016": "C_SXP_TEXT_MASKDATA", "52018": "C_SXP_TEXT2_MASKDATA", "52020": "C_SXP_OPAC_MASKDATA", "52022": "C_SXP_BUMP_MASKDATA", "52024": "C_SXP_SPEC_MASKDATA", "52026": "C_SXP_SHIN_MASKDATA", "3132": "C_SXP_SELFI_MASKDATA", "52030": "C_SXP_REFL_MASKDATA", "51105": "C_BGTYPE", "51120": "C_MEDTILE", "51152": "C_LO_CONTRAST", "51153": "C_HI_CONTRAST", "51168": "C_FROZ_DISPLAY", "51184": "C_BOOLWELD", "51185": "C_BOOLTYPE", "51456": "C_ANG_THRESH", "51457": "C_SS_THRESH", "51459": "C_TEXTURE_BLUR_DEFAULT", "51712": "C_MAPDRAWER", "51713": "C_MAPDRAWER1", "51714": "C_MAPDRAWER2", "51715": "C_MAPDRAWER3", "51716": "C_MAPDRAWER4", "51717": "C_MAPDRAWER5", "51718": "C_MAPDRAWER6", "51719": "C_MAPDRAWER7", "51720": "C_MAPDRAWER8", "51721": "C_MAPDRAWER9", "51728": "C_MAPDRAWER_ENTRY", "51744": "C_BACKUP_FILE", "51745": "C_DITHER_256", "51746": "C_SAVE_LAST", "51747": "C_USE_ALPHA", "51748": "C_TGA_DEPTH", "51749": "C_REND_FIELDS", "51750": "C_REFLIP", "51751": "C_SEL_ITEMTOG", "51752": "C_SEL_RESET", "51753": "C_STICKY_KEYINF", "51754": "C_WELD_THRESHOLD", "51755": "C_ZCLIP_POINT", "51756": "C_ALPHA_SPLIT", "51760": "C_KF_SHOW_BACKFACE", "51776": "C_OPTIMIZE_LOFT", "51778": "C_TENS_DEFAULT", "51780": "C_CONT_DEFAULT", "51782": "C_BIAS_DEFAULT", "51792": "C_DXFNAME_SRC", "51808": "C_AUTO_WELD", "51824": "C_AUTO_UNIFY", "51840": "C_AUTO_SMOOTH", "51856": "C_DXF_SMOOTH_ANG", "51872": "C_SMOOTH_ANG", "52224": "C_NET_USE_VPOST", "52240": "C_NET_USE_GAMMA", "52256": "C_NET_FIELD_ORDER", "52480": "C_BLUR_FRAMES", "52496": "C_BLUR_SAMPLES", "52512": "C_BLUR_DUR", "52528": "C_HOT_METHOD", "52544": "C_HOT_CHECK", "52560": "C_PIXEL_SIZE", "52576": "C_DISP_GAMMA", "52592": "C_FBUF_GAMMA", "52608": "C_FILE_OUT_GAMMA", "52610": "C_FILE_IN_GAMMA", "52612": "C_GAMMA_CORRECT", "52624": "C_APPLY_DISP_GAMMA", "52640": "C_APPLY_FBUF_GAMMA", "52656": "C_APPLY_FILE_GAMMA", "52672": "C_FORCE_WIRE", "52688": "C_RAY_SHADOWS", "52704": "C_MASTER_AMBIENT", "52720": "C_SUPER_SAMPLE", "52736": "C_OBJECT_MBLUR", "52752": "C_MBLUR_DITHER", "52768": "C_DITHER_24", "52784": "C_SUPER_BLACK", "52800": "C_SAFE_FRAME", "52816": "C_VIEW_PRES_RATIO", "52832": "C_BGND_PRES_RATIO", "52848": "C_NTH_SERIAL_NUM", "53248": "VPDATA", "53504": "P_QUEUE_ENTRY", "53520": "P_QUEUE_IMAGE", "53524": "P_QUEUE_USEIGAMMA", "53536": "P_QUEUE_PROC", "53552": "P_QUEUE_SOLID", "53568": "P_QUEUE_GRADIENT", "53584": "P_QUEUE_KF", "53586": "P_QUEUE_MOTBLUR", "53587": "P_QUEUE_MB_REPEAT", "53600": "P_QUEUE_NONE", "53632": "P_QUEUE_RESIZE", "53637": "P_QUEUE_OFFSET", "53648": "P_QUEUE_ALIGN", "53664": "P_CUSTOM_SIZE", "53776": "P_ALPH_NONE", "53792": "P_ALPH_PSEUDO", "53793": "P_ALPH_OP_PSEUDO", "53794": "P_ALPH_BLUR", "53797": "P_ALPH_PCOL", "53808": "P_ALPH_C0", "53809": "P_ALPH_OP_KEY", "53813": "P_ALPH_KCOL", "53816": "P_ALPH_OP_NOCONV", "53824": "P_ALPH_IMAGE", "53840": "P_ALPH_ALPHA", "53856": "P_ALPH_QUES", "53861": "P_ALPH_QUEIMG", "53872": "P_ALPH_CUTOFF", "53888": "P_ALPHANEG", "54016": "P_TRAN_NONE", "54032": "P_TRAN_IMAGE", "54034": "P_TRAN_FRAMES", "54048": "P_TRAN_FADEIN", "54064": "P_TRAN_FADEOUT", "54080": "P_TRANNEG", "54272": "P_RANGES", "54528": "P_PROC_DATA" } }),
  u32("chunkSize", {  }),
]);

export default definePack({
  name: "Autodesk 3DS Max Model",
  endian: "little",
  pointerSize: 8,
  types: [Vector2f, Vector3f, FaceFlags, Face, VertexFlags, KeyFlags1, KeyFlags2, Spline, VectorKey, RotationKey, AngleKey, MorphKey, HideKey, TrackFlags, Chunk],
  nodes: {
    "entry": structNode(Chunk, { label: "Chunk（入口）" }),
    "Vector2f": structNode(Vector2f, { label: "Vector2f" }),
    "Vector3f": structNode(Vector3f, { label: "Vector3f" }),
    "FaceFlags": structNode(FaceFlags, { label: "FaceFlags" }),
    "Face": structNode(Face, { label: "Face" }),
    "VertexFlags": structNode(VertexFlags, { label: "VertexFlags" }),
    "KeyFlags1": structNode(KeyFlags1, { label: "KeyFlags1" }),
    "KeyFlags2": structNode(KeyFlags2, { label: "KeyFlags2" }),
    "Spline": structNode(Spline, { label: "Spline" }),
    "VectorKey": structNode(VectorKey, { label: "VectorKey" }),
    "RotationKey": structNode(RotationKey, { label: "RotationKey" }),
    "AngleKey": structNode(AngleKey, { label: "AngleKey" }),
    "MorphKey": structNode(MorphKey, { label: "MorphKey" }),
    "HideKey": structNode(HideKey, { label: "HideKey" }),
    "TrackFlags": structNode(TrackFlags, { label: "TrackFlags" }),
  },
});

