import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LuminousCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      setTrail(prev => {
        const newTrail = [...prev];
        newTrail.push({ x: e.clientX, y: e.clientY, id: Date.now() });
        return newTrail.slice(-8);
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <AnimatePresence>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0.2 - index * 0.02, scale: 1 - index * 0.05 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 z-50"
          style={{
            background: `radial-gradient(300px at ${point.x}px ${point.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40
          }}
        />
      ))}
    </AnimatePresence>
  );
}