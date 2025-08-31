// app/components/sections/ProjectsSection.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, Code, Database, Zap } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: "Fintech Admin Application",
    tech: "ReactJS, NextJS, TailwindCSS",
    description: "A full-stack dashboard to manage user wallets, financial transactions, and a secure role-based access control system.",
    github: "https://github.com/raheel201",
  },
  {
    title: "Admin Dashboard Application",
    tech: "ReactJS, NextJS, TailwindCSS",
    description: "Features cloning questionnaire forms, real-time mobile previews, and a user authorization system to optimize performance.",
    github: "https://github.com/raheel201",
  },
  {
    title: "Crypto Dashboard Application",
    tech: "React.JS, NextJS, Tailwind CSS, Three.JS",
    description: "The application features 3D visualizations, customizable watchlists, and live market tracking, making it both practical for traders and visually engaging for data enthusiasts.",
    github: "https://github.com/raheel201/Crypto-Dashboard",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="projects" className="relative w-full py-16 sm:py-20 lg:py-32 px-4 bg-black overflow-hidden">
      {/* Floating background elements */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-10 text-6xl text-brand-primary/10" />
        <Database className="absolute top-40 right-20 text-5xl text-brand-secondary/10" />
        <Zap className="absolute bottom-20 left-20 text-7xl text-brand-primary/10" />
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <Tilt
                className="h-full"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glarePosition="all"
                scale={1.02}
              >
                <motion.div 
                  className="relative p-4 sm:p-6 h-full flex flex-col bg-dark-primary/50 border border-brand-primary/30 rounded-xl overflow-hidden group backdrop-blur-sm"
                  whileHover={{ 
                    borderColor: "#697565",
                    boxShadow: "0 20px 40px rgba(105, 117, 101, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-red-600/5 to-transparent"
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1, rotate: 180 }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Floating particles on hover */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-lg sm:text-xl font-bold text-white mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-xs sm:text-sm font-semibold text-brand-primary mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.tech}
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 text-xs sm:text-sm flex-grow mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={20} />
                        <span className="text-xs sm:text-sm">View Code</span>
                      </motion.a>
                    </motion.div>
                  </div>
                  
                  {/* Hover border effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-red-500/50 rounded-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;