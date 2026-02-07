import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // High stiffness / Low damping = Instant, snappy movement (Zero Latency)
  const springConfig = { damping: 35, stiffness: 800 };
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
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
         {/* Crosshair Horizontal */}
         <motion.div 
           className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] shadow-[0_0_2px_rgba(0,0,0,0.2)] transition-colors duration-200 ${hovered ? 'bg-cobalt' : 'bg-white'}`}
           initial={{ width: 20 }}
           animate={{ 
             width: hovered ? 12 : 20,
             scale: clicked ? 0.8 : 1
           }}
         />
         {/* Crosshair Vertical */}
         <motion.div 
           className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] shadow-[0_0_2px_rgba(0,0,0,0.2)] transition-colors duration-200 ${hovered ? 'bg-cobalt' : 'bg-white'}`}
           initial={{ height: 20 }}
           animate={{ 
             height: hovered ? 12 : 20,
             scale: clicked ? 0.8 : 1
           }}
         />
      </div>
    </motion.div>
  );
};
export default CustomCursor;