import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'B Tech Information Technology',
    institute: 'Muthayammal Engineering College',
    location: 'Namakkal',
    status: '2026',
    grade: '8.97 CGPA',
    type: 'education',
  },
  {
    degree: 'HSE',
    institute: 'Nadar Saraswathi Higher Secondary School',
    location: 'Theni',
    status: '2022',
    grade: '75%',
    type: 'education',
  },
];

const certifications = [
  {
    name: 'Cloud Computing',
    platform: 'NPTEL',
    date: '2024',
    skills: ['Cloud'],
    type: 'certification',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading gradient-text inline-block">My Journey</h2>
            <p className="section-subheading mt-4">
              Academic background and professional milestones
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Unified Timeline Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2 z-0" 
            />

            {/* Content Wrapper */}
            <div className="relative z-10">
              {/* Education Section Title on Timeline */}
              <div className="relative mb-12 flex justify-start md:justify-center">
                <div className="bg-zinc-950 px-4 py-2 border border-primary/20 rounded-full flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white uppercase tracking-widest">Education</span>
                </div>
              </div>

              {/* Education Items */}
              {education.map((item, index) => (
                <ScrollReveal 
                  key={item.degree} 
                  delay={0.2 + index * 0.1}
                  direction={index % 2 === 0 ? "right" : "left"}
                >
                  <div className={`relative mb-12 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                  }`}>
                    {/* Timeline Dot */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      className={`absolute top-6 w-4 h-4 rounded-full bg-primary glow-primary ${
                        index % 2 === 0 ? 'left-0 md:left-auto md:right-0 md:translate-x-1/2' : 'left-0 md:-translate-x-1/2'
                      } transform -translate-x-1/2 md:translate-x-0 z-20`} 
                    />
                    
                    <motion.div 
                      className="glass-card p-6 ml-8 md:ml-0 hover:border-primary/50 transition-all duration-300 glow-border"
                      whileHover={{ y: -5, scale: 1.01 }}
                    >
                      <div className="flex items-center gap-2 text-primary text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.status}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                      <p className="text-lg text-zinc-300 mb-2">{item.institute}</p>
                      <div className="flex flex-wrap items-center gap-4 text-zinc-500 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {item.grade}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Certifications Section Title on Timeline */}
              <div className="relative mb-12 flex justify-start md:justify-center">
                <div className="bg-zinc-950 px-4 py-2 border border-primary/20 rounded-full flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white uppercase tracking-widest">Certifications</span>
                </div>
              </div>

              {/* Certification Items */}
              {certifications.map((cert, index) => {
                const globalIndex = education.length + index;
                return (
                  <ScrollReveal 
                    key={cert.name} 
                    delay={0.2 + index * 0.1}
                    direction={globalIndex % 2 === 0 ? "right" : "left"}
                  >
                    <div className={`relative mb-12 md:w-1/2 ${
                      globalIndex % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                    }`}>
                      {/* Timeline Dot */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                        className={`absolute top-6 w-4 h-4 rounded-full bg-primary glow-primary ${
                          globalIndex % 2 === 0 ? 'left-0 md:left-auto md:right-0 md:translate-x-1/2' : 'left-0 md:-translate-x-1/2'
                        } transform -translate-x-1/2 md:translate-x-0 z-20`} 
                      />
                      
                      <motion.div 
                        className="glass-card p-6 ml-8 md:ml-0 hover:border-primary/50 transition-all duration-300 glow-border"
                        whileHover={{ y: -5, scale: 1.01 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                            <p className="text-zinc-300">{cert.platform}</p>
                          </div>
                          <span className="text-sm text-zinc-500 font-bold">{cert.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold border border-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EducationSection;
