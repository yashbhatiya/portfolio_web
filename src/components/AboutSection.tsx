
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/50 px-6 md:px-12 lg:px-24 opacity-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">About Me</h2>

            <div ref={contentRef} className="space-y-6 opacity-0" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg">
                I'm an AI/ML developer and digital creator with hands-on experience building intelligent systems, real-time applications, and engaging user experiences across web.
              </p>

              <p className="text-lg">
                My approach blends technical depth in machine learning and computer vision with practical design thinking — enabling me to build solutions that are innovative and high-performing.
              </p>

              <p className="text-lg">
                I specialize in AI-powered applications, interactive web development, and educational tools. Whether it's deploying safety systems with YOLOv7, or developing web pages, I focus on solving real problems with creativity and clarity.
              </p>

              <Link to="/about" className="inline-flex items-center text-foreground border-b border-foreground pb-1 hover:border-muted-foreground transition-colors mt-4 block">
                More About Me
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <h2 className="text-2xl font-medium mb-4 ">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex flex-col">
                    <span>Computer Vision</span>
                    <div className="flex gap-2 mt-1">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" className="h-6 w-6" />
                      <img src="https://skillicons.dev/icons?i=teaching" alt="YOLO" className="h-6 w-6" />
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span>Front-end Development</span>
                    <div className="flex gap-2 mt-1">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-6 w-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-6 w-6" />
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span>Game Development</span>
                    <div className="flex gap-2 mt-1">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity" className="h-6 w-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="h-6 w-6" />
                    </div>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span>Technical Trainer</span>
                    <div className="flex gap-2 mt-1">
                      <img src="\Computer Trainner.png" alt="Teaching" className="h-6 w-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="h-6 w-6" />
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span>Machine Learning</span>
                    <div className="flex gap-2 mt-1">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-6 w-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="h-6 w-6" />
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span>Graphic Designing</span>
                    <div className="flex gap-2 mt-1">
                      <img src="https://img.jsdelivr.com/github.com/adobe-photoshop.png" alt="Photoshop" className="h-6 w-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator" className="h-6 w-6" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex flex-col items-center gap-1">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-8 w-8" />
                  <span className="bg-background px-3 py-1 rounded-full text-sm">React</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-8 w-8" />
                  <span className="bg-background px-3 py-1 rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="https://simpleicons.org/icons/tailwindcss.svg" alt="Tailwind CSS" className="h-8 w-8" />
                  <span className="bg-background px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-8 w-8" />
                  <span className="bg-background px-3 py-1 rounded-full text-sm">Node.js</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-8 w-8" />
                  <span className="bg-background px-3 py-1 rounded-full text-sm">Figma</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="https://simpleicons.org/icons/yolo.svg" alt="YOLO" className="h-8 w-8" />
                  <span className="bg-background px-3 py-1 rounded-full text-sm">YOLO</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-8 w-8" />
                  <span className="bg-background px-3 py-1 rounded-full text-sm">Python</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="h-8 w-8" />
                  <span className="bg-background px-3 py-1 rounded-full text-sm">C#</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity3D" className="h-8 w-8" />
                  <span className="bg-background px-3 py-1 rounded-full text-sm">Unity3D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
