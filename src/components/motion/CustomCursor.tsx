import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run on desktop / pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else if (target.closest('a, button, input, select, textarea')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden hidden md:block">
      {/* Follower Ring / Badge */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? (cursorText ? 1.25 : 1.4) : 1,
          backgroundColor: cursorText ? 'rgba(17, 17, 16, 0.92)' : 'rgba(17, 17, 16, 0.08)',
          borderColor: isHovered ? 'rgba(194, 47, 23, 0.6)' : 'rgba(17, 17, 16, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className={`fixed top-0 left-0 border backdrop-blur-sm flex items-center justify-center font-mono font-bold uppercase tracking-wider text-paper shadow-sm ${
          cursorText ? 'px-3 py-1.5 rounded-full text-[10px]' : 'w-8 h-8 rounded-full'
        }`}
      >
        {cursorText && <span className="select-none text-paper whitespace-nowrap">{cursorText}</span>}
      </motion.div>

      {/* Center Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? '#C22F17' : '#FF4B2B',
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none"
      />
    </div>
  );
};
