"use client";

import { useEffect } from "react";

// Browsers with CSS scroll-driven animations need nothing from here.
// Others get the html.no-sdt class (set in layout.tsx), and this observer
// adds .is-in to each element as it scrolls into view.
export default function RevealFallback() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("no-sdt")) return;
    const els = document.querySelectorAll(".sr, .sr-rule, .contact-email");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
