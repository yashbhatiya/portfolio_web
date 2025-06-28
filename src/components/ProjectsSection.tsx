
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '3D FPS Game Development',
    description: 'FPS Game based on Parul University using Unity Engine',
    category: 'Development',
    image: '/FPSGame.png',
    link: '/work/FPSGame'
  },
  {
    id: 2,
    title: 'Jayraj Computer Website',
    description: 'Full website for a Computer Training center',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
    link: '/work/ecommerce-platform'
  },
  {
    id: 3,
    title: 'Safety Monitoring using YOLO ',
    description: 'Monitoring system using object detection',
    category: 'Machine Learning',
    image: '/PersonDetection.jpeg',
    link: '/work/mobile-app-ui'
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    projectsRef.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      projectsRef.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 md:px-12 lg:px-24 opacity-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Selected Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => projectsRef.current[index] = el}
              className="project-card p-6 opacity-0"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="aspect-video mb-6 overflow-hidden rounded">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              <span className="text-sm text-muted-foreground">{project.category}</span>
              <h3 className="text-2xl font-medium mt-2 mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>

              <Link to={project.link} className="group flex items-center text-foreground font-medium">
                View Project
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/work" className="inline-flex items-center text-foreground border-b border-foreground pb-1 hover:border-muted-foreground transition-colors">
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
