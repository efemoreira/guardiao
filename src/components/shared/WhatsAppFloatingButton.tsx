import React from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
import { generateWhatsAppLink } from '../../lib/utils/utils';

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  phoneNumber = '(85) 98892-8272',
  message = 'Olá! Gostaria de saber mais sobre os serviços da Guardião Extintores.',
}) => {
  return (
    <motion.a
      href={generateWhatsAppLink(phoneNumber, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-6 z-50 bg-green-500 text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <Icon icon="FaWhatsapp" className="text-2xl" />
    </motion.a>
  );
};

export default WhatsAppFloatingButton;
