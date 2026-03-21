import { MapPin, Mail, Github, Linkedin, Twitter, Globe, Sparkles } from 'lucide-react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const typingText = useTypingAnimation(['Java Developer'], 100, 100, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative font-sans">
      {/* Soft neon green background glow that bleeds seamlessly into the next section to avoid hard divider lines */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-[150vh] bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08),transparent_60%)] pointer-events-none z-0" 
      />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Profile Image - Left Side */}
          <motion.div 
            className="relative flex-shrink-0 flex justify-center lg:justify-start lg:ml-8"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Outer Left-Aligned Crescent Ring with massive gap */}
              <div className="absolute inset-[-20px] md:inset-[-32px] rounded-full p-[6px] bg-gradient-to-r from-primary via-primary/20 to-white/5 shadow-[-20px_0_50px_-10px_rgba(34,197,94,0.3)] z-0">
                {/* Background colored gap filler */}
                <div className="w-full h-full rounded-full bg-black/90" />
              </div>
              
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden bg-zinc-950 z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src="/profile-image.jpg"
                    alt="Praveen R"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Content - Right Side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl px-4 lg:px-0">
            {/* Badge */}
            <motion.div 
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 group"
              variants={itemVariants}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-primary uppercase">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight"
              variants={itemVariants}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Praveen R</span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl font-medium mb-6 flex items-center gap-2 h-10"
              variants={itemVariants}
            >
              <span className="text-primary">{typingText}</span>
              <span className="typing-cursor text-primary" />
            </motion.div>
            
            <motion.p 
              className="text-zinc-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed font-medium"
              variants={itemVariants}
            >
              Passionate IT Professional | Code • Learn • Grow
            </motion.p>

            {/* Info Row */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-10 text-zinc-500 text-sm font-medium"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 bg-zinc-900/40 px-3 py-2 rounded-lg border border-white/5">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bengaluru</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/40 px-3 py-2 rounded-lg border border-white/5">
                <Mail className="w-4 h-4 text-primary" />
                <span>praveenraj052005@gmail.com</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-primary text-black font-bold text-base transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] shadow-primary/20"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(39, 39, 42, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-bold text-base transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
