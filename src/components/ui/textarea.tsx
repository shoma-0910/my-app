import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      className={cn(
        'border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary',
        className
      )}
      {...props}
    />
  );
};

export { Textarea };
