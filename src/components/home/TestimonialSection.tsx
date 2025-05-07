import React, { useState } from 'react';
import { Icon } from '../../utils/IconUtil';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonialSectionStrings } from '../../lib/defaultStrings/testimonialSectionStrings';

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
}

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  backgroundColor?: string;
  quoteIconColor?: string;
  activeIndicatorColor?: string;
  inactiveIndicatorColor?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title = testimonialSectionStrings.title,
  subtitle = testimonialSectionStrings.subtitle,
  testimonials = testimonialSectionStrings.testimonials,
  backgroundColor = testimonialSectionStrings.backgroundColor,
  quoteIconColor = testimonialSectionStrings.quoteIconColor,
  activeIndicatorColor = testimonialSectionStrings.activeIndicatorColor,
  inactiveIndicatorColor = testimonialSectionStrings.inactiveIndicatorColor
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-cyan-400 uppercase font-medium mb-2">{subtitle}</h6>
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Carousel Content */}
            <div className="overflow-hidden">
              <div className="flex flex-wrap -mx-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className={`w-full px-4 ${
                      activeIndex === index ? 'block' : 'hidden'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0,
                      y: activeIndex === index ? 0 : 20 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`${backgroundColor} p-8 text-center shadow-md`}>
                      <div className="mx-auto w-24 h-24 mb-5 overflow-hidden rounded-full relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 96px, 96px"
                        />
                      </div>
                      <p className="text-lg italic mb-6 relative">
                        <Icon icon="FaQuoteLeft" className={`absolute -top-2 -left-1 ${quoteIconColor} text-4xl`} />
                        <span className="relative z-10">{testimonial.quote}</span>
                      </p>
                      <h5 className="font-bold text-xl mb-1">{testimonial.name}</h5>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full transition-all ${
                    activeIndex === index 
                      ? `${activeIndicatorColor} w-6` 
                      : inactiveIndicatorColor
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;