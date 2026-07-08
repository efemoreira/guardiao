'use client';

import React from 'react';
import AnuncioLayout from './AnuncioLayout';
import LandingHero from './LandingHero';
import TrustSection from './TrustSection';
import PricingSection from '../home/PricingSection';
import WaterModuleSection from './WaterModuleSection';
import AvulsosSection from './AvulsosSection';
import SocialProofSection from './SocialProofSection';
import FinalCtaSection from './FinalCtaSection';

const AnuncioContent: React.FC = () => {
  return (
    <AnuncioLayout>
      <LandingHero />
      <TrustSection />
      <PricingSection />
      <WaterModuleSection />
      <AvulsosSection />
      <SocialProofSection />
      <FinalCtaSection />
    </AnuncioLayout>
  );
};

export default AnuncioContent;
