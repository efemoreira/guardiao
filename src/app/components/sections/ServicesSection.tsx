import React from 'react';

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h3>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🧯</div>
            <h4 className="text-xl font-semibold mb-2">Extintores</h4>
            <p className="text-gray-600">Venda, manutenção e recarga</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">👀</div>
            <h4 className="text-xl font-semibold mb-2">Inspeções</h4>
            <p className="text-gray-600">Vistorias técnicas regulares</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold mb-2">Sinalização</h4>
            <p className="text-gray-600">Placas e demarcação de solo</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📋</div>
            <h4 className="text-xl font-semibold mb-2">Consultoria</h4>
            <p className="text-gray-600">Orientação especializada</p>
          </div>
        </div>
      </div>
    </section>
  );
}