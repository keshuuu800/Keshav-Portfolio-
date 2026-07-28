import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const GREETINGS = ['Hello', 'Namaste', 'Bonjour', 'Hola', 'こんにちは', 'Ciao', "Hi, I'm Keshav Gupta"];
const STEP_MS = 520;

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < GREETINGS.length - 1) {
      const t = setTimeout(() => setIndex((i) => i + 1), STEP_MS);
      return () => clearTimeout(t);
    }
    const holdLast = setTimeout(() => setVisible(false), STEP_MS + 500);
    return () => clearTimeout(holdLast);
  }, [index]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'var(--bg)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className="hero-heading font-black uppercase tracking-tight text-center px-6"
              style={{
                fontSize:
                  GREETINGS[index].length > 8
                    ? 'clamp(1.75rem, 6vw, 3.75rem)'
                    : 'clamp(2.5rem, 8vw, 6rem)',
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {GREETINGS[index]}
            </motion.span>
          </AnimatePresence>

          <button
            onClick={() => setVisible(false)}
            className="absolute bottom-8 sm:bottom-10 uppercase tracking-widest text-xs sm:text-sm font-medium opacity-50 hover:opacity-90 transition-opacity"
            style={{ color: 'var(--text)' }}
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
