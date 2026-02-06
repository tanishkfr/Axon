import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.tagName === 'INPUT' || target.classList.contains('interactive')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Crosshair */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
           {/* Horizontal Line */}
           <motion.div 
             className="absolute bg-white mix-blend-difference"
             initial={{ width: 20, height: 1, left: -10 }}
             animate={{ 
               width: hovered ? 40 : 20, 
               left: hovered ? -20 : -10,
               backgroundColor: hovered ? '#0047AB' : '#FFFFFF' 
             }}
           />
           {/* Vertical Line */}
           <motion.div 
             className="absolute bg-white mix-blend-difference"
             initial={{ width: 1, height: 20, top: -10 }}
             animate={{ 
               height: hovered ? 40 : 20, 
               top: hovered ? -20 : -10,
               backgroundColor: hovered ? '#0047AB' : '#FFFFFF'
             }}
           />
           
           {/* Center Dot */}
           <motion.div
             className="absolute w-1 h-1 bg-cobalt rounded-full"
             animate={{ scale: clicked ? 0.5 : 1 }}
           />
        </div>
      </motion.div>
      
      {/* Trailing Label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <motion.div 
            className="ml-6 mt-6 bg-obsidian/80 border border-white/10 px-2 py-1 text-[10px] font-mono text-cobalt backdrop-blur-sm"
            animate={{ opacity: hovered ? 1 : 0 }}
        >
            TARGET_LOCKED
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;