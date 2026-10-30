import { scrollToSection } from '../utils/scroll';
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Server, 
  CreditCard, 
  Cloud, 
  ArrowRight,
  User
} from 'lucide-react';
import { personalInfo, expertiseCards } from '../data/portfolioData';

export default function About() {
  const getExpertiseIcon = (iconName) => {
    switch (iconName) {
      case 'globe':
        return <Globe size={22} />;
      case 'smartphone':
        return <Smartphone size={22} />;
      case 'cpu':
        return <Cpu size={22} />;
      case 'server':
        return <Server size={22} />;
      case 'credit-card':
        return <CreditCard size={22} />;
      case 'cloud':
        return <Cloud size={22} />;
      default:
        return <Globe size={22} />;
    }
  };

  const handleScroll = scrollToSection;

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column: Heading, Description & CTA */}
          <div className="about-left-col">
            <div className="section-badge">
              <User size={16} />
              <span>ABOUT ME</span>
            </div>

            <h2 className="section-title">
              Turning Ideas into<br />
              <span style={{ color: 'var(--color-accent)' }}>
                Real-World Solutions
              </span>
            </h2>

            <p className="about-paragraph">
              {personalInfo.summary}
            </p>

            <button 
              onClick={() => handleScroll('skills')} 
              className="btn-primary-pill"
            >
              <span>Learn More About Me</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: 6 Professional Capability Cards */}
          <div className="about-right-col">
            <div className="expertise-cards-grid">
              {expertiseCards.map((card) => (
                <div key={card.id} className="expertise-card">
                  <div 
                    className="expertise-icon-box"
                    style={{ background: card.bg, color: card.color }}
                  >
                    {getExpertiseIcon(card.icon)}
                  </div>
                  <div className="expertise-info">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
