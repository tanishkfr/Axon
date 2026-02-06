import React from 'react';
import { motion } from 'framer-motion';
import { SPECS, FEATURES } from '../constants';
import { ArrowDownCircle, FileText } from 'lucide-react';

const TechSpecs: React.FC = () => {
  return (
    <div className="bg-surface pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
         
         {/* HEADER */}
         <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-200 pb-10">
            <div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-onyx mb-4">
                  A-1400<br/>Datasheet
               </h1>
               <p className="text-lg text-gray-500 font-medium">
                  Revision 4.2 // Angstrom Class Logic
               </p>
            </div>
            <button className="flex items-center gap-2 mt-8 md:mt-0 px-6 py-3 bg-paper rounded-lg hover:bg-gray-200 transition-colors text-sm font-bold text-onyx">
               <FileText size={18} /> DOWNLOAD PDF
            </button>
         </div>

         {/* BLOCK DIAGRAM VISUALIZATION */}
         <div className="mb-32">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">/// Architecture Block Diagram</h3>
            <div className="w-full h-[400px] border border-gray-200 rounded-xl bg-paper p-8 flex items-center justify-center relative overflow-hidden">
               {/* Simplified Chip Layout */}
               <div className="w-3/4 h-3/4 border-2 border-onyx/10 rounded-lg p-4 grid grid-cols-3 grid-rows-2 gap-4">
                  <div className="row-span-2 col-span-2 border border-azure/30 bg-azure/5 rounded flex items-center justify-center">
                     <span className="font-mono text-xs font-bold text-azure">COMPUTE FABRIC</span>
                  </div>
                  <div className="border border-gray-300 bg-white rounded flex items-center justify-center">
                     <span className="font-mono text-xs text-gray-500">SRAM</span>
                  </div>
                  <div className="border border-gray-300 bg-white rounded flex items-center justify-center">
                     <span className="font-mono text-xs text-gray-500">I/O</span>
                  </div>
               </div>
               {/* Labels */}
               <div className="absolute bottom-4 right-6 font-mono text-xs text-gray-400">
                  DIE SIZE: 420mm²
               </div>
            </div>
         </div>

         {/* SPECS GRID */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            {SPECS.map((spec, i) => (
               <motion.div 
                 key={spec.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.05 }}
                 className="border-t-2 border-gray-100 pt-6"
               >
                  <div className="font-mono text-xs text-azure mb-2">{spec.id} // {spec.parameter}</div>
                  <div className="text-3xl font-bold text-onyx mb-4">{spec.value}<span className="text-lg text-gray-400 ml-1">{spec.unit}</span></div>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                     {spec.description}
                  </p>
               </motion.div>
            ))}
         </div>

         {/* FEATURE DEEP DIVE */}
         <div className="bg-onyx text-white rounded-2xl p-12 lg:p-20">
            <h2 className="text-3xl font-bold mb-12">Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {FEATURES.map((feature, i) => (
                  <div key={i} className="group">
                     <feature.icon className="w-8 h-8 text-azure mb-6" />
                     <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                     <div className="text-xs font-mono text-white/40 mb-4">{feature.subtitle}</div>
                     <p className="text-white/60 text-sm leading-relaxed">
                        {feature.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>

      </div>
    </div>
  );
};
export default TechSpecs;