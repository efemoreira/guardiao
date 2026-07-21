// Esquema principal da organização
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Guardião Extintores",
  "alternateName": "Proteja Já",
  "url": "https://guardiaoextintores.com.br",
  "logo": "https://guardiaoextintores.com.br/logo-guardiao.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+5585986718305",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://www.facebook.com/guardiaoextintores",
    "https://www.instagram.com/guardiaoextintores",
    "https://linkedin.com/company/guardiaoextintores"
  ]
};

// Esquema de negócio local — essencial para o Google entender a área de
// atuação (Fortaleza/Ceará) e exibir a empresa em buscas locais/mapa.
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://guardiaoextintores.com.br/#localbusiness",
  "name": "Guardião Extintores",
  "alternateName": "Proteja Já",
  "image": "https://guardiaoextintores.com.br/logo-guardiao.png",
  "url": "https://guardiaoextintores.com.br",
  "telephone": "+5585986718305",
  "email": "contato@guardiaoextintores.com.br",
  "priceRange": "$$",
  "description": "Recarga, inspeção e gestão de vencimento de extintores em Fortaleza e em todo o Ceará, com recarga executada por empresa parceira registrada no INMETRO.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fortaleza",
    "addressRegion": "CE",
    "addressCountry": "BR"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Ceará"
    },
    {
      "@type": "City",
      "name": "Fortaleza"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/guardiaoextintores",
    "https://www.instagram.com/guardiaoextintores"
  ]
};

// Esquema da página sobre
export const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Guardião Extintores",
    "description": "Com mais de 14 anos de experiência, atuamos na intermediação e gestão da manutenção de extintores, com recargas executadas por empresa parceira registrada no INMETRO e treinamentos conduzidos por bombeiro civil habilitado.",
    "foundingDate": "2014-01-01",
    "founders": [
      {
        "@type": "Person",
        "name": "Guardião Extintores"
      }
    ],
    "numberOfEmployees": "10+",
    "email": "contato@guardiaoextintores.com.br",
    "knowsAbout": ["Extintores", "Proteção contra incêndio", "Inspeções de segurança"]
  }
};

// Esquema para a seção de serviços principal
export const mainServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Proteção Contra Incêndio Profissional",
  "provider": {
    "@type": "Organization",
    "name": "Guardião Extintores"
  },
  "description": "Serviços completos de proteção contra incêndio para empresas e residências, incluindo venda, instalação e manutenção de extintores.",
  "serviceType": "Proteção Contra Incêndio",
  "areaServed": {
    "@type": "State",
    "name": "Ceará"
  },
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

// Esquema para a lista de serviços
export const servicesListSchema = {
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

// Esquema passo a passo de "Como Funciona"
export const howToSchema = {
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
      "image": "https://guardiaoextintores.com.br/imagens/escolha-plano.jpg",
      "url": "https://guardiaoextintores.com.br/#planos",
      "position": 1
    },
    {
      "@type": "HowToStep",
      "name": "Agende uma Visita",
      "text": "Nossos especialistas irão até você para avaliação",
      "image": "https://guardiaoextintores.com.br/imagens/agende-visita.jpg",
      "url": "https://guardiaoextintores.com.br/#contato",
      "position": 2
    },
    {
      "@type": "HowToStep",
      "name": "Receba o Atendimento",
      "text": "Realizamos todos os serviços necessários no local",
      "image": "https://guardiaoextintores.com.br/imagens/receba-atendimento.jpg",
      "position": 3
    },
    {
      "@type": "HowToStep",
      "name": "Fique Tranquilo",
      "text": "Sua segurança está garantida com a gente",
      "image": "https://guardiaoextintores.com.br/imagens/seguranca-garantida.jpg",
      "position": 4
    }
  ]
};

// Esquema de contato
export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Guardião Extintores",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+5585986718305",
        "contactType": "customer service",
        "availableLanguage": "Portuguese",
        "contactOption": "TollFree"
      }
    ],
    "email": "contato@guardiaoextintores.com.br",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fortaleza",
      "addressRegion": "CE",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.facebook.com/guardiaoextintores",
      "https://www.instagram.com/guardiaoextintores"
    ]
  }
};

// Esquema para rodapé
export const footerSchema = {
  "@context": "https://schema.org",
  "@type": "WPFooter",
  "copyrightYear": new Date().getFullYear(),
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Guardião Extintores"
  },
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "isPartOf": {
      "@id": "https://guardiaoextintores.com.br/#website"
    },
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "Links Rápidos",
        "description": "Menu de navegação rápida do rodapé",
        "containsPlace": [
          {
            "@type": "WebPage",
            "name": "Sobre",
            "url": "https://guardiaoextintores.com.br/#sobre"
          },
          {
            "@type": "WebPage",
            "name": "Serviços",
            "url": "https://guardiaoextintores.com.br/#servicos"
          },
          {
            "@type": "WebPage",
            "name": "Planos",
            "url": "https://guardiaoextintores.com.br/#planos"
          }
        ]
      }
    ]
  }
};

// Esquema de perguntas frequentes, gerado a partir do conteúdo da seção de FAQ
export const getFaqSchema = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});

// Interface para os planos
export interface Plano {
  nome: string;
  inspecoes: number;
  recargas: number;
  preco: number;
}

// Função para gerar esquema de planos com base nos planos disponíveis
export const getPlansSchema = (planos: Plano[]) => {
  const offers = planos.map((plano) => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": `Plano ${plano.nome}`,
      "description": `Plano de proteção contra incêndio com ${plano.inspecoes === Infinity ? 'inspeções ilimitadas' : plano.inspecoes + ' inspeções'} e ${plano.recargas} recargas gratuitas.`
    },
    "price": plano.preco,
    "priceCurrency": "BRL",
    "eligibleRegion": {
      "@type": "Country",
      "name": "BR"
    },
    "seller": {
      "@type": "Organization",
      "name": "Guardião Extintores"
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": offers.map((offer, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": offer
    }))
  };
};