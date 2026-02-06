import React from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activePage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center"
    >
      <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-12 interactive">
        <button onClick={() => setPage('home')} className="flex items-center gap-2 group">
           <div className="w-3 h-3 bg-signal rounded-full group-hover:scale-125 transition-transform duration-300"></div>
           <span className="font-bold text-lg tracking-tight text-onyx">AXON</span>
        </button>

        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`text-xs font-medium tracking-wide transition-colors ${isActive ? 'text-onyx' : 'text-onyx/40 hover:text-onyx'}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="glass-panel px-4 py-3 rounded-full">
         <button className="text-xs font-mono text-onyx/50 hover:text-signal transition-colors interactive">
            MENU +
         </button>
      </div>
    </motion.nav>
  );
};
export default Navbar;