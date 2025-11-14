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

// Filtros aninhados: condição + marca
export type ProductCondition = 'all' | 'new' | 'used';
export type ProductBrand = 'all' | 'apple' | 'xiaomi';

export interface ProductFilter {
  condition: ProductCondition;
  brand: ProductBrand;
}

export interface FilterOption {
  key: ProductCondition | ProductBrand;
  label: string;
  count: number;
  type: 'condition' | 'brand';
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