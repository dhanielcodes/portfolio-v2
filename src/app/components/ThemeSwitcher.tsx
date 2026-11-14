"use client";

import { useEffect, useState } from "react";

const THEMES = ["Ink", "Bone", "Clay"] as const;
type Theme = (typeof THEMES)[number];

export default function ThemeSwitcher() {
  // The inline script in layout.tsx sets data-theme before paint; we read it after mount.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(current && THEMES.includes(current) ? current : "Ink");
  }, []);

  const pick = (t: Theme) => {
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("dhaniel-theme", t);
    } catch {
      /* private mode: the choice just isn't remembered */
    }
    setTheme(t);
  };

  return (
    <div className="theme-switch" role="group" aria-label="Colour theme">
      {THEMES.map((t, i) => (
        <span key={t} style={{ display: "contents" }}>
          {i > 0 && (
            <span className="sep" aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            aria-pressed={theme === t}
            aria-label={`${t} theme`}
            onClick={() => pick(t)}
          >
            {t}
          </button>
        </span>
      ))}
    </div>
  );
}
