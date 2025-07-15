import { motion } from 'framer-motion';
import { Moon, Sun } from 'react-feather';
import './Header.css';

export default function Header({ darkMode, setDarkMode, setCursorVariant }) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="container">
        <nav>
          <motion.a
            href="#"
            className="logo"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Portfolio.
          </motion.a>
          
          <div className="nav-links">
            {['À propos', 'Projets', 'Contact'].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              onMouseEnter={() => setCursorVariant('clickable')}
              onMouseLeave={() => setCursorVariant('default')}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}