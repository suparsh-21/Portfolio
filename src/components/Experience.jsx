import './Experience.css';

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Codex Technologies',
    duration: 'Feb 2024 – Mar 2024',
    type: 'Internship',
    points: [
      'Built and improved web apps using the MERN stack',
      'Developed backend APIs using Express and managed data with MongoDB',
      'Assisted in implementing business features and debugging',
      'Worked collaboratively and optimized application performance',
    ],
  },
  {
    role: 'Independent Web Development',
    company: 'Freelance / Self-initiated',
    duration: 'Jul 2024 – Present',
    type: 'Work',
    points: [
      'Built and customized full-stack solutions for real-world use cases',
      'Focused on usability, performance, and responsive design',
      'Developed full-stack applications with responsive design logic',
      'Gained experience in client requirements analysis and iterative improvements',
    ],
  },
  {
    role: 'Full Stack Web Development',
    company: 'Sheriyans Coding School',
    duration: 'Jan 2024',
    type: 'Course',
    points: [
      'Completed an intensive full-stack web development course',
      'Learned MERN stack fundamentals and best practices',
      'Built practical projects during the curriculum',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section card-section reveal" id="experience">
      <div className="container">
        <p className="section-sub">// my journey so far</p>
        <h2 className="section-title">Experience &amp; <span>Learning</span></h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-line">
                <div className="timeline-dot" />
                {i < experiences.length - 1 && <div className="timeline-connector" />}
              </div>

              <div className="exp-card reveal">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-type">{exp.type}</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
