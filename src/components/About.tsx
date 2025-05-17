import React from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, Briefcase, GraduationCap } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { experiences } from '../data/experience';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const About: React.FC = () => {
  const [ref, controls] = useAnimateOnScroll();
  
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-200 mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-8" />
          
          <GlassCard className="max-w-3xl mx-auto text-white">
            <p className="text-lg leading-relaxed">
              I'm a 4th year Computer Science student at the University of Victoria, specializing in Software Systems.
              With a passion for clean code and creative problem-solving, I enjoy building full-stack applications
              that are both functional and visually appealing. When I'm not coding, you can find me exploring
              new technologies, playing cricket and travelling!
            </p>
          </GlassCard>
        </motion.div>
        
        <div className="mt-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-gray-200 mb-8 text-center"
          >
            Education & Experience
          </motion.h3>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <GlassCard className="text-white flex flex-col md:flex-row items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-primary-500 rounded-full">
                <GraduationCap size={24} />
              </div>
              
              <div>
                <h4 className="text-xl font-semibold">B.Sc. in Computer Science, Software Systems</h4>
                <p className="text-primary-200 mb-2 flex items-center gap-2">
                  <CalendarClock size={16} />
                  <span>Expected June 2026</span>
                </p>
                <h5 className="font-medium">University of Victoria</h5>
                <p className="mt-3 text-white text-opacity-80">
                  Focusing on software architecture, algorithms, and full-stack development.
                  Participating in coding competitions and collaborative projects.
                </p>
              </div>
            </GlassCard>
          </motion.div>
          
          {/* Work Experience */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <GlassCard className="text-white flex flex-col md:flex-row items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-secondary-500 rounded-full">
                    <Briefcase size={24} />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <p className="text-secondary-200 mb-2 flex items-center gap-2">
                      <CalendarClock size={16} />
                      <span>{exp.period}</span>
                    </p>
                    <h5 className="font-medium">{exp.company} — {exp.location}</h5>
                    
                    <ul className="mt-3 space-y-2 list-disc list-inside text-white text-opacity-80">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;