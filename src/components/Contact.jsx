import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Phone,
  MapPin, 
  Send
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TechIcon from './TechIcon';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const url = buildWhatsAppUrl(formData, personalInfo.phone);
      setFormError('');
      window.location.assign(url);
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        
        <div>
          <div className="section-badge">
            <PhoneCall size={16} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="section-title">
            Let's Build Something Amazing Together!
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', maxWidth: '600px' }}>
            I am always open to new opportunities, interesting projects, and collaborations.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Contact Cards + Interactive Message Form */}
          <div className="contact-left-col">
            
            {/* Contact Cards Grid including Phone */}
            <div className="contact-cards-grid">
              
              {/* Email */}
              <a href={`mailto:${personalInfo.email}`} className="contact-card">
                <div className="contact-card-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value contact-card-email">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a href={`tel:${personalInfo.phone}`} className="contact-card">
                <div className="contact-card-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">Phone</span>
                  <span className="contact-card-value">
                    {personalInfo.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-value">{personalInfo.location}</span>
                </div>
              </div>

              {/* LinkedIn */}
              <a 
                href={personalInfo.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <TechIcon name="linkedin" size={20} />
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-value">Let's Network</span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href={personalInfo.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <TechIcon name="github" size={20} />
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">GitHub</span>
                  <span className="contact-card-value">See My Work</span>
                </div>
              </a>

            </div>

            {/* Direct Message Form */}
            <div className="contact-form-wrap">
                <form className="contact-form" onSubmit={handleSubmit}>
                  {formError && <p role="alert" className="contact-form-error">{formError}</p>}
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      aria-label="Your name"
                      autoComplete="name"
                      maxLength={100}
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                    <input
                      type="email"
                      name="email"
                      aria-label="Your email"
                      autoComplete="email"
                      maxLength={254}
                      placeholder="Your Email *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    aria-label="Subject or project inquiry"
                    maxLength={160}
                    placeholder="Subject / Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />

                  <textarea
                    name="message"
                    aria-label="Your message"
                    maxLength={2000}
                    placeholder="Tell me about your project or opportunity... *"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />

                  <button type="submit" className="btn-primary-pill" style={{ alignSelf: 'flex-start' }}>
                    <span>Continue on WhatsApp</span>
                    <Send size={16} />
                  </button>
                  <p className="contact-form-note">Opens WhatsApp with your details. Tap Send there to finish.</p>
                </form>
            </div>

          </div>

          {/* Right Column: Premium Workspace Visual with "Good Ideas Build Great Projects" */}
          <div className="contact-right-col">
            <div className="workspace-visual-box">
              <img
                src="/assets/workspace_visual.webp"
                alt="Workspace artwork: Good Ideas Build Great Projects"
                className="workspace-visual-img"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
