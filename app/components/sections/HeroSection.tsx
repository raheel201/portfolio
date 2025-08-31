// app/components/sections/HeroSection.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaFileDownload, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss } from 'react-icons/si';
import AnimatedText from '../AnimatedText';
import { useRef } from 'react';

const MotionIcon = ({ children, x, y, delay = 0 }: { children: React.ReactNode; x: number, y: number, delay?: number }) => (
  <motion.div
    className="absolute text-dark-secondary/30 text-6xl"
    initial={{ scale: 0, rotate: -180, opacity: 0 }}
    animate={{ 
      scale: [0, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0, 0.7, 0.5]
    }}
    transition={{ 
      duration: 2, 
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 3
    }}
    whileHover={{ 
      scale: 1.5, 
      color: '#dc2626',
      rotate: 0,
      transition: { duration: 0.3 }
    }}
    style={{ x, y }}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 gradient-background animate-gradient-wave -z-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      />

      {/* Enhanced Parallax Icons */}
      <MotionIcon x={-300} y={-150} delay={0}><SiReact /></MotionIcon>
      <MotionIcon x={250} y={100} delay={0.5}><SiNextdotjs /></MotionIcon>
      <MotionIcon x={-200} y={200} delay={1}><SiTypescript /></MotionIcon>
      <MotionIcon x={300} y={-100} delay={1.5}><SiNodedotjs /></MotionIcon>
      <MotionIcon x={-250} y={-50} delay={2}><SiTailwindcss /></MotionIcon>
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-red-500/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <motion.div className="z-10 p-4" style={{ y, opacity }}>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary to-brand-primary px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Raheel Nazeer Ahmed
        </motion.h1>

        <AnimatedText text="Software Engineer | Frontend Developer" className="!text-xl md:!text-2xl !normal-case tracking-wider gradient-text font-semibold" />

        <motion.p
          className="max-w-3xl mx-auto my-6 text-sm sm:text-md md:text-lg text-brand-secondary/80 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          "Building scalable, high-performance web applications with React, Next.js, and modern web technologies."
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <a href="mailto:raheel.nazeer.ahmed.07@gmail.com" className="btn-primary">
            <FaEnvelope /> Hire Me
          </a>
          <a href="/Raheel_Nazeer_Ahmed_Resume.pdf" download className="btn-secondary">
            <FaFileDownload /> View Resume
          </a>
          <a href="https://github.com/raheel201" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FaGithub /> GitHub
          </a>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .btn-primary, .btn-secondary {
          @apply flex items-center justify-center gap-2 px-4 sm:px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base;
        }
        .btn-primary {
          @apply bg-brand-primary text-white hover:bg-brand-secondary transform hover:-translate-y-1;
        }
        .btn-secondary {
          @apply bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-brand-primary/20 transform hover:-translate-y-1;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;