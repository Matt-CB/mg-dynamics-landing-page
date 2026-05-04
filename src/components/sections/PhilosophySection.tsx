import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';

export function PhilosophySection() {
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
            Who We Are
            <span className="w-8 h-[1px] bg-black/20"></span>
          </p>
          <h2 ref={title1Ref} className="font-serif text-5xl md:text-[80px] lg:text-[100px] leading-[1.05] tracking-[-0.03em] font-normal text-black mb-4">
            We don't just invest in companies.
          </h2>
          <h2 ref={title2Ref} className="font-serif text-5xl md:text-[80px] lg:text-[100px] leading-[1.05] tracking-[-0.03em] font-normal">
            We architect ecosystems.
          </h2>
        </div>

        {/* Detailed Philosophy */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <h3 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-black/50 mb-6">
              The Convergence Point
            </h3>
            <div className="w-12 h-[1px] bg-black/20 mb-8"></div>
          </div>
          
          <div className="md:col-span-8 font-elegant text-xl md:text-2xl leading-[1.7] text-black/80 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            >
              M&G is a global holding company engineered to build, acquire, and scale the systems that define the next era of industry. Headquartered in the United States and operating across international markets, we do not position ourselves as a traditional conglomerate.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              We operate as a structured ecosystem of companies, designed to accelerate innovation across technology, robotics, software, real estate, entertainment, and frontier research.
            </motion.p>
            <motion.p 
              className="text-black font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              We believe industries are no longer separate, they are converging. And M&G exists to operate at that convergence point.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Each company within M&G functions independently, but is amplified by shared intelligence, capital efficiency, and a unified long-term vision. We are not building companies in isolation. We are building a network of interconnected capabilities designed to compound over time.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Beyond building and scaling our own ecosystem, we actively invest in and search for new ventures, emerging founders, and early-stage entrepreneurs with the potential to shape the future. We exist to give new businesses and new entrepreneurs the opportunity to scale, grow, and compete in this new market era, where speed, intelligence, and execution define success.
            </motion.p>
            <motion.p 
              className="text-black/70 italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            >
              We believe the next generation of global companies will not be discovered in traditional systems, but accelerated through aligned capital, infrastructure, and strategic support. M&G positions itself as that catalyst.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
