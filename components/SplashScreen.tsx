import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence Timeline
    const timer1 = setTimeout(() => setPhase(1), 200);  // Text Reveal
    const timer2 = setTimeout(() => setPhase(2), 800);  // Ticker Strip Expand
    const timer3 = setTimeout(() => onComplete(), 2800); // Exit
    
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, [onComplete]);

  // Ticker content loop
  const tickerText = "FAB 4.2 ONLINE // READY // INITIALIZING SECURE HANDSHAKE // ";
  const tickerContent = [...Array(8)].map((_, i) => (
      <span key={i} className="mx-4">{tickerText}</span>
  ));

  return (
    <motion.div 
       className="fixed inset-0 z-[9999] bg-cobalt flex flex-col items-center justify-center overflow-hidden"
       initial={{ y: 0 }}
       exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
       <div className="relative w-full h-full flex items-center justify-center">
          
          {/* PHASE 1: MASSIVE TYPOGRAPHY */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, letterSpacing: "-0.05em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "-0.02em" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[18vw] font-black text-white leading-none select-none tracking-tighter mix-blend-soft-light"
          >
            AXON
          </motion.h1>

          {/* PHASE 2: TICKER STRIP */}
          <AnimatePresence>
            {phase >= 2 && (
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-1/2 left-0 w-full h-12 bg-white flex items-center overflow-hidden -translate-y-1/2 origin-center shadow-[0_0_50px_rgba(0,0,0,0.3)] z-10"
                >
                    <motion.div 
                        className="flex whitespace-nowrap"
                        animate={{ x: "-20%" }}
                        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                    >
                         <div className="flex items-center text-cobalt font-mono font-bold text-sm uppercase tracking-[0.2em]">
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