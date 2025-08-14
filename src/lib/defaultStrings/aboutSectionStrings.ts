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
  title: 'Especialistas em Proteção Contra Incêndio',
  subtitle: 'Sobre Nós',
  description: 'Com mais de 12 anos de experiência, somos especialistas em proteção contra incêndio para residências, condomínios, empresas, igrejas, colégios, faculdades e restaurantes. Oferecemos serviços completos de inspeção, recarga de extintores, além de treinamentos e estudos de risco para garantir a segurança do seu estabelecimento.',
  imageSrc: 'img/herobanner.jpg',
  imageAlt: 'Sobre Guardião Extintores',
  features: [
    {
      icon: 'FaShieldAlt',
      title: 'Serviço Certificado',
      description: 'Todos os nossos serviços são realizados conforme as normas técnicas vigentes, garantindo total conformidade com a legislação de segurança contra incêndio.'
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