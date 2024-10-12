// src/components/ui/input.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={cn(
        'border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary',
        className
      )}
      {...props}
    />
  );
};

export { Input };
