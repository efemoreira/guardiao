import { Testimonial } from '../../components/home/TestimonialSection';

export interface TestimonialSectionStrings {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  backgroundColor: string;
  quoteIconColor: string;
  activeIndicatorColor: string;
  inactiveIndicatorColor: string;
}

export const testimonialSectionStrings: TestimonialSectionStrings = {
  title: "O Que Nossos Clientes Dizem",
  subtitle: "Depoimentos",
  testimonials: [
    {
      id: 1,
      name: "Roberto Silva",
      position: "Gerente de Manutenção - Empresa",
      image: "img/herobanner.jpg",
      quote: "Contratamos o plano Premium e estamos muito satisfeitos com as inspeções ilimitadas e recargas gratuitas. Os técnicos são muito profissionais e a sinalização completa dos extintores ficou excelente.",
    },
    {
      id: 2,
      name: "Carla Mendonça",
      position: "Síndica - Condomínio Residencial",
      image: "img/herobanner.jpg",
      quote: "O plano Intermediário atendeu perfeitamente às necessidades do nosso condomínio. O desconto nas recargas e a inspeção anual nos dão tranquilidade, sabendo que estamos em dia com a proteção contra incêndio.",
    },
    {
      id: 3,
      name: "Paulo Ribeiro",
      position: "Diretor - Escola Particular",
      image: "img/herobanner.jpg",
      quote: "O treinamento de incêndio que realizaram com nossa equipe foi excelente. Além disso, com o plano de inspeção regular, nossos extintores estão sempre em conformidade com as exigências dos bombeiros.",
    },
    {
      id: 4,
      name: "Fernanda Santos",
      position: "Administradora - Igreja",
      image: "img/herobanner.jpg",
      quote: "Nossa igreja optou pelo plano Essencial e estamos muito satisfeitos. A placa de sinalização nova e os descontos nos serviços foram ótimos benefícios. O atendimento é sempre muito atencioso e pontual.",
    },
  ],
  backgroundColor: "bg-white",
  quoteIconColor: "text-primary/20",
  activeIndicatorColor: "bg-primary",
  inactiveIndicatorColor: "bg-gray-300 hover:bg-gray-400"
};