import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import { Language } from '../../translations';
import { motion, AnimatePresence } from 'motion/react';
import { Languages, ChevronDown, Search } from 'lucide-react';

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToPosition = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'pt', label: 'Português' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '简体中文' },
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'ko', label: '한국어' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'th', label: 'ไทย' },
    { code: 'fil', label: 'Filipino' },
    { code: 'it', label: 'Italiano' },
    { code: 'he', label: 'עברית' },
    { code: 'ar', label: 'العربية' },
  ];

  const isLongLang = ['de', 'pt', 'fr', 'id', 'fil', 'it', 'he'].includes(language);
  const isAsianLang = ['zh', 'zh-TW', 'ja', 'ko', 'th', 'ar'].includes(language);

  const filteredLanguages = languages.filter(lang => 
    lang.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const fontSizeClass = isAsianLang ? 'text-[12px]' : 'text-[10px]';
  const trackingClass = isLongLang ? 'tracking-[0.18em]' : isAsianLang ? 'tracking-[0.15em]' : 'tracking-[0.3em]';
  const spacingClass = isLongLang ? 'space-x-4 lg:space-x-8' : isAsianLang ? 'space-x-6 lg:space-x-10' : 'space-x-8 lg:space-x-12';

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-12 py-8 z-50 transition-colors duration-500 pointer-events-none mix-blend-difference text-white">
      <div className={`${fontSizeClass} ${isLongLang ? 'tracking-[0.2em]' : isAsianLang ? 'tracking-[0.15em]' : 'tracking-[0.3em]'} font-semibold uppercase shrink-0`}>{t.header.holdingCompany}</div>
      <div className={`flex ${spacingClass} hidden md:flex pointer-events-auto items-center`}>
        <button 
          onClick={() => scrollToPosition('hero')} 
          className={`${fontSizeClass} ${trackingClass} uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none whitespace-nowrap`}
        >
          {t.header.home}
        </button>
        <button 
          onClick={() => scrollToPosition('expansion')} 
          className={`${fontSizeClass} ${trackingClass} uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none whitespace-nowrap`}
        >
          {t.header.ecosystem}
        </button>
        <button 
          onClick={() => scrollToPosition('impact')} 
          className={`${fontSizeClass} ${trackingClass} uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none whitespace-nowrap`}
        >
          {t.header.impact}
        </button>
        <button 
          onClick={() => scrollToPosition('subsidiaries')} 
          className={`${fontSizeClass} ${trackingClass} uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none whitespace-nowrap`}
        >
          {t.header.network}
        </button>
        <button 
          onClick={() => scrollToPosition('contact')} 
          className={`${fontSizeClass} ${trackingClass} uppercase opacity-50 cursor-pointer hover:opacity-100 transition-opacity bg-transparent border-none p-0 appearance-none whitespace-nowrap`}
        >
          {t.header.contact}
        </button>
      </div>
      
      <div className="flex items-center space-x-6 pointer-events-auto">
        <div className="relative">
          <button 
            onClick={() => {
              setShowLangMenu(!showLangMenu);
              setSearchQuery('');
            }}
            className={`flex items-center space-x-2 ${fontSizeClass} ${isAsianLang ? 'tracking-[0.15em]' : 'tracking-[0.3em]'} font-semibold uppercase group hover:text-white transition-colors cursor-pointer bg-white/5 border border-white/10 px-3 py-2 rounded-full`}
          >
            <Languages size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">{language}</span>
            <ChevronDown size={10} className={`opacity-40 transition-transform duration-300 ${showLangMenu ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {showLangMenu && (
              <>
                <div 
                  className="fixed inset-0 bg-transparent" 
                  onClick={() => setShowLangMenu(false)}
                />
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-4 bg-white text-black py-2 rounded-xl shadow-2xl flex flex-col min-w-[200px] max-h-[80vh] sm:max-h-[400px] border border-black/5 pointer-events-auto z-[60]"
                  >
                    <div className="px-4 py-2 border-b border-black/5 shrink-0">
                      <p className="text-[8px] tracking-[0.2em] text-black/40 font-bold uppercase mb-3 px-2">Select Language</p>
                      <div className="relative flex items-center">
                        <Search size={12} className="absolute left-3 text-black/30" />
                        <input 
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                          className="w-full bg-black/[0.03] border-none rounded-lg py-2 pl-9 pr-4 text-[10px] tracking-wider focus:ring-1 focus:ring-black/10 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar touch-pan-y pb-2">
                      {filteredLanguages.length > 0 ? (
                        filteredLanguages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setShowLangMenu(false);
                              setSearchQuery('');
                            }}
                            className={`w-full px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase text-left transition-colors flex items-center justify-between group ${
                              language === lang.code 
                              ? 'text-black font-bold bg-black/[0.03]' 
                              : 'text-black/60 hover:text-black hover:bg-black/[0.02]'
                            }`}
                          >
                            {lang.label}
                            {language === lang.code && <div className="w-1 h-1 rounded-full bg-black" />}
                          </button>
                        ))
                      ) : (
                        <div className="px-6 py-4 text-[10px] text-black/40 text-center italic">
                          No languages found
                        </div>
                      )}
                    </div>
                  </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <div className={`${fontSizeClass} ${trackingClass} font-semibold uppercase hidden sm:block`}>{t.header.est}</div>
      </div>
    </nav>
  );
}
