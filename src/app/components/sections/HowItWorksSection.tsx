import React from 'react';
import Script from 'next/script';

export default function HowItWorksSection() {
  // Schema para processo passo a passo
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como contratar nossos serviços de proteção contra incêndio",
    "description": "Processo simples para garantir a segurança do seu estabelecimento com nossos serviços de proteção contra incêndio",
    "totalTime": "PT1H",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Escolha o Plano",
        "text": "Selecione o melhor plano para sua necessidade",
        "image": "https://guardiao-extintores.com.br/imagens/escolha-plano.jpg",
        "url": "https://guardiao-extintores.com.br/#planos",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Agende uma Visita",
        "text": "Nossos especialistas irão até você para avaliação",
        "image": "https://guardiao-extintores.com.br/imagens/agende-visita.jpg",
        "url": "https://guardiao-extintores.com.br/#contato",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Receba o Atendimento",
        "text": "Realizamos todos os serviços necessários no local",
        "image": "https://guardiao-extintores.com.br/imagens/receba-atendimento.jpg",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Fique Tranquilo",
        "text": "Sua segurança está garantida com a gente",
        "image": "https://guardiao-extintores.com.br/imagens/seguranca-garantida.jpg",
        "position": 4
      }
    ]
  };

  return (
    <>
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="funciona" aria-labelledby="funciona-heading" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 id="funciona-heading" className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
          <ol className="grid md:grid-cols-4 gap-8">
            <li className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Escolha o Plano</h3>
              <p className="text-gray-600">Selecione o melhor plano para sua necessidade</p>
            </li>
            <li className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Agende uma Visita</h3>
              <p className="text-gray-600">Nossos especialistas irão até você</p>
            </li>
            <li className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Receba o Atendimento</h3>
              <p className="text-gray-600">Realizamos todos os serviços necessários</p>
            </li>
            <li className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Fique Tranquilo</h3>
              <p className="text-gray-600">Sua segurança está garantida com a gente</p>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}