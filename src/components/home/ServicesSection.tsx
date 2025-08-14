import React from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesSectionStrings } from '../../lib/defaultStrings/servicesSectionStrings';

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
  buttonText?: string;
}

const ServiceCard: React.FC<Service & { buttonText?: string }> = ({ title, description, image, link, delay = 0, buttonText }) => {
  return (
    <motion.div 
      className="bg-white shadow-md py-4 px-4 md:px-6 flex flex-col h-full border border-gray-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="overflow-hidden mb-4 relative h-40 md:h-48">
        <Image 
          className="object-cover transition-transform duration-500 hover:scale-110" 
          src={image} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">{title}</h4>
          <p className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed">{description}</p>
        </div>
        <a 
          href={link} 
          className="group inline-flex items-center text-gray-800 hover:text-primary transition-colors mt-auto text-sm md:text-base"
        >
          <span className="mr-2">{buttonText || "Saiba mais"}</span>
          <Icon icon="FaArrowRight" className="transform transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = servicesSectionStrings.title,
  subtitle = servicesSectionStrings.subtitle,
  services = servicesSectionStrings.services,
  buttonText = servicesSectionStrings.buttonText
}) => {
  return (
    <section className="py-16 min-h-screen w-full lg:w-4/6 mx-auto bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-400 uppercase font-bold mb-2">{subtitle}</h6>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{title}</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} buttonText={buttonText} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;