import React, { useState } from 'react';
import { motion, MotionValue, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

interface ScrollProgressProps {
  scrollYProgress: MotionValue<number>;
  onScrollToTop: () => void;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ scrollYProgress, onScrollToTop }) => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Subscribe to scroll changes to update text and visibility
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Clamp percentage to 0-100 just in case
    const p = Math.min(Math.max(Math.round(latest * 100), 0), 100);
    setPercentage(p);
    
    // Show after 2% scroll
    if (latest > 0.02) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={onScrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 50px rgba(0, 71, 171, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-8 right-8 z-[50] w-16 h-16 bg-onyx/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.6)] group cursor-pointer"
        >
          {/* 1. SVG GEOMETRY - CLIPPING FIX */}
          <svg 
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" 
            viewBox="0 0 100 100"
          >
            {/* Background Track */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3"
              fill="none"
            />
            {/* Active Indicator - Using Framer Motion pathLength */}
            <motion.circle
              cx="50"
              cy="50"
              r="44"
              stroke="#0047AB"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>

          {/* 2. CENTER CONTENT (Percentage / Arrow Swap) */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
             {/* Default: Percentage */}
             <span className="font-mono text-[10px] font-bold text-cobalt absolute group-hover:opacity-0 transition-opacity duration-300">
               {percentage}%
             </span>
             
             {/* Hover: Arrow */}
             <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0">
                 <ChevronUp size={20} className="text-cobalt" />
             </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress;