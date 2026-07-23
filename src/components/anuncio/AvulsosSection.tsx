import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { avulsosSectionStrings, AvulsoServiceItem } from '../../lib/defaultStrings/avulsosSectionStrings';
import { trackWhatsAppClick } from '../../lib/analytics';
import { generateWhatsAppLink } from '../../lib/utils/utils';
import { Icon } from '../../utils/IconUtil';

interface AvulsosSectionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  items?: AvulsoServiceItem[];
  note?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaMessage?: string;
}

const AvulsosSection: React.FC<AvulsosSectionProps> = ({
  subtitle = avulsosSectionStrings.subtitle,
  title = avulsosSectionStrings.title,
  description = avulsosSectionStrings.description,
  items = avulsosSectionStrings.items,
  note = avulsosSectionStrings.note,
  ctaText = avulsosSectionStrings.ctaText,
  ctaLink = avulsosSectionStrings.ctaLink,
  ctaMessage = avulsosSectionStrings.ctaMessage,
}) => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-400 uppercase font-bold mb-2">{subtitle}</h6>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </motion.div>

        <motion.div
          id="inspecao"
          className="scroll-mt-20 mb-8 bg-green-50 border border-green-200 rounded-lg p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="shrink-0 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
            <Icon icon="FaClipboardCheck" className="text-white text-2xl" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-green-700 text-lg">Inspeção técnica + laudo: <span className="uppercase">Grátis</span></p>
            <p className="text-sm text-gray-600">Sem compromisso — verificamos seus extintores e apontamos o que está vencido ou irregular para a vistoria do Bombeiro.</p>
          </div>
          <Link
            href={generateWhatsAppLink('(85) 98671-8305', 'Oi! Quero agendar a inspeção gratuita dos meus extintores.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('landing_avulsos_inspecao')}
            className="shrink-0 inline-flex items-center gap-2 bg-green-600 text-white py-2.5 px-5 font-bold rounded hover:bg-green-700 transition duration-300"
          >
            <Icon icon="FaWhatsapp" className="text-lg" />
            Agendar grátis
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Mobile: lista de cards empilhados */}
          <ul className="md:hidden flex flex-col gap-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-white border border-gray-200 px-4 py-3 flex justify-between items-center"
              >
                <span className="text-gray-700 text-sm pr-4">{item.name}</span>
                <span className={`font-bold text-sm whitespace-nowrap ${item.price === 'Grátis' ? 'text-green-600' : 'text-gray-900'}`}>
                  {item.price}
                </span>
              </li>
            ))}
          </ul>

          {/* Desktop md+: tabela */}
          <div className="hidden md:block overflow-x-auto bg-white shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-3 px-4 font-bold">Serviço</th>
                  <th className="py-3 px-4 font-bold text-right">Preço</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="even:bg-gray-50 odd:bg-white border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">{item.name}</td>
                    <td className={`py-3 px-4 text-right font-bold ${item.price === 'Grátis' ? 'text-green-600' : 'text-gray-900'}`}>
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="text-sm text-gray-500 mt-4">{note}</p>

        <div className="text-center mt-8">
          <Link
            href={generateWhatsAppLink(ctaLink, ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('landing_avulsos_cta')}
            className="inline-block bg-primary text-white py-3 px-6 font-bold hover:opacity-90 transition duration-300"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AvulsosSection;
