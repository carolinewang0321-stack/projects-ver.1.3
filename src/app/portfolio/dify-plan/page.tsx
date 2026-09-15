'use client';

import Link from 'next/link';

export default function DifyPlanPage() {
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
        <p className="font-mono text-xs text-primary mb-3">04 / ACCOUNT OPERATION</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">账号运营迭代方案</h1>
        <p className="text-muted-foreground text-lg">人设账号「ひろき（Hiroki）」| 多平台运营 + Dify 工作流设计</p>
        <p className="text-muted-foreground text-sm mt-2">作者：Carolina | 2026 年 7 月</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
        {/* 核心人设 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">01</span>
            核心人设
          </h2>
          <div className="border border-border p-6 bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div><span className="text-muted-foreground">姓名：</span><strong>ひろき（Hiroki）</strong></div>
                <div><span className="text-muted-foreground">年龄：</span>27 岁</div>
                <div><span className="text-muted-foreground">自称：</span>ひろき・僕</div>
                <div><span className="text-muted-foreground">核心主张：</span>恋爱是「戦略」而非「努力」，但战略的终点应是「尊重」与「双向幸福」</div>
              </div>
              <div className="space-y-3">
                <div><span className="text-muted-foreground">背景故事：</span>22 岁被同事带入 matching app 的坑，经历多次失败恋爱，现与理想伴侣稳定交往</div>
                <div><span className="text-muted-foreground">关联产品：</span>多平台导流至 yoitoki.jp 及 note 原文</div>
              </div>
            </div>
          </div>
        </div>

        {/* 母题载体库 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">02</span>
            母题 × 载体内容库
          </h2>
          <div className="border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="text-left py-3 px-4 font-medium">母题</th>
                  <th className="text-left py-3 px-4 font-medium">定义</th>
                  <th className="text-left py-3 px-4 font-medium">主要平台</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ['择偶市场价值论', '用收入、年龄、条件等视角解构择偶行为', 'Note、livedoor'],
                  ['MBTI/性格相性分析', '用性格类型框架解读恋爱相性与沟通策略', 'Note、livedoor'],
                  ['沟通与约会实战技巧', '具体场景下的话术、破冰、话题接续', 'Ameba、Hatena'],
                  ['婚活效率与数据洞察', '引用真实统计数据分析婚活市场现象', 'Hatena'],
                  ['社会热点/综艺争议评论', '借势婚恋类新闻或综艺节目切入', '所有平台'],
                  ['真实故事连载', '半虚构的第一人称叙事系列', 'Note'],
                  ['情侣日常生活记录', '与伴侣真实互动的生活化细节', 'Ameba 特有'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">{row[0]}</td>
                    <td className="py-3 px-4">{row[1]}</td>
                    <td className="py-3 px-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 平台人格对照表 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">03</span>
            平台人格对照表
          </h2>
          <div className="border border-border overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="text-left py-3 px-4 font-medium">维度</th>
                  <th className="text-left py-3 px-4 font-medium">Note<br/><span className="text-xs text-muted-foreground">冷峻理论家</span></th>
                  <th className="text-left py-3 px-4 font-medium">Ameba<br/><span className="text-xs text-muted-foreground">温暖生活家</span></th>
                  <th className="text-left py-3 px-4 font-medium">livedoor<br/><span className="text-xs text-muted-foreground">SEO 炎上煽动家</span></th>
                  <th className="text-left py-3 px-4 font-medium">Hatena<br/><span className="text-xs text-muted-foreground">数据分析师</span></th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ['语气/文体', 'です/ます敬体，断言句式', 'emoji 密集，口语化', 'です/ます+断言', '早期数据分析，后期实践验证'],
                  ['核心手法', 'MBTI 框架反复套用', '生活场景叙事+女友互动', '伪造统计数据包装', '引用真实政府数据佐证'],
                  ['风险', '物化倾向（中）', '温和共情（低）', '言辞犀利（高）', '客观分析（低）'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">{row[0]}</td>
                    <td className="py-3 px-4">{row[1]}</td>
                    <td className="py-3 px-4">{row[2]}</td>
                    <td className="py-3 px-4">{row[3]}</td>
                    <td className="py-3 px-4">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dify 工作流 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">04</span>
            Dify 工作流设计思路
          </h2>
          <div className="border border-border p-6 bg-card">
            <p className="text-sm text-muted-foreground mb-4">
              使用方式：Dify 在选题分类阶段先判断本次选题属于哪个母题，再结合目标平台从载体库中选取呈现形式，
              两者叠加后才进入正文生成环节，保证「同一母题」在不同时间、不同平台产出的内容始终有实质差异。
            </p>
            <div className="flex flex-wrap gap-2">
              {['选题分类', '母题匹配', '平台适配', '载体选择', '正文生成', 'SEO 优化'].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm">{step}</span>
                  {i < 5 && <span className="text-muted-foreground">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
