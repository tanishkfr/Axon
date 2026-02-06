import React, { useEffect, useRef } from 'react';

const GenerativeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const draw = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid simulation
      ctx.strokeStyle = 'rgba(34, 34, 34, 0.5)';
      ctx.lineWidth = 1;

      const gridSize = 50;
      const rows = Math.ceil(canvas.height / gridSize);
      const cols = Math.ceil(canvas.width / gridSize);

      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          const px = x * gridSize;
          const py = y * gridSize;
          
          // Distance from mouse
          const dx = px - mouseX;
          const dy = py - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 400;
          
          let offsetX = 0;
          let offsetY = 0;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const angle = Math.atan2(dy, dx);
            offsetX = Math.cos(angle) * force * 20 * Math.sin(time * 0.05);
            offsetY = Math.sin(angle) * force * 20 * Math.cos(time * 0.05);
          }

          // Draw grid points or small crosses
          ctx.fillStyle = '#1a1a1a';
          if (Math.random() > 0.995) ctx.fillStyle = '#0047AB'; // Random glimmer
          
          ctx.fillRect(px + offsetX - 1, py + offsetY - 1, 2, 2);
        }
      }
      
      // Floating lines
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const yBase = canvas.height * (0.2 + i * 0.15);
        ctx.moveTo(0, yBase);
        
        for (let x = 0; x < canvas.width; x += 20) {
            const dx = x - mouseX;
            const dy = yBase - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = Math.max(0, (300 - dist) / 300);
            
            const wave = Math.sin(x * 0.01 + time * 0.02 + i) * 20;
            const interaction = Math.sin(x * 0.05 + time * 0.1) * 50 * force;
            
            ctx.lineTo(x, yBase + wave + interaction);
        }
      }
      ctx.strokeStyle = 'rgba(0, 71, 171, 0.2)';
      ctx.stroke();

      time++;
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />;
};

export default GenerativeBackground;