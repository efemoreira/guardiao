'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Icon } from '../../utils/IconUtil';
import Footer from '../layout/Footer';
import WhatsAppFloatingButton from '../shared/WhatsAppFloatingButton';
import MobileStickyCta from './MobileStickyCta';
import { trackWhatsAppClick } from '../../lib/analytics';
import { generateWhatsAppLink } from '../../lib/utils/utils';

interface AnuncioLayoutProps {
  children: ReactNode;
}

const phoneNumber = '(85) 98671-8305';
const message = 'Oi! Vi o anúncio da Guardião Extintores e quero falar com vocês.';

const AnuncioLayout: React.FC<AnuncioLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="bg-secondary py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-white font-bold text-xl">
            Guardião <span className="text-primary">Extintores</span>
          </span>
          <Link
            href={generateWhatsAppLink(phoneNumber, message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('anuncio_header')}
            className="inline-flex items-center gap-2 bg-primary text-white py-2 px-4 font-bold hover:opacity-90 transition duration-300"
          >
            <Icon icon="FaWhatsapp" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
      {/* Espaço no mobile para a barra sticky não cobrir o final do conteúdo */}
      <div className="h-20 md:hidden" aria-hidden="true" />
      <WhatsAppFloatingButton desktopOnly />
      <MobileStickyCta />
    </>
  );
};

export default AnuncioLayout;
