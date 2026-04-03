import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder, CheckCircle } from 'lucide-react';

const projects = [
  {
    title: 'Resume Parser',
    status: 'Completed',
    category: 'Web App',
    description: 'An AI-powered Resume Parser that intelligently extracts and analyzes key information from resumes. It parses candidate details like skills, experience, and education, enabling faster and smarter recruitment workflows with a clean, modern interface.',
    techStack: ['Python', 'React', 'FastAPI', 'NLP', 'Supabase'],
    liveDemo: 'https://resume-parser-ivory.vercel.app',
    github: 'https://github.com/praveenit2026/Resume-Parser',
  },
  {
    title: 'Farm to Shop',
    status: 'Completed',
    category: 'Web App',
    description: 'Farm to Shop is a digital platform that connects farmers directly with shopkeepers, enabling direct product listing, ordering, and communication. It helps reduce middlemen, ensures fair pricing for farmers, and provides fresh products to retailers through a streamlined supply chain.',
    techStack: ['Java', 'HTML', 'CSS'],
    liveDemo: null,
    github: null,
  },
  {
    title: 'Smart Inventory Control System',
    status: 'Completed',
    category: 'Web App',
    description: 'A smart inventory management system designed to track stock levels and avoid expired products. It helps businesses efficiently manage their inventory, reduce waste, and ensure product freshness through automated alerts and real-time monitoring.',
    techStack: ['Java', 'SQL'],
    liveDemo: null,
    github: null,
  },
];

const categories = ['All', 'Web App'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading gradient-text inline-block">Featured Projects</h2>
            <p className="section-subheading mt-4">
              Some of the projects I've worked on
            </p>
          </div>

          {/* Category Filter */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.4)]'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  layout
                  href={project.liveDemo || project.github || undefined}
                  target={project.liveDemo || project.github ? '_blank' : undefined}
                  rel={project.liveDemo || project.github ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`glass-card group overflow-hidden hover:border-primary/50 transition-all duration-500 glow-border h-full flex flex-col ${project.liveDemo || project.github ? 'cursor-pointer' : 'cursor-default'}`}
                  whileHover={{ y: -10 }}
                >
                  {/* Project Header */}
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 10 }}
                      >
                        <Folder className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 pt-0 flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded bg-muted/50 text-muted-foreground text-xs font-medium border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.liveDemo && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3, color: "#22C55E" }}
                          className="flex items-center gap-1 text-sm text-muted-foreground transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3, color: "#22C55E" }}
                          className="flex items-center gap-1 text-sm text-muted-foreground transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </motion.a>
                      )}
                      {!project.liveDemo && !project.github && (
                        <span className="text-sm text-muted-foreground italic opacity-60">Private Project</span>
                      )}
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
