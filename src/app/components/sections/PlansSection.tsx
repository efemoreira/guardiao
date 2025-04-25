import React from 'react';
import { planos } from '../../utils';
import PlanCard from '../PlanCard';

// Componente principal da seção Planos
export default function PlansSection() {
  return (
    <section id="planos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Nossos Planos</h3>
        <div className="p-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {planos.map((plano) => (
              <PlanCard key={plano.nome} plano={plano} />
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#simulador" className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition">
            Simule Agora
          </a>
        </div>
      </div>
    </section>
  );
}