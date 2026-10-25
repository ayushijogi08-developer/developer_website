import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MERGED_SERVICES_DATA } from '../data/siteData';
import { getSectionConfig } from '../config/sectionsConfig';
import { ChevronDown, Check, Sparkles } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { CTA_CONFIG } from '../data/cta';
import { CtaButton } from '../components/CtaButton';

export const Services: React.FC = () => {
  const sectionInfo = getSectionConfig('services');
  const [expandedId, setExpandedId] = useState<string | null>(MERGED_SERVICES_DATA[0].id);

  const activeService = MERGED_SERVICES_DATA.find((s) => s.id === expandedId) || MERGED_SERVICES_DATA[0];

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-14 md:py-28 bg-grain border-b border-ink/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="mb-10 pb-6 border-b border-ink/15">
            <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest font-bold mb-2">
              [ SECTION {sectionInfo.number} ] • SERVICES
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="font-display font-black text-[clamp(2rem,7vw,4rem)] uppercase tracking-tight text-ink leading-none">
                Websites for{' '}
                <span className="font-serif italic font-normal text-vermilion-text lowercase block sm:inline">
                  every trade.
                </span>
              </h2>
              <p className="font-sans text-ink-muted text-base max-w-md leading-relaxed">
                Pick your industry. We'll build a site that speaks your customers' language and delivers enquiries.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Services Accordion Column */}
          <div className="lg:col-span-7 space-y-3">
            {MERGED_SERVICES_DATA.map((service, index) => {
              const isOpen = expandedId === service.id;

              return (
                <Reveal key={service.id} delay={index * 0.05}>
                  <div className={`bg-card border rounded-lg overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-ink/40 shadow-mobile-soft' : 'border-ink/15 hover:border-ink/30'
                  }`}>
                    {/* Clean 56px+ Tappable Row */}
                    <button
                      onClick={() => toggleAccordion(service.id)}
                      className="w-full min-h-[56px] px-5 py-4 flex items-center justify-between gap-4 text-left font-sans focus:outline-none cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="font-mono text-xs font-bold text-vermilion-text bg-vermilion/10 px-2 py-0.5 rounded border border-vermilion/20">
                          {service.id}
                        </span>
                        <div>
                          <h3 className="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-vermilion-text transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen ? 'bg-vermilion-text text-paper border-vermilion-text' : 'bg-paper text-ink border-ink/20'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    {/* Open state: 3 points + text link */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="px-5 pb-5 pt-2 border-t border-ink/10 space-y-3">
                            <p className="font-sans text-sm text-ink-muted leading-relaxed">
                              {service.description}
                            </p>

                            {/* 3 Points */}
                            <div className="space-y-2 pt-1 font-sans">
                              {service.deliverables.slice(0, 3).map((point, pIdx) => (
                                <div key={pIdx} className="flex items-start gap-2 text-sm text-ink font-medium">
                                  <span className="w-4 h-4 rounded-full bg-emerald-700/15 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px]">
                                    <Check className="w-3 h-3" />
                                  </span>
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}

            {/* Tertiary Action under Services List */}
            <div className="pt-2">
              <CtaButton cta={CTA_CONFIG.servicesTertiary} />
            </div>
          </div>

          {/* Desktop Preview Card (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="bg-card border border-ink/20 rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between pb-3 border-b border-ink/10 mb-4 font-mono text-xs">
                <span className="flex items-center gap-1.5 font-bold text-ink">
                  <Sparkles className="w-4 h-4 text-vermilion-text" />
                  SELECTED SERVICE
                </span>
                <span className="text-ink-muted">SERVICE {activeService.id}</span>
              </div>

              <motion.div
                key={activeService.id}
                initial={{ opacity: 0.8, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-lg border flex flex-col justify-between"
                style={{
                  backgroundColor: activeService.theme.bg,
                  borderColor: activeService.theme.tagBorder,
                }}
              >
                <div>
                  <div
                    className="inline-block px-2.5 py-1 rounded font-mono text-xs font-bold uppercase mb-3 border"
                    style={{
                      backgroundColor: activeService.theme.tagBg,
                      color: activeService.theme.tagText,
                      borderColor: activeService.theme.tagBorder,
                    }}
                  >
                    {activeService.tagline}
                  </div>

                  <h3
                    className="font-display font-bold text-2xl mb-2"
                    style={{ color: activeService.theme.title }}
                  >
                    {activeService.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed font-sans mb-4"
                    style={{ color: activeService.theme.body }}
                  >
                    {activeService.description}
                  </p>
                </div>

                <div
                  className="pt-4 border-t space-y-2"
                  style={{ borderColor: activeService.theme.divider }}
                >
                  <span
                    className="font-mono text-xs uppercase font-bold tracking-wider block mb-2"
                    style={{ color: activeService.theme.muted }}
                  >
                    WHAT YOU GET:
                  </span>
                  {activeService.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold">
                      <span style={{ color: activeService.theme.accent }} className="font-bold">✓</span>
                      <span style={{ color: activeService.theme.body }}>{del}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
