import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          SP<span className="dot">.</span>
        </span>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l} onClick={() => scrollTo(l)}>{l}</li>
          ))}
          <li>
            <a href="https://github.com/suparsh-21" target="_blank" rel="noopener noreferrer" className="nav-btn">
              GitHub ↗
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
