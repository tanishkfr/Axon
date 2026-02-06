import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    "> INITIALIZING UPLINK...",
    "> CONNECTING TO SECURE SERVER [127.0.0.1]...",
    "> READY FOR TRANSMISSION."
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if(!input.trim()) return;
     setLogs(prev => [...prev, `> USER: ${input}`, "> TRANSMITTING...", "> DATA RECEIVED. STANDBY."]);
     setInput("");
  };

  return (
    <motion.div 
       key="contact"
       className="max-w-4xl mx-auto w-full min-h-[60vh] flex flex-col justify-center"
       exit={{ opacity: 0 }}
    >
       <div className="bg-[#0A0A0A] border border-white/10 p-2 rounded-sm shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-white/5 p-3 flex justify-between items-center border-b border-white/5">
             <div className="text-xs font-mono text-white/50">ROOT@NEXUS:~</div>
             <div className="flex gap-2">
                <div className="w-3 h-3 bg-white/10 hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 bg-white/10 hover:bg-yellow-500 transition-colors"></div>
             </div>
          </div>

          {/* Terminal Body */}
          <div className="p-8 h-[400px] font-mono text-sm overflow-y-auto flex flex-col relative">
             {/* Scanlines */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-10 opacity-20"></div>
             
             <div className="space-y-2 text-white/70 z-0">
                {logs.map((log, i) => (
                   <div key={i} className={log.includes("USER") ? "text-cobalt" : ""}>{log}</div>
                ))}
             </div>
             
             <form className="mt-auto flex items-center gap-2 pt-4 border-t border-white/5 z-20" onSubmit={handleSubmit}>
                <span className="text-cobalt blink">_</span>
                <input 
                   type="text" 
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   className="bg-transparent border-none outline-none flex-1 text-white font-bold"
                   placeholder="ENTER COMMAND OR MESSAGE..."
                   autoFocus
                />
                <button type="submit" className="text-xs text-white/30 hover:text-white uppercase interactive">[SEND]</button>
             </form>
          </div>
       </div>
       
       <div className="mt-8 flex justify-between text-xs font-mono text-white/30">
          <div>ENCRYPTION: ACTIVE</div>
          <div>IP: MASKED</div>
       </div>
    </motion.div>
  );
};

export default Contact;