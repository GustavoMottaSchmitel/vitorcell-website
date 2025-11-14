import { LucideIcon } from 'lucide-react';

export interface ProductFeature {
  icon: LucideIcon;
  text: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  storage: string;
  color: string;
  condition: "Novo" | "Seminovo";
  batteryHealth: string;
  image: string;
  description: string;
  features: ProductFeature[];
  whatsappMessage: string;
}

export type ProductFilter = 'all' | 'apple' | 'xiaomi';

export interface FilterOption {
  key: ProductFilter;
  label: string;
  count: number;
}

export interface BatteryColorConfig {
  excellent: string;
  good: string;
  poor: string;
}

export interface BrandGradientConfig {
  apple: string;
  xiaomi: string;
}