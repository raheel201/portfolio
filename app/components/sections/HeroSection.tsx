// app/components/sections/HeroSection.tsx
'use client';
import { FaGithub, FaFileDownload, FaEnvelope } from 'react-icons/fa';
import SpaceBackground from '../SpaceBackground';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SpaceBackground />
      </div>

      <div className="z-10 p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-2 text-white px-4">
          Raheel Nazeer Ahmed
        </h1>

        <p className="text-xl md:text-2xl text-cyan-300 font-semibold tracking-wider mb-6">
          Software Engineer | Frontend Developer
        </p>

        <p className="max-w-3xl mx-auto my-6 text-sm sm:text-md md:text-lg text-gray-300 px-4">
          &quot;Building scalable, high-performance web applications with React, Next.js, and modern web technologies.&quot;
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 px-4">
          <a href="mailto:raheel.nazeer.ahmed.07@gmail.com" className="btn-primary">
            <FaEnvelope /> Hire Me
          </a>
          <a href="/Raheel_Nazeer_Ahmed_Resume.pdf" download className="btn-secondary">
            <FaFileDownload /> View Resume
          </a>
          <a href="https://github.com/raheel201" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        .btn-primary, .btn-secondary {
          @apply flex items-center justify-center gap-2 px-4 sm:px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base;
        }
        .btn-primary {
          @apply bg-blue-600 text-white hover:bg-blue-700 transform hover:-translate-y-1;
        }
        .btn-secondary {
          @apply bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 hover:bg-cyan-600/20 transform hover:-translate-y-1;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;