
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import InteractiveCanvas from '@/components/InteractiveCanvas';

const About = () => {
  return (
    <>
      <CustomCursor />
      <InteractiveCanvas />
      <Header />



      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">

          <img
            src="/logo.png" // Updated to relative path; replace with your actual image path
            alt="Yash Bhatiya"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-8 mx-auto md:mx-0"
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-12 animate-fade-in opacity-0">About Me</h1>

          <div className="space-y-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg">
              Hello! I'm Yash Bhatiya — a creative machine learning engineer and web developer passionate about crafting smart, immersive digital experiences. With several years of hands-on experience across diverse technologies, I specialize in building intelligent systems, modern websites, and powerful visual applications.
            </p>

            <p className="text-lg">
              My approach blends innovation with functionality — I believe that great technology should not only be efficient but also meaningful and user-centric. Whether I’m working on a computer vision model, a dynamic web platform, or teaching code to aspiring developers, I focus on delivering value with precision and creativity.
            </p>

            <p className="text-lg">
              Before stepping into the freelance world, I completed a professional internship at L&T, where I explored computer vision and real-world AI applications. I also served as a technical trainer at JCE, helping students and professionals strengthen their programming skills. In addition to development work, I run a digital marketing agency, giving me a well-rounded understanding of both the technical and business sides of digital growth.
            </p>

            <p className="text-lg">
              When I’m not developing or mentoring, you’ll often find me playing guitar, exploring the latest in tech and design, or simply recharging in nature — always seeking inspiration for the next idea.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div>
              <h2 className="text-2xl font-medium mb-6">Education</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">BTech in Computer Science and Engineering</h3>
                  <p className="text-muted-foreground">Parul University, Vadodara, Gujarat, IN</p>
                  <p className="text-sm text-muted-foreground">2022 - 2025</p>
                </div>

                <div>
                  <h3 className="font-medium">Diploma in Computer Engineering</h3>
                  <p className="text-muted-foreground">RC Technical Institute, Ahmedabad, Gujarat, IN</p>
                  <p className="text-sm text-muted-foreground">2019 - 2022</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium mb-6">Experience</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">ML intern</h3>
                  <p className="text-muted-foreground">L&T Energry Hydrocarbon</p>
                  <p className="text-sm text-muted-foreground">2024 Dec - 2025 Apr</p>
                </div>

                <div>
                  <h3 className="font-medium">Technical Trainer</h3>
                  <p className="text-muted-foreground">Jayraj Computer Education</p>
                  <p className="text-sm text-muted-foreground">2024 Jan - 2024 Jun</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-medium mb-6">Skills & Tools</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
              <div>
                <h3 className="font-medium">Design</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>UI/UX Design</li>
                  <li>Branding & Identity</li>
                  <li>Responsive Web Design</li>
                  <li>Prototyping</li>
                  <li>Unity3D</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium">Development</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>HTML/CSS/JavaScript</li>
                  <li>React & TypeScript</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Responsive Development</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium">Tools</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>VS Code</li>
                  <li>YOLO</li>
                  <li>Nvidia Nsight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
