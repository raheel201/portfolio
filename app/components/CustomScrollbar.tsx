// app/components/CustomScrollbar.tsx
'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-dark-secondary transform-gpu z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      
      {/* Scroll indicator */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 50
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <div className="w-1 h-32 bg-dark-secondary rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full"
              style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            />
          </div>
          <motion.div
            className="absolute -left-2 w-5 h-5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full shadow-lg"
            style={{ 
              top: useSpring(
                scrollYProgress.get() * 128 - 10,
                { stiffness: 100, damping: 30 }
              )
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default CustomScrollbar;