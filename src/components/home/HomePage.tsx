import React, { useEffect } from 'react';
import HeroCarousel from './HeroCarousel';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import FactsSection from './FactsSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import PricingSection from './PricingSection';
import ContactSection from './ContactSection';

const HomePage: React.FC = () => {
  // Efeito para rolar a página para o topo quando o componente é montado
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="home">
        <HeroCarousel />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <FactsSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      {/* <div id="quote">
        <QuoteSection />
      </div> */}
      <div id="pricing">
        <PricingSection />
      </div>
      {/* <div id="team">
        <TeamSection />
      </div> */}
      {/* <div id="testimonial">
        <TestimonialSection />
      </div> */}
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;