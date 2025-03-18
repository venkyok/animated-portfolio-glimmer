
import { useEffect, useState } from 'react';

export function LuminousCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{
        position: 'fixed',
        zIndex: -1,
        background: mousePosition.x === 0 ? 'transparent' : `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent)`,
        transition: 'background 0.3s ease'
      }}
    />
  );
}
