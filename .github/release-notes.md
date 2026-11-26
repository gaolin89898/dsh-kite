## 中文

**dsh-kite v1.0.7**

- 修复 Harness `0.2.2-rc.5` 中本机所有者打开「远程设置」时收到 HTTP 403 的问题。设置入口也兼容 `0.2.3-alpha.2`，共享会话访客仍无法访问。

**Windows Desktop** · 在 PowerShell 中运行 Desktop 自带的启动器，安装后重新打开 Desktop。自定义安装目录需相应修改路径。

```powershell
& "$env:LOCALAPPDATA\Programs\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add -w https://github.com/gaolin89898/dsh-kite/releases/download/v1.0.7/ds-harness-remote-1.0.7.tgz
```

也可以在 Desktop 的「插件 → 添加插件」中粘贴上述 `.tgz` 地址。

**Web** · 在启动 Web 实例的环境中运行以下命令，按需替换 profile 名称。

```sh
dsh plugin --profile web add -w https://github.com/gaolin89898/dsh-kite/releases/download/v1.0.7/ds-harness-remote-1.0.7.tgz
```

## English

**dsh-kite v1.0.7**

- Fix HTTP 403 when the local owner opens Remote settings in Harness `0.2.2-rc.5`. Remote settings also support `0.2.3-alpha.2` and remain restricted to the owner.
