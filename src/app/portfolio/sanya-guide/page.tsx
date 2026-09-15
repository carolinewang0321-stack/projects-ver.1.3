'use client';

import Link from 'next/link';

export default function SanyaGuidePage() {
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
        <p className="font-mono text-xs text-primary mb-3">05 / CONTENT OPERATION</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">三亚团建攻略</h1>
        <p className="text-muted-foreground text-lg">纯干货 | 春夏必去宝藏地推荐</p>
        <p className="text-muted-foreground text-sm mt-2">小红书风格旅游攻略 | 内容运营作品</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
        {/* 攻略概览 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">01</span>
            行程概览
          </h2>
          <div className="border border-border p-6 bg-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: '推荐天数', value: '4-5 天' },
                { label: '最佳季节', value: '3-6 月' },
                { label: '人均预算', value: '3000-5000' },
                { label: '适合人群', value: '团建/朋友' },
              ].map((item, i) => (
                <div key={i} className="text-center p-3 bg-secondary/30">
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 推荐景点 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">02</span>
            宝藏景点推荐
          </h2>
          <div className="space-y-4">
            {[
              {
                name: '亚龙湾热带天堂森林公园',
                tags: ['自然风光', '打卡圣地'],
                desc: '《非诚勿扰 2》取景地，热带雨林景观，过江龙索桥、鸟巢度假村。适合团队拓展和拍照打卡。',
              },
              {
                name: '蜈支洲岛',
                tags: ['海岛', '水上运动'],
                desc: '海水清澈见底，潜水胜地。可体验摩托艇、拖伞、海底漫步等水上项目，团建活动丰富。',
              },
              {
                name: '天涯海角',
                tags: ['经典景点', '文化'],
                desc: '三亚标志性景点，"天涯""海角"石刻。适合团队合影，寓意"走到天涯海角"。',
              },
              {
                name: '南山文化旅游区',
                tags: ['文化', '祈福'],
                desc: '108 米海上观音像，佛教文化主题。适合团队祈福活动，素斋体验。',
              },
              {
                name: '三亚湾椰梦长廊',
                tags: ['免费', '日落'],
                desc: '20 公里椰林海岸线，免费开放。傍晚看日落绝佳地点，适合团队散步聊天。',
              },
            ].map((spot, i) => (
              <div key={i} className="border border-border p-5 bg-card">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold">{spot.name}</h3>
                  <div className="flex gap-1">
                    {spot.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 bg-primary/10 text-primary">{tag}</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{spot.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 美食推荐 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">03</span>
            美食推荐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: '椰子鸡', desc: '三亚必吃，清甜椰子水做汤底，文昌鸡鲜嫩' },
              { name: '海鲜大餐', desc: '第一市场自选海鲜加工，推荐皮皮虾、和乐蟹' },
              { name: '清补凉', desc: '海南特色甜品，椰奶+各种配料，消暑必备' },
              { name: '抱罗粉', desc: '海南传统米粉，汤鲜粉滑，早餐首选' },
            ].map((food, i) => (
              <div key={i} className="border border-border p-4 bg-card">
                <h4 className="font-bold text-sm mb-1">{food.name}</h4>
                <p className="text-xs text-muted-foreground">{food.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 运营数据 */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">04</span>
            内容运营数据
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: '单篇最高阅读', value: '5 万+' },
              { label: '收藏数', value: '2000+' },
              { label: '账号月增粉', value: '2000+' },
              { label: '互动率', value: '8.5%' },
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
