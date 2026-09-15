'use client';

import Link from 'next/link';

export default function GenshinAnalysisPage() {
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
        <p className="font-mono text-xs text-primary mb-3">02 / GAME ANALYSIS</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">《原神》游戏体验总结</h1>
        <p className="text-muted-foreground text-lg">作者：Carolina | 深度体验分析报告</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
        {/* 一、特性 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">01</span>
            游戏特性
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p><strong className="text-foreground">类型：</strong>开放世界 ARPG。七国世界观、地区探索、解谜、宝箱、神瞳、任务链。</p>
            <p><strong className="text-foreground">元素反应战斗：</strong>火水雷冰草岩风，蒸发、融化、感电、冻结、扩散、绽放等，队伍搭配有策略性。</p>
            <p><strong className="text-foreground">抽卡养成：</strong>角色、武器、命座、圣遗物、天赋、等级，形成长期养成线。角色池 90 抽小保底、180 抽大保底；武器池 80 抽保底+定轨。</p>
            <p><strong className="text-foreground">持续运营更新：</strong>约六周一个版本，新角色、新活动、新地图、新剧情轮换。</p>
            <p><strong className="text-foreground">多平台互通：</strong>PC、iOS、Android、PS、云原神等，同一账号跨平台存档。</p>
            <p><strong className="text-foreground">副玩法生态：</strong>尘歌壶、七圣召唤、钓鱼、烹饪、联机、千星奇域等。</p>
          </div>
        </div>

        {/* 二、优缺点 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">02</span>
            优缺点分析
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border p-6 bg-card">
              <h3 className="font-bold text-primary mb-4">优点</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">+</span>视听质量高：大世界美术、音乐、人物设计，角色演示和 PV 富含特色</li>
                <li className="flex gap-2"><span className="text-primary">+</span>探索感强：地图设计有惊喜</li>
                <li className="flex gap-2"><span className="text-primary">+</span>元素战斗有深度：门槛低好上手，也可深入研究配队策略</li>
                <li className="flex gap-2"><span className="text-primary">+</span>角色塑造与世界观：角色厨、剧情考据、同人创作空间大</li>
                <li className="flex gap-2"><span className="text-primary">+</span>下载免费+多平台：门槛低，跨平台方便</li>
                <li className="flex gap-2"><span className="text-primary">+</span>文化输出与本地化：不同地区原型、多语言配音、全球同步</li>
              </ul>
            </div>
            <div className="border border-border p-6 bg-card">
              <h3 className="font-bold text-primary mb-4">缺点</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">-</span>新手追赶成本高：地图、任务、材料、活动堆积</li>
                <li className="flex gap-2"><span className="text-primary">-</span>限时活动：错过活动可能少剧情、道具、角色</li>
                <li className="flex gap-2"><span className="text-primary">-</span>角色养成周期长：圣遗物词条随机性高，毕业缓慢</li>
                <li className="flex gap-2"><span className="text-primary">-</span>数值膨胀与强度焦虑：新角色/新环境让老角色有压力</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 三、玩家群体 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">03</span>
            玩家群体
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: '休闲探索党', desc: '看风景、开图、追主线，主玩七圣召唤、尘歌壶等副玩法' },
              { name: '剧情党/考据党', desc: '剧情分析、世界观考据' },
              { name: '角色厨/收集党', desc: '为喜欢角色抽卡、买皮肤周边、看二创' },
              { name: '强度党/深渊竞速', desc: '研究配队、圣遗物、循环、竞速' },
              { name: '二创群体', desc: '同人、MMD，Lofter、微博、B站、AO3 等' },
              { name: '社交/联机玩家', desc: '周本、活动、带萌新' },
            ].map((group, i) => (
              <div key={i} className="border border-border p-4 bg-card">
                <h4 className="font-bold text-sm mb-2">{group.name}</h4>
                <p className="text-xs text-muted-foreground">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 四、付费机制 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">04</span>
            发行与付费机制
          </h2>
          <div className="border border-border p-6 bg-card">
            <p className="text-sm text-muted-foreground mb-4">
              用免费开放世界获客，用角色与武器抽卡变现，用月卡/纪行提供稳定现金流，用版本更新维持留存，用社区二创降低获客成本。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 font-medium">付费点</th>
                    <th className="text-left py-2 px-3 font-medium">商业功能</th>
                    <th className="text-left py-2 px-3 font-medium">心理机制</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ['首充双倍/小额礼包', '首次付费钩子', '登门槛、损失厌恶'],
                    ['空月祝福', '订阅制', '每日登录、棘轮效应'],
                    ['珍珠纪行', '任务型订阅', '目标效应、沉没成本'],
                    ['角色池', '核心 SKU', '保底、目标效应'],
                    ['武器池', '附加 SKU', '定轨、狄德罗效应'],
                    ['命座', '复购机制', '禀赋效应、目标效应'],
                    ['限时卡池', '稀缺供给', '损失厌恶'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-2 px-3">{row[0]}</td>
                      <td className="py-2 px-3">{row[1]}</td>
                      <td className="py-2 px-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
