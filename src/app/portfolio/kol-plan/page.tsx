'use client';

import Link from 'next/link';

export default function KolPlanPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          返回作品集
        </Link>
      </div>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="font-mono text-xs text-primary mb-3">03 / INTERNSHIP PROJECT</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">社媒 KOL 长内容平台运营方案</h1>
        <p className="text-muted-foreground text-lg">OLA PARTY JAPAN | Yoitoki（日本恋活/婚活 App）| 运营实习</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
        {/* KOL 达人拓展 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">01</span>
            KOL/KOC 达人资源拓展
          </h2>
          <div className="border border-border p-6 bg-card">
            <p className="text-sm text-muted-foreground mb-4">周期：约 3 周 | 在 Instagram、X 平台调研日本婚活/恋爱垂类 KOL 与 KOC</p>
            <h4 className="font-bold text-sm mb-3">SOP 流程</h4>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary font-mono">01</span>明确选择标准：视频为主账号，INS 粉丝 1w+ 为头部、5k+ 尽量触达；X 粉丝 50k+ 为头部、10k+ 尽量触达。互动率高的优先考虑。</li>
              <li className="flex gap-3"><span className="text-primary font-mono">02</span>发 DM 建立联系：谈付款形式、交付截止时间、期望目标、视频宣传形式等。</li>
              <li className="flex gap-3"><span className="text-primary font-mono">03</span>初稿审稿：交流各自看法，若对方有把握，按对方的格式来。</li>
              <li className="flex gap-3"><span className="text-primary font-mono">04</span>终稿审稿：确定没有安全问题。发布，结尾款，对方提供账户，我方申请财务交易结算。</li>
              <li className="flex gap-3"><span className="text-primary font-mono">05</span>长期跟踪数据（1-2 周）：对比达人平时数据及 PR 视频数据，提供私人转化链接，效果好则考虑长期合作。</li>
            </ol>
            <div className="mt-4 p-3 bg-secondary/50 border-l-2 border-primary">
              <p className="text-xs text-muted-foreground"><strong>面临困难及解决：</strong>X 私信回复率低，INS 触达效率更高，后改为主战 INS。</p>
            </div>
          </div>
        </div>

        {/* 内容策略 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">02</span>
            内容策略与平台分发
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border p-6 bg-card">
              <h4 className="font-bold text-sm mb-3 text-primary">目标平台</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Note</strong> — 长文深度内容，数据佐证型</li>
                <li><strong>Ameba Blog</strong> — 生活化叙事，温暖共情</li>
                <li><strong>Livedoor</strong> — SEO 关键词攻略体</li>
                <li><strong>Hatena</strong> — 数据分析/实证达人风格</li>
              </ul>
            </div>
            <div className="border border-border p-6 bg-card">
              <h4 className="font-bold text-sm mb-3 text-primary">内容母题</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>择偶市场价值论</li>
                <li>MBTI/性格相性分析</li>
                <li>沟通与约会实战技巧</li>
                <li>婚活效率与数据洞察</li>
                <li>社会热点/综艺争议评论</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 成果 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">03</span>
            项目成果
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: '触达达人', value: '30+' },
              { label: '签约合作', value: '8+' },
              { label: '内容产出', value: '15+' },
              { label: '周期', value: '3 周' },
            ].map((stat, i) => (
              <div key={i} className="border border-border p-4 bg-card text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
