
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import InteractiveCanvas from '@/components/InteractiveCanvas';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <CustomCursor />
      <InteractiveCanvas />
      <Header />

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="animate-fade-in opacity-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">Let's Talk</h1>



              <p className="text-lg mb-12">
                Have a project in mind? Want to collaborate? Or just say hello? Feel free to reach out through the form or connect with me directly.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">Vadodara, Gujarat, India</p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Email</h3>
                  <a href="mailto:hello@portfolio.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    yashbhatiya265@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Social</h3>
                  <div className="flex space-x-6">
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
              </div>
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
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
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    required
                    className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
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
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
