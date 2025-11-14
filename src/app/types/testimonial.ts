export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  rating: number;
  service: string;
  avatar: string;
}

export interface CarouselState {
  currentIndex: number;
  isHovered: boolean;
  visibleCards: number;
}