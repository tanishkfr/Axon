import React, { ReactNode, useState } from 'react';
import CustomCursor from './CustomCursor';
import GenerativeBackground from './GenerativeBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, Activity, Hexagon } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  activePage: string;
  setPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '01. FOUNDRY' },
    { id: 'specs', label: '02. BLUEPRINT' },
    { id: 'about', label: '03. PHILOSOPHY' },
    { id: 'contact', label: '04. UPLINK' },
  ];

  const handleNav = (id: string) => {
    if (id === activePage) return;
    setPage(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-obsidian text-white font-sans overflow-hidden relative selection:bg-cobalt selection:text-white">
      <GenerativeBackground />
      <CustomCursor />

      {/* FIXED GRID OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[1]" style={{ backgroundSize: '25% 100%', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)' }}></div>
      <div className="fixed inset-0 pointer-events-none z-[1]" style={{ backgroundSize: '100% 25%', backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)' }}></div>
      <div className="fixed inset-4 border border-white/10 pointer-events-none z-[50]"></div>

      {/* CORNER NAVIGATION */}
      <nav className="fixed inset-0 z-[40] pointer-events-none p-8 md:p-12 flex flex-col justify-between">
        {/* TOP LEFT */}
        <div className="flex justify-between items-start">
          <div className="pointer-events-auto">
             <button onClick={() => handleNav('home')} className="text-2xl font-bold tracking-tighter hover:text-cobalt transition-colors interactive">
               NEXUS<span className="text-cobalt">.</span>SYS
             </button>
             <div className="text-[10px] font-mono text-white/40 mt-1">v.2.0.4 [STABLE]</div>
          </div>
          
          {/* TOP RIGHT */}
          <div className="pointer-events-auto flex flex-col items-end">
            <button className="flex items-center gap-2 text-xs font-mono interactive hover:text-cobalt transition-colors">
              <div className={`w-2 h-2 rounded-full ${activePage ? 'bg-cobalt animate-pulse' : 'bg-green-500'}`}></div>
              SYSTEM_ONLINE
            </button>
            <div className="mt-2 text-[10px] font-mono text-white/30 text-right">
               LATENCY: 4ms <br/>
               TEMP: 42°C
            </div>
          </div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="flex justify-between items-end">
           <div className="pointer-events-auto hidden md:block">
              <div className="flex gap-6 font-mono text-xs">
                 {navItems.map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className={`interactive hover:text-cobalt transition-colors uppercase tracking-widest ${activePage === item.id ? 'text-cobalt underline decoration-1 underline-offset-4' : 'text-white/50'}`}
                    >
                      {item.label}
                    </button>
                 ))}
              </div>
           </div>

           {/* MOBILE NAV BUTTON */}
           <div className="pointer-events-auto md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="interactive p-2 border border-white/20 bg-obsidian">
                <Menu size={20} />
              </button>
           </div>

           {/* BOTTOM RIGHT */}
           <div className="pointer-events-auto text-right">
              <div className="text-[10px] font-mono text-white/40 mb-1">SECURE CONNECTION</div>
              <div className="text-xs font-bold tracking-widest text-cobalt">ENCRYPTED // AES-256</div>
           </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-obsidian/95 backdrop-blur-xl z-[60] flex items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-4xl font-bold hover:text-cobalt transition-colors interactive"
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => setIsMenuOpen(false)} className="mt-8 text-sm font-mono text-white/50 interactive">
                [CLOSE TERMINAL]
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHUTTER WIPE TRANSITION */}
      <motion.div
        key={activePage + "shutter"}
        className="fixed inset-0 bg-cobalt z-[100] pointer-events-none"
        initial={{ scaleX: 1, originX: 0 }}
        animate={{ scaleX: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 } }}
        exit={{ scaleX: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
        style={{ transformOrigin: "right" }}
      />

      {/* CONTENT AREA */}
      <main className="relative z-10 w-full h-screen overflow-y-auto no-scrollbar pt-24 pb-24 px-6 md:px-12">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;