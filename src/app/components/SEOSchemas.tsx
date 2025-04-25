import React from 'react';
import Script from 'next/script';
import { 
  organizationSchema, 
  aboutSchema, 
  mainServiceSchema,
  servicesListSchema,
  howToSchema,
  contactSchema,
  footerSchema,
  getPlansSchema,
  simulatorSchema
} from '../seoSchemas';
import { planos } from '../utils';

export default function SEOSchemas() {
  // Gerando o esquema de planos com base nos planos disponíveis
  const plansSchema = getPlansSchema(planos);
  
  // Lista de todos os esquemas JSON-LD para renderizar
  const schemas = [
    { id: 'organization-schema', schema: organizationSchema },
    { id: 'about-schema', schema: aboutSchema },
    { id: 'service-schema', schema: mainServiceSchema },
    { id: 'services-list-schema', schema: servicesListSchema },
    { id: 'howto-schema', schema: howToSchema },
    { id: 'contact-schema', schema: contactSchema },
    { id: 'footer-schema', schema: footerSchema },
    { id: 'plans-schema', schema: plansSchema },
    { id: 'simulator-schema', schema: simulatorSchema }
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