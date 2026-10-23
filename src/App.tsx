import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import { SECTIONS_LIST } from './config/sectionsConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { WhySection } from './sections/WhySection';
import { Portfolio } from './sections/Portfolio';
import { Services } from './sections/Services';
import { WhatYouGet } from './sections/WhatYouGet';
import { Process } from './sections/Process';
import { About } from './sections/About';
import { Pricing } from './sections/Pricing';
import { FirstClientsOffer } from './sections/FirstClientsOffer';
import { FAQ } from './sections/FAQ';
import { ClientDeliverables } from './sections/ClientDeliverables';
import { Footer } from './sections/Footer';
import { FloatingActions } from './components/FloatingActions';
import { IntroLoader } from './components/IntroLoader';
import { CustomCursor } from './components/motion/CustomCursor';
import { ScrollProgress } from './components/motion/ScrollProgress';

export function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  
  // Enable Lenis smooth momentum scrolling
  useLenis();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -45% 0px',
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = SECTIONS_LIST.findIndex((s) => s.id === entry.target.id);
          if (index !== -1) {
            setActiveSectionIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS_LIST.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-vermilion selection:text-paper relative pb-16 md:pb-0">
      <CustomCursor />
      <ScrollProgress activeSectionIndex={activeSectionIndex} />

      <AnimatePresence>
        {!introFinished && <IntroLoader onComplete={() => setIntroFinished(true)} />}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero />
        <WhySection />
        <Portfolio />
        <Services />
        <WhatYouGet />
        <Process />
        <About />
        <FirstClientsOffer />
        <Pricing />
        <FAQ />
        <ClientDeliverables />
      </main>

      <Footer />
      
      <FloatingActions />
    </div>
  );
}

export default App;
