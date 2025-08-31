// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import CustomScrollbar from './components/CustomScrollbar';
import FloatingElements from './components/FloatingElements';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raheel Nazeer Ahmed | Software Engineer',
  description: 'Portfolio of Raheel Nazeer Ahmed, a frontend developer specializing in React, Next.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <CustomScrollbar />
        <FloatingElements />
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}