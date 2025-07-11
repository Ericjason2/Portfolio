import './Projects.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.imageUrl} alt={project.title} />
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
          <a href={project.codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            Code source
          </a>
        </div>
      </div>
    </div>
  );
}