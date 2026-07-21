import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../utils/IconUtil';
import { faqSectionStrings, FaqItem } from '../../lib/defaultStrings/faqSectionStrings';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = faqSectionStrings.title,
  subtitle = faqSectionStrings.subtitle,
  items = faqSectionStrings.items,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 w-full bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-400 uppercase font-bold mb-2">{subtitle}</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 md:px-6 md:py-5"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <Icon
                    icon={isOpen ? 'FaMinus' : 'FaPlus'}
                    className="text-primary flex-shrink-0"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-700 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
