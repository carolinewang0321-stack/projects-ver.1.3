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
  email: "caroline_2002@126.com",
  phone: "18023478917",
};

// 联系 / 社交媒体链接（小红书为笔记合集，Bilibili 为个人主页）
export const SOCIALS = {
  xiaohongshu: {
    name: "小红书",
    note: "XIAOHONGSHU",
    links: [
      { label: "小红书笔记 ①", url: "https://xhslink.cn/o/2tf0qnn42es" },
      { label: "小红书笔记 ②", url: "https://xhslink.cn/o/7OylQFBq2zO" },
      { label: "小红书笔记 ③", url: "https://xhslink.cn/o/4160gnBU46h" },
    ],
  },
  bilibili: {
    name: "Bilibili",
    note: "BILIBILI",
    links: [{ label: "我的 Bilibili 主页", url: "https://space.bilibili.com/14385889" }],
  },
};

export const EDUCATION = [
  {
    period: "2020.09 — 2024.06",
    school: "北京第二外国语学院",
    degree: "葡萄牙语 · GPA 3.7 · 本科毕业",
  },
  {
    period: "2022.09 — 2023.06",
    school: "葡萄牙科英布拉大学",
    degree: "交换留学",
  },
  {
    period: "2025.09 — 2027.06",
    school: "广东外语外贸大学",
    degree: "日语口译 · 硕士在读",
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
      { name: "社媒运营", level: 88 },
      { name: "活动策划", level: 90 },
      { name: "用户运营", level: 85 },
      { name: "内容运营", level: 86 },
    ],
  },
  {
    num: "02",
    cat: "数据与分析",
    items: [
      { name: "竞品分析", level: 80 },
      { name: "用户增长", level: 82 },
      { name: "社媒逻辑", level: 84 },
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
    period: "2026.03 — 2026.07",
    company: "Olaparty（奥拉帕迪）",
    role: "MKT 日语运营 · 实习",
    points: [
      "负责面向日本用户的网站 / APP 整体营销运营，深度理解日本市场与用户偏好。",
      "日本市场推广：结合日本用户习惯策划并执行 INS、X、TikTok 等平台推广方案，与日本 KOL/KOC 建立合作，完成产品在目标人群中的宣传拉新。",
      "通过搭建 Dify 工作流编排与 Prompt 设计，实现批量内容生成与分发，推动产品官网 SEO 排名显著提升。",
      "内容：在 Ameba blog、Hatena、Livedoor、Note 等日本知名博客平台及官方后台产出核心卖点描述、社媒内容与博客通稿，契合日本流行语境。",
      "社媒：运营官方 INS、X、TikTok、YouTube，负责日常发帖与账号生态维护；并参与网站内容相关的设计与分析，推动产品迭代落地。",
    ],
  },
  {
    period: "2023.09 — 2024.06",
    company: "快手科技",
    role: "Kwai Sports 葡语运营 · 实习",
    points: [
      "担任快手国际版（Kwai）运动专栏及相关网站的运营。",
      "用户增长：负责拉新活动策划、行业头部调研、外国客户采访对接及 Affiliate 联盟营销。",
      "社媒：负责产品在 X、Instagram、Facebook 等海外社媒的宣传运营，整理并反馈用户评论意见，提升产品曝光率与知名度。",
      "社群达人：通过社群训练达人生产视频，最终实现批量宣传效果。",
    ],
  },
];

export const GAME_EXPERIENCE = [
  {
    cat: "RPG 手游",
    note: "重度 / 长线养成的核心品类",
    games: [
      { name: "洛克王国：世界", tag: "开服玩家 · 通行证每期必氪" },
      { name: "原神", tag: "6 年+ · 月卡党 · 全剧情 · 成就 1500+" },
      { name: "崩坏：星穹铁道", tag: "开服玩家 · 月卡党 · 货币战争收集党" },
      { name: "绝区零", tag: "开服玩家" },
      { name: "无限暖暖", tag: "开服玩家 · Lv.90+" },
      { name: "重返未来：1999", tag: "长线体验" },
      { name: "燕云十六声", tag: "深度体验" },
      { name: "终末地", tag: "开服玩家 · 基建狂魔" },
      { name: "异环", tag: "开服玩家 · 都市玩法爱好者" },
      { name: "哈利波特魔法觉醒", tag: "长线体验" },
    ],
  },
  {
    cat: "叙事向与乙女向",
    games: [
      { name: "世界之外", tag: "开服玩家，剧情党" },
      { name: "恋与深空", tag: "" },
      { name: "橙光", tag: "十年老玩家，氪条 1000+" },
    ],
  },
  {
    cat: "换装向",
    games: [
      { name: "暖暖系列", tag: "奇迹暖暖 · 无限暖暖 · 暖暖环游世界" },
      { name: "以闪亮之名", tag: "" },
    ],
  },
  {
    cat: "音游",
    note: "节奏 / 手速与视觉反馈",
    games: [
      { name: "Phigros", tag: "入坑 4 年 · rks 15+" },
      { name: "Lanota", tag: "" },
      { name: "Bang Dream!", tag: "" },
      { name: "Muse Dash", tag: "" },
    ],
  },
  {
    cat: "MOBA",
    games: [
      { name: "王者荣耀", tag: "" },
    ],
  },
];

export const PORTFOLIO = [
  {
    num: "01",
    title: "游戏经历",
    desc: "多品类玩家，RPG 重度爱好者，核心体验并偏好乙女、换装、音游与 MOBA 等游戏。",
    tags: ["游戏", "玩家", "多品类"],
    route: "/game-experience",
  },
  {
    num: "02",
    title: "PS 设计作品",
    desc: "涵盖应援横幅、签名档、头像等非商业设计作品。",
    tags: ["Photoshop", "视觉设计", "二次元"],
    route: "/ps-design",
  },
  {
    num: "03",
    title: "《原神》游戏小结",
    desc: "从玩法、内容、商业化等多维度拆解《原神》的产品小结。",
    tags: ["游戏分析", "笔记", "二次元"],
    route: "/genshin-analysis",
  },
  {
    num: "04",
    title: "社媒 KOL 运营方案",
    desc: "实习期间针对社媒长内容平台的 KOL 拓展与账号运营方案总结。",
    tags: ["方案", "KOL", "社媒运营"],
    route: "/kol-plan",
  },
  {
    num: "05",
    title: "账号运营迭代方案",
    desc: "基于 Dify 工作流的多平台账号运营方案迭代设计。",
    tags: ["方案", "Dify", "自动化"],
    route: "/dify-plan",
  },
  {
    num: "06",
    title: "三亚团建攻略",
    desc: "面向年轻群体的三亚团建旅游攻略，纯干货向内容创作。",
    tags: ["内容创作", "攻略", "旅游"],
    route: "/sanya-guide",
  },
];