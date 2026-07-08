import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../utils/IconUtil';
import { finalCtaSectionStrings } from '../../lib/defaultStrings/finalCtaSectionStrings';
import { generateWhatsAppLink } from '../../lib/utils/utils';
import { trackWhatsAppClick } from '../../lib/analytics';

interface FinalCtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  phoneNumber?: string;
  message?: string;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  title = finalCtaSectionStrings.title,
  description = finalCtaSectionStrings.description,
  buttonText = finalCtaSectionStrings.buttonText,
  phoneNumber = finalCtaSectionStrings.phoneNumber,
  message = finalCtaSectionStrings.message,
}) => {
  return (
    <section className="py-12 md:py-16 bg-primary text-white text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mb-8 text-white/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {description}
        </motion.p>
        <motion.a
          href={generateWhatsAppLink(phoneNumber, message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('landing_final_cta')}
          className="inline-flex items-center gap-2 bg-white text-primary py-3 px-8 font-bold hover:opacity-90 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Icon icon="FaWhatsapp" className="text-xl" />
          {buttonText}
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
