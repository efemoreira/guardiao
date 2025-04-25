import React from 'react';

export default function HowItWorksSection() {
  return (
    <section id="funciona" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Como Funciona</h3>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2">Escolha o Plano</h4>
            <p className="text-gray-600">Selecione o melhor plano para sua necessidade</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2">Agende uma Visita</h4>
            <p className="text-gray-600">Nossos especialistas irão até você</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Receba o Atendimento</h4>
            <p className="text-gray-600">Realizamos todos os serviços necessários</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl font-bold">4</span>
            </div>
            <h4 className="font-semibold mb-2">Fique Tranquilo</h4>
            <p className="text-gray-600">Sua segurança está garantida com a gente</p>
          </div>
        </div>
      </div>
    </section>
  );
}