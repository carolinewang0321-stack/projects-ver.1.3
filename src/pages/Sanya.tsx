import { useEffect } from "react";
import PageShell from "../components/PageShell";

// 内容来源：用户提供的小红书图文笔记《三亚团建攻略｜纯干货❗️春夏必去宝藏地》
// 该作品以图集形式呈现（正文为图片），此处按其策划框架做要点梳理。
const guide = [
  {
    t: "内容定位",
    items: [
      "平台：小红书图文笔记，标题《三亚团建攻略｜纯干货❗️春夏必去宝藏地》。",
      "受众：春夏有团建 / 出游需求的年轻群体与团队组织者。",
      "卖点：纯干货、宝藏地、可直接照抄的行程与避坑清单，强收藏属性。",
    ],
  },
  {
    t: "选题与标题",
    items: [
      "用「纯干货」「宝藏地」「必去」等高点击词强化实用与稀缺感。",
      "❗️ 符号 + 竖线分隔，符合小红书标题习惯，突出季节（春夏）与场景（团建）。",
    ],
  },
  {
    t: "图文呈现",
    items: [
      "采用多图滑动的图集形式承载行程、食宿、预算与避坑信息，首图做信息钩子。",
      "封面与配图统一视觉风格，正文用清单 / 标签式排版，降低阅读成本、引导收藏与转发。",
    ],
  },
  {
    t: "运营价值",
    items: [
      "攻略类强搜索、强收藏内容，适合做账号的长尾流量与信任沉淀。",
      "可复用同一选题框架批量产出不同目的地攻略，形成旅游内容矩阵。",
    ],
  },
];

export default function Sanya() {
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
    <PageShell back="/" title="三亚团建攻略 · 春夏必去宝藏地" sub="TRAVEL GUIDE · 小红书图文笔记">
      <p className="lead reveal">
        一篇面向小红书年轻用户的春夏团建攻略图文笔记，以「纯干货 + 宝藏地」为核心卖点，
        用图集形式输出可直接照抄的行程、食宿、预算与避坑信息。下方按内容策划框架做要点拆解。
      </p>

      {guide.map((g) => (
        <section className="section" key={g.t}>
          <h3 className="detail-sec-title reveal">
            <span className="rd mono">{next()}</span> {g.t}
          </h3>
          <ul className="dot-list reveal">
            {g.items.map((it) => <li key={it}>{it}</li>)}
          </ul>
        </section>
      ))}
    </PageShell>
  );
}
