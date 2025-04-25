import React from 'react';
import { planos } from '@/lib/utils/utils';
import PlanCard from '@/components/features/plans/PlanCard';

export default function PlansSection() {
  return (
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
            role="button"
          >
            Simule Agora
          </a>
        </div>
      </div>
    </section>
  );
}