'use client';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const reduce = useReducedMotion();
  if (reduce) return null;
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-rose-400 via-pink-300 to-orange-200 shadow-[0_0_14px_rgba(251,113,133,.65)]" style={{ scaleX }} />;
}
