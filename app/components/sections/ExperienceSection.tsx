// app/components/sections/ExperienceSection.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useRef } from 'react';

const experienceData = [
  {
    company: "7EDGE Pvt. Ltd.",
    role: "Software Engineer 1, Frontend",
    period: "Jan 2024 – Present",
    description: "Reduced load times by 30%, built 30+ reusable components, and improved workflow efficiency by 25%.",
  },
  {
    company: "Ezra Techland",
    role: "Software Developer",
    period: "Jun 2023 – Dec 2023",
    description: "Developed a MERN stack app for 10k+ users, created 15+ REST APIs, and improved data retrieval time by 20%.",
  },
  {
    company: "Innomatics Research Labs",
    role: "Full-stack Developer Intern",
    period: "Feb 2023 – Apr 2023",
    description: "Built an automation module with 5 APIs that was merged into production ahead of schedule.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} id="experience" className="relative w-full py-16 sm:py-20 lg:py-32 px-4 bg-black/80 backdrop-blur-sm overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-red-500/5 to-red-600/5 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 w-1 -translate-x-1/2 h-full bg-dark-secondary/30 rounded-full" />
          <motion.div 
            className="absolute left-4 md:left-1/2 w-1 -translate-x-1/2 bg-gradient-to-b from-red-500 to-red-600 rounded-full"
            style={{ height: timelineHeight }}
          />

          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="md:flex items-center">
                {/* Enhanced Timeline Icon */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center border-4 border-black shadow-lg z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.3 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: "0 0 20px rgba(220, 38, 38, 0.6)"
                  }}
                >
                  <Briefcase className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Enhanced Content Card */}
                <div className={`w-full md:w-1/2 ml-12 sm:ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:text-right'}`}>
                  <motion.div 
                    className="relative p-4 sm:p-6 md:p-8 bg-dark-primary/60 border border-brand-primary/30 rounded-xl shadow-xl backdrop-blur-sm overflow-hidden group"
                    whileHover={{ 
                      borderColor: "#dc2626",
                      boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-red-600/5 to-transparent"
                      initial={{ scale: 0, rotate: 0 }}
                      whileHover={{ scale: 1, rotate: 180 }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.3 + 0.4 }}
                      >
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </motion.div>
                      
                      <motion.h3 
                        className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.5 }}
                      >
                        {job.role}
                      </motion.h3>
                      
                      <motion.div 
                        className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold text-brand-primary mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.6 }}
                      >
                        <MapPin className="w-4 h-4" />
                        {job.company}
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.7 }}
                      >
                        {job.description}
                      </motion.p>
                    </div>
                    
                    {/* Hover border effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-red-500/30 rounded-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;