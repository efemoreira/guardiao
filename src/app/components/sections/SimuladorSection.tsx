import React, { useState } from 'react';
import { planos, precoExtintor, precoInspecao, precoRecarga, precoSinalizacaoWall } from '../../utils';
import Script from 'next/script';

// Componente para os campos de entrada do simulador
function SimuladorInputs({
  extintores,
  setExtintores,
  recargas,
  setRecargas,
  inspecao,
  setInspecao
}: {
  extintores: number;
  setExtintores: (value: number) => void;
  recargas: number;
  setRecargas: (value: number) => void;
  inspecao: number;
  setInspecao: (value: number) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <label htmlFor="recargas-input" className="block">
        Extintores que possui?
        <input
          id="recargas-input"
          type="number"
          value={recargas}
          min={0}
          onChange={(e) => setRecargas(Number(e.target.value))}
          className="block border rounded p-1 w-full"
          aria-label="Número de extintores que você já possui"
        />
      </label>

      <label htmlFor="extintores-input" className="block">
        Extintores que pretende comprar?
        <input
          id="extintores-input"
          type="number"
          value={extintores}
          min={0}
          onChange={(e) => setExtintores(Number(e.target.value))}
          className="block border rounded p-1 w-full"
          aria-label="Número de extintores que você pretende comprar"
        />
      </label>

      <label htmlFor="inspecao-input" className="block">
        Edificios diferentes?
        <input
          id="inspecao-input"
          type="number"
          value={inspecao}
          min={1}
          onChange={(e) => setInspecao(Number(e.target.value))}
          className="block border rounded p-1 w-full"
          aria-label="Número de edifícios diferentes"
        />
      </label>
    </div>
  );
}

// Componente para exibir o detalhamento de custos por plano
function SimuladorCard({ 
  plano, 
  extintores, 
  recargas, 
  inspecao, 
  custoSemPlano 
}: {
  plano: {
    nome: string;
    preco: number;
    descontoServico: number;
    descontoProduto: number;
    inspecoes: number;
    recargas: number;
    placaNova: boolean;
    demarcacao?: boolean;
    placaAntiga?: boolean;
  };
  extintores: number;
  recargas: number;
  inspecao: number;
  custoSemPlano: number;
}) {
  
  // Cálculo de produtos (extintores novos)
  const precoTotalExtintores = extintores * precoExtintor;
  const custoExtintoresComDesconto = precoTotalExtintores * (1 - plano.descontoProduto);

  // Cálculo de recargas (considerando as gratuitas do plano)
  const recargasAPagar = Math.max(0, recargas - plano.recargas);
  const custoRecargasComDesconto = recargasAPagar * precoRecarga * (1 - plano.descontoServico);

  // Cálculo de inspeções (considerando as incluídas no plano)
  const inspecoesAPagar = Math.max(0, inspecao - plano.inspecoes);
  const custoInspecoesComDesconto = inspecoesAPagar * precoInspecao * (1 - plano.descontoServico);

  // Cálculo da sinalização (gratuita se o plano incluir placaNova)
  const custoSinalizacao = plano.placaNova ? 0 : extintores * precoSinalizacaoWall * (1 - plano.descontoServico);

  // Total com plano
  const totalComPlano = plano.preco + // Mensalidade do plano
    custoExtintoresComDesconto + // Extintores com desconto
    custoRecargasComDesconto + // Recargas extras com desconto
    custoInspecoesComDesconto + // Inspeções extras com desconto
    custoSinalizacao; // Sinalização (se não incluída)

  const economia = custoSemPlano - totalComPlano;
  const percentualEconomia = ((economia / custoSemPlano) * 100).toFixed(1);

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-xl font-bold mb-4">{plano.nome}</h3>
      {/* Economia */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Detalhamento de Custos</h4>

        {/* Custos com o plano */}
        <div className="mb-4">
          <h5 className="text-sm font-semibold mb-2">Com o plano {plano.nome}:</h5>
          <ul className="text-sm space-y-1">
            <li>📌 Assinatura anual: R${plano.preco.toFixed(2)}</li>
            {extintores > 0 && (
              <li>🧯 Extintores novos: R${custoExtintoresComDesconto.toFixed(2)}
                <span className="text-xs text-gray-500">
                  (Desconto de {plano.descontoProduto * 100}%)
                </span>
              </li>
            )}
            {recargasAPagar > 0 && (
              <li>🔄 Recargas extras: R${custoRecargasComDesconto.toFixed(2)}
                <span className="text-xs text-gray-500">
                  ({plano.recargas} gratuitas + {recargasAPagar} pagas com {plano.descontoServico * 100}% desconto)
                </span>
              </li>
            )}
            {inspecoesAPagar > 0 && (
              <li>👀 Inspeções extras: R${custoInspecoesComDesconto.toFixed(2)}
                <span className="text-xs text-gray-500">
                  ({plano.inspecoes} incluídas + {inspecoesAPagar} extras)
                </span>
              </li>
            )}
            <li className="font-medium border-t pt-1 mt-2">
              Total: R${totalComPlano.toFixed(2)}
            </li>
          </ul>
        </div>

        {/* Custos sem o plano */}
        <div className="mb-4">
          <h5 className="text-sm font-semibold mb-2">Sem plano:</h5>
          <ul className="text-sm space-y-1">
            {extintores > 0 && (
              <li>🧯 Extintores novos: R${(extintores * precoExtintor).toFixed(2)}</li>
            )}
            {recargas > 0 && (
              <li>🔄 Recargas: R${(recargas * precoRecarga).toFixed(2)}</li>
            )}
            {inspecao > 0 && (
              <li>👀 Inspeções: R${(inspecao * precoInspecao).toFixed(2)}</li>
            )}
            {extintores > 0 && (
              <li>🎯 Sinalização: R${(extintores * (precoSinalizacaoWall)).toFixed(2)}</li>
            )}
            <li className="font-medium border-t pt-1 mt-2">
              Total: R${custoSemPlano.toFixed(2)}
            </li>
          </ul>
        </div>

        {/* Economia Total */}
        <div className="bg-green-50 p-3 rounded mt-3">
          <p className="text-green-700 text-sm font-medium">
            💰 Economia total: R${economia.toFixed(2)} ({percentualEconomia}%)
          </p>
        </div>
      </div>
    </div>
  );
}

// Componente principal da seção de Simulador
export default function SimuladorSection() {
  const [extintores, setExtintores] = useState(0);
  const [recargas, setRecargas] = useState(0);
  const [inspecao, setInspecao] = useState(1);

  const calcularSemPlano = () => {
    const custoExtintores = extintores * precoExtintor;
    const custoRecargas = recargas * precoRecarga;
    const custoInspecoes = inspecao * precoInspecao;
    const custoSinalizacao = extintores * precoSinalizacaoWall;

    return custoExtintores + custoRecargas + custoInspecoes + custoSinalizacao;
  };

  const custoSemPlano = calcularSemPlano();

  // Schema para a calculadora/simulador para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Simulador de economia para serviços de proteção contra incêndio",
    "description": "Compare os custos dos nossos planos de proteção contra incêndio e veja quanto você pode economizar",
    "provider": {
      "@type": "Organization",
      "name": "Guardião Extintores"
    },
    "feesAndCommissionsSpecification": "Nossos planos oferecem descontos de até 20% em produtos e 15% em serviços",
    "interestRate": {
      "@type": "QuantitativeValue",
      "value": "0",
      "unitText": "PERCENT"
    }
  };

  return (
    <>
      <Script
        id="simulator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="simulador" aria-labelledby="simulador-heading" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="simulador-heading" className="text-3xl font-bold text-center mb-12">Simulador de Economia</h2>
          <div className="p-4 max-w-4xl mx-auto">
            <form className="mb-8" aria-label="Formulário de simulação de custos">
              <SimuladorInputs 
                extintores={extintores}
                setExtintores={setExtintores}
                recargas={recargas}
                setRecargas={setRecargas}
                inspecao={inspecao}
                setInspecao={setInspecao}
              />
            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list">
              {planos.map((plano) => (
                <div key={plano.nome} role="listitem">
                  <SimuladorCard 
                    plano={plano}
                    extintores={extintores}
                    recargas={recargas}
                    inspecao={inspecao}
                    custoSemPlano={custoSemPlano}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}