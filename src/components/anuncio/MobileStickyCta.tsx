import React from 'react';
import Link from 'next/link';
import { Icon } from '../../utils/IconUtil';
import { trackWhatsAppClick } from '../../lib/analytics';
import { generateWhatsAppLink } from '../../lib/utils/utils';

const WHATSAPP_NUMBER = '(85) 8804-0691';
const WHATSAPP_MESSAGE = 'Oi! Quero agendar a inspeção gratuita dos meus extintores.';

/**
 * Barra fixa no rodapé, só no mobile, com o CTA principal sempre visível.
 * Alvo de toque muito maior que o botão flutuante — reduz o atrito para clicar no WhatsApp.
 */
const MobileStickyCta: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-[80] bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.1)] flex p-3">
      <Link
        href={generateWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('sticky_mobile')}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-700 text-white py-3 font-bold rounded hover:bg-green-800 transition duration-300"
      >
        <Icon icon="FaWhatsapp" className="text-xl" />
        Falar no WhatsApp
      </Link>
    </div>
  );
};

export default MobileStickyCta;
