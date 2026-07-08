import { Metadata } from 'next';
import AnuncioContent from '@/components/anuncio/AnuncioContent';

export const metadata: Metadata = {
  title: 'Extintores em Dia, Sem Complicação | Guardião Extintores',
  description: 'Inspeção gratuita, recarga no prazo e gestão de vencimentos dos seus extintores em Fortaleza. Fale agora no WhatsApp.',
  alternates: { canonical: '/anuncio' },
};

export default function Anuncio() {
  return <AnuncioContent />;
}
