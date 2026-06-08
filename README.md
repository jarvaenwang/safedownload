# SafeDownload - 安全软件下载导航

> 让每一个人都能安全、放心地下载软件

## 项目背景

对于很多电脑基础不太好的人群，下载软件通常是在搜索引擎搜索，但搜索结果中很多是广告和虚假下载站，容易下载到捆绑软件甚至病毒木马。

SafeDownload 致力于解决这个问题，提供常用软件的**官方下载地址导航**，让用户一键直达官网，远离捆绑和病毒。

## 功能特性

- 📦 **10大分类**：浏览器、办公、影音、安全、开发、系统、通讯、设计、下载、压缩
- 🔍 **智能搜索**：支持软件名称、标签搜索
- 🌐 **官网直达**：所有链接均指向软件官方网站
- 💻 **双平台支持**：标注 Windows / Mac 下载按钮
- 📱 **响应式设计**：完美适配桌面端和移动端
- 🌙 **深色模式**：支持浅色/深色主题切换
- ⚡ **极速加载**：静态导出，无需后端服务器

## 技术栈

| 技术 | 用途 |
|------|------|
| Next.js 16 | React 框架 |
| TypeScript | 类型安全 |
| Tailwind CSS | 样式系统 |
| Lucide Icons | 图标库 |
| GitHub Pages | 免费托管 |

## 收录软件

已收录 50+ 款常用软件，包括：

- **浏览器**：Chrome、Firefox、Edge、Brave、Vivaldi
- **办公**：LibreOffice、WPS、Notion、Obsidian、XMind
- **影音**：VLC、OBS、HandBrake、Spotify
- **安全**：Bitwarden、VeraCrypt、Malwarebytes
- **开发**：VS Code、Git、Node.js、Python、Docker
- **系统**：Everything、PowerToys、7-Zip、Revo Uninstaller
- **设计**：GIMP、Blender、Inkscape、Figma
- **通讯**：Telegram、Discord、Zoom
- **下载**：qBittorrent、Motrix、IDM

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署到 GitHub Pages

1. Fork 本仓库
2. 修改 `next.config.ts` 中的 `basePath` 为你的仓库名
3. 推送到 GitHub
4. 在仓库 Settings → Pages 中启用 GitHub Pages

## 设计风格建议

- **配色**：以紫色/靛蓝色为主色调，传达安全、可信赖的感觉
- **圆角**：大圆角设计，友好亲切
- **动效**：微妙的悬停效果和过渡动画
- **留白**：充足的留白，降低信息密度

## 合规建议

1. **免责声明**：明确标注仅提供导航，软件版权归原开发者
2. **无存储**：不存储任何软件安装包，仅提供官网链接
3. **中立性**：客观展示软件，不做主观推荐排名
4. **隐私**：不收集用户下载行为数据
5. **更新**：定期检查和更新软件链接有效性

## 开发计划

### 第一阶段（已完成）
- [x] 基础框架搭建
- [x] 首页 Hero 区域
- [x] 软件卡片组件
- [x] 分类页面
- [x] 搜索功能
- [x] 响应式设计
- [x] 深色模式

### 第二阶段（建议）
- [ ] 软件详情页
- [ ] 用户评分/评论系统
- [ ] 软件版本检测
- [ ] 下载量统计
- [ ] 多语言支持

### 第三阶段（进阶）
- [ ] 软件更新提醒
- [ ] 收藏夹功能
- [ ] PWA 离线支持
- [ ] 暗黑模式自动切换

## License

MIT License - 自由使用和修改


**安全下载，从 SafeDownload 开始** 🔒
