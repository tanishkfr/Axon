import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence Timeline
    const timer1 = setTimeout(() => setPhase(1), 200);  // Text Reveal
    const timer2 = setTimeout(() => setPhase(2), 800);  // Terminal Text Reveal
    const timer3 = setTimeout(() => onComplete(), 2800); // Exit
    
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, [onComplete]);

  // Ticker content loop
  const tickerText = "INIT_SEQUENCE // WAFER_ALIGNMENT: OK // LITHOGRAPHY_MASK: LOADED // ";
  const tickerContent = [...Array(4)].map((_, i) => (
      <span key={i} className="mx-4">{tickerText}</span>
  ));

  return (
    <motion.div 
       className="fixed inset-0 z-[9999] bg-cobalt flex flex-col items-center justify-center overflow-hidden"
       initial={{ y: 0 }}
       exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
       <div className="relative w-full h-full flex flex-col items-center justify-center">
          
          {/* PHASE 1: MASSIVE TYPOGRAPHY HERO */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, letterSpacing: "-0.05em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "-0.02em" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[20vw] font-black text-white leading-none select-none tracking-tighter mix-blend-soft-light z-20"
          >
            AXON
          </motion.h1>

          {/* PHASE 2: TECHNICAL TERMINAL STRIP (BELOW LOGO) */}
          <AnimatePresence>
            {phase >= 2 && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 w-full max-w-2xl overflow-hidden relative z-10 bg-black/20 backdrop-blur-sm border-y border-white/10 py-2"
                >
                    <motion.div 
                        className="flex whitespace-nowrap"
                        animate={{ x: "-20%" }}
                        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                    >
                         <div className="flex items-center text-white/80 font-mono font-medium text-xs md:text-sm tracking-widest">
                             {tickerContent}
                         </div>
                         <div className="flex items-center text-white/80 font-mono font-medium text-xs md:text-sm tracking-widest">
                             {tickerContent}
                         </div>
                    </motion.div>
                </motion.div>
            )}
          </AnimatePresence>

       </div>
    </motion.div>
  );
};

export default SplashScreen;