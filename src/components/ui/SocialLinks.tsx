import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = '',
  iconSize = 24,
  showLabels = false
}) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/rangasashank',
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/ranga-sashank-gurram-2028701a6',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:grsashank2003@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <div className={`flex ${showLabels ? 'flex-col sm:flex-row' : ''} gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${link.color} transition-colors duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.name}
        >
          <link.icon size={iconSize} />
          {showLabels && <span className="font-medium">{link.name}</span>}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;