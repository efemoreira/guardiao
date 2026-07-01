import { Fact } from '../../components/home/FactsSection';

export interface FactsSectionStrings {
  subtitle: string;
  title: string;
  description: string;
  phoneTitle: string;
  phoneNumber: string;
  phoneIcon: string;
  facts: Fact[];
  backgroundColor: string;
}

export const factsSectionStrings: FactsSectionStrings = {
  subtitle: "Por que confiar na Guardião",
  title: "Experiência e Segurança Garantida",
  description: "Com mais de 14 anos no mercado, atendemos residências, condomínios, empresas, igrejas, colégios, faculdades e restaurantes com soluções completas de proteção contra incêndio. Nossos serviços preventivos garantem que seus equipamentos estejam sempre em conformidade com as normas técnicas.",
  phoneTitle: "Precisa de orientação?",
  phoneNumber: "(85) 98671-8305",
  phoneIcon: "FaPhoneAlt",
  facts: [
    {
      icon: "FaCalendarCheck",
      count: 12,
      text: "Anos de Experiência",
      backgroundColor: "bg-green-600"
    },
    {
      icon: "FaShieldAlt",
      text: "Parceiro registrado no INMETRO",
      backgroundColor: "bg-blue-600"
    },
    {
      icon: "FaFireExtinguisher",
      text: "Conformidade com o Corpo de Bombeiros (CBMCE)",
      backgroundColor: "bg-red-600"
    }
  ],
  backgroundColor: "bg-gray-50"
};
