import { scrollToSection } from '../utils/scroll';
import React, { useState } from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import ExperienceModal from './ExperienceModal';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const handleScroll = scrollToSection;

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        
        {/* Header Row */}
        <div className="experience-header-row">
          <div>
            <div className="section-badge">
              <Briefcase size={16} />
              <span>WORK EXPERIENCE</span>
            </div>
            <h2 className="section-title">
              Professional Journey
            </h2>
          </div>

          <button 
            onClick={() => handleScroll('projects')} 
            className="btn-primary-pill"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 3 Step Timeline Cards */}
        <div className="timeline-cards-row">
          {experienceData.map((item) => (
            <div
              key={item.step}
              className="timeline-card timeline-card-interactive"
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`View ${item.company} experience`}
              onClick={() => setSelectedExperience(item)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedExperience(item);
                }
              }}
            >
              <div className="timeline-card-header">
                <div className="timeline-step-badge">
                  {item.step}
                </div>
                <div className="timeline-duration-badge">
                  {item.duration}
                </div>
              </div>

              <div className="timeline-company-row">
                <div className="timeline-logo-box">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="timeline-company-logo"
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="timeline-company">{item.company}</h3>
                  <div className="timeline-role">{item.role}</div>
                </div>
              </div>
              <p className="timeline-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </section>
  );
}
