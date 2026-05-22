export function Hero() {
  return (
    <section className="hero" id="main-content">
      <div className="hero-video" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>
      <div className="hero-inner fade-up">
        <span className="hero-eyebrow">BracciaCap AI &middot; for Registered Investment Advisors</span>
        <h1>Your practice, fully autonomous.</h1>
        <p>
          AI agents that handle compliance, portfolios, reporting, and growth
          &mdash; so you can spend every hour where it matters: with your
          clients.
        </p>
        <div className="hero-cta">
          <a href="#demo" className="btn btn-white">
            Request a Demo
          </a>
          <a href="#agents" className="btn btn-ghost">
            See the agents
          </a>
        </div>
      </div>
    </section>
  )
}
