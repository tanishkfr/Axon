import React from 'react';
import { Twitter, Linkedin, Github, Hexagon, Activity, Radio, Lock, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-onyx text-white pt-32 pb-6 relative overflow-hidden border-t border-white/10">
      
      {/* 1. MASSIVE WATERMARK */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
         <h1 className="text-[30vw] font-bold leading-none tracking-tighter">AXON</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. NEWSLETTER & HEADLINE */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 pb-12 border-b border-white/10">
           <div className="mb-12 lg:mb-0">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 bg-cobalt rounded-full"></div>
                 <span className="text-xs font-mono text-cobalt uppercase tracking-widest">Newsletter</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                 Stay Ahead of <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-blue-400">Moore's Law.</span>
              </h2>
           </div>
           
           <div className="w-full lg:w-auto">
              <div className="relative group">
                 <input 
                   type="email" 
                   placeholder="ENTER CORPORATE EMAIL" 
                   className="w-full md:w-[400px] bg-white/5 border border-white/10 rounded-none px-6 py-5 text-sm font-mono placeholder-white/30 focus:outline-none focus:border-cobalt focus:bg-white/10 transition-all"
                 />
                 <button className="absolute right-2 top-2 bottom-2 bg-white text-onyx px-6 font-bold text-xs uppercase hover:bg-cobalt hover:text-white transition-colors">
                    Initialize
                 </button>
              </div>
              <div className="mt-4 flex gap-6 text-[10px] font-mono text-white/30 uppercase">
                 <span className="flex items-center gap-1"><Lock size={10} /> 256-bit Encrypted</span>
                 <span>No Spam Protocol</span>
              </div>
           </div>
        </div>

        {/* 3. 4-COLUMN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
           
           {/* Column 1: Technology */}
           <div>
              <h4 className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest mb-8">Technology</h4>
              <ul className="space-y-4">
                 {['Logic Nodes (A-14)', 'Advanced Packaging', 'Silicon Photonics', 'Memory Stacks (HBM)'].map((item) => (
                    <li key={item} className="text-sm font-medium text-white/70 hover:text-cobalt cursor-pointer transition-colors">
                       {item}
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 2: Company */}
           <div>
              <h4 className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest mb-8">Company</h4>
              <ul className="space-y-4">
                 {['About Foundry', 'Leadership', 'Careers', 'Investor Relations'].map((item) => (
                    <li key={item} className="text-sm font-medium text-white/70 hover:text-cobalt cursor-pointer transition-colors">
                       {item}
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 3: Resources */}
           <div>
              <h4 className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest mb-8">Resources</h4>
              <ul className="space-y-4">
                 {['Documentation', 'PDK Access', 'Whitepapers', 'API Status'].map((item) => (
                    <li key={item} className="text-sm font-medium text-white/70 hover:text-cobalt cursor-pointer transition-colors">
                       {item}
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 4: Legal */}
           <div>
              <h4 className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest mb-8">Legal</h4>
              <ul className="space-y-4">
                 {['Privacy Policy', 'Terms of Service', 'Export Control', 'Supply Chain Ethics'].map((item) => (
                    <li key={item} className="text-sm font-medium text-white/70 hover:text-cobalt cursor-pointer transition-colors">
                       {item}
                    </li>
                 ))}
              </ul>
           </div>

        </div>

        {/* 4. BOTTOM BAR: SYSTEM STATUS */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           
           <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">All Systems Operational</span>
           </div>

           <div className="flex items-center gap-6">
              <Twitter size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Github size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
           </div>

           <div className="text-[10px] font-mono text-white/30 uppercase">
              © 2026 AXON Inc. // FAB_ID: 8842
           </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;