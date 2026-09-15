import PageShell from "../components/PageShell";
import { useEffect } from "react";

const persona = [
  ["名称", "Hiroki（ひろき）"],
  ["性别 / 年龄", "30 岁，日本男性"],
  ["职业", "东京婚活 App 产品运营"],
  ["学历", "东京都内 4 年制大学毕业，有长期恋爱经验"],
  ["标签", "婚活社群观察者 / 数据分析派婚活男子 / 方法论实践者"],
  ["语气基调", "真诚、腼腆、略带强迫症，数据支撑观点，讲究结构严谨"],
  ["反差记忆点", "人设守则：真诚不说教，有社交不足感但善于自我复盘"],
  ["关联产品", "多平台内容持续导流至 yoitoki.jp（自有产品）及 note 原文，形成矩阵内部互相导流结构。"],
];

const motifs = [
  { m: "择偶市场价值论", d: "用收入、年龄、条件等「市场 / 经济学」视角解构择偶行为", p: "Note、livedoor、Hatena" },
  { m: "MBTI / 性格相性分析", d: "用性格类型框架解读恋爱相性与沟通策略", p: "Note、livedoor" },
  { m: "沟通与约会实战技巧", d: "具体场景下的话术、破冰、话题接续等可执行建议", p: "Ameba、Hatena" },
  { m: "婚活效率与数据洞察", d: "引用真实统计数据分析婚活市场现象", p: "Hatena" },
  { m: "社会热点 / 综艺争议评论", d: "借势高讨论度婚恋新闻或综艺节目切入观点", p: "全平台" },
  { m: "真实故事连载", d: "半虚构的「遇到过的人 / 事件」第一人称叙事", p: "Note「ヤバい女」系列" },
  { m: "情侣日常生活记录", d: "与伴侣真实互动的生活化细节，强化「活人举证」", p: "Ameba 特有" },
];

const carriers = [
  "热点评论型：借势时事新闻 / 综艺话题切入观点",
  "方法论清单型：分点列出可执行的技巧或判断标准",
  "数据佐证型：引用真实来源的统计数据支撑论点",
  "自我叙事型：第一人称生活场景或故事情节描写",
  "读者 Q&A 型：以读者真实提问为切入点展开分析",
  "实践验证型：呈现「亲自测试」的过程与结果，偏轻量口语化",
  "SEO 关键词攻略体：标题堆砌关键词 + 时效词，服务搜索排名",
];

// 母题 × 载体 组合示例（文档第五章核心）
const combos = [
  { m: "择偶市场价值论", c: "数据佐证型", e: "「晚婚化的日本：30 岁后的择偶市场到底发生了什么」——引用统计局数据 + 平台付费转化样本" },
  { m: "沟通与约会实战技巧", c: "方法论清单型", e: "「第一次约会这样闲聊不冷场：6 个话题接续模板」——分点清单，附场景话术" },
  { m: "真实故事连载", c: "自我叙事型", e: "「ヤバい女」系列第 4 话——第一人称故事连载，强化人设记忆" },
  { m: "婚活效率与数据洞察", c: "实践验证型", e: "「我用 30 天改了资料页，右滑量翻了 3 倍」——亲自测试过程 + 前后对比" },
];

// 平台人格对照表（文档第六章）
const matrixHead = ["对比维度", "Note", "Ameba", "livedoor", "Hatena"];
const matrixRows = [
  ["内容关键词", "印象操作・自我提升・恋爱观点", "真实记录・随性随笔・恋爱新手树洞", "攻略・选婚活机构・干货", "实用方法・真实婚活心得・圆圈型严谨"],
  ["文章类型", "思考型长文・原文链接", "图文日记・短文碎碎念", "SEO 长文・关键词堆砌", "硬核干货・高信息密度列表"],
  ["读者画像是谁", "数字游民 / Z 世代 / 恋爱焦虑派", "学生 / 年轻女性 / 新手", "搜索用户 / 有明确需求", "深度阅读/高知识水平/婚活老兵"],
  ["语气基调", "理性・克制・略带学院派", "随性・分享感强・浅浅撒娇", "中性・信息量大・流程化", "理性・严肃・数据支撑"],
  ["内容密度", "中高", "低", "高", "极高"],
  ["篇幅长度", "2000 字以上长文", "短篇 600 字", "1500 字左右", "1500-3000 字"],
];

// 分平台内容（文档第七章）
const platforms = [
  {
    name: "Note「战略研究所」",
    en: "Hiroki の恋愛戦略ノート",
    role: "主线观点阵地 / 深度核心内容",
    points: [
      "核心定位：恋爱与婚活观点的「战略研究所」，偏理性、去情绪化",
      "内容支柱：择偶市场价值论、MBTI 相性分析、社会热点观点评论",
      "语气基调：理性克制，带学院派句式；篇幅 2000 字以上长文",
      "读者期待：能看到新视角的观点，而非情绪宣泄",
      "注意：观点要自洽，避免为了流量而立场反复横跳",
    ],
  },
  {
    name: "Ameba「真实生活见证站」",
    en: "ひろきのリアル婚活日記",
    role: "活人举证 / 日常陪伴与信任建设",
    points: [
      "核心定位：真实生活日记，建立「Hiroki 是活人」的可信感",
      "内容支柱：情侣日常记录、真实故事连载、沟通与约会实战技巧",
      "语气基调：随性、分享感强、短篇 600 字上下，带生活化细节",
      "读者期待：被陪伴、被理解，看到真实笨拙的一面",
      "注意：控制分享尺度，不把情感问题抛给读者引起负担",
    ],
  },
  {
    name: "livedoor「SEO 流量矩阵站」",
    en: "婚活総合研究所",
    role: "搜索流量入口 / 关键词覆盖",
    points: [
      "核心定位：靠 SEO 抢占搜索入口，做流量来源",
      "内容支柱：攻略体文章、选机构指南、流程化干货",
      "语气基调：中性、信息量大；标题堆砌关键词 + 时效词，1500 字左右",
      "读者期待：快速找到可执行的攻略或结论",
      "注意：内容要和真实功课对应，不能为了关键词乱写误导",
    ],
  },
  {
    name: "Hatena「数据分析师」",
    en: "婚活データ分析室",
    role: "硬核干货阵地 / 深度长文与口碑背书",
    points: [
      "核心定位：以数据和实证建立专业背书，内容被收藏转发",
      "内容支柱：婚活效率与数据洞察、真实婚活心得、高密度列表",
      "语气基调：理性严肃、数据支撑；篇幅 1500-3000 字",
      "读者期待：高信息密度、能被长期收藏的硬核干货",
      "注意：所有数据标注来源，保证可查证",
    ],
  },
];

// 模块选型与占比（Hatena 部分）
const moduleMix = [
  ["方法论清单", "30%"],
  ["真实数据 / 实践验证", "30%"],
  ["高密度信息列表", "25%"],
  ["深度长文", "15%"],
];

// 协同逻辑（文档第八章）
const synergy = [
  "一稿四用：同一母题 + 载体，在四个平台分别改写为符合各自人格与篇幅的内容",
  "导流链路：Hatena / livedoor 承接搜索流量 → Note 承接深度与收藏 → Ameba 建立信任与陪伴",
  "矩阵互导：多平台内容持续导流至 yoitoki.jp 及 note 原文，形成站内站外闭环",
];

// 同一选题的四平台改写方向（文档第九章示例）
const rewriteDir = [
  ["选题", "「2026 年了还有必要 AA 制吗？」"],
  ["Note", "观点长文：从经济学与情感账户角度论证，输出 2000 字深文"],
  ["Ameba", "日记式：写一次约会 AA 的羞耻小插曲，轻松引发共鸣"],
  ["livedoor", "攻略体：盘点日本约会的 N 种付账方式（含 AA 制利弊清单）"],
  ["Hatena", "数据向：引用约会花销统计数据，做理性归纳"],
];

// 需要注意规避的内容（文档第十章）
const avoids = [
  ["绝对不说教", "避免居高临下对读者「教育」；Hiroki 是分享者而非导师"],
  ["不做营销感", "忌生硬推销产品；一切导流都应藏在内容本身的价值里"],
  ["不编造数据", "涉及统计 / 调查的数据必须引来源，绝不虚构"],
  ["不引战观点", "回避两性对立、制造焦虑的极端表达，保持理性温和"],
  ["保护隐私", "真实故事需脱敏，保护他人与本人隐私边界"],
];

// Dify 工作流节点（文档第十一章）
const nodes = [
  ["输入", "目标平台（note / ameba / livedoor / hatena）"],
  ["Node 1 选题分类", "判断选题所属「母题」+「载体」"],
  ["Node 2 素材检索", "按载体类型调用知识库 / 工具，获取真实数据、热点素材或用户问题库条目"],
  ["Node 2.5 平台人格分析", "根据目标平台注入对应人设参数与写作要求"],
  ["Node 3 重复内容校验", "传入「已用结构清单」作为负面示例，强制本次结构与最近 N 篇不同"],
  ["Node 4 正文生成", "System Prompt = 统一人设核心项 + 平台人格 + 母题内容 + 载体格式要求"],
  ["Node 5 人设一致性校验", "校验语气基调、用词边界、立场一致性，不合格打回 Node 4 重写"],
  ["Node 6 格式化输出", "按目标平台排版习惯做最后「装订」，不改变内容实质"],
  ["输出", "该平台可直接发布的成品文本"],
];

export default function DifyPlan() {
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
    <PageShell back="/" title="账号运营迭代方案 · Dify 工作流" sub="ACCOUNT OPERATION · 人设矩阵 + Dify 自动化">
      <p className="lead reveal">
        围绕「Hiroki」人设的日本恋爱向账号运营方案：用「母题 × 载体」内容库保证选题持续且不重复，
        再通过 Dify 工作流把选题分类、素材检索、平台人格注入、去重校验、正文生成与人设一致性校验自动化，
        实现一套内容多平台差异化、规模化生产。
      </p>

      {/* 01 核心人设 */}
      <section className="detail-sec reveal">
        <div className="sec-head">
          <span className="mono">{next()}</span>
          <h3 className="section-title">核心人设<span className="rd">.</span></h3>
        </div>
        <p className="section-sub">统一人设是整套内容的人格根基，各平台内容在其之上做差异化。</p>
        <div className="table-wrap">
          <table className="pay-table">
            <tbody>
              {persona.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      {/* 02 母题 × 载体内容库 */}
      <section className="detail-sec reveal">
        <div className="sec-head">
          <span className="mono">{next()}</span>
          <h3 className="section-title">母题 × 载体内容库<span className="rd">.</span></h3>
        </div>
        <p className="section-sub">用「母题」限定选题方向、用「载体」决定呈现形式，两者叠加保证内容既有深度又能持续换新。</p>

        <h4 className="sub-head rd">母题库（5-8 个，长期不变）</h4>
        <div className="table-wrap">
          <table className="pay-table">
            <thead><tr><th>母题</th><th>定义</th><th>主要平台</th></tr></thead>
            <tbody>
              {motifs.map((x) => <tr key={x.m}><td>{x.m}</td><td>{x.d}</td><td>{x.p}</td></tr>)}
            </tbody>
          </table>
        </div>

        <h4 className="sub-head rd">载体库（呈现形式，可轮换组合）</h4>
        <ul className="dot-list">
          {carriers.map((c) => <li key={c}>{c}</li>)}
        </ul>

        <h4 className="sub-head rd">母题 × 载体 组合示例</h4>
        <div className="table-wrap">
          <table className="pay-table">
            <thead><tr><th>母题</th><th>载体</th><th>示例成稿方向</th></tr></thead>
            <tbody>
              {combos.map((x) => <tr key={x.e}><td>{x.m}</td><td>{x.c}</td><td>{x.e}</td></tr>)}
            </tbody>
          </table>
        </div>

        <p className="callout">
          用法：Dify 在选题分类阶段先判断母题，再结合目标平台从载体库中选取（或轮换）呈现形式，两者叠加后才进入正文生成；
          保证同一母题在不同时间、不同平台产出的内容始终有实质差异。
        </p>
      </section>

      {/* 03 平台人格对照表 */}
      <section className="detail-sec reveal">
        <div className="sec-head">
          <span className="mono">{next()}</span>
          <h3 className="section-title">平台人格对照表<span className="rd">.</span></h3>
        </div>
        <p className="section-sub">四个平台在 H 人设统一基调下，通过关键词、类型、语气与篇幅做差异化，避免「一鱼多吃」的生硬复制。</p>
        <div className="table-wrap">
          <table className="pay-table">
            <thead><tr>{matrixHead.map((x) => <th key={x}>{x}</th>)}</tr></thead>
            <tbody>
              {matrixRows.map((r, i) => <tr key={i}>{r.map((c, j) => (j === 0 ? <th key={j}>{c}</th> : <td key={j}>{c}</td>))}</tr>)}
            </tbody>
          </table>
        </div>
      </section>

      {/* 04 分平台内容 */}
      <section className="detail-sec reveal">
        <div className="sec-head">
          <span className="mono">{next()}</span>
          <h3 className="section-title">分平台内容规划<span className="rd">.</span></h3>
        </div>
        <p className="section-sub">四个平台各有分工与侧重，构成完整的内容矩阵。</p>
        <div className="platform-grid">
          {platforms.map((p) => (
            <div className="platform-card" key={p.name}>
              <div className="platform-head">
                <h4>{p.name}</h4>
                <span>{p.en}</span>
              </div>
              <div className="platform-body">
                <p className="platform-role mono">{p.role}</p>
                <ul className="dot-list">
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h4 className="sub-head rd">Hatena 模块选型与内容占比</h4>
        <div className="table-wrap">
          <table className="pay-table">
            <thead><tr><th>内容模块</th><th>占比</th></tr></thead>
            <tbody>
              {moduleMix.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      {/* 05 协同逻辑 / 改写方向 */}
      <section className="detail-sec reveal">
        <div className="sec-head">
          <span className="mono">{next()}</span>
          <h3 className="section-title">四平台协同逻辑<span className="rd">.</span></h3>
        </div>
        <ul className="dot-list">
          {synergy.map((s) => <li key={s}>{s}</li>)}
        </ul>

        <h4 className="sub-head rd">同一选题的四平台改写方向</h4>
        <div className="table-wrap">
          <table className="pay-table">
            <tbody>
              {rewriteDir.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      {/* 06 需要注意规避的内容 */}
      <section className="detail-sec reveal">
        <div className="sec-head">
          <span className="mono">{next()}</span>
          <h3 className="section-title">需要注意规避的内容<span className="rd">.</span></h3>
        </div>
        <div className="table-wrap">
          <table className="pay-table">
            <tbody>
              {avoids.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      {/* 07 Dify 工作流节点设计 */}
      <section className="detail-sec reveal">
        <div className="sec-head">
          <span className="mono">{next()}</span>
          <h3 className="section-title">Dify 工作流节点设计<span className="rd">.</span></h3>
        </div>
        <div className="flow-list">
          {nodes.map(([k, v], i) => (
            <div className="flow-node" key={k}>
              <span className="flow-idx mono">{String(i + 1).padStart(2, "0")}</span>
              <div><strong>{k}</strong><p>{v}</p></div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}