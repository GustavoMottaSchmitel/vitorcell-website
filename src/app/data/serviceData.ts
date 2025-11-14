import { 
  BatteryCharging, Camera, CaseSensitive, CircuitBoard, Code, 
  Headphones, Monitor, Plug, PlugZap, Shield, Smartphone, 
  Square, Volume2 
} from "lucide-react";
import { ServiceCategory, Stat } from '@/app/types/service';

export const categories: ServiceCategory[] = [
  {
    name: "Assistência Técnica & Reparos",
    description: "Diagnóstico preciso e reparos especializados em todos os modelos de smartphones.",
    icon: CircuitBoard,
    gradient: "from-blue-500 to-cyan-500",
    items: [
      { name: "Troca de Tela", icon: Monitor },
      { name: "Troca de Bateria", icon: BatteryCharging },
      { name: "Reparos de Placa", icon: CircuitBoard },
      { name: "Troca de Câmeras", icon: Camera },
      { name: "Troca Conectores de Carga", icon: PlugZap },
      { name: "Software (Otimização e Reparo)", icon: Code },
      { name: "Troca da Tampa Traseira", icon: Square },
    ]
  },
  {
    name: "Produtos & Acessórios",
    description: "Os melhores acessórios e aparelhos novos com garantia e qualidade superior.",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    items: [
      { name: "Aparelhos iPhone e Xiaomi (Venda)", icon: Smartphone },
      { name: "Carregadores (Originais e Anatel)", icon: Plug },
      { name: "Capinhas para iPhone", icon: CaseSensitive },
      { name: "Fones de Ouvido", icon: Headphones },
      { name: "Películas de Vidro 3D", icon: Shield },
      { name: "Películas de Câmera", icon: Camera },
      { name: "Caixas de Som (JBL, FAM, KAIDI)", icon: Volume2 },
    ]
  }
];

export const stats: Stat[] = [
  { value: "100+", label: "Clientes Satisfeitos" },
  { value: "24h", label: "Garantia em Serviços" },
  { value: "+ de 10 anos", label: "No Mercado" },
  { value: "100%", label: "Peças Originais" }
];

export const brands: string[] = ["Apple", "Samsung", "Xiaomi", "Motorola"];

export const SECTION_CONFIG = {
  title: "Serviços & Produtos",
  subtitle: "Soluções completas em reparo e tecnologia. Do diagnóstico preciso aos acessórios premium, tudo com garantia e qualidade excepcional.",
  cta: {
    text: "Solicitar Orçamento",
    responseTime: "Resposta em até 15 minutos • Orçamento gratuito",
    brandsText: "Suporte especializado para as principais marcas do mercado"
  }
} as const;