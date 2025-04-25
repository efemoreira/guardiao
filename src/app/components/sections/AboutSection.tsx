import React from 'react';
import Script from 'next/script';

export default function AboutSection() {
  // Schema de AboutPage para melhorar o SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Guardião Extintores",
      "description": "Com mais de 10 anos de experiência, somos especialistas em proteção contra incêndio.",
      "foundingDate": "2014-01-01",
      "founders": [
        {
          "@type": "Person",
          "name": "Guardião Extintores"
        }
      ],
      "numberOfEmployees": "10+",
      "email": "contato@protejaja.com.br",
      "award": "100% certificados",
      "knowsAbout": ["Extintores", "Proteção contra incêndio", "Inspeções de segurança"]
    }
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="sobre" aria-labelledby="sobre-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="sobre-heading" className="text-3xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-lg text-gray-600 mb-8">
            Com mais de 10 anos de experiência, somos especialistas em proteção contra incêndio.
            Nossa missão é garantir a segurança do seu estabelecimento com soluções profissionais e atendimento personalizado.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4" aria-hidden="true">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Experiência</h3>
              <p className="text-gray-600">10+ anos no mercado</p>
            </div>
            <div>
              <div className="text-4xl mb-4" aria-hidden="true">👥</div>
              <h3 className="text-xl font-semibold mb-2">Clientes</h3>
              <p className="text-gray-600">+1000 clientes atendidos</p>
            </div>
            <div>
              <div className="text-4xl mb-4" aria-hidden="true">✅</div>
              <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
              <p className="text-gray-600">100% certificados</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}