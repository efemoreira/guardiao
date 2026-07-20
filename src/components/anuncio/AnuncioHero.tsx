import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { landingHeroStrings } from '../../lib/defaultStrings/landingHeroStrings';
import { trackWhatsAppClick } from '../../lib/analytics';

interface LandingHeroProps {
  title?: string;
  highlightWord?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  phoneNumber?: string;
  message?: string;
}

const renderTitle = (title: string, highlightWord?: string) => {
  if (!highlightWord) return title;
  const parts = title.split(highlightWord);
  if (parts.length <= 1) return title;
  return parts.map((part, i, arr) => (
    <React.Fragment key={i}>
      {part}
      {i < arr.length - 1 && <span className="text-primary">{highlightWord}</span>}
    </React.Fragment>
  ));
};

const LandingHero: React.FC<LandingHeroProps> = ({
  title = landingHeroStrings.title,
  highlightWord = landingHeroStrings.highlightWord,
  subtitle = landingHeroStrings.subtitle,
  description = landingHeroStrings.description,
  buttonText = landingHeroStrings.buttonText,
  phoneNumber = landingHeroStrings.phoneNumber,
  message = landingHeroStrings.message,
}) => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h6
          className="text-cyan-400 uppercase font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {subtitle}
        </motion.h6>
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {renderTitle(title, highlightWord)}
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href={`/redirect-whatsapp?phone=${encodeURIComponent(phoneNumber)}&message=${encodeURIComponent(message)}`}
            onClick={() => trackWhatsAppClick('landing_hero')}
            className="inline-block bg-primary text-white py-3 px-8 font-bold hover:opacity-90 transition duration-300"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHero;
