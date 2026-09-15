import { useEffect } from "react";
import PageShell from "../components/PageShell";

// 内容来源：用户提供的《原神》游戏分析 PDF（作者 Carolina）
const sections = [
  {
    t: "产品特性",
    items: [
      "类型：开放世界 ARPG。七国世界观、地区探索、解谜、宝箱、神瞳、任务链。",
      "元素反应战斗：火水雷冰草岩风，蒸发、融化、感电、冻结、扩散、绽放等反应，队伍搭配极具策略性。",
      "抽卡养成：角色、武器、命座、圣遗物、天赋、等级构成长期养成线。角色池 90 抽小保底、180 抽大保底；武器池 80 抽保底 + 定轨。",
      "持续运营：约六周一个版本，新角色、新活动、新地图、新剧情轮换更新。",
      "多平台互通：PC、iOS、Android、PS、云原神同账号跨平台存档；支付路径短，应用商店一键付款。",
      "副玩法生态：尘歌壶、七圣召唤、钓鱼、烹饪、联机、千星奇域等。",
      "体力 / 树脂系统：限制资源获取节奏，拉长在线周期。",
    ],
  },
  {
    t: "优点",
    items: [
      "视听质量高：大世界美术、音乐、人物设计出众，每个角色都有配套演示与角色 PV（代表作《神女劈观》《说书人》）。",
      "探索感强：地图设计处处有惊喜。",
      "元素战斗有深度：门槛低、易上手，又可深入研究配队与能量循环策略，衍生出大量深渊主播（如 b 站时雨 ioo、莉法 sama）。",
      "角色塑造与世界观：角色厨、剧情考据、同人创作空间大。",
      "下载免费 + 多平台：即下即玩、门槛低、跨平台方便。",
      "更新稳定、内容量大，长线运营能力强；并具备文化输出与全球本地化能力（多语言配音、全球同步）。",
    ],
  },
  {
    t: "不足与机会",
    items: [
      "新手追赶成本高：地图、任务、材料、活动持续堆积。",
      "限时活动：错过可能少剧情、道具甚至角色。",
      "角色养成周期长：周本材料、圣遗物、天赋、经验书、武器都需大量体力与时间，圣遗物词条随机、毕业缓慢（合成减负但周期仍长）。",
      "数值膨胀与强度焦虑：新角色 / 新环境让老角色承压，多反应体系并行会显著抬高养成成本；但相较星穹铁道仍算克制，班尼特、行秋、砂糖等四星仍具价值。",
    ],
  },
  {
    t: "玩家群体",
    items: [
      "休闲探索党：看风景、开图、追主线，主玩七圣召唤、尘歌壶等副玩法，不太在意深渊（如自由魂、氿氿、洒家是猫酱）。",
      "剧情党 / 考据党：剧情分析、世界观考据（如骚橙、屠鸟哥、重云哥）。",
      "角色厨 / 收集党：为喜爱角色抽卡、购买皮肤周边、关注二创。",
      "强度党 / 深渊竞速：研究配队、圣遗物、循环与竞速。",
      "二创群体：同人、MMD，活跃于 Lofter、微博、B站、AO3、Pixiv 等（如暗猫の祝福、哈米伦、葡萄奶绿）。",
      "社交 / 联机玩家：周本、活动、带萌新。地域覆盖中日韩、东南亚、欧美、拉美、中东，以二次元文化圈为核心；日本二次元圈不易破圈，声优、偶像是重要入坑锚点。",
    ],
  },
];

const payTable = [
  { point: "首充双倍 / 小额礼包", fn: "首次付费钩子", mind: "登门槛、损失厌恶", goal: "把零氪转化为付费用户" },
  { point: "空月祝福（月卡）", fn: "订阅制", mind: "每日登录、棘轮效应", goal: "稳定流水、提高留存" },
  { point: "珍珠纪行", fn: "任务型订阅", mind: "目标效应、沉没成本", goal: "绑定在线时长、提升 ARPU" },
  { point: "角色池", fn: "核心 SKU", mind: "保底、目标效应", goal: "主要卖点" },
  { point: "武器池", fn: "附加 SKU", mind: "定轨、狄德罗效应", goal: "提升复购与深度付费" },
  { point: "命座", fn: "复购机制", mind: "禀赋效应、目标效应", goal: "拉高付费上限" },
  { point: "限时卡池", fn: "稀缺供给", mind: "损失厌恶", goal: "制造集中消费窗口" },
  { point: "皮肤 / 礼包", fn: "外观与促销", mind: "心理账户、锚定", goal: "覆盖中低付费、补充收入" },
  { point: "树脂 / 体力", fn: "节奏控制", mind: "损失厌恶、习惯", goal: "维持日活与资源付费" },
];

const psychology = [
  {
    t: "登门槛效应：从 0 到 1，再到持续付费",
    d: "免费下载先让玩家玩进去，再用首充双倍、6 元首充、30 元月卡等极低门槛完成「第一次付费」；月卡把付费变成每日登录习惯，纪行用沉没成本绑定任务。关键不是一次赚 648，而是先把零氪变成付费玩家，跨过心理门槛后后续消费阻力大幅降低。",
  },
  {
    t: "棘轮效应：由奢入俭难",
    d: "习惯月卡、纪行后停掉会觉得原石与材料骤降；账号沉淀了时间、金钱、角色与成就等沉没成本，满命、专武、深渊满星等社交身份进一步推高消费，付费等级通常沿月卡 → 纪行 → 首充 → 中氪 → 重氪逐级上升，退坑与降氪的心理成本都很高。",
  },
  {
    t: "目标效应：保底、命座、专武、深渊",
    d: "70-80 抽的保底计数器制造「再抽几发就出」的目标梯度；歪了之后的大保底促使继续追；命座 0→1→2→6 每层都是新目标；抽到角色后又会追加专武、皮肤，形成配套消费。深渊满星、角色 / 圣遗物毕业、攒原石（160 / 1600 / 16000）等目标与损失厌恶结合后推动持续投入或攒抽。",
  },
];

const otherPsychology = [
  "斯金纳箱 / 鸽子效应：抽卡随机出货，每个十连都可能出金，随机奖励刺激持续投入，易成瘾。",
  "损失厌恶 / FOMO：限时卡池、活动过期、首充重置、纪行限时，制造错过焦虑。",
  "心理账户：创世结晶、原石、纠缠之缘层层分离，弱化真实货币感知，稀释「氪金」痛感。",
  "沉没成本：已投入的时间与金钱，让人倾向于继续玩、继续氪。",
  "社交比较：晒卡、深渊使用率、竞速、二创，持续刺激强度焦虑。",
  "狄德罗效应：已拥有角色后，更想补齐命座、专武、皮肤等配套商品。",
  "诱饵效应：礼包低 / 中 / 高档位、纪行升级版等，引导选择中高档。",
];

const payTiers = [
  { name: "零氪", d: "提供生态、社交传播、联机活跃，是社区运营的基本盘。" },
  { name: "月卡 / 纪行党", d: "稳定现金流，登门槛后的主力付费人群。" },
  { name: "中氪", d: "追角色、专武、关键命座，贡献核心营收。" },
  { name: "重氪", d: "满命满精，以社交展示、竞速、收藏为核心诉求。" },
  { name: "风险群体", d: "未成年人、冲动消费、赌博质疑、消费失控，需重点关注与保护。" },
];

const controversies = [
  "抽卡是否等于赌博？",
  "概率公示、保底、防沉迷机制是否足够？",
  "免费能玩主线，但付费影响收集与强度体验。",
  "心理设计是否存在过度诱导？",
];

const promo = [
  "角色 PV / 版本前瞻 / EP / 角色演示：常出圈，成为角色塑造的一部分。",
  "全球本地化：多语言配音、地区文化营销。",
  "音乐会与线下活动：交响音乐会、FES、联动；HOYO-Mix 音乐是一大特色。",
  "品牌联动：KFC、必胜客、三星、索尼等。",
  "奖项与主流认可：TGA 最佳移动游戏、玩家之声等。",
  "二创激励：创作者计划、同人活动、直播抽卡变现。",
  "早期话题：开放世界 + 二次元 + 免费手游的空白，以及「塞尔达争议」带来的巨大讨论度（黑红也是红）。",
];

const ecoSections = [
  {
    t: "内容生态",
    items: [
      "官方内容：主线、传说任务、活动、地图、深渊、七圣召唤、尘歌壶。",
      "中外翻译亮点：利用汉字文化圈优势做术语统一，再按地区文化原型差异化本地化；善用片假名与汉字区隔角色成长背景。稻妻走「归化」、璃月走「异化」，角色语气高度依赖日语人称与敬语重写。",
    ],
  },
  {
    t: "衍生品生态",
    items: [
      "工具生态：米游社、HoYoLAB、观测枢、互动地图、Wiki、伤害计算器等。",
      "商业周边：手办、谷子、音乐会、联动、动画项目、线下活动（如 LINE 表情包等）。",
    ],
  },
  {
    t: "玩家生态",
    items: [
      "UGC 二创：攻略、同人图、MAD、考据、剧情分析、抽卡直播、竞速。",
      "社区平台：B站、贴吧、NGA、Reddit、Discord、YouTube、Twitter。",
      "风险生态：账号交易、代肝、代充、初始号，均存在封号 / 被骗风险。",
    ],
  },
  {
    t: "红人 / UGC 生态",
    items: [
      "日本红人合作（影响力—垂直度—转化力）：与超人气头部 Vtuber（如 Hiakumantenbara Salome）及知名声优合作，借助其粉丝圈层突破日本保守排外的二次元圈；通过 HoYoCREATOR 计划激励 KOC 持续产出（官方定调—媒体解读—社区渗透的路径）；邀请主播 / 攻略创作者超前体验版本，维持核心玩家粘性（体验服资格与报酬曾引发争议）。",
      "日本 UGC 运营：为破解文化差异导致的内容断层与同质化，与飞书深诺等专业营销公司合作，建立模块化内容日历与话题库，优化内容质量、规避高敏感舆情风险；米哈游专注内容与 IP 研发，将 UGC 生态外包给本地化洞察与舆情监测更擅长的机构，是极具性价比的启发。",
    ],
  },
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("inview")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Genshin() {
  useReveal();
  let n = 0;
  const next = () => String(++n).padStart(2, "0");

  return (
    <PageShell back="/" title="《原神》游戏分析" sub="GAME ANALYSIS · 游戏分析">
      <p className="lead reveal">
        《原神》是研究「内容驱动长线运营 + 全球本地化发行 + 免费抽卡商业化」的典型样本。
        以下从产品特性、优缺点、玩家群体，到发行与付费机制、宣发亮点与游戏生态，系统梳理我对它的理解与运营思考。
      </p>

      {sections.map((s) => (
        <section className="section" key={s.t}>
          <h3 className="detail-sec-title reveal">
            <span className="rd mono">{next()}</span> {s.t}
          </h3>
          <ul className="dot-list reveal">
            {s.items.map((it) => <li key={it}>{it}</li>)}
          </ul>
        </section>
      ))}

      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 发行与付费机制
        </h3>
        <p className="reveal">
          米哈游 / HoYoverse 自研自发、全球发行，国服与国际服版本同步但数据不互通；覆盖 PC、移动端、PS4/PS5、Epic 及云游戏，
          并通过官网、应用商店、PS 商店、Epic 多渠道触达，以米游社 / HoYoLAB 做社区承接与私域转化；云原神旨在降低设备门槛（需付费并有免费时长赠送）。
          商业化逻辑为：用免费开放世界获客，用角色与武器抽卡变现，用月卡 / 纪行提供稳定现金流，用版本更新维持留存，用社区二创降低获客成本。
          主线、地图、活动基本免费，而角色收集、强度、外观、命座、专武及资源限制，形成「免费可攒但慢，付费可加速」的结构，持续制造付费动机。
        </p>
        <div className="table-wrap reveal">
          <table className="pay-table">
            <thead>
              <tr><th>付费点</th><th>商业功能</th><th>心理机制</th><th>商业目的</th></tr>
            </thead>
            <tbody>
              {payTable.map((r) => (
                <tr key={r.point}>
                  <td>{r.point}</td><td>{r.fn}</td><td>{r.mind}</td><td>{r.goal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 心理效应的运营利用
        </h3>
        {psychology.map((p) => (
          <div className="psy-card reveal" key={p.t}>
            <h4>{p.t}</h4>
            <p>{p.d}</p>
          </div>
        ))}
        <h4 className="sub-head reveal">其他关键心理效应</h4>
        <ul className="dot-list reveal">
          {otherPsychology.map((it) => <li key={it}>{it}</li>)}
        </ul>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 玩家付费分层与争议
        </h3>
        <div className="tier-grid reveal">
          {payTiers.map((t) => (
            <div className="tier-card" key={t.name}>
              <h4>{t.name}</h4>
              <p>{t.d}</p>
            </div>
          ))}
        </div>
        <h4 className="sub-head reveal">争议点</h4>
        <ul className="dot-list reveal">
          {controversies.map((it) => <li key={it}>{it}</li>)}
        </ul>
        <p className="reveal">
          <strong>客观评价：</strong>原神有保底、概率公示、主线免费，比许多无保底游戏温和；
          但其心理触发点非常密集，而优秀的长期运营能力也正来源于此。
        </p>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 宣发亮点
        </h3>
        <ul className="dot-list reveal">
          {promo.map((it) => <li key={it}>{it}</li>)}
        </ul>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 游戏生态
        </h3>
        {ecoSections.map((s) => (
          <div className="psy-card reveal" key={s.t}>
            <h4>{s.t}</h4>
            {s.items.map((it) => <p key={it}>{it}</p>)}
          </div>
        ))}
      </section>
    </PageShell>
  );
}