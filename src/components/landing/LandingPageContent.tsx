'use client';

import React from 'react';
import LandingPageLayout from './LandingPageLayout';
import LandingHero from './LandingHero';
import TrustSection from './TrustSection';
import PricingSection from '../home/PricingSection';
import WaterModuleSection from './WaterModuleSection';
import AvulsosSection from './AvulsosSection';
import SocialProofSection from './SocialProofSection';
import FinalCtaSection from './FinalCtaSection';

const LandingPageContent: React.FC = () => {
  return (
    <LandingPageLayout>
      <LandingHero />
      <TrustSection />
      <PricingSection />
      <WaterModuleSection />
      <AvulsosSection />
      <SocialProofSection />
      <FinalCtaSection />
    </LandingPageLayout>
  );
};

export default LandingPageContent;
