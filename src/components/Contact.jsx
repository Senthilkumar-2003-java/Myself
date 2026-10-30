import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Phone,
  MapPin, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TechIcon from './TechIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
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
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <CheckCircle2 size={48} color="var(--primary-violet)" style={{ margin: '0 auto 12px' }} />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-dark)' }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                    <input
                      type="email"
                      name="email"
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
                    placeholder="Subject / Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity... *"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />

                  <button type="submit" className="btn-primary-pill" style={{ alignSelf: 'flex-start' }}>
                    <span>Get In Touch</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
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
