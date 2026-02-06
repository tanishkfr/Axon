import React from 'react';
import { motion } from 'framer-motion';
import { SPECS, FEATURES } from '../constants';

const TechSpecs: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto pt-12">
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="mb-24"
      >
         <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Specifications</h1>
         <p className="text-onyx/40 font-mono text-sm uppercase tracking-widest">System Architecture v4.0</p>
      </motion.div>

      {/* Grid Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mb-32">
         {SPECS.map((spec, i) => (
            <motion.div 
              key={spec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border-t border-onyx/10 pt-6"
            >
               <div className="flex justify-between items-baseline mb-2">
                  <span className="font-mono text-xs text-signal font-medium">0{i+1}</span>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-onyx/40">{spec.parameter}</h3>
               </div>
               <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-light tracking-tighter text-onyx">{spec.value}</span>
                  <span className="text-xl text-onyx/40 font-medium">{spec.unit}</span>
               </div>
               <p className="mt-4 text-sm text-onyx/60 leading-relaxed max-w-xs">{spec.description}</p>
            </motion.div>
         ))}
      </div>

      {/* Feature List */}
      <div className="bg-paper rounded-3xl p-12">
         <h3 className="text-sm font-mono text-onyx/40 uppercase mb-12">/// Core Capabilities</h3>
         <div className="space-y-0">
            {FEATURES.map((feature, i) => (
               <div key={i} className="flex flex-col md:flex-row md:items-center py-8 border-b border-onyx/5 last:border-0 group hover:bg-white transition-colors px-4 -mx-4 rounded-xl">
                  <div className="w-48 font-bold text-lg text-onyx">{feature.title}</div>
                  <div className="flex-1 text-onyx/60 font-medium">{feature.description}</div>
                  <div className="w-32 text-right font-mono text-xs text-signal mt-4 md:mt-0 bg-signal/5 px-2 py-1 rounded">
                     {feature.stat}
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};
export default TechSpecs;