"use client";

import { useEffect, useState } from "react";

type Props = { to: number; suffix?: string; delay?: number; duration?: number };

// Server-renders the final number (good for no-JS and SEO), then counts up from 0 on load.
export default function CountUp({ to, suffix = "", delay = 1500, duration = 1600 }: Props) {
  const [n, setN] = useState(to);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let start: number | null = null;
    setN(0);
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, Math.max(0, (t - start - delay) / duration));
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, delay, duration]);

  return (
    <span className="n">
      {n}
      {suffix}
    </span>
  );
}
