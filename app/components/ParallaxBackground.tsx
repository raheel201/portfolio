// app/components/ParallaxBackground.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const ParallaxBackground = ({ children, className = '', speed = 0.5 }: ParallaxBackgroundProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxBackground;