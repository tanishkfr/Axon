import React, { useState } from 'react';
import { motion, MotionValue, useMotionValueEvent } from 'framer-motion';
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
    setPercentage(Math.round(latest * 100));
    // Only show after scrolling down 5%
    if (latest > 0.05) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
  });

  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.button
      onClick={onScrollToTop}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.5, 
        y: isVisible ? 0 : 20 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed bottom-8 right-8 z-50 w-16 h-16 bg-onyx/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.6)] group hover:border-cobalt/50 transition-colors overflow-hidden ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {/* 1. SVG CIRCULAR TRACK */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 p-1 pointer-events-none">
        {/* Background Track */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="2"
          fill="none"
        />
        {/* Active Progress Path */}
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#0047AB"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          style={{ pathLength: scrollYProgress }}
          strokeLinecap="round"
        />
      </svg>

      {/* 2. INNER CONTENT (Text / Icon) */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
         {/* Percentage (Default State) */}
         <span className="font-mono text-[10px] font-bold text-white group-hover:opacity-0 transition-opacity duration-300 absolute">
           {percentage}%
         </span>
         
         {/* Arrow (Hover State) */}
         <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-0.5">
             <ChevronUp size={20} className="text-cobalt" />
         </div>
      </div>
      
      {/* 3. HOVER GLOW EFFECT */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-cobalt/10 transition-opacity duration-300 pointer-events-none"></div>
    </motion.button>
  );
};

export default ScrollProgress;