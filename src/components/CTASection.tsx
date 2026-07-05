import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://image2url.com/r2/default/images/1770444263150-0f5db095-7e5b-4bdd-8155-4e7934c8ceff.png"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="text-primary font-medium">Open for opportunities</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="gradient-text">Build Something</span> Amazing Together
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            I'm currently looking for new opportunities to grow and contribute. 
            If you have a project or position that matches my skills, I'd love to hear from you!
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 glow-primary"
            >
              <Sparkles className="w-5 h-5" />
              Let's Connect
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1GiGKa0MWpRswM-7sUQjYOjFXgR9-Fb1R/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-primary/50 text-foreground font-semibold text-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary glow-border"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
