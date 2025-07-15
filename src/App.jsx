import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const variants = {
    default: {
      x: cursorPosition.x - 10,
      y: cursorPosition.y - 10,
      backgroundColor: '#8b5cf6',
    },
    text: {
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference',
    },
    clickable: {
      x: cursorPosition.x - 15,
      y: cursorPosition.y - 15,
      backgroundColor: '#10b981',
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
      />
      
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        setCursorVariant={setCursorVariant}
      />
      
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero setCursorVariant={setCursorVariant} />
            <Projects setCursorVariant={setCursorVariant} />
            <Contact setCursorVariant={setCursorVariant} />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  );
}

export default App;