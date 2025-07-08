import { Search, PlayCircle } from "lucide-react";

const HeroSection = (currentContent) => (
    <section id="home" className="hero-section">
      <div className="hero-pattern"></div>
      <div className="container hero-content">
        <h1 className="hero-title1">
          {currentContent.hero.title}
        </h1>
        <h1 className="hero-title2">
          {currentContent.hero.subtitle}
        </h1>
        <p className="hero-description">
          {currentContent.hero.description}
        </p>
        <div className="hero-buttons">
          <button className="button button-primary">
            <Search className="button-icon" size={24} />{currentContent.hero.findProgram}
          </button>
          <button className="button button-secondary">
            <PlayCircle className="button-icon" size={24} />{currentContent.hero.watchVideo}
          </button>
        </div>
      </div>
    </section>
  );

  export default HeroSection; 