export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionStrings {
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export const faqSectionStrings: FaqSectionStrings = {
  title: "Perguntas Frequentes sobre Extintores em Fortaleza e no Ceará",
  subtitle: "Tire Suas Dúvidas",
  items: [
    {
      question: "Quanto custa a recarga de extintores em Fortaleza?",
      answer: "O valor da recarga de extintores varia de acordo com o tipo e a capacidade do equipamento. Trabalhamos com planos de assinatura (Vigia, Essencial e Completo) que já incluem recarga e inspeção, além de atendimento avulso. Fale com a gente no WhatsApp para um orçamento personalizado."
    },
    {
      question: "Vocês atendem extintores em toda a Região Metropolitana de Fortaleza e no Ceará?",
      answer: "Sim. Atendemos Fortaleza e a Região Metropolitana, e também atendemos demandas em outras cidades do Ceará mediante consulta. Basta chamar no WhatsApp informando sua localização."
    },
    {
      question: "Com que frequência preciso fazer a recarga do extintor?",
      answer: "Em geral, extintores de pó químico e CO2 têm recarga anual, enquanto os de água pressurizada podem ter prazos diferentes conforme a norma técnica. Nossos planos incluem gestão automática de vencimento, então você recebe o lembrete antes do prazo vencer."
    },
    {
      question: "A recarga tem certificação aceita pelo Corpo de Bombeiros (CBMCE)?",
      answer: "Sim. A recarga é executada por empresa parceira registrada no INMETRO, com a documentação necessária para a vistoria do Corpo de Bombeiros Militar do Ceará."
    },
    {
      question: "Vocês atendem apenas empresas ou também residências e condomínios?",
      answer: "Atendemos residências, condomínios, empresas, igrejas, colégios, faculdades e restaurantes em Fortaleza e no Ceará, com planos adaptados para cada tipo de estabelecimento."
    },
    {
      question: "Como funciona o lembrete de vencimento dos extintores?",
      answer: "Assim que assinamos um plano, cadastramos seus extintores e passamos a monitorar as datas de validade. Você recebe um aviso automático por WhatsApp antes do vencimento, sem precisar controlar isso manualmente."
    }
  ]
};
