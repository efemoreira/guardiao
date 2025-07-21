export interface NavItem {
  id: string;
  label: string;
  type: 'section' | 'page';
  path?: string;
}

export interface Logo {
  text: string;
  subtext?: string;
  path: string;
}

export interface ContactInfo {
  text: string;
  phone: string;
  icon: string;
}

export interface NavbarStrings {
  items: NavItem[];
  logo: Logo;
  contactInfo: ContactInfo;
}

export const navbarStrings: NavbarStrings = {
  items: [
    { id: 'home', label: 'Home', type: 'section' },
    { id: 'about', label: 'Sobre', type: 'section' },
    { id: 'services', label: 'Serviços', type: 'section' },
    { id: 'features', label: 'Diferenciais', type: 'section' },
    { id: 'pricing', label: 'Planos', type: 'section' },
    { id: 'testimonial', label: 'Depoimentos', type: 'section' },
    { id: 'contact', label: 'Contato', type: 'section' },
  ],
  logo: {
    text: 'Guardião',
    subtext: 'Extintores',
    path: '/'
  },
  contactInfo: {
    text: 'Precisa de ajuda?',
    phone: '(85) 98892-8272',
    icon: 'FaShieldAlt'
  }
};