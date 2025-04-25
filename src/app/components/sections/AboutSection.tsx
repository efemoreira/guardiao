import React from 'react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">Sobre Nós</h3>
        <p className="text-lg text-gray-600 mb-8">
          Com mais de 10 anos de experiência, somos especialistas em proteção contra incêndio.
          Nossa missão é garantir a segurança do seu estabelecimento com soluções profissionais e atendimento personalizado.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="text-xl font-semibold mb-2">Experiência</h4>
            <p className="text-gray-600">10+ anos no mercado</p>
          </div>
          <div>
            <div className="text-4xl mb-4">👥</div>
            <h4 className="text-xl font-semibold mb-2">Clientes</h4>
            <p className="text-gray-600">+1000 clientes atendidos</p>
          </div>
          <div>
            <div className="text-4xl mb-4">✅</div>
            <h4 className="text-xl font-semibold mb-2">Qualidade</h4>
            <p className="text-gray-600">100% certificados</p>
          </div>
        </div>
      </div>
    </section>
  );
}