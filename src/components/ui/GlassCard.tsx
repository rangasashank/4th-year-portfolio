import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement>, MotionProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  className = '', 
  children, 
  hoverEffect = true,
  ...props 
}) => {
  return (
    <motion.div
      className={`glass-card ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1' : ''} ${className}`}
      whileHover={hoverEffect ? { scale: 1.02 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;