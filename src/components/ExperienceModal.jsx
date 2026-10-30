import { Briefcase, Clock3 } from 'lucide-react';
import AnimatedDialog from './AnimatedDialog';

export default function ExperienceModal({ experience, onClose }) {
  return (
    <AnimatedDialog
      className="experience-modal"
      titleId="experience-modal-title"
      descriptionId="experience-modal-description"
      onClose={onClose}
    >
      <div className="experience-modal-body">
        <div className="section-badge">
          <Briefcase size={16} />
          <span>WORK EXPERIENCE</span>
        </div>
        <div className="experience-modal-company">
          <div className="timeline-logo-box">
            <img src={experience.logo} alt={`${experience.company} logo`} className="timeline-company-logo" />
          </div>
          <div>
            <h3 id="experience-modal-title">{experience.company}</h3>
            <p className="experience-modal-role">{experience.role}</p>
          </div>
        </div>
        <div className="experience-modal-duration">
          <Clock3 size={16} />
          <span>{experience.duration}</span>
        </div>
        <p id="experience-modal-description" className="experience-modal-description">
          {experience.description}
        </p>
      </div>
    </AnimatedDialog>
  );
}
