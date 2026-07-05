import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Bot, Layout, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['HTML', 'CSS'],
    color: 'from-[#54FF2C] via-primary to-teal',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Java'],
    color: 'from-secondary via-forest to-emerald-900',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['SQL'],
    color: 'from-[#54FF2C] via-secondary to-forest',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git'],
    color: 'from-teal via-secondary to-forest',
  },
  {
    title: 'AI Tools',
    icon: Bot,
    skills: ['ChatGPT', 'GitHub Copilot'],
    color: 'from-primary via-teal to-[#54FF2C]',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading gradient-text inline-block">Skills & Technologies</h2>
            <p className="section-subheading mt-4">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={0.2 + index * 0.1}>
                <motion.div
                  className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 glow-border"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 + si * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.2)", color: "#22C55E" }}
                        className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
