import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { IconType } from 'react-icons';

// Este é um componente wrapper para resolver problemas de tipagem com react-icons
export const Icon: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => {
  const IconComponent = FaIcons[icon as keyof typeof FaIcons] as IconType;
  return IconComponent ? <IconComponent className={className} /> : null;
};
