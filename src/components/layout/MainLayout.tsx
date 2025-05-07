import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopButton from '../shared/BackToTopButton';

export interface NavItem {
  id: string;
  label: string;
  type: 'section' | 'page';
  path?: string;
}

interface MainLayoutProps {
  children: ReactNode;
  navItems?: NavItem[];
  navLogo?: {
    text: string;
    path: string;
  };
  navContactInfo?: {
    text: string;
    phone: string;
    icon: string;
  };
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  navItems,
  navLogo,
  navContactInfo
}) => {
  return (
    <>
      <Navbar 
        items={navItems} 
        logo={navLogo} 
        contactInfo={navContactInfo} 
      />
      <main>
        {children}
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default MainLayout;