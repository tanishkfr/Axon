import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Detect scroll on the <main> element since Layout.tsx handles overflow
  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;

    const handleScroll = () => {
       setIsScrolled(main.scrollTop > 40);
    };

    main.addEventListener('scroll', handleScroll);
    return () => main.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  // Logic for appearance
  const isHome = activePage === 'home';
  // Text Color: Dark on light pages (unless scrolled), White on dark pages (or scrolled)
  const textColorClass = (!isHome && !isScrolled && !mobileMenuOpen) ? 'text-onyx' : 'text-white';
  const navBgClass = (isScrolled || mobileMenuOpen) ? 'bg-onyx border-b border-white/10' : 'bg-transparent border-b border-transparent';
  const logoColor = (!isHome && !isScrolled && !mobileMenuOpen) ? 'text-onyx' : 'text-white';

  // Ticker Content - Duplicated for seamless loop
  const tickerText = "FAB 4.2 ONLINE /// 1.4nm YIELD: 99.2% /// ACCEPTING Q3 ORDERS /// GLOBAL LOGISTICS ACTIVE /// ";
  const tickerContent = [...Array(4)].map((_, i) => (
      <span key={i} className="mx-4">{tickerText}</span>
  ));

  return (
    <div className="fixed top-0 left-0 w-full z-[100] font-sans">
      
      {/* 1. TICKER TAPE MARQUEE (Slower & Smaller) */}
      <div className="bg-cobalt text-white h-6 overflow-hidden flex items-center relative z-[101]">
         <motion.div 
           className="flex whitespace-nowrap font-mono text-[9px] font-bold tracking-[0.2em] uppercase"
           animate={{ x: "-50%" }}
           transition={{ duration: 60, ease: "linear", repeat: Infinity }}
         >
            <div className="flex">
                {tickerContent}
            </div>
            <div className="flex">
                {tickerContent}
            </div>
         </motion.div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav 
         className={`w-full transition-all duration-300 ${navBgClass}`}
         style={{ height: '80px' }} // Fixed height for consistency
      >
         <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            
            {/* LEFT: LOGO */}
            <button 
                onClick={() => setPage('home')} 
                className={`font-black text-3xl tracking-tighter relative z-50 transition-colors duration-300 ${logoColor} flex items-center gap-1`}
            >
                AXON
                <span className="w-2 h-2 bg-cobalt rounded-full mt-2"></span>
            </button>

            {/* CENTER: NAV LINKS (Desktop) */}
            <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
               {NAV_ITEMS.map((item) => {
                   const isActive = activePage === item.id;
                   
                   // Button Styles
                   let btnBase = "px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border";
                   let btnState = "";

                   if (isScrolled) {
                       // Scrolled (Dark BG): White Text, Transparent Pill
                       btnState = isActive 
                           ? "bg-white text-onyx border-white" 
                           : "text-white/70 border-transparent hover:bg-white/10 hover:text-white";
                   } else if (isHome) {
                       // Home (Dark BG): White Text
                       btnState = isActive 
                           ? "bg-white text-onyx border-white" 
                           : "text-white/70 border-transparent hover:bg-white/10 hover:text-white";
                   } else {
                       // Light Page (Light BG): Black Text
                       btnState = isActive 
                           ? "bg-onyx text-white border-onyx" 
                           : "text-onyx/60 border-transparent hover:bg-onyx/5 hover:text-onyx";
                   }

                   return (
                       <button
                         key={item.id}
                         onClick={() => setPage(item.id)}
                         className={`${btnBase} ${btnState}`}
                       >
                         {item.label}
                       </button>
                   );
               })}
            </div>

            {/* RIGHT: ACTION BUTTON (Desktop) */}
            <div className="hidden md:block">
               <button 
                  onClick={() => setPage('contact')}
                  className={`group px-6 py-3 rounded-full text-xs font-bold border flex items-center gap-2 transition-all duration-300 ${
                      (!isHome && !isScrolled) 
                        ? 'bg-onyx text-white border-onyx hover:bg-cobalt hover:border-cobalt' 
                        : 'bg-white text-onyx border-white hover:bg-cobalt hover:text-white hover:border-cobalt'
                  }`}
               >
                  PARTNER WITH US
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            {/* RIGHT: MOBILE MENU TOGGLE */}
            <div className="md:hidden relative z-50">
               <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`flex items-center gap-2 font-mono text-xs uppercase font-bold transition-colors duration-300 ${
                      mobileMenuOpen ? 'text-white' : textColorClass
                  }`}
               >
                  <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
            </div>
         </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-0 bg-onyx z-40 pt-32 px-6 flex flex-col"
            >
                <div className="flex flex-col gap-6 items-start">
                    {NAV_ITEMS.map((item, i) => (
                        <button
                        key={item.id}
                        onClick={() => {
                            setPage(item.id);
                            setMobileMenuOpen(false);
                        }}
                        className="text-4xl font-black text-white tracking-tighter hover:text-cobalt transition-colors flex items-center gap-4 group"
                        >
                            <span className="text-xs font-mono text-white/20 group-hover:text-cobalt/60 transition-colors">0{i+1}</span>
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="mt-auto mb-12 border-t border-white/10 pt-8">
                     <button 
                        onClick={() => {
                            setPage('contact');
                            setMobileMenuOpen(false);
                        }}
                        className="w-full py-4 bg-white text-onyx font-bold uppercase tracking-widest rounded-full hover:bg-cobalt hover:text-white transition-colors"
                     >
                        Partner with Us
                     </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;