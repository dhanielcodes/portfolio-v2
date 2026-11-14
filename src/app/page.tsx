import Image from "next/image";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CountUp from "./components/CountUp";
import RevealFallback from "./components/RevealFallback";
import {
  CV_URL,
  EMAIL,
  alsoShipped,
  certificates,
  featured,
  jobs,
  socials,
  stack,
  statement,
  statementItalic,
  getStats,
  tickerNames,
  yearsOfExperience,
} from "./data/content";

// Rebuild the page at most once a day, so the years figure stays current without a new push.
export const revalidate = 86400;

const headline = [
  { t: "I", d: 0.45 },
  { t: "take", d: 0.52 },
  { t: "products", d: 0.59 },
  { t: "from", d: 0.66 },
  { t: "idea", d: 0.78, accent: true },
  { t: "to", d: 0.85 },
  { t: "launch.", d: 0.92 },
];

const pad = (i: number) => String(i + 1).padStart(2, "0");

// Load-in delays wait for the intro curtain (--intro is 0s when it does not play).
const intro = (s: number) => `calc(var(--intro, 0s) + ${s}s)`;

export default function Home() {
  const years = yearsOfExperience();
  const stats = getStats();
  return (
    <main className="wrap">
      <RevealFallback />

      {/* HEADER */}
      <header className="site-header hd">
        <a href="#top" className="wordmark">
          <span className="light">Daniel</span> <span className="bold">Adekoya</span>
        </a>
        <nav className="site-nav" aria-label="Main">
          <ThemeSwitcher />
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
          <a href={CV_URL} target="_blank" rel="noopener" className="ul">
            Résumé
          </a>
        </nav>
      </header>
      <div className="hair draw" style={{ animationDelay: intro(0.2) }} />

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-main">
          <div className="hero-meta mono fu" style={{ animationDelay: intro(0.3) }}>
            <span>Senior Frontend &amp; Forward Deployed Engineer</span>
            <span>Lagos, Nigeria · UTC+1</span>
          </div>
          <h1>
            {headline.map((w, i) => (
              <span key={w.t}>
                <span className="w">
                  <span
                    className={w.accent ? "accent" : undefined}
                    style={{ animationDelay: intro(w.d) }}
                  >
                    {w.t}
                  </span>
                </span>
                {i < headline.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <div className="hero-foot">
            <p className="hero-intro fu" style={{ animationDelay: intro(1.15) }}>
              I&apos;m Daniel. For {years}+ years I&apos;ve built web and mobile products in React,
              Vue, TypeScript and React Native, for banks, payment companies, law firms and
              AI teams.
            </p>
            <a href={`mailto:${EMAIL}`} className="hero-email fu" style={{ animationDelay: intro(1.3) }}>
              {EMAIL}
            </a>
          </div>
        </div>
        <figure className="portrait">
          <div className="portrait-frame reveal-photo">
            <Image
              src="/images/PORTRAIT2.jpg"
              alt="Daniel Adekoya sitting on a sofa, smiling"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 400px"
            />
          </div>
          <figcaption className="mono fu" style={{ animationDelay: intro(1.5), fontSize: 12 }}>
            Daniel Adekoya, Lagos
          </figcaption>
        </figure>
      </section>

      {/* NUMBERS */}
      <div className="hair draw" style={{ animationDelay: intro(1.1) }} />
      <section className="stats" aria-label="At a glance">
        {stats.map((s, i) => (
          <div key={s.label} className="stat fu" style={{ animationDelay: intro(1.4 + i * 0.1) }}>
            <CountUp to={s.value} suffix={s.suffix} />
            <span className="l">{s.label}</span>
          </div>
        ))}
        <div className="stat fu" style={{ animationDelay: intro(1.7) }}>
          <span className="n">LASU</span>
          <span className="l">takes student payments through Payloft, which I helped build</span>
        </div>
      </section>
      <div className="hair draw" style={{ animationDelay: intro(1.3) }} />

      {/* TICKER */}
      <section className="ticker" aria-label="Companies and products I've worked with">
        <div className="ticker-track">
          {[...tickerNames, ...tickerNames].map((name, i) => (
            <span
              className="ticker-item"
              key={`${name}-${i}`}
              aria-hidden={i >= tickerNames.length ? true : undefined}
            >
              <span className="name">{name}</span>
              <span className="slash" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section">
        <div className="section-head sr">
          <h2>Selected work</h2>
          <span className="mono">06 projects I led or built end to end</span>
        </div>
        <div className="hair hair-strong sr-rule" />
        {featured.map((w, i) => (
          <article key={w.title} className="work-row sr">
            <span className="num mono">{pad(i)}</span>
            <div className="title">
              <h3>{w.title}</h3>
              <span className="role">{w.role}</span>
            </div>
            <p className="desc">{w.desc}</p>
            <div className="meta">
              <span className="mono">{w.stack}</span>
              <a href={w.link} target="_blank" rel="noopener" className="ul">
                {w.site}
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* ALSO SHIPPED */}
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="section-head small sr" style={{ paddingBottom: 16 }}>
          <h2>Also shipped</h2>
          <span className="mono">Product, stack, live link</span>
        </div>
        <div className="hair hair-strong sr-rule" />
        <div className="shipped-grid">
          {alsoShipped.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noopener" className="shipped-row sr">
              <span className="t">
                <strong>{p.title}</strong>
                <span>{p.desc}</span>
              </span>
              <span className="mono">{p.stack}</span>
            </a>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section-head sr">
          <h2>Experience</h2>
        </div>
        <div className="hair hair-strong sr-rule" />
        {jobs.map((j) => (
          <div key={j.company} className="job-row sr">
            <span className="when mono">
              <span>{j.dates}</span>
              <span>{j.place}</span>
            </span>
            <div className="who">
              <strong>{j.company}</strong>
              <span>{j.role}</span>
            </div>
            <p>{j.desc}</p>
          </div>
        ))}
      </section>

      {/* STACK + CERTIFICATES */}
      <section className="two-col">
        <div id="stack" style={{ flex: "1.4 1 480px" }}>
          <div className="section-head sr">
            <h2>Stack</h2>
          </div>
          <div className="hair hair-strong sr-rule" />
          {stack.map((s) => (
            <div key={s.group} className="stack-row sr">
              <span className="mono">{s.group}</span>
              <span>{s.items}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: "1 1 360px" }}>
          <div className="section-head sr">
            <h2>Certificates</h2>
          </div>
          <div className="hair hair-strong sr-rule" />
          {certificates.map((c) => (
            <a key={c.title} href={c.href} target="_blank" rel="noopener" className="cert-row sr">
              <span>{c.title}</span>
              <span className="mono">{c.meta} · View certificate</span>
            </a>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <span className="mono sr" style={{ display: "block", marginBottom: 28 }}>
          Where I&apos;m headed
        </span>
        <p>
          {statement.split(" ").map((word, i) => (
            <span key={i}>
              <span
                className="word"
                style={statementItalic.includes(word) ? { fontStyle: "italic" } : undefined}
              >
                {word}
              </span>{" "}
            </span>
          ))}
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <span className="mono sr" style={{ display: "block", marginBottom: 20 }}>
          Hiring, or need a product built?
        </span>
        <a href={`mailto:${EMAIL}`} className="contact-email">
          {EMAIL}
        </a>
        <div className="hair sr-rule" style={{ marginTop: 96 }} />
        <footer className="site-footer">
          <nav aria-label="Elsewhere">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener">
                {s.label}
              </a>
            ))}
          </nav>
          <span className="mono" style={{ fontSize: 12 }}>
            © {new Date().getFullYear()} Daniel Adekoya
          </span>
        </footer>
      </section>
    </main>
  );
}
