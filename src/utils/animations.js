import { useCallback, useEffect, useRef, useState } from "react";

/* ── 3-D Perspective Tilt Card ──────────────────────────────
   Wraps any element with mouse-tracking perspective rotation.
   maxDeg controls max tilt angle (degrees). */
export function useTilt(maxDeg = 6) {
  const ref = useRef(null);

  const onMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
      el.style.transition = "transform 0.08s ease";
      el.style.transform = `perspective(900px) rotateX(${-cy * maxDeg}deg) rotateY(${cx * maxDeg}deg) translateZ(10px)`;
    },
    [maxDeg]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.65s cubic-bezier(0.16,1,0.3,1)";
    el.style.transform = "";
  }, []);

  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

/* ── Animated Counter ───────────────────────────────────────
   Counts up from 0 to `target` (number) when element enters
   the viewport. `suffix` appended after number (e.g. "+"). */
export function useCounter(target, suffix = "") {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || ran.current) return;
        ran.current = true;
        const num = parseFloat(target);
        const dur = 1400;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          const val = Math.round(eased * num);
          setDisplay(`${val}${suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.7 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);

  return { ref, display };
}

/* ── Magnetic Button ────────────────────────────────────────
   Element gently follows the cursor within its bounding box. */
export function useMagnetic(strength = 0.32) {
  const ref = useRef(null);

  const onMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * strength;
      const dy = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transition = "transform 0.1s ease";
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1)";
    el.style.transform = "";
  }, []);

  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

/* ── Scroll Reveal ──────────────────────────────────────────
   Adds `sr-visible` class after `delay` ms once in viewport. */
export function useReveal(delay = 0) {
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
