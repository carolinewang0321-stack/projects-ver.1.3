'use client';

import { useEffect, useState, useRef } from 'react';

/* ============================================================
   游戏运营岗位 - 个人简历 + 作品集网站
   所有内容使用 [PLACEHOLDER: xxx] 标注，方便替换为真实内容
   ============================================================ */

// ===== 导航栏组件 =====
function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: '关于 / About' },
    { href: '#portfolio', label: '作品集 / Portfolio' },
    { href: '#contact', label: '联系 / Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-primary font-mono text-xl">&lt;</span>
          {/* [PLACEHOLDER: 姓名/Logo] 替换为你的姓名或品牌名 */}
          <span>[NAME]</span>
          <span className="text-primary font-mono text-xl">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="切换主题"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 border border-border"
            aria-label="切换主题"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 border border-border"
            aria-label="菜单"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-card z-40 flex flex-col items-center justify-center gap-8 animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-bold hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// ===== Hero 区域组件 =====
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pixel-grid overflow-hidden">
      {/* Decorative elements - anime/gaming style */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-primary/20 rotate-12 hidden lg:block" />
      <div className="absolute bottom-32 left-10 w-20 h-20 bg-primary/5 hidden lg:block" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full hidden lg:block" />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent rounded-full hidden lg:block" />

      {/* Neon grid decoration */}
      <svg className="absolute bottom-0 right-0 w-96 h-96 opacity-10 dark:opacity-20 hidden lg:block" viewBox="0 0 200 200">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#grid)" />
      </svg>

      {/* Game controller icon decoration */}
      <svg className="absolute top-1/4 right-20 w-16 h-16 text-primary/10 dark:text-primary/20 hidden xl:block" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2-4l-2 2-2-2h4z" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Mono accent label */}
          <p className="mono-accent text-primary mb-6 fade-in-up">
            {/* [PLACEHOLDER: 标签] 替换为你的目标岗位标签 */}
            {'// GAME OPERATIONS'}
          </p>

          {/* Display Title - strictly left aligned */}
          <h1 className="display-title text-left mb-6 fade-in-up">
            {/* [PLACEHOLDER: 姓名] 替换为你的真实姓名 */}
            <span className="block">[YOUR</span>
            <span className="block">NAME]</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 fade-in-up text-left">
            {/* [PLACEHOLDER: 个人定位标语] 替换为一句话描述你的核心优势 */}
            热爱游戏，专注用户增长与活动策划，用数据驱动运营决策，创造有温度的玩家社区。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 fade-in-up">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors"
            >
              查看作品
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-foreground px-8 py-4 font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              联系我
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

// ===== 关于我 + 简历区域 =====
function ResumeSection() {
  // Skills data - [PLACEHOLDER: 技能列表] 替换为你的真实技能
  const skills = [
    { name: '数据分析', level: 85 },
    { name: '用户运营', level: 90 },
    { name: '活动策划', level: 88 },
    { name: '内容创作', level: 80 },
    { name: '社媒运营', level: 85 },
    { name: '用户增长', level: 75 },
    { name: '版本运营', level: 70 },
    { name: '社区运营', level: 82 },
    { name: 'SQL / Excel', level: 78 },
  ];

  // Education data - [PLACEHOLDER: 教育背景] 替换为你的真实教育经历
  const education = [
    {
      school: '[PLACEHOLDER: 学校名称]',
      degree: '[PLACEHOLDER: 学历] · [PLACEHOLDER: 专业]',
      period: '[PLACEHOLDER: 20xx.09 - 20xx.06]',
      languages: [
        { name: '中文', level: '母语' },
        { name: '英文', level: '[PLACEHOLDER: CET-6 / 雅思 x.x]' },
      ],
    },
  ];

  // Work experience data - [PLACEHOLDER: 工作经历] 替换为你的真实工作经历
  const experiences = [
    {
      company: '[PLACEHOLDER: 公司名称 A]',
      position: '[PLACEHOLDER: 游戏运营专员]',
      period: '[PLACEHOLDER: 20xx.xx - 至今]',
      highlights: [
        '[PLACEHOLDER: 负责某游戏产品用户运营，月活跃用户提升 30%]',
        '[PLACEHOLDER: 策划并执行 10+ 场线上活动，累计参与用户 50 万+]',
        '[PLACEHOLDER: 搭建用户数据分析体系，输出周报/月报驱动决策]',
      ],
    },
    {
      company: '[PLACEHOLDER: 公司名称 B]',
      position: '[PLACEHOLDER: 运营实习生]',
      period: '[PLACEHOLDER: 20xx.xx - 20xx.xx]',
      highlights: [
        '[PLACEHOLDER: 协助社区运营，管理 5 个核心玩家群，日活提升 20%]',
        '[PLACEHOLDER: 撰写游戏攻略/内容 20+ 篇，累计阅读量 10 万+]',
      ],
    },
    {
      company: '[PLACEHOLDER: 公司名称 C]',
      position: '[PLACEHOLDER: 内容运营实习生]',
      period: '[PLACEHOLDER: 20xx.xx - 20xx.xx]',
      highlights: [
        '[PLACEHOLDER: 负责社交媒体账号运营，粉丝增长 5000+]',
        '[PLACEHOLDER: 参与策划节日主题活动，ROI 达到 1:3]',
      ],
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 fade-in-up">
          <p className="mono-accent text-primary mb-3">01 / RESUME</p>
          <h2 className="text-4xl md:text-5xl font-bold">关于我 / About</h2>
        </div>

        <hr className="hairline mb-16" />

        {/* Education */}
        <div className="mb-16 fade-in-up">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            教育背景 / Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="border border-border p-6 bg-card">
                <h4 className="font-bold text-lg mb-1">{edu.school}</h4>
                <p className="text-muted-foreground text-sm mb-2">{edu.degree}</p>
                <p className="font-mono text-xs text-muted-foreground mb-4">{edu.period}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.languages.map((lang, j) => (
                    <span key={j} className="text-xs px-3 py-1 bg-muted text-muted-foreground">
                      {lang.name}: {lang.level}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="hairline mb-16" />

        {/* Skills Matrix */}
        <div className="mb-16 fade-in-up">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <path d="M12 20v-6M6 20V10M18 20V4" />
            </svg>
            技能矩阵 / Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="border border-border p-4 bg-card">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted overflow-hidden">
                  <div
                    className="h-full bg-primary skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="hairline mb-16" />

        {/* Work Experience Timeline */}
        <div className="fade-in-up">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            工作经历 / Experience
          </h3>
          <div className="relative pl-8 border-l-2 border-primary/30">
            {experiences.map((exp, i) => (
              <div key={i} className="mb-10 last:mb-0 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[2.35rem] top-1 w-4 h-4 bg-primary" />
                <div className="border border-border p-6 bg-card">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{exp.company}</h4>
                      <p className="text-primary text-sm font-medium">{exp.position}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== 作品集区域 =====
function PortfolioSection() {
  // Portfolio data - [PLACEHOLDER: 作品链接] 替换 href 为你的真实作品链接
  const projects = [
    {
      id: 1,
      title: 'PS 设计作品',
      description: '使用 Photoshop 完成的游戏宣传海报、角色立绘修图、UI 界面设计等视觉作品合集。',
      tags: ['Photoshop', '视觉设计', '游戏美术'],
      image: 'https://images.unsplash.com/photo-1614850523454-c988675d8068?w=600&h=400&fit=crop',
      // [PLACEHOLDER: 作品链接] 替换 # 为你的真实作品页面链接
      href: '#',
      category: '设计',
    },
    {
      id: 2,
      title: '游戏体验总结',
      description: '对多款热门游戏的深度体验分析报告，涵盖玩法设计、付费模型、用户留存策略等维度。',
      tags: ['游戏分析', '体验报告', '竞品研究'],
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
      // [PLACEHOLDER: 作品链接] 替换 # 为你的真实文章链接
      href: '#',
      category: '分析',
    },
    {
      id: 3,
      title: '社媒 KOL 长内容平台运营方案',
      description: '实习期间主导的社媒运营项目，制定 KOL 合作策略与长内容平台分发方案，实现品牌曝光提升 200%。',
      tags: ['社媒运营', 'KOL合作', '内容策略', '实习项目'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      // [PLACEHOLDER: 作品链接] 替换 # 为你的真实方案文档链接
      href: '#',
      category: '方案',
    },
    {
      id: 4,
      title: '账号运营迭代方案',
      description: '针对游戏官方账号的运营迭代方案，包含内容规划、粉丝互动策略、数据追踪体系搭建。',
      tags: ['账号运营', '迭代优化', '数据驱动'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      // [PLACEHOLDER: 作品链接] 替换 # 为你的真实方案链接
      href: '#',
      category: '方案',
    },
    {
      id: 5,
      title: '小红书旅游攻略',
      description: '个人运营的小红书旅游账号内容示例，单篇笔记最高阅读量 5 万+，账号月增粉 2000+。',
      tags: ['小红书', '内容运营', '自媒体'],
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop',
      // [PLACEHOLDER: 作品链接] 替换 # 为你的真实小红书主页链接
      href: '#',
      category: '运营',
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 fade-in-up">
          <p className="mono-accent text-primary mb-3">02 / PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold">作品集 / Works</h2>
        </div>

        <hr className="hairline mb-16" />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover block border border-border bg-card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  data-category="其他"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="mono-accent text-xs bg-primary text-primary-foreground px-2 py-1">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover arrow indicator */}
              <div className="px-5 pb-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                查看详情
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== 联系方式区域 =====
function ContactSection() {
  // [PLACEHOLDER: 联系方式] 替换为你的真实联系信息
  const contacts = [
    {
      type: '邮箱',
      value: '[PLACEHOLDER: your.email@example.com]',
      href: 'mailto:[PLACEHOLDER: your.email@example.com]',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7l-10 7L2 7" />
        </svg>
      ),
    },
    {
      type: '微信',
      value: '[PLACEHOLDER: 微信号]',
      href: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  // [PLACEHOLDER: 社交链接] 替换 href 为你的真实社交账号链接
  const socials = [
    {
      name: 'GitHub',
      href: '[PLACEHOLDER: https://github.com/yourusername]',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '[PLACEHOLDER: https://linkedin.com/in/yourprofile]',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: '作品主页',
      href: '[PLACEHOLDER: https://yourportfolio.com]',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 fade-in-up">
          <p className="mono-accent text-primary mb-3">03 / CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold">联系我 / Contact</h2>
        </div>

        <hr className="hairline mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 fade-in-up">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">联系方式</h3>
            <div className="space-y-4">
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 border border-border bg-card hover:border-primary transition-colors group"
                >
                  <div className="text-primary">{contact.icon}</div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">{contact.type}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">社交链接</h3>
            <div className="space-y-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border bg-card hover:border-primary transition-colors group"
                >
                  <div className="text-primary">{social.icon}</div>
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-primary transition-colors">{social.name}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-primary transition-colors">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Footer 组件 =====
function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          {/* [PLACEHOLDER: 姓名] 替换为你的真实姓名 */}
          &copy; 2024 [YOUR NAME]. All rights reserved.
        </p>
        <p className="mono-accent text-xs text-muted-foreground">
          BUILT WITH PASSION FOR GAMING
        </p>
      </div>
    </footer>
  );
}

// ===== 主页面 =====
export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Initialize theme from system preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <ResumeSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
