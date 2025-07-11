import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="profile-image"></div>
          </div>
          
          <div className="about-text">
            <p>
              Passionné par le développement web depuis plusieurs années, j'aime créer des interfaces utilisateur intuitives et esthétiques.
            </p>
            <p>
              Diplômé en cycle ingénieur génie logiciel, j'ai travaillé sur divers projets allant des sites vitrines aux applications web complexes.
            </p>
            <p>
              Mon objectif est de fournir des solutions techniques qui répondent parfaitement aux besoins des utilisateurs tout en étant maintenables et évolutives.
            </p>
            
            <div className="about-cta">
              <a href="/cv.pdf" 
              download="KoutaEric_CV.pdf" 
              className="btn btn-primary">
                Télécharger mon CV
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}