import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BRAND_NAME, BRAND_INITIALS, BRAND_LOGO_MARK, CURRENT_YEAR } from '../data/siteData';

export const IntroLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 100);
          return 100;
        }
        return prev + 20; // ~125ms total load for ultra-fast <800ms experience
      });
    }, 25);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(timer);
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, shouldReduceMotion]);

  return (
    <motion.div
      onClick={onComplete}
      initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1 }}
      exit={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        opacity: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[100] bg-ink text-paper flex flex-col justify-between p-6 md:p-12 font-mono select-none cursor-pointer"
    >
      <div className="flex justify-between items-center text-xs md:text-sm tracking-widest text-paper-dark border-b border-paper/20 pb-4">
        <span className="flex items-center gap-2">
          <motion.span 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2.5 h-2.5 rounded-full bg-vermilion" 
          />
          LOADING (TAP ANYWHERE TO SKIP)
        </span>
        <span className="font-mono text-vermilion">{BRAND_INITIALS} © {CURRENT_YEAR}</span>
      </div>

      <div className="my-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase text-vermilion tracking-widest mb-3 font-mono flex items-center gap-2.5"
        >
          <img
            src={BRAND_LOGO_MARK}
            alt={BRAND_NAME}
            width={24}
            height={16}
            className="h-5 w-auto object-contain shrink-0"
          />
          <span className="px-2 py-0.5 border border-vermilion/40 rounded-badge">{BRAND_NAME.toUpperCase()}</span>
          <span>[ 00 / 01 ]</span>
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight tracking-tight"
          >
            "YOUR SHOP IS OPEN 10 HOURS A DAY. <br className="hidden sm:block"/>
            <span className="font-serif italic font-normal text-vermilion lowercase">your website</span> IS OPEN 24."
          </motion.h2>
        </div>
      </div>

      <div className="flex items-end justify-between border-t border-paper/20 pt-4">
        <div>
          <span className="text-4xl md:text-6xl font-bold font-display tracking-tighter tabular-nums">{percent}%</span>
          <span className="block text-xs text-paper-dark font-sans uppercase mt-1">TAP ANYWHERE TO ENTER ↵</span>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onComplete();
          }}
          className="text-xs font-mono uppercase bg-paper/10 hover:bg-vermilion hover:text-ink transition-colors px-4 py-2 rounded-badge border border-paper/30"
        >
          SKIP [ESC] ↵
        </button>
      </div>
    </motion.div>
  );
};
