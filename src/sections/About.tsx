import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/siteData';
import { getSectionConfig } from '../config/sectionsConfig';
import { Check, Code2, User } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';

export const About: React.FC = () => {
  const sectionInfo = getSectionConfig('about');
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="about" className="py-12 md:py-24 bg-paper border-b border-ink/15 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="mb-8 pb-4 border-b border-ink/15">
            <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-1.5 font-bold">
              [ SECTION {sectionInfo.number} ] • ABOUT
            </div>
            <h2 className="font-display font-black text-[clamp(1.85rem,6vw,3.75rem)] uppercase tracking-tight text-ink leading-none">
              Direct Communication.{' '}
              <span className="font-serif italic font-normal text-vermilion-text lowercase block sm:inline">
                zero middleman.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-8">

          {/* Photo Slot at Top with Rounded / Arch Mask */}
          <Reveal delay={0.1}>
            <div className="text-center">
              <div className="w-40 h-52 sm:w-48 sm:h-60 rounded-t-[100px] border-2 border-ink bg-paper-dark shadow-mobile-soft flex flex-col items-center justify-center p-4 mx-auto relative group overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-vermilion/15 border border-vermilion/40 flex items-center justify-center mb-3 text-vermilion-text">
                  <User className="w-8 h-8" />
                </div>
                <span className="font-mono text-[10px] font-bold uppercase text-ink-muted leading-tight">
                  DEVELOPER PHOTO PLACEHOLDER
                </span>
                <span className="font-display font-bold text-sm text-ink mt-1">
                  Darshan Jogi
                </span>
                <span className="font-mono text-[9px] text-emerald-700 font-bold uppercase mt-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  ● AVAILABLE
                </span>
              </div>
            </div>
          </Reveal>

          {/* 3-Line Intro */}
          <Reveal delay={0.2}>
            <div className="bg-card border border-ink/15 rounded-lg p-5 sm:p-6 shadow-mobile-soft">
              <p className="font-sans text-base sm:text-lg text-ink leading-relaxed font-medium">
                I'm Darshan — I build custom websites and apps for shop owners, manufacturers, and local businesses in Akola and across Maharashtra. I handle everything directly from code to Google setup, so you never deal with sales reps or middleman agencies.
              </p>
            </div>
          </Reveal>

          {/* 3 Short Principles as Simple Rows */}
          <Reveal delay={0.3}>
            <div className="bg-card border border-ink/15 rounded-lg p-5 sm:p-6 shadow-mobile-soft space-y-3">
              <h4 className="font-mono text-xs uppercase font-bold text-vermilion-text tracking-wider mb-2">
                [ WORKING PRINCIPLES ]
              </h4>

              <div className="space-y-2.5">
                {[
                  "Talk directly with the developer writing your code",
                  "Clear scopes with straightforward pricing and zero hidden fees",
                  "Fast WhatsApp updates and reliable post-launch support"
                ].map((principle, idx) => (
                  <div key={idx} className="flex items-start gap-3 py-1.5 border-b border-ink/10 last:border-b-0">
                    <span className="w-5 h-5 rounded-full bg-emerald-700/15 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="font-sans text-sm sm:text-base font-semibold text-ink leading-snug">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Direct WhatsApp Action Button */}
          <Reveal delay={0.4}>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 bg-vermilion-text hover:bg-vermilion-dark text-paper font-sans font-bold text-sm px-6 py-3.5 rounded-badge border border-ink shadow-sm transition-all"
              >
                <Code2 className="w-4.5 h-4.5" />
                <span>Talk Directly with Darshan on WhatsApp →</span>
              </a>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
