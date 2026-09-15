import { useEffect } from "react";
import PageShell from "../components/PageShell";

/* ============================================================
   作品 03 · 社媒 KOL运营方案
   内容严格取自《实习项目方案总结（社媒 KOL 长内容平台等）》
   ============================================================ */

const dataRows = [
  { p: "11-17 May", n: 10, v: 90, l: 22 },
  { p: "18-24 May", n: 12, v: 158, l: 28 },
  { p: "25-31 May", n: 11, v: 113, l: 25 },
  { p: "1-7 Jun", n: 22, v: 183, l: 78 },
  { p: "8-14 Jun", n: 8, v: 114, l: 37 },
  { p: "15-21 Jun", n: 14, v: 125, l: 42 },
  { p: "22-28 Jun", n: 7, v: 157, l: 51 },
  { p: "29 Jun-5 Jul", n: 1, v: 160, l: 3 },
  { p: "5-12 Jul", n: 6, v: 217, l: 17 },
  { p: "合计", n: 91, v: 1317, l: 303 },
];

const SOP = [
  "① 明确选择标准：不能选择以文字为主的账号，应选择视频为主的账号。粉丝数量不能太少，但数量太多的触达效率低，也暂不考虑。在婚活恋活标签下，INS 粉丝 1w+ 即为头部，5k 以上尽量触达；X 粉丝 50k+ 为头部，10k 以上尽量触达。互动率高的优先考虑，已有合作者的博主不考虑。",
  "② 发 DM 建立联系，简单谈要求：付款形式、交付截止时间、期望目标、视频宣传形式等。",
  "③ 初稿审稿，交流各自看法，若对方有把握，按对方的格式来。",
  "④ 终稿审稿，确定没有安全问题。发布，结尾款，对方提供账户，我方申请财务交易结算。",
  "⑤ 长期跟踪数据（1-2 周），对比达人平时数据及 PR 视频数据，给对方提供私人转化链接，若效果好、转化率高即可考虑再次触达，长期合作。",
];

const eSOP = [
  "早期账号内容方向：",
  "① 红娘号，2 个，面向 20-40 代婚活用户。AI 红娘是产品特色，能够智能提供帮助，我们将其融入平台账号，主要内容聚焦婚活、恋活趣事，用红娘的口吻引导大家使用产品。",
  "② 官方号，1 个，面向 20-40 代婚活用户。风格更加严谨，数据说话，通过权威官网背书加强读者信任。",
  "SOP：人工调研平台规则及文章要求，撰写 prompt，AI 模型完成撰稿，人工在文章内嵌入官网链接或官方博客链接后发布。",
  "面临困难及解决：AI 模型会产生一定用词错误或人设错误，为了宣传安全，必须经过人工审核；部分平台如 Note 和 Ameba 有自己的外链限制，不允许插入带有 “jp” 字眼的链接，因此要通过 X 或 bit.ly 等将官网链接转化为短链后再插入。",
  "AI 辅助工具：Claude Sonnet、Gemini Flash、Nano Banana 2、Dify",
];

const transformSteps = [
  "① 通过收集早期账号文章数据及全网关键词抓取，团队发现近期 MBTI 及 AI 恋爱占卜相关内容爆火，故设定其大致内容方向聚焦 MBTI、恋爱占卜。",
  "② 与早期账号与团队其它新账号对比，确定该账号应面向 20-40 代男性婚活用户。调研部分婚活博主后，对内容进行一定迁移或模仿，将账号人设定为 27 岁男性，婚活前辈，结合亲身经历分享脱单经验。",
  "③ 初期不同平台侧重点不同，试验受欢迎内容。",
  "④ 经历一周养号期后正式发文，在 Note / Livedoor / Hatena / Ameba 四平台同步运营。为了优化 SEO，不能一稿多投：Note 偏深度长文，适合讲“策略型脱单”的方法论；Hatena 偏讨论社区，留开放式问题引导评论；Ameba 偏轻量阅读，把长文拆成短帖；Livedoor 偏 SEO 收录，标题和关键词会单独优化。",
  "⑤ 账号运营期间，每周研究内容数据，发现以下类型帖子点赞量观看量更高：自我吐槽型、冷幽默、MBTI 分析。根据研究结果，及时调整 AI prompt 和不同平台运营策略。",
  "⑥ 后期增添 X 账号运营，但时间不长，仅一周左右。X 发文短而精，要寻找话题钩子引导观众，会和 Note 配合互相引流。",
];

const learning = [
  "1. 文章中必须介绍 APP 的一个特点（属性、社区、功能等），且产品功能点必须具有时效性，需是一个月内发布的；或者是有一个自社调查。文章中的所有数据/调查（包括自社调查及外部调查）都必须根据 PR Times 平台要求在文章结尾列出调查名称、调查机构、日期、参与者人数、调查 url。",
  "2. 文章需要援引 2 个第三方数据来说明观点，包含数据分析；标题尽可能含有 AI。这些手段用于引流，更容易被转载。",
  "3. 配图/封面图中不能含有争议语句或 No.1 等很绝对的词语，否则会被撤稿。",
  "4. 文章中必须含有企业在 PR Times 注册的名字，否则会被限流。",
  "5. 可以发布其它语言文章，但必须包含日文翻译，且日文至少达 50%，否则容易被限流/撤稿。",
  "6. 一个账户可给同一篇文章无限点赞，点赞量与观看量无直接关系。",
];

const contentLaws = [
  "题材与文体适配问题：秘境探访类文章倾向使用短句和である体叙述，虽规避了语法风险，但削弱了历史/故事题材应有的文学质感；部分文章存在叙述体（だ体）与敬体（ですます体）混用不一致的情况。",
  "AI 生成的用词失真风险：识别出 AI 可能混淆中日汉字/繁简字的问题（如“小众秘境”应为日语惯用的「穴場」而非直接借用中文表达），为后续 prompt 优化提供了具体修正方向。",
  "叙事逻辑漏洞：短篇推理小说存在结局仓促、人物逻辑前后矛盾等问题（如长期“迟钝”设定的角色突然精准破案），而长篇逻辑完整度明显更高，说明 AI 在短文本内的伏笔与收束能力有限。",
  "模板化倾向：秘境探访类文章结构高度雷同（固定的开头导入+历史介绍模式），环境/历史描写扎实但人物个性缺失，导致内容同质化、可读性下降。",
  "题材适配度差异：Chiikawa 类内容在缺乏中心思想时，即便动作/环境描写细腻也显得“用力过猛”；少女漫画类由于贴近日常语体，语言难度与题材调性配合度最高。",
];

const abilities = [
  "内容矩阵化运营能力：跨四平台（Note / Livedoor / Hatena / Ameba）同步管理人设号内容，具备账号定位、内容节奏与数据复盘的综合把控经验。",
  "同一个功能/活动的宣传在不同平台需要运用不同策略，除了长文平台，还熟悉 PR TIMES 官方稿件规范，理解 SEO 文章写作规则、社交平台内容调性差异，能够快速适配不同渠道的内容标准，具备渠道分发经验。",
  "数据驱动的渠道优化判断：基于周浏览量/点赞数据支持渠道保留、调整、停止的团队决策。",
  "多产品线内容生产经验：横跨恋爱社交（Yoitoki）与语言教育（日语学习 App）两条产品线，兼具内容生产者与内容评估者双重视角。",
  "AI 协作与内容质控经验：从 AI 辅助内容生产（Dify 工作流批量产出）到 AI 生成内容人工评估，积累了较为完整的 AI 内容全链路参与经验。",
];

export default function KolPlan() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.add("inview"));
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <PageShell
      back="/"
      title="社媒 KOL运营方案"
      sub="SNS & KOL PLAN · OLA PARTY JAPAN · MKT · Yoitoki（日本恋活/婚活 App）运营实习"
    >
      <section className="lead">
        在<b> OLA PARTY JAPAN</b> 旗下社交产品 <b>Yoitoki</b>（日本恋活/婚活 App）运营实习中，从
        0 到 1 搭建并运营人设账号「hiroki」，并承担 KOL/KOC 达人拓展、SEO 外链矩阵、恋爱 Hub 页面
        内容支持、PR TIMES 官方新闻稿与 AI 生成内容质量评估等多条业务线工作。
      </section>

      {/* 01 KOL/KOC 达人资源拓展 */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">01</span>
          <h2 className="section-title">KOL / KOC 达人资源拓展</h2>
        </div>
        <p className="section-sub">
          周期：约 3 周。在 Instagram、X 平台调研日本婚活/恋爱垂类 KOL 与 KOC，寻找调性相符的达人
          资源，为后续合作储备名单。
        </p>
        <h3 className="sub-head">SOP</h3>
        <ul className="dot-list">
          {SOP.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        <p className="callout">
          面临困难及解决：X 私信回复率低，INS 触达效率更高，后改为主战 INS。
        </p>
      </section>

      {/* 02 SEO 外链矩阵运营 */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">02</span>
          <h2 className="section-title">SEO 外链矩阵运营</h2>
        </div>
        <p className="section-sub">
          周期：4-5 周，后续演变持续至实习结束。目标：提高产品官网链接或官方博客链接 SEO 或 GEO 排名。
          做法：在各大日本知名博客网站注册（Note、Livedoor、Hatena、Ameba），发布婚活恋活相关文章，
          在文章内嵌入产品官网链接或官方博客链接。
        </p>

        <h3 className="sub-head">早期阶段</h3>
        <p className="section-sub" style={{ marginTop: 0, marginBottom: 10 }}>
          在已有账号中批量发布含外链文章，每周 100+ 篇，后根据数据表现淘汰低效账号。
        </p>
        <ul className="dot-list">
          {eSOP.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <h3 className="sub-head">转型阶段</h3>
        <p className="section-sub" style={{ marginTop: 0, marginBottom: 10 }}>
          为避免账号推送低效，团队决定注册新账号，填补早期账号空白。我负责从 0 搭建人设号「hiroki」并全程运营监管。
        </p>
        <ul className="dot-list">
          {transformSteps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <h3 className="sub-head">成果数据</h3>
        <p className="section-sub" style={{ marginTop: 0, marginBottom: 12 }}>
          在婚活/恋活标签下，单篇点赞量有 20-100+ 不等。该账号持续运营 9 周，累计发布 91 篇内容，
          总浏览量 1317 次、总点赞 303 次，单篇平均浏览量从首周 9 次（90/10）提升至末周 36 次
          （217/6），增长约 4 倍。以下为各周期详细数据：
        </p>
        <div className="table-wrap">
          <table className="pay-table">
            <thead>
              <tr>
                <th>周期</th>
                <th>发文数</th>
                <th>浏览量</th>
                <th>点赞</th>
              </tr>
            </thead>
            <tbody>
              {dataRows.map((r, i) => (
                <tr key={i}>
                  <th>{r.p}</th>
                  <td>{r.n}</td>
                  <td>{r.v}</td>
                  <td>{r.l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="callout">
          其中，5-12 Jul 周期浏览量达到峰值（217 次），是运营后期效果最佳的周期；1-7 Jun 周期点赞数
          达到峰值（78 次），当周点赞率（点赞/浏览）约 43%，为 9 周最高。29 Jun-5 Jul 周期虽仅发布
          1 篇内容，但获得 160 次浏览，单篇效率突出。
        </p>

        <h3 className="sub-head">协作部分</h3>
        <p className="section-sub" style={{ marginTop: 0 }}>
          为团队多渠道复盘提供每周账号数据（浏览量/点赞），支持渠道保留/调整/停止的决策（决策本身由团队
          主导）。最终判定「hiroki」账号有利并希望我进一步发展运营其内容。
        </p>

        <p className="callout">
          现状：外链打 SEO 排名已告一段落，团队转向精细化「做号」策略，内容为上，hiroki 账号仍在持续
          更新。
        </p>
      </section>

      {/* 03 恋爱 Hub 页面内容支持 */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">03</span>
          <h2 className="section-title">恋爱 Hub 页面内容支持（MBTI 测试 + 页面优化）</h2>
        </div>
        <p className="section-sub">
          周期：题库收集 1-2 天，页面优化上线后 2-3 周。采购现成 MBTI 题库，用 AI 二次改写适配产品
          调性，产出 3 套约 180 题恋爱向测试题。页面正式上线后，参与后续迭代，针对格式、文案、玩法内容
          提出多项改进建议，部分建议被纳入迭代排期。
        </p>
      </section>

      {/* 04 PR TIMES 官方新闻稿撰写 */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">04</span>
          <h2 className="section-title">PR TIMES 官方新闻稿撰写</h2>
        </div>
        <p className="section-sub">
          周期：2-3 周。以官方身份撰写产品功能相关软文（AI 语音助手、价值观匹配等），结合季节热点与外部
          权威数据源，产出行业观察类稿件。前期因不熟悉平台规则（功能时效性要求、格式规范）经历多篇撤稿，
          复盘调整后成功发布。最终发布共 11 篇。该板块与 hiroki 账号运营时间互斥，期间 hiroki 更新
          减少。
        </p>

        <h3 className="sub-head">代表案例</h3>
        <p className="section-sub" style={{ marginTop: 0 }}>
          以「今年の花火大会、誰と行きますか？」一稿为例：结合 7 月下旬隅田川花火大会的季节热点，围绕
          「时间／对话／费用／照片／关系推进」五个维度展开约会前的价值观确认建议，并将 AI 美緒（Mio）、
          AI 映美（Emi）、AI 由美（Yumi）三个产品功能自然嵌入场景化叙事中，同时引用 Reuters 物价报道
          及一篇约 40 万用户规模的交友通讯行为研究作为外部数据支撑，符合 PR 稿件「数据来源需标注机构/
          标题/日期/样本量」的写作规范。稿件中还植入多条 yoitoki.jp 站内博客链接，与 SEO 文章矩阵形成
          互链，兼具 PR 传播与 SEO 导流的双重作用。
        </p>

        <h3 className="sub-head">成果数据</h3>
        <div className="stat-grid">
          <div className="stat-item">
            <div className="stat-num">11<span className="stat-x">×</span></div>
            <p>Page View 前月比增长</p>
          </div>
          <div className="stat-item">
            <div className="stat-num">112</div>
            <p>外链增加（条）</p>
          </div>
          <div className="stat-item">
            <div className="stat-num">59</div>
            <p>query 排到谷歌 AI Summary</p>
          </div>
          <div className="stat-item">
            <div className="stat-num">100<span className="stat-x">%</span></div>
            <p>PR Times X 官号每篇转发</p>
          </div>
        </div>
        <p className="callout">
          其他效益：类似 webridge 的 affiliate 供应商主动找来了。
        </p>

        <h3 className="sub-head">复盘 Learning</h3>
        <p className="section-sub" style={{ marginTop: 0 }}>
          方法：对比不同文章数据及内容，比如某几篇文章观看量较低且没有转载，发现其共同点/某些特征包括，
          文中不包含数据分析，标题和内容也与 AI 无关。
        </p>
        <ul className="dot-list">
          {learning.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <h3 className="sub-head">面临困难及解决</h3>
        <p className="section-sub" style={{ marginTop: 0 }}>
          如果没有新功能，也没有自社调查，怎么做？→ 自创社媒事件，eg. 官方发起了花火节活动，京都相亲
          活动等。
        </p>
        <p className="callout">
          A. 社媒发布 campaign，创作新鲜事（例：七夕最佳约会地点投票活动，以此为话题写一篇 PR 文章）
          <br />B. 官宣 yoitoki 发布了恋活婚活研究实验室
          <br />C. 写自社调查，后续补充具体调查问卷/数据
        </p>
      </section>

      {/* 05 AI 生成内容质量评估 */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">05</span>
          <h2 className="section-title">AI 生成内容质量评估</h2>
        </div>
        <p className="section-sub">
          周期：3-4 周。参与公司孵化的日语学习类新产品项目。针对 AI 生成的日语学习文章进行人工评分，
          评分结果用于模型微调及内容团队质量监控报表。
        </p>
        <ul className="dot-list">
          <li>
            内容范围：覆盖恋爱乙女游戏、Chiikawa、少女漫画、推理小说、秘境探访等六至七个主题，难度覆盖
            N5-N1 全阶段，评估文章达数百篇。
          </li>
          <li>
            评分方式：基于「可读性/吸引力」为核心的粗粒度维度（如「让人想读」到「完全读不懂/读不下去」），
            结合语法、内容、设定、逻辑等角度综合判断；与同组实习生的评分标准自然一致，未出现需专门校准的
            分歧。
          </li>
        </ul>

        <h3 className="sub-head">归纳的内容规律</h3>
        <ul className="dot-list">
          {contentLaws.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <p className="callout">
          核心价值：不仅完成基础评分任务，还基于日语语言能力与文本分析视角，系统性总结出 AI 生成内容在
          文体一致性、语言地道性、叙事逻辑、题材适配等维度的具体问题模式，为 AI 生成模型的 prompt 优化
          和微调方向提供了可操作的参考依据。
        </p>
      </section>

      {/* 06 综合能力体现 */}
      <section className="detail-sec">
        <div className="sec-head">
          <span className="mono">06</span>
          <h2 className="section-title">综合能力体现</h2>
        </div>
        <ul className="dot-list">
          {abilities.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}