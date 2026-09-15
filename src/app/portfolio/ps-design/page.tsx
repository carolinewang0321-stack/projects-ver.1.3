'use client';

import Link from 'next/link';

export default function PsDesignPage() {
  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          返回作品集
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="font-mono text-xs text-primary mb-3">01 / PS DESIGN</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">PS 设计作品</h1>
        <p className="text-muted-foreground text-lg">游戏宣传海报、角色立绘修图、UI 界面设计等视觉作品合集。</p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* [PLACEHOLDER: PS 作品图片] 替换为你的真实 PS 作品截图 */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-border bg-card overflow-hidden">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">[PLACEHOLDER: PS 作品图 {i}]</span>
              </div>
              <div className="p-4">
                <p className="font-medium text-sm">[PLACEHOLDER: 作品名称 {i}]</p>
                <p className="text-xs text-muted-foreground mt-1">[PLACEHOLDER: 作品描述]</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-border bg-secondary/30">
          <h3 className="font-bold mb-3">作品说明</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            本合集展示了使用 Adobe Photoshop 完成的游戏相关视觉设计作品，包括宣传海报设计、角色立绘精修、
            UI 界面概念设计等。作品风格偏向二次元/游戏美术方向，注重色彩搭配与视觉冲击力。
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            {/* [PLACEHOLDER: 补充说明] */}
            工具：Adobe Photoshop、Illustrator
          </p>
        </div>
      </section>
    </div>
  );
}
