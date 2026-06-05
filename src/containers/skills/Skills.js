import React, { useEffect, useRef } from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const theme = props.theme;
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const d = e.target.dataset.delay || 0;
            setTimeout(() => e.target.classList.add("sr-visible"), Number(d));
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="main" id="skills">
      <div className="skills-header-div" ref={headerRef}>
        <p
          className="skills-eyebrow sr-fade-up reveal-item"
          data-delay="0"
          style={{ color: theme.accentColor }}
        >
          // What I build
        </p>
        <h1
          className="skills-header sr-fade-up reveal-item"
          data-delay="100"
          style={{ color: theme.text }}
        >
          Skills &amp; Expertise
        </h1>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
