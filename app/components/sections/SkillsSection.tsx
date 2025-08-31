// app/components/sections/SkillsSection.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaDocker, FaAws, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiJenkins } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { useRef } from 'react';

const skillsData = {
    Languages: [
        { icon: <FaJs />, name: 'JavaScript', level: 90, color: '#F7DF1E' },
        { icon: <SiTypescript />, name: 'TypeScript', level: 85, color: '#3178C6' },
        { icon: <FaPython />, name: 'Python', level: 75, color: '#3776AB' },
        { icon: <SiMysql />, name: 'SQL', level: 80, color: '#4479A1' },
        { icon: <FaHtml5 />, name: 'HTML5', level: 95, color: '#E34F26' },
        { icon: <FaCss3Alt />, name: 'CSS3', level: 90, color: '#1572B6' },
    ],
    'Frameworks & Libraries': [
        { icon: <FaReact />, name: 'ReactJS', level: 90, color: '#61DAFB' },
        { icon: <SiNextdotjs />, name: 'Next.js', level: 85, color: '#000000' },
        { icon: <FaNodeJs />, name: 'Node.js', level: 80, color: '#339933' },
        { icon: <SiExpress />, name: 'Express.js', level: 75, color: '#000000' },
        { icon: <SiTailwindcss />, name: 'TailwindCSS', level: 90, color: '#06B6D4' },
    ],
    Databases: [
        { icon: <SiMongodb />, name: 'MongoDB', level: 80, color: '#47A248' },
        { icon: <SiMysql />, name: 'MySQL', level: 75, color: '#4479A1' },
    ],
    'Tools & Platforms': [
        { icon: <FaGitAlt />, name: 'Git', level: 85, color: '#F05032' },
        { icon: <FaDocker />, name: 'Docker', level: 70, color: '#2496ED' },
        { icon: <SiJenkins />, name: 'Jenkins', level: 65, color: '#D24939' },
        { icon: <SiPostman />, name: 'Postman', level: 80, color: '#FF6C37' },
        { icon: <VscVscode />, name: 'VS Code', level: 90, color: '#007ACC' },
        { icon: <FaAws />, name: 'AWS', level: 75, color: '#FF9900' },
        { icon: <TbApi />, name: 'REST APIs', level: 85, color: '#7c3aed' },
        { icon: <FaLinux />, name: 'Linux', level: 70, color: '#FCC624' },
    ],
};

const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50, rotateX: -90 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10, 
        rotateY: 10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex flex-col items-center gap-3 p-6 w-36 h-36 bg-dark-secondary/50 rounded-xl border border-dark-secondary backdrop-blur-sm relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-primary/10"
          initial={{ scale: 0, rotate: 0 }}
          whileHover={{ scale: 1, rotate: 180 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Skill level indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
        />
        
        <motion.div 
          className="text-4xl relative z-10"
          style={{ color: skill.color }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 360,
            transition: { duration: 0.5 }
          }}
        >
          {skill.icon}
        </motion.div>
        <span className="text-sm font-medium text-gray-300 text-center relative z-10">{skill.name}</span>
        
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 border-2 border-brand-primary/50 rounded-xl"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} id="skills" className="relative w-full py-20 lg:py-32 px-4 bg-dark-primary overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-brand-secondary/5 to-brand-primary/5 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Tech Stack
        </motion.h2>
        
        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-semibold text-gray-300 mb-8 relative"
                whileHover={{ scale: 1.05 }}
              >
                {category}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.h3>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;