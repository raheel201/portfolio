// app/components/sections/Footer.tsx
const Footer = () => {
  return (
    <footer className="relative w-full py-6 text-center text-sm text-gray-400 border-t border-gray-800">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-secondary to-transparent animate-subtle-glow" />
      <p>&copy; {new Date().getFullYear()} Raheel Nazeer Ahmed. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;