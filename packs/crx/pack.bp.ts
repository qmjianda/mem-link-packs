/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/crx
// 原始 pack：crx · Chrome extension v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 3 项（见文件末尾）
const Crx2Header = struct("Crx2Header", [
  u32("publicKeyLength", { endian: "little", label: "bytes of RSA public key, DER encoded SubjectPublicKeyInfo" }),
  u32("signatureLength", { endian: "little", label: "bytes of RSA SHA-1 signature over the zip" }),
]);

const Crx3Header = struct("Crx3Header", [
  u32("headerLength", { endian: "little", label: "bytes of CrxFileHeader protobuf that follow" }),
]);

const Crx = struct("Crx", [
  str("magic", { size: 4, label: "Cr24" }),
  u32("version", { endian: "little", label: "2 or 3; 3 is what Chrome has published since 2017" }),
]);

export default definePack({
  name: "CRX",
  endian: "little",
  pointerSize: 4,
  types: [Crx2Header, Crx3Header, Crx],
  nodes: {
    "entry": structNode(Crx, { label: "Crx（入口）" }),
    "Crx2Header": structNode(Crx2Header, { label: "Crx2Header" }),
    "Crx3Header": structNode(Crx3Header, { label: "Crx3Header" }),
  },
});


/*
未移植项：
- Crx2Header.publicKey: 变长字节块未移植
- Crx3Header.header: 变长字节块未移植
- Crx.crx2: 条件字段未移植，后续布局在此停止
*/
