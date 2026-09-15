# 游戏运营岗位 - 个人简历+作品集网站

## 概述

面向游戏运营岗位求职的单页营销型个人网站，用于展示个人简介、教育背景、工作经历、项目作品集和联系方式。使用 Next.js 构建，所有内容暂用清晰标注的占位数据，方便后续替换为真实内容。设计引导（原型设计）已开启，需先完成原型再进入开发。

## 技术方案

| 维度 | 选择 | 理由 |
|------|------|------|
| 框架 | Next.js 16 (App Router) | 用户指定，支持后续扩展 |
| 语言 | TypeScript | 类型安全 |
| 样式 | Tailwind CSS 4 + CSS Variables | 现代、高效、支持主题变量 |
| UI 组件 | shadcn/ui | Next.js 项目标配，组件质量高 |
| 图标 | Lucide React | 轻量、风格统一 |
| 动画 | CSS transitions + Intersection Observer | 滚动入场动画，无需额外依赖 |
| 部署 | 单页静态输出 | 展示型网站，无需服务端逻辑 |

## 功能模块

### 1. Hero 区域（首屏）
- 全屏视觉冲击：姓名、目标岗位（游戏运营）、一句话个人 Slogan
- 背景使用渐变/几何图形，营造游戏行业氛围
- 向下滚动引导箭头

### 2. 关于我（个人简介）
- 简短自我介绍（2-3 句话）
- 核心优势标签（如：用户增长、活动策划、数据分析、社区运营等）
- 占位内容标注：`[PLACEHOLDER: 个人简介]`

### 3. 工作经历 & 教育背景
- 时间线布局（左侧时间，右侧内容）
- 每段经历：公司/学校名、职位/专业、时间段、核心成果（2-3 条）
- 占位内容标注：`[PLACEHOLDER: 工作经历]`、`[PLACEHOLDER: 教育背景]`

### 4. 项目作品集
- 卡片网格布局（2-3 列）
- 每张卡片：项目封面图（占位图）、项目名称、项目描述、个人职责、关键数据成果
- 支持点击展开详情（Modal 或内联展开）
- 占位内容标注：`[PLACEHOLDER: 作品信息]`

### 5. 数据亮点（可选增强）
- 3-4 个关键数字展示（如：累计活动覆盖用户 XX 万、提升留存 XX%、管理社区 XX 人）
- 数字滚动动画（进入视口时触发）

### 6. 联系方式 & 页脚
- 邮箱、手机号、微信（占位）
- 社交链接：GitHub、LinkedIn 等（占位）
- 下载简历按钮（占位链接）
- 简洁页脚版权信息

## 是否有原型设计

是

## 实施步骤

### 阶段一：原型设计

1. **原型设计** — 加载 `design-canvas` 技能，按 web 平台规范设计单页简历+作品集网站的完整原型。包含 Hero、关于我、工作经历、作品集、数据亮点、联系方式六大板块的视觉与交互设计。原型完成后提示用户确认，调用 done 工具提交等候用户反馈。

### 阶段二：代码开发

2. **项目初始化与设计变量迁移** — 使用 `coze init --template nextjs` 初始化项目，从原型 `@theme` 提取设计变量写入 `globals.css`，配置 shadcn/ui 组件库。关键文件：`globals.css`、`tailwind.config`、`components/ui/`。

3. **Hero 区域 + 关于我板块** — 实现首屏 Hero（姓名、岗位、Slogan、滚动引导）和"关于我"板块（自我介绍、核心优势标签）。关键文件：`src/app/page.tsx`、`src/components/hero-section.tsx`、`src/components/about-section.tsx`。

4. **工作经历 + 教育背景板块** — 实现时间线布局的经历展示模块，包含工作经历和教育背景两段内容，均使用占位数据。关键文件：`src/components/experience-section.tsx`、`src/components/timeline-item.tsx`。

5. **项目作品集板块** — 实现卡片网格布局的作品集展示，包含占位封面图、项目描述、职责与数据成果，支持点击展开详情 Modal。关键文件：`src/components/portfolio-section.tsx`、`src/components/project-card.tsx`、`src/components/project-modal.tsx`。

6. **数据亮点 + 联系方式 + 页脚** — 实现数字滚动动画的数据亮点区、联系方式区（邮箱/电话/社交链接/下载简历按钮）和页脚。关键文件：`src/components/stats-section.tsx`、`src/components/contact-section.tsx`、`src/components/footer.tsx`。

7. **滚动动画与整体联调** — 为各板块添加 Intersection Observer 滚动入场动画，整合导航栏（滚动时吸顶+背景模糊），检查响应式适配，执行代码检查与验证。关键文件：`src/hooks/use-scroll-animation.ts`、`src/components/navbar.tsx`、`src/app/page.tsx`。

## 页面规格

##### @nav(web-topbar)
> type: topbar
> platform: web

- @page(/) 首页（单页，锚点导航）

> 导航项为锚点链接：#about、#experience、#portfolio、#contact
> Logo 链接到页面顶部 #hero

##### @page(/) 个人简历+作品集

**核心职责**：单页展示游戏运营岗位求职者的完整个人信息与作品集。
**访问路径**：直接访问，无参数。
**布局**：
- 顶部固定导航栏（Logo/姓名 + 锚点导航项 + 下载简历按钮）
- Hero 区域（全屏高度）
- 关于我区域
- 工作经历 & 教育背景区域（时间线布局）
- 项目作品集区域（卡片网格）
- 数据亮点区域（数字展示条）
- 联系方式区域
- 页脚

**状态**：
- 加载态：页面整体 fade-in
- 滚动态：导航栏背景从透明变为毛玻璃效果

**交互说明**

| 元素 | 动作 | 响应 | 传参 | 备注 |
|------|------|------|------|------|
| Logo/姓名 | 点击 | 平滑滚动至 #hero | — | — |
| 导航项（关于我） | 点击 | 平滑滚动至 #about | — | — |
| 导航项（经历） | 点击 | 平滑滚动至 #experience | — | — |
| 导航项（作品集） | 点击 | 平滑滚动至 #portfolio | — | — |
| 导航项（联系我） | 点击 | 平滑滚动至 #contact | — | — |
| 下载简历按钮 | 点击 | 触发简历 PDF 下载 | — | 占位链接 |
| 滚动引导箭头 | 点击 | 平滑滚动至 #about | — | Hero 区域内 |
| 作品卡片 | 点击 | 弹出 @modal(project-detail) | project_id | — |
| 作品 Modal 关闭 | 点击遮罩/关闭按钮 | 关闭 Modal | — | — |
| 社交链接图标 | 点击 | 新标签页打开对应平台 | — | 占位链接 |
| 邮箱地址 | 点击 | 打开邮件客户端 | — | mailto: |
| 各板块 | 滚动进入视口 | fade-in + slide-up 动画 | — | Intersection Observer |
| 数据数字 | 滚动进入视口 | 数字从 0 滚动到目标值 | — | 一次性触发 |

**弹窗 project-detail**：
- 标题：项目名称
- 内容：项目封面大图、详细描述、个人职责列表、关键数据成果
- 操作：关闭（关闭 Modal）
