import React, { useRef } from 'react';
import usePortfolioMotion from './hooks/usePortfolioMotion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const appRef = useRef(null);
  const progressRef = useRef(null);
  usePortfolioMotion(appRef, progressRef);
  return (
    <div className="portfolio-app" ref={appRef}>
      <div className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
