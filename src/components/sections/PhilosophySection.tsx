import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';

export function PhilosophySection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title 1 animation
    gsap.fromTo(
      title1Ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: title1Ref.current,
          start: 'top 85%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );

    // Title 2 animation (fade in and turn full black)
    gsap.fromTo(
      title2Ref.current,
      { opacity: 0, y: 40, color: 'rgba(0, 0, 0, 0.2)' },
      {
        opacity: 1,
        y: 0,
        color: 'rgba(0, 0, 0, 1)',
        scrollTrigger: {
          trigger: title2Ref.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    // Content fade up - adjusted to be more subtle as we have individual paragraph animations
    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pointer-events-auto bg-transparent text-gray-900 border-t border-black/[0.04]" id="philosophy-section">
      <div className="z-10 max-w-6xl mx-auto w-full">
        
        {/* Large Statement */}
        <div className="mb-32 md:mb-48 text-center max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] font-semibold uppercase text-black/40 mb-12 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-black/20"></span>
            {t.philosophy.whoWeAre}
            <span className="w-8 h-[1px] bg-black/20"></span>
          </p>
          <h2 ref={title1Ref} className="font-serif text-5xl md:text-[80px] lg:text-[100px] leading-[1.05] tracking-[-0.03em] font-normal text-black mb-4">
            {t.philosophy.heading1}
          </h2>
          <h2 ref={title2Ref} className="font-serif text-5xl md:text-[80px] lg:text-[100px] leading-[1.05] tracking-[-0.03em] font-normal">
            {t.philosophy.heading2}
          </h2>
        </div>

        {/* Detailed Philosophy */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <h3 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-black/50 mb-6">
              {t.philosophy.title}
            </h3>
            <div className="w-12 h-[1px] bg-black/20 mb-8"></div>
          </div>
          
          <div className="md:col-span-8 font-elegant text-xl md:text-2xl leading-[1.7] text-black/80 space-y-12">
            <motion.div
              className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{t.philosophy.para1}</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{t.philosophy.para2}</p>
            </motion.div>

            <motion.div 
              className="bg-white/20 backdrop-blur-3xl p-8 rounded-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-black font-medium">{t.philosophy.para3}</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{t.philosophy.para4}</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{t.philosophy.para5}</p>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_4px_16px_0_rgba(0,0,0,0.025)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-black/70 italic">{t.philosophy.para6}</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
