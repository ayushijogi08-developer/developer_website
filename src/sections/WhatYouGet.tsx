import React from 'react';
import { getSectionConfig } from '../config/sectionsConfig';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';

interface ChecklistGroup {
  heading: string;
  items: string[];
}

const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    heading: "Design & Brand Identity",
    items: [
      "Custom layout designed for your trade",
      "Colors and fonts match your brand",
      "High quality photo & video gallery",
      "Mobile first responsive page structure"
    ]
  },
  {
    heading: "Speed & Direct Contact",
    items: [
      "Opens in under 2 seconds on 3G",
      "One tap WhatsApp & call buttons",
      "Instant quotation request form",
      "Touch optimized controls on mobile"
    ]
  },
  {
    heading: "Google Listing & Builder Support",
    items: [
      "Google Maps directions & location pin",
      "Search engine listing technical setup",
      "Direct talk with developer building site",
      "Domain setup & 1 year support"
    ]
  }
];

export const WhatYouGet: React.FC = () => {
  const sectionInfo = getSectionConfig('included');

  return (
    <section id="included" className="py-12 md:py-24 bg-paper border-b border-ink/15 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-ink/15 gap-4">
            <div>
              <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-1.5 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-vermilion-text inline-block" />
                [ SECTION {sectionInfo.number} ] • WHAT YOU GET
              </div>
              <h2 className="font-display font-black text-[clamp(1.85rem,6vw,3.5rem)] uppercase tracking-tight text-ink leading-tight">
                Everything{' '}
                <span className="font-serif italic font-normal text-vermilion-text lowercase block sm:inline">
                  included.
                </span>
              </h2>
            </div>

            <p className="font-sans text-ink-muted text-sm sm:text-base max-w-sm leading-relaxed">
              Every website comes standard with these essential features. No hidden extras.
            </p>
          </div>
        </Reveal>

        {/* 3 Short Groups with 2-Column Checklist Grids */}
        <div className="space-y-8 mb-10">
          {CHECKLIST_GROUPS.map((group, gIdx) => (
            <Reveal key={gIdx} delay={gIdx * 0.08}>
              <div className="bg-card border border-ink/15 rounded-lg p-5 sm:p-6 shadow-mobile-soft">
                {/* Small Group Heading */}
                <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-vermilion-text mb-4 pb-2 border-b border-ink/10 flex items-center gap-2">
                  <span>[{String(gIdx + 1).padStart(2, '0')}]</span>
                  <span>{group.heading}</span>
                </h3>

                {/* Compact 2-Column Checklist Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {group.items.map((itemText, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2.5">
                      {/* Icon-less tick */}
                      <span className="font-mono text-base font-black text-vermilion-text leading-none mt-0.5 select-none">
                        ✓
                      </span>
                      <span className="font-sans text-sm font-medium text-ink leading-snug">
                        {itemText}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Compact CTA Banner */}
        <Reveal delay={0.3}>
          <div className="bg-ink text-paper border border-ink rounded-lg p-5 sm:p-8 shadow-mobile-soft flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <span className="stamp-badge bg-vermilion-text text-paper text-[11px] mb-2 inline-block">
                NEED SOMETHING CUSTOM?
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-paper mt-1">
                Let's Build Exactly What You Need
              </h3>
              <p className="font-sans text-xs sm:text-sm text-paper-dark leading-relaxed mt-1 max-w-xl">
                Calculators, multi-location directories, product catalogs, or reservation desks — tell us what your trade requires.
              </p>
            </div>

            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-vermilion-text hover:bg-vermilion-dark text-paper font-sans font-bold text-sm px-6 py-3.5 min-h-[44px] rounded-badge border border-paper shadow-sm transition-all"
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
