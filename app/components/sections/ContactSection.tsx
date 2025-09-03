// app/components/sections/ContactSection.tsx
'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import SpaceBackground from '../SpaceBackground';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    ).then(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, () => {
      toast.error('Failed to send message. Please try again.');
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="relative w-full py-20 lg:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SpaceBackground />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
        <p className="text-gray-300 mb-10">Have a question or want to work together? Feel free to reach out.</p>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-black/30 p-6 sm:p-8 rounded-lg shadow-2xl backdrop-blur-sm border border-cyan-400/20"
        >
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="mb-8 relative left-[-1.5%]">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="form-input resize-none"
            />
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full btn-primary disabled:opacity-50">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-12">
          <a href="https://linkedin.com/in/raheel007" target="_blank" className="social-icon"><FaLinkedin size={24} /></a>
          <a href="https://github.com/raheel201" target="_blank" className="social-icon"><FaGithub size={24} /></a>
          <a href="mailto:raheel.nazeer.ahmed.07@gmail.com" className="social-icon"><FaEnvelope size={24} /></a>
        </div>
      </div>
      <style jsx>{`
        .form-input {
          @apply w-full p-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 
                 focus:outline-none focus:border-cyan-400 focus:ring-0 focus:shadow-lg focus:shadow-cyan-400/20
                 transition-all duration-300 ease-in-out backdrop-blur-sm;
          box-shadow: none !important;
        }
        .form-input:focus {
          border-color: #22d3ee !important;
          box-shadow: 0 0 0 0px transparent, 0 10px 25px rgba(34, 211, 238, 0.2) !important;
          outline: none !important;
        }
        .social-icon {
          @apply text-cyan-300 hover:text-white hover:scale-125 transform transition-all duration-300;
        }
        .btn-primary {
          @apply flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out bg-blue-600 text-white hover:bg-blue-700;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;