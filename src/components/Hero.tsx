import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from './ui/Button';
import GlassCard from './ui/GlassCard';
import SocialLinks from './ui/SocialLinks';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ranga Sashank
              <span className="block text-2xl md:text-3xl mt-2 text-primary-200">
                CS@UVic | Aspiring Software Developer | Full Stack | Problem Solver
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white text-opacity-90 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              "Clean code, clever solutions, and a bit of fun—that's my style."
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                variant="glass"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="glass"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-8 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="w-full max-w-md overflow-hidden">
              <div className="relative pb-[125%] overflow-hidden rounded-lg mb-5">
                <img 
                  src="https://i.postimg.cc/pTfC4fQm/profile-pic.jpg"
                  alt="Ranga Sashank Gurram" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold">Ranga Sashank Gurram</h2>
                <p className="text-primary-200"> 4th Year CS @UVic</p>
                
                <div className="mt-4 flex justify-center">
                  <SocialLinks className="lg:hidden" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;