import { useEffect, useRef } from "react";

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
          if (!options.repeat) observer.unobserve(el);
        } else if (options.repeat) {
          el.classList.remove("sr-visible");
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.repeat]);

  return ref;
}
