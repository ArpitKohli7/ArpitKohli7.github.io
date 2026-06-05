import React, { useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Experience.css";
import { experience } from "../../portfolio.js";

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("sr-visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function TimelineCard({ exp, index }) {
  const ref = useReveal(index * 180);

  return (
    <div ref={ref} className="tl-card sr-fade-up">
      {/* Spine dot */}
      <div
        className="tl-dot"
        style={{ background: exp.color, boxShadow: `0 0 18px 4px ${exp.color}80` }}
      />

      {/* Card */}
      <div className="tl-body" style={{ "--accent": exp.color }}>

        {/* Top strip */}
        <div className="tl-top-strip" style={{ background: `linear-gradient(135deg, ${exp.color}22, transparent 60%)` }} />

        {/* Header */}
        <div className="tl-header">
          <div className="tl-header-left">
            <div className="tl-number" style={{ color: exp.color }}>0{index + 1}</div>
            <div>
              <span className="tl-duration" style={{ color: exp.color }}>{exp.duration}</span>
              <h2 className="tl-role">{exp.title}</h2>
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
                <span className="tl-sep">·</span>
                <span className="tl-location">{exp.location}</span>
              </div>
            </div>
          </div>
          <div
            className="tl-badge"
            style={{
              background: `${exp.color}18`,
              borderColor: `${exp.color}50`,
              color: exp.color,
            }}
          >
            {index === 0 ? "● Current" : "Previous"}
          </div>
        </div>

        {/* Divider */}
        <div
          className="tl-divider"
          style={{ background: `linear-gradient(to right, ${exp.color}70, ${exp.color}20, transparent)` }}
        />

        {/* Two-column layout: bullets left, summary right */}
        <div className="tl-content">
          <ul className="tl-bullets">
            {exp.bullets.map((b, i) => (
              <li key={i} className="tl-bullet">
                <span className="tl-bullet-dot" style={{ background: exp.color }} />
                {b}
              </li>
            ))}
          </ul>

          {/* Right column: description + tags */}
          <div className="tl-aside">
            <p className="tl-desc">{exp.description}</p>
            <div className="tl-tags">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="tl-tag"
                  style={{ borderColor: `${exp.color}40`, color: exp.color }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience(props) {
  const theme   = props.theme;
  const titleRef = useReveal(0);
  const subRef   = useReveal(130);
  const allExps  = experience.sections.flatMap((s) => s.experiences);

  return (
    <div className="exp-page">
      <Header theme={theme} setTheme={props.setTheme} />

      {/* Hero */}
      <div className="exp-hero">
        <div ref={titleRef} className="sr-fade-up">
          <p className="exp-eyebrow" style={{ color: theme.accentColor }}>
            // My Journey
          </p>
          <h1 className="exp-title" style={{ color: theme.text }}>
            Experience
          </h1>
        </div>
        <p
          ref={subRef}
          className="exp-subtitle sr-fade-up"
          style={{ color: theme.secondaryText }}
        >
          {experience.description}
        </p>
      </div>

      {/* Timeline */}
      <div className="tl-wrap">
        <div className="tl-spine" />
        {allExps.map((exp, i) => (
          <TimelineCard key={exp.title} exp={exp} index={i} />
        ))}
      </div>

      <Footer theme={theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
