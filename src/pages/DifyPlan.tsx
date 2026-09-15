import { useEffect } from "react";
import PageShell from "../components/PageShell";

const stages = [
  { t: "人设与多平台矩阵", d: "围绕「Hiroki」人设规划多平台账号矩阵（Note / Ameba / livedoor / Hatena），统一品牌故事与内容调性。" },
  { t: "Dify 工作流自动化", d: "用 Dify 搭建内容生产工作流：选题收集 → AI 初稿 → 人工润色 → 多平台排版分发，显著提升内容产能。" },
  { t: "内容排期与数据反馈", d: "制定内容日历，结合各平台数据反馈持续优化选题与发布节奏，实现账号从 0 到 1 的稳定增长。" },
];

export default function DifyPlan() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("inview")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <PageShell back="/" title="账号运营迭代方案（Dify 工作流）" sub="ACCOUNT OPERATION · 迭代方案">
      <p className="lead reveal">
        基于 Dify 工作流对「Hiroki」人设账号进行运营迭代：通过 AI 辅助内容生产与多平台矩阵分发，
        提升账号运营效率与内容质量。
      </p>

      {stages.map((s, i) => (
        <section className="section" key={s.t}>
          <h3 className="detail-sec-title reveal">
            <span className="rd mono">{String(i + 1).padStart(2, "0")}</span> {s.t}
          </h3>
          <p className="reveal">{s.d}</p>
        </section>
      ))}
    </PageShell>
  );
}