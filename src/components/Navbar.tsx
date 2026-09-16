import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { id: "about", num: "01", label: "关于" },
  { id: "skills", num: "02", label: "技能" },
  { id: "experience", num: "03", label: "经历" },
  { id: "works", num: "04", label: "作品" },
  { id: "contact", num: "05", label: "联系" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  // On home, track which section is in view
  useEffect(() => {
    if (location.pathname !== "/") return;
    const ids = LINKS.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    // scroll to hash when arriving on home
    const hash = window.location.hash.slice(1);
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const handleNav = () => setOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            NIDUO<span className="dot">.</span>
          </Link>
          <nav className="nav-links">
            {LINKS.map((l) => (
              <Link
                key={l.id}
                to={`/#${l.id}`}
                className={"nav-link" + (active === l.id ? " active" : "")}
                onClick={handleNav}
              >
                {l.label}
              </Link>
            ))}
            <button className="icon-btn" onClick={toggleTheme} title="切换主题" aria-label="切换主题">
              {dark ? sunIcon() : moonIcon()}
            </button>
          </nav>
          <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button className="menu-btn" onClick={() => setOpen(true)} title="菜单" aria-label="打开菜单">
              menu
            </button>
          </div>
        </div>
      </header>

      <div className={"mobile-menu " + (open ? "open" : "")}>
        <button className="mobile-close icon-btn" onClick={() => setOpen(false)} aria-label="关闭菜单">
          closeIcon()
        </button>
        {LINKS.map((l) => (
          <Link key={l.id} to={`/#${l.id}`} onClick={handleNav}>
            <span className="idx">{l.num}</span>
            <span>{l.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

function moonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}
function sunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
    </svg>
  );
}
function closeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}