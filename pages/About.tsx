import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pt-20 pb-20 flex flex-col justify-center min-h-[70vh]">
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
       >
          <h2 className="text-sm font-mono text-signal uppercase tracking-widest mb-6">/// Philosophy</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-onyx mb-12 leading-[0.9]">
             Hardware as an <br/>
             extension of the <br/>
             <span className="text-onyx/30">human mind.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-onyx/70 font-medium leading-relaxed">
             <p>
                We believe computation should be invisible. 
                Our HCD (Human-Centered Design) architecture prioritizes latency reduction to sync perfectly with biological reaction times.
             </p>
             <p>
                By mimicking neural pathways in our silicon layout, we create hardware that feels less like a tool and more like a limb.
             </p>
          </div>
          
          <div className="mt-20 border-t border-concrete pt-8 flex gap-20">
             <div>
                <div className="text-4xl font-bold text-onyx">2024</div>
                <div className="text-xs font-mono text-onyx/40 mt-1">ESTABLISHED</div>
             </div>
             <div>
                <div className="text-4xl font-bold text-onyx">142</div>
                <div className="text-xs font-mono text-onyx/40 mt-1">PATENTS FILED</div>
             </div>
          </div>
       </motion.div>
    </div>
  );
};
export default About;