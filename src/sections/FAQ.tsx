import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../data/siteData';
import { getSectionConfig } from '../config/sectionsConfig';
import { Plus } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { getWhatsAppUrl } from '../data/cta';

export const FAQ: React.FC = () => {
  const sectionInfo = getSectionConfig('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-24 bg-paper border-b border-ink/15 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="mb-8 pb-4 border-b border-ink/15 text-left">
            <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-1.5 font-bold">
              [ SECTION {sectionInfo.number} ] • FAQ
            </div>
            <h2 className="font-display font-black text-[clamp(1.45rem,5.5vw,3.5rem)] uppercase tracking-tight text-ink leading-tight">
              Clear Answers to{' '}
              <span className="font-serif italic font-normal text-vermilion-text lowercase inline">
                common questions.
              </span>
            </h2>
            <p className="font-sans text-ink-muted text-sm sm:text-base mt-2 max-w-xl">
              Everything you need to know about pricing, timelines, mobile compatibility, and our design process.
            </p>
          </div>
        </Reveal>

        {/* Compact Accordion List with 56px+ Rows & Spring Animations */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="bg-card border border-ink/15 rounded-lg overflow-hidden shadow-mobile-soft hover:border-ink/30 transition-colors">
                  {/* Clean 56px+ Tappable Row */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left px-5 min-h-[56px] flex items-center justify-between gap-4 font-sans focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-ink group-hover:text-vermilion-text transition-colors leading-snug">
                      {item.q}
                    </span>

                    {/* Plus Icon Rotating 45deg to a Cross */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-vermilion-text text-paper border-vermilion-text' : 'bg-paper text-ink border-ink/20'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.div>
                  </button>

                  {/* Spring Animated Expansion Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="px-5 pb-5 pt-2 border-t border-ink/10 font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Extra Question Note */}
        <div className="mt-8 text-center font-mono text-xs text-ink-muted">
          HAVE A SPECIFIC QUESTION NOT LISTED HERE?{' '}
          <a
            href={getWhatsAppUrl("Hi Kunj Technologies! I have a question that wasn't in your FAQ:")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-vermilion-text font-bold underline hover:text-vermilion-dark"
          >
            ASK US DIRECTLY ON WHATSAPP →
          </a>
        </div>

      </div>
    </section>
  );
};
