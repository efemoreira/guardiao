import type { Metadata } from 'next';
import AnuncioLayout from '@/components/anuncio/AnuncioLayout';
import QuoteForm from '@/components/commercial/QuoteForm';
export const metadata: Metadata = {
  title: 'Orçamento de extintores em Fortaleza | Guardião',
  description: 'Prepare seu pedido de compra, recarga, inspeção ou plano de extintores e converse com a equipe pelo WhatsApp.',
  alternates: { canonical: '/orcamento' },
};
export default function QuotePage() {
  return <AnuncioLayout><div className="bg-secondary px-4 py-9 text-center text-white"><h1 className="text-3xl font-bold">Seu pedido, com as informações certas</h1><p className="mt-3 text-slate-300">Escolha o serviço. A equipe confirma os próximos passos com você.</p></div><QuoteForm /></AnuncioLayout>;
}
