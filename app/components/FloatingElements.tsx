// app/components/FloatingElements.tsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';

const icons = [
  { Icon: SiReact, color: '#61DAFB', delay: 0 },
  { Icon: SiNextdotjs, color: '#000000', delay: 0.5 },
  { Icon: SiTypescript, color: '#3178C6', delay: 1 },
  { Icon: SiNodedotjs, color: '#339933', delay: 1.5 },
  { Icon: SiTailwindcss, color: '#06B6D4', delay: 2 },
  { Icon: SiJavascript, color: '#F7DF1E', delay: 2.5 },
];

const FloatingElements = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          initial={{ 
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: 0
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height
            ],
            scale: [0, 1, 0.8, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
          }}
          style={{ color }}
        >
          <Icon size={40 + Math.random() * 20} />
        </motion.div>
      ))}
      
      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full opacity-30"
          initial={{
            x: Math.random() * dimensions.width,
            y: dimensions.height + 50
          }}
          animate={{
            y: -50,
            x: Math.random() * dimensions.width
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;