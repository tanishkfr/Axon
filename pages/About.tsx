import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div 
       key="about"
       className="max-w-6xl mx-auto flex flex-col justify-center min-h-[70vh]"
       exit={{ opacity: 0 }}
    >
       <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 border-r border-white/10 pr-8">
             <div className="sticky top-32">
                <div className="w-full aspect-[3/4] bg-white/5 border border-white/10 relative overflow-hidden mb-6">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-obsidian opacity-80"></div>
                   <div className="absolute bottom-4 left-4 font-mono text-xs">
                      FIG 1.0 <br/>
                      THE ARCHITECT
                   </div>
                   {/* Abstract graphic */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cobalt rounded-full opacity-50"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full"></div>
                </div>
                <p className="font-mono text-xs text-white/40 text-justify">
                   Hardware is no longer passive. It is an extension of the human nervous system. We design for latency that is imperceptible to the biological mind.
                </p>
             </div>
          </div>
          
          <div className="md:col-span-8 space-y-20">
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
             >
                <h1 className="text-6xl md:text-8xl font-bold uppercase leading-[0.85] mb-8">
                   Human <br/> Centric <br/> <span className="text-cobalt">Silicon</span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed font-light text-white/80">
                   "We don't build chips for machines. We build them for the minds that command them."
                </p>
             </motion.div>

             <div className="grid grid-cols-2 gap-8">
                <div>
                   <h3 className="text-cobalt font-mono text-xs mb-4 uppercase">/// Methodology</h3>
                   <p className="text-sm text-white/60 leading-relaxed">
                      Our HCD (Human-Centered Design) approach integrates neuro-feedback loops directly into the silicon layout, prioritizing threads based on user intent prediction models.
                   </p>
                </div>
                <div>
                   <h3 className="text-cobalt font-mono text-xs mb-4 uppercase">/// Sustainability</h3>
                   <p className="text-sm text-white/60 leading-relaxed">
                      Zero-waste fabrication utilizing atomic recycling. We achieved a net-zero carbon footprint for our 1.4nm node production line in 2025.
                   </p>
                </div>
             </div>
          </div>
       </div>
    </motion.div>
  );
};

export default About;