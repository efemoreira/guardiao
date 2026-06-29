'use client';

import React, { ReactNode } from 'react';
import { Icon } from '../../utils/IconUtil';
import Footer from '../layout/Footer';
import WhatsAppFloatingButton from '../shared/WhatsAppFloatingButton';
import { generateWhatsAppLink } from '../../lib/utils/utils';

interface LandingPageLayoutProps {
  children: ReactNode;
}

const phoneNumber = '(85) 98892-8272';

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="bg-secondary py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-white font-bold text-xl">
            Guardião <span className="text-primary">Extintores</span>
          </span>
          <a
            href={generateWhatsAppLink(phoneNumber, 'Olá! Vim pela página de anúncio e gostaria de falar com vocês.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white py-2 px-4 font-bold hover:opacity-90 transition duration-300"
          >
            <Icon icon="FaWhatsapp" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
};

export default LandingPageLayout;
