import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-surface pt-32 pb-20">
       
       {/* HERO */}
       <div className="max-w-4xl mx-auto px-6 mb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
             <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-onyx mb-8">
                The Foundry<br/>for the Future.
             </h1>
             <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                AXON is an independent semiconductor manufacturer dedicated to the absolute limit of physics. We build the substrate for machine intelligence.
             </p>
          </motion.div>
       </div>

       {/* LEADERSHIP / HCD SECTION */}
       <div className="bg-paper py-32 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1">
                <h3 className="text-sm font-bold text-azure uppercase tracking-widest mb-6">Our Philosophy</h3>
                <h2 className="text-4xl font-bold text-onyx mb-6">Bio-Mimetic Silicon.</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                   <p>
                      Traditional chip design focuses solely on clock cycles. Our <strong>Human-Centered Design (HCD)</strong> methodology prioritizes the interaction latency between silicon and the biological mind.
                   </p>
                   <p>
                      By optimizing our architecture for neural-network-native workloads, we are bridging the gap between artificial and biological intelligence.
                   </p>
                </div>
                
                <div className="mt-12 flex gap-4">
                   <div className="px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="text-3xl font-bold text-onyx">2024</div>
                      <div className="text-xs font-mono text-gray-400">FOUNDED</div>
                   </div>
                   <div className="px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="text-3xl font-bold text-onyx">140+</div>
                      <div className="text-xs font-mono text-gray-400">PATENTS</div>
                   </div>
                </div>
             </div>
             <div className="order-1 lg:order-2 relative aspect-square bg-onyx rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-azure/20 to-transparent"></div>
                <div className="text-center relative z-10">
                   <div className="w-32 h-32 mx-auto bg-gray-800 rounded-full border-4 border-gray-700 mb-6"></div>
                   <div className="text-white font-bold text-xl">Tanishk K.</div>
                   <div className="text-azure font-mono text-sm">FOUNDER & CEO</div>
                </div>
             </div>
          </div>
       </div>

       {/* GLOBAL FOOTPRINT */}
       <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8">
             <h2 className="text-4xl font-bold text-onyx">Global Operations</h2>
             <p className="text-gray-500 font-medium">Strategic fabrication nodes across 3 continents.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
                { city: "Bengaluru, IN", role: "HQ & DESIGN CENTER", icon: Globe },
                { city: "Dresden, DE", role: "FAB 1 (LOGIC)", icon: Zap },
                { city: "Austin, US", role: "FAB 2 (PACKAGING)", icon: ShieldCheck },
             ].map((loc, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-8 hover:border-azure transition-colors">
                   <loc.icon className="w-8 h-8 text-onyx mb-6" />
                   <h3 className="text-2xl font-bold text-onyx mb-2">{loc.city}</h3>
                   <div className="text-xs font-mono text-gray-400 tracking-widest">{loc.role}</div>
                </div>
             ))}
          </div>
       </div>

    </div>
  );
};
export default About;