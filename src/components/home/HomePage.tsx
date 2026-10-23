import LandingHero from '../anuncio/AnuncioHero';
import CredentialsStrip from '../anuncio/CredentialsStrip';
import ComoFuncionaSection from '../anuncio/ComoFuncionaSection';
import TrustSection from '../anuncio/TrustSection';
import AvulsosSection from '../anuncio/AvulsosSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import QuoteForm from '../commercial/QuoteForm';
import ServicePreview from '../commercial/ServicePreview';
import SectionView from '../shared/SectionView';

export default function HomePage() {
  return <>
    <div id="home"><LandingHero /></div>
    <CredentialsStrip />
    <SectionView name="home_quote"><QuoteForm /></SectionView>
    <div id="how-it-works"><ComoFuncionaSection /></div>
    <div id="features"><ServicePreview /></div>
    <div id="pricing"><div id="planos"><PricingSection /></div></div>
    <div id="services"><AvulsosSection /></div>
    <div id="about"><TrustSection /></div>
    <div id="faq"><FAQSection /></div>
  </>;
}
