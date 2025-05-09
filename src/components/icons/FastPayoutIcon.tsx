import React from 'react';

interface IconProps {
  className?: string;
}

const FastPayoutIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
      <path d="M8.5 8.5L6 6" />
      <path d="M15.5 8.5L18 6" />
      <path d="M16 16l2 2" />
      <path d="M8 16l-2 2" />
    </svg>
  );
};

export default FastPayoutIcon;
