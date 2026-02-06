import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activePage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-[1400px] mx-auto px-6 h-12 flex justify-between items-center">
        {/* Logo Area */}
        <button onClick={() => setPage('home')} className="text-lg font-bold tracking-tight text-onyx hover:opacity-70 transition-opacity">
           AXON
        </button>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-xs font-medium">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`transition-colors ${activePage === item.id ? 'text-onyx' : 'text-gray-500 hover:text-azure'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button onClick={() => setPage('contact')} className="bg-onyx text-white text-xs px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition-colors">
           Contact Sales
        </button>
      </div>
    </motion.nav>
  );
};
export default Navbar;