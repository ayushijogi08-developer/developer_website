import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, type ProjectItem } from '../data/projects';
import { WHATSAPP_NUMBER, BRAND_NAME, DOMAIN } from '../data/siteData';
import { getSectionConfig } from '../config/sectionsConfig';
import { MapPin, ArrowUpRight, ExternalLink, Smartphone, Globe, X, Info } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';

/* ── Inner Mockup Layouts with Auto-Play Slow Vertical Scroll ── */
function WebsiteMockupFrame({ project }: { project: ProjectItem }) {
  const t = project.theme;

  return (
    <div className="w-full h-48 bg-ink/90 relative overflow-hidden rounded-t-lg border-b border-paper/15 select-none">
      {/* Top Browser Bar */}
      <div className="h-6 bg-black/60 px-3 flex items-center justify-between border-b border-white/10 text-[10px] font-mono text-paper-dark relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <span className="opacity-60 truncate max-w-[140px]">
          {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : (DOMAIN ? `${project.id}.${DOMAIN}` : `${project.id}.kunj.preview`)}
        </span>
        <span className={`text-[9px] font-bold ${project.liveUrl ? 'text-emerald-400' : 'text-amber-400'}`}>
          {project.liveUrl ? 'LIVE' : 'CONCEPT'}
        </span>
      </div>

      {/* Auto-Play Slow Vertical Scroll Container */}
      <div className="relative h-[calc(100%-24px)] overflow-hidden">
        <motion.div
          animate={{ y: [0, -130, 0] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="p-4 space-y-3 font-sans"
          style={{ backgroundColor: t.bg, color: t.body }}
        >
          {/* Header Strip */}
          <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: t.divider }}>
            <span className="font-display font-black text-sm uppercase tracking-tight" style={{ color: t.title }}>
              {project.name}
            </span>
            <span className="text-[10px] font-mono flex items-center gap-1" style={{ color: t.muted }}>
              <MapPin className="w-2.5 h-2.5" />
              {project.clientLocation}
            </span>
          </div>

          {/* Hero Banner / Highlight */}
          <div className="p-3 rounded text-xs font-mono font-bold" style={{ backgroundColor: t.tagBg, color: t.tagText, borderColor: t.tagBorder }}>
            ✦ {project.badgeText}
          </div>

          {/* Grid Content Preview */}
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-2 rounded border text-[10px]" style={{ borderColor: t.divider }}>
                <div className="font-bold mb-0.5" style={{ color: t.title }}>Item Specification #{i}</div>
                <div style={{ color: t.muted }}>Quality Grade A+</div>
              </div>
            ))}
          </div>

          {/* Feature List */}
          <div className="space-y-1 text-[10px]">
            {project.whatItDoes.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="font-bold" style={{ color: t.accent }}>✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="pt-2 border-t text-[10px] font-mono font-bold text-center" style={{ borderColor: t.divider, color: t.accent }}>
            REQUEST QUOTE / ORDER ON WHATSAPP →
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* Real Phone Frame Component for App Mockups */
function AppPhoneFrame({ project }: { project: ProjectItem }) {
  const t = project.theme;

  return (
    <div className="w-full h-48 bg-gradient-to-b from-paper/10 to-paper/5 flex items-center justify-center p-3 relative overflow-hidden rounded-t-lg border-b border-paper/15 select-none">
      {/* Real Phone Chassis */}
      <div className="w-32 sm:w-36 h-[170px] bg-slate-950 border-2 border-slate-700 rounded-[20px] shadow-2xl p-1.5 flex flex-col relative group">
        {/* Phone Speaker Notch */}
        <div className="w-10 h-1.5 bg-slate-800 rounded-full mx-auto mb-1.5 flex-shrink-0 relative z-20" />

        {/* Screen Area */}
        <div
          className="flex-1 rounded-[12px] p-2 flex flex-col justify-between overflow-hidden relative"
          style={{ backgroundColor: t.bg, color: t.title }}
        >
          {/* Status Bar */}
          <div className="flex items-center justify-between text-[8px] font-mono opacity-70">
            <span>9:41</span>
            <span>5G 100%</span>
          </div>

          {/* App Body Content */}
          <div className="space-y-1 text-center my-auto">
            <span className="text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-black/40 text-amber-400 inline-block">
              {project.category}
            </span>
            <h4 className="font-display font-bold text-[11px] leading-tight text-white">{project.name}</h4>
          </div>

          {/* Clearly Marked Placeholder Badge */}
          <div className="bg-black/60 backdrop-blur-sm rounded px-1.5 py-1 text-[8px] font-mono text-emerald-400 font-bold border border-emerald-500/30 text-center">
            📱 APP SCREENSHOT PLACEHOLDER
          </div>
        </div>
      </div>
    </div>
  );
}

export const Portfolio: React.FC = () => {
  const sectionInfo = getSectionConfig('work');
  const [activeTab, setActiveTab] = useState<"websites" | "apps">("websites");
  const [activeSheetProject, setActiveSheetProject] = useState<ProjectItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const filteredProjects = PROJECTS_DATA.filter((p) => p.tab === activeTab);

  // Update scroll index dots on horizontal scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIndex = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveIndex(Math.min(Math.max(0, newIndex), filteredProjects.length - 1));
  };

  useEffect(() => {
    setActiveIndex(0);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [activeTab]);

  return (
    <section id="work" className="py-12 md:py-24 bg-ink text-paper border-b border-paper/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="mb-6 pb-4 border-b border-paper/15">
            <div className="font-mono text-xs text-vermilion-light uppercase tracking-widest mb-1.5 font-bold">
              [ SECTION {sectionInfo.number} ] • OUR WORK
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div>
                <h2 className="font-display font-black text-[clamp(1.85rem,6vw,3.75rem)] uppercase tracking-tight text-paper leading-none">
                  Websites & Apps{' '}
                  <span className="font-serif italic font-normal text-vermilion-light lowercase block sm:inline">
                    Built to Order.
                  </span>
                </h2>
              </div>
              <p className="font-sans text-paper-dark text-sm sm:text-base max-w-md leading-relaxed">
                Functional working codebases and regional trade concepts designed for maximum conversion.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Sticky Segmented Control */}
        <div className="sticky top-16 z-30 bg-ink/95 backdrop-blur-md py-3 border-b border-paper/15 mb-6">
          <div className="flex items-center bg-paper/10 p-1 rounded-badge max-w-sm border border-paper/20">
            <button
              onClick={() => setActiveTab("websites")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-badge font-mono text-xs font-bold uppercase transition-all min-h-[40px] ${
                activeTab === "websites"
                  ? 'bg-vermilion text-paper shadow-sm'
                  : 'text-paper-dark hover:text-paper'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Websites ({PROJECTS_DATA.filter(p => p.tab === 'websites').length})</span>
            </button>

            <button
              onClick={() => setActiveTab("apps")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-badge font-mono text-xs font-bold uppercase transition-all min-h-[40px] ${
                activeTab === "apps"
                  ? 'bg-vermilion text-paper shadow-sm'
                  : 'text-paper-dark hover:text-paper'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Apps ({PROJECTS_DATA.filter(p => p.tab === 'apps').length})</span>
            </button>
          </div>
        </div>

        {/* Horizontal Swipe Carousel (85% card width + scroll-snap + peek) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-none pb-4 px-0.5 select-none"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`w-[85vw] max-w-[340px] sm:w-[360px] flex-shrink-0 snap-center bg-paper/10 border border-paper/20 rounded-lg overflow-hidden flex flex-col justify-between shadow-mobile-soft hover:border-vermilion/60 transition-all duration-300 ${
                activeIndex === idx ? 'scale-100 opacity-100' : 'scale-[0.97] opacity-90'
              }`}
            >
              <div>
                {/* Mockup / Image Header */}
                {project.tab === 'websites' ? (
                  <WebsiteMockupFrame project={project} />
                ) : (
                  <AppPhoneFrame project={project} />
                )}

                {/* Card Content Area: Label, Name, One-line summary */}
                <div className="p-4 space-y-2 font-sans">
                  {/* Label Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                      project.kind === 'working-build'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {project.kind === 'working-build' ? 'WORKING BUILD' : 'DESIGN CONCEPT'}
                    </span>

                    {/* Details Trigger Button */}
                    <button
                      onClick={() => setActiveSheetProject(project)}
                      className="text-xs font-mono font-bold text-vermilion-light hover:underline flex items-center gap-1 min-h-[32px] px-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>

                  {/* Name */}
                  <h3 className="font-display font-bold text-lg text-paper truncate leading-snug">
                    {project.name}
                  </h3>

                  {/* ONE Line of Text */}
                  <p className="text-xs text-paper-dark line-clamp-1 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* ONE Primary Button */}
              <div className="p-4 pt-1 border-t border-paper/10">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-paper font-sans font-bold text-xs rounded-badge border border-paper/30 shadow-sm transition-all"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
                      `Hi ${BRAND_NAME}! I like your ${project.kind === 'working-build' ? 'system' : 'design concept'} "${project.name}" and want to request a site like this.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-vermilion hover:bg-vermilion-dark text-paper font-sans font-bold text-xs rounded-badge border border-paper/30 shadow-sm transition-all"
                  >
                    <span>Request a site like this</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-2 mb-6">
          {filteredProjects.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-vermilion' : 'w-1.5 bg-paper/30'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Details Bottom Sheet Drawer */}
      <AnimatePresence>
        {activeSheetProject && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSheetProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Bottom Sheet Modal */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full max-w-lg bg-ink text-paper border-t-2 border-vermilion rounded-t-2xl p-6 shadow-2xl z-10 max-h-[85vh] overflow-y-auto font-sans"
            >
              {/* Sheet Header */}
              <div className="flex items-start justify-between pb-4 border-b border-paper/15 mb-4">
                <div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase mb-2 inline-block ${
                    activeSheetProject.kind === 'working-build'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {activeSheetProject.kind === 'working-build' ? 'WORKING BUILD' : 'DESIGN CONCEPT'}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-paper">
                    {activeSheetProject.name}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveSheetProject(null)}
                  className="w-9 h-9 rounded-full bg-paper/10 hover:bg-paper/20 flex items-center justify-center text-paper transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sheet Body Content */}
              <div className="space-y-4">
                <p className="text-sm text-paper-dark leading-relaxed">
                  {activeSheetProject.summary}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2 pt-2 border-t border-paper/15">
                  <span className="font-mono text-xs font-bold text-vermilion-light uppercase block">
                    KEY FEATURES & CAPABILITIES:
                  </span>
                  {activeSheetProject.whatItDoes.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-paper">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack if present */}
                {activeSheetProject.tech && activeSheetProject.tech.length > 0 && (
                  <div className="pt-2 border-t border-paper/15">
                    <span className="font-mono text-xs font-bold text-paper-dark uppercase block mb-2">
                      TECHNOLOGY USED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeSheetProject.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono bg-paper/10 px-2 py-0.5 rounded border border-paper/20 text-paper-dark">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Sheet CTA */}
              <div className="mt-6 pt-4 border-t border-paper/15 space-y-2.5">
                {activeSheetProject.liveUrl && (
                  <a
                    href={activeSheetProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-paper font-bold text-sm rounded-badge border border-paper/30 transition-all shadow-sm"
                  >
                    <span>Launch Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
                    `Hi ${BRAND_NAME}! I reviewed the details for "${activeSheetProject.name}" and want to discuss building a project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-vermilion hover:bg-vermilion-dark text-paper font-bold text-sm rounded-badge border border-paper transition-all"
                >
                  <span>Discuss This Project on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
