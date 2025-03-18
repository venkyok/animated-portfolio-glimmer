
import { useEffect, useState } from 'react';

export function LuminousCursor() {
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);
  const maxTrails = 5;

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPositions(prev => {
        const newPositions = [...prev, { x: e.clientX, y: e.clientY }];
        return newPositions.slice(-maxTrails);
      });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      {positions.map((pos, index) => (
        <div
          key={index}
          className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-500"
          style={{
            background: `radial-gradient(${400 - index * 70}px at ${pos.x}px ${pos.y}px, rgba(29, 78, 216, ${0.15 - index * 0.02}), transparent ${60 - index * 8}%)`,
            opacity: 1 - (index * 0.2)
          }}
        />
      ))}
    </>
  );
}
