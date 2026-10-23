'use client';

import React from 'react';
import AnuncioLayout from './AnuncioLayout';
import LandingHero from './AnuncioHero';
import CredentialsStrip from './CredentialsStrip';
import TrustSection from './TrustSection';
import ComoFuncionaSection from './ComoFuncionaSection';
import PricingSection from '../home/PricingSection';
import WaterModuleSection from './WaterModuleSection';
import QuoteForm from '../commercial/QuoteForm';
import ServicePreview from '../commercial/ServicePreview';
import AvulsosSection from './AvulsosSection';
import FinalCtaSection from './FinalCtaSection';
import SectionView from '../shared/SectionView';

const AnuncioContent: React.FC = () => {
  return (
    <AnuncioLayout>
      <SectionView name="anuncio_hero">
        <LandingHero />
      </SectionView>
      <CredentialsStrip />
      <SectionView name="anuncio_quote" id="inspecao"><QuoteForm /></SectionView>
      <SectionView name="anuncio_como_funciona" id="how-it-works"><ComoFuncionaSection /></SectionView>
      <SectionView name="anuncio_preview"><ServicePreview /></SectionView>
      <SectionView name="anuncio_pricing" id="planos"><PricingSection /></SectionView>
      <SectionView name="anuncio_avulsos" id="servicos"><AvulsosSection /></SectionView>
      <SectionView name="anuncio_trust" id="quem-somos"><TrustSection /></SectionView>
      <details className="mx-auto max-w-6xl border-t border-slate-200 px-4 py-5">
        <summary className="cursor-pointer font-semibold text-secondary">Também precisa acompanhar o consumo de água do imóvel?</summary>
        <WaterModuleSection />
      </details>
      <SectionView name="anuncio_final_cta" id="contato">
        <FinalCtaSection />
      </SectionView>
    </AnuncioLayout>
  );
};

export default AnuncioContent;
