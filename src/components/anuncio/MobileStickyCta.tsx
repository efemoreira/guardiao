import React from 'react';
import Link from 'next/link';
import { Icon } from '../../utils/IconUtil';
import { trackWhatsAppClick, trackPhoneCallClick } from '../../lib/analytics';
import { generateWhatsAppLink } from '../../lib/utils/utils';

const WHATSAPP_NUMBER = '(85) 98671-8305';
const WHATSAPP_MESSAGE = 'Oi! Quero agendar a inspeção gratuita dos meus extintores.';
const CALL_HREF = 'tel:+5585986999181';

/**
 * Barra fixa no rodapé, só no mobile, com o CTA principal sempre visível.
 * Alvo de toque muito maior que o botão flutuante — reduz o atrito para clicar no WhatsApp.
 */
const MobileStickyCta: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-[80] bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.1)] flex gap-2 p-3">
      <Link
        href={generateWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('sticky_mobile')}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white py-3 font-bold rounded hover:bg-green-700 transition duration-300"
      >
        <Icon icon="FaWhatsapp" className="text-xl" />
        Falar no WhatsApp
      </Link>
      <a
        href={CALL_HREF}
        onClick={() => trackPhoneCallClick('sticky_mobile')}
        aria-label="Ligar agora"
        className="shrink-0 inline-flex items-center justify-center bg-secondary text-white px-5 rounded hover:opacity-90 transition duration-300"
      >
        <Icon icon="FaPhoneAlt" className="text-lg" />
      </a>
    </div>
  );
};

export default MobileStickyCta;
