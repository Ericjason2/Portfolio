import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export default function ProjectCard({ project, index, setCursorVariant }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="project-card"
      onMouseEnter={() => setCursorVariant('clickable')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <div className="card-header">
        <span className="project-year">{project.year}</span>
        <div className="project-links">
          {project.codeUrl && (
            <motion.a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('clickable')}
            >
              <FiGithub />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('clickable')}
            >
              <FiExternalLink />
            </motion.a>
          )}
        </div>
      </div>
      
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      <div className="tech-stack">
        {project.technologies.map((tech, i) => (
          <motion.span 
            key={i}
            whileHover={{ y: -2 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}