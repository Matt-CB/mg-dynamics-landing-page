import React from 'react';

export function Header() {
  const scrollToPosition = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-12 py-8 z-50 transition-colors duration-500 pointer-events-none mix-blend-difference text-white">
      <div className="text-[10px] tracking-[0.3em] font-semibold uppercase">A Holding Company</div>
      <div className="flex space-x-8 lg:space-x-12 hidden md:flex pointer-events-auto">
        <button 
          onClick={() => scrollToPosition('hero')} 
          className="text-[10px] tracking-[0.3em] uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToPosition('expansion')} 
          className="text-[10px] tracking-[0.3em] uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none"
        >
          Ecosystem
        </button>
        <button 
          onClick={() => scrollToPosition('impact')} 
          className="text-[10px] tracking-[0.3em] uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none"
        >
          Impact
        </button>
        <button 
          onClick={() => scrollToPosition('subsidiaries')} 
          className="text-[10px] tracking-[0.3em] uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none"
        >
          Network
        </button>
        <button 
          onClick={() => scrollToPosition('contact')} 
          className="text-[10px] tracking-[0.3em] uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none"
        >
          Contact
        </button>
      </div>
      <div className="text-[10px] tracking-[0.3em] font-semibold uppercase">EST. 2026</div>
    </nav>
  );
}
