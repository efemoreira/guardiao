export interface SocialMedia {
  icon: string;
  link: string;
}

export interface ContactInfo {
  title: string;
  addressTitle: string;
  address: string;
  phoneTitle: string;
  phone: string;
  emailTitle: string;
  email: string;
  socialMedia: SocialMedia[];
}

export interface FormLabels {
  title: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submitButton: string;
  placeholder: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  serviceOptions: {
    label: string;
    value: string;
  }[];
}

export interface ContactSectionStrings {
  title: string;
  subtitle: string;
  description: string;
  contactInfo: ContactInfo;
  formLabels: FormLabels;
}

export const contactSectionStrings: ContactSectionStrings = {
  title: "Proteção Contra Incêndio de Qualidade",
  subtitle: "Entre em Contato",
  description: "Precisa de inspeção, recarga ou aquisição de extintores? Entre em contato conosco e saiba como nossos planos podem proporcionar mais economia e segurança.",
  contactInfo: {
    title: "Atendimento Especializado",
    addressTitle: "Endereço",
    address: "Fortaleza, CE",
    phoneTitle: "Telefone",
    phone: "(85) 98892-8272",
    emailTitle: "Email",
    email: "contato@felipesmoreira.com",
    socialMedia: [
      { icon: "FaFacebookF", link: "#" },
      { icon: "FaInstagram", link: "#" },
      { icon: "FaWhatsapp", link: "#" }
    ]
  },
  formLabels: {
    title: "Solicite uma Avaliação",
    name: "Nome Completo",
    email: "Email",
    phone: "Telefone",
    service: "Serviço Desejado",
    message: "Detalhes da Solicitação",
    submitButton: "Enviar Solicitação",
    placeholder: {
      name: "Seu nome",
      email: "Seu email",
      phone: "(00) 00000-0000",
      message: "Descreva sua necessidade (quantidade e tipo de extintores, localização, tipo de estabelecimento etc.)"
    },
    serviceOptions: [
      { label: "Selecione um serviço (opcional)", value: "" },
      { label: "Inspeção de Extintores", value: "inspecao" },
      { label: "Recarga de Extintores", value: "recarga" },
      // { label: "Venda de Extintores", value: "venda" },
      { label: "Sinalização de Segurança", value: "sinalizacao" },
      { label: "Treinamento de Incêndio", value: "treinamento" },
      { label: "Estudo de Risco", value: "risco" },
      { label: "Plano Essencial", value: "plano-essencial" },
      { label: "Plano Intermediário", value: "plano-intermediario" },
      { label: "Plano Premium", value: "plano-premium" }
    ]
  }
};