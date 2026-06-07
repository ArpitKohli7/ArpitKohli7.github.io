import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { greeting, socialMediaLinks } from "../../portfolio.js";
import "./ContactComponent.css";
import { useReveal, useTilt, useMagnetic } from "../../utils/animations";

/* ── Word clip reveal ─────────────────────────────────────── */
function WordClip({ children, delay = 0, className = "" }) {
  return (
    <span className="wclip" aria-hidden="true">
      <span
        className={`wclip-inner ${className}`}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </span>
    </span>
  );
}

/* ── Contact card data ────────────────────────────────────── */
const CONTACTS = [
  {
    platform: "Email",
    value: "kohliarpit81@gmail.com",
    sub: "Preferred — fastest response",
    href: "mailto:kohliarpit81@gmail.com",
    accent: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="34" height="34">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    platform: "LinkedIn",
    value: "linkedin.com/in/arpitkohli7",
    sub: "Connect professionally",
    href: socialMediaLinks.linkedin,
    accent: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="34" height="34">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.6" />
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    value: "@arpit.kohli.7",
    sub: "Follow my journey",
    href: socialMediaLinks.instagram,
    accent: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="34" height="34">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
];

/* ── Individual contact card ─────────────────────────────── */
function ContactCard({ c, delay }) {
  const tilt = useTilt(6);
  const ref  = useReveal(delay);

  return (
    <div ref={ref} className="sr-fade-up">
      <a
        {...tilt}
        href={c.href}
        target="_blank"
        rel="noreferrer"
        className="ct-card"
        style={{ "--ca": c.accent, transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Ambient top glow */}
        <div
          className="ct-card-glow"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${c.accent}28, transparent 70%)` }}
        />

        {/* Platform color fill — slides up from bottom on hover */}
        <div className="ct-card-fill" style={{ background: c.accent }} />

        {/* Icon */}
        <div className="ct-icon-wrap" style={{ color: c.accent, borderColor: `${c.accent}30` }}>
          {c.icon}
        </div>

        {/* Label */}
        <p className="ct-plat" style={{ color: c.accent }}>{c.platform}</p>

        {/* Value */}
        <p className="ct-val">{c.value}</p>

        {/* Sub */}
        <p className="ct-sub">{c.sub}</p>

        {/* Arrow */}
        <div className="ct-arrow" style={{ color: c.accent }}>
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Contact({ theme }) {
  const heroRef   = useReveal(0);
  const subRef    = useReveal(180);
  const resumeRef = useReveal(120);
  const mag       = useMagnetic(0.28);

  return (
    <div className="ct-page">
      <Header theme={theme} />

      {/* ── Hero ── */}
      <section className="ct-hero">
        <div ref={heroRef} className="ct-hero-left sr-fade-left">
          <p className="ct-eyebrow" style={{ color: theme.accentColor }}>
            // Let's Talk
          </p>

          {/* Heading with clip-reveal words */}
          <h1 className="ct-h1">
            <span className="ct-h1-line">
              <WordClip delay={0.05}>Get</WordClip>
              {" "}
              <WordClip delay={0.15}>In</WordClip>
            </span>
            <span className="ct-h1-line">
              <WordClip delay={0.25} className="grad-text">Touch.</WordClip>
            </span>
          </h1>
        </div>

        <div ref={subRef} className="ct-hero-right sr-fade-right">
          <div className="ct-avail">
            <span className="ct-avail-dot" />
            <span style={{ color: theme.secondaryText }}>
              Open to new opportunities
            </span>
          </div>
          <p className="ct-desc" style={{ color: theme.secondaryText }}>
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat. Feel free to reach out —&nbsp;I'll
            get back to you as fast as I can!
          </p>
        </div>
      </section>

      {/* ── Contact cards ── */}
      <section className="ct-cards-wrap">
        <div className="ct-cards">
          {CONTACTS.map((c, i) => (
            <ContactCard key={c.platform} c={c} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* ── Resume band ── */}
      <section ref={resumeRef} className="ct-resume-section sr-fade-up">
        <div className="ct-resume-inner">
          {/* Gradient border glow — inner pseudo */}
          <div className="ct-resume-border-glow" aria-hidden="true" />

          <div className="ct-resume-text">
            <p className="ct-resume-eyebrow" style={{ color: theme.accentColor }}>
              // My Resume
            </p>
            <h2 className="ct-resume-title" style={{ color: theme.text }}>
              Senior Software Engineer
            </h2>
            <p className="ct-resume-sub" style={{ color: theme.secondaryText }}>
              React · React Native · Veeva CRM · TypeScript · 4+ Years
            </p>
          </div>

          <div className="ct-resume-actions">
            {/* Magnetic + shimmer download button */}
            <a
              {...mag}
              href={greeting.resumeDownloadLink}
              download="Arpit_Kohli_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="ct-btn-primary shimmer-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" width="17" height="17">
                <path d="M12 4v12M8 12l4 4 4-4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 20h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
              </svg>
              Download PDF
            </a>
            <a
              href={greeting.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="ct-btn-ghost"
            >
              View Online ↗
            </a>
          </div>
        </div>
      </section>

      <Footer theme={theme} />
    </div>
  );
}
