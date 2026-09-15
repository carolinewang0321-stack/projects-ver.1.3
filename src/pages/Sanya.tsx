import { useEffect } from "react";
import PageShell from "../components/PageShell";

// 内容来源：用户提供的小红书图文笔记《三亚团建攻略｜纯干货❗️春夏必去宝藏地》
// 全部方案信息（交通 / 行程 / 住宿 / 必玩地点 / 门票票价）取自用户提供的海报原图与正文。

const imgDir = "/sanya";

const traffic = [
  { k: "飞机", items: ["三亚国际机场：直飞，航班较少", "海口美兰机场：需换乘环岛动车，航班较多"] },
  { k: "高铁", items: ["三亚站：班次较多", "亚龙湾站：距离亚龙湾较近"] },
  { k: "公交", items: ["分段式收费，基础票价 2 元"] },
];

const itineraries = [
  {
    name: "三日游",
    days: [
      ["Day1", "抵达三亚 · 椰梦长廊 · 天涯海角"],
      ["Day2", "蜈支洲岛一日游"],
      ["Day3", "帆船港 · 三亚国际免税城 · 返程"],
    ],
  },
  {
    name: "五日游",
    days: [
      ["Day1", "抵达三亚 · 椰梦长廊 · 亚龙湾沙滩"],
      ["Day2", "蜈支洲岛一日游"],
      ["Day3", "亚特兰蒂斯水世界 · 帆船港"],
      ["Day4", "亚龙湾森林公园 · 大小洞天"],
      ["Day5", "后海村 · 三亚国际免税城 · 返程"],
    ],
  },
];

const bays = [
  {
    name: "亚龙湾",
    pros: "海景房，中高档酒店，水质沙质都是最优，适合下海玩水。",
    cons: "酒店设施偏老旧。",
  },
  {
    name: "三亚湾",
    pros: "离机场、市区较近，酒店性价比高，可观赏椰梦长廊最美日落。",
    cons: "水质较差，游客较多，酒店相对老旧。",
  },
  {
    name: "海棠湾",
    pros: "人少、清净，奢华酒店多、设施较新，距离免税城、蜈支洲岛等地很近。",
    cons: "酒店价格较高，新开发湾区周边配套设施还不完善。",
  },
];

const spots = [
  {
    rank: "TOP 1",
    name: "椰梦长廊",
    meta: [
      ["开放", "全天"],
      ["时长", "1-2 h"],
      ["交通", "公交 34 / 50 / 7 路"],
    ],
    intro: "20 公里绝美海岸线，椰林、沙滩与大海，是看日落的绝佳选择。体验：骑行、徒步、看日落。",
  },
  {
    rank: "TOP 2",
    name: "后海村",
    meta: [
      ["开放", "全天"],
      ["时长", "1-3 h"],
      ["交通", "公交 28 / 海棠3路"],
    ],
    intro: "热闹的三亚渔村，新鲜海鲜、特色美食，更是冲浪爱好者的胜地！体验：冲浪、潜水、捕鱼。",
  },
  {
    rank: "TOP 3",
    name: "蜈支洲岛",
    meta: [
      ["开放", "9:00-18:00"],
      ["时长", "3-4 h"],
      ["交通", "乘船"],
    ],
    intro: "被誉为国内优质潜水圣地，风景如画。体验：潜水、环岛骑行。",
  },
  {
    rank: "TOP 4",
    name: "亚龙湾森林公园",
    meta: [
      ["开放", "8:30-17:30"],
      ["时长", "3-4 h"],
      ["交通", "公交 25 路"],
    ],
    intro: "热带天堂，天然森林氧吧，自然资源及景点非常丰富。体验：玻璃栈道、索桥、雨林飞漂等。",
  },
  {
    rank: "TOP 5",
    name: "天涯海角",
    meta: [
      ["开放", "7:30-18:20"],
      ["时长", "1-3 h"],
      ["交通", "公交 16 / 25 / 26 / 32 路"],
    ],
    intro: "三亚的标志性景点，自然海滨风光，拍照超级出片！体验：快艇、露营、拍照打卡。",
  },
  {
    rank: "TOP 6",
    name: "亚龙湾沙滩",
    meta: [
      ["开放", "全天"],
      ["时长", "3-4 h"],
      ["交通", "公交 14 / 24 / 25 / 27 路"],
    ],
    intro: "水清沙白的优质海岸，适合各种海边项目。体验：沙滩运动。",
  },
  {
    rank: "TOP 7",
    name: "帆船港",
    meta: [
      ["开放", "全天"],
      ["时长", "1-3 h"],
      ["交通", "公交 3 / 26 / 41 路"],
    ],
    intro: "海南第一座世界级的帆船港，被五星级酒店和度假村环绕。体验：冲浪、景点拍照打卡。",
  },
  {
    rank: "TOP 8",
    name: "亚特兰蒂斯水世界",
    meta: [
      ["开放", "10:00-21:00"],
      ["时长", "1-3 h"],
      ["交通", "公交 15 / 25 路"],
    ],
    intro: "全年开放的水上乐园，为你带来最快乐最难忘的体验！体验：水上娱乐项目。",
  },
  {
    rank: "TOP 9",
    name: "大小洞天",
    meta: [
      ["开放", "7:30-18:30"],
      ["时长", "1-3 h"],
      ["交通", "公交 25 / 30 路"],
    ],
    intro: "原名海山奇观风景区，拥有秀丽的海景、山景和石景。体验：沙滩项目、拍照打卡。",
  },
];

const priceRows = [
  ["椰梦长廊", "免费", "全天", "1-2 小时"],
  ["后海村", "免费", "全天", "1-3 小时"],
  ["蜈支洲岛", "144 元", "9:00-18:00", "3-4 小时"],
  ["亚龙湾森林公园", "158 元", "8:30-17:30", "3-4 小时"],
  ["天涯海角", "免费", "7:30-18:20", "1-3 小时"],
  ["亚龙湾沙滩", "免费", "全天", "3-4 小时"],
  ["帆船港", "免费", "全天", "1-3 小时"],
  ["亚特兰蒂斯水世界", "298 元", "10:00-21:00", "1-3 小时"],
  ["大小洞天", "免费", "7:30-18:30", "1-3 小时"],
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
    <PageShell back="/" title="三亚团建攻略 · 春夏必去宝藏地" sub="RURAL · 小红书图文笔记作品">
      <p className="lead reveal">
        面向小红书年轻用户与团队组织者的春夏团建出行攻略，以图文笔记形式呈现「纯干货｜宝藏地」，
        涵盖打卡景点、门票与开放时间、行程规划、住宿安排、出行方式，内容完全来自原图文案与海报。
      </p>

      {/* 封面 */}
      <section className="section reveal" style={{ paddingTop: 0 }}>
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 作品封面
        </h3>
        <figure className="sanya-cover">
          <img src={`${imgDir}/cover.jpg`} alt="三亚团建攻略封面" />
          <figcaption className="mono" style={{ padding: "10px 14px", fontSize: "0.75rem", color: "var(--aink)" }}>
            三亚团建攻略｜纯干货 · 春夏必去宝藏地 · 旅行 / 团建
          </figcaption>
        </figure>
      </section>

      {/* 出行与交通 */}
      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 出行与交通
        </h3>
        <div className="sanya-post reveal">
          <div>
            <p className="sanya-note">HOW TO GET THERE</p>
            {traffic.map((t) => (
              <div key={t.k} style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 800, fontSize: "0.98rem", marginBottom: 6 }}>
                  <span className="mono rd" style={{ marginRight: 8, fontSize: "0.85rem" }}>{t.k}</span>
                </div>
                <ul className="dot-list" key={`l-${t.k}`} style={{ gridGap: 6 }}>
                  {t.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
            <div className="callout">租车自驾：适合团建，出行更加方便。</div>
          </div>
          <figure className="sanya-fig">
            <img src={`${imgDir}/stay.jpg`} alt="住宿安排与出行选择" loading="lazy" />
            <figcaption>住宿安排 · 出行选择（原图）</figcaption>
          </figure>
        </div>
      </section>

      {/* 行程规划 */}
      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 行程规划 · 三日 / 五日游
        </h3>
        <div className="sanya-post reveal">
          <div className="itinerary-grid">
            {itineraries.map((it) => (
              <div className="itinerary-card" key={it.name}>
                <h4><span className="rd mono">{it.name}</span></h4>
                {it.days.map(([d, desc]) => (
                  <div className="it-day" key={d}>
                    <span className="d">{d}</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 住宿建议 */}
      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 住宿建议
        </h3>
        <div className="bay-grid reveal">
          {bays.map((b) => (
            <div className="bay-card" key={b.name}>
              <h4>{b.name}</h4>
              <p className="pros"><span className="lbl good">优点</span><span>{b.pros}</span></p>
              <p className="cons"><span className="lbl">缺点</span><span>{b.cons}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* 必玩地点 */}
      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 必玩地点 TOP 1-9
        </h3>
        <div className="sanya-post reveal" style={{ marginBottom: 22 }}>
          <figure className="sanya-fig">
            <img src={`${imgDir}/spot3.jpg`} alt="必玩地点 1-3" loading="lazy" />
            <figcaption>人气景点 TOP 1-3（原图）</figcaption>
          </figure>
          <figure className="sanya-fig">
            <img src={`${imgDir}/spot4.jpg`} alt="必玩地点 4-6" loading="lazy" />
            <figcaption>人气景点 TOP 4-6（原图）</figcaption>
          </figure>
        </div>
        <div className="sanya-post reveal">
          <figure className="sanya-fig">
            <img src={`${imgDir}/spot5.jpg`} alt="必玩地点 7-9" loading="lazy" />
            <figcaption>人气景点 TOP 7-9（原图）</figcaption>
          </figure>
          <div>
            <div className="spot-grid" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
              {spots.map((s) => (
                <div className="spot-card" key={s.name} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 16px" }}>
                  <span className="rank">{s.rank}</span>
                  <h4 style={{ fontSize: "1rem", margin: "2px 0 8px" }}>{s.name}</h4>
                  <div /> 
                  <div className="spot-meta">
                    {s.meta.map(([k, v]) => (
                      <span key={k}><b>{k}：</b>{v}</span>
                    ))}
                    <p className="spot-intro" style={{ gridColumn: "1 / -1", margin: "8px 0 0" }}>{s.intro}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 门票票价 */}
      <section className="section">
        <h3 className="detail-sec-title reveal">
          <span className="rd mono">{next()}</span> 三亚必去景点票价
        </h3>
        <div className="sanya-post reveal">
          <figure className="sanya-fig">
            <img src={`${imgDir}/ticket.jpg`} alt="三大必去景点票价" loading="lazy" />
            <figcaption>三亚必去景点票价（原图）</figcaption>
          </figure>
          <div className="table-wrap">
            <table className="pay-table">
              <thead>
                <tr>
                  <th>景点</th>
                  <th>门票</th>
                  <th>开放时间</th>
                  <th>游览时长</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td className={r[1] === "免费" ? "rd" : ""} style={{ whiteSpace: "nowrap" }}>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}