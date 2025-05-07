import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { heroCarouselStrings } from '../../lib/defaultStrings/heroCarouselStrings';

export interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonLink: string;
  highlightWord?: string; // Palavra a ser destacada no título
}

interface HeroCarouselProps {
  items?: CarouselItem[];
  autoPlayInterval?: number;
  height?: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  items = heroCarouselStrings.items,
  autoPlayInterval = heroCarouselStrings.autoPlayInterval,
  height = heroCarouselStrings.height,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Função para passar para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };
  
  // Função para voltar ao slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };
  
  // Alternar slides automaticamente a cada X segundos (definido em autoPlayInterval)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlayInterval, nextSlide]);

  // Função para destacar determinada palavra no título
  const renderTitle = (title: string, highlightWord?: string) => {
    if (!highlightWord) return title;
    
    const parts = title.split(highlightWord);
    if (parts.length <= 1) return title; // Se não encontrar a palavra, retorna o título original
    
    return parts.map((part, i, arr) => (
      <React.Fragment key={i}>
        {part}
        {i < arr.length - 1 && <span className="text-primary">{highlightWord}</span>}
      </React.Fragment>
    ));
  };
  
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${items[currentIndex].image})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800/70 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-[768px]">
                  <motion.h6 
                    className="text-white text-base md:text-lg uppercase mb-3 font-medium"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {items[currentIndex].subtitle}
                  </motion.h6>
                  
                  <motion.h1 
                    className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {renderTitle(items[currentIndex].title, items[currentIndex].highlightWord)}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-white mb-8 text-lg md:text-xl lg:text-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {items[currentIndex].description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Link 
                      href={items[currentIndex].primaryButtonLink} 
                      className="bg-primary text-white py-2 px-4 md:py-3 md:px-5 mr-3 inline-block hover:opacity-90 transition duration-300"
                    >
                      {items[currentIndex].primaryButtonText}
                    </Link>
                    
                    <Link 
                      href={items[currentIndex].secondaryButtonLink} 
                      className="bg-secondary text-white py-2 px-4 md:py-3 md:px-5 inline-block hover:opacity-90 transition duration-300"
                    >
                      {items[currentIndex].secondaryButtonText}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;