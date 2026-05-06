import React from 'react';
import { useLanguage } from '../../LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center pointer-events-auto">
      <div className="z-10 text-center flex flex-col items-center">
        <h1 className="text-[110px] leading-none tracking-[-0.03em] font-serif mb-4 flex items-center justify-center">
          M<span className="font-light italic mx-1 text-[90px]">&amp;</span>G
        </h1>
        <p className="text-[12px] tracking-[0.4em] uppercase opacity-70 italic">{t.hero.precision} {t.hero.vision} {t.hero.execution}</p>
      </div>

      {/* Aesthetic Divider Lines */}
      <div className="absolute top-0 right-1/4 h-full w-[0.5px] bg-black/5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 h-full w-[0.5px] bg-black/5 pointer-events-none"></div>
      
      {/* Left Side: Vertical Rail Text */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 rotate-180 flex items-center space-x-4 hidden md:flex" style={{ writingMode: 'vertical-rl' }}>
        <span className="text-[10px] tracking-[0.2em] uppercase text-black/40">{t.hero.scroll}</span>
        <div className="w-[1px] h-32 bg-black/20"></div>
      </div>
    </section>
  );
}
