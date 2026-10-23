import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';

export const FirstClientsOffer: React.FC = () => {
  return (
    <section id="offer" className="py-10 md:py-14 bg-vermilion/10 border-y border-vermilion/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-card border border-vermilion md:border-2 rounded-lg p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-mobile-soft md:shadow-lift">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-vermilion-text bg-vermilion/15 px-3 py-1 rounded-badge uppercase border border-vermilion/30">
                <Sparkles className="w-3.5 h-3.5" />
                FOUNDING CLIENT OFFER
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                First 3 Clients Get a Special Price
              </h3>
              <p className="font-sans text-base text-ink-muted leading-relaxed max-w-2xl">
                I am taking on my first 3 portfolio clients at a discounted rate. In return, I ask for honest feedback and permission to showcase the finished site on this portfolio.
              </p>
            </div>

            <a
              href="#contact"
              className="w-full md:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 bg-vermilion-text hover:bg-vermilion-dark text-paper font-sans font-bold text-base px-6 py-3.5 min-h-[44px] rounded-badge border-2 border-ink shadow-sm transition-all"
            >
              <span>Get a free homepage preview</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
