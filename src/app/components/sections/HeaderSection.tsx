import React from 'react';
import Script from 'next/script';

export default function HeaderSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Guardião Extintores",
    "alternateName": "Proteja Já",
    "url": "https://guardiao-extintores.com.br",
    "logo": "https://guardiao-extintores.com.br/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5599999999999",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.facebook.com/guardiaoextintores",
      "https://www.instagram.com/guardiaoextintores",
      "https://linkedin.com/company/guardiaoextintores"
    ]
  };

  return (
    <>
      <Script 
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="bg-red-600 text-white p-6 shadow-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <a href="/" aria-label="Página inicial Guardião Extintores">
            <h1 className="text-2xl font-bold">Proteja Já</h1>
          </a>
          <nav aria-label="Menu principal" className="space-x-6 mt-4 md:mt-0">
            <a href="#sobre" className="hover:underline" aria-label="Sobre nossa empresa">Sobre</a>
            <a href="#servicos" className="hover:underline" aria-label="Nossos serviços">Serviços</a>
            <a href="#funciona" className="hover:underline" aria-label="Como funciona nosso atendimento">Como Funciona</a>
            <a href="#planos" className="hover:underline" aria-label="Planos de assinatura">Planos</a>
            <a href="#simulador" className="hover:underline" aria-label="Simule seus custos">Simulador</a>
            <a href="#contato" className="hover:underline" aria-label="Entre em contato conosco">Contato</a>
          </nav>
        </div>
      </header>
    </>
  );
}
