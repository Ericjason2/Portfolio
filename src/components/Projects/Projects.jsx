import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Portfolio Élégant',
    description: 'Un portfolio moderne mettant en valeur votre expertise en développement frontend avec des animations fluides.',
    technologies: ['ReactJs', 'Framer Motion', 'CSS3', 'HTML5', 'EmailJS'],
    year: '2025',
    codeUrl: 'https://github.com/Ericjason2/Portfolio',
    liveUrl: 'https://portfolio-chi-ten-noruh33vg0.vercel.app/'
  },
  {
    id: 2,
    title: 'Calculatrice Scientifique',
    description: 'Application basique de calcul',
    technologies: ['JavaScript Vanilla', 'CSS Flex', 'HTML5'],
    year: '2024',
    codeUrl: 'https://github.com/Ericjason2/Dev_calculatrice',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif avec visualisation de données en temps réel et export PDF.',
    technologies: ['React', 'Chart.js', 'Firebase'],
    year: '2023',
    codeUrl: '#',
    liveUrl: '#'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Projects({ setCursorVariant }) {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-subtitle">Mes Créations</span>
          <h2 className="section-title">Projets Récents</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              setCursorVariant={setCursorVariant}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}