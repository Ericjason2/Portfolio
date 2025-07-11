import ProjectCard from './ProjectCard';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Application E-commerce',
    description: 'Une application React complète avec panier, paiement et tableau de bord admin.',
    technologies: ['React', 'Node.js', 'MySQL'],
    imageUrl: '/project1.jpg',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 2,
    title: 'Calculatrice',
    description: 'Simple calculatrice scientifique',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/project2.jpg',
    demoUrl: '#',
    codeUrl: 'https://github.com/Ericjason2/Dev_calculatrice'
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord de données avec visualisations en temps réel.',
    technologies: ['React', 'D3.js', 'Firebase'],
    imageUrl: '/project3.jpg',
    demoUrl: '#',
    codeUrl: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}