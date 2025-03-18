
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
    <div className="fixed top-0 left-0 w-full h-full -z-[1] pointer-events-none">
      {positions.map((pos, index) => (
        <div
          key={`cursor-${pos.x}-${pos.y}-${index}`}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            opacity: 1 - (index * 0.2)
          }}
        />
      ))}
    </div>
  );
}
