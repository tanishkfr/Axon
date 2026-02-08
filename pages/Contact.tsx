import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Terminal, Send, Lock, Signal, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'IDLE' | 'TYPING' | 'SENDING' | 'SUCCESS'>('IDLE');
  const [statusText, setStatusText] = useState('AWAITING_INPUT');
  const [progress, setProgress] = useState(0);

  // Form Fields State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleFocus = () => {
     if (formState === 'SENDING' || formState === 'SUCCESS') return;
     setFormState('TYPING');
     setStatusText('INPUT_DETECTED >> ENCRYPTING_STREAM');
  };

  const handleBlur = () => {
     if (formState === 'SENDING' || formState === 'SUCCESS') return;
     // Check if fields are empty to decide if we go back to IDLE completely
     const hasData = Object.values(formData).some((val: string) => val.length > 0);
     if (!hasData) {
        setFormState('IDLE');
        setStatusText('AWAITING_INPUT');
     } else {
        setStatusText('BUFFER_READY');
     }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    if (formState === 'SENDING' || formState === 'SUCCESS') return;

    // Start Transmission
    setFormState('SENDING');
    setStatusText('ESTABLISHING_UPLINK >> UPLOADING_PACKETS');
    setProgress(0);

    // Simulate Upload Progress
    const duration = 2000; // 2 seconds
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
        currentStep++;
        const newProgress = Math.min((currentStep / steps) * 100, 100);
        setProgress(newProgress);

        if (currentStep >= steps) {
            clearInterval(timer);
            completeTransmission();
        }
    }, intervalTime);
  };

  const completeTransmission = () => {
      setFormState('SUCCESS');
      setStatusText('TRANSMISSION_ACKNOWLEDGED // 200_OK');
      
      // Reset after delay
      setTimeout(() => {
          setFormState('IDLE');
          setStatusText('AWAITING_INPUT');
          setProgress(0);
          setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }, 3000);
  };

  // Blinking cursor effect
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
     const interval = setInterval(() => setCursorVisible(v => !v), 500);
     return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-surface min-h-screen pt-20 pb-20 px-6 text-onyx overflow-hidden relative">
      {/* Background Tech Grid - Light Mode */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Animated Scan Line - Cobalt Blue */}
      <div className="absolute top-0 left-0 w-full h-1 bg-cobalt/30 shadow-[0_0_20px_#0047AB] animate-[scan_4s_linear_infinite] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 h-full">
         
         {/* LEFT: INFO DASHBOARD - Clean Room Style */}
         <div className="flex flex-col justify-start pt-8 lg:pt-12">
            <div className="mb-12">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-onyx/10 rounded-full mb-6 shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-mono text-onyx/60 uppercase tracking-wide">SECURE UPLINK ESTABLISHED</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-onyx">
                  Initiate <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-blue-500">Sequence.</span>
               </h1>
               <p className="text-xl text-onyx/60 font-light max-w-md leading-relaxed">
                  Secure high-volume allocation for the A-1400 node. Direct line to engineering validation teams.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
               {[
                  { icon: Mail, label: "Enterprise Sales", val: "foundry@axon.com", color: "text-cobalt" },
                  { icon: Phone, label: "Global Support", val: "+1 (800) 555-0199", color: "text-onyx" },
                  { icon: MapPin, label: "HQ Coordinates", val: "12.9716° N, 77.5946° E", color: "text-onyx" }
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white border border-onyx/10 rounded-xl hover:border-cobalt transition-colors cursor-pointer group shadow-sm">
                     <div className="w-12 h-12 bg-surface border border-onyx/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cobalt group-hover:text-white transition-all text-onyx">
                        <item.icon className="w-5 h-5" />
                     </div>
                     <div>
                        <h3 className="font-mono text-xs text-onyx/40 uppercase tracking-widest mb-1">{item.label}</h3>
                        <p className={`font-mono text-lg font-medium ${item.color}`}>{item.val}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* RIGHT: TERMINAL FORM - White/Light Grey */}
         <div className="flex items-start pt-8 lg:pt-12">
            <motion.div 
               className={`w-full bg-white border rounded-xl overflow-hidden shadow-2xl relative transition-all duration-500 ${
                  formState === 'SUCCESS' 
                     ? 'border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]' 
                     : 'border-onyx/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
               }`}
               initial={false}
               animate={formState === 'SUCCESS' ? { scale: [1, 1.02, 1] } : { scale: 1 }}
            >
               {/* Terminal Header */}
               <div className={`border-b px-4 py-2 flex items-center justify-between transition-colors duration-300 ${
                  formState === 'SUCCESS' ? 'bg-green-500/10 border-green-500/30' : 'bg-gray-50 border-onyx/10'
               }`}>
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className={`text-[10px] font-mono flex items-center gap-2 uppercase ${
                     formState === 'SUCCESS' ? 'text-green-600 font-bold' : 'text-onyx/40'
                  }`}>
                     <Lock size={10} /> 
                     {formState === 'SUCCESS' ? 'TRANSMISSION_COMPLETE' : 'ENCRYPTED_SSH_SESSION'}
                  </div>
               </div>

               {/* Terminal Body */}
               <div className="p-8 relative">
                  
                  {/* Success Overlay Flash */}
                  <AnimatePresence>
                      {formState === 'SUCCESS' && (
                         <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-green-500/5 z-0 pointer-events-none"
                         />
                      )}
                  </AnimatePresence>

                  {/* Status Line */}
                  <div className={`font-mono text-xs mb-8 flex items-center gap-2 transition-colors duration-300 ${
                      formState === 'SUCCESS' ? 'text-green-600' : 'text-cobalt'
                  }`}>
                     <Signal size={12} className={formState === 'TYPING' || formState === 'SENDING' ? 'animate-pulse' : ''} />
                     STATUS: {statusText}
                     <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} inline-block w-2 h-4 ${formState === 'SUCCESS' ? 'bg-green-600' : 'bg-cobalt'}`}></span>
                  </div>

                  <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">usr_first_name</label>
                           <input 
                              type="text" 
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              onFocus={handleFocus} 
                              onBlur={handleBlur} 
                              disabled={formState === 'SENDING' || formState === 'SUCCESS'}
                              className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all placeholder-onyx/20 disabled:opacity-50" 
                              placeholder="NULL" 
                           />
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">usr_last_name</label>
                           <input 
                              type="text" 
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              onFocus={handleFocus} 
                              onBlur={handleBlur} 
                              disabled={formState === 'SENDING' || formState === 'SUCCESS'}
                              className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all placeholder-onyx/20 disabled:opacity-50" 
                              placeholder="NULL" 
                           />
                        </div>
                     </div>
                     
                     <div className="space-y-2 group">
                        <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">target_email</label>
                        <input 
                           type="email" 
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           onFocus={handleFocus} 
                           onBlur={handleBlur} 
                           disabled={formState === 'SENDING' || formState === 'SUCCESS'}
                           className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all placeholder-onyx/20 disabled:opacity-50" 
                           placeholder="enter_corp_id..." 
                        />
                     </div>

                     <div className="space-y-2 group">
                        <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">query_protocol</label>
                        <div className="relative">
                            <select 
                               onFocus={handleFocus} 
                               onBlur={handleBlur} 
                               disabled={formState === 'SENDING' || formState === 'SUCCESS'}
                               className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all appearance-none cursor-pointer disabled:opacity-50"
                            >
                               <option>VOL_FABRICATION</option>
                               <option>IP_LICENSING</option>
                               <option>INVESTOR_RELATIONS</option>
                            </select>
                        </div>
                     </div>

                     <div className="space-y-2 group">
                        <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">payload_message</label>
                        <textarea 
                           rows={4} 
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           onFocus={handleFocus} 
                           onBlur={handleBlur} 
                           disabled={formState === 'SENDING' || formState === 'SUCCESS'}
                           className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all placeholder-onyx/20 resize-none disabled:opacity-50" 
                           placeholder="// type message here..."
                        ></textarea>
                     </div>

                     {/* THE TRANSMISSION BUTTON */}
                     <button 
                        type="button" 
                        onClick={handleSend}
                        disabled={formState === 'SENDING' || formState === 'SUCCESS'}
                        className={`relative w-full overflow-hidden font-mono font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group mt-4 shadow-lg ${
                            formState === 'IDLE' || formState === 'TYPING' ? 'bg-cobalt hover:bg-blue-700 text-white shadow-cobalt/20 hover:shadow-cobalt/40' :
                            formState === 'SENDING' ? 'bg-onyx text-white/50 cursor-not-allowed' :
                            'bg-green-500 text-white shadow-green-500/30'
                        }`}
                     >
                        <AnimatePresence mode="wait">
                            {/* IDLE STATE */}
                            {(formState === 'IDLE' || formState === 'TYPING') && (
                                <motion.div 
                                    key="idle"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Terminal size={16} /> 
                                    EXECUTE_TRANSMISSION 
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                                </motion.div>
                            )}

                            {/* SENDING STATE */}
                            {formState === 'SENDING' && (
                                <motion.div 
                                    key="sending"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    className="flex items-center gap-2 text-xs"
                                >
                                    <Loader2 size={16} className="animate-spin" />
                                    UPLOADING_PACKETS... [{Math.floor(progress)}%]
                                </motion.div>
                            )}

                            {/* SUCCESS STATE */}
                            {formState === 'SUCCESS' && (
                                <motion.div 
                                    key="success"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.5, opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle2 size={18} />
                                    TRANSMISSION_ACKNOWLEDGED
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* PROGRESS BAR OVERLAY */}
                        {formState === 'SENDING' && (
                            <motion.div 
                                className="absolute bottom-0 left-0 h-1 bg-cobalt z-10"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear", duration: 0.05 }} // Smooth update based on state
                            />
                        )}
                     </button>
                  </form>
               </div>
            </motion.div>
         </div>

      </div>
    </div>
  );
};
export default Contact;