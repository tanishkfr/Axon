import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="max-w-[1600px] mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        {/* Left Column - Headline */}
        <div className="lg:col-span-8">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           >
             <div className="inline-flex items-center gap-3 mb-8 bg-paper px-4 py-2 rounded-full border border-concrete">
               <span className="w-2 h-2 bg-signal rounded-full animate-pulse"></span>
               <span className="text-xs font-mono text-onyx/60 uppercase tracking-wider">Node 1.4nm Available</span>
             </div>
             
             <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-onyx leading-[0.9] mb-8">
               Silicon <br/>
               <span className="text-onyx/20">Refined.</span>
             </h1>
           </motion.div>
        </div>

        {/* Right Column - Description & CTA */}
        <div className="lg:col-span-4 lg:mb-4">
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="text-lg md:text-xl text-onyx/60 font-medium leading-relaxed mb-8"
           >
             We engineer the invisible infrastructure of intelligence. 
             A reductionist approach to maximum computation.
           </motion.p>
           
           <motion.button 
             onClick={() => setPage('specs')}
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="group bg-onyx text-white px-8 py-4 rounded-full flex items-center gap-4 text-sm font-bold tracking-wide interactive"
           >
             View Technical Data
             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </motion.button>
        </div>
      </div>

      {/* Bottom Visual - Minimalist Wafer Representation */}
      <div className="mt-32 w-full h-[400px] bg-paper rounded-3xl border border-concrete relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent opacity-50"></div>
         {/* Animated Rings */}
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="w-[600px] h-[600px] border border-onyx/5 rounded-full absolute" 
         />
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="w-[400px] h-[400px] border border-onyx/10 rounded-full absolute border-dashed" 
         />
         <div className="w-32 h-32 bg-white shadow-2xl rounded-2xl border border-concrete flex items-center justify-center relative z-10">
            <div className="w-16 h-16 bg-onyx rounded-full"></div>
         </div>
      </div>
    </div>
  );
};
export default Home;