import React, { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { useHistory } from "react-router-dom";
import { useCounter, useMagnetic, useTilt } from "../../utils/animations";

const ROLES = [
  "Senior Software Engineer",
  "React Native Developer",
  "React Developer",
  "Experience with Veeva CRM",
  "Salesforce Data Querying",
];

const PARTICLES = [
  { size: 6,  top: 15, left: 10, delay: 0,   dur: 7,    color: "#61DAFB" },
  { size: 4,  top: 70, left: 85, delay: 1.2, dur: 9,    color: "#E3405F" },
  { size: 8,  top: 85, left: 25, delay: 2.5, dur: 6.5,  color: "#61DAFB" },
  { size: 5,  top: 35, left: 72, delay: 0.8, dur: 10,   color: "#E3405F" },
  { size: 3,  top: 55, left: 45, delay: 3.5, dur: 8,    color: "#61DAFB" },
  { size: 6,  top: 8,  left: 58, delay: 0.5, dur: 7.5,  color: "#E3405F" },
  { size: 7,  top: 45, left: 5,  delay: 1.8, dur: 8.5,  color: "#61DAFB" },
  { size: 4,  top: 90, left: 62, delay: 2.2, dur: 6,    color: "#E3405F" },
  { size: 5,  top: 22, left: 92, delay: 4,   dur: 9.5,  color: "#61DAFB" },
  { size: 9,  top: 65, left: 18, delay: 0.3, dur: 7.8,  color: "#E3405F" },
  { size: 3,  top: 78, left: 78, delay: 3,   dur: 8.2,  color: "#61DAFB" },
  { size: 6,  top: 12, left: 38, delay: 1.5, dur: 6.8,  color: "#E3405F" },
];

/* Per-card config — each gets its own accent + icon */
const STAT_CONFIG = [
  {
    num: "4+", label: "Years Exp.", accent: "#61DAFB",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "60%", label: "Perf. Gain", accent: "#a78bfa",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "2+", label: "Companies", accent: "#E3405F",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* Premium stat card — gradient number, tilt, glow, icon */
function StatCard({ num, label, accent, icon, theme }) {
  const isPercent = num.includes("%");
  const isPlus    = num.includes("+");
  const numVal    = parseInt(num, 10);
  const suffix    = isPercent ? "%" : isPlus ? "+" : "";
  const { ref, display } = useCounter(numVal, suffix);
  const tilt = useTilt(9);

  return (
    <div
      {...tilt}
      className="stat-card"
      style={{ "--sc": accent, transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Animated accent bar at top */}
      <div className="stat-card-bar" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}40, transparent)` }} />

      {/* Bottom ambient glow */}
      <div className="stat-glow" style={{ background: `radial-gradient(ellipse at 50% 110%, ${accent}30, transparent 70%)` }} />

      {/* Icon */}
      <div className="stat-icon" style={{ color: accent }}>{icon}</div>

      {/* Animated number */}
      <span ref={ref} className="stat-number">{display}</span>

      {/* Label */}
      <span className="stat-label" style={{ color: theme.secondaryText }}>{label}</span>
    </div>
  );
}

export default function Greeting({ theme }) {
  const history = useHistory();
  const magContact = useMagnetic(0.3);
  const magResume  = useMagnetic(0.3);
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex,   setRoleIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);
  const [charIndex,   setCharIndex]   = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setCurrentRole(current.substring(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentRole(current.substring(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="greet-main hero-enter" id="greeting">
      <div className="greeting-particles">
        {PARTICLES.map((p, i) => (
          <span key={i} className="particle" style={{
            width: p.size, height: p.size,
            top: `${p.top}%`, left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }} />
        ))}
      </div>

      <div className="greeting-main">
        <div className="greeting-text-div">
          <p className="greeting-tag">// Welcome to my portfolio</p>
          <h1 className="greeting-name" style={{ color: theme.text }}>
            Hi, I&apos;m{" "}
            <span className="name-highlight grad-text">
              Arpit Kohli
            </span>
          </h1>
          <div className="greeting-role">
            <span className="role-text" style={{ color: theme.accentColor }}>{currentRole}</span>
            <span className="cursor"    style={{ color: theme.accentColor }}>|</span>
          </div>
          <p className="greeting-text-p subTitle" style={{ color: theme.secondaryText }}>
            4+ years building enterprise applications. Specialized in{" "}
            <strong style={{ color: theme.text }}>Veeva CRM</strong>,{" "}
            <strong style={{ color: theme.text }}>Salesforce Data Querying</strong> &amp;{" "}
            <strong style={{ color: theme.text }}>pixel-perfect cross-platform UI</strong>.
          </p>
          <SocialMedia />
          <div className="portfolio-repo-btn-div">
            <button
              {...magContact}
              className="button btn-primary shimmer-btn"
              onClick={() => history.push("/contact")}
            >
              Contact Me
            </button>
            <a
              {...magResume}
              className="button btn-outline shimmer-btn"
              href={greeting.resumeLink}
              target="_blank"
              rel="noreferrer"
            >
              View Resume ↗
            </a>
          </div>
        </div>

        <div className="greeting-image-div">
          <div className="code-window">
            <div className="code-window-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="window-title">arpit.config.js</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="c-keyword">const </span><span className="c-var">developer</span><span className="c-op"> = {"{"}</span></div>
              <div className="code-line code-indent"><span className="c-key">name</span><span className="c-op">: </span><span className="c-str">&quot;Arpit Kohli&quot;</span><span className="c-op">,</span></div>
              <div className="code-line code-indent"><span className="c-key">role</span><span className="c-op">: </span><span className="c-str">&quot;Senior Software Engineer&quot;</span><span className="c-op">,</span></div>
              <div className="code-line code-indent"><span className="c-key">company</span><span className="c-op">: </span><span className="c-str">&quot;LTIMindtree&quot;</span><span className="c-op">,</span></div>
              <div className="code-line code-indent"><span className="c-key">experience</span><span className="c-op">: </span><span className="c-str">&quot;4+ years&quot;</span><span className="c-op">,</span></div>
              <div className="code-line code-indent">&nbsp;</div>
              <div className="code-line code-indent"><span className="c-key">skills</span><span className="c-op">: [</span></div>
              <div className="code-line code-indent2"><span className="c-str">&quot;React&quot;</span><span className="c-op">, </span><span className="c-str">&quot;React Native&quot;</span><span className="c-op">,</span></div>
              <div className="code-line code-indent2"><span className="c-str">&quot;TypeScript&quot;</span><span className="c-op">, </span><span className="c-str">&quot;Recoil&quot;</span><span className="c-op">, </span><span className="c-str">&quot;Redux&quot;</span><span className="c-op">,</span></div>
              <div className="code-line code-indent2"><span className="c-str">&quot;Exp. with Veeva CRM&quot;</span><span className="c-op">,</span></div>
              <div className="code-line code-indent2"><span className="c-str">&quot;Salesforce Data Querying&quot;</span><span className="c-op">,</span></div>
              <div className="code-line code-indent"><span className="c-op">],</span></div>
              <div className="code-line code-indent">&nbsp;</div>
              <div className="code-line code-indent"><span className="c-key">passion</span><span className="c-op">: </span><span className="c-str">&quot;Pixel-perfect UI ✨&quot;</span></div>
              <div className="code-line"><span className="c-op">{"}"}</span><span className="c-op">;</span></div>
            </div>
          </div>
          <div className="stats-row">
            {STAT_CONFIG.map((s) => (
              <StatCard key={s.label} {...s} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
