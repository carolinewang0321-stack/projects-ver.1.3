import PageShell from "../components/PageShell";

// 内容矩阵（平台 × 人设 × 内容方向 × 适配形式）—— 出自项目一表格
const matrixRows: { platform: string; persona: string; angle: string; form: string }[] = [
  { platform: "Note", persona: "焦虑、谨慎、爱查攻略", angle: "兴趣社交体验向", form: "测评 + 痛点共鸣（真实体验感强、图文笔记）" },
  { platform: "Ameba", persona: "文艺、细腻、表达欲强", angle: "情感故事向", form: "第一人称连载体博客（代入感强、长故事）" },
  { platform: "livedoor", persona: "理性、爱比较、决策前调研", angle: "功能横评 / 决策参考向", form: "多 App 横评 + 理性结论（清单体、结论前置）" },
  { platform: "Hatena", persona: "技术控、收藏控、爱研究", angle: "深度体验 / 玩法研究向", form: "深度研究长文 + 书签收藏（结构化、长尾流量）" },
];

// KOL/KOC 分层策略（出自项目一）
const tierRows: { tier: string; action: string; note: string }[] = [
  { tier: "Mega KOL", action: "品牌背书 / 话题引爆", note: "单个合作即可制造全网认知，适合冷启动期" },
  { tier: "Macro KOL", action: "圈层扩散 / 内容种草", note: "覆盖目标兴趣人群，强化产品口碑" },
  { tier: "Micro KOL", action: "场景渗透 / 真实测评", note: "贴近用户使用场景，转化与信任度高" },
  { tier: "Nano KOC", action: "口碑铺量 / 评论互动", note: "大量真实用户视角，营造「身边人都在用」" },
  { tier: "官方账号", action: "人设沉淀 / 私域承接", note: "统一人设持续输出，承接外部流量并沉淀" },
];

// 发布排期（出自项目一，按周）
const scheduleRows: { week: string; focus: string; platforms: string }[] = [
  { week: "第 1 周", focus: "冷启动 · 人设建立", platforms: "官方账号四平台首发 + Nano KOC 铺量" },
  { week: "第 2 周", focus: "口碑扩散 · 场景种草", platforms: "Micro KOL 场景测评 + 评论区运营" },
  { week: "第 3 周", focus: "圈层引爆 · 话题放大", platforms: "Macro KOL 圈层内容 + 话题活动" },
  { week: "第 4 周", focus: "品牌背书 · 收口转化", platforms: "Mega KOL 背书 + 官方账号承接沉淀" },
];

export default function KolPlan() {
  return (
    <PageShell
      back="/"
      title="社媒 KOL 长内容平台运营方案"
      sub="INTERNSHIP PROJECT · 2026 · OLA PARTY JAPAN · MKT · 日本市场本地化运营实习"
    >
      <p className="lead">
        OLA PARTY JAPAN 旗下社交产品 Yoitoki 的日本市场拉新与种草方案：
        以统一人设运营 Note、Ameba、livedoor、Hatena 四大长内容平台，
        并联动日本 KOL / KOC 完成产品在目标人群中的宣传拉新。
      </p>

      {/* ========== 项目一 ========== */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">01</span>
          <h2 className="section-title">社媒 KOL 长内容平台运营方案</h2>
        </div>
        <p className="section-sub">
          围绕 Yoitoki 在日本市场的拉新与种草，搭建「统一人设 + 四平台矩阵 + KOL/KOC 分层」的长内容运营体系。
        </p>

        {/* 1.1 KOL/KOC 定义 */}
        <h3 className="sub-head">KOL / KOC 分层定义</h3>
        <p className="section-sub">
          按粉丝量级与影响力，将合作对象划分为四层，官方账号作为人设沉淀与流量承接的收口。
        </p>
        <div className="tier-grid">
          <div className="tier-card"><div className="tier-tag mono">MEGA</div><h4>头部 KOL</h4><p>百万级粉丝，品牌背书与全网话题引爆</p></div>
          <div className="tier-card"><div className="tier-tag mono">MACRO</div><h4>腰部 KOL</h4><p>十万至百万粉，圈层扩散与内容种草</p></div>
          <div className="tier-card"><div className="tier-tag mono">MICRO</div><h4>尾部 KOL</h4><p>一万至十万粉，场景渗透与真实测评</p></div>
          <div className="tier-card"><div className="tier-tag mono">NANO</div><h4>素人 KOC</h4><p>一万粉以下，口碑铺量与真实评论</p></div>
        </div>

        {/* 1.2 统一人设 */}
        <h3 className="sub-head">统一人设：Hiroki（32 岁男性）</h3>
        <div className="grid2">
          {[
            { k: "年龄身份", v: "32 岁 · 东京在职男性" },
            { k: "性格特征", v: "温和、有表达欲、略带社交焦虑，渴望真实连接" },
            { k: "内容口吻", v: "第一人称、真实体验、不硬广，像朋友分享" },
            { k: "使用动机", v: "工作圈外认识新朋友、拓展兴趣社交" },
            { k: "内容禁区", v: "不浮夸、不数据堆砌、不制造焦虑" },
            { k: "视觉调性", v: "生活化、暖色、真实场景截图" },
          ].map((t) => (
            <div className="persona-card" key={t.k}>
              <div className="persona-head"><span className="persona-trait">{t.k}</span></div>
              <p className="persona-desc">{t.v}</p>
            </div>
          ))}
        </div>

        {/* 1.3 平台内容矩阵 */}
        <h3 className="sub-head">四平台内容矩阵</h3>
        <p className="section-sub">
          同一人设，按各平台用户气质调整内容角度与适配形式，形成差异化覆盖。
        </p>
        <div className="table-wrap">
          <table className="pay-table">
            <thead>
              <tr><th>平台</th><th>对应用户气质</th><th>内容方向</th><th>平台适配形式</th></tr>
            </thead>
            <tbody>
              {matrixRows.map((r) => (
                <tr key={r.platform}>
                  <td><strong>{r.platform}</strong></td>
                  <td>{r.persona}</td>
                  <td>{r.angle}</td>
                  <td>{r.form}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 1.4 KOL/KOC 分层策略 */}
        <h3 className="sub-head">KOL / KOC 分层投放策略</h3>
        <div className="table-wrap">
          <table className="pay-table">
            <thead>
              <tr><th>层级</th><th>承担动作</th><th>策略说明</th></tr>
            </thead>
            <tbody>
              {tierRows.map((r) => (
                <tr key={r.tier}>
                  <td><strong>{r.tier}</strong></td>
                  <td>{r.action}</td>
                  <td>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 1.5 发布排期 */}
        <h3 className="sub-head">四周发布排期</h3>
        <div className="table-wrap">
          <table className="pay-table">
            <thead>
              <tr><th>周期</th><th>阶段重点</th><th>动作与平台</th></tr>
            </thead>
            <tbody>
              {scheduleRows.map((r) => (
                <tr key={r.week}>
                  <td><strong className="mono">{r.week}</strong></td>
                  <td>{r.focus}</td>
                  <td>{r.platforms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 1.6 内容风险规避 */}
        <h3 className="sub-head">内容风险规避</h3>
        <div className="grid2">
          {[
            { risk: "硬广感过强", logic: "日本用户对直接广告抵触明显", fix: "以第一人称真实体验切入，卖点自然融入场景" },
            { risk: "人设跨平台割裂", logic: "多账号口吻不一致会削弱可信度", fix: "统一人设背景与口吻，仅按平台调整内容形式" },
            { risk: "数据与绝对化表述", logic: "夸大表述易引发反感与合规风险", fix: "用个人感受替代绝对化承诺，避免夸张数据" },
          ].map((r) => (
            <div className="risk-card" key={r.risk}>
              <h4>{r.risk}</h4>
              <p className="mono">规避逻辑</p>
              <p>{r.logic}</p>
              <p className="mono">正确做法</p>
              <p>{r.fix}</p>
            </div>
          ))}
        </div>

        {/* 1.7 项目成果 */}
        <h3 className="sub-head">项目成果</h3>
        <div className="stat-grid">
          <div className="stat-item"><div className="stat-num mono">11<span className="stat-x">×</span></div><p>Page View 较前月增长 11 倍</p></div>
          <div className="stat-item"><div className="stat-num mono">112</div><p>外链累计增加 112 条</p></div>
          <div className="stat-item"><div className="stat-num mono">59</div><p>59 个 query 进入谷歌 AI Summary（GEO 效果）</p></div>
          <div className="stat-item"><div className="stat-num">全转发</div><p>PR Times X 官方账号每篇转发</p></div>
        </div>
        <p className="callout">
          同期出现类似 webridge 的 affiliate 供应商主动接洽，验证了长内容矩阵在外链建设与商业合作上的外溢价值。
        </p>
      </section>

      {/* ========== 项目二 ========== */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">02</span>
          <h2 className="section-title">KOL 对接</h2>
        </div>
        <p className="section-sub">独立负责日本市场 YouTube / TikTok 达人的开发与合作落地。</p>
        <ul className="dot-list">
          <li>累计对接 YouTube、TikTok 达人 <strong>100+ 个</strong>，覆盖兴趣社交与泛娱乐人群。</li>
          <li>独立完成报价谈判与合作条件沟通，平衡投放预算与达人质量。</li>
          <li>撰写并下发本地化合作 briefs，明确内容方向、产品卖点与发布要求。</li>
          <li>按粉丝量级、内容调性、历史数据筛选达人，提升合作匹配度与 ROI。</li>
          <li>维护达人沟通节奏，缩短往返确认时间，保障合作按期上线。</li>
        </ul>
      </section>

      {/* ========== 项目三 ========== */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">03</span>
          <h2 className="section-title">撰写 PR Times 官方新闻稿</h2>
        </div>
        <p className="section-sub">通过官方新闻稿建立品牌可信度，同时服务于搜索曝光与外链建设。</p>

        <div className="grid2">
          <div className="info-card">
            <h3 className="card-title"><span className="rd" />稿件目的</h3>
            <p>以官方口径发布产品动态与品牌信息，在日本用户与媒体侧建立可信背书。</p>
          </div>
          <div className="info-card">
            <h3 className="card-title"><span className="rd" />双策略曝光</h3>
            <p>PR（媒体/品牌背书）与 SEO（关键词收录与外链权重）双线并行。</p>
          </div>
        </div>

        <div className="info-card">
          <h3 className="card-title"><span className="rd" />涉及业务</h3>
          <p>
            PR Times 新闻稿与系列 SEO 文章（发布时段与原 Yoitoki 账号运营互斥，
            期间 Yoitoki 账号更新减少），最终累计发布 <strong>11 篇</strong>。
          </p>
        </div>

        {/* 困难处理 A/B/C */}
        <div className="difficulty-box">
          <h3 className="card-title"><span className="rd" />面临困难与应对</h3>
          <p className="difficulty-q">
            若既无新功能上线、也没有自社调查数据可写，新闻稿如何持续产出新鲜内容？
          </p>
          <p className="mono">→ 自创社媒事件，三条路径：</p>
          <div className="diff-options">
            <div className="diff-opt">
              <span className="diff-badge mono">A</span>
              <p>发布 campaign 创造新鲜事，例如发起「七夕最佳约会地点」投票话题。</p>
            </div>
            <div className="diff-opt">
              <span className="diff-badge mono">B</span>
              <p>官宣产品推出「恋活婚活研究实验室」，以新品牌动作获取报道角度。</p>
            </div>
            <div className="diff-opt">
              <span className="diff-badge mono">C</span>
              <p>撰写自社调查并补充问卷 / 数据，形成可被引用的原创数据型稿件。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 项目四 ========== */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">04</span>
          <h2 className="section-title">日语学习 App AI 内容评估</h2>
        </div>
        <p className="section-sub">
          对日语学习 App 内 AI 生成内容进行质量评估，并归纳创作规律、反哺内容规范。
        </p>
        <ul className="dot-list">
          <li>评估覆盖<strong>恋爱乙女游戏、Chiikawa</strong> 等多种题材的 AI 生成文本。</li>
          <li>内容按日语能力 <strong>N5–N1</strong> 分级，核对语言难度与表达地道性。</li>
          <li>归纳 AI 在不同题材、难度下的创作规律与典型问题。</li>
          <li>衍生出「内容质量评估 + AI 修正规范」能力，为后续 AI 批量生产提供质量标准。</li>
        </ul>
      </section>

      {/* ========== 项目五 ========== */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">05</span>
          <h2 className="section-title">综合能力体现</h2>
        </div>
        <p className="section-sub">贯穿上述项目，沉淀出游戏 / 社交产品出海日本所需的复合运营能力。</p>
        <div className="grid2">
          {[
            { k: "本地化内容策划", v: "统一人设、四平台差异化矩阵，用日本用户接受的方式做种草。" },
            { k: "KOL / KOC 运营", v: "从分层定义、达人开发、报价谈判到 brief 管理的完整闭环。" },
            { k: "PR 与 SEO / GEO", v: "官方新闻稿、外链建设与 AI Summary 曝光，兼顾可信度与搜索流量。" },
            { k: "数据驱动复盘", v: "以 Page View、外链数、query 收录等指标量化运营效果。" },
            { k: "AI 工具应用", v: "结合 Dify 工作流与 AI 内容评估，提升内容生产与质检效率。" },
            { k: "跨文化沟通", v: "日语 N1 能力支撑达人沟通、文案撰写与本地市场判断。" },
          ].map((t) => (
            <div className="persona-card" key={t.k}>
              <div className="persona-head"><span className="persona-trait">{t.k}</span></div>
              <p className="persona-desc">{t.v}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
