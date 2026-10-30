import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone,
  ArrowRight, 
  Download, 
  Bot, 
  Code2, 
  Smartphone, 
  Cloud,
  Users,
  GraduationCap,
  Heart
} from 'lucide-react';
import { personalInfo, stats, heroFloatingCards } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  const getBadgeIcon = (type) => {
    switch (type) {
      case 'ai':
        return <Bot size={20} />;
      case 'code':
        return <Code2 size={20} />;
      case 'mobile':
        return <Smartphone size={20} />;
      case 'cloud':
        return <Cloud size={20} />;
      default:
        return <Code2 size={20} />;
    }
  };

  const getStatSvgIcon = (type, color) => {
    switch (type) {
      case 'code':
        return <Code2 size={22} color={color} strokeWidth={2.6} />;
      case 'users':
        return <Users size={22} color={color} strokeWidth={2.4} />;
      case 'graduation':
        return <GraduationCap size={22} color={color} strokeWidth={2.4} />;
      case 'heart':
        return <Heart size={22} color={color} fill={color} strokeWidth={2} />;
      default:
        return <Code2 size={22} color={color} />;
    }
  };

  const handleScroll = (id) => {
    scrollToSection(id);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* LEFT COLUMN: INTRO & BIO */}
          <div className="hero-text-col">
            <div className="hero-intro-label">
              <span role="img" aria-label="wave">👋</span>
              <span>Hello, I'm</span>
            </div>

            <h1 className="hero-title" aria-label={personalInfo.name}>
              <span className="hero-word" aria-hidden="true">
                {[...personalInfo.nameFirst].map((letter, index) => <span key={index} className="hero-letter" style={{ '--letter-index': index }}>{letter}</span>)}
              </span>
              <span className="title-accent hero-word" aria-hidden="true">
                {[...personalInfo.nameLast].map((letter, index) => <span key={index} className="hero-letter" style={{ '--letter-index': personalInfo.nameFirst.length + index }}>{letter}</span>)}
              </span>
            </h1>

            <div className="hero-role">
              <span>Full Stack Developer</span>
              <span className="hero-role-divider">+</span>
              <span>AI Engineering</span>
            </div>

            <p className="hero-description">
              {personalInfo.heroDescription}
            </p>

            {/* Meta details with phone number */}
            <div className="hero-meta-items">
              <div className="hero-meta-item">
                <MapPin size={17} className="meta-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <a href={`mailto:${personalInfo.email}`} className="hero-meta-item">
                <Mail size={17} className="meta-icon" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="hero-meta-item">
                <Phone size={17} className="meta-icon" />
                <span>{personalInfo.phoneDisplay}</span>
              </a>
            </div>

            {/* Action Buttons matching master reference */}
            <div className="hero-btn-group">
              <button 
                onClick={() => handleScroll('projects')} 
                className="btn-primary-pill"
              >
                <span>View My Work</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href={personalInfo.resumeUrl} 
                download="Senthilkumar_Resume.pdf"
                className="btn-secondary-pill"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Professional Statistics Row with crisp SVG icons */}
            <div className="hero-stats-row">
              {stats.map((st, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-value-wrap">
                    <span className="stat-svg-box">
                      {getStatSvgIcon(st.iconType, st.color)}
                    </span>
                    <AnimatedCounter value={st.value} />
                  </div>
                  <div className="stat-label">{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: PORTRAIT & FLOATING CARDS */}
          <div className="hero-visual-col">
            <div className="hero-visual-wrapper">
              
              {/* Floating Cards (Desktop positioning matching reference) */}
              <div className="hero-badges-grid">
              {heroFloatingCards.map((card) => (
                <div key={card.id} className={`floating-badge ${card.position}`}>
                  <div 
                    className="floating-badge-icon"
                    style={{ background: card.iconBg, color: card.iconColor }}
                  >
                    {getBadgeIcon(card.iconType)}
                  </div>
                  <div className="floating-badge-text">
                    <span className="floating-badge-title">{card.title}</span>
                    <span className="floating-badge-subtitle">{card.subtitle}</span>
                  </div>
                </div>
              ))}
              </div>

              {/* Main Portrait with blue & violet watercolor splash */}
              <img
                src="/assets/hero_portrait.png"
                alt="Senthilkumar - Full Stack Developer & AI Engineer"
                className="hero-portrait-img"
              />

              {/* Handwritten Signature Block */}
              <div className="hero-signature-wrap">
                <img 
                  src="/assets/signature.png" 
                  alt="Senthilkumar" 
                  className="hero-signature-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hero-signature-text" style={{ display: 'none' }}>
                  Senthilkumareppa e
                </div>
                <div className="hero-signature-subtitle">
                  DEVELOPER &nbsp;|&nbsp; AI ENTHUSIAST &nbsp;|&nbsp; PROBLEM SOLVER
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
