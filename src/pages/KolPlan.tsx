import { useEffect } from "react";
import PageShell from "../components/PageShell";

// 内容来源：用户提供的《实习项目方案总结（社媒 KOL 长内容平台等）》PDF
const overview = [
  "项目以日本市场为目标，围绕自有产品 yoitoki.jp 搭建社媒长内容矩阵，通过统一人设「ひろき（Hiroki）」在 Note、Ameba、livedoor、Hatena 四个平台差异化分发，形成内部互相导流的信任链条。",
  "四个平台分工互补：Note 出理论 / 框架 / 犀利观点建立权威，Ameba 用具体生活场景做「活人举证」，livedoor 靠 SEO 关键词抢自然流量入口，Hatena 用数据 / 实证角度补充可信度，共同构成「专业感 + 真实感 + 流量入口 + 可信度」的完整闭环。",
];

const platforms = [
  {
    name: "Note · 冷峻理论家",
    tag: "建立理论权威感",
    rows: [
      ["核心功能", "产出可截图传播的金句与框架，建立理论权威感"],
      ["内容支柱", "MBTI / 性格相性攻略、热点综艺与社会话题犀利解读、效率 / 战略框架恋爱方法论、「ヤバい女」真实故事连载"],
      ["语气文体", "冷峻断言体，です / ます 敬体，大量 ❌⭕ 符号，括号内自嘲吐槽"],
      ["篇幅形式", "长文约 2000 字，结构化小标题"],
      ["商业植入", "中等，文中嵌入链接"],
    ],
  },
  {
    name: "Ameba · 温暖生活家",
    tag: "生活场景活人举证",
    rows: [
      ["核心功能", "用与女友互动的生活化细节，把抽象方法论落到具体场景"],
      ["内容支柱", "情侣日常（周末约会、一起做饭、按摩、逛街）、热点评论 + 自我叙事混合"],
      ["语气文体", "温暖、共情、呼吁 EQ；emoji 密集，口语化、多用「！」"],
      ["篇幅形式", "生活叙事，结尾引导关注"],
      ["商业植入", "轻，情感自然带出"],
    ],
  },
  {
    name: "livedoor · SEO 炎上煽动家",
    tag: "抢占搜索流量入口",
    rows: [
      ["核心功能", "以 SEO 自然搜索流量为主，标题含时效词 + 关键词堆砌"],
      ["内容支柱", "择偶市场价值论等话题的 SEO 关键词攻略体"],
      ["语气文体", "です / ます + 断言，言辞较犀利，风险偏高"],
      ["篇幅形式", "文末挂引流 SOP 链接"],
      ["商业植入", "重度，几乎每篇硬广 + 排行榜互投挂件"],
    ],
  },
  {
    name: "Hatena · 数据分析师 / 实证达人",
    tag: "数据实证补充可信度",
    rows: [
      ["核心功能", "引用真实政府 / 公开调查数据（如国税庁等）佐证观点"],
      ["内容支柱", "婚活效率与数据洞察（数据分析体），后期增加实践验证内容"],
      ["语气文体", "早期客观分析、后期中性，三段论结构"],
      ["篇幅形式", "数据佐证型长文，文末导流至 note / yoitoki.jp"],
      ["商业植入", "中等，以可信度反哺其他平台引用"],
    ],
  },
];

const avoid = [
  ["性别相关措辞", "评价异性群体时避免贬低 / 污名化的极端词汇；可保留犀利感，但论述对象应是「现象」而非「群体人格攻击」。"],
  ["数据 / 统计表述", "涉及百分比、成功率、样本量等数字必须可追溯真实来源；无来源时改用定性表达（如「不少人反馈」），禁止编造数字冒充研究结论。"],
  ["内容母题", "同一母题（如 MBTI 系列）不能仅替换表层标签，每次需在案例细节、切入角度或结构上有实质差异，避免「换皮复读」。"],
  ["跨平台立场", "四平台的自称身份、核心主张与道德立场应保持一致，避免因平台不同给出相互矛盾的观点。"],
  ["语气基调", "各平台已设定的语气基调（Note 断言体、Ameba 温暖体）应作为长期锚点，避免随时间软化或漂移。"],
];

export default function KolPlan() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("inview")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  let n = 0;
  const next = () => String(++n).padStart(2, "0");

  return (
    <PageShell back="/" title="社媒 KOL 长内容平台运营方案" sub="INTERNSHIP · KOL 运营方案">
      <p className="lead reveal">
        OLA PARTY JAPAN 旗下社交产品 Yoitoki 的日本市场拉新与种草方案：
        以统一人设运营 Note、Ameba、livedoor、Hatena 四大长内容平台，并联动日本 KOL / KOC 完成产品在目标人群中的宣传拉新。
      </p>

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> 矩阵策略总览</h3>
        <ul className="dot-list reveal">
          {overview.map((o) => <li key={o}>{o}</li>)}
        </ul>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> 四平台人格对照与内容打法</h3>
        <div className="platform-grid">
          {platforms.map((p) => (
            <div className="platform-card reveal" key={p.name}>
              <div className="platform-head">
                <h4>{p.name}</h4>
                <span className="mono">{p.tag}</span>
              </div>
              <table className="kv-table">
                <tbody>
                  {p.rows.map(([k, v]) => (
                    <tr key={k}><th>{k}</th><td>{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> 内容风险与规避准则</h3>
        <div className="table-wrap reveal">
          <table className="pay-table">
            <thead><tr><th>事项</th><th>写作准则</th></tr></thead>
            <tbody>
              {avoid.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> PR TIMES 官方新闻稿与 SEO 导流</h3>
        <div className="table-wrap reveal">
          <table className="pay-table">
            <thead><tr><th>主体</th><th>内容</th></tr></thead>
            <tbody>
              <tr><td>涉及业务</td><td>PR Times 新闻稿 / 系列 SEO 文章（时段与原 yoitoki 运营互斥，期间 Yoitoki 账号更新减少，最终发布共 11 篇）</td></tr>
              <tr><td>代表案例</td><td>以「今年の花火大会、誰と行きますか？」为例：结合 7 月下旬隅田川花火大会季节热点，围绕「时间 / 对话 / 费用 / 照片 / 关系推进」五个维度展开约会前的价值观确认建议，将 AI 美緒（Mio）、AI 映美（Emi）、AI 由美（Yumi）三个产品功能自然嵌入场景化叙事，并引用 Reuters 物价报道及一篇约 40 万用户规模的交友通讯行为研究作为外部数据支撑，符合 PR 稿件「数据来源需标注机构 / 标题 / 日期 / 样本量」的写作规范；文中还植入多条 yoitoki.jp 站内博客链接，与 SEO 文章矩阵互链，兼具 PR 传播与 SEO 导流双重作用。</td></tr>
              <tr><td>成果数据</td><td>Page View 较前月增长 11 倍；PR Times X 官号每篇转发；外链累计增加 112 条；GEO 效果支持 59 个 query 进入谷歌 AI Summary；同期有类似 webridge 的 affiliate 供应商主动接洽。</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> PR 写作复盘：可复用的引流 / 避免限流准则</h3>
        <ul className="dot-list reveal">
          <li>文章必须介绍 App 的一个特点（属性 / 社区 / 功能等），且产品功能点需具备时效性（一个月内发布），或采用自社调查；文中所有数据 / 调查须在文末标注调查名称、机构、日期、参与者人数与调查 URL。</li>
          <li>文章需援引 2 个第三方数据说明观点并包含数据分析；标题尽可能含有「AI」字样，更利于引流与转载。</li>
          <li>配图 / 封面不得含争议语句或「No.1」等绝对化用语，否则会被撤稿；文章中必须包含企业在 PR Times 注册的企业名，否则会被限流。</li>
          <li>可发布其他语言文章，但必须附日文翻译且日文至少占 50%，否则易被限流 / 撤稿；一个账户可为同一篇文章无限点赞，点赞量与观看量无直接关系。</li>
          <li>面临困难：若既无新功能也无自社调查怎么办？→ 自创社媒事件：A. 发布 campaign 创作新鲜事（如七夕最佳约会地点投票话题）；B. 官宣产品推出「恋活婚活研究实验室」；C. 撰写自社调查并补充问卷 / 数据。</li>
        </ul>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> AI 生成内容质量评估（日语学习 App）</h3>
        <p className="lead reveal">
          参与公司孵化的日语学习类新产品项目（周期 3-4 周）：针对 AI 生成的日语学习文章进行人工评分，评分结果用于模型微调及内容团队质量监控报表。
        </p>
        <ul className="dot-list reveal">
          <li>内容范围：覆盖恋爱乙女游戏、Chiikawa、少女漫画、推理小说、秘境探访等六至七个主题，难度覆盖 N5-N1 全阶段，评估文章达数百篇。</li>
          <li>评分方式：以「可读性 / 吸引力」为核心的粗粒度维度（「让人想读」到「完全读不懂 / 读不下去」），结合语法、内容、设定、逻辑等角度综合判断；与同组实习生评分标准自然一致，无需专门校准。</li>
        </ul>
        <div className="table-wrap reveal">
          <table className="pay-table">
            <thead><tr><th>归纳的问题</th><th>规律与优化方向</th></tr></thead>
            <tbody>
              <tr><td>题材与文体适配</td><td>秘境探访类倾向短句 + である体，规避语法风险但削弱历史 / 故事题材的文学质感；部分文章「叙述体 / 敬体」混用不一致</td></tr>
              <tr><td>AI 用词失真</td><td>AI 易混淆中日汉字 / 繁简字（如误将「穴場」写成「小众秘境」），为后续 prompt 优化提供修正方向</td></tr>
              <tr><td>叙事逻辑漏洞</td><td>短篇推理小说结局仓促、人物逻辑前后矛盾；长篇完整度更高，说明 AI 在短文本内伏笔与收束能力有限</td></tr>
              <tr><td>模板化倾向</td><td>秘境探访类结构高度雷同（固定导入 + 历史介绍），环境描写扎实但人物个性缺失，同质化、可读性下降</td></tr>
              <tr><td>题材适配度差异</td><td>Chiikawa 类缺乏中心思想时即便描写细腻也「用力过猛」；少女漫画贴近日常语体，语言难度与题材调性配合度最高</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
