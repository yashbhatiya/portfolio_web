
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300 bg-background/80 backdrop-blur-md ${!isVisible ? 'header-hidden' : ''}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-medium">


            <img
              src="/logo.png" // Updated to relative path; replace with your actual image path
              alt="Yash Bhatiya"
              className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover mb-2 mx-auto md:mx-0"
            />

          </Link>

          <button
            onClick={toggleMenu}
            className="z-50 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-background z-30 flex flex-col justify-center items-center space-y-8 transition-all duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <NavLinks onClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
};

// Helper component for navigation links
const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="relative overflow-hidden group"
          onClick={onClick}
        >
          <span className="block text-foreground font-medium transition-transform group-hover:-translate-y-full">
            {link.name}
          </span>
          <span className="absolute top-0 left-0 text-foreground font-medium translate-y-full transition-transform group-hover:translate-y-0">
            {link.name}
          </span>
        </Link>
      ))}
    </>
  );
};

export default Header;
