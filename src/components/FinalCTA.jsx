import { scrollToSection } from '../utils/scroll';
import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const handleScrollToContact = () => {
    scrollToSection('contact');
  };

  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="cta-banner">
          
          {/* Left: Icon & Text */}
          <div className="cta-left">
            <div className="cta-icon-circle">
              <Send size={28} />
            </div>
            <div className="cta-text">
              <h3>Let's Build Something Amazing Together!</h3>
              <p>I am always open to new opportunities, interesting projects, and collaborations.</p>
            </div>
          </div>

          {/* Right: Button */}
          <button onClick={handleScrollToContact} className="cta-button-white">
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </section>
  );
}
