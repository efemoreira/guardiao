import React, { useState } from 'react';
import { planos, precoExtintor, precoInspecao, precoRecarga, precoSinalizacaoWall } from '@/lib/utils/utils';
import SimuladorInputs from '@/components/features/simulador/SimuladorInputs';
import SimuladorCard from '@/components/features/simulador/SimuladorCard';

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

  return (
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
  );
}