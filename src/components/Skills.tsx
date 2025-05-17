import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { skillCategories } from '../data/skills';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Skills: React.FC = () => {
  const [ref, controls] = useAnimateOnScroll();
  
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-200 mb-2">Skills</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I've worked with and mastered over time.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <GlassCard className="h-full text-white">
                <h3 className="text-xl font-bold mb-6 text-center">{category.name}</h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs">{getLevelLabel(skill.level)}</span>
                      </div>
                      
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ 
                            backgroundColor: skill.color || '#6366f1',
                            width: `${skill.level * 20}%`
                          }}
                          initial={{ width: 0 }}
                          animate={controls}
                          transition={{ duration: 0.8, delay: 0.2 * index }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getLevelLabel = (level: number): string => {
  switch (level) {
    case 1: return "Beginner";
    case 2: return "Elementary";
    case 3: return "Intermediate";
    case 4: return "Advanced";
    case 5: return "Expert";
    default: return "N/A";
  }
};

export default Skills;