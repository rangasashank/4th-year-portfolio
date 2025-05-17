import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import SocialLinks from './ui/SocialLinks';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1QqMfk00VotM3CIY41H6eDkAviaZC0AZ7/view', '_blank')
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <div className="container mx-auto container-padding flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="font-display text-xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-primary-300">G.</span>Ranga Sashank
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href={link.href} 
                  className="text-white hover:text-primary-300 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <Button 
            variant="glass" 
            icon={Download}
            iconPosition="right"
            onClick={() => handleClick()}
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 top-16 glass-card rounded-t-3xl md:hidden z-40 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <nav className="flex flex-col items-center py-8">
                <ul className="flex flex-col items-center gap-6 mb-8">
                  {navLinks.map((link) => (
                    <motion.li 
                      key={link.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a 
                        href={link.href} 
                        className="text-xl font-medium text-white hover:text-primary-300 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <Button 
                  variant="glass" 
                  icon={Download}
                  iconPosition="right"
                  className="mb-6"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleClick();
                  }}
                >
                  Resume
                </Button>
                <SocialLinks showLabels />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;