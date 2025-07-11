import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bonjour, je suis <span className="highlight">KOUTA Eric</span>
          </h1>
          <h2 className="hero-subtitle">Développeur Frontend</h2>
          <p className="hero-text">
            Je crée des expériences web modernes et performantes avec React, JavaScript et les dernières technologies frontend.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-secondary">Me contacter</a>
          </div>
        </div>
      </div>
    </section>
  );
}