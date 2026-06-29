import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../utils/IconUtil';
import { trustSectionStrings, TrustBadge } from '../../lib/defaultStrings/trustSectionStrings';

interface TrustSectionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  badges?: TrustBadge[];
}

const TrustSection: React.FC<TrustSectionProps> = ({
  subtitle = trustSectionStrings.subtitle,
  title = trustSectionStrings.title,
  description = trustSectionStrings.description,
  badges = trustSectionStrings.badges,
}) => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-400 uppercase font-bold mb-2">{subtitle}</h6>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 shadow-sm p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={badge.icon} className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
