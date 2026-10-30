import React, { useState } from 'react';
import { Wrench } from 'lucide-react';
import { skillCategories, skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  // Convert hex color to RGBA with low opacity for soft bg
  const hexToRgba = (hex, opacity = 0.1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${opacity})`;
  };

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        
        {/* Header Row: Title & Filter Pills */}
        <div className="skills-header-row">
          <div>
            <div className="section-badge">
              <Wrench size={16} />
              <span>MY SKILLS</span>
            </div>
            <h2 className="section-title">
              Technologies I Work With
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-pills-wrap">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Exactly 2 lines (11 columns per line) on desktop matching master reference */}
        <div className={`skills-grid ${activeCategory === 'All' ? 'skills-grid-twoline' : ''}`}>
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div 
                className="skill-icon-holder"
                style={{ background: hexToRgba('#F4F0FB', 1) }}
              >
                <img 
                  src={skill.image} 
                  alt={skill.name} 
                  className="skill-img-icon"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.parentNode.querySelector('.skill-icon-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="skill-icon-fallback" 
                  style={{ display: 'none', color: skill.color, fontSize: '1.4rem', fontWeight: 900 }}
                >
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
