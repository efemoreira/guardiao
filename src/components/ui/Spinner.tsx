import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpinnerProps {
  duration?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ duration = 1000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[9999]"
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-primary animate-spin"></div>
            <span className="sr-only">Carregando...</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Spinner;