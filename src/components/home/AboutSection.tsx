import React from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { aboutSectionStrings } from '../../lib/defaultStrings/aboutSectionStrings';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: Feature[];
  buttonText?: string;
  buttonLink?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = aboutSectionStrings.title,
  subtitle = aboutSectionStrings.subtitle,
  description = aboutSectionStrings.description,
  imageSrc = aboutSectionStrings.imageSrc,
  imageAlt = aboutSectionStrings.imageAlt,
  features = aboutSectionStrings.features,
  buttonText = aboutSectionStrings.buttonText,
  buttonLink = aboutSectionStrings.buttonLink
}) => {
  return (
    <section className="py-12 md:py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Imagem */}
          <motion.div 
            className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-video md:aspect-square">
              <Image 
                src={imageSrc} 
                alt={imageAlt} 
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </motion.div>

          {/* Conteúdo de texto */}
          <motion.div 
            className="w-full lg:w-1/2 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-xl">
              <h6 className="text-cyan-400 uppercase font-bold mb-3">{subtitle}</h6>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-gray-900">{title}</h1>
              <p className="text-gray-700 mb-8">{description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.2) }}
                  >
                    <Icon icon={feature.icon} className="text-4xl text-primary mb-3" />
                    <h5 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h5>
                    <p className="text-gray-700 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <Link 
                href={buttonLink} 
                className="btn-primary py-3 px-6 inline-block bg-primary text-white rounded-md shadow-md hover:opacity-90 hover:text-white transition-colors"
              >
                {buttonText}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;