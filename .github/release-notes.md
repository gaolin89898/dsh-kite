## 中文

**dsh-kite v1.0.5**

- 适配 Harness `0.2.3-alpha.2` 和 Cordis 4.2。可从 Web 侧栏打开 Remote，在插件详情页查看设置并接收实时状态更新。
- Remote 控制接口仅允许所有者访问。共享会话的访客请求由本机 Gateway 鉴权，即使所有者已切换到远程工作区。
- TUI 配套依赖同步到该 alpha 版本。Linux 安装器使用 Node.js `24.22.3`。

```sh
dsh plugin --profile desktop add -w https://github.com/gaolin89898/dsh-kite/releases/download/v1.0.5/ds-harness-remote-1.0.5.tgz
```

Web 用户将 `desktop` 换为实际 profile。

## English

**dsh-kite v1.0.5**

- Add support for Harness `0.2.3-alpha.2` and Cordis 4.2. Open Remote from the Web sidebar and view its settings and live status in the plugin details.
- Restrict the Remote control API to the owner. The local Gateway authorizes shared-session guests even while the owner is using a remote workspace.
- Align the TUI dependencies with this Harness alpha and update the Linux installer to Node.js `24.22.3`.
