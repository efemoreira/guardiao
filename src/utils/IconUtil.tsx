import React from 'react';
import * as FaIcons from 'react-icons/fa';

// Este é um componente wrapper para resolver problemas de tipagem com react-icons
export const Icon: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => {
  const IconComponent = FaIcons[icon as keyof typeof FaIcons];
  return IconComponent ? React.createElement(IconComponent as any, { className }) : null;
};
