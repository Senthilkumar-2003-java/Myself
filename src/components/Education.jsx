import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        
        <div className="section-badge">
          <GraduationCap size={16} />
          <span>EDUCATION</span>
        </div>
        <h2 className="section-title">
          My Education
        </h2>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <div key={item.degree} className="education-card">
              <div className="education-icon-box">
                {index === 0 ? <GraduationCap size={28} /> : <BookOpen size={28} />}
              </div>

              <div className="education-info">
                <span className="education-status-badge">{item.status}</span>
                <h3>{item.degree}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
