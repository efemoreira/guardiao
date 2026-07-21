import React, { useEffect } from 'react';
import HeroCarousel from './HeroCarousel';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import FactsSection from './FactsSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import SectionView from '../shared/SectionView';

const HomePage: React.FC = () => {
  // Efeito para rolar a página para o topo quando o componente é montado
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="home">
        <SectionView name="home_hero">
          <HeroCarousel />
        </SectionView>
      </div>
      <div id="about">
        <SectionView name="home_about">
          <AboutSection />
        </SectionView>
      </div>
      <SectionView name="home_facts">
        <FactsSection />
      </SectionView>
      <div id="services">
        <SectionView name="home_services">
          <ServicesSection />
        </SectionView>
      </div>
      <div id="features">
        <SectionView name="home_features">
          <FeaturesSection />
        </SectionView>
      </div>
      <div id="how-it-works">
        <SectionView name="home_how_it_works">
          <HowItWorksSection />
        </SectionView>
      </div>
      {/* <div id="quote">
        <QuoteSection />
      </div> */}
      <div id="pricing">
        <SectionView name="home_pricing">
          <PricingSection />
        </SectionView>
      </div>
      <div id="faq">
        <SectionView name="home_faq">
          <FAQSection />
        </SectionView>
      </div>
      {/* <div id="team">
        <TeamSection />
      </div> */}
      {/* <div id="testimonial">
        <TestimonialSection />
      </div> */}
      {/* <div id="contact">
        <ContactSection />
      </div> */}
    </>
  );
};

export default HomePage;
