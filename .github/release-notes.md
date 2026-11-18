## 中文

**dsh-kite v1.0.3**

- 修复其他工作区会话过多时，当前工作区也无法列出会话的问题。
- 同时等待同一主机上的多个会话时复用连接，避免重复建连中断等待。
- ACP 长会话仅增量缓存新的历史事件，降低持续运行时的复制开销。
- 自托管 Server 允许浏览器长期缓存带内容哈希的 JS/CSS；账号接口保持不缓存。

```sh
dsh plugin --profile desktop add -w https://github.com/gaolin89898/dsh-kite/releases/download/v1.0.3/ds-harness-remote-1.0.3.tgz
```

Web 用户将 `desktop` 换为实际 profile。静态资源缓存改进需要更新自托管 Server。

## English

**dsh-kite v1.0.3**

- A large, unrelated workspace no longer prevents the selected workspace from listing sessions.
- Waiting on multiple sessions on one Host shares a connection without interrupting sibling subscriptions.
- Long-running ACP sessions copy only new history events into the cache.
- The self-hosted Server allows browsers to reuse fingerprinted JS and CSS across visits. Account responses remain uncached.
