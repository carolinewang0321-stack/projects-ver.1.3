import { useEffect } from "react";
import PageShell from "../components/PageShell";

// 严格按原始文档结构与顺序呈现，未额外添加标题与小标题
const overview = [
  { k: "账号", v: "原神公式（日本）" },
  { k: "平台", v: "X" },
  { k: "粉丝数", v: "4M（截至2026年）" },
  { k: "近期月均发帖频次", v: "（6-8月）≈93帖/月" },
  { k: "近30天互动量中位数", v: "29K" },
  { k: "近30天互动率", v: "0.705%" },
  { k: "更新时间", v: "2026.9.16" },
];

const spikeRows = [
  { d: "2026/06/26", n: 18, int: "约176.3万", c: "「超越PV『骤雪』」＋CV公布" },
  { d: "2026/06/18", n: 18, int: "约80.1万", c: "月之八版本相关特别番组及版本预热" },
  { d: "2026/07/31", n: 7, int: "约9.8万", c: "Ver.7.0最新情報＋新角色介绍" },
  { d: "2026/08/22", n: 4, int: "约22.8万", c: "阿蕾奇诺生日等" },
];

const channelRows = [
  { p: "X", f: "话题扩散", u: "了解最新资讯", c: "图文，视频" },
  { p: "HoYoLAB", f: "社区沉淀，私域转化", u: "查攻略、参与社区活动、看详细公告", c: "图文，攻略，社区讨论" },
  { p: "YouTube", f: "深度内容库", u: "看直播、追声优节目、欣赏高质量PV", c: "视频，直播，长节目" },
];

const contentRows = [
  { t: "声优/CV发表", n: 18, v: "430万", r: "25.7K" },
  { t: "角色介绍", n: 10, v: "318万", r: "20.8K" },
  { t: "活动预告", n: 32, v: "219万", r: "7.4K" },
  { t: "角色生日", n: 23, v: "138万", r: "13K" },
  { t: "剧情短片/动画", n: 6, v: "128万", r: "4.3K" },
  { t: "CP活动（抽奖/转发活动）", n: 9, v: "121万", r: "20K" },
  { t: "壁纸/表情包", n: 16, v: "100万", r: "4.6K" },
  { t: "YouTube版(评论区同步转发的YT链接)", n: 16, v: "85万", r: "670" },
];

const pinnedRows = [
  { k: "平台", v: "X置顶推文" },
  { k: "账号", v: "原神（Genshin）公式@Genshin_7" },
  {
    k: "置顶推文文案",
    v: "【Ver.7.1報酬一覧】原神Ver.7.1「冥府へのレクイエム」が9月23日にリリース！🎁★5キャラクター2名を招待可能！さらに、紡がれた運命×10、原石×1,600、「創世結晶」の初回チャージ2倍ボーナスのリセットなど、盛りだくさんのプレゼントが待っています！",
  },
  { k: "发布时间", v: "2026-09-12 21:30:01 +08:00" },
  { k: "点赞数", v: "81.3K" },
  { k: "分享数", v: "36.4K" },
  { k: "评论", v: "279" },
];

const linkRows = [
  { c: "寿司郎联动", e: "冲上日推趋势第一，服务器被挤爆" },
  { c: "有马温泉联动", e: "下雪天仍排2-4小时长队" },
  { c: "可口可乐联动", e: "#原神とゴクゴクチャージ 登上日推第一（1.5w推文）" },
  { c: "KFC×艾尔海森/卡维", e: "粉丝期待声量高" },
  { c: "「月の在処へ」线下展览（歌舞伎町塔）", e: "以哥伦比娅为核心打造沉浸体验" },
];

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

export default function GenshinX() {
  useReveal();
  let n = 0;
  const next = () => String(++n).padStart(2, "0");

  return (
    <PageShell back="/" title="《原神》日本社媒（X）分析小结" sub="GENSHIN JP X · 日本市场社媒运营分析">
      <section className="section x-sec">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> X账号概览</h3>
        <div className="x-table reveal">
          <table className="pay-table x-pay">
            <tbody>
              {overview.map((o) => (
                <tr key={o.k}>
                  <th>{o.k}</th>
                  <td>{o.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="reveal">
          <strong>发布时间规律：</strong>原神X官方账号最常见的发帖时间为04:00 UTC（对应北京时间12:00、日本时间13:00）；一周中以星期六最为活跃。同期样本中约87%的帖子包含图片或视频，说明账号以视觉内容作为主要信息载体。
        </p>
        <p className="reveal">
          <strong>互动率对比：</strong>在84,286个拥有超过1M粉丝的X账号中，中位互动率为0.102%（每篇原创帖子对应粉丝数），而排名前四分之一的账号互动率高于0.511%（数据统计周期截至2026年9月16日前30天）。该账号0.705%的互动率处于头部水平。
        </p>
        <p className="reveal">
          <strong>发帖峰值与高互动节点：</strong>集中在大型版本更新期间。
        </p>
        <div className="x-table reveal">
          <table className="pay-table x-pay">
            <thead>
              <tr><th>日期</th><th>发帖量</th><th>当日完整互动量</th><th>代表内容</th></tr>
            </thead>
            <tbody>
              {spikeRows.map((r) => (
                <tr key={r.d}>
                  <td>{r.d}</td><td>{r.n}</td><td>{r.int}</td><td>{r.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="reveal">
          其中2026年6月26日是最明显的"高发帖量+高互动"双高节点。当日官方账号连续释放大型PV和多条角色CV信息，内容包括「超越PV『骤雪』」以及瓦列里、冰之女皇等角色的CV公布。X公开抓取数据显示，这批帖子获得较高规模的赞和转发：例如瓦列里CV公布约12万赞、5万转发，冰之女皇CV公布约19.03万赞、7万转发。
        </p>
        <p className="reveal">
          因此，日服账号的互动峰值并不是单纯由"发得多"造成，而更常出现在<strong>版本节点 → 新角色/重要角色公布 → CV公布/PV → 粉丝集中讨论与转发</strong>这一连续内容链路中。
        </p>
        <p className="reveal">
          2026年7月8日，原神X日服账号突破400万粉丝，特地发布纪念贺图。
        </p>
        <p className="reveal">
          2024年11月起，原神日服X账号不再预告游戏内活动，将活动通知迁移至HoYoLAB官方频道。这可能是因为X的发文限制，但我认为也意味着X的角色正从信息分发转向话题引爆与品牌塑造，而HoYoLAB承担信息沉淀与私域运营的职能。
        </p>
        <div className="x-table reveal">
          <table className="pay-table x-pay">
            <thead>
              <tr><th>平台</th><th>职能</th><th>用户意图</th><th>内容形态</th></tr>
            </thead>
            <tbody>
              {channelRows.map((r) => (
                <tr key={r.p}>
                  <th>{r.p}</th><td>{r.f}</td><td>{r.u}</td><td>{r.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section x-sec">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> 内容策略</h3>
        <div className="x-table reveal">
          <table className="pay-table x-pay">
            <thead>
              <tr><th>内容类型</th><th>投稿数</th><th>平均浏览量</th><th>平均转发</th></tr>
            </thead>
            <tbody>
              {contentRows.map((r) => (
                <tr key={r.t}>
                  <td>{r.t}</td><td>{r.n}</td><td>{r.v}</td><td>{r.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="reveal">
          从内容表现来看，CV公布、新角色/剧情介绍、版本及活动预告是最核心的内容支柱；其中CV公布和角色/剧情类内容的平均浏览量、平均转发量明显高于YouTube同步帖等纯分发型内容。
        </p>
        <p className="reveal">
          声优/CV发表类内容的平均浏览量和转发量都是所有类型里最高的——这符合日本二次元受众的普遍规律：声优粉丝和角色粉丝是重叠但独立的两个圈子，一个声优官宣会同时触发角色粉+声优粉两波转发，传播链比单纯的角色生日画圈更长。
        </p>
        <p className="reveal">
          另外，"CV发表"是密集连发（6/26 一天发了 12 条），形成刷屏效应；算法会因为短时间内的互动密度，给这类帖子更多曝光。
        </p>
        <p className="reveal">
          运营发文常把"詳細はこちら"等 YouTube 外链放评论区而不是原帖，这是 X 运营的常见操作。逻辑是：X 的算法对外链（outbound link）的原生推文会降低曝光（因为平台不想用户跳出站外），所以官号把纯宣传图/视频放在主推文冲曝光，把跳转链接（HoYoLAB 详情页）放在"自己回复自己"的楼层里，不影响主帖的分发权重。
        </p>
        <p className="reveal">
          从美观程度上看，这样主帖看起来更"干净"、更适合被转发，提升转发率。从数据看，这些"详情链接"贴文的互动量明显低于主帖（比如声优发表系列里那些"詳細はこちら"贴文互动量只是主帖的 1/10 不到），说明用户确实不太点开评论楼层的补充链接；但官号仍然坚持这么发，是为了保护主帖的算法权重。
        </p>
        <h4 className="xg-sub reveal">信息爆发帖分析：官方账号置顶推文（数据收集截至2026年9月13日18:42）</h4>
        <div className="x-table reveal">
          <table className="pay-table x-pay">
            <tbody>
              {pinnedRows.map((r) => (
                <tr key={r.k}>
                  <th>{r.k}</th>
                  <td>{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="reveal">
          这条帖子高互动的核心在于"高确定性、可直接使用的信息"。帖子列出了7.1版本的重要奖励，例如：角色可免费邀请2名五星角色、纠缠之缘×10、原石×1,600、创世结晶首充2倍奖励重置，因此它同时具备三种传播属性。
        </p>
        <ul className="dot-list reveal">
          <li><strong>一，决策价值。</strong>玩家可以直接根据奖励信息判断版本资源、角色选择和后续规划。</li>
          <li><strong>二，收藏价值。</strong>与普通宣传图相比，奖励列表具有明显的信息查询属性，因此更容易被保存。该帖约有7K书签，也与这一特征相吻合。</li>
          <li><strong>三，转发价值。</strong>这类"官方一次性整理完整信息"的帖子，不仅玩家本人需要查看，也适合转发给其他玩家，因此转发占总互动的比例较高。</li>
        </ul>
        <p className="reveal">
          「Ver.7.1報酬一覧」可以视为账号近期非常典型的"信息型高互动帖子"。它不依赖纯角色人气，而是把版本节点、福利信息、资源规划、可保存信息集中在一条帖子中，从而形成较高的自然传播。
        </p>
      </section>

      <section className="section x-sec">
        <h3 className="detail-sec-title reveal"><span className="rd mono">{next()}</span> 联动与线下活动的社媒放大</h3>
        <div className="x-table reveal">
          <table className="pay-table x-pay">
            <thead>
              <tr><th>联动案例</th><th>社媒效果</th></tr>
            </thead>
            <tbody>
              {linkRows.map((r) => (
                <tr key={r.c}>
                  <td>{r.c}</td><td>{r.e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="reveal">
          日本市场非常重视线下体验与线上传播的联动，用"手間のかかるリアル体験"深化品牌，秋叶原悬挂原神巨幅广告，成为二次元圣地的地标级展示位、「月の在処へ」、联名活动等。我认识到这是为了创造一种深刻的参与感，并自然地驱动玩家在社交网络上分享，形成从线下到线上的传播闭环。高效的品牌传播有时需要创造值得被分享的现实体验，而不仅仅是传递信息。联名活动也能直接拉动合作方数据，例如与多邻国联动后，多邻国在日本的下载量直接翻倍。
        </p>
      </section>
    </PageShell>
  );
}