import React from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
import { featuresSectionStrings } from '../../lib/defaultStrings/featuresSectionStrings';

interface Feature {
  id: number;
  icon: string | React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: Feature[];
  image?: string;
  imageAlt?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title = featuresSectionStrings.title,
  subtitle = featuresSectionStrings.subtitle,
  features = featuresSectionStrings.features,
  image = featuresSectionStrings.image,
  imageAlt = featuresSectionStrings.imageAlt,
}) => {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row-reverse -mx-4">
          {/* Coluna de Imagem */}
          <motion.div
            className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video md:aspect-square">
              <img
                src={image}
                alt={imageAlt}
                className="absolute w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Coluna de Features */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-xl mx-auto lg:ml-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h6 className="text-cyan-400 uppercase font-bold mb-3">
                  {subtitle}
                </h6>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-5">
                  {title}
                </h1>
              </motion.div>

              <div className="space-y-6">
                {features.map((feature) => (
                  <motion.div
                    key={feature.id}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: feature.delay || 0.2 * feature.id }}
                  >
                    <div className="flex-shrink-0 mr-4">
                      {typeof feature.icon === 'string' ? (
                        <Icon icon={feature.icon} className="text-primary text-2xl md:text-3xl" />
                      ) : (
                        feature.icon
                      )}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold mb-2">{feature.title}</h5>
                      <p className="text-gray-700 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;