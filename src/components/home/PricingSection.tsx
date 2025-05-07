import React from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
import { pricingSectionStrings } from '../../lib/defaultStrings/pricingSectionStrings';

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  currency?: string;
  period?: string;
  features: string[];
  delay?: number;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
  popular?: boolean;
  textPopular?: string;
}

export interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  plans?: PricingPlan[];
  backgroundColor?: string;
}

const PriceCard: React.FC<PricingPlan> = ({ 
  name, 
  price, 
  currency = 'R$', 
  period = 'mês', 
  features, 
  delay = 0.3,
  image,
  buttonText = 'Contratar Agora',
  buttonLink = '#',
  popular,
  textPopular = 'Mais popular',
}) => {
  return (
    <motion.div 
      className={`bg-white shadow-md flex flex-col ${popular ? 'border-2 border-primary' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {popular && (
        <div className="bg-primary text-white text-center py-1 text-sm font-bold">
          {textPopular}
        </div>
      )}
      <div className="border-b p-4 mb-4">
        {image && (
          <div className="mb-3 flex justify-center">
            <img src={image} alt={name} className="h-16 w-16 object-contain" />
          </div>
        )}
        <h5 className="text-primary font-bold mb-1">{name}</h5>
        <h1 className="text-5xl font-black flex items-baseline">
          <span className="text-lg align-top">{currency}</span>
          {price}
          <span className="text-sm text-gray-500 ml-1">/ {period}</span>
        </h1>
      </div>

      <div className="p-4 pt-0 flex-grow">
        {features.map((feature, index) => (
          <p key={index} className="mb-2 flex items-center">
            <Icon icon="FaCheck" className="text-success mr-3 text-sm text-green-700" /> {feature}
          </p>
        ))}
        <a
          href={buttonLink}
          className="mt-4 inline-flex items-center group relative text-gray-800 hover:text-primary transition-all duration-300"
        >
          <span className="mr-2">{buttonText}</span>
          <Icon icon="FaArrowRight" className="transform transition-transform group-hover:translate-x-1" />
          <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
    </motion.div>
  );
};

const PricingSection: React.FC<PricingSectionProps> = ({ 
  title = pricingSectionStrings.title,
  subtitle = pricingSectionStrings.subtitle,
  description = pricingSectionStrings.description,
  plans = pricingSectionStrings.plans,
  backgroundColor = pricingSectionStrings.backgroundColor
}) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-400 uppercase font-bold mb-2">{subtitle}</h6>
          <h2 className="text-4xl md:text-5xl font-black">{title}</h2>
          {description && <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{description}</p>}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map(plan => (
            <PriceCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;