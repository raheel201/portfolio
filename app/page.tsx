// app/page.tsx
'use client';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import Interactive3D from './components/Interactive3D';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden">
      {/* Global Interactive 3D Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Interactive3D />
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}