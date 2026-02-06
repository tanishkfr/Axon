import React from 'react';
import { motion } from 'framer-motion';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const glitchText = (text: string) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.1, delay: i * 0.05 + 0.5 }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <motion.div
      key="home"
      className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh] gap-12"
      exit={{ opacity: 0 }}
    >
      <div className="flex-1 space-y-8 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-cobalt/30 bg-cobalt/5 text-cobalt text-[10px] font-mono tracking-widest uppercase">
          <div className="w-1 h-1 bg-cobalt rounded-full animate-pulse"></div>
          Production Node: 1.4nm
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter mix-blend-difference">
          {glitchText("SILICON")} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-transparent">
            {glitchText("ARCHITECT")}
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-md text-white/60 font-mono text-sm leading-relaxed border-l border-cobalt pl-4"
        >
          Engineered for the Exascale Era. We fabricate the neural substrate for next-generation machine intelligence.
          <br/><br/>
          // STATUS: FABRICATION ACTIVE
        </motion.p>
        
        <motion.button 
           onClick={() => setPage('specs')}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2 }}
           className="group flex items-center gap-4 interactive"
        >
           <div className="h-12 w-12 border border-white/20 flex items-center justify-center group-hover:bg-cobalt group-hover:border-cobalt transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-45 transition-transform duration-500">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
           </div>
           <span className="font-mono text-xs tracking-widest group-hover:text-cobalt transition-colors">INITIATE_BLUEPRINT</span>
        </motion.button>
      </div>

      <div className="flex-1 w-full flex items-center justify-center perspective-1000">
        <motion.div 
           initial={{ rotateX: 60, rotateZ: 0, scale: 0.8, opacity: 0 }}
           animate={{ rotateX: 50, rotateZ: 360, scale: 1, opacity: 1 }}
           transition={{ 
             rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
             opacity: { duration: 1 }
           }}
           className="relative w-64 h-64 md:w-96 md:h-96 preserve-3d"
        >
           {/* WAFER LAYERS */}
           <div className="absolute inset-0 rounded-full border border-white/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent backdrop-blur-sm"></div>
           <div className="absolute inset-4 rounded-full border border-dashed border-cobalt/30 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
           <div className="absolute inset-12 rounded-full border border-white/5"></div>
           
           {/* Holographic Shine */}
           <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-20" style={{ transform: 'translateZ(20px)' }}></div>
           
           {/* Central Chip */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-obsidian border border-cobalt shadow-[0_0_30px_rgba(0,71,171,0.4)] flex items-center justify-center" style={{ transform: 'translateZ(40px)' }}>
              <div className="w-16 h-16 border border-white/10 grid grid-cols-4 gap-px bg-white/5">
                 {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="bg-cobalt/20"></div>
                 ))}
              </div>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;