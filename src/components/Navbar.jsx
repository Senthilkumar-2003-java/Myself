import { scrollToSection } from '../utils/scroll';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ArrowUpRight, House, UserRound, Code2, BriefcaseBusiness, FolderKanban, GraduationCap, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const toggle = toggleRef.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('portfolio:modal', { detail: { open: true } }));
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
      if (event.key !== 'Tab') return;
      const links = [...(menuRef.current?.querySelectorAll('a') || [])];
      const first = toggleRef.current;
      const last = links.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const onResize = () => { if (window.innerWidth > 960) setMobileOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = overflow;
      window.dispatchEvent(new CustomEvent('portfolio:modal', { detail: { open: false } }));
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      toggle?.focus({ preventScroll: true });
    };
  }, [mobileOpen]);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: House },
    { name: 'About', href: '#about', id: 'about', icon: UserRound },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
    { name: 'Experience', href: '#experience', id: 'experience', icon: BriefcaseBusiness },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderKanban },
    { name: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    if (mobileOpen) window.dispatchEvent(new CustomEvent('portfolio:modal', { detail: { open: false } }));
    scrollToSection(href);
  };

  return (
    <header className={`navbar-wrap${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-container">
          {/* Brand Logo */}
          <a href="#home" className="brand-logo" onClick={(e) => handleNavClick(e, '#home')}>
            <img src="/assets/sz_logo.webp" alt="SZ logo" className="brand-logo-img" width={38} height={38} />
            <span>{personalInfo.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`nav-link-item ${activeSection === link.id ? 'active' : ''}`}
                >
                  <a href={link.href} aria-current={activeSection === link.id ? 'location' : undefined} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTA Button */}
          <div className="nav-actions">
            <a
              href="#contact"
              className="btn-primary-pill"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>Let's Connect</span>
              <ArrowRight size={16} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              ref={toggleRef}
              className={`mobile-menu-toggle${mobileOpen ? ' is-open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <>
        <button type="button" className="mobile-menu-backdrop" tabIndex={-1} aria-label="Close navigation" onClick={() => setMobileOpen(false)} />
        <nav ref={menuRef} className="mobile-drawer" id="mobile-navigation" aria-label="Mobile navigation" data-lenis-prevent="">
          <div className="mobile-menu-heading">
            <div><span className="mobile-menu-eyebrow">EXPLORE</span><h2>My portfolio<span>.</span></h2></div>
            <span className="mobile-menu-count">07 sections</span>
          </div>
          <div className="mobile-menu-grid">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              className={`mobile-nav-tile${activeSection === link.id ? ' active' : ''}`}
              aria-current={activeSection === link.id ? 'location' : undefined}
              style={{ '--menu-index': index }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              <span className="mobile-nav-icon"><link.icon size={19} strokeWidth={1.8} /></span>
              <span className="mobile-nav-name">{link.name}</span>
              <ArrowUpRight className="mobile-nav-arrow" size={16} />
            </a>
          ))}
          </div>
          <div className="mobile-menu-footer">
            <span>Have something in mind?</span>
          <a
            href="#contact"
            className="btn-primary-pill mobile-menu-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Let's Connect</span>
            <ArrowRight size={16} />
          </a>
          </div>
        </nav>
        </>
      )}
    </header>
  );
}
