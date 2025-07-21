interface ServiceOption {
  value: string;
  label: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  addressIcon?: string;
  phoneIcon?: string;
  emailIcon?: string;
}

interface CalloutInfo {
  icon?: string;
  title: string;
  phone: string;
}

export interface QuoteSectionStrings {
  formTitle: string;
  contactTitle: string;
  contactDescription: string;
  serviceOptions: ServiceOption[];
  contactInfo: ContactInfo;
  callout: CalloutInfo;
  submitButtonText: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  serviceSelectPlaceholder: string;
  messagePlaceholder: string;
  backgroundColor: string;
  formBackgroundColor: string;
  contactBackgroundColor: string;
  primaryColor: string;
}

export const quoteSectionStrings: QuoteSectionStrings = {
  formTitle: 'Solicite uma Avaliação Gratuita',
  contactTitle: 'Entre em Contato',
  contactDescription: 'Para informações sobre nossos planos e serviços de proteção contra incêndio, entre em contato pelos canais abaixo. Nossa equipe está pronta para atendê-lo com soluções personalizadas para seu estabelecimento.',
  serviceOptions: [
    { value: 'inspecao', label: 'Inspeção de Extintores' },
    { value: 'recarga', label: 'Recarga de Extintores' },
    { value: 'venda', label: 'Venda de Extintores' },
    { value: 'sinalizacao', label: 'Sinalização de Segurança' },
    { value: 'treinamento', label: 'Treinamento de Incêndio' },
    { value: 'risco', label: 'Estudo de Risco' },
    { value: 'plano-essencial', label: 'Plano Essencial' },
    { value: 'plano-intermediario', label: 'Plano Intermediário' },
    { value: 'plano-premium', label: 'Plano Premium' }
  ],
  contactInfo: {
    address: 'Fortaleza - CE',
    phone: '(85) 98892-8272',
    email: 'contato@felipesmoreira.com',
    addressIcon: 'FaMapMarkerAlt',
    phoneIcon: 'FaPhoneAlt',
    emailIcon: 'FaEnvelope'
  },
  callout: {
    icon: 'FaShieldAlt',
    title: 'Proteção é prevenção!',
    phone: '(85) 98892-8272'
  },
  submitButtonText: 'Solicitar Avaliação',
  namePlaceholder: 'Seu Nome',
  emailPlaceholder: 'Seu Email',
  serviceSelectPlaceholder: 'Selecione o Serviço',
  messagePlaceholder: 'Descreva sua necessidade (tipo de estabelecimento, quantidade de extintores, etc.)...',
  backgroundColor: 'bg-gray-50',
  formBackgroundColor: 'bg-white',
  contactBackgroundColor: 'bg-secondary',
  primaryColor: 'text-primary'
};