
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <Link to="/" className="text-2xl font-medium mb-6 md:mb-0">Yash Bhatiya</Link>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <p className="text-muted-foreground mb-2">Email</p>
              <a href="mailto:yashbhatiya265@gmail.com" className="hover:underline">yashbhatiya265@gmail.com</a>
            </div>

            <div>
              <p className="text-muted-foreground mb-2">Social</p>
              <div className="flex space-x-4">
                <a href="https://x.com/YashBhatiya1605" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground">
                  Twitter
                </a>
                <a href="https://www.linkedin.com/in/yashbhatiya/" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/loser_xel/" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
