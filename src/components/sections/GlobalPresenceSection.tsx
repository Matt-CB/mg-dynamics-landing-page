import React from 'react';

export function GlobalPresenceSection() {
  return (
    <section id="network" className="relative w-full h-[80vh] flex flex-col items-center justify-start pointer-events-auto bg-transparent px-12 border-t border-black/5">
      <div className="z-10 text-center mt-32 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-black/10 mb-8"></div>
        <div className="text-[10px] tracking-[0.3em] font-semibold text-black/50 uppercase mb-4">Network</div>
        <h2 className="font-serif text-[56px] leading-none tracking-[-0.02em] text-black">
          Global Perspective.
        </h2>
      </div>
      {/* The curved earth is drawn by the Three.js Canvas */}
    </section>
  );
}
