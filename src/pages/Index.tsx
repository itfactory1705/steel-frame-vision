
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'SteelFrame - Строительство из металлокаркаса';
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
