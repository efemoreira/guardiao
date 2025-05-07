import React from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
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
      className="bg-white shadow-md py-4 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="overflow-hidden mb-4">
        <img 
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" 
          src={image} 
          alt={title} 
        />
      </div>
      <h4 className="text-2xl font-bold mb-3">{title}</h4>
      <p className="text-gray-700 mb-3">{description}</p>
      <a 
        href={link} 
        className="group inline-flex items-center text-gray-800 hover:text-primary transition-colors"
      >
        <span className="mr-2">{buttonText || "Saiba mais"}</span>
        <Icon icon="FaArrowRight" className="transform transition-transform group-hover:translate-x-1" />
      </a>
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
    <section className="py-16 min-h-screen w-4/6 mx-auto">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-400 uppercase font-bold mb-2">{subtitle}</h6>
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} buttonText={buttonText} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;