
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-primary-600 text-white hover:bg-primary-700",
    outline: "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
