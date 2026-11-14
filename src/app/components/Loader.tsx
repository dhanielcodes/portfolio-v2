// Intro curtain. Pure CSS: it plays and lifts even if JavaScript is slow or off.
// layout.tsx hides it (html.no-loader) on repeat views in a session and for reduced motion.
export default function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-top mono">
        <span>Senior Frontend Engineer</span>
        <span className="loader-count" />
      </div>
      <div className="loader-name">
        <span className="w">
          <span className="light" style={{ animationDelay: "0.1s" }}>
            Daniel
          </span>
        </span>{" "}
        <span className="w">
          <span className="bold" style={{ animationDelay: "0.2s" }}>
            Adekoya
          </span>
        </span>
      </div>
      <div className="loader-track">
        <div className="loader-fill" />
      </div>
    </div>
  );
}
