import './Projects.css';

const projects = [
  {
    title: 'Hire Lens',
    subtitle: 'AI Resume Analyzer',
    desc: 'AI-powered resume analyzer that gives ATS scores, keyword gap analysis, and section-by-section AI feedback using Google Gemini. Supports PDF and DOCX uploads.',
    tags: ['React', 'Node.js', 'MongoDB', 'Google Gemini', 'Docker'],
    github: 'https://github.com/suparsh-21/Ai-resume-analyzer',
    deployed: 'https://ai-resume-analyzer-sigma-silk.vercel.app/',
    color: '#22c55e',
    emoji: '🤖',
    date: 'Mar 2024',
  },
  {
    title: 'Rasoi',
    subtitle: 'Food Delivery Platform',
    desc: 'Full-stack food ordering platform with real-time order tracking, restaurant management, JWT authentication, and a live chatbot. Inspired by Swiggy/Zomato.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com/suparsh-21/RASOI',
    deployed: null,
    color: '#f97316',
    emoji: '🍱',
    date: 'Nov 2023 – Apr 2024',
  },
  {
    title: 'CCMS',
    subtitle: 'College Complaint Management System',
    desc: 'Web-based complaint management system for colleges. Students can submit and track complaints; admins can manage, update status, and respond through a dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/suparsh-21/ccms-backend',
    deployed: 'https://ccms-backend-l7lq.onrender.com',
    color: '#a855f7',
    emoji: '🏫',
    date: 'Sept 2022 – Oct 2022',
  },
];

export default function Projects() {
  return (
    <section className="section card-section reveal" id="projects">
      <div className="container">
        <p className="section-sub">// what i've built</p>
        <h2 className="section-title">My <span>Projects</span></h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card reveal" key={p.title}>
              <div className="project-top">
                <div className="project-icon" style={{ background: `${p.color}18`, border: `1px solid ${p.color}30` }}>
                  <span>{p.emoji}</span>
                </div>
                <div className="project-date">{p.date}</div>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-btn proj-gh">
                  GitHub
                </a>
                {p.deployed && (
                  <a href={p.deployed} target="_blank" rel="noopener noreferrer" className="proj-btn proj-live"
                    style={{ background: `${p.color}`, borderColor: p.color }}>
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
