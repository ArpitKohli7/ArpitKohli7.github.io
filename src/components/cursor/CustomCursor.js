import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const INTERACTIVE = "a, button, .skill-card, .tech-badge, .ct-card, .tl-body, input, label, [role='button']";

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Single mousemove handler — no RAF loop, no lerp math
    function onMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      // -50% centres both elements regardless of their size — no top/left conflict
      dot.style.transform  = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
      ring.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    }

    // Hover: event delegation on document — one listener total
    function onOver(e) {
      if (e.target.closest(INTERACTIVE)) {
        ring.classList.add("cursor-hover");
        dot.classList.add("cursor-hover");
      }
    }
    function onOut(e) {
      if (e.target.closest(INTERACTIVE)) {
        ring.classList.remove("cursor-hover");
        dot.classList.remove("cursor-hover");
      }
    }
    function onDown() {
      ring.classList.add("cursor-click");
      dot.classList.add("cursor-click");
    }
    function onUp() {
      ring.classList.remove("cursor-click");
      dot.classList.remove("cursor-click");
    }

    // passive: true on move/over/out so browser never waits for JS
    window.addEventListener("mousemove",  onMove, { passive: true });
    window.addEventListener("mouseover",  onOver, { passive: true });
    window.addEventListener("mouseout",   onOut,  { passive: true });
    window.addEventListener("mousedown",  onDown, { passive: true });
    window.addEventListener("mouseup",    onUp,   { passive: true });

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseover",  onOver);
      window.removeEventListener("mouseout",   onOut);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="c-dot"  />
      <div ref={ringRef} className="c-ring">
        <span className="c-line c-line-h" />
        <span className="c-line c-line-v" />
      </div>
    </>
  );
}
