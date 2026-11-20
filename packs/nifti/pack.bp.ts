/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/nifti
// 原始 pack：nifti · NIfTI-1 image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const NiftiUnits = struct("NiftiUnits", [
  bits("space", 3, { at: 0, bit: 0, unit: 1, label: "space" }),
  bits("time", 3, { at: 0, bit: 3, unit: 1, label: "time" }),
]);

const Nifti1 = struct("Nifti1", [
  i32("sizeofHdr", { endian: "little", label: "header size; must be 348" }),
  str("dataType", { size: 10, label: "unused, kept for ANALYZE compatibility" }),
  str("dbName", { size: 18, label: "unused, kept for ANALYZE compatibility" }),
  i32("extents", { endian: "little", label: "unused, kept for ANALYZE compatibility" }),
  i16("sessionError", { endian: "little", label: "unused, kept for ANALYZE compatibility" }),
  char("regular", { endian: "little", label: "unused; ANALYZE writers put r here" }),
  u8("dimInfo", { endian: "little", label: "which dimension is frequency, phase and slice encoded, 2 bits each" }),
  array("dim", "i16", 8, { label: "dim[0] is the number of dimensions in use; dim[1..3] the volume size, dim[4] time points" }),
  f32("intentP1", { endian: "little", label: "first intent parameter, meaning set by intentCode" }),
  f32("intentP2", { endian: "little", label: "second intent parameter" }),
  f32("intentP3", { endian: "little", label: "third intent parameter" }),
  i16("intentCode", { values: { "0": "None", "2": "Correlation", "3": "TTest", "4": "FTest", "5": "ZScore", "6": "ChiSquared", "7": "Beta", "22": "Pval", "23": "LogPval", "1001": "Estimate", "1002": "Label", "1003": "Neuroname", "1004": "GeneralMatrix", "1005": "SymmetricMatrix", "1006": "DisplacementVector", "1007": "Vector", "1008": "Pointset", "1009": "Triangle", "1010": "Quaternion", "1011": "Dimensionless" }, label: "what the voxel values mean" }),
  i16("datatype", { values: { "0": "Unknown", "1": "Binary", "2": "Uint8", "4": "Int16", "8": "Int32", "16": "Float32", "32": "Complex64", "64": "Float64", "128": "Rgb24", "256": "Int8", "512": "Uint16", "768": "Uint32", "1024": "Int64", "1280": "Uint64", "1536": "Float128", "1792": "Complex128", "2048": "Complex256", "2304": "Rgba32" }, label: "how each voxel is stored" }),
  i16("bitpix", { endian: "little", label: "bits per voxel; must agree with datatype" }),
  i16("sliceStart", { endian: "little", label: "index of the first slice acquired" }),
  array("pixdim", "f32", 8, { label: "voxel size along each dimension; pixdim[0] carries the qform determinant sign" }),
  f32("voxOffset", { endian: "little", label: "file offset of the voxel data; 352 in a .nii with no extensions" }),
  f32("sclSlope", { endian: "little", label: "scaling: real value = sclSlope * stored + sclInter (0 means no scaling)" }),
  f32("sclInter", { endian: "little", label: "scaling intercept" }),
  i16("sliceEnd", { endian: "little", label: "index of the last slice acquired" }),
  u8("sliceCode", { values: { "0": "Unknown", "1": "Sequential", "2": "SequentialDown", "3": "Alternating", "4": "AlternatingDown", "5": "Alternating2", "6": "Alternating2Down" }, label: "slice timing order" }),
  record("xyztUnits", NiftiUnits, { label: "units for the spatial and temporal dimensions" }),
  f32("calMax", { endian: "little", label: "display window maximum" }),
  f32("calMin", { endian: "little", label: "display window minimum" }),
  f32("sliceDuration", { endian: "little", label: "time to acquire one slice" }),
  f32("toffset", { endian: "little", label: "time of the first volume, in the temporal unit" }),
  i32("glmax", { endian: "little", label: "unused, kept for ANALYZE compatibility" }),
  i32("glmin", { endian: "little", label: "unused, kept for ANALYZE compatibility" }),
  str("descrip", { size: 80, label: "free-form description, often the scanner and sequence" }),
  str("auxFile", { size: 24, label: "name of an auxiliary file" }),
  i16("qformCode", { values: { "0": "Unknown", "1": "ScannerAnat", "2": "AlignedAnat", "3": "Talairach", "4": "Mni152" }, label: "space the quaternion transform maps into; 0 means unused" }),
  i16("sformCode", { values: { "0": "Unknown", "1": "ScannerAnat", "2": "AlignedAnat", "3": "Talairach", "4": "Mni152" }, label: "space the affine transform maps into; 0 means unused" }),
  f32("quaternB", { endian: "little", label: "quaternion i component; the real part is derived from the three" }),
  f32("quaternC", { endian: "little", label: "quaternion j component" }),
  f32("quaternD", { endian: "little", label: "quaternion k component" }),
  f32("qoffsetX", { endian: "little", label: "translation, x (mm)" }),
  f32("qoffsetY", { endian: "little", label: "translation, y (mm)" }),
  f32("qoffsetZ", { endian: "little", label: "translation, z (mm)" }),
  array("srowX", "f32", 4, { label: "first row of the affine transform" }),
  array("srowY", "f32", 4, { label: "second row of the affine transform" }),
  array("srowZ", "f32", 4, { label: "third row of the affine transform" }),
  str("intentName", { size: 16, label: "name or meaning of the data, when intentCode needs one" }),
  str("magic", { size: 4, label: "n+1 for a single .nii file, ni1 for a .hdr / .img pair" }),
]);

export default definePack({
  name: "NIfTI",
  endian: "little",
  pointerSize: 4,
  types: [NiftiUnits, Nifti1],
  nodes: {
    "entry": structNode(Nifti1, { label: "Nifti1（入口）" }),
    "flags_NiftiUnits": structNode(NiftiUnits, { label: "位域 NiftiUnits" }),
  },
});

