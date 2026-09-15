/**
 * 头图（Hero）动漫感红色飘带装饰 — 环绕式翻飞，与全局背景呼应，形成个人特色。
 */
export default function HeroRibbons() {
  return (
    <div className="hero-ribbons" aria-hidden="true">
      <svg
        className="hr hr-main"
        viewBox="0 0 560 560"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <defs>
          <linearGradient id="hrG1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff7d87" />
            <stop offset="0.45" stopColor="#e63946" />
            <stop offset="1" stopColor="#8f1424" />
          </linearGradient>
          <linearGradient id="hrG2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#ff5a66" />
            <stop offset="1" stopColor="#b02130" />
          </linearGradient>
          <linearGradient id="hrG3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* 主飘带（大的 S 形翻飞） */}
        <path
          d="M120,540 C60,470 30,380 90,300 C140,236 230,230 250,150
             C266,82 220,20 140,-10
             L120,24 C186,48 222,96 210,152 C198,214 130,258 70,320
             C20,372 40,452 96,540 Z"
          fill="url(#hrG1)"
        />
        {/* 亮部褶皱 */}
        <path
          d="M118,470 C80,420 70,350 120,300
             C150,268 190,250 208,212
             C186,246 140,262 104,302
             C64,348 78,416 118,470 Z"
          fill="url(#hrG2)"
          opacity="0.6"
        />
        {/* 高光丝线 */}
        <path
          d="M128,360 C100,320 108,280 146,244 C120,272 106,306 136,356 Z"
          fill="url(#hrG3)"
          opacity="0.85"
        />
        {/* 撕裂尾须与碎布 */}
        <path
          d="M140,-10 C120,10 108,34 104,58 L118,64 C120,40 132,18 152,0 Z"
          fill="#c62536"
        />
        <polygon points="70,330 46,356 76,372 58,386 92,366" fill="#ff5a66" opacity="0.9" />
        <polygon points="206,190 238,178 224,210 246,224 214,214" fill="#b02130" opacity="0.8" />
        <polygon points="120,500 150,488 132,518 158,532 118,528" fill="#e63946" opacity="0.85" />
      </svg>
    </div>
  );
}