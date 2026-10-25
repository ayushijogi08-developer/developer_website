import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';

const POINTS = [
  {
    strikethrough: "Relying only on word of mouth or social posts",
    solution: "Customers search Google for your business before calling or visiting."
  },
  {
    strikethrough: "Looking smaller than competitors with outdated listings",
    solution: "A modern website instantly establishes credibility and trade authority."
  },
  {
    strikethrough: "Hiding your products, catalog, or plant capacity",
    solution: "Showcase full catalogs, specifications, and project photos 24/7."
  },
  {
    strikethrough: "Forcing buyers through slow phone calls & manual back-and-forth",
    solution: "One-tap WhatsApp & instant quotation forms connect buyers in seconds."
  }
];

export const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-14 md:py-20 bg-paper-dark/40 border-b border-ink/15 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs text-vermilion-text uppercase tracking-widest font-bold">
              [ THE REALITY ]
            </span>
            <h2 className="font-display font-black text-[clamp(1.75rem,6vw,3rem)] uppercase tracking-tight text-ink mt-1">
              Why Your Business Needs a Website Now
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {POINTS.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card border border-ink/15 p-5 sm:p-6 rounded-lg space-y-2 flex flex-col justify-between"
            >
              <div className="flex items-start gap-2 text-xs font-mono text-ink-muted">
                <span className="text-red-700 font-bold flex-shrink-0">✕</span>
                <span className="line-through decoration-red-600/70 opacity-80">{pt.strikethrough}</span>
              </div>

              <div className="flex items-start gap-2 text-sm font-sans font-semibold text-ink pt-1 border-t border-ink/10">
                <span className="text-emerald-700 font-bold flex-shrink-0">✓</span>
                <span className="leading-snug">{pt.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
