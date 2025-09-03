// app/components/sections/CertificationsSection.tsx
'use client';
import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import { Code, Award } from 'lucide-react';

const certifications = [
  { icon: <FaAws />, title: "AWS Certified Developer – Associate" },
  { icon: <FaAws />, title: "AWS Certified Cloud Practitioner" },
  { icon: <Code />, title: "Object-Oriented Data Structures in C++" },
  { icon: <Award />, title: "Web Development - ReactJS & NextJS" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="w-full py-16 sm:py-20 lg:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-dark-primary/60 border border-brand-primary/30 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="text-2xl sm:text-3xl text-brand-primary">{cert.icon}</div>
              <h3 className="font-semibold text-gray-200 text-sm sm:text-base">{cert.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;