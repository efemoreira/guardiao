import { Feature } from '../../components/home/AboutSection';

export interface AboutSectionStrings {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: Feature[];
  buttonText: string;
  buttonLink: string;
}

export const aboutSectionStrings: AboutSectionStrings = {
  title: 'Especialistas em Extintores em Fortaleza e no Ceará',
  subtitle: 'Sobre Nós',
  description: 'Com mais de 14 anos de experiência, somos especialistas em extintores e proteção contra incêndio em Fortaleza e em todo o Ceará, atendendo residências, condomínios, empresas, igrejas, colégios, faculdades e restaurantes. Oferecemos serviços completos de inspeção e recarga de extintores, além de treinamentos e estudos de risco para garantir a segurança do seu estabelecimento.',
  imageSrc: 'img/herobanner.jpg',
  imageAlt: 'Sobre Guardião Extintores',
  features: [
    {
      icon: 'FaShieldAlt',
      title: 'Parceiros Certificados',
      description: 'Coordenamos toda a manutenção dos seus extintores trabalhando com empresas e profissionais certificados: recarga executada por empresa registrada no INMETRO e treinamentos conduzidos por bombeiro civil habilitado, em conformidade com as normas técnicas vigentes.'
    },
    {
      icon: 'FaClock',
      title: 'Atendimento Preventivo',
      description: 'Trabalhamos com foco na prevenção, oferecendo manutenção programada e planos personalizados para manter seus equipamentos sempre em perfeitas condições.'
    }
  ],
  buttonText: 'Entenda Nosso Processo',
  buttonLink: '/#features'
};