import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../utils/IconUtil';
import { howItWorksStrings } from '../../lib/defaultStrings/howItWorksStrings';

export interface Step {
  id: number;
  icon?: string | React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  steps?: Step[];
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  title = howItWorksStrings.title,
  subtitle = howItWorksStrings.subtitle,
  description = howItWorksStrings.description,
  steps = howItWorksStrings.steps,
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-500 uppercase font-bold mb-3">
            {subtitle}
          </h6>
          <h2 className="text-3xl md:text-4xl font-black mb-5 text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl mx-auto text-gray-600">
              {description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay || 0.2 * step.id }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 h-full relative z-10 border border-gray-200">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xl font-bold">
                  {step.id}
                </div>
                <div className="mb-4 text-cyan-500 text-3xl">
                  {typeof step.icon === 'string' ? (
                    <Icon icon={step.icon} className="text-primary" />
                  ) : (
                    step.icon
                  )}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {step.id !== steps.length && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-cyan-500 fill-current" viewBox="0 0 16 16">
                      <polygon points="8 0 16 8 8 16 0 8" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;