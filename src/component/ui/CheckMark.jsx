import React from 'react';

const CheckIcon = ({ 
  size = 38, 
  color = "#10B981", 
  strokeWidth = 3,
  className = "" 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 48 48" 
    fill="none"
    className={className}
  >
    <circle 
      cx="24" 
      cy="24" 
      r="20" 
      stroke={color} 
      strokeWidth={strokeWidth} 
    />
    <path 
      d="M16 24l6 6 12-14" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckIcon;