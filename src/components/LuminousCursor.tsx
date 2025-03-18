
import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
  timestamp: number;
}

export function LuminousCursor() {
  const [positions, setPositions] = useState<Position[]>([]);
  const maxTrails = 8;
  const trailDelay = 50; // milliseconds between each trail

  useEffect(() => {
    let lastUpdate = 0;
    
    const updateCursor = (e: MouseEvent) => {
      const now = Date.now();
      
      if (now - lastUpdate > trailDelay) {
        setPositions(prev => {
          const newPositions = [...prev, { x: e.clientX, y: e.clientY, timestamp: now }];
          return newPositions.slice(-maxTrails);
        });
        lastUpdate = now;
      }
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      {positions.map((pos, index) => (
        <div
          key={pos.timestamp}
          className="pointer-events-none fixed inset-0 z-50 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(${400 - index * 40}px at ${pos.x}px ${pos.y}px, rgba(29, 78, 216, ${0.15 - index * 0.015}), transparent ${70 - index * 5}%)`,
            opacity: 1 - (index * 0.1),
            transform: `scale(${1 - index * 0.05})`,
          }}
        />
      ))}
    </>
  );
}
