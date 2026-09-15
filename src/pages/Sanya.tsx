import { useEffect } from "react";
import PageShell from "../components/PageShell";

const guide = [
  { t: "行程节奏", d: "三亚团建 4 天 3 晚：第一天入住亚龙湾、沙滩破冰；第二天蜈支洲岛水上项目；第三天免税店 + 天涯海角；第四天返程。" },
  { t: "食宿推荐", d: "住宿主打亚龙湾 / 海棠湾一线海景酒店；餐饮推荐海鲜大餐、椰子鸡、糟粕醋火锅，人均预算可控。" },
  { t: "预算与注意", d: "分档预算清单与避坑提示：旺季价格、防晒补水、水上项目安全、交通与门票预订技巧。" },
];

export default function Sanya() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("inview")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <PageShell back="/" title="三亚团建攻略 · 春夏必去宝藏地" sub="TRAVEL GUIDE · 小红书攻略">
      <p className="lead reveal">
        一篇面向小红书用户的春夏团建攻略，集合真实踩点经验与实用干货，帮助团队快速规划的宝藏旅行地攻略。
      </p>

      {guide.map((g, i) => (
        <section className="section" key={g.t}>
          <h3 className="detail-sec-title reveal">
            <span className="rd mono">{String(i + 1).padStart(2, "0")}</span> {g.t}
          </h3>
          <p className="reveal">{g.d}</p>
        </section>
      ))}
    </PageShell>
  );
}