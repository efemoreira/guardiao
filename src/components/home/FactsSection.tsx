import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion } from 'framer-motion';
import { factsSectionStrings } from '../../lib/defaultStrings/factsSectionStrings';

interface CounterProps {
  end: number;
  duration?: number;
}

// Componente de contador para números animados
const Counter: React.FC<CounterProps> = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [isVisible]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    
    return () => {
      clearInterval(timer);
    };
  }, [end, duration, isVisible]);
  
  return <span ref={countRef}>{count}</span>;
};

export interface Fact {
  icon: string;
  count: number;
  text: string;
  backgroundColor: string;
}

interface FactsSectionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  phoneTitle?: string;
  phoneNumber?: string;
  phoneIcon?: string;
  facts?: Fact[];
  backgroundColor?: string;
}

const FactsSection: React.FC<FactsSectionProps> = ({
  subtitle = factsSectionStrings.subtitle,
  title = factsSectionStrings.title,
  description = factsSectionStrings.description,
  phoneTitle = factsSectionStrings.phoneTitle,
  phoneNumber = factsSectionStrings.phoneNumber,
  phoneIcon = factsSectionStrings.phoneIcon,
  facts = factsSectionStrings.facts,
  backgroundColor = factsSectionStrings.backgroundColor
}) => {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4 md:w-4/6">
        <div className="flex flex-wrap -mx-4">
          {/* Coluna de Texto */}
          <motion.div 
            className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h6 className="text-cyan-400 uppercase font-bold text-lg mb-3">{subtitle}</h6>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-5">
              {title}
            </h1>
            <p className="text-gray-700 mb-5">
              {description}
            </p>
            
            <div className="flex items-center">
              <div className="bg-primary p-3 text-white mr-4">
                <Icon icon={phoneIcon} className="text-2xl" />
              </div>
              <div>
                <h6 className="text-base">{phoneTitle}</h6>
                <h3 className="text-primary font-bold text-2xl">{phoneNumber}</h3>
              </div>
            </div>
          </motion.div>
          
          {/* Coluna de Estatísticas */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact, index) => (
                <motion.div 
                  key={index}
                  className={`${fact.backgroundColor} p-5 ${index === facts.length - 1 && facts.length % 2 !== 0 ? 'col-span-2 sm:col-span-2 mx-auto w-full sm:w-1/2' : ''}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Icon icon={fact.icon} className="text-4xl text-white mb-3" />
                  <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                    <Counter end={fact.count} />
                  </h2>
                  <p className="text-white text-lg">{fact.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;