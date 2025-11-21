import { Product, BatteryColorConfig, BrandGradientConfig, FilterOption, ProductFilter } from '@/app/types/product';
import { Camera, Cpu, Battery, Zap, Sparkles, Smartphone, Shield } from 'lucide-react';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    brand: "Apple",
    price: "R$ 8.999",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Novo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-17pro.png",
    description: "O equilíbrio perfeito entre potência, inteligência e um design que impressiona.",
    features: [
      { icon: Camera, text: "Câmera Fusion Pro 48MP", description: "Fotografia de nível profissional mesmo em baixa luz" },
      { icon: Cpu, text: "Chip A19 Pro", description: "Velocidade absurda para jogos, apps e multitarefas" },
      { icon: Battery, text: "Bateria 4422mAh", description: "Use o dia inteiro sem preocupação" },
      { icon: Zap, text: "Dynamic Island Evoluída", description: "Informações inteligentes sempre ao alcance dos olhos" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 17 Pro - NOVO"
  },

  {
    id: 2,
    name: "iPhone 17",
    brand: "Apple",
    price: "R$ 6.899",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Novo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-17-sage.png",
    description: "Performance, elegância e a nova geração de câmeras em um só dispositivo.",
    features: [
      { icon: Camera, text: "Câmera Fusion Pro 48MP", description: "Fotos e vídeos com nitidez impressionante" },
      { icon: Cpu, text: "Chip A19", description: "Performance rápida e eficiente para o dia a dia" },
      { icon: Battery, text: "Bateria 4380mAh", description: "Autonomia de sobra para acompanhar sua rotina" },
      { icon: Zap, text: "Dynamic Island", description: "A central de informações inteligente da Apple" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 17 - NOVO"
  },

  {
    id: 3,
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    price: "R$ 9.700-10499",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Novo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-17-pro-max.png",
    description: "Tela gigante, bateria impressionante e a melhor câmera já vista em um iPhone.",
    features: [
      { icon: Camera, text: "Câmera Fusion Pro Max 48MP", description: "Zoom poderoso e detalhes absurdos" },
      { icon: Cpu, text: "Chip A19 Pro Max", description: "O processador mais rápido já colocado em um iPhone" },
      { icon: Battery, text: "Bateria 4850mAh", description: "Mais de um dia de uso com tranquilidade" },
      { icon: Zap, text: "Dynamic Island Pro", description: "A experiência mais completa de interação inteligente" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 17 Pro Max - NOVO"
  },

  {
    id: 4,
    name: "Xiaomi 14 X7 Pro",
    brand: "Xiaomi",
    price: "R$ 9.999",
    storage: "Consultar WhatsApp",
    color: "Consultar WhatsApp",
    condition: "Novo",
    batteryHealth: "100%",
    image: "/xiaomi-poco-x7-pro.png",
    description: "Tecnologia de ponta, câmera Leica e desempenho extremo em um só aparelho.",
    features: [
      { icon: Camera, text: "Câmera Leica 50MP", description: "Fotos profissionais com assinatura Leica Authentic" },
      { icon: Cpu, text: "Snapdragon 8 Gen 3", description: "Performance absurda para games e multitarefas" },
      { icon: Battery, text: "Bateria 4880mAh", description: "Carregamento ultrarrápido para nunca ficar na mão" },
      { icon: Sparkles, text: "Tela AMOLED 120Hz", description: "Cores vibrantes e fluidez extrema" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o Xiaomi 14 Pro - NOVO"
  },
  {
    id: 5,
    name: "Redmi Note 14 Pro",
    brand: "Xiaomi",
    price: "R$ 9.999",
    storage: "Consultar WhatsApp",
    color: "Consultar WhatsApp",
    condition: "Novo",
    batteryHealth: "100%",
    image: "/redmi-note-pro.png",
    description: "O intermediário mais poderoso da categoria, com câmera, desempenho e bateria que surpreendem.",
    features: [
      { icon: Camera, text: "Câmera 200MP Ultra Clarity", description: "Fotos com detalhes absurdos e nitidez impressionante" },
      { icon: Cpu, text: "Snapdragon 7s Gen 2", description: "Desempenho rápido e eficiente para jogos e multitarefas" },
      { icon: Battery, text: "Bateria 5100mAh", description: "Autonomia de longa duração com carregamento turbo" },
      { icon: Sparkles, text: "Tela AMOLED 120Hz", description: "Visual fluido com cores vibrantes e pretos profundos" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o Redmi Note 14 Pro - NOVO"
  },
  {
    id: 6,
    name: "iPhone 13",
    brand: "Apple",
    price: "R$ 2649-3299",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Seminovo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-13-1.png",
    description: "O clássico moderno da Apple: rápido, elegante e com câmeras que impressionam até hoje.",
    features: [
      { icon: Camera, text: "Câmera Dupla 12MP", description: "Fotos nítidas com modo retrato e gravação em 4K" },
      { icon: Cpu, text: "Chip A15 Bionic", description: "Desempenho rápido para jogos, apps e multitarefas" },
      { icon: Battery, text: "Bateria 3240mAh", description: "Autonomia para o dia inteiro com eficiência da Apple" },
      { icon: Zap, text: "Tela Super Retina XDR", description: "Cores vibrantes e brilho impressionante em qualquer ambiente" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 13"
  },
  {
    id: 7,
    name: "iPhone 13 Pro",
    brand: "Apple",
    price: "R$ 3200",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Seminovo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-13-pro.png",
    description: "Desempenho profissional, câmeras de cinema e acabamento premium em cada detalhe.",
    features: [
      { icon: Camera, text: "Câmera Tripla 12MP Pro", description: "Modo Cinema, macro e fotos incríveis em qualquer luz" },
      { icon: Cpu, text: "Chip A15 Bionic Pro", description: "Poder para edição, jogos pesados e multitarefa extrema" },
      { icon: Battery, text: "Bateria 3095mAh", description: "Autonomia otimizada com eficiência Apple" },
      { icon: Zap, text: "Tela ProMotion 120Hz", description: "Suavidade absurda e resposta instantânea" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 13 Pro"
  },
  {
    id: 8,
    name: "iPhone 13 Pro Max",
    brand: "Apple",
    price: "R$ 3600-3999",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Seminovo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone 13-pro-max.png",
    description: "A versão máxima do desempenho Pro: tela gigante, bateria poderosa e câmeras profissionais.",
    features: [
      { icon: Camera, text: "Câmera Tripla 12MP Pro Max", description: "Zoom avançado, macro e gravações cinematográficas" },
      { icon: Cpu, text: "Chip A15 Bionic Pro", description: "Desempenho veloz e estável para qualquer tarefa" },
      { icon: Battery, text: "Bateria 4352mAh", description: "Uma das melhores autonomias já vistas em um iPhone" },
      { icon: Zap, text: "Tela ProMotion 120Hz 6.7\"", description: "Experiência visual fluida e imersiva" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 13 Pro Max"
  },
  {
    id: 9,
    name: "iPhone 14",
    brand: "Apple",
    price: "R$ 2799-3899",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Novo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-14.png",
    description: "Simples, rápido e confiável. A evolução do clássico com câmeras ainda mais poderosas.",
    features: [
      { icon: Camera, text: "Câmera Dupla 12MP", description: "Fotografia avançada com modo ação e gravação em 4K" },
      { icon: Cpu, text: "Chip A15 Bionic", description: "Desempenho rápido e eficiente para qualquer rotina" },
      { icon: Battery, text: "Bateria 3279mAh", description: "Autonomia para o dia inteiro sem esforço" },
      { icon: Zap, text: "Tela Super Retina XDR", description: "Brilho, nitidez e cores vibrantes em qualquer ambiente" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 14"
  },
  {
    id: 10,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: "R$ 3799",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Seminovo",
    batteryHealth: "Consultar WhatsApp",
    image: "/iphone-14-pro.png",
    description: "Câmera profissional, performance absurda e a nova Dynamic Island. O Pro mais inteligente.",
    features: [
      { icon: Camera, text: "Câmera Tripla 48MP Pro", description: "Fotos detalhadas, macro impressionante e vídeos cinematográficos" },
      { icon: Cpu, text: "Chip A16 Bionic", description: "Potência extrema para jogos, edições e multitarefas pesadas" },
      { icon: Battery, text: "Bateria 3200mAh", description: "Eficiência e autonomia surpreendentes" },
      { icon: Zap, text: "Dynamic Island", description: "Alertas inteligentes e interações em tempo real" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 14 Pro"
  },
  {
    id: 11,
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    price: "R$ 4299-4499",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Seminovo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-14-pro-max.png",
    description: "A experiência Pro em sua forma máxima: mais tela, mais bateria e a melhor câmera da Apple.",
    features: [
      { icon: Camera, text: "Câmera Tripla 48MP Pro Max", description: "Qualidade absurda com zoom avançado e modo cinema" },
      { icon: Cpu, text: "Chip A16 Bionic", description: "Desempenho poderoso e suave em tudo" },
      { icon: Battery, text: "Bateria 4323mAh", description: "Até dois dias de uso moderado" },
      { icon: Zap, text: "Dynamic Island + Tela 120Hz", description: "Experiência fluida, interativa e imersiva" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 14 Pro Max"
  },
  {
    id: 12,
    name: "iPhone 15",
    brand: "Apple",
    price: "R$ 3499-4299",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Novo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-15.png",
    description: "Design moderno, câmera avançada e USB-C. O iPhone que marcou uma nova geração.",
    features: [
      { icon: Camera, text: "Câmera Dupla 48MP", description: "Fotos super nítidas e gravações de alta qualidade" },
      { icon: Cpu, text: "Chip A16 Bionic", description: "Desempenho rápido, suave e eficiente" },
      { icon: Battery, text: "Bateria 3349mAh", description: "Autonomia otimizada com maior eficiência" },
      { icon: Zap, text: "USB-C + Tela Super Retina XDR", description: "Praticidade e qualidade visual impressionante" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 15"
  },
  {
    id: 13,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: "R$ 4599",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Seminovo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-15-pro.png",
    description: "Construído em titânio, super leve, ultrarrápido e com câmeras profissionais. Um verdadeiro salto de geração.",
    features: [
      { icon: Camera, text: "Câmera Tripla 48MP Pro", description: "Detalhes absurdos, fotos noturnas impecáveis e vídeos cinematográficos" },
      { icon: Cpu, text: "Chip A17 Pro", description: "Um monstro de performance para jogos e apps pesados" },
      { icon: Battery, text: "Bateria 3274mAh", description: "Eficiência surpreendente mesmo com alto desempenho" },
      { icon: Zap, text: "Dynamic Island + Ação em Titânio", description: "Interação inteligente em um corpo premium e leve" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 15 Pro"
  },
  {
    id: 14,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: "R$ 5599",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Seminovo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-15-pro-max.png",
    description: "O topo absoluto da Apple: câmeras profissionais, titânio, bateria incrível e desempenho brutal.",
    features: [
      { icon: Camera, text: "Câmera Tripla 48MP com Zoom 5x", description: "Zoom periscópio poderoso e qualidade profissional" },
      { icon: Cpu, text: "Chip A17 Pro", description: "Rodando jogos AAA com gráficos de console" },
      { icon: Battery, text: "Bateria 4422mAh", description: "Autonomia de destaque entre todos os iPhones" },
      { icon: Zap, text: "Dynamic Island + Tela 120Hz", description: "Experiência extremamente fluida e imersiva" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 15 Pro Max"
  },
  {
    id: 15,
    name: "iPhone 16",
    brand: "Apple",
    price: "R$ 4299-4799",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Novo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-16.png",
    description: "O novo iPhone 16 chega com mais desempenho, câmeras aprimoradas e a nova linha de recursos com inteligência Apple.",
    features: [
      { icon: Camera, text: "Câmera Dupla 48MP", description: "Fotos mais nítidas e modo Retrato ainda melhor" },
      { icon: Cpu, text: "Chip A18", description: "Mais rápido, mais eficiente e preparado para IA" },
      { icon: Battery, text: "Bateria 3577mAh", description: "Ótima autonomia para o dia todo" },
      { icon: Zap, text: "Tela 60Hz Super Retina XDR", description: "Brilho alto e cores impressionantes" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 16"
  },
  {
    id: 16,
    name: "iPhone 16 Pro",
    brand: "Apple",
    price: "R$ 5599-6799",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Novo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-16-pro.png",
    description: "Construído em titânio, veloz como nunca com o novo A18 Pro e câmeras de nível profissional.",
    features: [
      { icon: Camera, text: "Câmera Tripla 48MP", description: "Mais alcance, nitidez e capacidades de fotografia profissional" },
      { icon: Cpu, text: "Chip A18 Pro", description: "Desempenho absurdo com foco em jogos e IA" },
      { icon: Battery, text: "Bateria 3561mAh", description: "Excelente autonomia mesmo com alta performance" },
      { icon: Zap, text: "Tela ProMotion 120Hz", description: "Fluidez máxima e experiência premium" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 16 Pro"
  },
  {
    id: 17,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: "R$ 6699-7699",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Novo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphone-16-pro.png",
    description: "O mais avançado iPhone já feito: câmeras de cinema, o chip mais poderoso da Apple e a maior bateria da linha.",
    features: [
      { icon: Camera, text: "Câmera Tripla 48MP com Zoom 5x", description: "Zoom óptico poderoso e qualidade profissional" },
      { icon: Cpu, text: "Chip A18 Pro", description: "Arquitetura otimizada para IA, jogos e máxima performance" },
      { icon: Battery, text: "Bateria 4676mAh", description: "A melhor autonomia já vista em um iPhone" },
      { icon: Zap, text: "Tela ProMotion 120Hz", description: "Brilho extremo e fluidez de outro nível" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 16 Pro Max"
  },
  {
    id: 18,
    name: "iPhone 17 Air",
    brand: "Apple",
    price: "R$ 6200",
    storage: "Verificar Disponibilidade",
    color: "Verificar Disponibilidade",
    condition: "Novo",
    batteryHealth: "Verificar Disponibilidade",
    image: "/iphoneair.png",
    description: "Leve, moderno e poderoso. O equilíbrio perfeito entre desempenho e portabilidade.",
    features: [
      { icon: Camera, text: "Câmera Fusion 48MP", description: "Fotos nítidas e cores impressionantes" },
      { icon: Cpu, text: "Chip A19", description: "Desempenho avançado com eficiência energética" },
      { icon: Battery, text: "Bateria 4200mAh", description: "Uso o dia todo sem preocupações" },
      { icon: Zap, text: "Dynamic Island", description: "Interações inteligentes e intuitivas" }
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre o iPhone 17 Air - NOVO"
  },
];


export const phoneNumber = "5527996144142";

export const BATTERY_COLORS: BatteryColorConfig = {
  excellent: 'from-green-500 to-emerald-400',
  good: 'from-amber-500 to-orange-400',
  poor: 'from-red-500 to-pink-400'
} as const;

export const BRAND_GRADIENTS: BrandGradientConfig = {
  apple: 'from-blue-500 to-cyan-400',
  xiaomi: 'from-orange-500 to-amber-400'
} as const;

export const getFilterOptions = (products: Product[], currentFilter: ProductFilter) => {
  const conditionOptions: FilterOption[] = [
    {
      key: 'all',
      label: 'Todos',
      count: products.length,
      type: 'condition'
    },
    {
      key: 'new',
      label: 'Novos',
      count: products.filter(p => p.condition === 'Novo').length,
      type: 'condition'
    },
    {
      key: 'used',
      label: 'Seminovos',
      count: products.filter(p => p.condition === 'Seminovo').length,
      type: 'condition'
    }
  ];

  const brandOptions: FilterOption[] = [
    {
      key: 'all',
      label: 'Todas Marcas',
      count: products.length,
      type: 'brand'
    },
    {
      key: 'apple',
      label: 'iPhone',
      count: products.filter(p => p.brand === 'Apple').length,
      type: 'brand'
    },
    {
      key: 'xiaomi',
      label: 'Xiaomi',
      count: products.filter(p => p.brand === 'Xiaomi').length,
      type: 'brand'
    }
  ];

  return { conditionOptions, brandOptions };
};