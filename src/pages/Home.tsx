import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PROFILE, EDUCATION, LANGUAGE, SKILLS, EXPERIENCE, PORTFOLIO, SOCIALS,
} from "../data";


export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("inview");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-upper">
          <div className="hero-left">
            <h1 className="hero-name">
              {PROFILE.nameEN}
              <span className="dot">.</span>
            </h1>
            <div className="hero-name-line" />
            <p className="hero-portfolio">PORTFOLIO&nbsp;/&nbsp;2027</p>
          </div>
          <div className="hero-right">
            <p className="hero-intro">{PROFILE.intro}</p>
          </div>
        </div>

        <div className="hero-center">
          <h2 className="hero-title">
            <span className="bl">GAME</span>
            <br />
            <span className="rd">OPS</span>{" "}
            <span className="bl">
              PORTFOL<span className="tbox">O</span>
            </span>
          </h2>
        </div>

        <div className="hero-bottom">
          <div>
            <p className="hero-person">
              {PROFILE.nameCN} — {PROFILE.title}
            </p>
            <p className="hero-slogan">{PROFILE.slogan}</p>
          </div>
          <a href="#works" className="cta-link">
            查看作品
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ================= 01 教育背景 ================= */}
      <section id="about" className="section grid-bg">
        <div className="container">
          <SectionHead num="01" title="教育背景" />
          <div className="edu-grid">
            <div className="edu-col">
              {EDUCATION.map((e, i) => (
                <div className="edu-item reveal" key={e.period + "-" + i}>
                  <div className="edu-line" />
                  <p className="mono edu-period">{e.period}</p>
                  <h3 className="edu-school">{e.school}</h3>
                  <p className="edu-degree">{e.degree}</p>
                </div>
              ))}
            </div>
            <div className="edu-col lang-col">
              <h4 className="lang-title">语言能力</h4>
              {LANGUAGE.map((l) => (
                <div className="lang-row reveal" key={l.name + l.cert}>
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-cert mono">{l.cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 02 技能矩阵 ================= */}
      <section id="skills" className="section grid-bg">
        <div className="container">
          <SectionHead num="02" title="技能矩阵" />
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div className="skill-card reveal" key={s.cat}>
                <h4 className="skill-cat">
                  <span className="rd mono">{s.num}</span> {s.cat}
                </h4>
                <div className="skill-list">
                  {s.items.map((it) => (
                    <div className="skill-row" key={it.name}>
                      <div className="skill-head">
                        <span className="skill-name">{it.name}</span>
                        <span className="skill-pct mono">{it.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <span className="skill-fill" style={{ width: it.level + "%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 03 工作经历 ================= */}
      <section id="experience" className="section grid-bg">
        <div className="container">
          <SectionHead num="03" title="工作经历" />
          <div className="exp-list">
            {EXPERIENCE.map((x) => (
              <div className="exp-row reveal" key={x.company + x.period}>
                <div className="exp-period mono rd">{x.period}</div>
                <div className="exp-main">
                  <h3 className="exp-company">
                    {x.company} <span className="exp-role">· {x.role}</span>
                  </h3>
                  <ul className="exp-points">
                    {x.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 04 作品集 ================= */}
      <section id="works" className="section grid-bg">
        <div className="container">
          <SectionHead num="04" title="作品集" />
          <div className="works-grid">
            {PORTFOLIO.map((w) => (
              <Link to={w.route} className="work-card reveal" key={w.route}>
                <div className="work-num mono rd">{w.num}</div>
                <h3 className="work-title">{w.title}</h3>
                <p className="work-desc">{w.desc}</p>
                <div className="work-tags">
                  {w.tags.map((t) => (
                    <span className="work-tag" key={t}>{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 05 联系 ================= */}
      <section id="contact" className="section grid-bg">
        <div className="container">
          <SectionHead num="05" title="联系" />
          <div className="contact-grid reveal">
            <div className="contact-col">
              <div className="contact-item">
                <span className="mono rd">EMAIL</span>
                <span className="contact-link">{PROFILE.email}</span>
              </div>
              <div className="contact-item">
                <span className="mono rd">PHONE</span>
                <span className="contact-link">{PROFILE.phone}</span>
              </div>
              <div className="contact-item">
                <span className="mono rd">{SOCIALS.bilibili.note}</span>
                <div className="soc-links">
                  {SOCIALS.bilibili.links.map((l) => (
                    <a key={l.url} className="soc-link" href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-item">
                <span className="mono rd">{SOCIALS.xiaohongshu.note}</span>
                <div className="soc-links">
                  {SOCIALS.xiaohongshu.links.map((l) => (
                    <a key={l.url} className="soc-link" href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="section-head reveal">
      <h2 className="section-title">
        {title}
        <span className="dot">.</span>
      </h2>
      <span className="section-num mono rd">{num}</span>
    </div>
  );
}