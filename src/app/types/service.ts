import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  name: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  items: ServiceItem[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface BrandsCarouselState {
  currentIndex: number;
}