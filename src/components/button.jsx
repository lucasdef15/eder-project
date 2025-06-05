import React from 'react';

// Basic Button component using Tailwind CSS
export const Button = React.forwardRef(
  (
    {
      className = '',
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Basic variants and sizes - can be expanded based on design system needs
    const variants = {
      default: 'bg-emerald-600 text-white hover:bg-emerald-700',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      outline:
        'border border-emerald-600 text-emerald-600 hover:bg-emerald-100',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      ghost: 'hover:bg-gray-100',
      link: 'text-emerald-600 underline-offset-4 hover:underline',
    };

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    };

    const Comp = asChild ? 'span' : 'button'; // Use span if asChild is true, otherwise button

    return (
      <Comp
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
