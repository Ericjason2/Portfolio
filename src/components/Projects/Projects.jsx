import ProjectCard from './ProjectCard';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Portfolio Professionnel',
    description: 'Portfolio moderne avec animations fluides et design responsive, mettant en valeur vos compétences en développement frontend.',
    technologies: ['React', 'CSS3', 'HTML5'],
    codeUrl: 'https://github.com/Ericjason2/Portfolio',
    liveUrl: 'https://eric-dev-portfolio.netlify.app',
    accentColor: '#8b5cf6'
  },
  {
    id: 2,
    title: 'Calculatrice Scientifique',
    description: 'Application complète avec fonctions trigonométriques, mémoire et historique des calculs.',
    technologies: ['JavaScript ES6+', 'HTML5', 'CSS3'],
    codeUrl: 'https://github.com/Ericjason2/Dev_calculatrice',
    liveUrl: 'https://eric-calculator.netlify.app',
    accentColor: '#10b981'
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif avec visualisation de données en temps réel et export PDF.',
    technologies: ['React', 'Chart.js', 'Firebase'],
    codeUrl: 'https://github.com/Ericjason2/Analytics-Dashboard',
    liveUrl: 'https://eric-analytics.netlify.app',
    accentColor: '#f59e0b'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Mes Réalisations</h2>
        <p className="section-subtitle">Découvrez une sélection de mes projets les plus aboutis</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}