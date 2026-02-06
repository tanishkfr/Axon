import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Cpu, Network, Layers, Zap, Box, Activity, ShieldCheck } from 'lucide-react';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="w-full">
      
      {/* SECTION 1: INDUSTRIAL HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 sticky top-0 bg-surface z-0">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block border border-gray-200 rounded-full px-4 py-1 mb-6 bg-gray-50">
             <span className="text-xs font-mono font-medium text-gray-500 tracking-widest uppercase">Process A-14 // Production Ready</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-onyx mb-8 leading-[0.9]">
            The Atomic<br/>
            <span className="text-azure">Limit.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 font-medium leading-relaxed mb-10">
             We have moved beyond traditional lithography. 
             Utilizing directed self-assembly and backside power delivery to fabricate the impossible.
          </p>
          <div className="flex justify-center gap-6">
             <button onClick={() => setPage('specs')} className="bg-onyx text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide hover:bg-gray-800 transition-colors">
               VIEW DATASHEET
             </button>
             <button onClick={() => setPage('about')} className="px-8 py-4 rounded-lg font-bold text-sm tracking-wide border border-gray-200 hover:border-azure hover:text-azure transition-colors">
               FOUNDRY VISION
             </button>
          </div>
        </motion.div>
        
        {/* Hero Visual: Wafer Map */}
        <motion.div 
           style={{ y }}
           className="mt-24 w-full max-w-[1200px] aspect-[21/9] bg-onyx rounded-2xl overflow-hidden relative flex items-center justify-center shadow-2xl"
        >
           {/* Generative Grid Pattern */}
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           <div className="relative z-10 grid grid-cols-4 gap-4 w-3/4 opacity-50">
              {Array.from({ length: 8 }).map((_, i) => (
                 <div key={i} className="h-16 border border-white/20 rounded-sm bg-white/5 backdrop-blur-sm"></div>
              ))}
           </div>
           <div className="absolute bottom-4 left-6 text-white/40 font-mono text-xs">
              FIG 1.1: 300MM WAFER TOPOGRAPHY
           </div>
        </motion.div>
      </section>

      {/* SECTION 2: ENGINEERING METRICS */}
      <section className="bg-surface relative z-10 pt-40 pb-40 px-6 md:px-20 border-t border-gray-100">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-20">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                  <h3 className="text-xs font-mono text-azure mb-4 uppercase tracking-widest">/// Power Efficiency</h3>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 text-onyx">GAAFET Topology.</h2>
                  <p className="text-xl text-gray-500 leading-relaxed">
                     Our Gate-All-Around (GAA) nanosheet transistors provide electrostatic control on all four sides of the channel, enabling aggressive voltage scaling without performance loss.
                  </p>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               >
                  <h3 className="text-xs font-mono text-azure mb-4 uppercase tracking-widest">/// Interconnects</h3>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 text-onyx">Photonics Integrated.</h2>
                  <p className="text-xl text-gray-500 leading-relaxed">
                     Native silicon photonics integration allows for direct optical I/O, breaking the bandwidth bottleneck of traditional copper interconnects in hyperscale clusters.
                  </p>
               </motion.div>
            </div>

            {/* Visual Side */}
            <div className="relative h-[600px] bg-paper rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent opacity-80"></div>
               {/* Abstract Stack Visualization */}
               <div className="relative z-10 w-64 perspective-1000">
                  <motion.div 
                     animate={{ rotateX: 60, rotateZ: 360 }}
                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     className="w-full h-64 border-2 border-onyx/10 bg-white/50 backdrop-blur-xl rounded-lg transform-style-3d relative"
                  >
                     <div className="absolute inset-0 border border-azure/20 rounded-lg transform translate-z-10"></div>
                     <div className="absolute inset-0 border border-azure/20 rounded-lg transform translate-z-20"></div>
                     <div className="absolute inset-0 bg-azure/5 rounded-lg transform translate-z-30 flex items-center justify-center">
                        <Cpu className="w-16 h-16 text-azure opacity-50" />
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 3: MODULAR ARCHITECTURE (Replaces Bento) */}
      <section ref={targetRef} className="bg-onyx text-white py-32 px-6 md:px-12 rounded-t-[3rem] relative z-20">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-10">
               <div>
                  <h2 className="text-5xl md:text-7xl font-bold mb-4">Fabrication<br/>Modules</h2>
                  <p className="text-white/40 font-mono text-sm">SELECT COMPONENT FOR INTEGRATION</p>
               </div>
               <div className="hidden md:block text-right">
                  <div className="text-3xl font-bold text-azure">300mm</div>
                  <div className="text-sm text-white/40">WAFER STANDARD</div>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
               {[
                  { title: "LOGIC", desc: "High-Performance Compute Cores", icon: Cpu },
                  { title: "MEMORY", desc: "HBM4 & LPDDR6 Integration", icon: Box },
                  { title: "ANALOG", desc: "Precision SerDes & RF Front-End", icon: Activity },
                  { title: "SECURITY", desc: "Root-of-Trust Enclaves", icon: ShieldCheck },
                  { title: "POWER", desc: "Integrated Voltage Regulators", icon: Zap },
                  { title: "NETWORK", desc: "Silicon Photonics Fabric", icon: Network },
               ].map((item, i) => (
                  <div key={i} className="group bg-white/5 border border-white/5 p-12 hover:bg-white/10 transition-colors duration-300">
                     <item.icon className="w-10 h-10 text-azure mb-8 opacity-60 group-hover:opacity-100 transition-opacity" />
                     <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                     <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 4: SUSTAINABILITY FOOTER */}
      <section className="bg-onyx text-white pb-32 px-6">
         <div className="max-w-7xl mx-auto border-t border-white/10 pt-20 flex flex-col md:flex-row justify-between">
            <div className="mb-12 md:mb-0">
               <h4 className="text-sm font-bold uppercase tracking-widest text-azure mb-4">Sustainable Foundry</h4>
               <p className="max-w-md text-white/60 leading-relaxed">
                  Our facilities operate on 100% renewable energy. Water recycling systems reclaim 98% of ultra-pure water used in the lithography process.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-12">
               <div>
                  <div className="text-4xl font-bold text-white mb-1">0%</div>
                  <div className="text-xs font-mono text-white/40">LANDFILL WASTE</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs font-mono text-white/40">MONITORING</div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};
export default Home;