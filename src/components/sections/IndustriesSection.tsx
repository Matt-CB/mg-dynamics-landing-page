import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Monitor, Cpu, Gamepad2, Building2, FlaskConical } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

export function IndustriesSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const INDUSTRIES = [
    { name: t.industries.software.name, icon: Monitor, description: t.industries.software.desc },
    { name: t.industries.robotics.name, icon: Cpu, description: t.industries.robotics.desc },
    { name: t.industries.gaming.name, icon: Gamepad2, description: t.industries.gaming.desc },
    { name: t.industries.realEstate.name, icon: Building2, description: t.industries.realEstate.desc },
    { name: t.industries.research.name, icon: FlaskConical, description: t.industries.research.desc },
  ];

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="ecosystem" className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 px-12 pointer-events-auto border-t text-black border-black/5">
      <div className="z-10 text-center mb-24 w-full flex flex-col items-center">
        <p className="text-[10px] tracking-[0.3em] text-black/50 uppercase mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-black/20"></span>
          {t.industries.subtitle}
          <span className="w-8 h-[1px] bg-black/20"></span>
        </p>
        <h2 className="font-serif text-[48px] leading-[1.1] tracking-[-0.02em] text-black">
          {t.industries.heading}
        </h2>
      </div>

      <div ref={containerRef} className="z-10 w-full max-w-6xl relative mt-16 px-4">
        {/* Continuous horizontal line (desktop) */}
        <div className="absolute top-[76px] left-[10%] w-[80%] h-[1px] bg-black/20 hidden md:block z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-16 w-full relative z-10">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.name}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="flex flex-col items-center text-center relative px-2"
            >
              <div className="mb-10 text-black h-[28px] flex items-center justify-center">
                <ind.icon strokeWidth={2} size={28} />
              </div>
              
              <div className="w-full flex justify-center items-center mb-8 relative">
                {/* Fallback line for mobile */}
                <div className="absolute w-full h-[1px] bg-black/20 block md:hidden"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-black relative z-10 ring-8 ring-[#F5F5F7]"></div>
              </div>

              <div className="text-[10px] font-bold mb-4 uppercase tracking-[0.2em] text-black">
                {ind.name}
              </div>
              <div className="text-[10px] text-black/60 leading-[1.8] max-w-[140px] tracking-wide">
                {ind.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
