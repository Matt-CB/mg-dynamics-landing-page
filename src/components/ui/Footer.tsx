import React from 'react';

export function Footer() {
  return (
    <footer className="relative w-full bg-black text-white/50 py-12 px-6 md:px-12 lg:px-24 pointer-events-auto text-sm border-t border-white/10 z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-serif text-white tracking-tight mb-4">M&G</h2>
          <p className="max-w-xs text-xs tracking-wide leading-relaxed">
            A global holding company engineered to build, acquire, and scale the systems that define the next era of industry.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6 font-semibold">Initiatives</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Subsidiaries</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Frontier Research</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Real Estate</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Ventures</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6 font-semibold">Corporate</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Leadership</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Press</a></li>
            <li><a href="mailto:admin@mg-dynamics.com" className="hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact/Address */}
        <div>
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6 font-semibold">Headquarters</h4>
          <address className="not-italic text-sm space-y-1 mb-6 text-white/70">
            <p>1007 N Orange St. 4th Floor</p>
            <p>Suite 5305</p>
            <p>Wilmington, DE 19801</p>
            <p>New Castle, US</p>
          </address>
          <a href="mailto:admin@mg-dynamics.com" className="text-white hover:text-white/70 transition-colors duration-300">admin@mg-dynamics.com</a>
        </div>

      </div>

      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} M&G Holding Company. All rights reserved.</p>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Legal</a>
        </div>
      </div>
    </footer>
  );
}
