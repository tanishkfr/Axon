import React from 'react';
import { motion } from 'framer-motion';
import { SPECS, FEATURES } from '../constants';

const TechSpecs: React.FC = () => {
  return (
    <motion.div 
      key="specs"
      className="max-w-7xl mx-auto pt-8"
      exit={{ opacity: 0 }}
    >
      <div className="border-b border-white/10 pb-8 mb-12 flex items-end justify-between">
         <div>
            <h2 className="text-cobalt font-mono text-xs tracking-widest mb-2">FILE: ARCH_V4.2.1</h2>
            <h1 className="text-5xl font-bold">TECHNICAL <br/> TOPOLOGY</h1>
         </div>
         <div className="hidden md:block text-right text-xs font-mono text-white/40">
            <div>DIMENSIONS: 1.4nm</div>
            <div>GATE: GAAFET</div>
            <div>MATERIAL: SiGe</div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-20">
         {SPECS.map((spec, i) => (
            <motion.div 
               key={spec.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-obsidian p-8 hover:bg-white/[0.02] transition-colors group"
            >
               <div className="text-xs font-mono text-cobalt mb-4">0{i+1} // {spec.parameter}</div>
               <div className="text-4xl font-light mb-2 group-hover:text-cobalt transition-colors">{spec.value} <span className="text-lg text-white/30">{spec.unit}</span></div>
               <div className="text-xs text-white/40 leading-relaxed font-mono mt-4 border-t border-white/5 pt-4">
                  {spec.description}
               </div>
            </motion.div>
         ))}
      </div>

      <h3 className="text-2xl font-bold mb-8">VECTOR_CAPABILITIES</h3>
      <div className="space-y-4">
         {FEATURES.map((feature, i) => (
            <motion.div 
               key={i}
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.2 }}
               className="relative h-24 border border-white/10 flex items-center px-8 bg-white/[0.01] hover:bg-cobalt/5 transition-colors origin-left"
            >
               <div className="w-32 font-mono text-xs text-cobalt shrink-0">{feature.subtitle}</div>
               <div className="w-px h-8 bg-white/10 mx-8"></div>
               <div className="flex-1">
                  <h4 className="text-lg font-bold">{feature.title}</h4>
               </div>
               <div className="font-mono text-sm text-white/50">{feature.stat}</div>
               
               {/* Decorative ticks */}
               <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20"></div>
               <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20"></div>
            </motion.div>
         ))}
      </div>
    </motion.div>
  );
};

export default TechSpecs;