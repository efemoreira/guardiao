import React from 'react';
import Script from 'next/script';

export default function ServicesSection() {
  // Schema de serviços oferecidos para melhorar o SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Extintores",
          "description": "Venda, manutenção e recarga de extintores de incêndio.",
          "provider": {
            "@type": "Organization",
            "name": "Guardião Extintores"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Inspeções",
          "description": "Vistorias técnicas regulares para garantir a segurança do seu estabelecimento.",
          "provider": {
            "@type": "Organization",
            "name": "Guardião Extintores"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Sinalização",
          "description": "Placas e demarcação de solo para indicar a localização dos equipamentos de segurança.",
          "provider": {
            "@type": "Organization",
            "name": "Guardião Extintores"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Consultoria",
          "description": "Orientação especializada sobre proteção contra incêndio para o seu negócio.",
          "provider": {
            "@type": "Organization",
            "name": "Guardião Extintores"
          }
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="servicos" aria-labelledby="servicos-heading" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="servicos-heading" className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4" aria-hidden="true">🧯</div>
              <h3 className="text-xl font-semibold mb-2">Extintores</h3>
              <p className="text-gray-600">Venda, manutenção e recarga</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4" aria-hidden="true">👀</div>
              <h3 className="text-xl font-semibold mb-2">Inspeções</h3>
              <p className="text-gray-600">Vistorias técnicas regulares</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4" aria-hidden="true">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Sinalização</h3>
              <p className="text-gray-600">Placas e demarcação de solo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4" aria-hidden="true">📋</div>
              <h3 className="text-xl font-semibold mb-2">Consultoria</h3>
              <p className="text-gray-600">Orientação especializada</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}