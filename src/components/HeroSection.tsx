





import SplitText from './SplitText';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollDown = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">



        <h2 className="text-2xl md:text-3xl mb-6 animate-slide-down opacity-0" style={{ animationDelay: '0.2s' }}>
          ML & Web Developer
        </h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-down opacity-0" style={{ animationDelay: '0.4s' }}>
          <SplitText className="leading-tight">
            Hi, I'm Yash, a developer passionate about creating imapctful digital experiences
          </SplitText>
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl animate-slide-down opacity-0" style={{ animationDelay: '0.6s' }}>
          I design and develop websites, interfaces, and digital experiences that are beautiful, functional, and focused on user experience.
        </p>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0"
        style={{ animationDelay: '1s' }}
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
