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
      { label: "笔记①", url: "https://xhslink.cn/o/2tf0qnn42es" },
      { label: "笔记②", url: "https://xhslink.cn/o/7OylQFBq2zO" },
      { label: "笔记③", url: "https://xhslink.cn/o/4160gnBU46h" },
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

export interface GameInfo {
  name: string;
  tag?: string;
  desc?: string;
}

export interface GameCategory {
  cat: string;
  note?: string;
  games: GameInfo[];
}

export const GAME_EXPERIENCE: GameCategory[] = [
  {
    cat: "RPG 手游",
    note: "重度 / 长线养成的核心品类",
    games: [
      {
        name: "洛克王国：世界",
        tag: "开服玩家 · 通行证每期必氪",
        desc: "以抓宠为核心的开放世界RPG，精灵战斗玩法为回合制。在我看来它最大的魅力在于庞大且不断优化的精灵生态，饱含童年回忆的大世界地图。在开放世界游戏遍地开花的当下，它的玩法设计成功地将收集、养成与策略战斗博弈融合，足够打破我的“审美疲劳”，让我持续提供日活。除却活动产能问题，我愿意持续关注它后续的精灵更新。",
      },
      {
        name: "原神",
        tag: "6 年+ · 月卡党 · 全剧情 · 成就 1500+",
        desc: "《原神》是一款开放世界ARPG游戏，“自由探索”这个卖点吸引了我。角色设计美观、大世界解密丰富，可玩性高。其剧情设计流畅，围绕“旅途的见证”这一核心，将哲学、文学等高深内容丝滑融入二次元故事里，体现编剧的功底，再配合高光演出，社区好评如潮。缺点在于，角色养成成本过高，圣遗物随机性大；老玩家做完活动任务地图就面临长草；存在一定的角色强度焦虑问题，但仍然可控且可以通过玩家操作弥补，这点在社区并没有太大声音。",
      },
      {
        name: "崩坏：星穹铁道",
        tag: "开服玩家 · 月卡党 · 货币战争收集党",
        desc: "该游戏将策略深度下放到战前准备，通过角色配队、光锥遗器搭配和速度轴计算，思考战斗方式。我最关注的是它的两个设计选择：①弱点击破机制，让不同角色在不同场景下都有上场价值，避免固定阵容的通病；②把自动战斗做得足够可用，在重复刷取与策略挑战之间找到了平衡，降低了日常负担却不损伤核心乐趣。内容节奏上，依旧是米哈游42天一个版本的稳定产出，同时通过差分宇宙、货币战争等常驻肉鸽玩法，解决了长草期留存问题，整体来说可以总结成：主线负责高光，常驻玩法负责用户粘性，对我理解长线运营产品的内容规划很有参考价值。但角色迭代和强度焦虑成为目前最大的痛点，玩家社区对其表示不满。",
      },
      {
        name: "无限暖暖",
        tag: "开服玩家 · Lv.90+",
        desc: "《无限暖暖》融合换装和开放世界，跳出传统换装游戏框架，很有创意。在开放世界中，套装不仅是外观展示，更能赋予玩家新奇的探索能力，将外观追求转化为玩法驱动力，这种结合为女性向游戏的高品质化提供了新范本。但除优秀的外观产出，我认为多端优化是其目前最关键的课题，根据社区声音及本人体验来看，现已切实影响到玩家留存问题。",
      },
      { name: "绝区零", tag: "开服玩家" },
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
      { name: "偶像梦幻祭（Ensemble Stars）", tag: "" },
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
    title: "《原神》日本社媒（X）分析小结",
    desc: "从账号运营、内容策略、高互动帖与线下联动等维度拆解原神日服 X 官号。",
    tags: ["游戏分析", "社媒", "日本市场"],
    route: "/genshin-x",
  },
  {
    num: "03",
    title: "PS 设计作品",
    desc: "涵盖应援横幅、签名档、头像等非商业设计作品。",
    tags: ["Photoshop", "视觉设计", "二次元"],
    route: "/ps-design",
  },
  {
    num: "04",
    title: "《原神》游戏分析",
    desc: "从玩法、内容、商业化等多维度拆解《原神》。",
    tags: ["游戏分析", "笔记", "二次元"],
    route: "/genshin-analysis",
  },
  {
    num: "05",
    title: "社媒 KOL 运营方案",
    desc: "实习期间针对社媒长内容平台的 KOL 拓展与账号运营方案总结。",
    tags: ["方案", "KOL", "社媒运营"],
    route: "/kol-plan",
  },
  {
    num: "06",
    title: "账号运营迭代方案",
    desc: "基于 Dify 工作流的多平台账号运营方案迭代设计。",
    tags: ["方案", "Dify", "自动化"],
    route: "/dify-plan",
  },
  {
    num: "07",
    title: "三亚团建攻略",
    desc: "面向年轻群体的三亚团建旅游攻略，纯干货向内容创作。",
    tags: ["内容创作", "攻略", "旅游"],
    route: "/sanya-guide",
  },
];