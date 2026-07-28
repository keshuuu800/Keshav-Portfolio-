import { motion } from 'framer-motion';
import type { ReactNode, ElementType, CSSProperties } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

// IMPORTANT: motion.create() must NEVER be called inside a component's render
// body — doing so creates a brand-new component type on every render, which
// makes React tear down and remount the whole subtree each time (this was the
// cause of the "double" ghosting: frequent re-renders elsewhere in the tree
// were forcing FadeIn to remount continuously, replaying its entrance
// animation and briefly showing both the old and new frame).
// Caching one motion component per tag keeps the component type stable.
const motionTagCache = new Map<ElementType, any>();

function getMotionTag(as: ElementType): any {
  let Cached = motionTagCache.get(as);
  if (!Cached) {
    Cached = motion.create(as);
    motionTagCache.set(as, Cached);
  }
  return Cached;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  const MotionTag = getMotionTag(as);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}