import React from 'react';
import { motion, useMotionValue, useSpring, useScroll, useVelocity, useTransform } from 'framer-motion';
import { HERO_DATA, MOCKUP_SITES, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/siteData';
import { ArrowRight, MapPin, Smartphone } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { Magnetic } from '../components/motion/Magnetic';

export const Hero: React.FC = () => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 20 };
  const mouseX = useSpring(rawX, springConfig);
  const mouseY = useSpring(rawY, springConfig);

  // Parallax transforms directly bound to motion values (no setState)
  const desktopX = useTransform(mouseX, [-20, 20], [-10, 10]);
  const desktopY = useTransform(mouseY, [-20, 20], [-10, 10]);
  const phoneX = useTransform(mouseX, [-20, 20], [15, -15]);
  const phoneY = useTransform(mouseY, [-20, 20], [15, -15]);

  // Marquee scroll velocity acceleration
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const marqueeVelocity = useTransform(smoothVelocity, [-1000, 0, 1000], [-30, 0, 30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    rawX.set((clientX / innerWidth - 0.5) * 20);
    rawY.set((clientY / innerHeight - 0.5) * 20);
  };

  const site0 = MOCKUP_SITES[0];
  const site1 = MOCKUP_SITES[1];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <section
        id="hero"
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden bg-grain flex flex-col"
        style={{ minHeight: '100svh' }}
      >
        {/* ═══ MOBILE HERO (< md) ═══ */}
        <div className="md:hidden flex flex-col justify-between flex-1 pt-20 pb-4 px-5">
          
          {/* Tagline */}
          <Reveal delay={0.05}>
            <div className="font-mono text-[12px] text-vermilion-text uppercase tracking-widest font-bold mt-2">
              {HERO_DATA.badgeText}
            </div>
          </Reveal>

          {/* Headline — clamp to fit 360–430px without wrap */}
          <div className="mt-4">
            <h1 className="font-display font-black text-[clamp(1.85rem,7.5vw,2.75rem)] text-ink leading-[0.98] tracking-tight uppercase">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="block"
                >
                  {HERO_DATA.headlineMain}
                </motion.span>
              </div>

              <div className="overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                  className="block"
                >
                  <span className="relative inline-block font-serif italic font-normal text-vermilion-text lowercase">
                    {HERO_DATA.headlineAccent}
                    <svg
                      className="absolute left-0 -bottom-1.5 w-full h-2.5 text-vermilion-text pointer-events-none"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M3 9C50 3 150 3 197 9"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                      />
                    </svg>
                  </span>
                </motion.span>
              </div>
            </h1>
          </div>

          {/* Subline — max 2 lines */}
          <Reveal delay={0.3}>
            <p className="text-base font-sans text-ink-muted leading-[1.6] mt-3 max-w-[340px]">
              {HERO_DATA.subheading}
            </p>
          </Reveal>

          {/* CTAs — stacked: primary button + text link */}
          <div className="flex flex-col gap-3 mt-5">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
              }}
              className="flex items-center justify-center gap-2.5 bg-vermilion-text text-paper font-sans font-bold text-base px-6 py-3.5 rounded-badge border-2 border-ink shadow-stamp active:scale-95 transition-transform min-h-[48px]"
            >
              <span>Get Your Website</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="text-center font-sans font-semibold text-sm text-ink-muted underline underline-offset-4 decoration-ink/30 active:text-vermilion-text transition-colors min-h-[44px] flex items-center justify-center"
            >
              View Our Work ↓
            </a>
          </div>

          {/* ── Mobile Mockup Composition ── */}
          <div className="relative mt-6 mb-2 flex-1 min-h-[200px] max-h-[360px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="animate-mockup-float w-full max-w-[320px] mx-auto"
            >
              {/* Browser Frame */}
              <div className="bg-white border border-ink/20 rounded-xl overflow-hidden shadow-mobile-soft">
                <div className="bg-ink text-paper px-3 py-2 flex items-center justify-between border-b border-ink/20 text-[11px] font-mono">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  </div>
                  <span className="truncate text-paper/60 text-[10px] font-mono font-bold">
                    {site0.url}
                  </span>
                  <span className="text-[9px] text-vermilion bg-paper px-1.5 py-0.5 rounded font-bold">DEMO</span>
                </div>

                <div
                  className="p-4 font-sans min-h-[160px] overflow-hidden"
                  style={{ backgroundColor: site0.theme.bg, color: site0.theme.title }}
                >
                  <div className="animate-mockup-content-scroll">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[11px] font-mono px-2 py-0.5 rounded border border-current font-bold uppercase"
                        style={{ color: site0.theme.accent }}
                      >
                        {site0.category}
                      </span>
                      <span className="text-[10px] font-mono opacity-80 flex items-center gap-1 font-semibold" style={{ color: site0.theme.muted }}>
                        <MapPin className="w-3 h-3" />
                        {site0.clientLocation}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg leading-tight mb-2" style={{ color: site0.theme.title }}>
                      {site0.title}
                    </h3>
                    <p className="text-[13px] font-serif italic opacity-90 leading-relaxed" style={{ color: site0.theme.body }}>
                      "{site0.previewText}"
                    </p>
                    <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between font-mono">
                      <span className="font-bold text-[11px]" style={{ color: site0.theme.accent }}>
                        {site0.badgeText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Frame — overlapping bottom-right */}
              <div className="absolute -bottom-4 -right-2 w-[120px] bg-ink text-paper border border-ink/40 rounded-xl p-2 shadow-mobile-soft rotate-2 z-10">
                <div className="w-10 h-1.5 bg-paper/20 rounded-full mx-auto mb-1.5" />
                <div
                  className="p-2.5 rounded-lg min-h-[80px] flex flex-col justify-between"
                  style={{ backgroundColor: site1.theme.bg, color: site1.theme.title }}
                >
                  <div>
                    <span className="text-[8px] font-mono uppercase px-1.5 py-0.5 bg-black/40 rounded text-amber-400 font-bold">
                      {site1.category}
                    </span>
                    <h4 className="font-display font-bold text-[10px] mt-1.5 leading-snug">
                      {site1.title}
                    </h4>
                  </div>
                  <div className="text-[8px] font-mono text-amber-400 font-bold border-t border-white/10 pt-1.5 flex items-center gap-1">
                    <Smartphone className="w-2.5 h-2.5" />
                    <span>RESPONSIVE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ═══ DESKTOP HERO (md+) ═══ */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full pt-36 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Headline & Actions */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-6">
                <Reveal delay={0.1}>
                  <div className="flex flex-wrap items-center gap-3">
                    <motion.span
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: -1.5 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      className="stamp-badge bg-vermilion-text text-paper"
                    >
                      {HERO_DATA.badgeText}
                    </motion.span>
                    <span className="font-mono text-xs text-ink-muted uppercase tracking-wider flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      AVAILABLE FOR NEW PROJECTS
                    </span>
                  </div>
                </Reveal>

                {/* Single H1 with line by line clip mask reveal */}
                <h1 className="font-display font-black text-[clamp(2.25rem,8vw,4.5rem)] text-ink leading-[0.98] tracking-tight uppercase space-y-1.5 overflow-hidden">
                  <div className="overflow-hidden">
                    <motion.span
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                      className="block"
                    >
                      {HERO_DATA.headlineMain}
                    </motion.span>
                  </div>

                  <div className="overflow-hidden pb-1">
                    <motion.span
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                      className="block"
                    >
                      <span className="relative inline-block font-serif italic font-normal text-vermilion-text lowercase">
                        {HERO_DATA.headlineAccent}
                        <svg
                          className="absolute left-0 -bottom-2 w-full h-3 text-vermilion-text pointer-events-none"
                          viewBox="0 0 200 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <motion.path
                            d="M3 9C50 3 150 3 197 9"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
                          />
                        </svg>
                      </span>
                    </motion.span>
                  </div>
                </h1>

                <Reveal delay={0.4}>
                  <p className="text-base sm:text-lg md:text-xl font-sans text-ink-muted max-w-2xl leading-relaxed">
                    {HERO_DATA.subheading}
                  </p>
                </Reveal>

                {/* Primary CTA (Red) & Secondary CTA (Outline/Ink) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Magnetic strength={0.25}>
                    <a
                      href="#contact"
                      className="group flex items-center justify-center gap-2.5 bg-vermilion-text hover:bg-vermilion-dark text-paper font-sans font-bold text-base px-8 py-4 rounded-badge border-2 border-ink shadow-stamp hover:shadow-stamp-hover transition-all duration-200"
                    >
                      <span>Get Your Website</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Magnetic>

                  <Magnetic strength={0.25}>
                    <a
                      href="#work"
                      className="flex items-center justify-center gap-2 bg-paper-dark hover:bg-paper text-ink font-sans font-bold text-base px-8 py-4 rounded-badge border border-ink/30 hover:border-ink/60 transition-all duration-200"
                    >
                      <span>View Our Work</span>
                    </a>
                  </Magnetic>
                </div>

                <Reveal delay={0.5}>
                  <div className="pt-2 space-y-2 font-mono text-xs text-ink-muted">
                    <div className="bg-paper-dark/60 border border-ink/15 p-2.5 rounded-stamp text-ink flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-vermilion flex-shrink-0" />
                      <span><strong>Darshan Jogi</strong> • Independent Web Developer • Message me directly for custom sites.</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Parallax Mockups */}
              <div className="lg:col-span-6 xl:col-span-6 relative mt-6 lg:mt-0">
                <div className="relative w-full max-w-xl xl:max-w-2xl mx-auto">
                  
                  {/* Primary Desktop Browser Frame */}
                  <motion.div 
                    style={{ x: desktopX, y: desktopY }}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    className="bg-white border-2 border-ink rounded-xl overflow-hidden shadow-lift -rotate-1 hover:rotate-0 transition-transform duration-300 w-full"
                  >
                    <div className="bg-ink text-paper px-4 py-2.5 flex items-center justify-between border-b-2 border-ink text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                      </div>
                      <span className="truncate text-paper-dark text-xs font-mono font-bold">
                        {site0.url}
                      </span>
                      <span className="text-xs text-vermilion-text bg-paper px-2 py-0.5 rounded font-bold">DEMO</span>
                    </div>

                    <div
                      className="p-6 sm:p-8 font-sans min-h-[340px] sm:min-h-[380px] flex flex-col justify-between"
                      style={{ backgroundColor: site0.theme.bg, color: site0.theme.title }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="text-xs sm:text-sm font-mono px-3 py-1 rounded border border-current font-bold uppercase"
                            style={{ color: site0.theme.accent }}
                          >
                            {site0.category}
                          </span>
                          <span className="text-xs sm:text-sm font-mono opacity-80 flex items-center gap-1 font-semibold" style={{ color: site0.theme.muted }}>
                            <MapPin className="w-4 h-4" />
                            {site0.clientLocation}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3" style={{ color: site0.theme.title }}>
                          {site0.title}
                        </h3>
                        <p className="text-sm sm:text-base font-serif italic mb-5 opacity-90 leading-relaxed" style={{ color: site0.theme.body }}>
                          "{site0.previewText}"
                        </p>
                      </div>

                      <div className="pt-4 border-t border-black/10 flex items-center justify-between font-mono">
                        <span className="font-bold text-xs sm:text-sm" style={{ color: site0.theme.accent }}>
                          {site0.badgeText}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Phone Frame */}
                  <motion.div
                    style={{ x: phoneX, y: phoneY }}
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                    className="absolute -bottom-6 -right-2 sm:-right-6 w-52 sm:w-64 bg-ink text-paper border-2 border-ink rounded-2xl p-3 shadow-lift rotate-3 hover:rotate-0 transition-transform duration-300 z-20"
                  >
                    <div className="w-12 sm:w-16 h-3 bg-paper/20 rounded-full mx-auto mb-2.5" />
                    <div
                      className="p-4 rounded-xl min-h-[160px] sm:min-h-[190px] flex flex-col justify-between"
                      style={{ backgroundColor: site1.theme.bg, color: site1.theme.title }}
                    >
                      <div>
                        <span className="text-xs font-mono uppercase px-2 py-0.5 bg-black/40 rounded text-amber-400 font-bold">
                          {site1.category}
                        </span>
                        <h4 className="font-display font-bold text-sm sm:text-base mt-2.5 leading-snug">
                          {site1.title}
                        </h4>
                      </div>
                      <div className="text-xs font-mono text-amber-400 font-bold border-t border-white/10 pt-2.5 flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>MOBILE RESPONSIVE</span>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Marquee Ticker — shared */}
        <div className="mt-auto border-y border-ink/20 bg-ink text-paper py-3 md:py-3.5 overflow-hidden select-none">
          <motion.div 
            style={{ x: marqueeVelocity }}
            className="flex whitespace-nowrap animate-marquee font-mono text-[11px] md:text-sm font-bold tracking-widest"
          >
            {HERO_DATA.marqueeItems.concat(HERO_DATA.marqueeItems).map((item, idx) => (
              <span key={idx} className="flex items-center mx-4 md:mx-6">
                <span className="text-vermilion mr-2 md:mr-3">✦</span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Author Intro Strip (moved below hero on mobile) ── */}
      <div className="md:hidden bg-paper-dark/50 border-b border-ink/10 px-5 py-3 flex items-center gap-2 font-mono text-[11px] text-ink-muted">
        <span className="w-2 h-2 rounded-full bg-vermilion flex-shrink-0" />
        <span><strong className="text-ink">Darshan Jogi</strong> • Independent Web Developer • Message me directly.</span>
      </div>
    </>
  );
};
