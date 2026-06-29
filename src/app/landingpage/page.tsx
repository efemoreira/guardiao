import { Metadata } from 'next';
import LandingPageContent from '@/components/landing/LandingPageContent';

export const metadata: Metadata = {
  title: 'Extintores em Dia, Sem Complicação | Guardião Extintores',
  description: 'Inspeção gratuita, recarga no prazo e gestão de vencimentos dos seus extintores em Fortaleza. Fale agora no WhatsApp.',
  alternates: { canonical: '/landingpage' },
};

export default function LandingPage() {
  return <LandingPageContent />;
}
