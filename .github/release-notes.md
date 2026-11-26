## 中文

**dsh-kite v1.0.6**

- 修复 Remote 入口与 Magpie 用量卡同时显示时，工作区和会话列表被挤出侧栏的问题。较长的主机名会显示省略号，Remote 按钮仍可见。

**Windows Desktop** · 在 PowerShell 中运行 Desktop 自带的启动器，安装后重新打开 Desktop。自定义安装目录需相应修改路径。

```powershell
& "$env:LOCALAPPDATA\Programs\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add -w https://github.com/gaolin89898/dsh-kite/releases/download/v1.0.6/ds-harness-remote-1.0.6.tgz
```

也可以在 Desktop 的「插件 → 添加插件」中粘贴上述 `.tgz` 地址。

**Web** · 在启动 Web 实例的环境中运行以下命令，按需替换 profile 名称。

```sh
dsh plugin --profile web add -w https://github.com/gaolin89898/dsh-kite/releases/download/v1.0.6/ds-harness-remote-1.0.6.tgz
```

## English

**dsh-kite v1.0.6**

- Fix the workspace and session lists disappearing when the Remote entry shares the sidebar with the Magpie usage card. Long host names now truncate so the Remote button stays visible.
