import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer({ setCursorVariant }) {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Ericjason2' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/eric-kouta-246a62280/' },
    { icon: <FiTwitter />, url: 'https://twitter.com/votrenom' },
    { icon: <FiMail />, url: 'mailto:erickouta6@gmail.com' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="footer-content"
        >
          <div className="footer-info">
            <motion.a 
              href="#" 
              className="footer-logo"
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              KOUTA Eric
            </motion.a>
            <p>Développeur Frontend créant des expériences web modernes et performantes.</p>
          </div>
          
          <div className="footer-links">
            <h3>Liens rapides</h3>
            <ul>
              {['Accueil', 'Projets', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onMouseEnter={() => setCursorVariant('text')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Réseaux sociaux</h3>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  onMouseEnter={() => setCursorVariant('clickable')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KoutaEric. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}