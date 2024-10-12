import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  return (
    <button
      className={classNames(
        'px-4 py-2 rounded-md font-semibold',
        variant === 'default' ? 'bg-primary text-white' : 'bg-secondary text-white',
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
};

export { Button };
