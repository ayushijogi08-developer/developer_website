import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { PROCESS_DATA } from '../data/siteData';
import { getSectionConfig } from '../config/sectionsConfig';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';

export const Process: React.FC = () => {
  const sectionInfo = getSectionConfig('process');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"]
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  return (
    <section id="process" className="py-12 md:py-24 bg-paper border-b border-ink/15 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="mb-10 pb-6 border-b border-ink/15">
            <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-1.5 font-bold">
              [ SECTION {sectionInfo.number} ] • HOW IT WORKS
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-display font-black text-[clamp(1.85rem,6vw,3.75rem)] uppercase tracking-tight text-ink leading-none">
                Five Simple{' '}
                <span className="font-serif italic font-normal text-vermilion-text lowercase block sm:inline">
                  steps.
                </span>
              </h2>
              <p className="font-sans text-ink-muted text-sm sm:text-base max-w-sm leading-relaxed">
                From WhatsApp chat to live website. No complex agency process.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Timeline Container: Continuous line on the LEFT */}
        <div ref={containerRef} className="relative pl-8 sm:pl-10">
          
          {/* Continuous Line Track */}
          <div className="absolute left-3.5 sm:left-4 top-3 bottom-3 w-0.5 bg-ink/15 z-0">
            {/* Scroll Fill Bar */}
            <motion.div
              style={{ scaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-vermilion-text"
            />
          </div>

          <div className="space-y-7 relative z-10">
            {PROCESS_DATA.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative flex items-start gap-4 group"
              >
                {/* Numbered Node on the Line */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -left-8 sm:-left-10 top-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-paper border-2 border-ink text-ink font-mono text-xs font-bold flex items-center justify-center shadow-sm z-20 group-hover:border-vermilion-text group-hover:bg-vermilion-text group-hover:text-paper transition-colors"
                >
                  {item.step}
                </motion.div>

                {/* Simple Text Block: Title + One Line */}
                <div className="bg-card border border-ink/15 rounded-lg p-4 sm:p-5 w-full shadow-mobile-soft hover:border-ink/30 transition-all">
                  <h3 className="font-display font-bold text-base sm:text-lg text-ink mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Compact CTA Banner */}
        <Reveal delay={0.3}>
          <div className="mt-10 bg-paper-dark border border-ink/15 p-5 sm:p-6 rounded-lg shadow-mobile-soft flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-ink">Ready to get started?</h4>
              <p className="font-sans text-xs sm:text-sm text-ink-muted">Send us a WhatsApp message to discuss your website.</p>
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto flex-shrink-0 min-h-[44px] bg-vermilion-text hover:bg-vermilion-dark text-paper font-sans font-bold text-sm px-6 py-3 rounded-badge border border-ink shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Get Your Website</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
