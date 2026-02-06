import React, { ReactNode } from 'react';
import CustomCursor from './CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
  activePage: string;
  setPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setPage }) => {
  return (
    <div className="min-h-screen bg-surface text-onyx font-sans overflow-hidden relative selection:bg-signal/20 selection:text-onyx">
      <CustomCursor />
      
      {/* Background Noise & Grid */}
      <div className="fixed inset-0 z-0 bg-noise opacity-50 pointer-events-none mix-blend-multiply"></div>
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#E5E5E5 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Page Transitions - Soft Fade/Slide instead of Wipe */}
      <main className="relative z-10 w-full h-screen overflow-y-auto no-scrollbar pt-24 pb-12 px-6 md:px-12">
        <AnimatePresence mode="wait">
           <motion.div
             key={activePage}
             initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Apple-like easing
           >
             {children}
           </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
export default Layout;