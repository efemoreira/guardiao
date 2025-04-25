import React from 'react';
import { precoExtintor, precoInspecao, precoRecarga, precoSinalizacaoWall } from '../utils';

interface SimuladorCardProps {
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
}

export default function SimuladorCard({ 
  plano, 
  extintores, 
  recargas, 
  inspecao, 
  custoSemPlano 
}: SimuladorCardProps) {
  
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

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-4">{plano.nome}</h2>
      {/* Economia */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Detalhamento de Custos</h3>

        {/* Custos com o plano */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Com o plano {plano.nome}:</h4>
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
          <h4 className="text-sm font-semibold mb-2">Sem plano:</h4>
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
            💰 Economia total: R${economia.toFixed(2)} ({((economia / custoSemPlano) * 100).toFixed(1)}%)
          </p>
        </div>
      </div>
    </div>
  );
}