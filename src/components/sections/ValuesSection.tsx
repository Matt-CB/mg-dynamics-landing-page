import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const VALUES = ['Focus', 'Partnership', 'Growth', 'Integrity'];

export function ValuesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-center pointer-events-auto bg-transparent px-12 text-white transition-opacity duration-1000" id="values-section">
      <div className="z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-[56px] leading-[1.1] tracking-[-0.02em]">
            Connecting vision<br />with execution.
          </h2>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mt-8 mb-8 border-l border-white/20 pl-4 py-1">
            Empowering the next generation<br />of global leaders.
          </p>
        </div>
        <div className="flex justify-start md:justify-end">
          <ul className="flex flex-col gap-10 border-l border-white/20 pl-10 relative">
            {VALUES.map((val, i) => (
              <li
                key={val}
                ref={(el) => { itemsRef.current[i] = el; }}
                className="relative"
              >
                <div className="absolute top-1 -left-[45px] w-[9px] h-[9px] rounded-full bg-white/20 border border-white/40">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-white"></div>
                </div>
                <div className="font-serif text-[28px] mb-2 leading-none">{val}</div>
                <div className="text-[9px] tracking-wide text-white/60 max-w-[200px]">Core pillar of our organizational foundation.</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
