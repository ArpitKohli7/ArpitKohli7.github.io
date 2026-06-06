import React, { useEffect, useRef } from "react";
import "./Skills.css";

const CardIcons = {
  react: (
    <svg viewBox="0 0 24 24" fill="none" className="card-icon-svg">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" className="card-icon-svg">
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="#a78bfa" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="18.5" r="1" fill="#a78bfa"/>
      <line x1="8" y1="6" x2="16" y2="6" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" className="card-icon-svg">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#34d399" strokeWidth="1.5" fill="none"/>
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#34d399" strokeWidth="1.5" fill="none"/>
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#34d399" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  component: (
    <svg viewBox="0 0 24 24" fill="none" className="card-icon-svg">
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#fb923c" strokeWidth="1.5" fill="none"/>
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#fb923c" strokeWidth="1.5" fill="none"/>
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#fb923c" strokeWidth="1.5" fill="none"/>
      <path d="M17 13v8M13 17h8" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

const SKILL_CARDS = [
  {
    icon: CardIcons.react,
    title: "React Development",
    subtitle: "Enterprise-grade web apps",
    desc: "Building high-performance dashboards with React, Recoil & Redux. Integrated Salesforce queries inside Veeva CRM, cutting data fetch time by 60%.",
    accent: "#61DAFB",
    glow: "rgba(97,218,251,0.12)",
  },
  {
    icon: CardIcons.mobile,
    title: "React Native",
    subtitle: "Cross-platform mobile",
    desc: "Led end-to-end development of iOS & Android apps delivering pixel-perfect UI across all device sizes and OS versions.",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.12)",
  },
  {
    icon: CardIcons.database,
    title: "Veeva CRM & Salesforce",
    subtitle: "Pharma enterprise integrations",
    desc: "Fetching & displaying real-time Salesforce data via local DB queries in Veeva CRM. Built batch query methods replacing per-asset loops.",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.12)",
  },
  {
    icon: CardIcons.component,
    title: "UI Libraries & Storybook",
    subtitle: "Reusable component systems",
    desc: "Built Storybook-based libraries published to GitHub as standalone packages. AsyncStorage for offline persistence & global state consistency.",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.12)",
  },
];

const TECH_STACK = [
  { name: "JavaScript", icon: "simple-icons:javascript", bg: "#F7DF1E", color: "#000"     },
  { name: "TypeScript",  icon: "simple-icons:typescript", bg: "#3178C6", color: "#fff"     },
  { name: "React",       icon: "simple-icons:react",      bg: "#0a1929", color: "#61DAFB"  },
  { name: "Redux",       icon: "simple-icons:redux",      bg: "#0a1929", color: "#764ABC"  },
  { name: "Recoil",      icon: "simple-icons:recoil",     bg: "#0a1929", color: "#3578e5"  },
  { name: "Xcode",       icon: "simple-icons:xcode",      bg: "#0a1929", color: "#147EFB"  },
  { name: "Android",     icon: "simple-icons:androidstudio", bg: "#0a1929", color: "#3DDC84"},
  { name: "VS Code",     icon: "simple-icons:visualstudiocode", bg: "#0a1929", color: "#007ACC"},
  { name: "Git",         icon: "simple-icons:git",        bg: "#0a1929", color: "#F05032"  },
];

/* Single observer for the whole section — one IntersectionObserver total */
function useRevealSection() {
  const ref = useRef(null);
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const targets = section.querySelectorAll(".reveal-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add("sr-visible"), Number(delay));
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function SkillSection() {
  const ref = useRevealSection();

  return (
    <div ref={ref} className="skill-section-wrap">
      {/* Cards grid */}
      <div className="skill-cards-grid">
        {SKILL_CARDS.map((card, i) => (
          <div
            key={card.title}
            className="skill-card sr-scale reveal-item"
            data-delay={i * 110}
            style={{
              border: `1px solid ${card.accent}28`,
              "--hover-shadow": card.accent,
            }}
          >
            <div className="skill-card-icon-wrap" style={{ borderColor: `${card.accent}33` }}>
              {card.icon}
            </div>
            <div className="skill-card-content">
              <span className="skill-card-subtitle" style={{ color: card.accent }}>
                {card.subtitle}
              </span>
              <h3 className="skill-card-title">{card.title}</h3>
              <p className="skill-card-desc">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="tech-stack-section">
        <div className="tech-stack-header reveal-item sr-fade-up" data-delay="0">
          <div className="tech-stack-divider" />
          <span className="tech-stack-label">Tech Stack</span>
          <div className="tech-stack-divider" />
        </div>
        <div className="tech-stack-grid">
          {TECH_STACK.map((t, i) => (
            <div
              key={t.name}
              className="tech-badge sr-scale reveal-item"
              data-delay={i * 55}
              style={{ "--icon-color": t.color }}
            >
              <div
                className="tech-badge-icon"
                style={{ background: t.bg, borderColor: `${t.color}44` }}
              >
                <span
                  className="iconify"
                  data-icon={t.icon}
                  style={{ color: t.color, fontSize: 26 }}
                  data-inline="false"
                />
              </div>
              <span className="tech-badge-name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
