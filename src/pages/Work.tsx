
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import InteractiveCanvas from '@/components/InteractiveCanvas';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Spotify App UI',
    description: 'Intuitive interface design for spotify app',
    category: 'Design',
    image: '/FigmaSpotify.png',
    link: '/work/AccentureVI'
  },
  {
    id: 2,
    title: 'Jayraj Computer Website',
    description: 'Full website for a Computer Training center',
    category: 'Development',
    image: '/JcEWEBsite.png',
    link: 'https://www.jayrajcomputereducation.app/'
  },
  {
    id: 3,
    title: 'Safety Monitoring using YOLO',
    description: 'Monitoring system using object detection',
    category: 'Machine Learning',
    image: '/PersonDetection.jpeg',
    link: '/work/safety-monitoring-yolo'
  },
  {
    id: 4,
    title: 'Graphic Design Course Development',
    description: 'Creating Graphic design course for JCE',
    category: 'Design',
    image: '/GraphicJCE.png',
    link: '/work/JCEGraphic-Design'
  },
  {
    id: 5,
    title: '3D FPS Game Development',
    description: 'FPS Game based on Parul University using Unity Engine',
    category: 'Development',
    image: '/FPSGame.png',
    link: '/work/FPSGame'
  },
  {
    id: 6,
    title: 'Keypoint Estimation for Excavator',
    description: 'A pose estimation model to track excavator arm movements and estimate operational work.',
    category: 'Machine Learning',
    image: '/JCBPose.png',
    link: '/work/JCBKeypoint'
  }
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const categories = ['All', 'Design', 'Development', 'Machine Learning'];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <CustomCursor />
      <InteractiveCanvas />
      <Header />

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 animate-fade-in opacity-0">My Work</h1>

          <div className="mb-12 flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm ${selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-secondary hover:bg-secondary/80'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card p-6 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
              >
                <div className="aspect-video mb-6 overflow-hidden rounded">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>

                <span className="text-sm text-muted-foreground">{project.category}</span>
                <h3 className="text-2xl font-medium mt-2 mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <a href={project.link} className="group inline-flex items-center text-foreground font-medium">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Work;
