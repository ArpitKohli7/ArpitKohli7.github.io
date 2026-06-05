import React, { useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { greeting, socialMediaLinks } from "../../portfolio.js";
import "./ContactComponent.css";

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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="#61DAFB" strokeWidth="1.5"/>
        <path d="M2 8l10 6 10-6" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email",
    value: "kohliarpit81@gmail.com",
    sub: "Preferred contact method",
    href: "mailto:kohliarpit81@gmail.com",
    accent: "#61DAFB",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="#0A66C2" strokeWidth="1.5"/>
        <rect x="2" y="9" width="4" height="12" stroke="#0A66C2" strokeWidth="1.5"/>
        <circle cx="4" cy="4" r="2" stroke="#0A66C2" strokeWidth="1.5"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/arpitkohli7",
    sub: "Let's connect professionally",
    href: socialMediaLinks.linkedin,
    accent: "#0A66C2",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E1306C" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="1.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#E1306C"/>
      </svg>
    ),
    label: "Instagram",
    value: "@arpit.kohli.7",
    sub: "Follow my journey",
    href: socialMediaLinks.instagram,
    accent: "#E1306C",
  },
];

function Contact({ theme }) {
  const leftRef  = useReveal(0);
  const rightRef = useReveal(150);

  return (
    <div className="ct-page">
      <Header theme={theme} />

      <div className="ct-outer">
        {/* ── Left panel ── */}
        <div ref={leftRef} className="ct-left sr-fade-left">
          <p className="ct-eyebrow" style={{ color: theme.accentColor }}>
            // Let's connect
          </p>
          <h1 className="ct-title" style={{ color: theme.text }}>
            Get In<br />
            <span style={{ color: theme.accentColor }}>Touch.</span>
          </h1>
          <p className="ct-desc" style={{ color: theme.secondaryText }}>
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat. Feel free to reach out — I'll
            get back to you as fast as I can!
          </p>

          <div className="ct-avail">
            <span className="ct-avail-dot" />
            <span style={{ color: theme.secondaryText }}>Open to new opportunities</span>
          </div>

          <a
            className="ct-resume-btn"
            href={greeting.resumeLink}
            target="_blank"
            rel="noreferrer"
          >
            View My Resume ↗
          </a>
        </div>

        {/* ── Right panel: cards ── */}
        <div ref={rightRef} className="ct-right sr-fade-right">
          {CARDS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="ct-card"
              style={{ border: `1px solid ${c.accent}22`, "--c-accent": c.accent }}
            >
              {/* Corner glow */}
              <div className="ct-card-glow" style={{ background: `radial-gradient(circle at top right, ${c.accent}20, transparent 65%)` }} />

              <div className="ct-card-icon" style={{ borderColor: `${c.accent}35` }}>
                {c.icon}
              </div>

              <div className="ct-card-body">
                <span className="ct-card-label" style={{ color: c.accent }}>{c.label}</span>
                <span className="ct-card-value">{c.value}</span>
                <span className="ct-card-sub">{c.sub}</span>
              </div>

              <svg className="ct-arrow" viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>

      <Footer theme={theme} />
    </div>
  );
}

export default Contact;
