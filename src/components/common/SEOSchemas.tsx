import React from 'react';
import Script from 'next/script';
import {
  organizationSchema,
  localBusinessSchema,
  aboutSchema,
  mainServiceSchema,
  servicesListSchema,
  howToSchema,
  contactSchema,
  footerSchema,
  getPlansSchema,
  getFaqSchema
} from '@/app/seoSchemas';
import { planos } from '@/lib/utils/utils';
import { faqSectionStrings } from '@/lib/defaultStrings/faqSectionStrings';

export default function SEOSchemas() {
  // Gerando o esquema de planos com base nos planos disponíveis
  const plansSchema = getPlansSchema(planos);
  // Gerando o esquema de FAQ com base nas perguntas exibidas na página
  const faqSchema = getFaqSchema(faqSectionStrings.items);

  // Lista de todos os esquemas JSON-LD para renderizar
  const schemas = [
    { id: 'organization-schema', schema: organizationSchema },
    { id: 'local-business-schema', schema: localBusinessSchema },
    { id: 'about-schema', schema: aboutSchema },
    { id: 'service-schema', schema: mainServiceSchema },
    { id: 'services-list-schema', schema: servicesListSchema },
    { id: 'howto-schema', schema: howToSchema },
    { id: 'contact-schema', schema: contactSchema },
    { id: 'footer-schema', schema: footerSchema },
    { id: 'plans-schema', schema: plansSchema },
    { id: 'faq-schema', schema: faqSchema }
  ];

  return (
    <>
      {schemas.map(({ id, schema }) => (
        <Script
          key={id}
          id={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}