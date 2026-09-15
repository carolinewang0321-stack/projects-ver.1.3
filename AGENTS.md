# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── globals.css     # 全局样式（含明暗主题变量）
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 单页主页面（所有板块）
│   ├── components/ui/      # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   └── lib/                # 工具库
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

## 包管理规范

**仅允许使用 pnpm** 作为包管理器。

## 开发规范

### 页面结构说明

本项目为单页营销型简历+作品集网站，所有内容集中在 `src/app/page.tsx` 中，按板块组织：
- Navbar（导航栏 + 主题切换 + 移动菜单）
- HeroSection（首屏英雄区）
- ResumeSection（教育背景 + 技能矩阵 + 工作经历）
- PortfolioSection（5 个作品卡片）
- ContactSection（联系方式 + 社交链接）
- Footer（页脚）

### 占位内容替换

所有内容使用 `[PLACEHOLDER: xxx]` 格式标注，搜索 `PLACEHOLDER` 即可定位所有需替换的内容。

### 主题切换

通过 `document.documentElement.classList.add/remove('dark')` 切换明暗主题，CSS 变量定义在 `globals.css` 中。

### 设计风格

- 二次元/游戏/动漫风格
- 朱红强调色 (#E63946 light / #FF3B30 dark)
- 0px 圆角（硬朗直角风格）
- Inter（正文）+ Space Mono（等宽点缀）
- 细线 hairline 分隔区块
