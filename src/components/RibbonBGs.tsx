/**
 * 动漫感红色飘带全局背景层（参考：写意笔触飘带 · 毛边撕裂 · 深浅渐变 · 翻飞动态）
 * 纯 SVG 内联绘制，pointer-events:none，置于内容层之下，明暗主题通用（红色高饱和撞色）。
 */
export default function RibbonBGs() {
  return (
    <div className="ribbon-bg" aria-hidden="true">
      {/* 1 · 右上大飘带（环绕式，向画面外翻飞） */}
      <svg className="rb rb-1" viewBox="0 0 420 360" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="rbG1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff5a66" />
            <stop offset="0.5" stopColor="#e63946" />
            <stop offset="1" stopColor="#a81c2c" />
          </linearGradient>
          <linearGradient id="rbG2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#ff8a91" />
            <stop offset="1" stopColor="#d92b3e" />
          </linearGradient>
          <linearGradient id="rbG3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff7a84" stopOpacity="0.95" />
            <stop offset="1" stopColor="#f0434f" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* 主带 */}
        <path
          d="M-10,250 C70,190 120,60 230,20 C300,-4 380,40 430,118
             L438,150 C360,110 300,78 248,110 C196,142 170,210 92,308
             C60,346 24,380 -10,404 Z"
          fill="url(#rbG1)"
        />
        {/* 内层明暗褶皱 */}
        <path
          d="M28,288 C60,246 120,160 196,148 C232,142 268,154 300,176
             C282,150 238,138 196,150 C150,164 108,224 60,300 Z"
          fill="url(#rbG2)"
          opacity="0.55"
        />
        {/* 高光带 */}
        <path
          d="M160,56 C212,26 268,32 312,60 C286,50 240,42 196,58 C176,66 164,78 154,90 Z"
          fill="url(#rbG3)"
          opacity="0.7"
        />
        {/* 撕裂尾须 */}
        <path
          d="M430,150 C392,132 360,96 344,58 C339,46 336,34 335,22 L352,20 C354,40 360,62 372,82 C386,108 408,132 436,148 Z"
          fill="#c62536"
          opacity="0.8"
        />
        <polygon points="368,40 396,20 402,52" fill="#ff5a66" opacity="0.85" />
        <polygon points="300,210 330,196 318,228" fill="#b02130" opacity="0.7" />
      </svg>

      {/* 2 · 左中飘带（下摆回卷） */}
      <svg className="rb rb-2" viewBox="0 0 360 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="rbG4" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff6d78" />
            <stop offset="0.6" stopColor="#e63946" />
            <stop offset="1" stopColor="#a81c2c" />
          </linearGradient>
        </defs>
        <path
          d="M360,40 C300,90 240,120 180,118 C120,116 60,84 6,34
             L-8,60 C60,120 128,152 188,148 C248,144 306,104 364,50 Z"
          fill="url(#rbG4)"
        />
        <path
          d="M-8,60 C52,112 116,140 176,138 C208,137 234,128 252,114
             C226,124 196,132 168,134 C108,138 40,112 -14,62 Z"
          fill="#d92b3e"
          opacity="0.5"
        />
        <polygon points="150,150 186,164 144,182" fill="#b02130" opacity="0.75" />
        <polygon points="206,120 238,112 220,142" fill="#ff7a84" opacity="0.8" />
      </svg>

      {/* 3 · 左下小飘带 + 碎布 */}
      <svg className="rb rb-3" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid slice">
        <path
          d="M300,220 C250,180 210,150 170,150 C130,150 92,170 60,206 L80,220 C104,196 132,180 168,180 C206,180 246,204 300,232 Z"
          fill="#e63946"
        />
        <path d="M170,150 C150,150 132,158 118,170 C134,162 152,158 170,160 C186,162 198,168 208,176 C196,162 184,152 170,150 Z" fill="#a81c2c" opacity="0.6" />
        <polygon points="120,216 152,206 130,238" fill="#ff5a66" opacity="0.7" />
        <polygon points="200,196 234,192 214,222" fill="#d92b3e" opacity="0.8" />
      </svg>

      {/* 4 · 顶部细飞带（横贯） */}
      <svg className="rb rb-4" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid slice">
        <path
          d="M-20,44 C70,16 160,6 250,20 C330,32 420,66 520,104
             L528,84 C420,40 330,12 250,0 C160,-12 70,-6 -24,26 Z"
          fill="#e63946"
          opacity="0.75"
        />
        <polygon points="300,8 340,16 310,30" fill="#ff7a84" opacity="0.7" />
      </svg>

      {/* 5 · 右下碎布与长须 */}
      <svg className="rb rb-5" viewBox="0 0 260 260" preserveAspectRatio="xMidYMid slice">
        <path
          d="M-10,-10 C40,30 60,80 48,130 C38,174 6,210 -40,240 L-18,254 C32,220 66,176 78,128 C90,74 70,28 24,-12 Z"
          fill="#a81c2c"
          opacity="0.6"
        />
        <polygon points="30,70 66,58 52,96" fill="#ff6d78" opacity="0.8" />
        <polygon points="-6,120 30,130 4,152" fill="#e63946" opacity="0.7" />
      </svg>

      {/* 6 · 散落枫叶点缀（四周，形成"风"的氛围） */}
      <Leaf c="lf lf-1" />
      <Leaf c="lf lf-2" />
      <Leaf c="lf lf-3" />
      <Leaf c="lf lf-4" />
      <Leaf c="lf lf-5" />
      <Leaf c="lf lf-6" />
    </div>
  );
}

/**
 * 一枚写意小枫叶（简化概括形态，色深红·朱红渐变）
 */
function Leaf({ c }: { c: string }) {
  return (
    <svg className={c} viewBox="0 0 60 60" aria-hidden="true">
      <defs>
        <linearGradient id={`leafG-${c.replace(/[^a-z0-9]/gi, "")}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff5a66" />
          <stop offset="1" stopColor="#c62636" />
        </linearGradient>
      </defs>
      <path
        d="M30,4 C40,12 50,20 54,28 C44,26 36,26 30,30
           C24,26 16,26 6,28 C10,20 20,12 30,4 Z"
        fill={`url(#leafG-${c.replace(/[^a-z0-9]/gi, "")})`}
      />
      <path d="M30,8 L30,56" stroke="#a81c2c" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="30,14 22,24 30,22" fill="#e63946" />
      <polygon points="30,22 40,32 30,30" fill="#e63946" />
      <polygon points="30,30 20,40 30,38" fill="#e63946" />
      <polygon points="30,42 38,50 30,48" fill="#e63946" />
    </svg>
  );
}