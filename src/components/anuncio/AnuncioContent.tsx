'use client';

import React from 'react';
import AnuncioLayout from './AnuncioLayout';
import LandingHero from './AnuncioHero';
import CredentialsStrip from './CredentialsStrip';
import TrustSection from './TrustSection';
import ComoFuncionaSection from './ComoFuncionaSection';
import PricingSection from '../home/PricingSection';
import WaterModuleSection from './WaterModuleSection';
import AvulsosSection from './AvulsosSection';
import SocialProofSection from './SocialProofSection';
import FinalCtaSection from './FinalCtaSection';
import SectionView from '../shared/SectionView';

const AnuncioContent: React.FC = () => {
  return (
    <AnuncioLayout>
      <SectionView name="anuncio_hero">
        <LandingHero />
      </SectionView>
      <CredentialsStrip />
      <SectionView name="anuncio_trust" id="quem-somos">
        <TrustSection />
      </SectionView>
      <SectionView name="anuncio_como_funciona" id="how-it-works">
        <ComoFuncionaSection />
      </SectionView>
      <SectionView name="anuncio_avulsos" id="servicos">
        <AvulsosSection />
      </SectionView>
      <SectionView name="anuncio_pricing" id="planos">
        <PricingSection />
      </SectionView>
      <SectionView name="anuncio_water_module">
        <WaterModuleSection />
      </SectionView>
      <SectionView name="anuncio_social_proof">
        <SocialProofSection />
      </SectionView>
      <SectionView name="anuncio_final_cta" id="contato">
        <FinalCtaSection />
      </SectionView>
    </AnuncioLayout>
  );
};

export default AnuncioContent;
