import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#000' }}>
      <div className="footer-grid">
        {/* Col 1 — Brand */}
        <div className="footer-brand">
          <div className="logo">BracciaCap AI</div>
          <p>Autonomous AI agents purpose-built for Registered Investment Advisors.</p>
          <div className="footer-addr">
            <div className="footer-addr-block">
              <span className="footer-addr-label">Principal Office</span>
              111 Main Street
              <br />
              Staten Island, NY 10307
            </div>
            <div className="footer-addr-block">
              <span className="footer-addr-label">New York</span>
              40 Wall Street
              <br />
              New York, NY 10005
            </div>
            <div className="footer-addr-block">
              <span className="footer-addr-label">Registered Agent</span>
              30 N Gould St, Ste N
              <br />
              Sheridan, WY 82801
            </div>
            <div className="footer-addr-contact">
              <a href="tel:+15185205022">(518)&nbsp;520-5022</a>
              <a href="mailto:ai@bracciacap.com">ai@bracciacap.com</a>
            </div>
          </div>
        </div>

        {/* Col 2 — Platform */}
        <div className="footer-col">
          <h4>Platform</h4>
          <a href="#agents">AI Agents</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
        </div>

        {/* Col 3 — Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="mailto:ai@bracciacap.com">Contact</a>
        </div>

        {/* Col 4 — Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <a href="/privacy.html">Privacy</a>
          <a href="/terms.html">Terms</a>
          <a href="#security">Security</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 BracciaCap AI, a Braccia Capital company.</span>
        <div className="social-links">
          <a href="#" aria-label="X">X</a>
        </div>
      </div>

      <div className="footer-disclaimer">
        BracciaCap AI provides technology tools for Registered Investment Advisors. AI agents assist
        with operational tasks but do not provide investment advice. All decisions remain the
        advisor's responsibility. AI outputs should be reviewed by qualified professionals. Not a
        registered investment advisor or broker-dealer.
      </div>
    </footer>
  );
};
