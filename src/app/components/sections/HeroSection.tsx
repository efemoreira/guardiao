import React from 'react';
import Script from 'next/script';

export default function HeroSection() {
  // Adicionando schema de serviço local para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Proteção Contra Incêndio Profissional",
    "provider": {
      "@type": "Organization",
      "name": "Guardião Extintores"
    },
    "description": "Serviços completos de proteção contra incêndio para empresas e residências, incluindo venda, instalação e manutenção de extintores.",
    "serviceType": "Proteção Contra Incêndio",
    "areaServed": "Brasil",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Proteção Contra Incêndio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Venda e Instalação de Extintores"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manutenção e Recarga de Extintores"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}