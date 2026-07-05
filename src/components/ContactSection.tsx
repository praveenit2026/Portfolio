import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/praveen9345/',
    color: 'hover:text-[#0077B5]',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/praveenit2026',
    color: 'hover:text-foreground',
  },
];

const ContactSection = () => {
  const openExternalLink = (url: string) => {
    const popup = window.open(url, '_blank', 'noopener,noreferrer');
    if (!popup) {
      window.location.href = url;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading gradient-text inline-block">Get in Touch</h2>
            <p className="section-subheading mt-4">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <ScrollReveal direction="right" delay={0.3}>
                <motion.div 
                  className="glass-card p-6"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:praveenraj052005@gmail.com"
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          praveenraj052005@gmail.com
                        </p>
                      </div>
                    </motion.a>
                    
                    <motion.div 
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground">Bengaluru, India</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
              
              {/* Social Links */}
              <ScrollReveal direction="right" delay={0.4}>
                <motion.div 
                  className="glass-card p-6"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-6">Connect with Me</h3>
                  
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(event) => {
                          event.preventDefault();
                          openExternalLink(social.url);
                        }}
                        className={`flex items-center gap-2 px-4 py-3 rounded-lg bg-muted text-muted-foreground transition-all duration-300 hover:bg-muted/80 ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                        <span>{social.name}</span>
                        <ExternalLink className="w-4 h-4 opacity-50" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Direct Contact Card */}
            <ScrollReveal direction="left" delay={0.3}>
              <motion.div 
                className="glass-card p-6 flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden group h-full"
                whileHover={{ y: -5 }}
              >
                {/* Background Glow Effect */}
                <div className="absolute -top-24 -right-24 w-40 h-40 bg-gradient-to-br from-[#54FF2C]/30 via-primary/20 to-teal/10 rounded-full blur-3xl group-hover:bg-primary/40 transition-colors duration-500" />
                
                <div className="relative">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-1"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-4 border-background" title="Available now" />
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Let's Collaborate</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                    I'm currently available for new projects and opportunities. Send me an email and let's discuss your ideas!
                  </p>
                </div>

                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=praveenraj052005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#54FF2C] via-primary to-teal rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#54FF2C] via-primary to-teal text-black font-black text-lg transition-all duration-300">
                    <Mail className="w-5 h-5" />
                    <span>Send an Email</span>
                  </div>
                </motion.a>

                <div className="pt-4 border-t border-border/50 w-full relative z-10">
                  <p className="text-sm font-semibold text-foreground mb-0.5">praveenraj052005@gmail.com</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Response time: &lt; 24h</p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
