import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('suparsh001@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section card-section reveal" id="contact">
      <div className="container contact-container">
        <p className="section-sub">// let's talk</p>
        <h2 className="section-title">Get in <span>Touch</span></h2>

        <div className="contact-grid">
          {/* Location Card */}
          <div className="contact-card reveal">
            <div className="contact-icon-box">📍</div>
            <h3>Location</h3>
            <p className="contact-info-text">
              Originally from <span>Srinagar, Jammu & Kashmir</span><br />
              Currently at <span>Ahmedabad, Gujarat</span>
            </p>
          </div>

          {/* Phone Card */}
          <div className="contact-card reveal">
            <div className="contact-icon-box">📱</div>
            <h3>Phone</h3>
            <p className="contact-info-text">
              <a href="tel:+919622661091">+91 96226 61091</a>
            </p>
            <span className="availability-badge">Available 24*7 for queries</span>
          </div>

          {/* Email Card */}
          <div className="contact-card reveal">
            <div className="contact-icon-box">✉️</div>
            <h3>Email</h3>
            <p className="contact-info-text">
              <a href="mailto:suparsh001@gmail.com">suparsh001@gmail.com</a>
            </p>
            <button className="copy-btn" onClick={copyEmail}>
              {copied ? '✅ Copied!' : '📋 Copy Email'}
            </button>
          </div>
        </div>

        <div className="contact-social-footer reveal">
          <p>Follow me on</p>
          <div className="social-links">
            <a href="https://github.com/suparsh-21" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/suparsh001" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
