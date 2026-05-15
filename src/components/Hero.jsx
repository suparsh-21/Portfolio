import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-card reveal active">
        <div className="hero-content">
          <div className="hero-header">
            <span className="logo-text">SUPARSH<span>.</span></span>
            <nav className="hero-nav">
              <a href="#projects">Work</a>
              <a href="#about">About</a>
              <a href="https://github.com/suparsh-21" target="_blank">GitHub</a>
            </nav>
          </div>

          <div className="hero-body">
            <div className="hero-intro">
              <span className="hero-line"></span>
              <span className="hero-name">Suparsh Pandita</span>
            </div>
            <h1 className="hero-main-title">
              Hello, my <br />
              name's <span>Suparsh.</span><br />
              I'm a <span>Full-Stack</span><br />
              Developer.
            </h1>
            
            <div className="hero-footer">
              <div className="scroll-indicator">
                <div className="mouse">
                  <div className="wheel"></div>
                </div>
                <span>Scroll down</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/computer-art.png" alt="Developer Setup" className="hero-img" />
          <div className="visual-overlay"></div>
        </div>
      </div>
    </section>
  );
}
