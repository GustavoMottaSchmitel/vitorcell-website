import { Product, BatteryColorConfig, BrandGradientConfig, FilterOption, ProductFilter } from '@/app/types/product';
import { Camera, Cpu, Battery, Zap, Sparkles, Smartphone, Shield } from 'lucide-react';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    brand: "Apple",
    price: "R$ 9.999",
    storage: "Consultar WhatsApp",
    color: "Consultar WhatsApp",
    condition: "Novo",
    batteryHealth: "100%",
    image: "/iphone-17-pro-2.png",
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
    price: "R$ 9.999",
    storage: "Consultar WhatsApp",
    color: "Consultar WhatsApp",
    condition: "Seminovo",
    batteryHealth: "Consultar WhatsApp",
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
    price: "R$ 9.999",
    storage: "Consultar WhatsApp",
    color: "Consultar WhatsApp",
    condition: "Novo",
    batteryHealth: "100%",
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
  }
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