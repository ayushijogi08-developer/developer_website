import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
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
  
  // Enable Lenis smooth momentum scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-vermilion selection:text-paper relative pb-16 md:pb-0">
      <CustomCursor />
      <ScrollProgress />

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
