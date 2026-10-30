import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import { projectCategories, projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => {
        if (activeCategory === 'Web Applications') return p.tags.includes('Web App');
        if (activeCategory === 'Mobile Applications') return p.tags.includes('Mobile App');
        return p.category === activeCategory;
      });

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        
        {/* Header Row */}
        <div className="projects-header-row">
          <div>
            <div className="section-badge">
              <FolderGit2 size={16} />
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="section-title">
              My Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="filter-pills-wrap">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                aria-pressed={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project previews */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`View ${project.title} project`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              {/* Thumbnail */}
              <div className="project-thumb-box">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-thumb-img" 
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1200}
                />
              </div>

              {/* Info */}
              <div className="project-info">
                <span className="project-category-badge">{project.category === 'AI / Other' ? 'AI / OTHER' : project.category === 'Mobile Applications' ? 'MOBILE APP' : 'WEB APP'}</span>
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-subtitle">{project.subtitle}</div>
                <div className="project-card-footer">
                  <span className="project-open-icon" aria-hidden="true"><ArrowUpRight size={20} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
