import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '../../utils/IconUtil';
import { trackWhatsAppClick } from '../../lib/analytics';
import { generateWhatsAppLink } from '../../lib/utils/utils';

interface Passo {
  icon: string;
  title: string;
  description: string;
}

const passos: Passo[] = [
  {
    icon: 'FaWhatsapp',
    title: 'Você chama no WhatsApp',
    description: 'Manda uma mensagem pra gente — rápido e sem compromisso.',
  },
  {
    icon: 'FaCalendarCheck',
    title: 'Agendamos a inspeção grátis',
    description: 'Marcamos um horário e um técnico vai até o seu prédio ou empresa.',
  },
  {
    icon: 'FaClipboardList',
    title: 'Você recebe o laudo',
    description: 'Relatório do que está vencido ou irregular para a vistoria do Corpo de Bombeiros.',
  },
];

const ComoFuncionaSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-400 uppercase font-bold mb-2">Simples e sem compromisso</h6>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Como funciona</h2>
          <p className="text-gray-600">Em 3 passos você descobre o que precisa regularizar antes da vistoria.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passos.map((passo, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon icon={passo.icon} className="text-white text-2xl" />
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-secondary text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{passo.title}</h3>
              <p className="text-sm text-gray-600">{passo.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={generateWhatsAppLink('(85) 98671-8305', 'Oi! Quero agendar a inspeção gratuita dos meus extintores.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('landing_como_funciona')}
            className="inline-flex items-center gap-2 bg-primary text-white py-3 px-8 font-bold hover:opacity-90 transition duration-300"
          >
            <Icon icon="FaWhatsapp" className="text-xl" />
            Agendar inspeção grátis
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
