import { scrollToSection } from '../utils/scroll';
import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-container">
          
          {/* Brand */}
          <a href="#home" className="brand-logo" onClick={(e) => handleNavClick(e, '#home')}>
            <img src="/assets/sz_logo.webp" alt="SZ logo" className="brand-logo-img" width={38} height={38} />
            <span>{personalInfo.name}</span>
          </a>

          {/* Nav */}
          <ul className="footer-nav">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Credits */}
          <div className="footer-copy">
            © Senthilkumar. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
