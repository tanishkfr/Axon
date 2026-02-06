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
    <div className="min-h-screen bg-surface text-onyx font-sans selection:bg-azure/20 selection:text-onyx">
      <CustomCursor />
      
      {/* Removed noise and grid backgrounds for 'Stark White' aesthetic */}
      
      {/* Page Transitions */}
      {/* Note: Removed 'h-screen overflow-y-auto' to allow native window scroll for sticky elements */}
      <main className="relative z-10 w-full min-h-screen">
        <AnimatePresence mode="wait">
           <motion.div
             key={activePage}
             initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
             transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
           >
             {children}
           </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
export default Layout;