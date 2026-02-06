import React from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { Cpu } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 backdrop-blur-sm bg-obsidian/60 border-b border-white/5"
    >
      <button 
        onClick={() => setPage('home')} 
        className="flex items-center gap-3 group interactive"
      >
        <div className="relative w-8 h-8 bg-cobalt/20 border border-cobalt flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cobalt translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <Cpu className="w-4 h-4 text-cobalt group-hover:text-white relative z-10 transition-colors" />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-bold text-sm tracking-widest leading-none text-white">SILICON</span>
          <span className="text-[10px] font-mono text-cobalt tracking-[0.2em] leading-none mt-1">ARCHITECT</span>
        </div>
      </button>

      <div className="hidden md:flex gap-12">
        {NAV_ITEMS.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`relative text-xs font-mono tracking-widest transition-colors py-2 interactive group ${isActive ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
            >
              <span className="mr-1 opacity-50 text-[10px]">{`//`}</span> {item.label}
              {isActive && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-cobalt shadow-[0_0_8px_rgba(0,71,171,0.8)]"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="md:hidden">
        <div className="w-6 h-6 border border-white/20 flex flex-col justify-center items-center gap-1">
            <div className="w-3 h-px bg-white"></div>
            <div className="w-3 h-px bg-white"></div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;