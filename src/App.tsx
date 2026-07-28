import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import IntroLoader from './components/IntroLoader';
import FloatingNavbar from './components/FloatingNavbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <ThemeProvider>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      <div style={{ background: 'var(--bg)', overflowX: 'clip' }}>
        {introDone && <FloatingNavbar />}
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}
