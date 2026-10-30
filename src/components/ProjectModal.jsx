import React from 'react';
import { ExternalLink } from 'lucide-react';
import TechIcon from './TechIcon';
import AnimatedDialog from './AnimatedDialog';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatedDialog className="project-modal" titleId="project-modal-title" descriptionId="project-modal-description" onClose={onClose}>
        <div className="modal-img-wrap">
          <img src={project.image} alt={project.title} className="modal-img" />
        </div>

        <div className="modal-body">
          <h3 id="project-modal-title">{project.title}</h3>
          <h4>{project.subtitle}</h4>
          <p id="project-modal-description">{project.description}</p>

          {(project.demoUrl || project.githubUrl) && <div className="modal-actions">
            {project.demoUrl && <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary-pill"
            >
              <span>Live Demonstration</span>
              <ExternalLink size={16} />
            </a>}
            {project.githubUrl && <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary-pill"
            >
              <TechIcon name="github" size={16} />
              <span>Source Repository</span>
            </a>}
          </div>}
        </div>
    </AnimatedDialog>
  );
}
