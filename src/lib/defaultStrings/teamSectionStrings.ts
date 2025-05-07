import { TeamMember } from '../../components/home/TeamSection';

export interface TeamSectionStrings {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export const teamSectionStrings: TeamSectionStrings = {
  title: "Conheça Nossa Equipe",
  subtitle: "Especialistas em Proteção",
  members: [
    {
      id: 1,
      name: "Roberto Almeida",
      position: "Diretor Técnico",
      image: "img/herobanner.jpg",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      delay: 0.1,
    },
    {
      id: 2,
      name: "Patricia Santos",
      position: "Coordenadora de Inspeções",
      image: "img/herobanner.jpg",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      delay: 0.3,
    },
    {
      id: 3,
      name: "Eduardo Costa",
      position: "Especialista em Treinamento",
      image: "img/herobanner.jpg",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      delay: 0.5,
    },
    {
      id: 4,
      name: "Juliana Ferreira",
      position: "Consultora de Planos",
      image: "img/herobanner.jpg",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      delay: 0.7,
    },
  ]
};