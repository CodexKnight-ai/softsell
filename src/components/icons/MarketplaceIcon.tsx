import React from 'react';

interface IconProps {
  className?: string;
}

const MarketplaceIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
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
      <path d="M3 3h18v18H3z" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
      <path d="M6 6h.01" />
      <path d="M12 6h.01" />
      <path d="M18 6h.01" />
      <path d="M6 12h.01" />
      <path d="M12 12h.01" />
      <path d="M18 12h.01" />
      <path d="M6 18h.01" />
      <path d="M12 18h.01" />
      <path d="M18 18h.01" />
    </svg>
  );
};

export default MarketplaceIcon;
