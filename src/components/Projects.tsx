import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { projects, Project } from '../data/projects';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Projects: React.FC = () => {
  const [ref, controls] = useAnimateOnScroll();
  
  // Filter projects based on showAll state
  const displayedProjects = projects
  
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10 rotate-180" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-200 mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here's a collection of my recent work that showcases my skills and passion for building innovative solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
              controls={controls}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  controls: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, controls }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <GlassCard className="h-full flex flex-col text-white overflow-hidden">
        <div className="relative h-48 overflow-hidden rounded-lg mb-4">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {project.featured && (
            <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        <p className="text-white text-opacity-80 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs px-3 py-1 bg-white bg-opacity-10 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass-button flex items-center gap-2"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass-button flex items-center gap-2"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default Projects;