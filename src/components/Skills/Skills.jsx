import './Skills.css';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 60 },
  { name: 'Bootstrap', level: 85 },
  { name: 'Git', level: 78 },
  { name: 'Responsive Design', level: 75 },
  { name: 'UI/UX', level: 40 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}