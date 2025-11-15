import { Testimonial } from '@/app/types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Ótimo atendimento, honesto e de qualidade. Superrrr recomendo. Sucesso!",
    name: "Marcela Barbosa",
    role: "Cliente",
    rating: 5,
    service: "Serviço",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    quote: "Show eu indico e recomendo",
    name: "Eleandro Costa",
    role: "Cliente",
    rating: 5,
    service: "Diagnóstico Técnico",
    avatar: "👨‍💼"
  },
  {
    id: 3,
    quote: "Melhor da Serra",
    name: "Thiago Dias",
    role: "Cliente",
    rating: 5,
    service: "Serviço",
    avatar: "👩‍🎓"
  },
  {
    id: 4,
    quote: "Entrega rápida",
    name: "Vanuzia TOLEDO",
    role: "Cliente Acessórios",
    rating: 5,
    service: "Venda de Acessórios",
    avatar: "👨‍🔧"
  },
  {
    id: 5,
    quote: "Loja honesta e de confiança",
    name: "Mycaela Pereira Silva",
    role: "Cliente",
    rating: 5,
    service: "Serviço",
    avatar: "👩‍🔬"
  },
  {
    id: 6,
    quote: "",
    name: "Talehander Miranda",
    role: "",
    rating: 5,
    service: "",
    avatar: "👨‍🏫"
  },
  {
    id: 6,
    quote: "",
    name: "Loeber Martins",
    role: "",
    rating: 5,
    service: "",
    avatar: "👨‍🏫"
  },
  {
    id: 6,
    quote: "",
    name: "Alessandra Aparecida de Paula",
    role: "",
    rating: 5,
    service: "          ",
    avatar: "👨‍🏫"
  }
];

export const SECTION_CONFIG = {
  title: "Depoimentos Reais",
  subtitle: "A confiança dos nossos clientes é nosso maior orgulho.",
  clientCount: "+100 clientes"
} as const;