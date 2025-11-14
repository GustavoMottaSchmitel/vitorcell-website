import { Product, BatteryColorConfig, BrandGradientConfig } from '@/app/types/product';
import { Camera, Cpu, Battery, Zap, Sparkles } from 'lucide-react';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    brand: "Apple",
    price: "R$ 8.999",
    storage: "256GB",
    color: "Titânio Natural",
    condition: "Novo",
    batteryHealth: "100%",
    image: "/iphone-17-pro-nobg.png",
    description: "Poder, inteligência e design. Tudo em um só lugar.",
    features: [
      { icon: Camera, text: "Câmera Fusion Pro de 48 MP", description: "Capture cada detalhe com clareza impressionante" },
      { icon: Cpu, text: "Chip A19 Pro", description: "O processador mais rápido do mercado, sem travamentos" },
      { icon: Battery, text: "Bateria 4422mAh", description: "Bateria que dura o dia inteiro" },
      { icon: Zap, text: "Dynamic Island", description: "Um hub dinâmico de informações, alertas e atividades em tempo real, integrado à interface." }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o iPhone 17 Pro 256GB Titânio Natural"
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: "R$ 4.299",
    storage: "128GB",
    color: "Roxo Profundo",
    condition: "Seminovo",
    batteryHealth: "92%",
    image: "/iphone-17promax.png",
    description: "Estado conservado com mínimo de uso. Funcionalidade 100% original.",
    features: [
      { icon: Camera, text: "Câmera 48MP", description: "Tripla lente" },
      { icon: Cpu, text: "Chip A16 Bionic", description: "Performance elite" },
      { icon: Battery, text: "Bateria 3200mAh", description: "92% saúde" },
      { icon: Sparkles, text: "Dynamic Island", description: "Inovação Apple" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o iPhone 14 Pro 128GB Roxo Profundo"
  },
  {
    id: 3,
    name: "Xiaomi 13T Pro",
    brand: "Xiaomi",
    price: "R$ 2.799",
    storage: "512GB",
    color: "Preto",
    condition: "Novo",
    batteryHealth: "100%",
    image: "/xiaomi-13t-pro.jpg",
    description: "Novo na caixa com garantia completa e todos os acessórios originais.",
    features: [
      { icon: Camera, text: "Câmera 50MP", description: "Leica Optics" },
      { icon: Cpu, text: "Dimensity 9200+", description: "Performance top" },
      { icon: Battery, text: "Bateria 5000mAh", description: "100% saúde" },
      { icon: Zap, text: "120W HyperCharge", description: "Carregamento ultra" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o Xiaomi 13T Pro 512GB Preto"
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 12",
    brand: "Xiaomi",
    price: "R$ 1.199",
    storage: "128GB",
    color: "Azul",
    condition: "Seminovo",
    batteryHealth: "88%",
    image: "/xiaomi-13t-pro.jpg",
    description: "Excelente custo-benefício em perfeito estado de funcionamento.",
    features: [
      { icon: Camera, text: "Câmera 50MP", description: "Tripla câmera" },
      { icon: Cpu, text: "Snapdragon 685", description: "Performance sólida" },
      { icon: Battery, text: "Bateria 5000mAh", description: "88% saúde" },
      { icon: Sparkles, text: "Tela AMOLED", description: "Cores vivas" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o Xiaomi Redmi Note 12 128GB Azul"
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

export const getFilterOptions = (products: Product[]) => [
  { key: 'all' as const, label: 'Todos', count: products.length },
  { key: 'apple' as const, label: 'iPhone', count: products.filter(p => p.brand === 'Apple').length },
  { key: 'xiaomi' as const, label: 'Xiaomi', count: products.filter(p => p.brand === 'Xiaomi').length }
];