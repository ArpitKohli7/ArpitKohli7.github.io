import React, { useEffect, useRef } from "react";

function rand(a, b) { return a + Math.random() * (b - a); }
function randInt(a, b) { return Math.floor(rand(a, b)); }

const STAR_COUNT  = 240;
const METEOR_POOL = 9;
const SPAWN_EVERY = 800;

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    /* ─── Stars ─────────────────────────────────────────── */
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x:     rand(0, W),
      y:     rand(0, H),
      r:     rand(0.2, 1.9),
      base:  rand(0.3, 1.0),
      spd:   rand(0.004, 0.024),
      phase: rand(0, Math.PI * 2),
      blue:  Math.random() < 0.14,
      warm:  Math.random() < 0.09,
    }));

    /* ─── Meteor pool ────────────────────────────────────── */
    function makeMeteor() {
      return { active: false, x: 0, y: 0, vx: 0, vy: 0, len: 0, life: 0, decay: 0 };
    }
    const meteors = Array.from({ length: METEOR_POOL }, makeMeteor);

    function spawnMeteor() {
      // Find an inactive slot
      const slot = meteors.find(m => !m.active);
      if (!slot) return;

      // Start from top edge or upper-left region
      const fromTop = Math.random() < 0.65;
      slot.x = fromTop ? rand(W * 0.05, W * 0.9) : rand(-20, W * 0.25);
      slot.y = fromTop ? rand(-30, H  * 0.02)     : rand(0,   H * 0.35);

      const angle = rand(Math.PI * 0.18, Math.PI * 0.42); // 32°–76°
      const speed = rand(9, 18);
      slot.vx    = Math.cos(angle) * speed;
      slot.vy    = Math.sin(angle) * speed;
      slot.len   = rand(70, 200);
      slot.life  = 1;
      slot.decay = rand(0.008, 0.022);
      slot.active = true;
    }

    /* ─── Static offscreen: base + nebulae + star dots ──── */
    const off  = document.createElement("canvas");
    off.width  = W;
    off.height = H;
    const octx = off.getContext("2d");

    function buildStatic(c, cw, ch) {
      // Rich dark space gradient
      const bg = c.createLinearGradient(0, 0, cw * 0.5, ch);
      bg.addColorStop(0,    "#03040e");
      bg.addColorStop(0.5,  "#060a1a");
      bg.addColorStop(1,    "#040710");
      c.fillStyle = bg;
      c.fillRect(0, 0, cw, ch);

      // Milky-way band
      const mw = c.createLinearGradient(0, ch * 0.1, cw, ch * 0.9);
      mw.addColorStop(0,    "transparent");
      mw.addColorStop(0.3,  "rgba(80,50,160,0.13)");
      mw.addColorStop(0.5,  "rgba(50,90,180,0.10)");
      mw.addColorStop(0.72, "rgba(80,50,160,0.13)");
      mw.addColorStop(1,    "transparent");
      c.fillStyle = mw;
      c.fillRect(0, 0, cw, ch);

      // Nebula blobs
      [
        { cx: cw*0.06, cy: ch*0.12, r: cw*0.40, col: "rgba(105,30,215,0.13)" },
        { cx: cw*0.92, cy: ch*0.55, r: cw*0.46, col: "rgba(0,100,225,0.10)"  },
        { cx: cw*0.50, cy: ch*0.90, r: cw*0.35, col: "rgba(215,35,95,0.09)"  },
        { cx: cw*0.72, cy: ch*0.05, r: cw*0.28, col: "rgba(20,170,170,0.08)" },
        { cx: cw*0.25, cy: ch*0.70, r: cw*0.30, col: "rgba(125,50,225,0.08)" },
        { cx: cw*0.55, cy: ch*0.40, r: cw*0.22, col: "rgba(60,90,200,0.07)"  },
      ].forEach(b => {
        const g = c.createRadialGradient(b.cx, b.cy, 0, b.cx, b.cy, b.r);
        g.addColorStop(0, b.col);
        g.addColorStop(1, "transparent");
        c.fillStyle = g;
        c.fillRect(0, 0, cw, ch);
      });

      // Star base dots
      stars.forEach(s => {
        c.beginPath();
        c.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        c.fillStyle = s.blue ? `rgba(170,210,255,${s.base * 0.55})`
                    : s.warm ? `rgba(255,205,140,${s.base * 0.55})`
                    :          `rgba(255,255,255,${s.base * 0.55})`;
        c.fill();
      });
    }

    buildStatic(octx, W, H);

    /* ─── Render loop @ 30fps ────────────────────────────── */
    let frame = 0, lastTime = 0, spawnTimer = 0;
    const STEP = 1000 / 20;
    let raf;

    function render(ts) {
      raf = requestAnimationFrame(render);
      const dt = ts - lastTime;
      if (dt < STEP) return;
      lastTime = ts - (dt % STEP);
      frame   += 0.033;

      // Blit static scene
      ctx.drawImage(off, 0, 0);

      // Twinkling overlay
      stars.forEach(s => {
        const t = 0.5 + 0.5 * Math.sin(frame * s.spd * 40 + s.phase);
        if (t < 0.65) return;
        const a = (t - 0.55) * s.base * 1.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.blue ? `rgba(170,210,255,${a})`
                      : s.warm ? `rgba(255,205,140,${a})`
                      :          `rgba(255,255,255,${a})`;
        ctx.fill();
      });

      // Spawn meteors
      spawnTimer += STEP;
      if (spawnTimer >= SPAWN_EVERY) {
        spawnTimer = 0;
        // Spawn 1-2 at a time for shower effect
        spawnMeteor();
        if (Math.random() < 0.20) spawnMeteor();
      }

      // Draw meteors
      meteors.forEach(m => {
        if (!m.active) return;
        m.x    += m.vx;
        m.y    += m.vy;
        m.life -= m.decay;

        if (m.life <= 0 || m.x > W + 150 || m.y > H + 150) {
          m.active = false;
          return;
        }

        const spd  = Math.hypot(m.vx, m.vy);
        const tailLen = m.len * Math.pow(m.life, 0.6);
        const tx   = m.x - (m.vx / spd) * tailLen;
        const ty   = m.y - (m.vy / spd) * tailLen;

        // Tail gradient
        const g = ctx.createLinearGradient(tx, ty, m.x, m.y);
        g.addColorStop(0,    "transparent");
        g.addColorStop(0.45, `rgba(200,225,255,${m.life * 0.3})`);
        g.addColorStop(0.8,  `rgba(230,240,255,${m.life * 0.65})`);
        g.addColorStop(1,    `rgba(255,255,255,${m.life})`);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = g;
        ctx.lineWidth   = 1.5 * m.life + 0.5;
        ctx.lineCap     = "round";
        ctx.stroke();

        // Head glow
        const hg = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 5 * m.life + 2);
        hg.addColorStop(0, `rgba(255,255,255,${m.life})`);
        hg.addColorStop(0.4, `rgba(190,215,255,${m.life * 0.6})`);
        hg.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(m.x, m.y, 5 * m.life + 2, 0, Math.PI * 2);
        ctx.fillStyle = hg;
        ctx.fill();
        ctx.restore();
      });
    }

    requestAnimationFrame(render);

    // Stagger initial burst so screen isn't empty at start
    for (let i = 0; i < 2; i++) {
      setTimeout(spawnMeteor, i * 600);
    }

    function onResize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      off.width = W; off.height = H;
      stars.forEach(s => {
        if (s.x > W) s.x = rand(0, W);
        if (s.y > H) s.y = rand(0, H);
      });
      buildStatic(octx, W, H);
    }

    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0, pointerEvents: "none", display: "block",
        willChange: "transform", transform: "translateZ(0)",
      }}
    />
  );
}
