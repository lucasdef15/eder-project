import React from 'react';

// Basic Card component using Tailwind CSS
export const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-b border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-sm text-gray-500 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div
    className={`flex items-center p-4 border-t border-gray-200 ${className}`}
    {...props}
  >
    {children}
  </div>
);
