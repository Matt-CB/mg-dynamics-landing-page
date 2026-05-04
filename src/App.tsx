/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { CanvasBackground } from './components/CanvasBackground';
import { HeroSection } from './components/sections/HeroSection';
import { ExpansionSection } from './components/sections/ExpansionSection';
import { SubsidiariesMarquee } from './components/sections/SubsidiariesMarquee';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { ValuesSection } from './components/sections/ValuesSection';
import { ImpactSection } from './components/sections/ImpactSection';
import { GlobalPresenceSection } from './components/sections/GlobalPresenceSection';
import { CTASection } from './components/sections/CTASection';
import { scrollState } from './store';

import { Header } from './components/ui/Header';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { Footer } from './components/ui/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only initialize scroll when loaded
    if (!isLoaded) {
      window.scrollTo(0, 0);
      return;
    }

    // Setup Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Setup global ScrollTrigger for 3D sync
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        scrollState.progress = self.progress;
      },
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isLoaded]);

  return (
    <div ref={containerRef} className={`relative w-full bg-transparent text-gray-900 font-sans selection:bg-black selection:text-white ${!isLoaded ? 'h-screen overflow-hidden' : ''}`}>
      <Preloader onComplete={() => setIsLoaded(true)} />
      <CustomCursor />
      <Header />
      {/* Fixed 3D Canvas Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CanvasBackground />
      </div>

      {/* Scrollytelling Content */}
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <ExpansionSection />
        <PhilosophySection />
        <SubsidiariesMarquee />
        <IndustriesSection />
        <ValuesSection />
        <ImpactSection />
        <GlobalPresenceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
