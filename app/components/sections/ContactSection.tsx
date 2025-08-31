// app/components/sections/ContactSection.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

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
        ).then((result) => {
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        }, (error) => {
            toast.error('Failed to send message. Please try again.');
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

  return (
    <section id="contact" className="relative w-full py-20 lg:py-32 px-4 overflow-hidden">
       <div className="absolute inset-0 gradient-background animate-gradient-wave -z-10" />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
        <p className="text-gray-300 mb-10">Have a question or want to work together? Feel free to reach out.</p>

        <motion.form 
            onSubmit={handleSubmit}
            className="w-full bg-black/20 p-8 rounded-lg shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="mb-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="form-input" />
            </div>
            <div className="mb-4">
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="form-input" />
            </div>
            <div className="mb-6">
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} className="form-input"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full btn-primary disabled:opacity-50">
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </motion.form>

        <div className="flex justify-center gap-6 mt-12">
            <a href="https://linkedin.com/in/raheel007" target="_blank" className="social-icon"><FaLinkedin size={24}/></a>
            <a href="https://github.com/raheel201" target="_blank" className="social-icon"><FaGithub size={24}/></a>
            <a href="mailto:raheel.nazeer.ahmed.07@gmail.com" className="social-icon"><FaEnvelope size={24}/></a>
        </div>
      </div>
      <style jsx>{`
        .form-input {
          @apply w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary;
        }
        .social-icon {
          @apply text-gray-400 hover:text-white hover:scale-125 transform transition-all duration-300;
        }
        .btn-primary {
          @apply flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out bg-brand-secondary text-white hover:bg-opacity-80;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;