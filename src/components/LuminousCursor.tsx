import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LuminousCursor() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  
  const throttle = useCallback((func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  useEffect(() => {
    const updateMousePosition = throttle((e: MouseEvent) => {
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-5); // Reduce number of trail points
      });
    }, 16); // ~60fps throttle

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [throttle]);

  return (
    <AnimatePresence>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0.08 - index * 0.01, scale: 1 - index * 0.05 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 z-50"
          style={{
            background: `radial-gradient(200px at ${point.x}px ${point.y}px, rgba(29, 78, 216, 0.08), transparent 60%)`
          }}
          transition={{
            type: "tween",
            duration: 0.2,
            ease: "linear"
          }}
        />
      ))}
    </AnimatePresence>
  );
}