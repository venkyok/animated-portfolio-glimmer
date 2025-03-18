
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      const moveX = (xPercent - 0.5) * 30;
      const moveY = (yPercent - 0.5) * 30;
      
      const imageElement = heroRef.current.querySelector('.hero-image') as HTMLElement;
      if (imageElement) {
        imageElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="pt-16 pb-24">
      {/* Background text */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="very-text-outline giant-text select-none">VENKY</div>
      </div>

      {/* Hero section */}
      <section ref={heroRef} className="fixed top-20 left-0 right-0 z-10 min-h-[calc(100vh-80px)] py-12 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:pr-12"
          >
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold"
              >
                <span className="text-yellow-400">Hello</span> 
                <span className="text-yellow-400">👋</span>,
                <br />I'm Ammati Venkatesh
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-purple font-medium uppercase tracking-wide"
              >
                A PASSIONATE FULL-STACK DEVELOPER & PROBLEM SOLVER
              </motion.p>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white/80 text-lg"
            >
              Computer Science enthusiast from Hyderabad, India.
              <br />Building interactive web applications with modern technologies.
              <br />Currently pursuing B.Tech in Computer Science (Data Science).
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[440px] lg:h-[500px] flex justify-center"
          >
            <div className="absolute w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-full purple-circle-glow opacity-60 filter blur-xl"></div>
            <img 
              src="public/lovable-uploads/2d332a00-56ad-4a42-bcfe-8f9d494fbe61.png" 
              alt="Profile" 
              className="hero-image relative z-10 h-full object-contain transition-transform duration-200 ease-out"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
