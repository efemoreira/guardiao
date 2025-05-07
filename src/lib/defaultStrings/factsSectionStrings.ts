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
  subtitle: "Números que Impressionam",
  title: "Experiência e Segurança Garantida",
  description: "Com mais de 10 anos no mercado, atendemos residências, condomínios, empresas, igrejas, colégios, faculdades e restaurantes com soluções completas de proteção contra incêndio. Nossos serviços preventivos garantem que seus equipamentos estejam sempre em conformidade com as normas técnicas.",
  phoneTitle: "Precisa de orientação?",
  phoneNumber: "(99) 9999-9999",
  phoneIcon: "FaPhoneAlt",
  facts: [
    {
      icon: "FaFireExtinguisher",
      count: 5000,
      text: "Extintores Manutenidos",
      backgroundColor: "bg-red-600"
    },
    {
      icon: "FaBuilding",
      count: 1200,
      text: "Clientes Atendidos",
      backgroundColor: "bg-blue-600"
    },
    {
      icon: "FaCalendarCheck",
      count: 10,
      text: "Anos de Experiência",
      backgroundColor: "bg-green-600"
    }
  ],
  backgroundColor: "bg-gray-50"
};