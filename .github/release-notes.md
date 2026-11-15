## 中文

**v1.0.2**

### 品牌与版本

- 自 `v1.0.1` 升级：显示名称、内部包名、插件 ID 与凭据存储路径保持不变，继续从 `gaolin89898/dsh-kite` 的 GitHub Release 安装与更新。

```sh
dsh plugin --profile desktop add -w https://github.com/gaolin89898/dsh-kite/releases/download/v1.0.2/ds-harness-remote-1.0.2.tgz
```

Web 用户将 `desktop` 换为实际 profile（通常为 `web`）。已有安装可在同一 profile 执行此命令切换来源，然后按提示重启。

### 远程体验

- 支持异步上下文压缩：长会话压缩不再受 60 秒 RPC 超时限制，断线重连可继续跟踪，取消有生命周期确认。
- LAN 大文件上传走独立加密 TCP 通道：至少 1 MiB 的局域网二进制文件显著提速，会话权限与安全边界保持不变。
- 对齐 DS-Bot 0.3.6：Host 转发其全部 161 个命名接口，管理与电脑控制在已认证通道内完成。
- 修复普通文件上传与 Desktop/IDE 图片转发到远端 Host；本地文件 mention 不再覆盖远端文件。
- Desktop 内可直接升级 npm 安装的 Remote 插件；设置页新增可展开的 Debug 日志抽屉。
- 自托管 Server：REST JSON 严格解析（重复字段拒绝）与非规范 X25519 公钥拒绝。

### 移动端与稳定性

- 移动端继续由外部 DSH Go 客户端提供；本版本不含仓库内置 Android 应用。

## English

**v1.0.2**

### Brand and version

- Upgrade from `v1.0.1`: display name, internal package name, plugin ID and credential storage paths stay unchanged; install and update from `gaolin89898/dsh-kite` GitHub Releases.

```sh
dsh plugin --profile desktop add -w https://github.com/gaolin89898/dsh-kite/releases/download/v1.0.2/ds-harness-remote-1.0.2.tgz
```

### Remote experience

- Tracked asynchronous compaction: long-session compaction no longer hits the 60s RPC deadline; reconnects resume tracking and cancellation is lifecycle-confirmed.
- LAN binary uploads of at least 1 MiB use a separately authenticated Noise/TCP channel for faster transfers with unchanged authorization.
- Align Host routes with DS-Bot 0.3.6 across all 161 named endpoints over the authenticated channel.
- Fixes for ordinary file uploads and Desktop/IDE image forwarding to remote Hosts; local file mentions no longer override remote files.
- Upgrade npm-installed Remote plugins directly inside Desktop; the settings page gains an expandable Debug log drawer.
- Self-hosted Server: strict REST JSON parsing (duplicate-field rejection) and noncanonical X25519 public key rejection.

### Mobile and stability

- Mobile clients remain external (DSH Go); this release does not ship an in-repo Android app.
