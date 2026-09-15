// ============================================================
// 全局占位内容数据
// 将下方所有目标值替换为你的真实信息即可更新全站。
// ============================================================

export const PROFILE = {
  // 姓名（英文大写用于头部展示 / 中文用于正文）
  nameEN: "WANG NIDUO",
  nameCN: "王妮朵",
  title: "游戏运营·内容策划",
  slogan: "用数据驱动增长，用内容连接玩家",
  intro:
    "热爱游戏与二次元文化的运营人，擅长社媒内容策划、KOL合作与社区增长。希望用创意和数据为好游戏找到对的人。",
  email: "caroline_2002@126.com",   // [占位] 改为你的邮箱
  phone: "+86 ··· ···",             // [占位] 改为你的电话
};

export const EDUCATION = [
  {
    period: "2022 — 2027",
    school: "[PLACEHOLDER: 学校名称]",
    degree: "[PLACEHOLDER: 专业 / 学历]",
  },
  {
    period: "20xx — 20xx",
    school: "[PLACEHOLDER: 学校名称]",
    degree: "[PLACEHOLDER: 专业 / 学历]",
  },
];

// 语言能力（无灰色说明文字，普通话已按需移除）
export const LANGUAGE = [
  { name: "英语", cert: "CET-6" },
  { name: "葡萄牙语", cert: "CAPLE C1" },
  { name: "日语", cert: "JLPT N1" },
];

export const SKILLS = [
  {
    num: "01",
    cat: "运营核心",
    items: [
      { name: "社区运营", level: 88 },
      { name: "活动策划", level: 90 },
      { name: "用户运营", level: 85 },
      { name: "版本运营", level: 80 },
    ],
  },
  {
    num: "02",
    cat: "数据与分析",
    items: [
      { name: "数据分析", level: 82 },
      { name: "用户增长", level: 75 },
      { name: "社媒运营", level: 86 },
    ],
  },
  {
    num: "03",
    cat: "创意设计",
    items: [
      { name: "Photoshop", level: 85 },
      { name: "文案撰写", level: 88 },
      { name: "视频剪辑", level: 70 },
      { name: "AI创作", level: 85 },
    ],
  },
  {
    num: "04",
    cat: "工具与平台",
    items: [
      { name: "小红书", level: 80 },
      { name: "B站", level: 90 },
      { name: "Dify 工作流", level: 70 },
      { name: "Excel/SQL", level: 78 },
    ],
  },
];

export const EXPERIENCE = [
  {
    period: "2025.03 — 2025.06",
    company: "[PLACEHOLDER: 快手科技]",
    role: "游戏运营 · [占位]",
    points: [
      "[PLACEHOLDER: 负责XX游戏版本上线运营，制定内容计划与节点活动]",
      "[PLACEHOLDER: 通过数据复盘优化素材，提升次日留存X%]",
    ],
  },
  {
    period: "2024.07 — 2024.12",
    company: "[PLACEHOLDER: OlaParty]",
    role: "海外游戏运营 · [占位]",
    points: [
      "[PLACEHOLDER: 负责日本市场社媒矩阵运营与KOL合作]",
      "[PLACEHOLDER: 策划落地活动，带动新增与留存提升X%]",
    ],
  },
];

export const PORTFOLIO = [
  {
    num: "01",
    title: "PS 设计作品",
    desc: "涵盖应援横幅、签名档、头像等非商业设计作品。",
    tags: ["Photoshop", "视觉设计", "二次元"],
    route: "/ps-design",
  },
  {
    num: "02",
    title: "《原神》游戏小结",
    desc: "从玩法、内容、商业化等多维度拆解《原神》的产品小结。",
    tags: ["游戏分析", "笔记", "二次元"],
    route: "/genshin-analysis",
  },
  {
    num: "03",
    title: "社媒 KOL 运营方案",
    desc: "实习期间针对社媒长内容平台的 KOL 拓展与账号运营方案总结。",
    tags: ["方案", "KOL", "社媒运营"],
    route: "/kol-plan",
  },
  {
    num: "04",
    title: "账号运营迭代方案",
    desc: "基于 Dify 工作流的多平台账号运营方案迭代设计。",
    tags: ["方案", "Dify", "自动化"],
    route: "/dify-plan",
  },
  {
    num: "05",
    title: "三亚团建攻略",
    desc: "面向年轻群体的三亚团建旅游攻略，纯干货向内容创作。",
    tags: ["内容创作", "攻略", "旅游"],
    route: "/sanya-guide",
  },
];