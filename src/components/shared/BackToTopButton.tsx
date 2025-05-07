import React, { useState, useEffect } from 'react';
import { Icon } from '../../utils/IconUtil';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitorar o scroll e mostrar o botão quando o usuário rolar além de 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolar suavemente de volta ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 z-50 bg-primary text-white h-12 w-12 rounded-none flex items-center justify-center shadow-md hover:bg-opacity-90 transition-all duration-300"
        >
          <Icon icon="FaArrowUp" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;