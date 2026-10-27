
import { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Portfolio } from './sections/Portfolio';
import { Services } from './sections/Services';
import { WhatYouGet } from './sections/WhatYouGet';
import { Process } from './sections/Process';
import { About } from './sections/About';
import { Pricing } from './sections/Pricing';

import { FAQ } from './sections/FAQ';
import { ClientDeliverables } from './sections/ClientDeliverables';
import { Footer } from './sections/Footer';
import { Testimonials, IntroVideo, Policies } from './sections/Extras';
import { FloatingActions } from './components/FloatingActions';


export function App() {
  const [activeId, setActiveId] = useState<string>('');

  // Enable Lenis smooth momentum scrolling
  useLenis();

  useEffect(() => {
    const sectionIds = [
      '#hero',
      '#work',
      '#services',
      '#included',
      '#process',
      '#about',
      '#pricing',
      '#faq',
      '#contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
      }
    );

    sectionIds.forEach((selector) => {
      const el = document.querySelector(selector);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-vermilion selection:text-paper relative">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2">Skip to content</a>
      <Navbar activeSectionId={activeId} />

      <main id="main">
        <Hero />
        <IntroVideo />
        <Portfolio />
        <Services />
        <WhatYouGet />
        <Process />
        <About />
        <Testimonials />
        <Pricing />

        <FAQ />
        <ClientDeliverables />
        <Policies />
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}

export default App;
