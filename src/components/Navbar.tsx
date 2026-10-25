import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_NAME, BRAND_LOGO, NAV_LINKS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/siteData';
import { PhoneCall, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { Magnetic } from './motion/Magnetic';
import { triggerFormCta, CTA_CONFIG } from '../data/cta';

export const Navbar: React.FC<{ activeSectionId?: string }> = ({ activeSectionId }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const lastScrollY = useRef(0);
  const scrollYBeforeMenu = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  const openMenu = useCallback(() => {
    scrollYBeforeMenu.current = window.scrollY;
    document.body.classList.add('menu-open');
    document.body.style.top = `-${scrollYBeforeMenu.current}px`;
    setMobileMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    document.body.classList.remove('menu-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollYBeforeMenu.current);
    setMobileMenuOpen(false);
  }, []);

  // Close on Esc
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [mobileMenuOpen, closeMenu]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled ? 'py-3 bg-paper/90 backdrop-blur-md border-b border-ink/10 shadow-sm' : 'py-5 md:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo - Official black lettering for light header */}
            <a href="#" className="flex items-center shrink-0 group py-1" aria-label={BRAND_NAME}>
              <img
                src={BRAND_LOGO}
                alt={BRAND_NAME}
                width={160}
                height={114}
                className={`w-auto object-contain shrink-0 group-hover:scale-105 transition-all duration-300 ${
                  isScrolled ? 'h-12 sm:h-14 md:h-16' : 'h-16 sm:h-20 md:h-[84px] lg:h-[92px]'
                }`}
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-sans text-sm font-semibold text-ink whitespace-nowrap">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSectionId === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 group transition-colors ${
                      isActive ? 'text-vermilion-text font-bold' : 'hover:text-vermilion-text'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-vermilion-text transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:block">
                <Magnetic strength={0.25}>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      triggerFormCta(CTA_CONFIG.navbar.whatsappMessage);
                    }}
                    className="inline-flex items-center gap-2 bg-vermilion-text hover:bg-vermilion-dark text-paper font-sans font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-badge border-2 border-ink shadow-stamp hover:shadow-stamp-hover hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
                  >
                    <span>Get Your Website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Magnetic>
              </div>

              {/* Mobile hamburger — 44×44px touch target */}
              <button
                onClick={() => mobileMenuOpen ? closeMenu() : openMenu()}
                className="lg:hidden min-h-[44px] min-w-[44px] p-2.5 bg-paper-dark/60 border border-ink/20 rounded-badge text-ink active:bg-ink active:text-paper transition-colors flex items-center justify-center"
                aria-label="Toggle Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-40 bg-ink text-paper pt-24 pb-8 px-5 flex flex-col justify-between lg:hidden font-sans overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[12px] text-vermilion-light tracking-widest uppercase font-bold mb-2">
                [ NAVIGATION ]
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => closeMenu()}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-bold text-[clamp(1.25rem,5vw,1.75rem)] uppercase tracking-tight text-paper active:text-vermilion flex items-center justify-between border-b border-paper/10 py-3.5 min-h-[48px]"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-sm text-paper/40 font-normal">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-paper/20 mt-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-vermilion text-paper font-bold py-3.5 rounded-badge border border-paper/30 text-base min-h-[48px] active:scale-95 transition-transform"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="w-full flex items-center justify-center gap-2 bg-paper/10 text-paper font-bold py-3.5 rounded-badge border border-paper/20 text-base min-h-[48px] active:scale-95 transition-transform"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <div className="text-center font-mono text-[12px] text-paper/40 pt-1">
                DIRECT FOUNDER CONTACT
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
