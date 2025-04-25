import React from 'react';

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="pt-24 bg-gradient-to-br from-red-600 to-red-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Proteção Contra Incêndio Profissional
            </h2>
            <p className="text-xl mb-8">
              Garantimos sua segurança com soluções completas e atendimento especializado
            </p>
            <a 
              href="#planos" 
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              aria-label="Conheça nossos planos de proteção"
              role="button"
            >
              Conheça Nossos Planos
            </a>
          </div>
          <div className="hidden md:block" aria-hidden="true">
            {/* Aqui você pode adicionar uma imagem ilustrativa com alt adequado */}
          </div>
        </div>
      </div>
    </section>
  );
}