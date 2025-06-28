import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://portfolio-web-7a53.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(text || 'Received non-JSON response');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed with status ' + response.status);
      }

      toast({
        title: "Message sent!",
        description: data.message || "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Submission error:', error);
      let errorMessage = 'Failed to send message';

      if (error instanceof Error) {
        errorMessage = error.message;
        // Handle common error cases
        if (errorMessage.includes('Failed to fetch')) {
          errorMessage = 'Network error. Please check your connection.';
        } else if (errorMessage.includes('Unexpected token')) {
          errorMessage = 'Server error. Please try again later.';
        }
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 md:px-12 lg:px-24 opacity-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg mb-8">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4 mb-12">
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">yashbhatiya265@gmail.com</p>

              <p className="font-medium">Based in</p>
              <p className="text-muted-foreground">Vadodara, Gujarat, India</p>
            </div>

            <div className="space-x-6">
              <a href="https://x.com/YashBhatiya1605" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/yashbhatiya/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/loser_xel/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-foreground text-background px-8 py-3 rounded-md font-medium flex items-center justify-center w-full md:w-auto disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  Sending
                  <span className="ml-2 w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"></span>
                </span>
              ) : (
                <>
                  Send Message <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;