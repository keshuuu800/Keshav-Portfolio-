import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import ResumeButton from './ResumeButton';

const NAV_ITEMS = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll spy for active section
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 150) {
        setActiveSection('HOME');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].toUpperCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(label);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none"
    >
      <nav
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-full transition-all duration-300 shadow-2xl border"
        style={{
          background: 'rgba(12, 12, 12, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderColor: isScrolled ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        }}
      >
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.label)}
                className={`relative px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full z-0"
                    style={{
                      background: 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex flex-col items-center">
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="w-3 h-[2px] rounded-full mt-0.5"
                      style={{ background: 'linear-gradient(90deg, #7621B0, #B600A8)' }}
                    />
                  )}
                </span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-4 w-[1px] bg-white/20 mx-1 sm:mx-2 flex-shrink-0" />

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <ResumeButton />
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
