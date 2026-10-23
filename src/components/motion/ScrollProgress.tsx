import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SECTIONS_LIST } from '../../config/sectionsConfig';

export const ScrollProgress: React.FC<{ activeSectionIndex?: number }> = ({
  activeSectionIndex = 0,
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 30 });

  const currentSection = SECTIONS_LIST[activeSectionIndex] || SECTIONS_LIST[0];

  return (
    <>
      {/* Top Red Scroll Progress Bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-1 bg-vermilion z-[100] pointer-events-none"
      />

      {/* Slim Vertical Section Rail (Desktop 1024px+ only) */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 py-4 px-2 bg-ink/90 text-paper border border-paper/20 rounded-full shadow-lift backdrop-blur-md pointer-events-none select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" />
        
        {/* Progress Line */}
        <div className="w-[2px] h-14 bg-paper/20 rounded-full relative overflow-hidden">
          <motion.div
            className="w-full bg-vermilion absolute top-0 left-0"
            animate={{
              height: `${((activeSectionIndex + 1) / SECTIONS_LIST.length) * 100}%`,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Counter Number */}
        <span className="font-mono text-[10px] font-bold tracking-wider text-paper text-center">
          {currentSection.number}
        </span>

        {/* Vertical Section Name */}
        <span
          className="font-mono text-[9px] uppercase tracking-widest text-paper-dark font-bold writing-mode-vertical"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {currentSection.navLabel}
        </span>
      </div>
    </>
  );
};

