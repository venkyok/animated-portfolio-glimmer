
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
    <div className="pt-6 pb-2">
      {/* Background text */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="very-text-outline giant-text select-none">VENKY</div>
      </div>

      {/* Hero section */}
      <section ref={heroRef} className="relative z-10 min-h-[calc(100vh-80px)] px-4 sm:px-4 max-w-7xl mx-auto flex items-center py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-18 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:pr-12"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
              >
                <span className="text-yellow-400">Hello</span> 
                <span className="text-yellow-400">👋</span>,
                <br />I'm Venkatesh
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-purple font-medium uppercase tracking-wide"
              >
                A PASSIONATE Developer | Problem Solver | Tech Enthusiast
              </motion.p>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white/80 text-lg"
            >
             
              <br />Building interactive web applications with modern technologies.
              <br />Currently pursuing B.Tech in Computer Science .
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative h-[440px] lg:h-[500px] flex justify-center"
          >
            <div className="absolute w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-full purple-circle-glow opacity-60 filter blur-xl"></div>
            <img 
              src="/lovable-uploads/u-removebg-preview.png" 
              alt="Profile" 
              className="hero-image relative z-10 h-full w-[85%] mx-4 object-cover object-bottom transition-transform duration-200 ease-out"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
