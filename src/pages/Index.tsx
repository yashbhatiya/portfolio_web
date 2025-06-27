
import { useState, useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import InteractiveCanvas from '@/components/InteractiveCanvas';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after the initial loading
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2800); // Slightly longer than the spinner's timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingSpinner />
      
      <div className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <CustomCursor />
        <InteractiveCanvas />
        <Header />
        
        <main>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
