import './Skills.css';

const skillGroups = [
  {
    label: 'Languages',
    icon: '💻',
    skills: ['C', 'C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Vite', 'CSS Modules', 'Responsive Design'],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.io'],
  },
  {
    label: 'Database & Tools',
    icon: '🗄️',
    skills: ['MongoDB', 'SQL', 'Docker', 'GitHub', 'Git'],
  },
  {
    label: 'Currently Learning',
    icon: '📚',
    skills: ['TypeScript', 'System Design', 'DevOps basics'],
  },
];

export default function Skills() {
  return (
    <section className="section card-section reveal" id="skills">
      <div className="container">
        <p className="section-sub">// what i work with</p>
        <h2 className="section-title">Tech <span>Stack</span></h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group reveal" key={group.label}>
              <div className="skill-group-header">
                <span className="skill-icon">{group.icon}</span>
                <span className="skill-label">{group.label}</span>
              </div>
              <div className="skill-chips">
                {group.skills.map((s) => (
                  <span className="skill-chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
