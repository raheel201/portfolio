// app/components/sections/AboutSection.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import ParallaxBackground from '../ParallaxBackground';

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} id="about" className="relative w-full py-16 sm:py-20 lg:py-32 px-4 bg-black/80 backdrop-blur-sm overflow-hidden">
      <ParallaxBackground speed={-0.3}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black -z-10" />
      </ParallaxBackground>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-brand-secondary/10 to-brand-primary/10 rounded-full blur-xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="flex justify-center mx-72 items-center">
        <motion.div
          className="md:col-span-2 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-brand-secondary/80 mb-6 leading-relaxed text-sm sm:text-base">
            Software Engineer with 2+ years of experience specializing in building and optimizing scalable web applications with ReactJS, Next.JS,
            and NodeJS. Proven ability to increase performance and enhance user engagement through strategic code implementation and feature
            development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
              <span className="skill-badge">2+ Years Experience</span>
              <span className="skill-badge">React & Next.js Expert</span>
              <span className="skill-badge">AWS Certified</span>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .skill-badge {
          @apply bg-brand-primary/20 text-red-300 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;