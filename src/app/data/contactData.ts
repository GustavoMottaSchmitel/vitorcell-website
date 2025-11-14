import { Mail, MapPin, Phone, Clock, Users, Shield, Zap } from 'lucide-react';
import { ContactInfo, Benefit } from '@/app/types/contact';

export const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    text: "Endereço da Loja",
    detail: "R. Humberto de Campos, 307 - Parque Res. Laranjeiras, Serra - ES, 29165-310"
  },
  {
    icon: Phone,
    text: "Telefone e WhatsApp",
    detail: "+55 27 99614-4142"
  },
  {
    icon: Clock,
    text: "Horário de Atendimento",
    detail: "Seg - Sex: 9h às 18h | Sáb: 9h às 13h"
  },
  {
    icon: Mail,
    text: "E-mail para Contato",
    detail: "assistenciavitorcel@gmail.com"
  },
];

export const benefits: Benefit[] = [
  {
    icon: Zap,
    text: "Resposta Rápida",
    description: "Nossa equipe responde rapidamente"
  },
  {
    icon: Shield,
    text: "Orçamento Gratuito",
    description: "Sem custo para avaliação"
  },
    {
    icon: Users,
    text: "Suporte Especializado",
    description: "Técnicos certificados"
  }
];

export const COMPANY_INFO = {
  whatsapp: '5527996144142',
  address: 'R. Humberto de Campos, 307 - Parque Res. Laranjeiras, Serra - ES',
  mapsQuery: 'R.+Humberto+de+Campos,+307,+Serra+-+ES',
  email: 'assistenciavitorcel@gmail.com'
} as const;