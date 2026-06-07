import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { useReveal, useTilt, useCounter } from "../../utils/animations";

/* ── Floating background orbs ─────────────────────────────── */
const ORBS = [
  { color: "#61DAFB", w: 420, h: 320, top: -60,  left: -120, dur: 14, delay: 0   },
  { color: "#E3405F", w: 340, h: 280, top: 280,  left: 800,  dur: 18, delay: 3   },
  { color: "#a78bfa", w: 360, h: 300, top: 500,  left: 360,  dur: 12, delay: 6   },
];

/* ── Stats ───────────────────────────────────────────────── */
const STATS = [
  { target: 4,  suffix: "+", label: "Years" },
  { target: 2,  suffix: "",  label: "Companies" },
  { target: 60, suffix: "%", label: "Perf Gains" },
];

function StatPill({ target, suffix, label, theme }) {
  const { ref, display } = useCounter(target, suffix);
  return (
    <div className="exp-stat">
      <span ref={ref} className="exp-stat-num" style={{ color: theme.accentColor }}>
        {display}
      </span>
      <span className="exp-stat-lbl" style={{ color: theme.secondaryText }}>
        {label}
      </span>
    </div>
  );
}

/* ── Timeline card with 3-D tilt ──────────────────────────── */
function ExperienceCard({ exp, index, isLast, theme }) {
  const wrapRef = useReveal(index * 200);
  const tilt    = useTilt(5);

  return (
    <div ref={wrapRef} className="tl-item sr-fade-up">
      {/* ── Spine ── */}
      <div className="tl-spine">
        <div
          className="tl-node"
          style={{
            "--nc": exp.color,
            borderColor: exp.color,
            boxShadow: `0 0 22px ${exp.color}55, inset 0 0 10px ${exp.color}0a`,
          }}
        >
          <span className="tl-node-letter" style={{ color: exp.color }}>
            {exp.company[0]}
          </span>
        </div>
        {!isLast && (
          <div
            className="tl-line"
            style={{ background: `linear-gradient(to bottom, ${exp.color}55, rgba(97,218,251,0.04))` }}
          />
        )}
      </div>

      {/* ── Card ── */}
      <div
        {...tilt}
        className="tl-card"
        style={{ "--acc": exp.color, transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Top accent bar */}
        <div
          className="tl-card-bar"
          style={{ background: `linear-gradient(90deg, ${exp.color}, ${exp.color}55, transparent)` }}
        />

        {/* Inner content */}
        <div className="tl-card-body">
          {/* Top row */}
          <div className="tl-toprow">
            <span className="tl-duration" style={{ color: exp.color }}>
              {exp.duration}
            </span>
            <div
              className="tl-chip"
              style={{
                background: `${exp.color}14`,
                border: `1px solid ${exp.color}40`,
                color: exp.color,
              }}
            >
              {index === 0 ? "● Current" : "○ Previous"}
            </div>
          </div>

          {/* Role */}
          <h2 className="tl-role">{exp.title}</h2>

          {/* Company + location */}
          <div className="tl-meta">
            <a
              href={exp.company_url}
              target="_blank"
              rel="noreferrer"
              className="tl-company"
              style={{ color: exp.color }}
            >
              {exp.company}
            </a>
            <span className="tl-dot">·</span>
            <span className="tl-loc">{exp.location}</span>
          </div>

          {/* Rule */}
          <div
            className="tl-rule"
            style={{ background: `linear-gradient(to right, ${exp.color}55, transparent)` }}
          />

          {/* Two-column content */}
          <div className="tl-grid">
            <ul className="tl-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i} className="tl-bullet">
                  <span className="tl-arr" style={{ color: exp.color }}>→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <aside className="tl-aside">
              <p className="tl-note">{exp.description}</p>
              <div className="tl-tags">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="tl-tag"
                    style={{
                      color: exp.color,
                      background: `${exp.color}0e`,
                      border: `1px solid ${exp.color}38`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Experience({ theme }) {
  const eyebrowRef = useReveal(0);
  const titleRef   = useReveal(100);
  const subRef     = useReveal(200);
  const statsRef   = useReveal(320);
  const allExps    = experience.sections.flatMap((s) => s.experiences);

  return (
    <div className="exp-page">
      <Header theme={theme} />

      {/* ── Hero ── */}
      <section className="exp-hero">
        {/* Floating ambient orbs */}
        <div className="exp-orbs" aria-hidden="true">
          {ORBS.map((o, i) => (
            <div
              key={i}
              className="exp-orb"
              style={{
                width: o.w,
                height: o.h,
                top: o.top,
                left: o.left,
                background: `radial-gradient(ellipse, ${o.color}22 0%, transparent 70%)`,
                animationDuration: `${o.dur}s`,
                animationDelay: `${o.delay}s`,
              }}
            />
          ))}
        </div>

        <div ref={eyebrowRef} className="sr-fade-up">
          <p className="exp-eyebrow" style={{ color: theme.accentColor }}>
            // My Career
          </p>
        </div>

        <div ref={titleRef} className="sr-fade-up">
          <h1 className="exp-h1">
            Work{" "}
            <span className="grad-text">Experience.</span>
          </h1>
        </div>

        <p
          ref={subRef}
          className="exp-sub sr-fade-up"
          style={{ color: theme.secondaryText }}
        >
          {experience.description}
        </p>

        {/* Animated stat counters */}
        <div ref={statsRef} className="exp-stats sr-fade-up">
          {STATS.map((s) => (
            <StatPill key={s.label} {...s} theme={theme} />
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <div className="tl-wrap">
        {allExps.map((exp, i) => (
          <ExperienceCard
            key={exp.title}
            exp={exp}
            index={i}
            isLast={i === allExps.length - 1}
            theme={theme}
          />
        ))}
      </div>

      <Footer theme={theme} />
    </div>
  );
}
