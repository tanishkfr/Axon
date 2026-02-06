import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto pt-20 min-h-[60vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
         <h1 className="text-5xl font-bold text-onyx mb-4 tracking-tighter">Dialogue</h1>
         <p className="text-onyx/50 mb-12 text-lg">Initiate secure transmission.</p>
         
         <form className="space-y-12">
            <div className="group relative">
               <input 
                 type="text" 
                 className="w-full bg-transparent border-b border-concrete py-4 text-xl text-onyx outline-none focus:border-signal transition-colors placeholder-transparent"
                 placeholder="Name" 
                 id="name"
               />
               <label htmlFor="name" className="absolute left-0 top-4 text-onyx/30 text-xl transition-all pointer-events-none group-focus-within:-top-6 group-focus-within:text-xs group-focus-within:text-signal group-focus-within:font-mono">NAME</label>
            </div>
            
            <div className="group relative">
               <input 
                 type="email" 
                 className="w-full bg-transparent border-b border-concrete py-4 text-xl text-onyx outline-none focus:border-signal transition-colors placeholder-transparent"
                 placeholder="Email" 
                 id="email"
               />
               <label htmlFor="email" className="absolute left-0 top-4 text-onyx/30 text-xl transition-all pointer-events-none group-focus-within:-top-6 group-focus-within:text-xs group-focus-within:text-signal group-focus-within:font-mono">EMAIL_ADDRESS</label>
            </div>

            <div className="group relative">
               <textarea 
                 rows={1}
                 className="w-full bg-transparent border-b border-concrete py-4 text-xl text-onyx outline-none focus:border-signal transition-colors placeholder-transparent resize-none"
                 placeholder="Message" 
                 id="message"
               />
               <label htmlFor="message" className="absolute left-0 top-4 text-onyx/30 text-xl transition-all pointer-events-none group-focus-within:-top-6 group-focus-within:text-xs group-focus-within:text-signal group-focus-within:font-mono">INQUIRY</label>
            </div>

            <div className="pt-8">
               <button className="text-sm font-bold tracking-widest uppercase border-b-2 border-onyx pb-1 hover:text-signal hover:border-signal transition-colors">
                  Send Message ->
               </button>
            </div>
         </form>
      </motion.div>
    </div>
  );
};
export default Contact;