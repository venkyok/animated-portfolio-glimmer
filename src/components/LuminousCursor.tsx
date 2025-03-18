
import { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function LuminousCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const trails = useRef<{ x: any; y: any }[]>([]);
  const maxTrails = 6;

  // Create smooth spring animations for cursor
  const springConfig = { damping: 25, stiffness: 200 };
  for (let i = 0; i < maxTrails; i++) {
    if (!trails.current[i]) {
      trails.current[i] = {
        x: useSpring(0, springConfig),
        y: useSpring(0, springConfig)
      };
    }
  }

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Update trail positions with delay
  useEffect(() => {
    const unsubX = cursorX.onChange(x => {
      trails.current.forEach((trail, i) => {
        setTimeout(() => {
          trail.x.set(x);
        }, i * 40);
      });
    });

    const unsubY = cursorY.onChange(y => {
      trails.current.forEach((trail, i) => {
        setTimeout(() => {
          trail.y.set(y);
        }, i * 40);
      });
    });

    return () => {
      unsubX();
      unsubY();
    };
  }, []);

  return (
    <>
      {trails.current.map((trail, index) => (
        <motion.div
          key={index}
          className="pointer-events-none fixed inset-0 z-50"
          style={{
            background: `radial-gradient(${300 - index * 30}px at ${trail.x}px ${trail.y}px, rgba(29, 78, 216, ${0.12 - index * 0.015}), transparent ${60 - index * 4}%)`,
          }}
        />
      ))}
    </>
  );
}
