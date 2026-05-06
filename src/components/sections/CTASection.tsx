import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../../LanguageContext';

export function CTASection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Reveal animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'top 40%',
        scrub: true,
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 }
    ).fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 },
      "-=0.2"
    );
  }, []);

  const handleContactClick = () => {
    navigator.clipboard.writeText("admin@mg-dynamics.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" ref={containerRef} className="relative w-full py-40 flex flex-col items-center justify-center px-6 md:px-12 pointer-events-auto bg-black text-white border-t border-white/[0.04]">
      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-[10px] tracking-[0.3em] font-semibold uppercase text-white/40 mb-8 flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-white/20"></span>
          {t.cta.subtitle}
          <span className="w-8 h-[1px] bg-white/20"></span>
        </p>
        <h2 ref={textRef} className="font-serif text-5xl md:text-7xl lg:text-[100px] leading-[1.05] tracking-[-0.03em] font-normal mb-16">
          {t.cta.title}
        </h2>
        <button 
          ref={buttonRef}
          onClick={handleContactClick}
          className="group relative flex items-center justify-center w-48 h-48 rounded-full border border-white/20 hover:border-white/50 transition-colors duration-500 overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full"></div>
          <span className="relative z-10 text-xs tracking-[0.2em] uppercase font-medium group-hover:text-black transition-colors duration-500">
            {copied ? t.cta.copied : t.cta.button}
          </span>
        </button>
      </div>
      
    </section>
  );
}
