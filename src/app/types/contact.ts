import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  text: string;
  detail: string;
}

export interface Benefit {
  icon: LucideIcon;
  text: string;
  description: string;
}

export type FormStatus = 'idle' | 'loading' | 'success';

export interface ContactFormData {
  name: string;
  phone: string;
  model: string;
  problem: string;
}