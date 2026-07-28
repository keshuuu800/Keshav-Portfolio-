import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function AvatarPortrait() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // ── Parallax spring ───────────────────────────────────────────────────────
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 35, damping: 16, mass: 1.3 };
  const px = useSpring(useTransform(rawX, [-1, 1], [-7, 7]), springCfg);
  const py = useSpring(useTransform(rawY, [-1, 1], [-4, 4]), springCfg);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => { rawX.set(0); rawY.set(0); };
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      style={{ x: px, y: py, willChange: 'transform', position: 'relative', display: 'inline-flex' }}
    >
      {/*
       * ── Atmosphere layer ────────────────────────────────────────────────
       * Dark mode  : purple-magenta glow behind character
       * Light mode : soft warm-gray ellipse that "grounds" the dark jacket
       *              so it transitions naturally into the light background
       *              instead of appearing as a harsh black silhouette.
       * Both modes : no border, no box — pure radial gradient only.
       */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-18% -20%',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'background 0.45s ease',
          background: isDark
            ? 'radial-gradient(ellipse 80% 72% at 50% 54%, rgba(118,33,176,0.30) 0%, rgba(182,0,168,0.13) 44%, transparent 74%)'
            : 'radial-gradient(ellipse 80% 72% at 50% 54%, rgba(180,170,165,0.38) 0%, rgba(160,152,148,0.18) 44%, transparent 74%)',
        }}
      />

      {/*
       * ── Ground shadow ───────────────────────────────────────────────────
       * Gives the character a sense of weight / grounding.
       */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '3%',
          left: '18%',
          right: '18%',
          height: '5%',
          borderRadius: '50%',
          filter: isDark ? 'blur(26px)' : 'blur(18px)',
          background: isDark ? 'rgba(0,0,0,0.50)' : 'rgba(60,50,50,0.14)',
          pointerEvents: 'none',
          transition: 'background 0.45s ease, filter 0.45s ease',
          zIndex: 0,
        }}
      />

      {/*
       * ── Avatar image ────────────────────────────────────────────────────
       * Uses avatar.png — already has true alpha transparency.
       * drop-shadow filter respects the alpha channel so the shadow
       * follows the character silhouette, not the bounding box.
       * No mask-image. No clip. No background.
       */}
      <motion.img
        src="/images/avatar.png"
        alt="Keshav Gupta"
        draggable={false}
        initial={{ opacity: 0, y: 24 }}
        animate={{
          opacity: 1,
          y: [0, -3, 0],
          scale: [1, 1.010, 1],
        }}
        transition={{
          opacity: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] },
          y: {
            delay: 0.85,
            duration: 5.5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          scale: {
            delay: 0.85,
            duration: 6.5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
        }}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'block',
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '85vh',
          objectFit: 'contain',
          background: 'transparent',
          userSelect: 'none',
          willChange: 'transform',
          /*
           * drop-shadow follows the transparent silhouette of the PNG —
           * unlike box-shadow which wraps the rectangular bounding box.
           * Provides depth without any harsh box effect in light mode.
           */
          filter: isDark
            ? 'drop-shadow(0 28px 48px rgba(0,0,0,0.55))'
            : 'drop-shadow(0 20px 36px rgba(40,30,30,0.22))',
          transition: 'filter 0.45s ease',
        }}
      />
    </motion.div>
  );
}
