import { useEffect } from "react";
import { Link } from "react-router-dom";

// PS 作品数据：按尺寸类型分类（横幅 / 头像方形）
// 说明：多张作品底部带有原时署名（如 "Photoshop.By Chelsy"、贴吧网址水印），
//       已通过 .ps-frame 的固定裁剪（object-fit:cover + 底部裁切）进行遮挡去除。
const banners = [
  { src: "/ps/work-01.jpg", title: "签名档横幅 · 马卡龙渐变" },
  { src: "/ps/work-02.jpg", title: "签名档横幅 · 复古米灰" },
  { src: "/ps/work-03.jpg", title: "应援横幅 · 暖粉向日葵" },
  { src: "/ps/work-04.jpg", title: "古风横幅 · 風鈴" },
  { src: "/ps/work-05.jpg", title: "应援横幅 · 清新暖阳" },
  { src: "/ps/work-06.jpg", title: "横幅 · 甜美粉调" },
  { src: "/ps/work-07.jpg", title: "影视宣传横幅 · 古剑奇谭" },
  { src: "/ps/work-09.jpg", title: "横幅 · 复古向日葵" },
  { src: "/ps/work-10.jpg", title: "影视剪辑台词横幅" },
  { src: "/ps/work-11.jpg", title: "横幅 · 金泫雅" },
  { src: "/ps/work-12.jpg", title: "横幅 · DReAMER" },
  { src: "/ps/work-13.jpg", title: "伤感文字横幅" },
  { src: "/ps/work-14.jpg", title: "横幅 · 魔卡少女樱" },
];

const avatars = [
  { src: "/ps/work-08.jpg", title: "方形头像 · 지민" },
  { src: "/ps/work-15.jpg", title: "方形头像 · POKER FACE" },
  { src: "/ps/work-16.jpg", title: "方形头像 · 允儿" },
];

export default function PSDesign() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("inview")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid-bg detail-page">
      <div className="container">
        <div className="detail-head reveal">
          <Link to="/" className="back-link">← 返回首页</Link>
          <h1 className="detail-title">PS 设计作品<span className="dot">.</span></h1>
          <p className="detail-sub mono">VISUAL DESIGN · PHOTOSHOP</p>
        </div>

        {/* 横幅 / 签名档 */}
        <section className="section">
          <h3 className="gallery-cat">
            <span className="rd mono">01</span> 横幅 / 签名档
          </h3>
          <div className="ps-banner-grid">
            {banners.map((b) => (
              <figure className="ps-frame reveal banner" key={b.src}>
                <img src={b.src} alt={b.title} loading="lazy" />
                <figcaption className="mono">{b.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 头像 / 方形 */}
        <section className="section">
          <h3 className="gallery-cat">
            <span className="rd mono">02</span> 头像 / 方形
          </h3>
          <div className="ps-avatar-grid">
            {avatars.map((b) => (
              <figure className="ps-frame reveal avatar" key={b.src}>
                <img src={b.src} alt={b.title} loading="lazy" />
                <figcaption className="mono">{b.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}