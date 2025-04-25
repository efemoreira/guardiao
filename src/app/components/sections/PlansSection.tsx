import React from 'react';
import { planos } from '../../utils';
import Script from 'next/script';

// Definindo a interface para as propriedades do componente PlanCard
interface PlanCardProps {
  plano: {
    nome: string;
    preco: number;
    descontoServico: number;
    descontoProduto: number;
    inspecoes: number;
    recargas: number;
    placaNova: boolean;
    demarcacao: boolean;
    placaAntiga: boolean;
  };
}

// Componente para exibir um plano individual
function PlanCard({ plano }: PlanCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col justify-between h-full">
      <div className="h-full flex flex-col">
        <h3 className="text-xl font-bold mb-4">{plano.nome}</h3>

        {/* Detalhes da Assinatura */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Detalhes da Assinatura</h4>
          <p className="text-sm mb-1">💳 Mensalidade: R${(plano.preco / 12).toFixed(2)}/mês</p>
          <p className="text-sm mb-1">📅 Valor Anual: R${plano.preco}/ano</p>
          <p className="text-sm">🎁 Desconto nos serviços: {plano.descontoServico * 100}%</p>
          <p className="text-sm">🛒 Desconto nos produtos: {plano.descontoProduto * 100}%</p>
        </div>

        {/* Benefícios Inclusos */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Benefícios Inclusos</h4>
          <ul className="text-sm space-y-1">
            <li>✅ {plano.inspecoes === Infinity ? "Inspeções ilimitadas" : `${plano.inspecoes} inspeção por ano`}</li>
            {plano.recargas > 0 && (
              <li>✅ {plano.recargas} {plano.recargas === 1 ? "recarga gratuita" : "recargas gratuitas"}</li>
            )}
            {plano.placaNova && <li>✅ Placa de sinalização (para novos extintores)</li>}
            {plano.demarcacao && <li>✅ Demarcação de chão</li>}
            {plano.placaAntiga && <li>✅ Manutenção de placas antigas</li>}
          </ul>
        </div>

        {/* Botão de Assinar */}
        <div className="mt-auto">
          <a
            href={`https://wa.me/5599999999999?text=Olá! Gostaria de assinar o plano ${plano.nome}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white text-center rounded-lg transition-colors duration-200 font-semibold"
            aria-label={`Assinar o plano ${plano.nome}`}
          >
            Assinar
          </a>
        </div>
      </div>
    </div>
  );
}

// Componente principal da seção Planos
export default function PlansSection() {
  // Schema para Offers para melhorar o SEO
  const offers = planos.map((plano, index) => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": `Plano ${plano.nome}`,
      "description": `Plano de proteção contra incêndio com ${plano.inspecoes === Infinity ? 'inspeções ilimitadas' : plano.inspecoes + ' inspeções'} e ${plano.recargas} recargas gratuitas.`
    },
    "price": plano.preco,
    "priceCurrency": "BRL",
    "eligibleRegion": {
      "@type": "Country",
      "name": "BR"
    },
    "seller": {
      "@type": "Organization",
      "name": "Guardião Extintores"
    }
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": offers.map((offer, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": offer
    }))
  };

  return (
    <>
      <Script
        id="plans-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="planos" aria-labelledby="planos-heading" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="planos-heading" className="text-3xl font-bold text-center mb-12">Nossos Planos</h2>
          <div className="p-4 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list">
              {planos.map((plano) => (
                <div key={plano.nome} role="listitem">
                  <PlanCard plano={plano} />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="#simulador" 
              className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
              aria-label="Simular custos com nossa calculadora personalizada"
            >
              Simule Agora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}