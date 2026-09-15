# 项目上下文

## 技术栈

- **核心**: Vite 7, TypeScript, Express
- **UI**: Tailwind CSS

## 目录结构

```
├── scripts/            # 构建与启动脚本
│   ├── build.sh        # 构建脚本
│   ├── dev.sh          # 开发环境启动脚本
│   ├── prepare.sh      # 预处理脚本
│   └── start.sh        # 生产环境启动脚本
├── server/             # 服务端逻辑
│   ├── routes/         # API 路由
│   ├── server.ts       # Express 服务入口
│   └── vite.ts         # Vite 中间件集成
├── src/                # 前端源码
│   ├── index.css       # 全局样式（含明暗主题变量）
│   ├── main.tsx        # React 入口（BrowserRouter + 路由）
│   ├── App.tsx         # 应用壳（注入 Navbar/Footer）
│   ├── data.ts         # 简历与作品占位数据（改这里换真实信息）
│   ├── components/     # Navbar / Footer / PageShell
│   └── pages/          # Home + 5 个作品详情页
├── index.html          # 入口 HTML
├── package.json        # 项目依赖管理
├── tsconfig.json       # TypeScript 配置
└── vite.config.ts      # Vite 配置
```

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

- 本项目为 **游戏运营岗位** 个人简历 + 作品集网站（React + Vite SPA，react-router-dom 路由）。
- 页面结构：单页 Home（Hero / 教育背景 / 技能矩阵 / 工作经历 / 作品集 / 联系）+ 5 个作品详情页（/ps-design /genshin-analysis /kol-plan /dify-plan /sanya-guide）。
- 所有简历与作品内容集中在 `src/data.ts`，搜索 `[PLACEHOLDER:` 即可替换占位内容。
- 样式使用纯 CSS（`src/index.css`），CSS 变量 `:root` / `html.dark` 定义明暗主题，通过 `document.documentElement` 切换。
- **仅修改 `src/` 下源码即可**；`server/` 与 `scripts/` 由脚手架提供，无需改动。
- 设计风格：二次元/游戏动漫 · 朱红强调（#E63946 light / #FF3B30 dark）· 0px 直角 · 网格底 · 编号区块（01/02…）· Inter + Space Mono。

### 编码规范

- 默认按 TypeScript `strict` 心智写代码；优先复用当前作用域已声明的变量、函数、类型和导入，禁止引用未声明标识符或拼错变量名。
- 禁止隐式 `any` 和 `as any`；函数参数、返回值、解构项、事件对象、Express `req`/`res`、`catch` 错误在使用前应有明确类型或先完成类型收窄，并清理未使用的变量和导入。
