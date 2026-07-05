import { Code, Coffee, Lightbulb, Target, Sparkles, Zap, Brain, Rocket } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Code, label: 'Clean Code', description: 'Writing efficient, maintainable code', color: 'text-primary' },
  { icon: Brain, label: 'Problem Solver', description: 'Tackling complex challenges', color: 'text-blue-400' },
  { icon: Zap, label: 'Goal Oriented', description: 'Focused on delivering results', color: 'text-yellow-400' },
  { icon: Rocket, label: 'Continuous Learner', description: 'Always exploring new tech', color: 'text-purple-400' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading gradient-text block">About Me</h2>
            <p className="section-subheading mt-2">
              Get to know more about my journey and what drives me
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Text & Stats */}
            <div className="space-y-8">
              <div className="space-y-6">
                <ScrollReveal delay={0.2}>
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    I am a motivated software developer with hands-on experience in Java and SQL, 
                    currently working as an Intern at Tap Academy. I enjoy solving problems, writing 
                    clean and efficient code, and building practical applications that address real-world needs.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    I'm a continuous learner who is always exploring new technologies and improving my 
                    development skills. My goal is to create impactful solutions that make a difference.
                  </p>
                </ScrollReveal>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { value: "0", label: "Years Experience" },
                  { value: "1+", label: "Projects Completed" },
                  { value: "1", label: "Certifications" }
                ].map((stat, i) => (
                  <ScrollReveal key={stat.label} delay={0.4 + i * 0.1}>
                    <motion.div 
                      className="glass-card p-4 flex flex-col items-start h-full"
                      whileHover={{ y: -5, borderColor: "rgba(34, 197, 94, 0.4)" }}
                    >
                      <span className="text-3xl font-black gradient-text">{stat.value}</span>
                      <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mt-1 leading-tight">{stat.label}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right Column: Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.label} delay={0.3 + index * 0.1}>
                  <motion.div
                    className="glass-card p-6 group transition-all duration-300 glow-border h-full"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.label}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
