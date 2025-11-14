import { BATTERY_COLORS, BRAND_GRADIENTS } from '@/app/data/products';

export const getBatteryColor = (health: string): string => {
  const percentage = parseInt(health);
  if (percentage >= 90) return BATTERY_COLORS.excellent;
  if (percentage >= 80) return BATTERY_COLORS.good;
  return BATTERY_COLORS.poor;
};

export const getBrandGradient = (brand: string): string => {
  return brand === "Apple" ? BRAND_GRADIENTS.apple : BRAND_GRADIENTS.xiaomi;
};

export const getConditionStyles = (condition: "Novo" | "Seminovo") => {
  return condition === "Novo" 
    ? "bg-green-500/20 text-green-400 border border-green-500/30"
    : "bg-amber-500/20 text-amber-400 border border-amber-500/30";
};

export const getWhatsAppUrl = (phoneNumber: string, message: string) => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};