# SafeDownload 部署指南

## GitHub Pages 部署步骤

### 1. 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 创建名为 `29589.github.io` 的仓库（替换为你的用户名）
3. 设置为 **Public**

### 2. 初始化 Git 并推送代码

在项目目录下执行：

```bash
# 初始化 Git
git init

# 添加远程仓库（替换为你的用户名）
git remote add origin https://github.com/29589/29589.github.io.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: SafeDownload website"

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. **Source** 选择 **Deploy from a branch**
3. **Branch** 选择 `main`，文件夹选择 `/ (root)`
4. 点击 **Save**

### 4. 访问网站

等待几分钟后，访问：
```
https://29589.github.io/safe-download/
```

---

## 网站功能

- ✅ 10大软件分类（浏览器、办公、影音、安全、开发等）
- ✅ 50+ 常用软件收录
- ✅ 搜索功能
- ✅ 响应式设计（桌面+移动端）
- ✅ 深色/浅色主题切换
- ✅ 所有下载链接直达官网
- ✅ 静态导出，无需后端服务器

## 技术栈

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS
- Lucide Icons
- 静态导出（SSG）
