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
import { TrustStrip, Testimonials, IntroVideo, Policies } from './sections/Extras';
import { FloatingActions } from './components/FloatingActions';


export function App() {


  // Enable Lenis smooth momentum scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-vermilion selection:text-paper relative pb-16 md:pb-0">

      <Navbar />

      <main>
        <Hero />
        <TrustStrip />
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
