import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';

export function SubsidiariesMarquee() {
  const { t } = useLanguage();

  // Abstract SVG Logos for Subsidiaries
  const Logos = [
    {
      name: 'M&G Dynamics',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 22l10-4 10 4L12 2z" />
        </svg>
      ),
    },
    {
      name: t.subsidiaries.companyNames.kids,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="4" />
          <rect x="12" y="12" width="8" height="8" />
        </svg>
      ),
    },
    {
      name: 'M&G Studios',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      ),
    },
    {
      name: t.subsidiaries.companyNames.realEstate,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M9 8h1v1H9z" />
          <path d="M9 12h1v1H9z" />
          <path d="M9 16h1v1H9z" />
          <path d="M14 8h1v1h-1z" />
          <path d="M14 12h1v1h-1z" />
          <path d="M14 16h1v1h-1z" />
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        </svg>
      ),
    },
    {
      name: t.subsidiaries.companyNames.research,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="14" x2="21" y2="3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      ),
    },
    {
      name: t.subsidiaries.companyNames.education,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      name: t.subsidiaries.companyNames.foundation,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    {
      name: t.subsidiaries.companyNames.lifeSciences,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" />
          <path d="M16 4a4 4 0 0 0-8 0" />
          <path d="M16 12a4 4 0 0 0-8 0" />
          <path d="M16 20a4 4 0 0 0-8 0" />
        </svg>
      ),
    },
    {
      name: 'Connexa',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
    },
  ];

  return (
    <section id="subsidiaries" className="relative w-full py-24 bg-transparent overflow-hidden pointer-events-auto border-t border-b border-black/[0.04]">
      <div className="absolute top-12 left-12 md:left-24">
        <h4 className="text-[10px] tracking-[0.2em] uppercase text-black/40 font-semibold mb-8">
          {t.subsidiaries.count}
        </h4>
      </div>
      
      {/* Marquee Container */}
      <div className="relative mt-16 flex overflow-x-hidden">
        {/* We duplicate the content twice to create an infinite loop effect */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {Logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="flex items-center space-x-4 mx-12 md:mx-20 group cursor-pointer">
              <div className="text-black/30 group-hover:text-black transition-colors duration-500">
                {logo.icon}
              </div>
              <span className="font-sans text-xl md:text-2xl font-normal text-black/50 group-hover:text-black transition-colors duration-500 tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {Logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="flex items-center space-x-4 mx-12 md:mx-20 group cursor-pointer">
              <div className="text-black/30 group-hover:text-black transition-colors duration-500">
                {logo.icon}
              </div>
              <span className="font-sans text-xl md:text-2xl font-normal text-black/50 group-hover:text-black transition-colors duration-500 tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10" />
    </section>
  );
}
