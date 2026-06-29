import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../utils/IconUtil';
import { waterModuleSectionStrings } from '../../lib/defaultStrings/waterModuleSectionStrings';
import { generateWhatsAppLink } from '../../lib/utils/utils';

interface WaterModuleSectionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  caseTitle?: string;
  caseText?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaMessage?: string;
}

const WaterModuleSection: React.FC<WaterModuleSectionProps> = ({
  subtitle = waterModuleSectionStrings.subtitle,
  title = waterModuleSectionStrings.title,
  description = waterModuleSectionStrings.description,
  caseTitle = waterModuleSectionStrings.caseTitle,
  caseText = waterModuleSectionStrings.caseText,
  ctaText = waterModuleSectionStrings.ctaText,
  ctaLink = waterModuleSectionStrings.ctaLink,
  ctaMessage = waterModuleSectionStrings.ctaMessage,
}) => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">
          <motion.div
            className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h6 className="text-cyan-400 uppercase font-bold mb-2">{subtitle}</h6>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <a
              href={generateWhatsAppLink(ctaLink, ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-white py-3 px-6 font-bold hover:opacity-90 transition duration-300"
            >
              {ctaText}
            </a>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 px-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6">
              <div className="flex items-center mb-3">
                <Icon icon="FaTint" className="text-cyan-500 text-2xl mr-3" />
                <h3 className="font-bold text-gray-900">{caseTitle}</h3>
              </div>
              <p className="text-gray-700">{caseText}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaterModuleSection;
