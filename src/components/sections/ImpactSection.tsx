import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../../LanguageContext';

export function ImpactSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const num1Ref = useRef<HTMLSpanElement>(null);
  const num2Ref = useRef<HTMLSpanElement>(null);
  const num3Ref = useRef<HTMLSpanElement>(null);
  const num4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Simple scrub counter
    const trigger = {
      trigger: containerRef.current,
      start: 'top 80%',
      end: 'top 30%',
      scrub: true,
    };

    gsap.to(num1Ref.current, { innerHTML: 20, roundProps: 'innerHTML', scrollTrigger: trigger });
    gsap.to(num2Ref.current, { innerHTML: 5, roundProps: 'innerHTML', scrollTrigger: trigger });
    gsap.to(num3Ref.current, { innerHTML: 15, roundProps: 'innerHTML', scrollTrigger: trigger });
    gsap.to(num4Ref.current, { innerHTML: 1000, roundProps: 'innerHTML', scrollTrigger: trigger });

    // Animate color transition to black as we leave the dark ValuesSection and background turns white
    gsap.to(containerRef.current, {
      color: '#111827', // text-gray-900 equivalent
      borderColor: 'rgba(0,0,0,0.1)',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
      }
    });

  }, []);

  return (
    <section id="impact" ref={containerRef} className="relative w-full min-h-[60vh] flex flex-col items-center justify-center pointer-events-auto bg-transparent px-12 py-32 border-t text-white border-white/20">
      <div className="z-10 grid grid-cols-2 md:grid-cols-5 gap-12 w-full max-w-6xl items-center text-center">
        <div className="flex flex-col items-center">
          <div className="text-[32px] font-serif leading-none mb-3 flex"><span ref={num1Ref}>0</span>+</div>
          <div className="text-[9px] tracking-[0.1em] uppercase opacity-80">{t.impact.companies}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[32px] font-serif leading-none mb-3 flex"><span ref={num2Ref}>0</span>+</div>
          <div className="text-[9px] tracking-[0.1em] uppercase opacity-80">{t.impact.industries}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[32px] font-serif leading-none mb-3 flex"><span ref={num3Ref}>0</span>+</div>
          <div className="text-[9px] tracking-[0.1em] uppercase opacity-80">{t.impact.countries}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[32px] font-serif leading-none mb-3 flex"><span ref={num4Ref}>0</span>+</div>
          <div className="text-[9px] tracking-[0.1em] uppercase opacity-80">{t.impact.teamMembers}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[32px] font-serif leading-none mb-3 flex">∞</div>
          <div className="text-[9px] tracking-[0.1em] uppercase opacity-80">{t.impact.possibilities}</div>
        </div>
      </div>
    </section>
  );
}
