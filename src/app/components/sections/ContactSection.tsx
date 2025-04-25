import React from 'react';
import Script from 'next/script';

export default function ContactSection() {
  // Schema para informações de contato para melhorar o SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Guardião Extintores",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+5599999999999",
          "contactType": "customer service",
          "availableLanguage": "Portuguese",
          "contactOption": "TollFree"
        }
      ],
      "email": "contato@protejaja.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Exemplo, 123",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "01000-000",
        "addressCountry": "BR"
      },
      "sameAs": [
        "https://www.facebook.com/guardiaoextintores",
        "https://www.instagram.com/guardiaoextintores"
      ]
    }
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="contato" aria-labelledby="contato-heading" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="contato-heading" className="text-3xl font-bold mb-8">Fale Conosco</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-4" aria-hidden="true">📱</div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/5599999999999" 
                className="text-red-600 hover:underline"
                aria-label="Entre em contato pelo WhatsApp"
              >
                (99) 99999-9999
              </a>
            </div>
            <div>
              <div className="text-3xl mb-4" aria-hidden="true">📧</div>
              <h3 className="font-semibold mb-2">E-mail</h3>
              <a 
                href="mailto:contato@protejaja.com.br" 
                className="text-red-600 hover:underline"
                aria-label="Entre em contato por e-mail"
              >
                contato@protejaja.com.br
              </a>
            </div>
            <div>
              <div className="text-3xl mb-4" aria-hidden="true">📍</div>
              <h3 className="font-semibold mb-2">Endereço</h3>
              <address className="text-gray-600 not-italic">
                Rua Exemplo, 123<br />São Paulo - SP
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}