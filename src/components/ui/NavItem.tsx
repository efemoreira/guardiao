import React from 'react';

interface NavItemProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
  href: string;
  isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, isActive, onClick, href, isMobile = false }) => {
  return (
    <a 
      key={id}
      href={href}
      onClick={onClick}
      className={`nav-link block transition-colors duration-300 relative ${
        isMobile 
          ? `uppercase py-3 px-2 border-b border-gray-100 last:border-b-0 text-lg ${isActive ? 'text-primary font-light' : 'text-gray-700'}` 
          : `uppercase py-2 px-3 font-light lg:mr-2 text-lg ${isActive ? 'text-primary active' : 'text-gray-800 hover:text-primary'}`
      }`}
    >
      {label}
    </a>
  );
};

export default NavItem;