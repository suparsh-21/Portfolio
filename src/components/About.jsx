import './About.css';

export default function About() {
  return (
    <section className="section card-section reveal" id="about">
      <div className="container">
        <p className="section-sub">// who am i</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Hey! I'm <strong>Suparsh Pandita</strong>, final year Computer Engineering student at
              L.D. College of Engineering, Ahmedabad. I enjoy turning ideas into real-world web
              applications — the kind that actually work and look good doing it.
            </p>
            <p>
              I've been building full-stack apps using the MERN stack, worked as a MERN Developer
              intern at <strong>Codex Technologies</strong>, and completed multiple hands-on projects
              ranging from a food ordering platform to an AI-powered resume analyzer.
            </p>
            <p>
              When I'm not coding, you'll probably find me playing cricket, gaming, or reading.
            </p>

            <div className="about-links">
              <a href="mailto:suparsh001@gmail.com" className="about-link">
                📧 suparsh001@gmail.com
              </a>
              <a href="https://github.com/suparsh-r-21" target="_blank" rel="noopener noreferrer" className="about-link">
                🐙 GitHub
              </a>
              <a href="https://linkedin.com/in/suparsh001" target="_blank" rel="noopener noreferrer" className="about-link">
                💼 LinkedIn
              </a>
            </div>
          </div>

          <div className="edu-card reveal">
            <h3 className="edu-heading">Education</h3>
            <div className="edu-list">
              <div className="edu-item">
                <div className="edu-year">2023–27</div>
                <div>
                  <div className="edu-degree">B.E. Computer Engineering</div>
                  <div className="edu-inst">L.D. College of Engineering</div>

                </div>
              </div>
              <div className="edu-item">
                <div className="edu-year">2022–23</div>
                <div>
                  <div className="edu-degree">HSC (Class XII)</div>
                  <div className="edu-inst">Govt Mixed Jammu, JKBOSE</div>
                  <div className="edu-score">96.8%</div>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-year">2020–21</div>
                <div>
                  <div className="edu-degree">SSC (Class X)</div>
                  <div className="edu-inst">Int International Jammu</div>
                  <div className="edu-score">88.6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
