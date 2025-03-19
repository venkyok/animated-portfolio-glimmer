
import { useEffect, useState, useRef } from 'react';

export function LuminousCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursor) {
          // Set the cursor to be centered around the mouse
          const x = e.clientX - cursor.offsetWidth / 2;
          const y = e.clientY - cursor.offsetHeight / 2;
          cursor.style.transform = `translate(${x}px, ${y}px)`;
          
          if (!isVisible) setIsVisible(true);
        }
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div 
      ref={cursorRef}
      className={`custom-cursor-glow ${isVisible ? 'visible' : 'hidden'}`}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: -1,
        top: 0,
        left: 0,
        transition: 'opacity 0.3s ease',
      }}
    />
  );
}
