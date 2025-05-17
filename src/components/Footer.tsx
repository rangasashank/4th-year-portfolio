import React from 'react';
import SocialLinks from './ui/SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="glass-card mt-10 py-8 rounded-b-none rounded-t-3xl">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-white">
              <span className="text-primary-300">G.</span>Ranga Sashank
            </p>
            <p className="text-white text-opacity-80 mt-2">
              Aspiring Software Developer | Full Stack | Problem Solver
            </p>
          </div>
          
          <SocialLinks className="order-first md:order-last" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;