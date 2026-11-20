# NOTICE / 上游来源

本目录的部分 pack 由上游格式定义移植而来。生成文件保留每个 pack 的来源、
作者与许可信息；本文件记录固定的上游快照。

## Nybble format registry

- 仓库：<https://github.com/itsmajdbuilds/binary-explorer-registry>
- 快照提交：`a87bb73d6304fadf845afdb84134f95932a0afc3`
- 快照文件：`vendor/nybble-registry.json`（由 `formats/*/plugin.toml` 与
  `meta.toml` 提取，保留 schema 原文）
- 移植器：`scripts/port-nybble.mjs`
- 许可：上游 README 声明，除非 pack 另有说明，registry 中的 pack 可自由使用
  与再分发；每个 pack 的作者/维护者写在 `meta.json` 的 `author` 与 `source`
  字段中。

## ImHex-Patterns

- 仓库：<https://github.com/WerWolv/ImHex-Patterns>
- 快照提交：`d2d3e7cc9aac64804d5e232591645f844748a989`
- 移植器：`scripts/port-imhex.mjs`
- 许可：仓库根目录为 GPL-2.0；派生 pack 以 `GPL-2.0-or-later` 分发，完整文本见
  `licenses/GPL-2.0-or-later.txt`。每个 pack 的 `meta.json` 记录原始
  `patterns/...hexpat` 路径。
- 说明：ImHex 的 Pattern Language 支持条件、循环、运行时函数、解压和校验等
  能力；这里的移植只覆盖可静态确定的固定布局，未覆盖部分在每个 pack 末尾列出。

## 手工 pack

NES、SQLite、PNG、BMP、ZIP、GIF、ELF、PE、JPEG、WAV 由 mem-link 维护，
许可为 MIT。
