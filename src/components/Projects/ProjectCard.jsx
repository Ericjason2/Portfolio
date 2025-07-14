import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card" style={{ '--accent': project.accentColor }}>
      <div className="card-content">
        <div className="card-header">
          <FiCode className="project-icon" />
          <h3>{project.title}</h3>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
      
      <div className="card-actions">
        <a 
          href={project.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="action-btn live-demo"
        >
          <FiExternalLink /> Voir le projet
        </a>
        <a 
          href={project.codeUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="action-btn source-code"
        >
          <FiGithub /> Code source
        </a>
      </div>
    </div>
  );
}