'use client';

import { useEffect, useState, useRef } from 'react';

/* ============================================================
   游戏运营岗位 - 个人简历 + 作品集网站
   设计参考：极简白底 + 朱红强调色 + 0px 直角 + 编号章节
   所有内容使用 [PLACEHOLDER: xxx] 标注，方便替换
   ============================================================ */

// ===== 导航栏 =====
function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: '关于' },
    { href: '#skills', label: '技能' },
    { href: '#experience', label: '经历' },
    { href: '#portfolio', label: '作品集' },
    { href: '#contact', label: '联系' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="font-bold text-base tracking-tight">
          {/* [PLACEHOLDER: 姓名] */}
          CAROLINA
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-1.5 hover:text-primary transition-colors"
            aria-label="切换主题"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} className="p-1.5" aria-label="切换主题">
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1.5" aria-label="菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-background z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// ===== Hero =====
function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-14">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="section-label mb-4 fade-in-up">GAME OPERATIONS / 游戏运营</p>
          <h1 className="display-title mb-6 fade-in-up">
            {/* [PLACEHOLDER: 姓名] */}
            王妮朵
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 fade-in-up leading-relaxed">
            {/* [PLACEHOLDER: 个人标语] */}
            热爱游戏与二次元文化的运营人，擅长社媒内容策划、KOL 合作与社区增长。
            希望用创意和数据为好游戏找到对的人。
          </p>
          <div className="flex flex-wrap gap-4 fade-in-up">
            <a href="#portfolio" className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
              查看作品
            </a>
            <a href="#contact" className="border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
              联系我
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== 教育背景 =====
function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 fade-in-up">
          <p className="section-label mb-3">01 / ABOUT</p>
          <h2 className="display-title">教育背景</h2>
        </div>

        <hr className="hairline mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 fade-in-up">
          {/* Education */}
          <div>
            <div className="border-l-2 border-primary pl-6 mb-8">
              <h3 className="font-bold text-xl mb-1">
                {/* [PLACEHOLDER: 学校名称] */}
                北京第二外国语学院
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                {/* [PLACEHOLDER: 专业/学历] */}
                葡萄牙语 · 本科
              </p>
              <p className="font-mono text-xs text-primary">
                {/* [PLACEHOLDER: 时间] */}
                2020.09 — 2024.06
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6 mb-8">
              <h3 className="font-bold text-xl mb-1">
                {/* [PLACEHOLDER: 交换学校] */}
                葡萄牙科英布拉大学
              </h3>
              <p className="text-muted-foreground text-sm mb-1">交换留学</p>
              <p className="font-mono text-xs text-primary">2022.09 — 2023.06</p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-bold text-xl mb-1">
                {/* [PLACEHOLDER: 学校名称] */}
                广东外语外贸大学
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                {/* [PLACEHOLDER: 专业/学历] */}
                日语口译 · 硕士（在读）
              </p>
              <p className="font-mono text-xs text-primary">2025.09 至今</p>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-sm text-muted-foreground mb-6">语言能力</h4>
            <div className="space-y-0">
              {[
                { lang: '日语', score: 'JLPT N1 合格', level: 'N1' },
                { lang: '英语', score: '568 分', level: 'CET-6' },
                { lang: '葡萄牙语', score: 'CAPLE C1', level: 'C1' },
                { lang: '普通话', score: '87.5 分', level: '二甲' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-border">
                  <div>
                    <span className="font-medium">{item.lang}</span>
                    <span className="text-muted-foreground text-sm ml-2">{item.score}</span>
                  </div>
                  <span className="font-mono text-sm text-primary font-bold">{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== 技能矩阵 =====
function SkillsSection() {
  const skillGroups = [
    {
      id: '01',
      name: '运营核心',
      skills: [
        { name: '社媒运营', level: 90 },
        { name: '内容策划', level: 88 },
        { name: 'KOL 合作', level: 85 },
        { name: '社区管理', level: 82 },
      ],
    },
    {
      id: '02',
      name: '数据与分析',
      skills: [
        { name: '数据分析', level: 78 },
        { name: 'SQL', level: 65 },
        { name: 'A/B 测试', level: 75 },
        { name: '用户画像', level: 80 },
      ],
    },
    {
      id: '03',
      name: '创意设计',
      skills: [
        { name: 'Photoshop', level: 85 },
        { name: '文案撰写', level: 88 },
      ],
    },
    {
      id: '04',
      name: '工具与平台',
      skills: [
        { name: '小红书', level: 92 },
        { name: 'B站', level: 85 },
        { name: 'Dify 工作流', level: 70 },
        { name: 'Excel', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 fade-in-up">
          <p className="section-label mb-3">02 / SKILLS</p>
          <h2 className="display-title">技能矩阵</h2>
        </div>

        <hr className="hairline mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 fade-in-up">
          {skillGroups.map((group) => (
            <div key={group.id} className="md:border-l md:border-border md:pl-8 first:md:border-l-0 first:md:pl-0">
              <h3 className="font-mono text-xs text-primary mb-6">
                {group.id} {group.name}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== 工作经历 =====
function ExperienceSection() {
  const experiences = [
    {
      period: '2026.03 — 至今',
      company: 'Olaparty（奥拉帕迪）',
      position: 'MKT 日语运营（实习）',
      description: '负责面向日本用户的网站/APP 整体营销运营',
      highlights: [
        '策划并执行 INS、X、TikTok 等平台推广方案，与日本 KOL/KOC 建立合作',
        '通过 Dify 工作流编排与 Prompt 设计，实现批量内容生成与分发，推动 SEO 排名提升',
        '官方社媒（INS、X、TikTok、YouTube）日常运营与账号生态维护',
      ],
    },
    {
      period: '2023.09 — 2024.01',
      company: '快手科技',
      position: 'Kwai Sports 葡语运营（实习）',
      description: '担任快手国际版运动专栏及相关网站运营',
      highlights: [
        '拉新活动策划，行业头部调研，外国客户采访及对接，Affiliate 联盟营销',
        '海外社媒（X、Instagram、Facebook）宣传运营，提高产品曝光率',
        '通过社群训练达人生产视频，达到批量宣传效果',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 fade-in-up">
          <p className="section-label mb-3">03 / EXPERIENCE</p>
          <h2 className="display-title">工作经历</h2>
        </div>

        <hr className="hairline mb-12" />

        <div className="space-y-0 fade-in-up">
          {experiences.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-border last:border-b-0">
              {/* Period */}
              <div className="md:col-span-3">
                <p className="font-mono text-sm text-primary">{exp.period}</p>
              </div>
              {/* Company & Position */}
              <div className="md:col-span-4">
                <h3 className="font-bold text-lg mb-1">{exp.company}</h3>
                <p className="text-muted-foreground text-sm mb-2">{exp.position}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>
              {/* Highlights */}
              <div className="md:col-span-5">
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5 text-xs"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== 作品集 =====
function PortfolioSection() {
  const projects = [
    {
      id: '01',
      title: 'PS 设计作品',
      category: '视觉设计',
      description: '游戏宣传海报、角色立绘修图、UI 界面设计等视觉作品合集。',
      href: '/portfolio/ps-design',
      image: 'https://images.unsplash.com/photo-1614850523454-c988675d8068?w=600&h=400&fit=crop',
    },
    {
      id: '02',
      title: '《原神》游戏体验总结',
      category: '游戏分析',
      description: '对《原神》的深度体验分析报告，涵盖玩法设计、付费模型、用户留存策略等维度。',
      href: '/portfolio/genshin-analysis',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
    },
    {
      id: '03',
      title: '社媒 KOL 长内容平台运营方案',
      category: '实习项目',
      description: 'OLA PARTY JAPAN - Yoitoki 日本婚活 App 的 KOL/KOC 达人拓展与内容运营方案。',
      href: '/portfolio/kol-plan',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    },
    {
      id: '04',
      title: '账号运营迭代方案（Dify）',
      category: '运营方案',
      description: '人设账号「ひろき」多平台运营方案，含母题载体库、平台人格对照表与 Dify 工作流设计。',
      href: '/portfolio/dify-plan',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    },
    {
      id: '05',
      title: '三亚团建攻略',
      category: '内容运营',
      description: '小红书风格旅游攻略，纯干货春夏必去宝藏地推荐。',
      href: '/portfolio/sanya-guide',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6 fade-in-up">
          <p className="section-label mb-3">04 / WORKS</p>
          <h2 className="display-title">作品集</h2>
        </div>
        <p className="text-muted-foreground mb-12 fade-in-up">
          5 个项目 — 从视觉设计到运营策略，覆盖游戏运营全链路能力
        </p>

        <hr className="hairline mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              className="card-hover block border border-border bg-card group"
            >
              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  data-category="其他"
                  className="w-full h-full object-cover"
                />
                <div className="portfolio-badge">{project.id}</div>
              </div>
              <div className="p-5">
                <p className="text-xs text-primary font-mono mb-2">{project.category}</p>
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== 联系方式 =====
function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 fade-in-up">
          <p className="section-label mb-3">05 / CONTACT</p>
          <h2 className="display-title">联系我</h2>
        </div>

        <hr className="hairline mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 fade-in-up">
          <div className="space-y-6">
            <h3 className="font-bold text-lg mb-4">联系方式</h3>
            {[
              { label: '邮箱', value: 'caroline_2002@126.com', href: 'mailto:caroline_2002@126.com' },
              { label: '手机', value: '180-2347-8917', href: 'tel:18023478917' },
            ].map((item, i) => (
              <a key={i} href={item.href} className="block">
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-medium hover:text-primary transition-colors">{item.value}</p>
              </a>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="font-bold text-lg mb-4">社交链接</h3>
            {[
              { name: 'GitHub', href: '#' },
              { name: 'LinkedIn', href: '#' },
              { name: '小红书', href: '#' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 border-b border-border group"
              >
                <span className="font-medium group-hover:text-primary transition-colors">{item.name}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-primary transition-colors">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Footer =====
function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Carolina. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">GAME OPERATIONS</p>
      </div>
    </footer>
  );
}

// ===== 主页面 =====
export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
