import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Basic Scroll Spy logic
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <span className="text-xl font-black gradient-text tracking-tighter transition-transform duration-300 group-hover:scale-110">
            Praveen R
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`relative nav-link text-sm font-medium transition-colors duration-300 hover:text-primary ${
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#54FF2C] via-primary to-teal transition-all duration-300" />
              )}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <a href="https://github.com/praveenit2026" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:bg-white/5">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/praveen9345/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:bg-white/5">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1GiGKa0MWpRswM-7sUQjYOjFXgR9-Fb1R/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-black font-black text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(140,255,50,0.4)]"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-card border-t border-white/10 transition-all duration-300 transform ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-colors duration-300 flex items-center justify-between ${
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => {
                setActiveSection(link.href.substring(1));
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(140,255,50,0.8)]" />
              )}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1GiGKa0MWpRswM-7sUQjYOjFXgR9-Fb1R/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-xl bg-primary text-black font-black text-base shadow-[0_0_20px_rgba(140,255,50,0.3)] transition-transform active:scale-95"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
