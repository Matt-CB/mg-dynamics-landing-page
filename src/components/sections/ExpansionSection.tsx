import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../../LanguageContext';

export function ExpansionSection() {
  const { t } = useLanguage();
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="expansion" className="relative w-full h-screen flex flex-col items-start justify-center px-12 md:px-24 pointer-events-auto">
      <div className="z-10 max-w-2xl">
        <h2 ref={textRef} className="font-serif text-[64px] leading-[1.1] tracking-[-0.02em] font-normal text-black mb-6">
          {t.expansion.title}
        </h2>
        <div className="w-16 h-[1px] bg-black/20 mb-6"></div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-black/50 max-w-sm leading-relaxed">
          {t.expansion.subtitle}
        </p>
      </div>
    </section>
  );
}
