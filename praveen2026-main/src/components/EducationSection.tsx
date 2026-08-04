import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, X, ExternalLink } from 'lucide-react';

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
    platform: 'NPTEL | IIT Kharagpur',
    date: '2024',
    skills: ['Cloud Computing', 'Virtualization', 'Infrastructure as a Service', 'IIT Kharagpur'],
    type: 'certification',
    score: '83%',
    image: '/certificates/cloud_computing.jpg',
    link: 'https://drive.google.com/file/d/1bhYSPn5ehEIlK924LeZMhmwGvXtpxDWm/view?usp=sharing',
  },
  {
    name: 'Software Project Management',
    platform: 'NPTEL | IIT Kharagpur',
    date: '2025',
    skills: ['Project Management', 'Estimation', 'Software Quality', 'IIT Kharagpur'],
    type: 'certification',
    score: '70%',
    image: '/certificates/software_project_management.jpg',
    link: 'https://drive.google.com/file/d/1p5D5l3vNsqiP5919mJlTMFOE2hUAVQ2l/view?usp=sharing',
  },
  {
    name: 'Foundation of Cloud IoT Edge ML',
    platform: 'NPTEL | IIT Kanpur',
    date: '2025',
    skills: ['Cloud IoT', 'Edge Computing', 'Machine Learning', 'IIT Kanpur'],
    type: 'certification',
    score: '79%',
    image: '/certificates/cloud_iot_edge_ml.jpg',
    link: 'https://drive.google.com/file/d/1Ur2MZVFL9oN15N-Ce7S8MW8Q2gYtuFl7/view?usp=sharing',
  },
];

const EducationSection = () => {
  const [modalCert, setModalCert] = useState<typeof certifications[0] | null>(null);

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
                      
                      {/* Clean Certification Card matching Education exactly in size and layout */}
                      <motion.div 
                        className="glass-card p-6 ml-8 md:ml-0 hover:border-primary/50 transition-all duration-300 glow-border"
                        whileHover={{ y: -5, scale: 1.01 }}
                      >
                        <div className="flex items-center gap-2 text-primary text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                        <p className="text-lg text-zinc-300 mb-2">{cert.platform}</p>
                        <div className="flex flex-wrap items-center gap-4 text-zinc-500 text-sm">
                          {cert.score && (
                            <span className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              Score: {cert.score}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setModalCert(cert);
                            }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-zinc-950 bg-primary hover:bg-primary/95 transition-all duration-200 cursor-pointer relative z-30 shadow-[0_0_12px_rgba(34,197,94,0.2)]"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </button>
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

      {/* Certificate Modal / Lightbox */}
      <AnimatePresence>
        {modalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)' }}
            onClick={() => setModalCert(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
              style={{ border: '1px solid hsl(142 100% 50% / 0.3)', boxShadow: '0 0 60px hsl(142 100% 50% / 0.15)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-5 py-4" style={{ background: 'hsl(222 47% 8% / 0.98)', borderBottom: '1px solid hsl(142 100% 50% / 0.15)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(142 100% 50% / 0.15)', border: '1px solid hsl(142 100% 50% / 0.3)' }}>
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{modalCert.name}</p>
                    <p className="text-zinc-400 text-xs">{modalCert.platform} · {modalCert.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => setModalCert(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="relative w-full overflow-y-auto max-h-[70vh] bg-white flex items-center justify-center">
                <img
                  src={modalCert.image}
                  alt={`${modalCert.name} Certificate`}
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Modal footer */}
              <div className="flex items-center justify-between px-5 py-3" style={{ background: 'hsl(222 47% 8% / 0.98)', borderTop: '1px solid hsl(142 100% 50% / 0.15)' }}>
                <span className="text-zinc-400 text-xs">Score: <span className="text-primary font-bold">{modalCert.score}</span></span>
                <a
                  href={modalCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors"
                >
                  Open in new tab
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EducationSection;
