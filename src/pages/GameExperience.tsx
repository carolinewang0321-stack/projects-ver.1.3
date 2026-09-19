import { useEffect } from "react";
import PageShell from "../components/PageShell";
import { GAME_EXPERIENCE } from "../data";

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

export default function GameExperience() {
  useReveal();

  return (
    <PageShell back="/" title="游戏经历" sub="GAME EXPERIENCE · 多品类玩家">
      <p className="lead reveal">
        作为一个重度游戏爱好者，我的游戏经历横跨 RPG、乙女、换装、音游与 MOBA 等多个品类。
        长线的深度体验让我既懂玩法与剧情带来的沉浸感，也理解不同品类的运营节奏与玩家心理。
      </p>

      {GAME_EXPERIENCE.map((cat) => (
        <section className="section gx-sec" key={cat.cat}>
          <div className="game-head reveal">
            <h3 className="detail-sec-title">
              {cat.cat}
            </h3>
            {cat.note && <span className="game-note mono">{cat.note}</span>}
          </div>
          <ul className="game-list reveal">
            {cat.games.map((g) => (
              <li className={g.desc ? "game-item game-item-rich" : "game-item"} key={g.name}>
                <div className="game-line">
                  <span className="game-name">{g.name}</span>
                  {g.tag && <span className="game-tag mono">{g.tag}</span>}
                </div>
                {g.desc && <p className="game-desc">{g.desc}</p>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </PageShell>
  );
}