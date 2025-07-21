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
  showServicesColumn: true,
  showQuickLinksColumn: true,
  showNewsletterColumn: true,
  contactInfo: {
    address: "Fortaleza, CE",
    phone: "(85) 98892-8272",
    email: "contato@felipesmoreira.com"
  },
  socialMediaLinks: [
    { platform: "Facebook", url: "https://facebook.com/", icon: "FaFacebookF" },
    { platform: "Instagram", url: "https://instagram.com/", icon: "FaInstagram" },
    { platform: "WhatsApp", url: "https://wa.me/5585988928272", icon: "FaWhatsapp" },
    { platform: "YouTube", url: "https://youtube.com/", icon: "FaYoutube" }
  ],
  servicesColumn: {
    title: "Nossos Serviços",
    links: [
      { text: "Inspeção de Extintores", url: "/servicos/inspecao" },
      { text: "Recarga de Extintores", url: "/servicos/recarga" },
      { text: "Venda de Extintores", url: "/servicos/venda" },
      { text: "Sinalização de Segurança", url: "/servicos/sinalizacao" },
      { text: "Treinamento de Incêndio", url: "/servicos/treinamento" },
      { text: "Estudo de Risco", url: "/servicos/estudo-risco" }
    ]
  },
  quickLinksColumn: {
    title: "Links Úteis",
    links: [
      { text: "Plano Essencial", url: "/planos/essencial" },
      { text: "Plano Intermediário", url: "/planos/intermediario" },
      { text: "Plano Premium", url: "/planos/premium" },
      { text: "Sobre Nós", url: "/sobre" },
      { text: "Contato", url: "/contato" }
    ]
  },
  newsletterTitle: "Newsletter",
  newsletterText: "Inscreva-se para receber dicas de prevenção contra incêndio e manter-se atualizado sobre normas de segurança",
  newsletterPlaceholder: "Seu Email",
  copyright: {
    companyName: "Guardião Extintores",
    links: [
      { text: "Política de Privacidade", url: "/privacidade" },
      { text: "Termos de Serviço", url: "/termos" },
      { text: "Política de Cookies", url: "/cookies" }
    ]
  },
  backgroundImage: "/img/map.png"
};