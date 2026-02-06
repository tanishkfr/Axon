import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 }; // Snappier apple-feel
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
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-multiply"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
           <motion.div 
             className="absolute border border-black/80 rounded-full"
             initial={{ width: 12, height: 12 }}
             animate={{ 
               width: hovered ? 48 : 12, 
               height: hovered ? 48 : 12,
               opacity: hovered ? 0.5 : 0.8,
               backgroundColor: hovered ? 'rgba(0,0,0,0.05)' : 'transparent'
             }}
             transition={{ type: "spring", stiffness: 400, damping: 28 }}
           />
           <motion.div
             className="absolute w-2 h-2 bg-signal rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
             animate={{ scale: clicked ? 0.8 : 1 }}
           />
        </div>
      </motion.div>
    </>
  );
};
export default CustomCursor;