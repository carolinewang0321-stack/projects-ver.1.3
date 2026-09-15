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
        OLA PARTY JAPAN × 短剧社交产品 Yoitoki 的日本市场拉新与种草方案：
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
    </PageShell>
  );
}
