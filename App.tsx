import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { 
  ArrowRight, Globe, Layers, Cpu, Zap, Activity, 
  Menu, X, ChevronRight, Share2, ShieldCheck, Aperture
} from 'lucide-react';

// --- DATA ---
const NAV_ITEMS = [
  { id: 'home', label: 'Overview' },
  { id: 'specs', label: 'Specifications' },
  { id: 'about', label: 'Philosophy' },
  { id: 'contact', label: 'Contact' }
];

const SPECS_DATA = [
  { category: "LITHOGRAPHY", param: "Process Node", value: "1.4nm", detail: "Extreme UV (EUV) High-NA" },
  { category: "LITHOGRAPHY", param: "Transistor Density", value: "480 MTr/mm²", detail: "GAAFET Nanosheet" },
  { category: "PERFORMANCE", param: "Clock Frequency", value: "8.5 GHz", detail: "Cryo-Stable Peak" },
  { category: "PERFORMANCE", param: "Thermal Design Power", value: "12-450 W", detail: "Scalable Envelope" },
  { category: "MEMORY", param: "L3 Cache", value: "1.2 GB", detail: "3D Stacked SRAM" },
  { category: "MEMORY", param: "Bandwidth", value: "9.2 TB/s", detail: "HBM4 Integration" },
];

const PROJECTS = [
  { id: 1, title: "Neural Matrix", category: "AI INFRASTRUCTURE", desc: "Trillion-parameter inference engine dedicated to large language model processing." },
  { id: 2, title: "Quantum Bridge", category: "RESEARCH", desc: "Superconducting qubit interface for hybrid classical-quantum computing environments." },
  { id: 3, title: "Orbital Edge", category: "AEROSPACE", desc: "Radiation-hardened logic for deep space telemetry and autonomous navigation." },
];

// --- COMPONENTS ---

// 1. Custom Cursor
const Cursor = () => {
  const cursorRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };
    const loop = () => {
      document.documentElement.style.setProperty('--cursor-x', `${cursorRef.current.x}px`);
      document.documentElement.style.setProperty('--cursor-y', `${cursorRef.current.y}px`);
      requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', moveCursor);
    const frameId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{ transform: 'translate3d(calc(var(--cursor-x) - 16px), calc(var(--cursor-y) - 16px), 0)' }}
      />
      <div 
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999]"
        style={{ transform: 'translate3d(calc(var(--cursor-x) - 2px), calc(var(--cursor-y) - 2px), 0)' }}
      />
    </>
  );
};

// 2. Navigation
const Navigation = ({ active, setPage }: { active: string, setPage: (p: string) => void }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none"
    >
      <div className="pointer-events-auto cursor-pointer group" onClick={() => setPage('home')}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full group-hover:bg-cobalt transition-colors duration-300"></div>
          <span className="font-sans font-medium tracking-tight text-sm">AXON</span>
        </div>
      </div>

      <div className="pointer-events-auto hidden md:flex items-center gap-12 bg-charcoal/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`text-xs font-medium uppercase tracking-widest transition-all duration-300 ${
              active === item.id ? 'text-white' : 'text-white/40 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="pointer-events-auto">
        <button className="text-xs font-mono text-white/40 hover:text-cobalt transition-colors">
          MENU +
        </button>
      </div>
    </motion.nav>
  );
};

// 3. Sections

const Home = ({ setPage }: { setPage: (p: string) => void }) => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-8 md:px-20 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-[0.9] text-white mb-12">
            Precision in <br />
            <span className="text-white/30">Silicon.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white/60 max-w-xl leading-relaxed">
            We architect the invisible infrastructure of the future. 
            High-density 1.4nm fabrication for the next era of machine intelligence.
          </p>
        </motion.div>
      </section>

      {/* Engineering Excellence Slider */}
      <section className="pl-8 md:pl-20 mb-32 overflow-hidden">
        <div className="flex items-end justify-between pr-20 mb-8 border-b border-border pb-4">
           <h2 className="text-xs font-mono text-cobalt tracking-widest uppercase">Engineering Excellence</h2>
           <span className="text-xs text-white/30 font-mono hidden md:block">SCROLL &gt;&gt;&gt;</span>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-8 no-scrollbar pr-20">
          {PROJECTS.map((proj, i) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="min-w-[300px] md:min-w-[400px] group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-charcoal border border-border mb-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-cobalt/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 {/* Abstract Art Placeholder */}
                 <div className="absolute inset-4 border border-white/5 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-white/10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                    <div className="absolute w-px h-full bg-white/5"></div>
                    <div className="absolute w-full h-px bg-white/5"></div>
                 </div>
              </div>
              <div className="text-xs font-mono text-white/40 mb-2">{proj.category}</div>
              <h3 className="text-xl font-medium text-white mb-2">{proj.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Scale Map */}
      <section className="px-8 md:px-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-light tracking-tight mb-8">Global Foundry <br/> Network</h2>
            <div className="space-y-8">
              <div className="border-l border-white/10 pl-6">
                 <div className="text-3xl font-light text-white mb-1">3</div>
                 <div className="text-xs font-mono text-white/40 uppercase">Continents</div>
              </div>
              <div className="border-l border-white/10 pl-6">
                 <div className="text-3xl font-light text-white mb-1">99.99%</div>
                 <div className="text-xs font-mono text-white/40 uppercase">Yield Rate</div>
              </div>
              <div className="border-l border-white/10 pl-6">
                 <div className="text-3xl font-light text-white mb-1">Zero</div>
                 <div className="text-xs font-mono text-white/40 uppercase">Net Carbon</div>
              </div>
            </div>
            <button onClick={() => setPage('specs')} className="mt-12 flex items-center gap-2 text-sm hover:gap-4 transition-all duration-300 text-cobalt">
              View Technical Specs <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="relative aspect-square md:aspect-auto bg-charcoal/30 border border-border rounded-lg overflow-hidden flex items-center justify-center">
             {/* Abstract Map */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
             <div className="relative z-10 grid grid-cols-6 gap-4">
                {Array.from({ length: 24 }).map((_, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ delay: Math.random() * 1 }}
                     className="w-2 h-2 rounded-full bg-white/20"
                   />
                ))}
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cobalt/30 rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
        </div>
      </section>
    </div>
  );
};

const Specs = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">Technical Data</h1>
          <p className="text-white/50 max-w-2xl mx-auto">
             Our 1.4nm process node represents the physical limit of silicon scaling, utilizing directed self-assembly (DSA) for atomic precision.
          </p>
        </motion.div>

        {/* Logic Tree Interactive */}
        <div className="mb-24 p-8 border border-border bg-charcoal/20 relative rounded-lg overflow-hidden">
           <div className="absolute top-4 right-4 text-xs font-mono text-cobalt">/// LOGIC_FLOW</div>
           <div className="flex justify-center py-12">
              <div className="flex flex-col items-center gap-8 relative">
                 {/* Top Node */}
                 <div className="w-32 h-12 border border-white/20 rounded flex items-center justify-center bg-graphite z-10 relative group hover:border-cobalt transition-colors">
                    <span className="text-xs tracking-widest">INPUT</span>
                    <div className="absolute -bottom-8 w-px h-8 bg-white/10 group-hover:bg-cobalt transition-colors"></div>
                 </div>

                 {/* Middle Layer */}
                 <div className="flex gap-12 relative z-10">
                    <div className="w-32 h-12 border border-white/20 rounded flex items-center justify-center bg-graphite group hover:border-cobalt transition-colors relative">
                       <span className="text-xs tracking-widest">LOGIC</span>
                       <div className="absolute -top-4 w-full h-px bg-white/10 -z-10"></div>
                       <div className="absolute -bottom-8 w-px h-8 bg-white/10 group-hover:bg-cobalt transition-colors"></div>
                    </div>
                    <div className="w-32 h-12 border border-white/20 rounded flex items-center justify-center bg-graphite group hover:border-cobalt transition-colors relative">
                       <span className="text-xs tracking-widest">MEMORY</span>
                       <div className="absolute -top-4 w-full h-px bg-white/10 -z-10"></div>
                       <div className="absolute -bottom-8 w-px h-8 bg-white/10 group-hover:bg-cobalt transition-colors"></div>
                    </div>
                 </div>

                 {/* Bottom Node */}
                 <div className="w-32 h-12 border border-white/20 rounded flex items-center justify-center bg-graphite z-10 group hover:border-cobalt transition-colors">
                    <span className="text-xs tracking-widest">OUTPUT</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Specs Table */}
        <div className="w-full">
           <div className="grid grid-cols-4 text-xs font-mono text-white/30 pb-4 border-b border-white/10 uppercase tracking-widest">
              <div>Category</div>
              <div>Parameter</div>
              <div>Value</div>
              <div className="text-right">Detail</div>
           </div>
           
           {SPECS_DATA.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               className="grid grid-cols-4 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-default"
             >
                <div className="text-xs font-mono text-white/40 pt-1">{item.category}</div>
                <div className="text-lg font-light text-white/80 group-hover:text-white">{item.param}</div>
                <div className="text-lg font-light text-cobalt group-hover:translate-x-2 transition-transform">{item.value}</div>
                <div className="text-sm text-white/50 text-right pt-1">{item.detail}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-8 md:px-20 flex flex-col justify-center">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="relative">
             <motion.div 
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1 }}
               className="aspect-[3/4] bg-charcoal/50 border border-white/5 rounded-lg overflow-hidden relative"
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/10 to-transparent"></div>
                {/* Minimalist Graphic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-white/20"></div>
                <div className="absolute bottom-8 left-8">
                   <div className="text-xs font-mono text-cobalt mb-2">FOUNDER</div>
                   <div className="text-xl font-light">Tanishk K.</div>
                </div>
             </motion.div>
          </div>
          
          <div className="flex flex-col justify-center">
             <h2 className="text-sm font-mono text-cobalt uppercase tracking-widest mb-8">Human Centered Design</h2>
             <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                "Hardware is an extension of the nervous system."
             </h1>
             <div className="space-y-6 text-white/60 font-light text-lg leading-relaxed">
                <p>
                   At AXON, we believe that the ultimate goal of computation is not raw speed, but the seamless reduction of latency between thought and action.
                </p>
                <p>
                   Our architecture prioritizes pathways that mimic biological neural networks, creating silicon that feels less like a tool and more like a limb.
                </p>
             </div>
             <div className="mt-12 flex gap-12">
                <div>
                   <div className="text-3xl font-light text-white mb-1">2024</div>
                   <div className="text-xs font-mono text-white/30 uppercase">Founded</div>
                </div>
                <div>
                   <div className="text-3xl font-light text-white mb-1">140+</div>
                   <div className="text-xs font-mono text-white/30 uppercase">Patents</div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-8 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
         <h1 className="text-4xl font-light text-center mb-2">Start the Dialogue</h1>
         <p className="text-center text-white/40 mb-12 font-light">Secure channel established.</p>
         
         <form className="space-y-12">
            <div className="relative group">
               <input 
                 type="text" 
                 className="w-full bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-cobalt transition-colors placeholder-transparent" 
                 placeholder="Name" 
                 id="name"
               />
               <label htmlFor="name" className="absolute left-0 top-4 text-white/40 text-lg transition-all pointer-events-none group-focus-within:-top-6 group-focus-within:text-xs group-focus-within:text-cobalt">Name</label>
            </div>
            
            <div className="relative group">
               <input 
                 type="email" 
                 className="w-full bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-cobalt transition-colors placeholder-transparent" 
                 placeholder="Email" 
                 id="email"
               />
               <label htmlFor="email" className="absolute left-0 top-4 text-white/40 text-lg transition-all pointer-events-none group-focus-within:-top-6 group-focus-within:text-xs group-focus-within:text-cobalt">Email Address</label>
            </div>

            <div className="relative group">
               <textarea 
                 rows={1}
                 className="w-full bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-cobalt transition-colors placeholder-transparent resize-none" 
                 placeholder="Message" 
                 id="message"
               />
               <label htmlFor="message" className="absolute left-0 top-4 text-white/40 text-lg transition-all pointer-events-none group-focus-within:-top-6 group-focus-within:text-xs group-focus-within:text-cobalt">Inquiry</label>
            </div>

            <div className="pt-8 text-center">
               <button className="px-12 py-4 bg-white text-graphite font-medium tracking-wide hover:bg-cobalt hover:text-white transition-all duration-300 rounded-sm">
                  TRANSMIT
               </button>
            </div>
         </form>
      </motion.div>
    </div>
  );
};

// 4. Main App Layout

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Reset scroll on page change
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="bg-graphite text-white font-sans h-screen w-full relative overflow-hidden">
      <Cursor />
      <Navigation active={activePage} setPage={setActivePage} />

      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 bg-noise opacity-10 pointer-events-none"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cobalt/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Content Area */}
      <main 
        ref={scrollRef}
        className="relative z-10 h-screen overflow-y-auto no-scrollbar scroll-smooth"
      >
         <AnimatePresence mode="wait">
            <motion.div
               key={activePage}
               initial={{ opacity: 0, filter: 'blur(10px)' }}
               animate={{ opacity: 1, filter: 'blur(0px)' }}
               exit={{ opacity: 0, filter: 'blur(10px)' }}
               transition={{ duration: 0.6, ease: "easeInOut" }}
               className="min-h-screen"
            >
               {activePage === 'home' && <Home setPage={setActivePage} />}
               {activePage === 'specs' && <Specs />}
               {activePage === 'about' && <About />}
               {activePage === 'contact' && <Contact />}
            </motion.div>
         </AnimatePresence>

         {/* Footer / Minimal Info */}
         <footer className="py-12 px-8 md:px-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-white/30">
            <div>© 2024 AXON SILICON INC.</div>
            <div className="flex gap-8 mt-4 md:mt-0">
               <span className="hover:text-cobalt cursor-pointer transition-colors">PRIVACY</span>
               <span className="hover:text-cobalt cursor-pointer transition-colors">LEGAL</span>
               <span className="hover:text-cobalt cursor-pointer transition-colors">STATUS: ONLINE</span>
            </div>
         </footer>
      </main>
    </div>
  );
};

export default App;