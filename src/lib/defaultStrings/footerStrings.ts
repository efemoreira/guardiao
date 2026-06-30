export interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface FooterLink {
  text: string;
  url: string;
}

export interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export interface CopyrightInfo {
  companyName: string;
  cnpj?: string;
  links: FooterLink[];
}

export interface FooterStrings {
  showContactColumn: boolean;
  showServicesColumn: boolean;
  showQuickLinksColumn: boolean;
  showNewsletterColumn: boolean;
  contactInfo: ContactInfo;
  socialMediaLinks: SocialMediaLink[];
  servicesColumn: FooterColumnProps;
  quickLinksColumn: FooterColumnProps;
  newsletterTitle: string;
  newsletterText: string;
  newsletterPlaceholder: string;
  copyright: CopyrightInfo;
  backgroundImage: string;
}

export const footerStrings: FooterStrings = {
  showContactColumn: true,
  showServicesColumn: false, // Desabilitado temporariamente - conteúdo em desenvolvimento
  showQuickLinksColumn: false, // Desabilitado temporariamente - conteúdo em desenvolvimento
  showNewsletterColumn: false, // Desabilitado temporariamente - conteúdo em desenvolvimento
  contactInfo: {
    address: "Fortaleza, CE",
    phone: "(85) 98671-8305",
    email: "contato@felipesmoreira.com"
  },
  socialMediaLinks: [
    { platform: "Facebook", url: "https://facebook.com/", icon: "FaFacebookF" },
    { platform: "Instagram", url: "https://instagram.com/", icon: "FaInstagram" },
    { platform: "WhatsApp", url: "https://wa.me/5585986718305", icon: "FaWhatsapp" },
    { platform: "YouTube", url: "https://youtube.com/", icon: "FaYoutube" }
  ],
  servicesColumn: {
    title: "Nossos Serviços",
    links: [
      // Conteúdo será adicionado quando o site estiver mais completo
      // { text: "Inspeção de Extintores", url: "/servicos/inspecao" },
      // { text: "Recarga de Extintores", url: "/servicos/recarga" },
      // { text: "Sinalização de Segurança", url: "/servicos/sinalizacao" },
      // { text: "Treinamento de Incêndio", url: "/servicos/treinamento" },
      // { text: "Estudo de Risco", url: "/servicos/estudo-risco" }
    ]
  },
  quickLinksColumn: {
    title: "Links Úteis",
    links: [
      // Conteúdo será adicionado quando o site estiver mais completo
      // { text: "Plano Vigia", url: "/planos/vigia" },
      // { text: "Plano Essencial", url: "/planos/essencial" },
      // { text: "Plano Completo", url: "/planos/completo" },
      // { text: "Sobre Nós", url: "/sobre" },
      // { text: "Contato", url: "/contato" }
    ]
  },
  newsletterTitle: "Newsletter",
  newsletterText: "Em breve: Newsletter com dicas de prevenção contra incêndio e atualizações sobre normas de segurança",
  newsletterPlaceholder: "Seu Email",
  copyright: {
    companyName: "Guardião Extintores",
    cnpj: "17.078.739/0001-19",
    links: [
      { text: "Política de Privacidade", url: "/privacidade" },
      { text: "Termos de Serviço", url: "/termos" },
      { text: "Política de Cookies", url: "/cookies" }
    ]
  },
  backgroundImage: "/img/map.png"
};