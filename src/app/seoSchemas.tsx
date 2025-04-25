// Esquema principal da organização
export const organizationSchema = {
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

// Esquema da página sobre
export const aboutSchema = {
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
      "@id": "https://guardiao-extintores.com.br/#website"
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
            "url": "https://guardiao-extintores.com.br/#sobre"
          },
          {
            "@type": "WebPage",
            "name": "Serviços",
            "url": "https://guardiao-extintores.com.br/#servicos"
          },
          {
            "@type": "WebPage",
            "name": "Planos",
            "url": "https://guardiao-extintores.com.br/#planos"
          }
        ]
      }
    ]
  }
};

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

// Esquema para o simulador financeiro
export const simulatorSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Simulador de economia para serviços de proteção contra incêndio",
  "description": "Compare os custos dos nossos planos de proteção contra incêndio e veja quanto você pode economizar",
  "provider": {
    "@type": "Organization",
    "name": "Guardião Extintores"
  },
  "feesAndCommissionsSpecification": "Nossos planos oferecem descontos de até 20% em produtos e 15% em serviços",
  "interestRate": {
    "@type": "QuantitativeValue",
    "value": "0",
    "unitText": "PERCENT"
  }
};