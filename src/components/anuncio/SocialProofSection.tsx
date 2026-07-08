import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../utils/IconUtil';
import { socialProofSectionStrings, SocialProofSegment } from '../../lib/defaultStrings/socialProofSectionStrings';

interface SocialProofSectionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  segments?: SocialProofSegment[];
}

const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  subtitle = socialProofSectionStrings.subtitle,
  title = socialProofSectionStrings.title,
  description = socialProofSectionStrings.description,
  segments = socialProofSectionStrings.segments,
}) => {
  return (
    <section className="py-12 md:py-16 bg-white">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <Icon icon={segment.icon} className="text-secondary text-xl" />
              </div>
              <p className="font-bold text-gray-900 text-sm">{segment.label}</p>
              {segment.detail && <p className="text-xs text-gray-500 mt-1">{segment.detail}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
