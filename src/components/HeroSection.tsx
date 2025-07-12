





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
      <div className=" mx-4">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl md:text-3xl animate-slide-down opacity-0" style={{ animationDelay: '2.8s' }}>
            ML & Web Developer
          </h2>



          <button
            onClick={() => {

              const link = document.createElement('a');
              link.href = 'public/Yash Bhatiya resume.pdf';
              link.download = 'yash-bhatiya-resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }


            }
            className="px-4 py-2  bg-black text-white rounded hover:bg-black transition" style={{ animationDelay: '2.8s' }}
          >
            Download CV
          </button>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-down opacity-0" style={{ animationDelay: '3.0s' }}>
          <SplitText className="leading-tight">
            Hi, I'm Yash, a developer passionate about creating imapactful digital experiences
          </SplitText>
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl animate-slide-down opacity-0" style={{ animationDelay: '3.2s' }}>
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
