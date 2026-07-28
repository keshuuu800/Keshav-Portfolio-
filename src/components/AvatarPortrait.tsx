import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function AvatarPortrait() {


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
          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.30))',
        }}
      />
    </motion.div>
  );
}
