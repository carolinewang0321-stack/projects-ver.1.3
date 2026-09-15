import { useEffect } from "react";
import PageShell from "../components/PageShell";

// 内容来源：用户提供的《账号运营方案 - Dify 迭代》PDF（人设账号运营方案，2026-07-13）
const persona = [
  ["姓名", "ひろき（Hiroki），自称「ひろき・僕」"],
  ["年龄", "27 岁"],
  ["背景故事", "22 岁被同事「田中」带入 matching app，经历多次失败恋爱与「ヤバい女」连载体的真实 / 半真实故事，现与理想伴侣稳定交往，处于同居 / 准同居的生活质感。"],
  ["核心主张", "恋爱是「戦略」而非「努力」，但战略的终点应是「尊重」与「双向幸福」。"],
  ["现实状态", "有稳定女友：周末约会、一起做饭、按摩、逛街等生活化细节（主要见于 Ameba）。"],
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

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> 核心人设</h3>
        <div className="table-wrap reveal">
          <table className="pay-table">
            <tbody>
              {persona.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> 母题库（5-8 个，长期不变）</h3>
        <div className="table-wrap reveal">
          <table className="pay-table">
            <thead><tr><th>母题</th><th>定义</th><th>主要平台</th></tr></thead>
            <tbody>
              {motifs.map((x) => <tr key={x.m}><td>{x.m}</td><td>{x.d}</td><td>{x.p}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> 载体库（呈现形式，可轮换组合）</h3>
        <ul className="dot-list reveal">
          {carriers.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <p className="reveal" style={{ color: "var(--aink)", fontSize: "0.9rem" }}>
          用法：Dify 在选题分类阶段先判断母题，再结合目标平台从载体库中选取（或轮换）呈现形式，两者叠加后才进入正文生成，
          保证同一母题在不同时间、不同平台产出的内容始终有实质差异。
        </p>
      </section>

      <section className="section">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> Dify 工作流节点设计</h3>
        <div className="flow-list reveal">
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
