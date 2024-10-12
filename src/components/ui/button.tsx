// src/components/ui/button.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const buttonVariants = {
  default: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-semibold',
        buttonVariants[variant],
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  )
}

export { Button }
