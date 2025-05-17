import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'glass' | 'outline';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'flex items-center justify-center gap-2 rounded-full py-2 px-6 font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
    glass: 'glass-button',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50'
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : Icon && iconPosition === 'left' ? (
        <Icon size={18} />
      ) : null}
      
      {children}
      
      {Icon && iconPosition === 'right' && !isLoading ? (
        <Icon size={18} />
      ) : null}
    </motion.button>
  );
};

export default Button;