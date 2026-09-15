import { useEffect } from "react";
import PageShell from "../components/PageShell";

const points = [
  { t: "游戏特色", d: "开放世界 + 元素反应战斗 + 箱庭解密，高品质美术与音乐带来沉浸体验，是《原神》差异化竞争力的核心。" },
  { t: "玩家群体", d: "覆盖二次元受众、开放世界党与休闲党；中日韩及欧美均有庞大用户基础，全球发行打法是关键优势。" },
  { t: "优点", d: "美术音乐顶尖、持续版本更新、跨平台互通；角色与剧情塑造强，擅长情感连接与长线留存。" },
  { t: "不足与机会", d: "后期长草期、数值问题与部分玩家稳定性体验；可通过玩家共创、本地化运营与内容生态补足。" },
  { t: "商业化", d: "以角色抽取（抽卡）+ 月卡/纪行为核心，结合版本活动与皮肤，形成温和而稳定的付费循环。" },
];

export default function Genshin() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("inview")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <PageShell back="/" title="《原神》游戏体验小结" sub="GAME ANALYSIS · 游戏小结">
      <p className="lead reveal">
        《原神》作为现象级开放世界手游，是研究"内容驱动长线运营 + 全球本地化发行"的绝佳样本。
        以下从玩家视角梳理我对它的理解与思考。
      </p>

      {points.map((p, i) => (
        <section className="section" key={p.t}>
          <h3 className="detail-sec-title reveal">
            <span className="rd mono">{String(i + 1).padStart(2, "0")}</span> {p.t}
          </h3>
          <p className="reveal">{p.d}</p>
        </section>
      ))}
    </PageShell>
  );
}