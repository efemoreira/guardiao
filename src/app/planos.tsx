import { useState } from "react";
import { planos } from "./utils";

export default function Planos() {

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {planos.map((plano) => {
          return (
            <div key={plano.nome} className="border rounded-lg p-4 shadow-sm flex flex-col justify-between h-full">
              <div className="h-full flex flex-col">
                <h2 className="text-xl font-bold mb-4">{plano.nome}</h2>

                {/* Detalhes da Assinatura */}
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Detalhes da Assinatura</h3>
                  <p className="text-sm mb-1">💳 Mensalidade: R${(plano.preco / 12).toFixed(2)}/mês</p>
                  <p className="text-sm mb-1">📅 Valor Anual: R${plano.preco}/ano</p>
                  <p className="text-sm">🎁 Desconto nos serviços: {plano.descontoServico * 100}%</p>
                  <p className="text-sm">🛒 Desconto nos produtos: {plano.descontoProduto * 100}%</p>
                </div>

                {/* Benefícios Inclusos */}
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Benefícios Inclusos</h3>
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
                  >
                  Assinar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
