import { Testimonial } from '@/app/types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Fui muito bem atendida. O Vitor é super transparente, trocou a tela do meu Samsung S20 em menos de duas horas. Serviço nota 10!",
    name: "Laura V.",
    role: "Cliente Samsung S20",
    rating: 5,
    service: "Troca de Tela",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    quote: "Precisava de um laudo para garantia e eles foram rápidos e precisos. A loja é organizada e o serviço tem preço justo. Virei cliente!",
    name: "Marcelo B.",
    role: "Cliente Corporativo",
    rating: 5,
    service: "Diagnóstico Técnico",
    avatar: "👨‍💼"
  },
  {
    id: 3,
    quote: "Meu iPhone 11 estava com problema na bateria, troquei aqui e a durabilidade voltou a ser como nova. O custo-benefício foi excelente.",
    name: "Patrícia R.",
    role: "Cliente iPhone",
    rating: 5,
    service: "Substituição de Bateria",
    avatar: "👩‍🎓"
  },
  {
    id: 4,
    quote: "Achei o carregador Turbo Original que eu precisava. Acessórios de verdade! Profissionais e honestos. Recomendo de olhos fechados.",
    name: "Sérgio M.",
    role: "Cliente Acessórios",
    rating: 5,
    service: "Venda de Acessórios",
    avatar: "👨‍🔧"
  },
  {
    id: 5,
    quote: "Atendimento impecável! Resolveram um problema complexo na placa do meu Poco F3 que outras assistências não conseguiram. Deixei um pouco mais de tempo, mas valeu a espera.",
    name: "Fernanda L.",
    role: "Cliente Técnico",
    rating: 4,
    service: "Reparo em Placa",
    avatar: "👩‍🔬"
  },
  {
    id: 6,
    quote: "Serviço super rápido! Deixei o celular de manhã e peguei no final da tarde. Qualidade e agilidade, não tem igual em Serra.",
    name: "Roberto C.",
    role: "Cliente Regular",
    rating: 5,
    service: "Desoxidação e Limpeza",
    avatar: "👨‍🏫"
  }
];

export const SECTION_CONFIG = {
  title: "Depoimentos Reais",
  subtitle: "A confiança dos nossos clientes é nosso maior orgulho.",
  clientCount: "+100 clientes"
} as const;