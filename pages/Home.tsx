import React, { useRef, useState, useEffect } from 'react';
import { motion, Variants, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { ArrowRight, Cpu, Activity, Zap, Layers, Network, Server, ShieldCheck, Box, Crosshair, BarChart3, Radio, Timer, Factory, Package, Truck, TrendingUp, AlertCircle, Info, DollarSign, PieChart, Atom, Brain, Thermometer, Battery } from 'lucide-react';

interface HomeProps {
  setPage: (page: string) => void;
}

// --- ANIMATION CONFIGURATION ---
const EASE_PREMIUM = [0.25, 0.1, 0.25, 1.0];

const heroContainerVars: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3, 
    }
  }
};

const heroPillVars: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } }
};

const heroTextRevealVars: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: EASE_PREMIUM } }
};

const heroBlurVars: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const heroButtonVars: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } }
};

// --- SUB-COMPONENTS ---

const FadeIn = ({ children, delay = 0, className = "" }: { children?: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: EASE_PREMIUM }}
    className={className}
  >
    {children}
  </motion.div>
);

// 1. VISUAL DEPTH: DEEP ATMOSPHERE BACKGROUND
const DeepAtmosphere = () => {
   return (
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0A0A0A] to-black pointer-events-none overflow-hidden">
        {/* Subtle Dust / Stars Effect */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        {/* Static Particles for Depth */}
        {[...Array(20)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            return (
                <div
                    key={i}
                    className="absolute bg-white rounded-full opacity-30"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        filter: `blur(${Math.random()}px)`
                    }}
                />
            );
        })}
        
        {/* Deep Horizon Glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-cobalt/10 to-transparent"></div>
      </div>
   );
};

// 2. TRUST: DEPLOYMENT SCENARIOS (CASE STUDIES)
const DeploymentScenarios = () => {
   const [activeCase, setActiveCase] = useState(0);

   const cases = [
      {
         id: "ai",
         partner: "NVIDIA H100",
         title: "AI Training Clusters",
         desc: "Solved thermal throttling via Backside Power Delivery (BSPDN).",
         metric: "Thermal Delta",
         val: "-12°C",
         unit: "Junction Temp",
         icon: Thermometer,
         color: "text-orange-500",
         bg: "bg-orange-500"
      },
      {
         id: "auto",
         partner: "TESLA FSD HW5",
         title: "Autonomous Drive",
         desc: "Reduced inference latency by 40% using native optical interconnects.",
         metric: "Inference Latency",
         val: "4ms",
         unit: "Per Frame",
         icon: Zap,
         color: "text-yellow-400",
         bg: "bg-yellow-400"
      },
      {
         id: "mobile",
         partner: "APPLE M3 ULTRA",
         title: "Mobile Silicon",
         desc: "12-hour battery life extension via 1.4nm leakage gating.",
         metric: "Efficiency Gain",
         val: "+22%",
         unit: "Watt/Perf",
         icon: Battery,
         color: "text-green-500",
         bg: "bg-green-500"
      }
   ];

   return (
      <section className="py-24 px-6 md:px-20 bg-onyx text-white border-b border-white/10 relative overflow-hidden">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                  <div>
                     <h2 className="text-4xl font-bold tracking-tight mb-2">Deployment Scenarios</h2>
                     <p className="text-white/40 font-mono text-xs uppercase tracking-widest">/// Validated Production Yields</p>
                  </div>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               
               {/* LEFT: INTERACTIVE TABS */}
               <div className="lg:col-span-5 space-y-4">
                  {cases.map((item, i) => (
                     <React.Fragment key={i}>
                        <FadeIn delay={i * 0.1}>
                           <button 
                              onClick={() => setActiveCase(i)}
                              className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                                 activeCase === i 
                                    ? 'bg-white/10 border-white/20' 
                                    : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'
                              }`}
                           >
                              {activeCase === i && (
                                 <motion.div 
                                    layoutId="activeGlow"
                                    className="absolute left-0 top-0 bottom-0 w-1 bg-cobalt" 
                                 />
                              )}
                              <div className="flex justify-between items-start mb-2">
                                 <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{item.partner}</span>
                                 <item.icon size={16} className={`${activeCase === i ? 'text-white' : 'text-white/20'} transition-colors`} />
                              </div>
                              <h3 className={`text-xl font-bold mb-2 ${activeCase === i ? 'text-white' : 'text-white/60'}`}>{item.title}</h3>
                              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                           </button>
                        </FadeIn>
                     </React.Fragment>
                  ))}
               </div>

               {/* RIGHT: LIVE METRIC MONITOR */}
               <div className="lg:col-span-7">
                   <FadeIn delay={0.3}>
                      <div className="h-full min-h-[400px] bg-black border border-white/10 rounded-2xl relative p-8 flex flex-col justify-between overflow-hidden">
                         {/* CRT Scanline Effect */}
                         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                         
                         <div className="relative z-30">
                            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-4">
                               <div className="flex items-center gap-3">
                                  <Activity className="text-cobalt animate-pulse" size={16} />
                                  <span className="font-mono text-xs text-cobalt uppercase">Live Telemetry</span>
                               </div>
                               <div className="font-mono text-xs text-white/30">ID: {cases[activeCase].partner}</div>
                            </div>

                            <div className="flex items-end gap-4">
                               <motion.div 
                                 key={activeCase}
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5 }}
                               >
                                  <div className={`text-7xl font-mono font-bold tracking-tighter ${cases[activeCase].color}`}>
                                     {cases[activeCase].val}
                                  </div>
                                  <div className="text-sm font-mono text-white/50 mt-2 uppercase tracking-widest">
                                     {cases[activeCase].metric}
                                  </div>
                               </motion.div>
                            </div>
                         </div>

                         {/* Background Graph Animation */}
                         <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20">
                            <svg className="w-full h-full" preserveAspectRatio="none">
                               <motion.path 
                                  key={activeCase}
                                  initial={{ d: "M0,100 Q50,100 100,100 T200,100" }}
                                  animate={{ d: "M0,100 Q50,20 100,50 T200,80 T300,40 T400,90 T500,20 T600,100" }}
                                  transition={{ duration: 1.5, ease: "easeInOut" }}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className={cases[activeCase].color}
                               />
                               <motion.path 
                                  d="M0,100 L600,100" // Baseline
                                  stroke="white"
                                  strokeWidth="1"
                                  strokeDasharray="4 4"
                                  opacity="0.5"
                               />
                            </svg>
                         </div>
                      </div>
                   </FadeIn>
               </div>
            </div>
         </div>
      </section>
   );
}


const MethodologySection = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end center"]
   });

   const scaleY = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
   });

   const steps = [
      {
         title: "Atomic Precision",
         desc: "We don't just etch silicon; we arrange atoms. Directed Self-Assembly (DSA) ensures zero-defect density at the angstrom scale.",
         Icon: Atom
      },
      {
         title: "Photonic Speed",
         desc: "Electrons are too slow. Our native optical interconnects move data at the speed of light, eliminating latency bottlenecks.",
         Icon: Zap
      },
      {
         title: "Neural Architecture",
         desc: "Built for AI, by AI. The A-1400 logic gates mimic biological synapses for unprecedented inference efficiency.",
         Icon: Brain
      }
   ];

   return (
      <section ref={containerRef} className="py-32 bg-cobalt text-white relative overflow-hidden">
         {/* Subtle Radial Noise Texture */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[length:32px_32px] opacity-30 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
               <div className="mb-32 text-center">
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">The AXON Methodology</h2>
                  <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                     Redefining the physical limits of computation through three core pillars of atomic engineering.
                  </p>
               </div>
            </FadeIn>

            <div className="relative">
               {/* THE SPINE (Desktop Only) */}
               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
                  <motion.div 
                     style={{ scaleY }} 
                     className="w-full h-full bg-white origin-top shadow-[0_0_20px_white]"
                  />
               </div>

               <div className="space-y-32">
                  {steps.map((step, i) => (
                     <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center relative group">
                        
                        {/* LEFT COLUMN: TEXT */}
                        <motion.div
                           initial={{ opacity: 0, x: -50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-100px" }}
                           transition={{ duration: 0.8, delay: i * 0.1, ease: EASE_PREMIUM }}
                           className="text-left md:text-right"
                        >
                           <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{step.title}</h3>
                           <p className="text-lg text-white/80 font-light leading-relaxed md:pl-20">{step.desc}</p>
                        </motion.div>

                        {/* CENTER NODE */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cobalt border-2 border-white rounded-full z-20 shadow-[0_0_15px_white]"></div>

                        {/* RIGHT COLUMN: ICON (Parallax) */}
                        <ParallaxIcon Icon={step.Icon} delay={i * 0.1} />
                     
                     </div> 
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

// Internal Helper for Parallax Icon
const ParallaxIcon = ({ Icon, delay }: { Icon: React.ElementType, delay: number }) => {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
   const y = useTransform(scrollYProgress, [0, 1], [50, -50]); // Floating effect

   return (
      <motion.div ref={ref} style={{ y }} className="flex justify-start">
         <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: delay + 0.2 }}
            className="w-32 h-32 md:w-56 md:h-56 bg-onyx rounded-full flex items-center justify-center border border-white/20 shadow-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-500"
         >
            {/* Dark Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            
            <Icon size={80} className="text-cyan-400 relative z-10 group-hover:rotate-12 transition-transform duration-700" strokeWidth={1.5} />
            
            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
               {[...Array(3)].map((_, j) => (
                  <motion.div 
                     key={j}
                     animate={{ y: [0, -15, 0], opacity: [0.3, 1, 0.3] }}
                     transition={{ duration: 2 + j, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px]"
                     style={{ left: `${20 + j*30}%`, top: `${60 - j*10}%` }}
                  />
               ))}
            </div>
         </motion.div>
      </motion.div>
   );
};

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 relative overflow-hidden">
         
         {/* VISUAL DEPTH: DEEP ATMOSPHERE BG */}
         <DeepAtmosphere />

         <motion.div 
           className="max-w-5xl z-10"
           variants={heroContainerVars}
           initial="hidden"
           animate="visible"
         >
            {/* Step 1: Pill Slide Down */}
            <motion.div 
               variants={heroPillVars}
               className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 backdrop-blur-md rounded-full shadow-sm mb-8"
            >
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
               <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase">Fab 4.2 Online</span>
            </motion.div>

            {/* Step 2: Masked Text Reveal */}
            <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-10">
               <div className="overflow-hidden">
                  <motion.div variants={heroTextRevealVars} className="text-white drop-shadow-xl">Silicon</motion.div>
               </div>
               <div className="overflow-hidden pt-2 -mt-2 pb-2">
                  <motion.div 
                    variants={heroTextRevealVars} 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-blue-400 drop-shadow-lg"
                  >
                    Evolution.
                  </motion.div>
               </div>
            </h1>

            {/* Step 3: Paragraph Blur In */}
            <motion.div 
               variants={heroBlurVars}
               className="flex flex-col gap-8 items-start max-w-xl"
            >
               <p className="text-xl text-white/70 font-medium leading-relaxed drop-shadow-sm">
                  The world's first 14 Ångström process node. Fabricated for the post-silicon era with directed self-assembly.
               </p>
               
               {/* Step 4: Button Slide Up + Micro-interaction */}
               <motion.button 
                  variants={heroButtonVars}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 71, 171, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPage('specs')} 
                  className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold border border-white/20 bg-white/10 backdrop-blur-md text-white transition-colors duration-300 hover:bg-cobalt hover:border-transparent"
               >
                  View Lithography Specs
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300"/>
               </motion.button>
            </motion.div>
         </motion.div>
      </section>

      {/* 2. FEATURE DECK */}
      <section className="py-32 px-6 md:px-20 bg-onyx text-white border-y border-white/10 relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
               <div className="flex justify-between items-end mb-16">
                  <div>
                     <h2 className="text-4xl font-bold tracking-tight mb-2">Core Architecture</h2>
                     <p className="text-white/40 font-mono text-xs uppercase tracking-widest">/// System Specifications</p>
                  </div>
                  <div className="hidden md:flex gap-4">
                     <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-mono text-cobalt bg-cobalt/10">REV 4.2</div>
                  </div>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                  { title: "High-NA Optics", icon: Crosshair, spec: "0.55 NA", sub: "Resolution Limit" },
                  { title: "Backside Power", icon: Zap, spec: "30% ↓ IR", sub: "Voltage Droop" },
                  { title: "RibbonFET", icon: Layers, spec: "4nm Pitch", sub: "Gate Contact" }
               ].map((item, i) => (
                  <React.Fragment key={i}>
                    <FadeIn delay={i * 0.1}>
                       <motion.div 
                          whileHover={{ y: -5, borderColor: '#0047AB' }}
                          className="group h-[400px] bg-white/5 border border-white/10 rounded-xl p-8 relative overflow-hidden transition-all duration-300"
                       >
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>
                          
                          <div className="relative z-10 h-full flex flex-col justify-between">
                             <div className="flex justify-between items-start">
                                <item.icon className="text-white/50 group-hover:text-cobalt transition-colors" size={32} />
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                   <ArrowRight className="text-cobalt" />
                                </div>
                             </div>

                             <div>
                                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                                <div className="w-full h-px bg-white/20 my-4 group-hover:bg-cobalt transition-colors"></div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                   <div>
                                      <div className="text-[10px] text-white/40 font-mono uppercase mb-1">Specification</div>
                                      <div className="text-xl font-mono font-bold text-cobalt">{item.spec}</div>
                                   </div>
                                   <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                                      <div className="text-[10px] text-white/40 font-mono uppercase mb-1">Metric</div>
                                      <div className="text-sm font-mono text-white">{item.sub}</div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </motion.div>
                    </FadeIn>
                  </React.Fragment>
               ))}
            </div>
         </div>
      </section>

      {/* 3. NEW SECTION: METHODOLOGY */}
      <MethodologySection />

      {/* 4. NEW: DEPLOYMENT SCENARIOS (Replaces Partner Logo Dump) */}
      <DeploymentScenarios />

      {/* 5. PREDICTIVE SCALING */}
      <section className="py-24 px-6 md:px-20 bg-onyx text-white border-t border-white/10 relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
               <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                  <div className="mb-8 md:mb-0">
                     <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Live Capacity Forecasting</p>
                     </div>
                     <h2 className="text-4xl font-bold tracking-tight">Predictive Scaling</h2>
                  </div>
                  
                  <div className="flex gap-8 text-right bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                     <div>
                        <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Total Allocated</div>
                        <div className="text-white font-bold font-mono text-xl">14.2M <span className="text-xs text-white/40">Units</span></div>
                     </div>
                     <div className="w-px h-full bg-white/10"></div>
                     <div>
                        <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Forecast Delta</div>
                        <div className="text-cobalt font-bold font-mono text-xl">+22.4%</div>
                     </div>
                  </div>
               </div>
            </FadeIn>

            {/* ENGINEERING CHART */}
            <FadeIn delay={0.2}>
               <div className="w-full h-[400px] bg-black/20 border border-white/10 rounded-xl p-8 relative flex flex-col">
                  
                  {/* Grid Background */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none z-0">
                     {[100, 75, 50, 25, 0].map((val, i) => (
                        <div key={i} className="w-full h-px bg-white/5 relative">
                           <span className="absolute -left-8 -top-2 text-[10px] font-mono text-white/20">{val}%</span>
                        </div>
                     ))}
                  </div>

                  {/* Chart Bars */}
                  <div className="flex-1 flex items-end justify-around relative z-10 pl-8">
                     {[
                        { q: "Q1 '25", demand: 45, cap: 60, status: "OPTIMAL" },
                        { q: "Q2 '25", demand: 65, cap: 70, status: "OPTIMAL" },
                        { q: "Q3 '25", demand: 85, cap: 80, status: "CRITICAL" },
                        { q: "Q4 '25", demand: 98, cap: 85, status: "OVERFLOW" }
                     ].map((data, i) => (
                        <div key={i} className="group relative flex flex-col items-center gap-4 h-full justify-end w-full px-2 md:px-8">
                           
                           {/* Hover Tooltip */}
                           <div className="absolute -top-12 bg-white text-onyx px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                              <div className="text-[10px] font-mono font-bold whitespace-nowrap">
                                 DEMAND: {data.demand}k / CAP: {data.cap}k
                              </div>
                              <div className={`text-[9px] font-mono font-bold mt-1 ${
                                 data.status === 'OPTIMAL' ? 'text-green-600' : 
                                 data.status === 'CRITICAL' ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                 STATUS: {data.status}
                              </div>
                           </div>

                           <div className="w-full relative h-full flex items-end justify-center">
                              {/* Capacity Line (Ghost Bar) */}
                              <motion.div 
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${data.cap}%` }}
                                 transition={{ duration: 1, delay: i * 0.1 }}
                                 className="absolute bottom-0 w-full border-x border-t border-dashed border-white/30 bg-white/5 z-0"
                              />

                              {/* Demand Bar (Solid) */}
                              <motion.div 
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${data.demand}%` }}
                                 transition={{ duration: 1, delay: 0.2 + (i * 0.1), type: "spring", bounce: 0.2 }}
                                 className={`w-[60%] z-10 relative ${
                                    data.status === 'OVERFLOW' ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]' : 
                                    data.status === 'CRITICAL' ? 'bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]' : 
                                    'bg-cobalt shadow-[0_0_20px_rgba(0,71,171,0.4)]'
                                 }`}
                              >
                                 {data.status === 'OVERFLOW' && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 animate-bounce">
                                       <AlertCircle size={16} />
                                    </div>
                                 )}
                              </motion.div>
                           </div>
                           
                           <div className="text-xs font-mono text-white/50 border-t border-white/10 pt-2 w-full text-center group-hover:text-white transition-colors">
                              {data.q}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </FadeIn>

            {/* Legend */}
            <FadeIn delay={0.4}>
               <div className="mt-8 flex justify-center gap-8">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 bg-cobalt"></div>
                     <span className="text-[10px] font-mono text-white/60 uppercase">Market Demand</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 bg-white/10 border border-dashed border-white/30"></div>
                     <span className="text-[10px] font-mono text-white/60 uppercase">Allocated Capacity</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 bg-red-500"></div>
                     <span className="text-[10px] font-mono text-white/60 uppercase">Supply Overflow</span>
                  </div>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* 6. SUPPLY CHAIN VELOCITY */}
      <section className="py-24 px-6 md:px-20 bg-white border-t border-onyx/10 relative overflow-hidden">
         {/* Background accent */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cobalt/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
               <div className="flex items-center gap-3 mb-16">
                  <div className="p-2 bg-cobalt/10 rounded-lg"><Timer className="text-cobalt" size={24}/></div>
                  <div>
                    <h2 className="text-2xl font-bold text-onyx">Supply Chain Velocity</h2>
                    <p className="text-xs font-mono text-onyx/40 uppercase tracking-widest">End-to-End Latency Tracking</p>
                  </div>
               </div>
            </FadeIn>

            <div className="relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-onyx/5 via-onyx/20 to-onyx/5 -translate-y-1/2 z-0"></div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                  {[
                     { stage: "Raw Silicon", time: "T-48h", icon: Layers, desc: "Ingot Prep" },
                     { stage: "Fabrication", time: "Processing", icon: Factory, desc: "Lithography" },
                     { stage: "Packaging", time: "+12h", icon: Package, desc: "CoWoS Stack" },
                     { stage: "Distribution", time: "+24h", icon: Truck, desc: "Logistics" },
                  ].map((item, i) => (
                     <React.Fragment key={i}>
                        <FadeIn delay={i * 0.15}>
                           <div className="group">
                              <div className="flex flex-col items-center text-center">
                                 {/* Icon Node */}
                                 <div className="w-16 h-16 bg-white border border-onyx/10 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-cobalt group-hover:shadow-[0_0_20px_rgba(0,71,171,0.2)] transition-all duration-300">
                                    <item.icon size={24} className="text-onyx/60 group-hover:text-cobalt transition-colors" />
                                    {i === 1 && (
                                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white"></div>
                                    )}
                                 </div>
                                 
                                 {/* Data Card */}
                                 <motion.div 
                                    whileHover={{ y: -5, borderColor: '#0047AB' }}
                                    className="w-full bg-surface border border-onyx/10 p-6 rounded-xl hover:bg-white transition-colors shadow-sm"
                                 >
                                    <div className="text-2xl font-mono font-bold text-onyx mb-1">{item.time}</div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-cobalt mb-2">{item.stage}</div>
                                    <div className="text-xs text-onyx/40 font-mono">{item.desc}</div>
                                 </motion.div>
                              </div>
                           </div>
                        </FadeIn>
                     </React.Fragment>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 7. INVESTOR DATA / FINANCIAL PERFORMANCE */}
      <section className="py-24 px-6 md:px-20 bg-surface border-t border-onyx/10 relative overflow-hidden">
         {/* Subtle Background Graphic */}
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cobalt/5 to-transparent pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
             <FadeIn>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                       <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="text-cobalt" size={16} />
                          <span className="text-xs font-mono text-onyx/40 uppercase tracking-widest font-bold">Q4 FY25 Report</span>
                       </div>
                       <h2 className="text-3xl font-bold text-onyx">Financial Performance</h2>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-white rounded-full border border-onyx/5 text-xs font-mono text-onyx/60 flex items-center gap-2 shadow-sm">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       NYSE: AXON
                    </div>
                </div>
             </FadeIn>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* CARD 1: REVENUE */}
                 <FadeIn delay={0.1}>
                    <motion.div 
                      whileHover={{ y: -5, borderColor: '#0047AB' }}
                      className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-lg relative overflow-hidden group transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                               <div className="text-sm font-mono text-onyx/50 uppercase tracking-wider mb-1">Q4 Revenue</div>
                               <div className="text-4xl font-bold text-onyx tracking-tight">$12.4B</div>
                            </div>
                            <div className="p-2 bg-green-500/10 rounded-lg text-green-600">
                                <TrendingUp size={24} />
                            </div>
                        </div>
                        <div className="relative h-16 w-full">
                            {/* Simple SVG Trendline */}
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                                <path d="M0,50 C20,45 40,30 60,35 S80,10 100,5" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                                <path d="M0,50 C20,45 40,30 60,35 S80,10 100,5 L100,50 L0,50 Z" fill="url(#gradGreen)" opacity="0.2" />
                                <defs>
                                   <linearGradient id="gradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                                      <stop offset="0%" stopColor="#10B981" />
                                      <stop offset="100%" stopColor="transparent" />
                                   </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>
                 </FadeIn>

                 {/* CARD 2: R&D INVESTMENT */}
                 <FadeIn delay={0.2}>
                    <motion.div 
                      whileHover={{ y: -5, borderColor: '#0047AB' }}
                      className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-lg relative overflow-hidden group transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                               <div className="text-sm font-mono text-onyx/50 uppercase tracking-wider mb-1">R&D Investment</div>
                               <div className="text-4xl font-bold text-onyx tracking-tight">18%</div>
                            </div>
                            <div className="p-2 bg-cobalt/10 rounded-lg text-cobalt">
                                <PieChart size={24} />
                            </div>
                        </div>
                        <div className="w-full bg-onyx/5 h-2 rounded-full overflow-hidden mt-8">
                            <div className="h-full bg-cobalt w-[18%] relative">
                               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-white shadow-sm"></div>
                            </div>
                        </div>
                        <p className="mt-4 text-xs font-mono text-onyx/40">Targeting 22% by FY26 for Sub-Angstrom dev.</p>
                    </motion.div>
                 </FadeIn>

                 {/* CARD 3: YOY GROWTH */}
                 <FadeIn delay={0.3}>
                    <motion.div 
                      whileHover={{ y: -5, borderColor: '#0047AB' }}
                      className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-lg relative overflow-hidden group transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                               <div className="text-sm font-mono text-onyx/50 uppercase tracking-wider mb-1">YoY Growth</div>
                               <div className="text-4xl font-bold text-onyx tracking-tight">+24%</div>
                            </div>
                            <div className="p-2 bg-green-500/10 rounded-lg text-green-600">
                                <Activity size={24} />
                            </div>
                        </div>
                        <div className="relative h-16 w-full">
                            {/* Bar Chart Representation */}
                            <div className="flex items-end justify-between h-full gap-2">
                                {[30, 45, 35, 60, 50, 80, 70, 90, 100].map((h, i) => (
                                    <div key={i} className="w-full bg-green-500 rounded-t-sm opacity-20 group-hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                 </FadeIn>
             </div>
         </div>
      </section>

    </div>
  );
};
export default Home;