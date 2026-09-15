import { useEffect } from "react";
import PageShell from "../components/PageShell";

const strategies = [
  { t: "KOL / KOC 分层触达", d: "将合作对象按粉丝量级划分为头部 KOL 与腰部 KOC，制定差异化合作包与报价策略，提高性价比。" },
  { t: "长内容平台内容规划", d: "针对小红书 / B 站 / 社媒长内容平台定制种草内容，涵盖测评、攻略、剧情向与用户生成内容（UGC）引导。" },
  { t: "ROI 与数据看板", d: "建立合作效果追踪看板，以曝光、互动、转化与获客成本评估每档合作，持续迭代投放策略。" },
];

export default function KolPlan() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("inview")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <PageShell back="/" title="实习项目方案 · 社媒 KOL 长内容平台运营" sub="INTERNSHIP · KOL 运营方案">
      <p className="lead reveal">
        OLA PARTY JAPAN × 短剧社交产品 Yoitoki 的拉新与种草方案：
        以日本市场为目标，通过 KOL / KOC 达人在社媒长内容平台的内容投放，实现品牌曝光与用户增长。
      </p>

      {strategies.map((s, i) => (
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