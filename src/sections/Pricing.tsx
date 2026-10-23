import React, { useRef, useEffect } from 'react';
import { PRICING_DATA } from '../data/siteData';
import { getSectionConfig } from '../config/sectionsConfig';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';

export const Pricing: React.FC = () => {
  const sectionInfo = getSectionConfig('pricing');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Center the "Recommended" plan (index 1) by default on mount on mobile
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth * 0.88;
      // Scroll to center index 1
      container.scrollLeft = cardWidth * 0.85;
    }
  }, []);

  return (
    <section id="pricing" className="py-12 md:py-24 bg-grain border-b border-ink/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="mb-8 pb-4 border-b border-ink/15">
            <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-1.5 font-bold">
              [ SECTION {sectionInfo.number} ] • PRICING
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="font-display font-black text-[clamp(1.85rem,6vw,3.75rem)] uppercase tracking-tight text-ink leading-none">
                Simple{' '}
                <span className="font-serif italic font-normal text-vermilion-text lowercase block sm:inline">
                  pricing.
                </span>
              </h2>
              <p className="font-sans text-ink-muted text-sm sm:text-base max-w-md leading-relaxed">
                No hidden fees, no agency bloat. Clear scopes with 1 year support included.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Horizontal Swipe Carousel on Mobile (88% width, snap), Grid on Desktop */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-none pt-6 pb-6 px-1 md:px-0 md:grid md:grid-cols-3 md:gap-6 items-stretch select-none"
        >
          {PRICING_DATA.plans.map((plan) => {
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.name}
                className={`w-[88vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto relative bg-card rounded-lg flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted 
                    ? 'border-2 border-ink shadow-lift z-20 md:-translate-y-1' 
                    : 'border border-ink/15 shadow-mobile-soft md:shadow-card z-10'
                }`}
              >
                {/* Stamp Badge onto Recommended Plan */}
                {isHighlighted && plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 bg-vermilion-text text-paper font-mono text-[11px] font-bold px-3.5 py-1 rounded-badge shadow-md border border-ink whitespace-nowrap flex items-center gap-1.5 pointer-events-none">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className={`p-5 sm:p-6 ${isHighlighted ? 'bg-paper-dark/30' : ''}`}>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-1.5">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed min-h-[36px]">
                    {plan.idealFor}
                  </p>
                </div>

                <div className="flex-1 p-5 sm:p-6 pt-0 border-t border-ink/10 flex flex-col justify-between">
                  {/* 4 to 5 Short Bullets per Plan */}
                  <ul className="space-y-2.5 my-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${isHighlighted ? 'bg-vermilion-text text-paper' : 'bg-ink/10 text-ink'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-sans text-xs sm:text-sm text-ink-muted leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons: Start with Starter/Business/Premium */}
                  <a
                    href="#contact"
                    className={`w-full min-h-[44px] flex items-center justify-center gap-2 font-sans font-bold text-sm py-3 rounded-badge transition-all ${
                      isHighlighted
                        ? 'bg-vermilion-text hover:bg-vermilion-dark text-paper border-2 border-ink shadow-sm'
                        : 'bg-paper hover:bg-paper-dark text-ink border border-ink/30'
                    }`}
                  >
                    <span>Start with {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Under it: One line notice */}
        <div className="mt-6 text-center font-mono text-xs sm:text-sm font-bold text-ink">
          Websites starting from ₹9,999.
        </div>

      </div>
    </section>
  );
};
