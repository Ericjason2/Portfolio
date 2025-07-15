import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero({ setCursorVariant }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.span
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Bonjour, je suis
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="name-highlight">KOUTA Eric</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Développeur Frontend
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-text"
          >
            Je crée des expériences web exceptionnelles avec des interfaces modernes, intuitives et performantes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hero-buttons"
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              onMouseEnter={() => setCursorVariant('clickable')}
              onMouseLeave={() => setCursorVariant('default')}
              whileHover={{ y: -3 }}
            >
              Voir mes projets
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              onMouseEnter={() => setCursorVariant('clickable')}
              onMouseLeave={() => setCursorVariant('default')}
              whileHover={{ y: -3 }}
            >
              Me contacter
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}